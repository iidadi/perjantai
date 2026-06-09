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

  renderPlans(plans) {
    let HTML = /* html */ `
        <div>2</div>
        <div>Select your plan</div>
        <div>You have the option of monthly or yearly billing.</div>
    `;

    let HTML2 = /* html */ `
        Monthly
        <label class="switch"><input type="checkbox" class="js-billing-toggle" ${this.isYearly ? 'checked' : ''}></label>
        Yearly
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
          this.renderPlans(this.yearly);
        }
        else {
          this.renderPlans(this.monthly);
        }
      });
  }
}