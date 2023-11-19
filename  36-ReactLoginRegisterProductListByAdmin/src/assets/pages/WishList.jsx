import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GrBasket } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import "./WishList.scss";
function WishList() {
  let whislistArr = JSON.parse(localStorage.getItem("wishList")) || [];
  return (
    <div className="cardss">
      <h1>WishList</h1>
      {whislistArr.map((elem) => (
        <Card key={elem.id} className="mycards" style={{ width: "18rem" }}>
          {elem.sale == true ? <span>Sale</span> : <div></div>}

          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPZjg7qdFlUdV-CMKU2sDQ05wsx5IrmyvEw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
            <Card.Text>Price ${elem.price}</Card.Text>
            <Card.Text>StockCount-{elem.stockCount}</Card.Text>
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

export default WishList;
