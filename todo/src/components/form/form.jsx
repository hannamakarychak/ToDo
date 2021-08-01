import { Fragment, useState } from "react";
import Filters from "../filters/filters";

import Input from "../input/input";
import List from "../list/list";
import "./form.scss";

const Form = () => {
  const [toDos, setToDos] = useState([]);

  const [currentFilter, setCurrentFilter] = useState("all");

  const handleToDoClick = (id) => {
    const newToDoList = toDos.map((el) => {
      if (el.id === id) {
        // return Object.assign({}, el, { isCompleted: !el.isCompleted });
        return {
          ...el,
          isCompleted: !el.isCompleted,
        };
      }
      return el;
    });

    setToDos(newToDoList);
  };

  const handleAdd = (newToDo) => {
    const newToDoList = [
      {
        text: newToDo,
        isCompleted: false,
        id: Date.now(),
      },
      ...toDos,
    ];

    setToDos(newToDoList);
  };

  const handleDestroyClick = (id) => {
    const filteredToDos = toDos.filter((el) => el.id !== id);
    setToDos(filteredToDos);
  };

  const filteredToDos = filterToDos(toDos, currentFilter);

  return (
    <Fragment>
      <div className="form">
        <Input onAdd={handleAdd} />
      </div>
      <List
        toDos={filteredToDos}
        onToDoClick={handleToDoClick}
        onDestroyClick={handleDestroyClick}
      />
      {toDos.length > 0 && (
        <Filters
          totalRemaining={toDos.filter((el) => !el.isCompleted).length}
          onChange={setCurrentFilter}
        />
      )}
    </Fragment>
  );
};

const filterToDos = (allTodos, filter) => {
  if (filter === "all") {
    return allTodos;
  } else if (filter === "active") {
    return allTodos.filter((el) => !el.isCompleted);
  }
  return allTodos.filter((el) => el.isCompleted);
};

export default Form;
