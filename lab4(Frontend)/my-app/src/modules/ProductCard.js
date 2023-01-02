import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";

const ProductCard = (props) => {
    /*return(
        <Col md={3}>
            <div className="card" style={{width:150, cursor:"pointer"}} border={"dark"}>
                <img className="card-img-top" src={props.img} alt="Card image cap" style={{resizeMode: "cover", height: 150, width: 150}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="price">{props.price}</p>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <p><button>В Корзину</button></p>
                </div>
            </div>
        </Col>
    )*/
    return (
        <Card>
            <Card.Img variant="top" src={props.model.img} alt="Card image cap" style={{resizeMode: "cover", height: 150, width: 150}} />
            <Card.Body>
                <Card.Title>{props.model.name}</Card.Title>
                <Card.Subtitle>{props.model.price}</Card.Subtitle>
                <Card.Text>
                    {props.model.description}
                </Card.Text>
                <Button variant="primary">В Корзину</Button>
            </Card.Body>
        </Card>
    );
};
export default ProductCard;