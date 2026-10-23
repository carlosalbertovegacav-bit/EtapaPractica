document.addEventListener("DOMContentLoaded", function () {
  const sidenavs = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenavs);

  const selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);

  const carousels = document.querySelectorAll(".carousel");
  M.Carousel.init(carousels, {
    fullWidth: false,
    indicators: true
  });

  const modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  const registroForm = document.getElementById("registroForm");

  if (registroForm) {
    registroForm.addEventListener("submit", function (event) {
      event.preventDefault();

      M.toast({
        html: "Usuario registrado correctamente. !Este es un mensaje de simulación.¡",
        classes: "green darken-2"
      });

      registroForm.reset();

      const selects = document.querySelectorAll("select");
      M.FormSelect.init(selects);
    });
  }

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      M.toast({
        html: "Inicio de sesión validado correctamente¡. !Este es un mensaje de simulación.¡",
        classes: "blue darken-3"
      });
    });
  }

  const btnRecuperar = document.getElementById("btnRecuperar");

  if (btnRecuperar) {
    btnRecuperar.addEventListener("click", function () {
      M.toast({
        html: "Se enviaron las instrucciones de recuperación al correo registrado.",
        classes: "orange darken-2"
      });
    });
  }
});