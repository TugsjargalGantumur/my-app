import React from "react";
import "./Intro.css";
import { Button } from "../button";

export const Intro = () => {
  return (
    <div id="intro-container">
      <Button size="small" text="small" />
      <Button size="medium" text="medium" />
      <Button size="large" text="large" />
      <Button>
        <span>Normal</span>
      </Button>
    </div>
  );
};
