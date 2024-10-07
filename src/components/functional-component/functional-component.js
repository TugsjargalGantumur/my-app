import React, { useEffect } from "react";

export const FunctionalComponent = (props) => {
  const { theme } = props;

  useEffect(() => {
    console.log(`Theme has been changed to ${theme}`);
  }, [theme]);
  return (
    <div>
      <h1>This is functional component</h1>
    </div>
  );
};
