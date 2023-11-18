import { memo, useRef, useState, useCallback } from "react";
import Icon from "../../Icon";
import "./style.css";

const Fieldset = ({ label, className, ...props }) => {
  const [ispasswordVisible, setispasswordVisible] = useState(false);
  const inputRef = useRef(null);
  const passwordHandler = useCallback(() => {
    setispasswordVisible((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.type = ispasswordVisible ? "password" : "text";
    }
  }, [ispasswordVisible]);

  return (
    <fieldset
      className={`fieldset--container aic anim ${className ? className : ""}`}
    >
      {label && <label className="p1">{label}</label>}
      <input {...props} ref={inputRef} className="fieldset--input p1 anim" />
      {props.type === "password" && (
        <>
          {ispasswordVisible ? (
            <Icon
              name={"eye open"}
              role="button"
              onClick={() => passwordHandler()}
              size="20"
              className=" hover anim scale"
            />
          ) : (
            <Icon
              name={"eye close"}
              role="button"
              onClick={() => passwordHandler()}
              size="20"
              className=" hover anim scale"
            />
          )}
        </>
      )}
    </fieldset>
  );
};

export default memo(Fieldset);
