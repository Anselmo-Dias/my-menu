window.addEventListener('scroll', onScroll)

function onScroll() {         
  showButtomFloat()
}

function showButtomFloat() {

    if (scrollY >= 200) {
      buttomFloat.classList.add('show')
    } else {
      buttomFloat.classList.remove('show')
    }
  }

//   --------------changeColors--------------

function changeColors() {
  const root = document.documentElement;

  const newBisque500 = "#F4C1A1"; // Tom suave de laranja
  const newBisque100 = "#FFE8D6"; // Tom mais claro de laranja
  const newBisqueLight = "#FFD1AA"; // Tom mais claro ainda de laranja
  const newGreen100 = "#4CAF50"; // Verde brilhante
  const newGreen500 = "#388E3C"; // Verde mais escuro
  const newOrangeLight = "#FFB74D"; // Laranja claro
  const newRed500 = "#E57373"; // Vermelho mais suave
  const newBlue500 = "#4A90E2"; // Azul claro
  const newBlack = "#333333"; // Preto suave

  root.style.setProperty("--bisque-500", newBisque500);
  root.style.setProperty("--bisque-100", newBisque100);
  root.style.setProperty("--bisque-light", newBisqueLight);
  root.style.setProperty("--green-100", newGreen100);
  root.style.setProperty("--green-500", newGreen500);
  root.style.setProperty("--orange-light", newOrangeLight);
  root.style.setProperty("--red-500", newRed500);
  root.style.setProperty("--blue-500", newBlue500);
  root.style.setProperty("--black", newBlack);
}
  