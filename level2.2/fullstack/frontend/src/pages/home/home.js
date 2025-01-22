import React from "react";
import { useUserContext } from "../../context";
import { Button } from "../../components";

export const Home = () => {
  const { loading, currentUser, setCurrentUser } = useUserContext();

  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ margin: 20 }}>
      {currentUser ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {currentUser.user.email}
          <Button onClick={signOut} style={{ width: "100px" }}>
            Sign out
          </Button>
        </div>
      ) : (
        "Guest"
      )}
    </div>
  );
};
