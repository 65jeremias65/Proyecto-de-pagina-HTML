document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById('boton-inicio');
  if (!boton) return;

  boton.style.transition = "transform 0.3s ease";

  boton.addEventListener("mouseover", function () {
    boton.style.transform = "scale(1.1)";
  });

  boton.addEventListener("mouseout", function () {
    boton.style.transform = "scale(1)";
  });
});
