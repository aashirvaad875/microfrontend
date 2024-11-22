import React, { useState, useEffect } from "react";
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

const ContactPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await fetchData();

        setData(products.products);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <h1>Contact Us</h1>
      <ul>
        {data.map((item: any, index: number) => (
          <li key={index}>{item.title}</li> // Replace "name" with the actual property of your product
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
