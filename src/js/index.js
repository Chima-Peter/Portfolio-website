import { FormValidator } from "./validateForm";
import '../css/style.css';

const Start = (function () {
  const btn = document.querySelector('#btn');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email')
  const text = document.querySelector('#text');
  const form = document.querySelector('form');

  // name.focus();
  name.addEventListener('input', () => {
    FormValidator.testName(name);
  })
  email.addEventListener('input', () => {
    FormValidator.testEmail(email);
  })
  text.addEventListener('input', () => {
    FormValidator.testText(text);
  })
  form.addEventListener('submit', (event) => {
    if (FormValidator.testForm(name, email, text) == true) {
      console.log('ok')
    } else {
      event.preventDefault();
    }
  })
})();
Start;