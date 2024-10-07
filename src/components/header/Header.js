import { Switch } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./Header.css";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <div
      id="header-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <div>{theme === "dark" ? "Dark theme" : "Light theme"}</div>

      <div>
        <Switch
          onChange={handleChange}
          checked={theme === "dark" ? true : false}
        />
      </div>
    </div>
  );
};
