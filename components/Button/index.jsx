import "./style.css";

const Button = ({
  round,
  secondary,
  warning,
  underline,
  ghost,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`button--container anim aic btn1 ${className ? className : ""} 
      ${secondary ? "button-secondary" : ""}
      ${round ? "button-round" : ""}
      ${underline ? "button-underline" : ""}
      ${ghost ? "button-ghost" : ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
