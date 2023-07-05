import _ from 'lodash';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', _.throttle(onEmailInput, 500));
refs.message.addEventListener('input', _.throttle(onTextareaInput, 500));

const dataValues = {
  email: '',
  message: '',
};
const FORM_STORAGE_KEY = 'feedback-form-state';
populateTextarea();

function onEmailInput(event) {
  dataValues.email = event.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(dataValues));
}

function onTextareaInput(event) {
  dataValues.message = event.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(dataValues));
}

function populateTextarea() {
  const value = localStorage.getItem(FORM_STORAGE_KEY);
  const valuesJSON = JSON.parse(value);
  if (value) {
    refs.email.value = valuesJSON.email;
    dataValues.email = valuesJSON.email;
    refs.message.value = valuesJSON.message;
    dataValues.message = valuesJSON.message;
  }
}

function onFormSubmit(event) {
  console.log(dataValues);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FORM_STORAGE_KEY);
}
