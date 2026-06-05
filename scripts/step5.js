// View of MVC

export function renderStep5() {
  let step5HTML = '';

  step5HTML += `
  <div class="content-container">
    <img src="assets/images/icon-thank-you.svg">

    <div class="step-title">
      Thank you!
    </div>

    <div class="step-subtitle">
      Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free
      to email us at support@loremgaming.com.
    </div>
  </div>
  `

  document.querySelector('.main')
    .innerHTML = step5HTML;
}