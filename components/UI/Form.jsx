import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import classes from '../../styles/form.module.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9m7omg8', 'template_ujie2lh', form.current, 'hZVi064g3nmkh4Loi').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <form className={`${classes.form}`} onSubmit={sendEmail} ref={form}>
      <div className={`${classes.form__group}`}>
        <input name="name" type="text" placeholder="Ваше имя" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" name="email" placeholder="Ваш email адресс" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" name="message" rows={5} placeholder="Сообщение" required />
      </div>

      <button className="primary__btn-3" type="submit">
        Отправить
      </button>
    </form>
  );
};

export default Form;
