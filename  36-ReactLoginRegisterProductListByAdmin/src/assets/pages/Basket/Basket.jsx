import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GrBasket } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import "./Basket.scss";
function Basket() {
  let whislistArr = JSON.parse(localStorage.getItem("basket")) || [];
  return (
    <div className="cardss">
      <h1>Basket</h1>
      {whislistArr.map((elem) => (
        <Card
          key={elem.mehsul.id}
          className="mycards"
          style={{ width: "18rem" }}
        >
          {elem.sale == true ? <span>Sale</span> : <div></div>}

          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPZjg7qdFlUdV-CMKU2sDQ05wsx5IrmyvEw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>{elem.mehsul.name}</Card.Title>
            <Card.Text>Price ${elem.mehsul.price}</Card.Text>
            <Card.Text>StockCount-{elem.mehsul.stockCount}</Card.Text>
            <Button variant="primary" onClick={() => handleBasket(elem)}>
              <GrBasket />
            </Button>
            <Button variant="danger" onClick={() => handleFav(elem)}>
              <CiHeart />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Basket;
