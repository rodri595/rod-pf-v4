import "./style.css";

const Radio = ({ id, className, title, ...props }) => {
  return (
    <label htmlFor={id} className="radiobutton aic anim hover unselectable">
      <input
        className="radiobutton-input"
        id={id}
        type="radio"
        // hidden
        {...props}
      />
      <span className="radiobutton-name">{title}</span>
    </label>
  );
};

export default Radio;
