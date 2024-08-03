import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import MyTextField from "./MyTextField";
const TodoItem = ({ item, handleDelete, handleUpdate }) => {
  const [updateFocus, setUpdateFocus] = useState(false);
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      flexWrap="nowrap"
      key={item.uuid}
    >
      <Grid item>
        {updateFocus ? (
          <MyTextField
            defaultVal={item.todo}
            setTodos={(todo) => {
              setUpdateFocus(false);
              handleUpdate({ todo, done: item.done, uuid: item.uuid });
            }}
            isBlur={() => {
              setUpdateFocus(false);
            }}
          />
        ) : (
          <Typography
            sx={{
              width: "100%",
              textDecoration: item.done ? "line-through" : "none",
            }}
          >
            {item.todo}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <Grid container gap={2}>
          <Grid item>
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                handleDelete(item.uuid);
              }}
            >
              X
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setUpdateFocus(true);
              }}
            >
              y
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                handleUpdate({
                  todo: item.todo,
                  done: !item.done,
                  uuid: item.uuid,
                });
              }}
            >
              d
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
