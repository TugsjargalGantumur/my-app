import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => (prev < 10 ? prev + 1 : 10));
  };

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${count}`
        );

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 40px",
      }}
    >
      <h1>PostId: {count}</h1>

      <div style={{ display: "flex" }}>
        <button onClick={decrement}>Prev</button>
        <button onClick={increment}>Next</button>
      </div>

      {data.length > 0 &&
        data.map((post, index) => {
          return (
            <div key={index}>
              <h4>{post.email}</h4>
              <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};
