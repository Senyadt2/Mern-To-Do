import axios from "axios";
import React, { useState } from "react";

const api = () => {
  const baseUrl = "https://rikintodo.onrender.com";
  const [data, setData] = useState(null);
  async function fetchData(endpoint) {
    const url = `${baseUrl}${endpoint}`;

    try {
      const response = await axios.get(url);
      //   if (!response.ok) {
      //     throw new Error("Error while fetching");
      //   }
      const data = await response.data;
      setData(data);
      return data;
    } catch (ex) {
      console.log("Error fetching " + ex);
    }
  }
  async function postData(endpoint, task) {
    const url = `${baseUrl}${endpoint}`;
    console.log(`${baseUrl}${endpoint}`);
    try {
      const response = await axios.post(url, task);
      const data = await response.data; //message hunxha
      return data;
    } catch (ex) {
      console.log("Error while posting data" + ex);
    }
  }
  async function deleteData(endpoint, id) {
    const url = `${baseUrl}${endpoint}`;
    try {
      const data = await axios.delete(url);
      return data;
    } catch (err) {
      console.log("Error while deleteing" + err);
    }
  }

  async function editData(endpoint, updated) {}

  return { data, fetchData, postData, deleteData };
};

export default api;
