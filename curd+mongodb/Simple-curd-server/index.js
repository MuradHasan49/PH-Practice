const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

//simpleCURD
//KWYPqB5WfZsIvGuA
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors())
app.use(express.json());
const port = 5005;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://simpleCURD:KWYPqB5WfZsIvGuA@cluster0.vc7idbk.mongodb.net/?appName=Cluster0";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        const database = client.db('simpleCURD');
        const PcComponents = database.collection('PcComponents');

        // CUED -> Read Oparation
        app.get("/products", async (req, res) => {
            const cursor = PcComponents.find();
            const results = await cursor.toArray();

            res.send(results);
        })

        // CUED -> Dynamic Read Oparation
        app.get("/products/:id", async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id)
            }
            const result = await PcComponents.findOne(query);
            res.send(result);
        })

        // CUED -> Create Oparation
        app.post("/products", async (req, res) => {
            const newProduct = req.body;
            const result = await PcComponents.insertOne(newProduct);
            res.send(result);
        })

        // CUED -> Update Oparation
        app.patch("/products/:id/edit", async (req, res) => {
            const id = req.params.id
            const updatedProduct = req.body;
            const filter = {
                _id: new ObjectId(id)
            }
            const updateDoc = {
                $set: {
                    name: updatedProduct.name,
                    category: updatedProduct.category,
                    brand: updatedProduct.brand,
                    price: updatedProduct.price
                }
            }
            const result = await PcComponents.updateOne(filter, updateDoc);
            res.send(result);
        })

        // CUED -> Delete Oparation
        app.delete("/products/:id", async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id)
            }
            const result = await PcComponents.deleteOne(query);
            res.send(result);

        })

        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

