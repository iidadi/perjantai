// View of MVC
import { formatCurrency } from "./app.js";
import { getAddonsInfo, getPlanInfo } from "./data.js";

export const step4 = {
  renderStep4() {
    let step4HTML = '';
    let addonsHTML = '';

    const plan = getPlanInfo();
    const addons = getAddonsInfo();

    const planName = plan.name;
    const planPriceCents = plan.price;
    const billingTypeFormat1 = plan.typeformat1;
    const billingTypeFormat2 = plan.typeformat2;
    const billingTypeFormat3 = plan.typeformat3;

    let addonPriceCentsTotal = 0;

    addons.forEach((addon) => {
      const addonName = addon.name;
      const addonPriceCents = addon.price;

      addonPriceCentsTotal += addon.price;

      addonsHTML += `
      <div class="addon-details">
        ${addonName} +$${formatCurrency(addonPriceCents)}/${billingTypeFormat2}
      </div>
      `
    });

    let totalPriceCents = Number(planPriceCents) + addonPriceCentsTotal;

    step4HTML += `
  <div class="step4-wrapper">
    <div class="card">
      <h1>Finishing up</h1>

      <div class="subtitle">
        Double-check everything looks OK before confirming.
      </div>

      <div class="infobox">
        <div class="plan-info">
          <div class="plan-type">
            ${planName} (${billingTypeFormat1})
          </div>
          <a href="" class="plan-change-link">Change</a>
          <div class="plan-cost">
            $${formatCurrency(planPriceCents)}/${billingTypeFormat2}
          </div>
        </div>

        <div class="addons-info"></div>
      </div>

      <div class="order-total-wrapper">
        <div class="order-total">
          Total (per ${billingTypeFormat3})
        </div>
        <div class="order-total-cost">
          +$${formatCurrency(totalPriceCents)}/${billingTypeFormat2}
        </div>
      </div>
    </div>
  </div>
  `;

    document.querySelector('.main')
      .innerHTML = step4HTML;

    document.querySelector('.addons-info')
      .innerHTML = addonsHTML;
  }

}