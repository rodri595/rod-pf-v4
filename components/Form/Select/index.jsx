import "./style.css";

const Select = ({ label, children, ...props }) => {
  return (
    <fieldset className="fieldset--container aic anim">
      {label && <label className="p3">{label}</label>}
      <select {...props} className="fieldset-select  anim hover">
        <option value="">- - Selecciona - -</option>
        {children}
      </select>
    </fieldset>
  );
};

export default Select;
