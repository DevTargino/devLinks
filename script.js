function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  //alterar a imagem

  const imagem = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "assets/Avatar_DevLinks_Light.png")
    imagem.setAttribute(
      "alt",
      "Foto de Targino.Dev com camisa polo preta, óculos de grau armação transparente, fundo de tijolos cinza"
    )
  } else {
    imagem.setAttribute("src", "assets/Avatar_DevLinks_Dark.png")
    imagem.setAttribute(
      "alt",
      "Foto de Targino.Dev com camisa polo preta, óculos de sol, fundo de tijolos cinza"
    )
  }
}
