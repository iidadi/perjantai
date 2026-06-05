// Controller of MVC

// Imports
import { init } from './step1.js';
import { renderStep4 } from "./step4.js";
import { renderStep5 } from "./step5.js";

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export function formatCurrency(cents) {
  return (cents / 100).toFixed(0);
}