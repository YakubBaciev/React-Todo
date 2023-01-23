import React from "react";
import styles from "./AddTodo.module.scss";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../../App";

const AddTodo = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [value, setValue] = React.useState("");
  const refInput = React.useRef("");

  const SaveTodo = () => {
    const newArr = [
      ...todos,
      {
        id: uuidv4(),
        title: value,
      },
    ];
    {
      value.length > 0 && setTodos(newArr);
    }
    setValue("");
    refInput.current.focus();
  };
  console.log(todos);
  return (
    <div>
      <div className={styles.root}>
        <input
          ref={refInput}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={styles.input}
          placeholder=" Введите задачу ..."
        />
        <img
          onClick={() => SaveTodo()}
          src="https://cdn-icons-png.flaticon.com/512/1280/1280891.png"
          alt="logo"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AddTodo;
