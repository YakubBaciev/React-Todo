import React from "react";

import "./App.css";
import Header from "./components/Header/index";
import AddTodo from "./components/AddTodo/index";
import TodoList from "./components/TodoList/index";

export const TodosContext = React.createContext("");

function App() {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <Header />
        <AddTodo />
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
