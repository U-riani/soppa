const submitBotton = document.querySelector(".submit-button ");
// const form = document.querySelector(".form");
const mailInput = document.querySelector(".mail");
let formID = document.querySelector("#form-first-step");
const ifNewUserH4 = document.querySelector(".ask-if-new-user");
const ifNewUserDiv = document.querySelector(".if-new-user");
const createAccountAnchor = document.querySelector(".create-account");
const formTitle = document.querySelector(".form-title");
let mailContainer = "";
let passwordContainer = "";
let verifyButton = "";

class Account {
  form = document.querySelectorAll('.mini-form');
  pageCounter = 0;
  constructor() {
    this.pagesFlow();
  }

  pagesFlow() {
    document.querySelector('.sign-in-container').addEventListener('click', (e) => {
      // console.log(this.firstStep(e));
      // console.log(this.form)
      // this.form.forEach(function(page) {
      //   if(page.getAttribute('class') &&
      //   !page.getAttribute('class').includes('hide')) {
      //     page.classList.add('hide');
      //   }
      // })
      this.firstStep(e);
      this.secondStep(e);
      this.thirdStep(e);

      console.log(this.pageCounter)
    })
  }
  
  firstStep(e) {
    // console.log(e.target)
    if(e.target.getAttribute('class') &&
    e.target.getAttribute('class').includes('create-account first') &&
    this.pageCounter === 0
    ) {
      
      this.form.forEach(function(page) {
        if(page.getAttribute('class') &&
        !page.getAttribute('class').includes('hide')) {
          page.classList.add('hide');
        }
      })
      this.pageCounter++;
      this.form[this.pageCounter].classList.remove('hide');
      
    }
  }

  secondStep(e) {
    if(e.target.getAttribute('class') &&
    e.target.getAttribute('class').includes('second') &&
    this.pageCounter === 1
    ) {
      this.form.forEach(function(page) {
        if(page.getAttribute('class') &&
        !page.getAttribute('class').includes('hide')) {
          page.classList.add('hide');
        }
      })
      this.pageCounter++;
      this.form[this.pageCounter].classList.remove('hide');
      console.log(this.pageCounter)
    }
  }

