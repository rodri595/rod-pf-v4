import "./style.css";
import Modal from "..";
import { useState } from "react";
import Icon from "../../Icon";
import Button from "../../Button";
import Fieldset from "../../Form/Fieldset";
import { useNavigate } from "react-router-dom";
import { transitionPage } from "../../../utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register_user_express } from "../../../store/Reducers/security/actions";

const ModalCreateAccount = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoadingSecurity, errorSecurity, successSecurity } = useSelector(
    ({ security }) => security
  );
  const [isdataForm, setisdataForm] = useState({
    email: "",
    password: "",
  });
  const onChanged = (e) => {
    setisdataForm({
      ...isdataForm,
      [e.target.name]: e.target.value,
    });
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let response = await register_user_express(dispatch, isdataForm);
    if (response) {
      return transitionPage(navigate, "/login");
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="ModalCreateAccount-container aic anim">
        <div className="ModalCreateAccount-head aic">
          <h4>Crea tu cuenta</h4>

          <Icon
            name="Close"
            onClick={onClose}
            className={`ModalCreateAccount-close ${
              visible ? "star-rotate hover" : "wave hover"
            }`}
          />
        </div>
        <div className="ModalCreateAccount-body-divider" />
        <form className="ModalCreateAccount-body aic" onSubmit={onsubmit}>
          <span className="ModalCreateAccount-extra p1">
            Es rápido y fácil. Necesitas crear una cuenta para continuar.
          </span>
          <Fieldset
            label="Email"
            placeholder="email@email.com"
            type="email"
            required
            onChange={onChanged}
            name="email"
            value={isdataForm.email}
            disabled={isLoadingSecurity}
          />
          <Fieldset
            label="Contraseña"
            placeholder="xxxxxxxxxxxx"
            type="password"
            required
            onChange={onChanged}
            name="password"
            value={isdataForm.password}
            disabled={isLoadingSecurity}
          />

          <Button
            className="ModalCreateAccount-btn"
            round
            disabled={isLoadingSecurity}
          >
            Crear Cuenta <Icon name="arrow right" size="18" />
          </Button>
          {!!!isLoadingSecurity && (
            <span className="ModalCreateAccount-extra p2">
              ¿Ya tienes cuenta?{" "}
              <Link
                to="/login"
                className="underline"
                style={{ fontWeight: "bold" }}
              >
                Inciar sesión
              </Link>
            </span>
          )}
          {!!successSecurity && (
            <span className="message-success">{successSecurity}</span>
          )}
          {!!errorSecurity && (
            <span className="message-error">{errorSecurity}</span>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default ModalCreateAccount;
