import "./style.css";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`input-input btn1 ${className ? className : ""}`}
      {...props}
    />
  );
};

export default Input;
