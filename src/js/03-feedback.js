import _ from 'lodash';

const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', _.throttle(onFormInput, 500));

let dataValues = {
  email: '',
  message: '',
};
const FORM_STORAGE_KEY = 'feedback-form-state';
const value = localStorage.getItem(FORM_STORAGE_KEY);
const valuesJSON = JSON.parse(value);
populateTextarea();

function onFormInput(event) {
  dataValues[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(dataValues));
}

function populateTextarea() {
  if (value) {
    dataValues = valuesJSON;
    for (let key in dataValues) {
      form.elements[key].value = dataValues[key];
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (dataValues) {
    for (let key in dataValues) {
      dataValues[key] = form.elements[key].value;
    }
    console.log(dataValues);
  }
  dataValues = {
    email: '',
    message: '',
  };
  localStorage.removeItem(FORM_STORAGE_KEY);
  event.currentTarget.reset();
}
