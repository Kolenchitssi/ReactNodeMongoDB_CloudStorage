import React, { useState } from "react";
import css from "./Authorization.module.scss";
import Input from "../../utils/input/Input.jsx";
import { registration } from "../../action/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={css.authorization}>
      <div className={css.authorization__header}>Регистрация</div>
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
        onClick={() => registration(email, password)}
      >
        Войти
      </button>
    </div>
  );
};

export default Registration;
