import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Ваше имя" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Ваш email адресс" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Сообщение" required />
      </div>

      <button className="primary__btn-3" type="submit">
        Отправить
      </button>
    </form>
  );
};

export default Form;
