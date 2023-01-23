import React from "react";
import styles from "./TodoList.module.scss";
import { TodosContext } from "../../App";

const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [edit, setEdit] = React.useState(null);
  const [value, setValue] = React.useState("");

  const removeTodo = (id) => {
    const newArr = todos.filter((item) => item.id !== id);
    setTodos(newArr);
  };

  const onClickSave = (id) => {
    const newArr = todos.map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setEdit(null);
  };

  const onClickEdit = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  return (
    <div className={styles.overflow}>
      {todos.map((item, index) => (
        <div key={item.id} className={styles.root}>
          {`${index + 1}) `}
          {edit === item.id ? (
            <input
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <>{item.title}</>
          )}
          {edit === item.id ? (
            <img
              onClick={() => onClickSave(item.id)}
              className={styles.img3}
              src="https://cdn-icons-png.flaticon.com/512/1280/1280891.png"
              alt="logo"
            />
          ) : (
            <>
              <img
                onClick={() => removeTodo(item.id)}
                className={styles.img1}
                src="https://www.nicepng.com/png/detail/362-3620680_delete-icon-png-download-.png"
                alt="logo"
              />
              <img
                onClick={() => onClickEdit(item.id, item.title)}
                className={styles.img2}
                src="https://simg.nicepng.com/png/small/810-8105676_png-file-svg-transparent-background-edit-icons-png.png"
                alt="logo"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
