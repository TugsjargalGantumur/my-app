import React, { useEffect, useState } from "react";
import { Button } from "../../components";

export const Joke = () => {
  const [joke, setJoke] = useState({});

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
        }}
      >
        Random Joke Generator
      </h2>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p>{joke?.setup}</p>
        <p>
          <b>{joke?.punchline}</b>
        </p>
      </div>

      <Button
        onClick={fetchJoke}
        style={{
          marginTop: 0,
        }}
      >
        Get Joke
      </Button>
    </div>
  );
};
