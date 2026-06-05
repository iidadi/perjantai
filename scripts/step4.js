// View of MVC

export function renderStep4() {
  let step4HTML = '';

  // ! testing variables !
  let planName = 'Arcade';
  let planCostCents = 9;
  let billingTypeFormat1 = 'Monthly';
  let billingTypeFormat2 = 'mo';
  let billingTypeFormat3 = 'month';
  let totalCostCents = 12;
  // ! testing variables !

  step4HTML += `
  <div class="content-container">
    <div class="step-title">
      Finishing up
    </div>

    <div class="step-subtitle">
      Double-check everything looks OK before confirming.
    </div>

    <div class="infobox">
      <div class="plan-info">
        <div class="plan-type">
          ${planName} (${billingTypeFormat1})
        </div>
        <a href="" class="plan-change-link">Change</a>
        <div class="plan-cost">
          $${planCostCents}/${billingTypeFormat2}
        </div>
      </div>

      <div class="addons-info"></div>
    </div>

    <div class="order-total-wrapper">
      <div class="order-total">
        Total (per ${billingTypeFormat3})
      </div>
      <div class="order-total-cost">
        +$${totalCostCents}/${billingTypeFormat2}
      </div>
    </div>
  </div>
  `;

  document.querySelector('.main')
  .innerHTML = step4HTML;
}