// Model of MVC

export const state = JSON.parse(localStorage.getItem('formData')) || { name: '', email: '', phone: '' };

export function setPersonalInfo({ name, email, phone }) {
  state.name = name;
  state.email = email;
  state.phone = phone;
  localStorage.setItem('formData', JSON.stringify(state));
}

export function setPlanInfo(planArray) {
  const plan = {
    name: planArray[0],
    price: planArray[1],
    typeformat1: planArray[2],
    typeformat2: planArray[3],
    typeformat3: planArray[4]
  }
  
  localStorage.setItem('currentPlan', JSON.stringify(plan));
}

export function getPlanInfo() {
  return JSON.parse(localStorage.getItem('currentPlan'));
}

export function setAddonsInfo(selectedAddonsArray) {
  localStorage.setItem('currentAddons', JSON.stringify(selectedAddonsArray));
}

export function getAddonsInfo() {
  return JSON.parse(localStorage.getItem('currentAddons')) || [];
}