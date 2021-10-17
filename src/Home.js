import React from "react";
import axios from "axios";

export default function Home() {
    function handleResponse(response) {
      alert(`${response.data.name} Welcome to my world 🌍`);
    }
		let apiUrl = `https://jsonplaceholder.typicode.com/users/1`;
		axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Home</h2>;
}