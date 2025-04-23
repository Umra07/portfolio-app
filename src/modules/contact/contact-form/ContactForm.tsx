import { ChangeEvent, Component, FormEvent } from 'react';
// import { db } from '../../../utils/firebase';
// import { set, ref } from 'firebase/database';
// import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';

type ContactFormProps = {
  theme: string;
}

type ContactFormState = {
  email: string;
  subject: string;
  text: string;
}

export class ContactForm extends Component<ContactFormProps, ContactFormState> {
  state: ContactFormState = {
    email: "",
    subject: "",
    text: ""
  }

  render() {
    const { theme } = this.props


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState((prevState) => ({
        ...prevState,
        email: e.target.value,
      }));
    };
  
    const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState((prevState) => ({
        ...prevState,
        subject: e.target.value,
      }));
    };
  
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      this.setState((prevState) => ({
        ...prevState,
        text: e.target.value,
      }));
    };
  
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // const id = uuidv4();
  
      // set(ref(db, `messages/${id}`), {
      //   id,
      //   ...form,
      // });
  
        this.setState({
        email: '',
        subject: '',
        text: '',
      });
    };

    return (
      <form role="form" className={`form form--${theme}`} onSubmit={(e) => handleFormSubmit(e)}>
        <h2 className="form__heading">Contact me</h2>
        <input
          className="form__input"
          type="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={(e) => handleEmailChange(e)}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Enter your subject"
          maxLength={30}
          value={this.state.subject}
          onChange={(e) => handleSubjectChange(e)}
        />
        <textarea
          className="form__textarea"
          placeholder="Enter your message"
          value={this.state.text}
          onChange={(e) => handleTextChange(e)}
        />
        <input type="submit" className="form__submit" />
      </form>
    );
  }
};
