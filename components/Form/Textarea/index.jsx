import "./style.css";
const Textarea = ({ label, className, ...props }) => {
  return (
    <fieldset
      className={`textarea--container aic anim ${className ? className : ""}`}
    >
      {label && <label className="p3">{label}</label>}
      <textarea {...props} className="textarea--input p1 " rows={5} />
    </fieldset>
  );
};

export default Textarea;
