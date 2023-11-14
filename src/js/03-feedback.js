// 03-feedback.js
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageTextarea = form.querySelector('[name="message"]');
const storageKey = 'feedback-form-state';

const saveFormState = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500);

const restoreFormState = () => {
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};

document.addEventListener('DOMContentLoaded', restoreFormState);

form.addEventListener('input', saveFormState);

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';

  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
});
