// View of MVC

const monthly = [
    { name: "Arcade", priceCents: 900, bonus: ""},
    { name: "Advanced", priceCents: 1200, bonus: "" },
    { name: "Pro", priceCents: 1500, bonus: "" }
];

const yearly = [
    { name: "Arcade", priceCents: 9000, bonus: "2 months free" },
    { name: "Advanced", priceCents: 12000, bonus: "2 months free" },
    { name: "Pro", priceCents: 15000, bonus: "2 months free" }
];

let isYearly = false;

// Creating all HTML of Step 2
export function renderPlans(plans) {
    let HTML = /* html */ `
        <div>2</div>
        <div>Select your plan</div>
        <div>You have the option of monthly or yearly billing.</div>
    `;

    let HTML2 = /* html */ `
        Monthly
        <label class="switch"><input type="checkbox" class="js-billing-toggle" ${isYearly ? 'checked' : ''}></label>
        Yearly
        <div>
            <button class="js-go-back">Go Back</button>
            <button class="js-next-step">Next Step</button>
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

    document.querySelector('.js-step2').innerHTML = HTML;

    attachEvents();
}

// Changing Plan
function attachEvents() {
    document.querySelector('.js-billing-toggle')
        .addEventListener('change', (event) => {

            isYearly = event.target.checked;

            if (isYearly) {
                renderPlans(yearly);
            }
            else {
                renderPlans(monthly);
            }
        });
}

/*
document.querySelector('.js-go-back')
    .addEventListener('click', () => { Save all to data and Go to Step 1 });
document.querySelector('.js-next-step')
    .addEventListener('click', () => { Save all to data and Go to Step 3 });
*/

// Put this in Next Button from Step 1
renderPlans(monthly);