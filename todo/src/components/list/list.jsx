import ListItem from '../list-item/list-item';
import './list.scss';

const List = ({ toDos, onToDoClick }) => {
  return (
    <ul className='list'>
      {toDos.map((toDo) => (
        <ListItem
          text={toDo.text}
          isCompleted={toDo.isCompleted}
          key={toDo.id}
          id={toDo.id}
          onToDoClick={onToDoClick}
        />
      ))}
    </ul>
  );
};

export default List;
