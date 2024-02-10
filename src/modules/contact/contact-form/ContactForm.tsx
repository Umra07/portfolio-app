import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { db } from '../../../utils/firebase';
import { set, ref } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';

interface ContactFormProps {
  theme: string;
}

export const ContactForm: FC<ContactFormProps> = ({ theme }) => {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    text: '',
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      subject: e.target.value,
    }));
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuidv4();

    set(ref(db, `messages/${id}`), {
      id,
      ...form,
    });

    setForm({
      email: '',
      subject: '',
      text: '',
    });
  };

  return (
    <form className={`form form--${theme}`} onSubmit={(e) => handleFormSubmit(e)}>
      <h2 className="form__heading">Contact me</h2>
      <input
        className="form__input"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={(e) => handleEmailChange(e)}
      />
      <input
        className="form__input"
        type="text"
        placeholder="Enter your subject"
        maxLength={30}
        value={form.subject}
        onChange={(e) => handleSubjectChange(e)}
      />
      <textarea
        className="form__textarea"
        placeholder="Enter your message"
        value={form.text}
        onChange={(e) => handleTextChange(e)}
      />
      <input type="submit" className="form__submit" />
    </form>
  );
};
