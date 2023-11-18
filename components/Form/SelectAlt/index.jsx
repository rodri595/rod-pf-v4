import "./style.css";

const SelectAlt = ({ label, children, ...props }) => {
  return (
    <fieldset className="fieldset--container aic anim">
      {label && <label className="p1">{label}</label>}
      <select {...props} className="fieldset-selectalt  anim">
        <option value="">- - Selecciona - -</option>
        {children}
      </select>
    </fieldset>
  );
};

export default SelectAlt;
