import React from "react";

import axios from "host/axiosInstance";

export const fetchData = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

const ContactPage = () => <h1 onClick={fetchData}>Contact Us</h1>;

export default ContactPage;
