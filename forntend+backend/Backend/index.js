const express = require('express');
const app = express();
const cors = require('cors')
const port = 8004;

const serverData = [
  {
    "id": 1,
    "name": "Murad Hasan",
    "email": "murad@example.com",
    "age": 22,
    "role": "Developer"
  },
  {
    "id": 2,
    "name": "Ayesha Rahman",
    "email": "ayesha@example.com",
    "age": 24,
    "role": "Designer"
  },
  {
    "id": 3,
    "name": "Tanvir Ahmed",
    "email": "tanvir@example.com",
    "age": 25,
    "role": "Backend Developer"
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "email": "nusrat@example.com",
    "age": 21,
    "role": "Frontend Developer"
  },
  {
    "id": 5,
    "name": "Shakil Khan",
    "email": "shakil@example.com",
    "age": 26,
    "role": "Full Stack Developer"
  }
]

app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/users", (req, res) => {
  res.send(serverData);
})

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = serverData.length + 1;
  serverData.push(newUser);

  res.send({ success: true, message: 'User added successfully' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})