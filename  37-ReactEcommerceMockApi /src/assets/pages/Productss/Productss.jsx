import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { GrBasket } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import "./Productss.scss";

function Productss() {
  const [products, setProducts] = useState([]);
  const [favo, setFavo] = useState([]);
  const [bas, setBas] = useState([]);

  let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  useEffect(() => {
    axios
      .get("https://6556185084b36e3a431f047a.mockapi.io/api/products")
      .then((res) => setProducts(res.data));
  }, []);
  const handleFav = (fav) => {
    if (wishList.find((x) => x.id == fav.id)) {
      alert("Already added Favs!");
    } else {
      const myFav = [...favo, fav];
      setFavo(myFav);

      localStorage.setItem("wishList", JSON.stringify(myFav));
    }
  };

  const handleBasket = (elem) => {
    console.log("salam");
    if (basket.some((x) => x.mehsul.id == elem.id)) {
      basket.forEach((element) => {
        if (element.mehsul.id == elem.id) {
          element.count += 1;
          return;
        }
      });
    } else {
      const myBas = [
        ...bas,
        {
          count: 1,
          mehsul: elem,
        },
      ];
      setBas(myBas);

      localStorage.setItem("basket", JSON.stringify(myBas));
    }
  };
  return (
    <div className="cardss">
      {products.map((elem) => (
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
export default Productss;
