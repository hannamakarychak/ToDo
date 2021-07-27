import ListItem from '../list-item/list-item';
import './list.scss';

const List = ({ toDos, onToDoClick, onDestroyClick }) => {
  return (
    <ul className='list'>
      {toDos.map((toDo) => (
        <ListItem
          text={toDo.text}
          isCompleted={toDo.isCompleted}
          key={toDo.id}
          id={toDo.id}
          onToDoClick={onToDoClick}
          onDestroyClick={onDestroyClick}
        />
      ))}
    </ul>
  );
};

export default List;
