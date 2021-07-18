import ListItem from '../list-item/list-item';
import './list.scss';

const List = ({ toDos }) => {
  return (
    <ul className='list'>
      {toDos.map((toDo) => (
        <ListItem text={toDo.text} isCompleted={toDo.isCompleted} key={toDo.id} />
      ))}
    </ul>
  );
};

export default List;
