// View of MVC

export const step2 = {
  monthly: [
    { name: "Arcade", priceCents: 900, bonus: "" },
    { name: "Advanced", priceCents: 1200, bonus: "" },
    { name: "Pro", priceCents: 1500, bonus: "" }
  ],

  yearly: [
    { name: "Arcade", priceCents: 9000, bonus: "2 months free" },
    { name: "Advanced", priceCents: 12000, bonus: "2 months free" },
    { name: "Pro", priceCents: 15000, bonus: "2 months free" }
  ],

  isYearly: false,

  renderStep2(plans) {
    let HTML = /* html */ `
    <div class="card">
        <h1>Select your plan</h1>
        <div class="subtitle">You have the option of monthly or yearly billing.</div>
    `;

    let HTML2 = /* html */ `
        Monthly
        <label class="switch"><input type="checkbox" class="js-billing-toggle" ${this.isYearly ? 'checked' : ''}></label>
        Yearly
    </div>
    `;

    plans.forEach((plan, index) => {
      HTML += /* html */ `
            <div><label>
                <input type="radio" name="option" ${index === 0 ? 'checked' : ''}>
                <div>${plan.name}</div>
                <div>$${(plan.priceCents / 100).toFixed(0)}</div>
                <div>${plan.bonus}</div>
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
  }
}