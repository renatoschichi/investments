import React from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="form-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Name:
          <input type="text" {...register('name')} />
        </label>
        <label>
          E-mail:
          <input type="email" {...register('email')} />
        </label>
        <label>
          Message:
          <textarea {...register('message')} />
        </label>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default Form;