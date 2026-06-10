// View of MVC

import { state, setPersonalInfo } from './data.js';

export const step1 = {
  renderStep1(state) {
    return `
    <div class="step1-wrapper">
      <div class="card">
        <h1>Personal info</h1>
        <p class="subtitle">Please provide your name, email address, and phone number.</p>
        <form id="step1-form" novalidate>
          <div class="form-group">
            <div class="label-row">
              <label for="name">Name</label>
              <span class="error-msg"></span>
            </div>
            <input type="text" id="name" placeholder="e.g. Stephen King" value="${state.name}">
          </div>
          <div class="form-group">
            <div class="label-row">
              <label for="email">Email Address</label>
              <span class="error-msg"></span>
            </div>
            <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" value="${state.email}">
          </div>
          <div class="form-group">
            <div class="label-row">
              <label for="phone">Phone Number</label>
              <span class="error-msg"></span>
            </div>
            <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" value="${state.phone}">
          </div>
        </form>
      </div>
    </div>
  `;
  },

  showError(input, message) {
    input.classList.add('input-error');
    input.closest('.form-group').querySelector('.error-msg').textContent = message;
  },

  clearError(input) {
    input.classList.remove('input-error');
    input.closest('.form-group').querySelector('.error-msg').textContent = '';
  },

  validateEmail() {
    const input = document.getElementById('email');
    if (input.value.trim() === '') {
      this.showError(input, 'This field is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
      this.showError(input, 'Invalid email address');
      return false;
    }
    this.clearError(input);
    return true;
  },

  validatePhone() {
    const input = document.getElementById('phone');
    if (input.value.trim() === '') {
      this.showError(input, 'This field is required');
      return false;
    }
    this.clearError(input);
    return true;
  },

  validateName() {
    const input = document.getElementById('name');
    if (input.value.trim() === '') {
      this.showError(input, 'This field is required');
      return false;
    }
    this.clearError(input);
    return true;
  },

  handleNextStep() {
    const nameValid = this.validateName();
    const emailValid = this.validateEmail();
    const phoneValid = this.validatePhone();
    if (nameValid && emailValid && phoneValid) {
      setPersonalInfo({
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
      });
      return true;
    } else {
      return false;
    }
  },

  init() {
    document.querySelector('.main').innerHTML = this.renderStep1(state);
  }
}