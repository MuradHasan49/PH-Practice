import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";

const ProduceCard = ({ item }) => {
    const { name, email, role, status } = item;
    return (
        <Card className="border border-separator bg-background m-2">
            <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
            <Card.Header>
                <Card.Title>{name}</Card.Title>
                <Card.Description>
                    {email}
                </Card.Description>
            </Card.Header>
            <Card.Content>
                {role} - {status}
            </Card.Content>
            <Card.Footer>
                <Link
                    href="#"
                >
                    Creator Hub
                    <Link.Icon aria-hidden="true" />
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default ProduceCard