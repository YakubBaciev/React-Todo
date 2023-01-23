import React from "react";
import styles from "./Header.module.scss";
import { TodosContext } from "../../App";

const Header = () => {
  const { todos } = React.useContext(TodosContext);
  return <div className={styles.root}>СПИСОК ЗАДАЧ{` (${todos.length})`}</div>;
};

export default Header;
