import React, { useState } from 'react';
import './styles.css';

function Contact() {
  const INICIAL_STATE = { name: '', subject: '', text: '' }
  const [email, setEmail] = useState(INICIAL_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setEmail({
      ...email,
      [name]: value
    })
  }

  const validateFields = () => {
    const { name, subject, text } = email;
    if (name !== '' && subject !== '' && text !== '') return true;
    return false;
  }

  return (
    <div id="contact">
      <p>
        Did you liked my job, have doubts or wanna get in touch for any reason? You can send you
        me an email using the form bellow and I answer it as soon as I can. It will be a pleasure
        to talk to you! Thanks for visiting this page :)
      </p>
      <br />
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Who are you?"
            onChange={handleChange}
            name="name"
            value={ email.name }
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="What is it about?"
            onChange={handleChange}
            name="subject"
            value={ email.subject }
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="How can I help you?"
            onChange={handleChange}
            name="text"
            value={ email.text }
          />
        </div>
        <div className='field'>
          <a
            href={`mailto:lucas.hpaz@outlook.com?subject=${email.subject}&body=${email.text}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="button is-medium is-link" disabled={ !validateFields() }>
              <span className="icon">
                <i class="fas fa-envelope" />
              </span>
              <span>Send</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;