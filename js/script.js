// seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")

// funções
const gettLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
  return Math.floor(Math.random() * 11).toString()
}

const getSymbol = () => {
  const symbols = "(){}[]=<>!@#&*$/.,;+-"
  const randomSymbol = Math.floor(Math.random() * symbols.length)
  return symbols[randomSymbol]
}

//eventos
generatePasswordButton.addEventListener("click", () => {})
