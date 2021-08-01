import "./filters.scss";

const Filters = ({ totalRemaining, onChange }) => {
  const total =
    totalRemaining === 1 ? `${totalRemaining} item left` : `${totalRemaining} items left`;

  return (
    <div className="filters">
      <span className="filters__active-count">{total} </span>
      <div className="filters__wrapper">
        <button className="filters__button" name="all" onClick={() => onChange("all")}>
          All
        </button>
        <button className="filters__button" name="active" onClick={() => onChange("active")}>
          Active
        </button>
        <button className="filters__button" name="completed" onClick={() => onChange("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default Filters;
