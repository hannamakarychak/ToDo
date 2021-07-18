import { Fragment, useState } from 'react';

import Input from '../input/input';
import List from '../list/list';
import './form.scss';

const Form = ({ onToDoClick }) => {
  const [toDos, setToDos] = useState([]);

  console.log({ toDos });

  // const handleToDoClick = (isCompleted) => {
  //   setCompleted(!isCompleted);
  // };
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
      <List toDos={toDos}></List>
    </Fragment>
  );
};

export default Form;
