// Model of MVC

export const state = JSON.parse(localStorage.getItem('formData')) || { name: '', email: '', phone: '' };

export function setPersonalInfo({ name, email, phone }) {
  state.name = name;
  state.email = email;
  state.phone = phone;
  localStorage.setItem('formData', JSON.stringify(state));
}

