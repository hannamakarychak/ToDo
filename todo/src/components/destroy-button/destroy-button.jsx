import classNames from "classnames";

import "./destroy-button.scss";

const DestroyButton = ({ className, id, onDestroyClick }) => {
  return (
    <button
      className={classNames("destroy-button", className)}
      onClick={() => onDestroyClick(id)}
    />
  );
};

export default DestroyButton;
