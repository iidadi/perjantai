// Controller of MVC

// Imports
import { state } from './data.js';
import { init } from './step1.js';
import { renderPlans } from './step2.js';
import { step3 } from './step3.js';
import { renderStep4 } from "./step4.js";
import { renderStep5 } from "./step5.js";


const theHeader = document.querySelector('.header')
const theFooter = document.querySelector('.footer')
const mainContainer = document.querySelector('.main')

const stepMap = { 1: init, 2: renderPlans, 3: step3, 4: renderStep4, 5: renderStep5 };

// DOMs
document.addEventListener('DOMContentLoaded', () => {
    renderPage();
});

function renderPage() {
    const thisStep = state.currentStep || 1;

    renderHeader(thisStep);
    renderFooter(thisStep);

    const activeModule = stepMap[thisStep];

    if (activeModule) { 
        if (typeof activeModule.init === "function") {
            activeModule.init();
        } else if (typeof activeModule.render === "function") { 
            activeModule.render(mainContainer, state);
        } else if (typeof activeModule === "function") {
            activeModule();
        }
    }
}

function setStep(newStep) {
    state.currentStep = newStep;
    renderPage();
}

// Header
function renderHeader(step) {
    const isStep = step === 5 ? 4 : step;
    const theSteps = [
        { id: 1, text: 'YOUR INFO' },
        { id: 2, text: 'SELECT PLAN' },
        { id: 3, text: 'ADD-ONS' },
        { id: 4, text: 'SUMMARY' }
    ];

    theHeader.innerHTML = `
    <div class="steps">
        ${theSteps.map(s => `
            <div class="step-item">
                <div class="step-num ${s.id === isStep ? 'active' : ''}">${s.id}</div>
                <div class="step-text">
                    <span>Step ${s.id}</span>
                    <b>${s.text}</b>
                </div>
            </div>
        `).join("")}
    </div>
    `;
}

// Footer
function renderFooter(step) {
    const backBtn = step > 1;
    const lastStep = step === 4;

    theFooter.style.display = "flex";

    // Step handling for buttons and display
    if (step === 5) {
        theFooter.innerHTML = "";
        theFooter.style.display = "none";
        return;
    }

    theFooter.innerHTML = `
    ${backBtn ? `<button class="back-btn" id="back-btn">Go Back</button>` : "<div></div>"}
    <button class="confirm-btn ${lastStep ? "btn-confirm" : ""}" id="next-btn">
        ${lastStep ? "Confirm" : "Next Step"}
    </button>
    `;

    theFooter.querySelector("#next-btn").addEventListener('click', () => {
        const activeModule = stepMap[step];
        if (activeModule && typeof activeModule.handleNextStep === "function") {
            const isValid = activeModule.handleNextStep();
            if (isValid) {
                setStep(step + 1);
            }
        } else {
            setStep(step + 1)
        }
    });

    if (backBtn) {
        theFooter.querySelector("#back-btn").addEventListener('click', () => {
            setStep(step - 1);
        })
    }
  init();
});

export function formatCurrency(cents) {
  return (cents / 100).toFixed(0);
}