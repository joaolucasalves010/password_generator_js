// seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const passwordElement = document.querySelector("#generated-password h4")

// novas funcionalidades
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
)
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#lenght")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")

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

  // segunda versão

  const passwordLenght = +lengthInput.value

  const generators = []

  if (lettersInput.checked) {
    generators.push(gettLetterLowerCase, gettLetterLowerCase)
  }

  if (numbersInput.checked) {
    generators.push(getNumber)
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol)
  }

  if (generators.length === 0) {
    return
  }

  for (i = 0; i < passwordLenght; i += generators.length) {
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
  generatePasswordContainer.classList.toggle("hide")
})

openCloseGeneratorButton.addEventListener("click", () => {
  generatedPassword(
    gettLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  )
})