  thirdStep(e) {
    console.log('third')
    if(e.target.getAttribute('class') &&
    e.target.getAttribute('class').includes('third') &&
    this.pageCounter === 2
    ) {
      this.form.forEach(function(page) {
        if(page.getAttribute('class') &&
        !page.getAttribute('class').includes('hide')) {
          page.classList.add('hide');
        }
      })
      this.pageCounter++;
      console.log('third', this.pageCounter)
      this.form[this.pageCounter].classList.remove('hide');
      console.log(this.pageCounter)
    }
  }
}

  // createNewElem(elemName, ...args) {
  //   const elem = document.createElement(elemName);
  //   args.forEach((arr) => {
  //     elem.setAttribute(arr[0], arr[1]);
  //   });
  //   return elem;
  // }

  // firstPage(e) {
  //   if (form.getAttribute('class').includes("first-step")) {
  //     // Remove old mail input
  //     mailInput.remove();

  //     // Create label for password and new password input
  //     passwordContainer = this.createNewElem("div", [
  //       "class",
  //       "password-container",
  //     ]);

  //     // form.prepend(passwordContainer);
  //     formTitle.after(passwordContainer);

  //     // passwordContainer.classList.add("password-container");
  //     const newPasswordInput = this.createNewElem(
  //       "input",
  //       ["type", "password"],
  //       ["id", "password"],
  //       ["placeholder", "password"],
  //       ["class", "password"]
  //     );
  //     const newPasswordLAbel = this.createNewElem(
  //       "div",
  //       ["class", "label"],
  //       ["for", "password"]
  //     );
  //     newPasswordLAbel.textContent = "Password";

  //     passwordContainer.prepend(newPasswordInput);
  //     passwordContainer.prepend(newPasswordLAbel);

  //     // Create label for mail and new mail input element
  //     mailContainer = this.createNewElem("div", ["class", "mail-container"]);
  //     formTitle.after(mailContainer);

  //     const newMailInput = this.createNewElem(
  //       "input",
  //       ["type", "mail"],
  //       ["class", "mail"],
  //       ["placeholder", "Email Adress"],
  //       ["id", "new-mail"]
  //     );
  //     const newMailLabel = this.createNewElem(
  //       "label",
  //       ["for", "new-mail"],
  //       ["class", "label"]
  //     );

  //     newMailLabel.textContent = "Email Adress";

  //     mailContainer.prepend(newMailInput);
  //     mailContainer.prepend(newMailLabel);

  //     // Change submit bottom text
  //     const submitFormButton = document.querySelector(".submit-button");
  //     submitFormButton.textContent = "Create Account";

  //     // Change form class
  //       form.classList.remove('first-step');
  //       form.classList.add('second-step');

  //     // Change if new user section
  //     ifNewUserH4.textContent = "Already have an account?";

  //     // Remove createAccountAnchor and replace it with 'Sign in'
  //     createAccountAnchor.remove();
  //     const signInAnchor = document.createElement("a");
  //     signInAnchor.textContent = "Sign in";
  //     ifNewUserDiv.append(signInAnchor);
  //   }
  // }

  // signIn() {
  //   document.querySelector(".create-account").addEventListener("click", (e) => {
  //     if(e.target.getAttribute('class') &&
  //       e.target.getAttribute('class').includes('create-account')
  //     ) {
  //     }
  //     this.firstPage(e);
  //     this.secondStep(e);
      
  //     // Form second step
  //   });
  // }

  // secondStep(e) {
  //   if (formID.id === "form-second-step") {
  //     // Change form title and remove password, mail containers
  //     formTitle.textContent = "Verify Your Email";
  //     mailContainer.remove();
  //     passwordContainer.remove();
  //     submitBotton.remove();
  //     ifNewUserDiv.remove();
  
  //     // add sub titles in form
  //     const verifyHtml = `
  //       <h3 class="verify-title">Code Sent!</h3>
  //       <p class="verify-paragraph">We sent a verification <span>Mail</span> enter below</p> 
  //       <input type="text" class="verify-input" placeholder="Code"/>
  //       <button type="submit" class="verify-button">
  //               Verify
  //             </button>
  //       <a href="#" class="edit-mail">Edit Email</a>
  //       `;
  //     formTitle.insertAdjacentHTML("afterend", verifyHtml);
  
  //     // formID.id = "third-step";
  //   }
  // }
// }



// submitBotton.addEventListener("click", function () {
//   if (formID.id === "form-second-step") {
//     // Change form title and remove password, mail containers
//     formTitle.textContent = "Verify Your Email";
//     mailContainer.remove();
//     passwordContainer.remove();
//     submitBotton.remove();
//     ifNewUserDiv.remove();

//     // add sub titles in form
//     const verifyHtml = `
//       <h3 class="verify-title">Code Sent!</h3>
//       <p class="verify-paragraph">We sent a verification <span>Mail</span> enter below</p> 
//       <input type="text" class="verify-input" placeholder="Code"/>
//       <button type="submit" class="verify-button">
//               Verify
//             </button>
//       <a href="#" class="edit-mail">Edit Email</a>
//       `;
//     formTitle.insertAdjacentHTML("afterend", verifyHtml);

//     formID.id = "third-step";
//   }
// });

// form.addEventListener("click", function (e) {
//   if (e.target.className === "verify-button") {
//     document.querySelector(".verify-title").remove();
//     document.querySelector(".verify-paragraph").remove();
//     document.querySelector(".verify-input").remove();
//     document.querySelector(".verify-button").remove();
//     document.querySelector(".edit-mail").remove();

//   formTitle.textContent = "Your Orders";
//     const orderHtml = `
//       <div class="placed-orders-container">
//         <label>0 orders placed in</label>
//         <select>
//           <option>Last 10 days</option>
//           <option>Last 20 days</option>
//           <option>Last 30 days</option>
//           <option>Last 40 days</option>
//           <option>Last 50 days</option>
//         </select>
//       </div>
//       <p class="orders-paragraph">You haven't placed any orders in the period.</p>
//       <button type="submit" class="order-button">Start Shopping</button>
//     `;
//     formTitle.insertAdjacentHTML("afterend", orderHtml);
//   }
// });

const newAccount = new Account();
