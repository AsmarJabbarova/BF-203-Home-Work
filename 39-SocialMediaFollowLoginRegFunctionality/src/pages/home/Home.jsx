import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import "./home.scss";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  let MyUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get("https://6556185084b36e3a431f047a.mockapi.io/api/user")
      .then((res) => setUsers(res.data));
  }, []);
  const sendFriendRequest = (userId) => {
    let req = {
      request: MyUser,
    };
    axios
      .put(
        `https://6556185084b36e3a431f047a.mockapi.io/api/user/${userId}`,
        JSON.stringify(req),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => {
        console.error("Error sending friend request: ", error);
      });
    alert("Send Request");
  };
  return (
    <>
      {MyUser ? (
        <div className="cardss">
          {users.map((item) => (
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>

                {/* {item.request.find((x) => x.name == MyUser.name) ? (
                  <Button
                    variant="danger"
                    onClick={() => cancelFriendRequest(item.id)}
                  >
                    Cancel
                  </Button>
                ) : ( */}
                  <Button
                    variant="primary"
                    onClick={() => sendFriendRequest(item.id)}
                  >
                    Add friends
                  </Button>
                {/* )} */}
                <Button variant="danger">Block</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div>You have to Login</div>
      )}
    </>
  );
}

export default Home;
