import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
const TextFiels = ({ setTodos, defaultVal = "", isBlur = () => {} }) => {
  const [todoText, setTodoText] = useState(defaultVal);
  const [isFocused, setIsFocused] = useState(true);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setTodos(todoText);
        setTodoText("");
      }
    };

    if (isFocused) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused, todoText]);
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      sx={{
        width: "100%",
        boxShadow: isFocused ? "0px 0px 8px 1px yellow" : "none",
      }}
      size="small"
      value={todoText}
      onChange={(e) => {
        setTodoText(e.target.value);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
        isBlur();
      }}
      autoFocus
    />
  );
};

export default TextFiels;
