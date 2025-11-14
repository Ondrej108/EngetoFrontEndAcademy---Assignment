/**
 * @fileoverview Password validation and registration button functionality.
 * @author Ondřej Medaš
 */

/** @type {HTMLInputElement|null} */
const pass1 = document.getElementById("passForm1");
/** @type {HTMLInputElement|null} */
const pass2 = document.getElementById("passForm2");

/**
 * Validates password fields and applies CSS classes
 * @function validatePassword
 * @returns {void}
 */
const validatePassword = () => {
  if (!pass1 || !pass2) return;

  /**
   * Removes all validation CSS classes from password fields
   * @function resetClasses
   * @returns {void}
   */
  const resetClasses = () => {
    pass1.classList.remove("valid-empty", "valid-red", "valid-green");
    pass2.classList.remove("valid-empty", "valid-red", "valid-green");
  };

  resetClasses();

  if (pass1.value === "" && pass2.value === "") {
    pass1.classList.add("valid-empty");
    pass2.classList.add("valid-empty");
  } else if (pass1.value === pass2.value) {
    pass1.classList.add("valid-green");
    pass2.classList.add("valid-green");
  } else {
    pass1.classList.add("valid-red");
    pass2.classList.add("valid-red");
  }
};

if (pass1 && pass2) {
  /**
   * Adds input event listener to first password field
   * @function
   * @param {Event} event - Input event
   * @returns {void}
   */
  pass1.addEventListener("input", validatePassword);

  /**
   * Adds input event listener to second password field
   * @function
   * @param {Event} event - Input event
   * @returns {void}
   */
  pass2.addEventListener("input", validatePassword);
}

/** @type {HTMLButtonElement|null} */
const regButton = document.getElementById("regBtn");

/**
 * Redirects to main page when button is clicked
 * @function
 * @param {Event} event - Click event
 * @returns {void}
 */
regButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
