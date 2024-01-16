---
title: Feedback & Questions
---

<style>
#feedback-form-success {
  display: none;
}
#feedback-form-error {
  display: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', (event) => {
  const emailField = document.getElementById('feedback-form-email');
  const messageField = document.getElementById('feedback-form-message');

  const validate = (event) => {
    const submitButton = document.getElementById('feedback-form-button');
    if (emailField.value === '' || messageField.value === '') {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  };

  emailField.addEventListener('keyup', validate);
  messageField.addEventListener('keyup', validate);

  var form = document.getElementById('feedback-form');

  async function handleSubmit(event) {
    event.preventDefault();
    var successMsg = document.getElementById('feedback-form-success')
    var errorMsg = document.getElementById('feedback-form-error')
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        successMsg.style.display = 'block'
        form.reset()
        validate()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            document.getElementById('feedback-form-error-details').innerHTML = data['errors'].map(error => error['message']).join(', ')
          } else {
            errorMsg.style.display = 'block'
          }
        })
      }
    }).catch(error => {
      errorMsg.style.display = 'block'
    });
  }

  form.addEventListener('submit', handleSubmit)
});
</script>

I'd love to hear your feedback. Which parts went well for you? Which parts were challenging? What content or lessons would you like to see that aren't there? If you have questions about the rainbow clock, I'll do my best to answer them.

If you purchased a clock on [Etsy](https://www.etsy.com/listing/1656722711/learn-to-code-leds-led-rainbow-clock), feel free to send me a direct message on Etsy.


<form
  id="feedback-form"
  action="https://formspree.io/f/xleqdlpk"
  method="POST"
>
  <label>
    <div>Your email</div>
    <div><input id="feedback-form-email" type="email" name="email"></div>
  </label>
  <label>
    <div>Your message</div>
    <div><textarea id="feedback-form-message" name="message"></textarea></div>
  </label>
  <button id="feedback-form-button" type="submit" disabled>Send</button>
</form>


<blockquote id="feedback-form-success" class="callout" data-callout="success">
  <div class="callout-title">
    <div class="callout-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
    <div class="callout-title-inner"><p>Success!</p></div>
  </div>
  <p>Message sent successfully. Thank you!</p>
</blockquote>

<blockquote id="feedback-form-error" class="callout" data-callout="danger">
  <div class="callout-title">
    <div class="callout-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
    <div class="callout-title-inner"><p>Error</p></div>
  </div>
  <p>There was a problem sending your message.</p>
  <p id="feedback-form-error-details"></p>
</blockquote>
