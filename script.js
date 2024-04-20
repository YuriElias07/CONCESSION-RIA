const form = document.querySelector("#form")
const add = document.querySelector("#add")
const marca = document.querySelector("#marca")
const modelo = document.querySelector("#modelo")
const data = document.querySelector("#data")
const valor = document.querySelector("#valor")
const cor = document.querySelector("#cor")
const ar = document.querySelector("#ar")
const botao = document.querySelector("#but")





form.addEventListener("submit", function adicionar(e) {
    e.preventDefault()

    const lista = JSON.parse(localStorage.getItem("lista_carros")) || []
    
    const carro = {
        marca: marca.value,
        modelo: modelo.value,
        cor: cor.value,
        valor: valor.value,
        ar: ar.value
    }

    lista.push(carro)

    localStorage.setItem("lista_carros", JSON.stringify(lista))

    const div_ = document.createElement("div")
    const modelo_ = document.createElement("li")
    const marca_ = document.createElement("li")
    const data_ = document.createElement("li")
    const valor_ = document.createElement("li")
    const cor_ = document.createElement("li")
    const ar_ = document.createElement("li")


    marca_.textContent = `MARCA: ${marca.value.toUpperCase()}`
    modelo_.textContent = `MODELO: ${modelo.value.toUpperCase()}`
    data_.textContent = `ANO: ${data.value}`
    valor_.textContent = `VALOR: R$ ${valor.value},00`
    cor_.textContent = `COR: ${cor.value.toUpperCase()}`

    modelo_.classList.add("modelo")
    add.appendChild(div_)
    div_.classList.add("div_")
    div_.appendChild(modelo_)
    div_.appendChild(marca_)
    div_.appendChild(data_)
    div_.appendChild(valor_)
    div_.appendChild(cor_)


    if(ar.checked){
        ar_.textContent = "AR-CONDICIONADO? SIM"
        div_.appendChild(ar_)
    }else{
        ar_.textContent = "AR-CONDICIONADO? NÃO"
        div_.appendChild(ar_)
    }

    marca.value = ""
    modelo.value = ""
    data.value = ""
    cor.value = ""
    valor.value = ""
    valor.value = ""
    ar.checked = false

    marca.focus()

}
)