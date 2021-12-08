import React, { useState } from "react";
import css from "./Authorization.module.scss";
import Input from "../../utils/input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../action/user.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={css.authorization}>
      <div className={css.authorization__header}>Авторизация</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className={css.authorization__btn}
        onClick={() => dispatch(login(email, password))}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
