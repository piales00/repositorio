let numero = document.querySelectorAll(".numero");

console.log(numero);

numero.forEach((contador) => {
  let numeroInicio = 0;
  let numeroFin = parseInt(contador.getAttribute("data-val"));
  let intervalo = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;
  console.log(numeroFin);

  let duracion = Math.floor(intervalo / numeroFin);
  let contador1 = setInterval(function () {
    numeroInicio += 1;
    contador.textContent = numeroInicio;

    if (numeroInicio == numeroFin) {
      clearInterval(contador1);
    }
  }, duracion);
});

(function () {
  const titleQuestions = [...document.querySelectorAll(".questions__title")];
  console.log(titleQuestions);

  titleQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      let height = 0;
      let answer = question.nextElementSibling;
      let addPadding = question.parentElement.parentElement;

      addPadding.classList.toggle("questions__padding--add");
      question.children[0].classList.toggle("questions__arrow--rotate");

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
})();
