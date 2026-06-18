const passwordWrappers = document.querySelectorAll(".password-wrapper");

passwordWrappers.forEach(function (wrapper) {
  const inputField = wrapper.querySelector("input");
  const toggleEye = wrapper.querySelector(".toggle-password");

  toggleEye.addEventListener("click", function () {
    const currentType =
      inputField.getAttribute("type") === "password" ? "text" : "password";

    inputField.setAttribute("type", currentType);

    if (currentType === "password") {
      this.textContent = "👁️‍🗨️";
    } else {
      this.textContent = "◡";
    }
  });
});


