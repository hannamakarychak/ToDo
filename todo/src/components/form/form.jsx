import { Fragment, useState } from 'react';

import Input from '../input/input';
import List from '../list/list';
import './form.scss';

const Form = () => {
  const [toDos, setToDos] = useState([]);

  console.log({ toDos });

  const handleToDoClick = (id) => {
    const newToDoList = toDos.map((el) => {
      if (el.id === id) {
        // return Object.assign({}, el, { isCompleted: !el.isCompleted });
        return {
          ...el,
          isCompleted: !el.isCompleted
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
        id: Date.now()
      },
      ...toDos
    ];

    setToDos(newToDoList);
  };

  const handleDestroyClick = (id) => {
    const filteredToDos = toDos.filter((el) => el.id !== id);
    setToDos(filteredToDos);
  };

  return (
    <Fragment>
      <div className='form'>
        <Input onAdd={handleAdd} />
      </div>
      <List toDos={toDos} onToDoClick={handleToDoClick} onDestroyClick={handleDestroyClick}></List>
    </Fragment>
  );
};

export default Form;
