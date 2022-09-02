function validValue(tryValue) {
  const number = +tryValue;

  if (isNumber(number)) {
    if (tryValue.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
      <h2 class="title">Game Over!!!</h2>
      <h3 class="info">Pressione o botão para jogar novamente</h3>
      <button id="play-again" class="btn-play">Jogar novamente</button>
      `;
      document.body.style.backgroundColor = "red";
    } else {
      elementTry.innerHTML += "<div>Valor inválido: não é número</div>";
      return;
    }
  }

  if (numberInRange(number)) {
    elementTry.innerHTML += `<div>Fale um número entre ${lowerValue} e ${highestValue}</div>`;
    return;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2 class="title">Você acertou</h2>
      <h3 class="info">O número secreto era ${secretNumber}</h3>

      <button id="play-again" class="btn-play">Jogar Novamente</button>
    `;
  } else if (number > secretNumber) {
    elementTry.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
  } else {
    elementTry.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  }
}

function numberInRange(number) {
  return number > highestValue || number < lowerValue;
}

function isNumber(number) {
  return Number.isNaN(number);
}

document.body.addEventListener("click", (event) => {
  if (event.target.id == "play-again") {
    window.location.reload();
  }
});
