import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Request from "axios-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./pages/Create";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="main">React Crud Operations</h1>
      <ul id="todo-list">
        {JSON.stringify(todos)}
        {/* {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))} */}
      </ul>
    </div>
  );
}

export default App;
