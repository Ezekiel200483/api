
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
const [listOfUsers, setListOfUsers] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
    };

    fetchData();
}, []);

return (
    <div className="user-list-container">
    <h2 className="user-list-header">User List</h2>
    <ul className="user-list">
        {listOfUsers.map((user) => (
        <li key={user.id} className="user-list-item">
            {user.name}
        </li>
        ))}
    </ul>
    </div>
);
};

export default UserList;
