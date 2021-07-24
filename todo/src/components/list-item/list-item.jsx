import classNames from 'classnames';

import './list-item.scss';

const ListItem = ({ isCompleted, text, onChange, id, onToDoClick }) => {
  return (
    <li
      className={classNames('list-item', { 'list-item--completed': isCompleted })}
      // onClick={() => onChange(!isCompleted)}
      onClick={() => onToDoClick(id)}
    >
      <svg
        className='list-item__icon'
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='-10 -18 100 135'
      >
        <circle cx='50' cy='50' r='50' fill='none' stroke='#bddad5' strokeWidth='3' />
        {isCompleted && <path fill='#5dc2af' d='M72 25L42 71 27 56l-4 4 20 20 34-52z' />}
      </svg>
      {text}
    </li>
  );
};
export default ListItem;
