import classNames from "classnames";
import "./filters.scss";

const ALL_FILTERS = ["all", "active", "completed"];

const Filters = ({ totalRemaining, onChange, currentFilter }) => {
  const total =
    totalRemaining === 1 ? `${totalRemaining} item left` : `${totalRemaining} items left`;

  return (
    <div className="filters">
      <span className="filters__active-count">{total} </span>
      <div className="filters__wrapper">
        {ALL_FILTERS.map((filter) => {
          return (
            <button
              className={classNames("filters__button", {
                "filters__button--active": filter === currentFilter,
              })}
              name={filter}
              key={filter}
              onClick={() => onChange(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
