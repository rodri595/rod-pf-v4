import { useEffect, useCallback, memo } from "react";
import "./style.css";

const Modal = ({ className, visible, onClose, children }) => {
  const escFunction = useCallback(
    (e) => {
      if (!visible) return;
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose, visible]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
  return (
    <div
      className={`modal-container anim aic ${
        visible ? "modal-container-visible" : "modal-container-hidden"
      }`}
    >
      <div className="modal-backdrop anim" onClick={() => onClose()} />
      <div className={`modal-body ${className ? className : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default memo(Modal);
