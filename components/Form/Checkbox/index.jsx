import "./style.css";

const Checkbox = ({ className, ...props }) => {
  return (
    <input
      className={`checkbox-input ${className ? className : ""}`}
      type="checkbox"
      {...props}
    />
  );
};

export default Checkbox;
