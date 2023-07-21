function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag da imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light.
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo usando óculos escuros e camisa preta, barba e fundo azul."
    )
  } else {
    //Se tiver sem light mode, manter a imagem original.
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Mayk Brito sorrindo usando óculos e camisa preta, barba e fundo azul.")
  }
}
