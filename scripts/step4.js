// View of MVC
import { formatCurrency } from "./app.js";
import { getPlanInfo } from "./data.js";

export const step4 = {
  renderStep4() {
    let step4HTML = '';
    
    const plan = getPlanInfo();

    const planName = plan.name;
    const planCostCents = plan.price;
    const billingTypeFormat1 = plan.typeformat1;
    const billingTypeFormat2 = plan.typeformat2;
    const billingTypeFormat3 = plan.typeformat3;
    const totalCostCents = 1200;
    
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