import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewUser.css";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="viewuser-container">
      <div className="viewuser-card">
        <h2>User Details</h2>

        <div className="user-details-card">
          <div className="user-details-header">
            Details of user id: {user.id}
          </div>
          <ul className="user-details-list">
            <li>
              <b>Name:</b> {user.name}
            </li>
            <li>
              <b>Username:</b> {user.username}
            </li>
            <li>
              <b>Email:</b> {user.email}
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
