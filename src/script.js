const getContent = document.getElementsByClassName("content")[0];
const getAreaValor = document.getElementsByClassName("valor-area")[0];
const getButton = document.getElementsByClassName("bt-convertor")[0];
const getInput = document.getElementsByClassName("input-coin")[0];
const valorCatCoin = 3;
console.log(getAreaValor)

getButton.onclick = () => {
  const valorInput = getInput.value;
  let calculo = valorInput * valorCatCoin;

  getAreaValor.innerText = `Você tem: ${calculo.toFixed(2)} Catcoins`
};