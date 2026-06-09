// View of MVC

// Array of add-ons (mini JSON go!)
const addons = [
    {
        id: "service",
        name: "Online service",
        description: "Access to multiplayer games",
        price: 1 // $1/mo so integer
    },
    {
        id: "storage",
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: 2 // $2/mo
    },
    {
        id: "profile",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: 2 // $2/mo
    },
]

// Export dynamic HTML (with its functions)
export const step3 = {
    renderStep3(container, state) {

        /* monthly yearly handler (boolean) */
        const isMonthly = state.planSelect?.isMonthly; // state handling for when switch is monthly/yearly
        const calculate = isMonthly ? 1 : 10; // Math it out month = 1$ so year is *10 = 10$
        const per = isMonthly ? "/mo" : "/yr"; // per month or per year state string choice

        /* data mapper for selected options assigned "add" */
        const selectedOptions = state.addon?.map(add => add.id) || [];

        /*function handler*/
        const options = addons.map(add => {
            const isChecked = selectedOptions.includes(add.id);
            const totalPrice = add.price * calculate;

            /* Div construction incl. options (service, storage, profile) */
            return `
                <div class="addon-selection ${isChecked ? 'selected' : ''}" data-id="${add.id}" data-price="${add.totalPrice}">
                    <input type="checkbox" id="check-${add.id}" ${isChecked ? 'checked' : ""}>
                        <div class="addon-description">
                            <h3>${add.name}</h3>
                            <p>${add.description}</p>
                        </div>
                    <div class="addon-price">+$${totalPrice}${per}</div>
                </div>
        `;
        }).join("");

        /* Container */
        container.innerHTML = `
        <div class="card">
            <h1>Pick add-ons</h1>
            <p class="subtitle">Add-ons help enhance your gaming experience.</p>
            <div class="addons">
                ${options} <!-- Calling options into the form container -->
            </div>
        </div>
        `;

        /* CSS function for the checkbox */
        container.querySelectorAll('.addon-selection').forEach(selection => {
            selection.addEventListener("click", (e) => {
                const checkbox = selection.querySelector('input[type="checkbox"]');
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
                selection.classList.toggle('selected', checkbox.checked);
            });
        });
    },

    /* Save choices in a array and push */
    save(container) {
        const selectedAddOns = [];

        /* Stored data in variables for usage */
        container.querySelectorAll('.addon-selection.selected').forEach(selecion => {
            const id = selection.dataset.id;
            const addonData = addons.find(item => item.id === id);

            /* mini json id, name, and price "package" */
            selectedAddOns.push({
                id: addonData.id,
                name: addonData.name,
                price: parseInt(selection.dataset.price)
            });
        });

        return selectedAddOns;
    }
}