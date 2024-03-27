// seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const passwordElement = document.querySelector("#generated-password h4")
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

const generatedPassword = (
  gettLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = ""

  const passwordLenght = 10

  const generators = [
    gettLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ]

  for (i = 0; i < passwordLenght; i = i + 4) {
    generators.forEach(() => {
      let randomValue =
        generators[Math.floor(Math.random() * generators.length)]()

      password = password + randomValue
    })
  }
  password = password.slice(0, passwordLenght)

  passwordElement.innerHTML = password
  generatedPasswordElement.style.display = "block"

  return password
}

//eventos
generatePasswordButton.addEventListener("click", () => {
  const password = generatedPassword(
    gettLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  )
})
