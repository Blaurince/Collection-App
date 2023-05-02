import { Col, Card, Image } from "react-bootstrap";

export default function Panel ({ data: {id, name, cover, about, website}})
 
return(
    <Col Key={id} sm={10} md={4} lg={4}>
    <Card className="p-3">
    <figure>
    <Image src={cover} fluid />
    </figure>
    <div>
    <h3>{id}</h3>
    <p>{about}</p>
    </div>
    {id}
    </Card>
    </Col>
)