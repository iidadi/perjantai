// View of MVC

export function renderStep5() {
  let step5HTML = '';

  step5HTML += `
  <div class="step5-wrapper">
    <div class="card">
      <img src="assets/images/icon-thank-you.svg">

      <h1>Thank you!</h1>

      <div class="subtitle">
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </div>
    </div>
  </div>
  `

  document.querySelector('.main')
    .innerHTML = step5HTML;
}