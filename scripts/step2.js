// View of MVC

import { renderAside } from './app.js';
import { setPlanInfo } from './data.js'

export const step2 = {
  monthly: [
    { name: "Arcade", priceCents: 900, bonus: "", pic: "./assets/images/icon-arcade.svg" },
    { name: "Advanced", priceCents: 1200, bonus: "", pic: "./assets/images/icon-advanced.svg" },
    { name: "Pro", priceCents: 1500, bonus: "", pic: "./assets/images/icon-pro.svg" }
  ],

  yearly: [
    { name: "Arcade", priceCents: 9000, bonus: "2 months free", pic: "./assets/images/icon-arcade.svg" },
    { name: "Advanced", priceCents: 12000, bonus: "2 months free", pic: "./assets/images/icon-advanced.svg" },
    { name: "Pro", priceCents: 15000, bonus: "2 months free", pic: "./assets/images/icon-pro.svg" }
  ],

  isYearly: false,

  renderStep2(plans) {
    let HTML = /* html */ `
      <div class="card">
        <div class="aside">
          ${renderAside(2)}
        </div>
        <div class="bside">
          <h1>Select your plan</h1>
          <div class="subtitle">You have the option of monthly or yearly billing.</div>
          <div class="plan-placeholder">
    `;

    let HTML2 = /* html */ `
          </div>
          <div class="switch-place">
            <span class="${!this.isYearly ? 'active-text' : 'inactive-text'}">Monthly</span>
            <label class="switch"><input type="checkbox" class="js-billing-toggle" ${this.isYearly ? 'checked' : ''}><span class="slider"></span></label>
            <span class="${this.isYearly ? 'active-text' : 'inactive-text'}">Yearly</span>
          </div>
        </div>
      </div>
    `;

    plans.forEach((plan, index) => {
      HTML += /* html */ `
            <div class="plan"><label>
              <input type="radio" name="option" value="${plan.name} ${plan.priceCents} ${this.isYearly ? 'Yearly yr year' : 'Monthly mo month'}" ${index === 0 ? 'checked' : ''}>
              <div class="plan-pic"><img class="plan-img" src="${plan.pic}"></div>
              <div class="plan-text">
                <div class="plan-text-name">${plan.name}</div>
                <div class="plan-text-price">$${(plan.priceCents / 100).toFixed(0)}${this.isYearly ? '/yr' : '/mo'}</div>
                <div class="plan-text-bonus">${plan.bonus}</div>
              </div>
            </label></div>
        `;
    });

    HTML += HTML2;

    document.querySelector('.main').innerHTML = HTML;

    this.attachEvents();
  },

  attachEvents() {
    document.querySelector('.js-billing-toggle')
      .addEventListener('change', (event) => {

        this.isYearly = event.target.checked;

        if (this.isYearly) {
          this.renderStep2(this.yearly);
        }
        else {
          this.renderStep2(this.monthly);
        }
      });
  },

  saveSelectedPlan() {
    const selectedPlan = document.querySelector('input[name="option"]:checked').value;
    const selectedPlanArray = selectedPlan.split(" ")

    setPlanInfo(selectedPlanArray);
  }
}