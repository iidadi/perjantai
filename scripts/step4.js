// View of MVC
import { formatCurrency } from "./app.js";

export const step4 = {
  renderStep4() {
    let step4HTML = '';

    // ! testing variables !
    let planName = 'Arcade';
    let planCostCents = 900;
    let billingTypeFormat1 = 'Monthly';
    let billingTypeFormat2 = 'mo';
    let billingTypeFormat3 = 'month';
    let totalCostCents = 1200;
    // ! testing variables !

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
            $${formatCurrency(planCostCents)}/${billingTypeFormat2}
          </div>
        </div>

        <div class="addons-info"></div>
      </div>

      <div class="order-total-wrapper">
        <div class="order-total">
          Total (per ${billingTypeFormat3})
        </div>
        <div class="order-total-cost">
          +$${formatCurrency(totalCostCents)}/${billingTypeFormat2}
        </div>
      </div>
    </div>
  </div>
  `;

    document.querySelector('.main')
      .innerHTML = step4HTML;
  }
}