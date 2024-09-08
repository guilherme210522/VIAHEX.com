let onFly = false
const flyElement = document.getElementById("fly")
const flyButton = document.querySelector(".fly")

function flyStart() {
  if (onFly) {
    flyElement.pause()
    flyElement.volume = 0.3
    flyButton.style.backgroundImage = "linear-gradient(45deg, blue, pink)"
    onFly = !onFly
    console.log("parar")
  } else {
    flyElement.play()
    flyElement.volume = 0.3
    flyButton.style.backgroundImage = "linear-gradient(45deg, tomato, brown)"
    onFly = !onFly
    console.log("ligar")
  }
}

const modal = document.querySelector(".modal-overlay")

document.querySelectorAll(".card").forEach((eachCard) => {
  eachCard.addEventListener("click", (e) => {
    modal.classList.add("active")
    document.body.style.overflowY = "hidden"

    document.querySelector(".modal-overlay.active > .container").innerHTML = `
    <div class="place" style="background-image: url('${
      eachCard.querySelector("img").src
    }');"></div>
    <div class="card-content">
      <h3>${eachCard.querySelector("h3").innerText}</h3>
      <h4>Restaurantes</h4>
      <ul>
        <li>${eachCard.querySelector("ul > li:nth-child(1)").innerText}</li>
        <li>${eachCard.querySelector("ul > li:nth-child(2)").innerText}</li>
      </ul>
      <h4>Hotéis</h4>
      <ul>
        <li>${
          eachCard.querySelector("ul:nth-child(5) > li:nth-child(1)").innerText
        }</li>
        <li>${
          eachCard.querySelector("ul:nth-child(5) > li:nth-child(2)").innerText
        }</li>
      </ul>
      <h4>Passagens</h4>
      <ul>
        <li>${eachCard.querySelector("ul:nth-child(7) > li").innerText}</li>
      </ul>
      <h4>Locais de Passeio</h4>
      <ul>
        <li>${
          eachCard.querySelector("ul:nth-child(9) > li:nth-child(1)").innerText
        }</li>
        <li>${
          eachCard.querySelector("ul:nth-child(9) > li:nth-child(2)").innerText
        }</li>
        <li>${
          eachCard.querySelector("ul:nth-child(9) > li:nth-child(3)").innerText
        }</li>
      </ul>
    </div>
  `

    document.querySelector(".close-button").addEventListener("click", (e) => {
      modal.classList.remove("active")
      document.body.style.overflowY = "scroll"
    })

    modal.addEventListener("click", (e) => {
      if (e.target.className == "modal-overlay active") {
        modal.classList.remove("active")
        document.body.style.overflowY = "scroll"
      }
    })
  })
})
