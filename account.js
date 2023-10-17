const submitBotton = document.querySelector(".submit-button ");
const form = document.querySelector(".form");
const mailInput = document.querySelector(".mail");
let formID = document.querySelector("#form-first-step");
const ifNewUserH4 = document.querySelector(".ask-if-new-user");
const ifNewUserDiv = document.querySelector(".if-new-user");
const createAccountAnchor = document.querySelector(".create-account");
const formTitle = document.querySelector(".form-title");
let mailContainer = "";
let passwordContainer = "";
let verifyButton = '';

document
  .querySelector(".create-account")
  .addEventListener("click", function () {
    if (formID.id === "form-first-step") {
      // Remove old mail input
      mailInput.remove();
      // Create label for password and new password input
      passwordContainer = document.createElement("div");
      // form.prepend(passwordContainer);
      formTitle.after(passwordContainer);

      passwordContainer.classList.add("password-container");
      const newPasswordInput = document.createElement("input");
      const newPasswordLAbel = document.createElement("label");
      newPasswordLAbel.textContent = "Password";
      newPasswordLAbel.setAttribute("for", "password");
      newPasswordLAbel.classList.add("label");
      newPasswordInput.setAttribute("type", "password");
      newPasswordInput.setAttribute("id", "password");
      newPasswordInput.setAttribute("placeholder", "password");

      passwordContainer.prepend(newPasswordInput);
      passwordContainer.prepend(newPasswordLAbel);

      newPasswordInput.classList.add("mail");

      // Create label for mail and new mail input element
      mailContainer = document.createElement("div");
      formTitle.after(mailContainer);
      mailContainer.classList.add("mail-container");
      const newMailInput = document.createElement("input");
      newMailInput.setAttribute("type", "mail");
      newMailInput.classList.add("mail");
      newMailInput.setAttribute("placeholder", "Email Adress");
      newMailInput.setAttribute("id", "new-mail");
      const newMailLabel = document.createElement("laebl");
      newMailLabel.setAttribute("for", "new-mail");
      newMailLabel.classList.add("label");
      newMailLabel.textContent = "Email Adress";

      mailContainer.prepend(newMailInput);
      mailContainer.prepend(newMailLabel);

      // Change sybmit bottom text
      const submitFormButton = document.querySelector(".submit-button");
      submitFormButton.textContent = "Create Account";

      // Change form id and
      formID.id = "form-second-step";

      // Change if new user section
      ifNewUserH4.textContent = "Already have an account?";

      // Remove createAccountAnchor and replace it with 'Sign in'
      createAccountAnchor.remove();
      const signInAnchor = document.createElement("a");
      signInAnchor.textContent = "Sign in";
      ifNewUserDiv.append(signInAnchor);
    }

    // Form second step
  });

submitBotton.addEventListener("click", function () {
  if (formID.id === "form-second-step") {
    // Change form title and remove password, mail containers
    formTitle.textContent = "Verify Your Email";
    mailContainer.remove();
    passwordContainer.remove();
    submitBotton.remove();
    ifNewUserDiv.remove();

    // add sub titles in form
    const verifyHtml = `
      <h3 class="verify-title">Code Sent!</h3>
      <p class="verify-paragraph">We sent a verification <span>Mail</span> enter below</p> 
      <input type="text" class="verify-input" placeholder="Code"/>
      <button type="submit" class="verify-button">
              Verify
            </button>
      <a href="#" class="edit-mail">Edit Email</a>
      `;
    formTitle.insertAdjacentHTML("afterend", verifyHtml);
  
    formID.id = 'third-step';
  }
});


form.addEventListener('click', function(e) {
  if(e.target.className === "verify-button") {
    document.querySelector('.verify-title').remove();
    document.querySelector('.verify-paragraph').remove();
    document.querySelector('.verify-input').remove();
    document.querySelector('.verify-button').remove();
    document.querySelector('.edit-mail').remove();
    

    formTitle.textContent = "Your Orders";
    const orderHtml = `
      <div class="placed-orders-container">
        <label>0 orders placed in</label>
        <select>
          <option>Last 10 days</option>
          <option>Last 20 days</option>
          <option>Last 30 days</option>
          <option>Last 40 days</option>
          <option>Last 50 days</option>
        </select>
      </div>
      <p class="orders-paragraph">You haven't placed any orders in the period.</p>
      <button type="submit" class="order-button">Start Shopping</button>
    `
    formTitle.insertAdjacentHTML('afterend', orderHtml)

  }
})




