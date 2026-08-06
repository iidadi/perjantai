// View of MVC
import { renderAside } from "./app.js";
import { getPlanInfo, getAddonsInfo, setAddonsInfo } from "./data.js";

// Array of add-ons (mini JSON go!)
const addons = [
  {
    id: "service",
    name: "Online service",
    description: "Access to multiplayer games",
    price: 100,
  },
  {
    id: "storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 200,
  },
  {
    id: "profile",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 200,
  },
];

// Export dynamic HTML with functions
export const step3 = {
  renderStep3(container) {
    // Monthly/Yearly handlers (format and price)
    function isMonthly() {
      if (getPlanInfo().typeformat2 === "mo") {
        return true;
      } else {
        return false;
      }
    }
    const calculate = isMonthly() ? 1 : 10;
    const per = isMonthly() ? "/mo" : "/yr";

    const savedAddons = getAddonsInfo();

    // 3 divs for add-ons (serv. stor. and custom.) .join(ed)
    const options = addons
      .map((add) => {
        const totalPrice = add.price * calculate;

        // persist choice from localstorage
        const isChecked = savedAddons.some((saved) => saved.name === add.name);

        return `
                <div class="addon-card ${isChecked ? "selected" : ""}" data-id="${add.id}">
                    <input 
                    type="checkbox" 
                    name="addon-option" 
                    value="${add.name}|${totalPrice}"
                    ${isChecked ? "checked" : ""}>
                        <div class="addon-description">
                            <h3>${add.name}</h3>
                            <p>${add.description}</p>
                        </div>
                    <div class="addon-price">+$${totalPrice}${per}</div>
                </div>
        `;
      })
      .join("");

    // Container for the div add-on options
    container.innerHTML = `
        <div class="card">
            <div class="aside">
                ${renderAside(3)}
            </div>
            <div class="bside">
                <h1>Pick add-ons</h1>
                <p class="subtitle">Add-ons help enhance your gaming experience.</p>
                <div class="addons">
                    ${options}
                </div>
            </div>
        </div>
        `;

    this.attachEvents(container);
  },
  attachEvents(container) {
    const addonContainer = container.querySelector(".addons");

    addonContainer.addEventListener("change", (event) => {
      if (event.target.matches('input[name="addon-option"]')) {
        const card = event.target.closest(".addon-card");
        if (card) {
          card.classList.toggle("selected", event.target.checked);
        }

        this.addonsSelected();
      }
    });
  },

  // Method for :checked addons
  addonsSelected() {
    const checkedInputs = Array.from(
      document.querySelectorAll('input[name="addon-option"]:checked'),
    );

    const selectedAddons = checkedInputs.map((input) => {
      const [name, price] = input.value.split("|");
      return { name, price: Number(price) };
    });

    setAddonsInfo(selectedAddons);
  },
};
