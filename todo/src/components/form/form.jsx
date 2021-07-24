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

    console.log({ newToDoList });

    setToDos(newToDoList);
  };

  return (
    <Fragment>
      <div className='form'>
        <Input onAdd={handleAdd} />
      </div>
      <List toDos={toDos} onToDoClick={handleToDoClick}></List>
    </Fragment>
  );
};

export default Form;
