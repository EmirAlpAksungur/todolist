import { useState } from 'react'
import MyTextField from "./component/MyTextField"
import TodoItem from './component/TodoItem';
import { Grid } from "@mui/material"
import { uuidv4 } from './utils/uuidGenerator';
function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (todo) => {
    setTodos((prev) => {
      return [...prev, { todo, done: false, uuid: uuidv4() }];
    });
  }

  const handleUpdate = (todo) => {
    setTodos((prev) => {
      return prev.map(e => {
        if (todo.uuid === e.uuid) {
          return todo
        }
        return e
      })
    });
  }


  const handleDelete = (uuid) => {
    setTodos((prev) => {
      return prev.filter(e => e.uuid !== uuid)
    });
  }

  return (
    <Grid container gap={3} justifyContent="center" sx={{
      border: "1px solid black",
      width: "700px",
      margin: "auto",
      mt: 2,
      p: 4,
      borderRadius: "8px"

    }}>
      <Grid item xs={12} sx={{
        textAlign: "center",
        fontSize: "48px"
      }}>
        TODO LİST
      </Grid>
      <Grid item xs={12}>
        <MyTextField setTodos={handleCreate} />
      </Grid>
      <Grid item xs={12}>
        <Grid container gap={1}>
          {todos.map((e, i) => (<TodoItem item={e} handleDelete={handleDelete} handleUpdate={handleUpdate} />))}
        </Grid>
      </Grid>
    </Grid >
  );
}

export default App;
