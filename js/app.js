let count = 0
let client
let address
let contact
const enterApp = () => {
  const boxScreen = document.querySelector(".box-login")
  const inputUserName = document.querySelector("#userName").value
  const inputUserPassword = document.querySelector("#passwordKey").value
  const contactTel = document.querySelector("#contact").value
  const screenContent = document.querySelector(".box-app")

  client = inputUserName
  address = inputUserPassword
  contact = contactTel

  if (inputUserName !== "rafasimas" && inputUserPassword !== "") {
    boxScreen.classList.add("displayHidden")
    screenContent.classList.remove("displayHidden")
  } else {
    alert("Preencha os campos")
  }
}

let dishUser
let dishPrice

let drinkUser
let drinkPrice

let dessertUser
let dessertPrice

const selectOptionDish = (classBtn, nameDish, price) => {
  const seletor = document.querySelector(".dish .selected")
  dishUser = nameDish
  dishPrice = price

  if (seletor !== null) {
    seletor.classList.remove("selected")
  }
  const btn = document.querySelector(classBtn)
  btn.classList.add("selected")
  count++
  refreshScreenCount()
  verifyCount()
}

const selectOptionDrink = (classBtn, nameDrink, price) => {
  const seletor = document.querySelector(".drink .selected")

  drinkUser = nameDrink
  drinkPrice = price

  if (seletor !== null) {
    seletor.classList.remove("selected")
  }
  const btn = document.querySelector(classBtn)
  btn.classList.add("selected")
  count++
  refreshScreenCount()
  verifyCount()
}

const selectOptionDessert = (classBtn, nameDrink, price) => {
  const seletor = document.querySelector(".dessert .selected")
  dessertUser = nameDrink
  dessertPrice = price

  if (seletor !== null) {
    seletor.classList.remove("selected")
  }
  const btn = document.querySelector(classBtn)
  btn.classList.add("selected")
  count++
  refreshScreenCount()
  verifyCount()
}

const verifyCount = () => {
  if (count == "3") {
    finishOrder()
  }
}

const refreshScreenCount = () => {
  const notification = document.querySelector(".numberCount")
  notification.innerHTML = count
  console.log(typeof notification)
}

const finishOrder = () => {
  const btn = document.querySelector(".btn")
  btn.classList.add("selected")
  btn.innerHTML = "Fazer Pedido"
}

const openDrawer = () => {
  resume()
}

const resume = () => {
  const toggleOrder = document.querySelector(".toggle-order ")
  toggleOrder.classList.remove("displayHidden")
  const element = document.querySelector(".box-resume-order")
  element.innerHTML += `
      <div class="resume-order poppins-light">
            <div class="nameClient">${client}</div>
            <div class="address">${address}</div>
            <div class="resumeDish">${dishUser}</div>
            <div class="resumeDrink">${drinkUser}</div>
            <div class="resumeDessert">${dessertUser}</div>
            <a href="#" class="btnBuy" onclick="buy()">Pronto</button>
          </div>
  `
}

const buy = () => {
  const btn = document.querySelector(".btnBuy")
  const precoTotal = dishPrice + drinkPrice + dessertPrice
  const mensagem =
    "Olá, Meu nome é " +
    client +
    " eu gostaria de fazer o pedido para o endereço" +
    address +
    ":\n- Prato: " +
    dishUser +
    "\n Bebida: " +
    drinkUser +
    "\n Sobremesa: " +
    dessertUser +
    "\n Total: " +
    precoTotal.toFixed(2) +
    " "
  const mensagemFormatada = encodeURIComponent(mensagem)
  const url = "https://wa.me/55" + contact + "?text=" + mensagemFormatada
  btn.setAttribute("href", url)
}
