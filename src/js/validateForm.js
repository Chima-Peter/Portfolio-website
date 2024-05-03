export const FormValidator = (function () {
  const ferror = document.querySelector('#nerror');
  const error = document.querySelector('#error');
  const terror = document.querySelector('#terror');

  const testName = (fname) => {
    if (fname.value.length == 0) {
      fname.id = 'invalid';
      ferror.textContent = 'Please fill in this field'
    } else {
      fname.id = 'valid';
      ferror.textContent = '';
      return true;
    };
  }
  const testEmail = (email) => {
    if (email.value.length == 0) {
      email.id = 'invalid';
      error.textContent = 'Please fill in this field'
    } else {
      email.id = 'valid';
      error.textContent = '';
      return true;
    };
  }
  const testText = (text) => {
    if (text.value.length == 0) {
      text.id = 'invalid';
      terror.textContent = 'Please fill in this field'
    } else {
      text.id = 'valid';
      terror.textContent = '';
      return true;
    };
  }
  const testForm = (name, email, text) => {
    if (testName(name) !== true) {
      return false;
    } else if (testEmail(email) !== true) {
      return false;
    } else if (testText(text) !== true) {
      return false;
    };
    return true;
  }
  const checkError = (name, e) => {
    if (name.validity.valueMissing) {
      name.id = 'invalid';
      e.textContent = 'Please fill in this field';
    }
  };
  const checkEmailError =  () => {
    if (email.validity.valueMissing) {
      email.id = 'invalid';
      error.textContent = 'Please fill in this field';
    } else if (email.validity.typeMismatch) {
      email.id = 'invalid';
      error.textContent = "Doesn't match format of an email address";
    }
  };
  return { testName, testEmail, testText, testForm };
})();