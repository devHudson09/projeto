function toggleMode() {
  const html = document.documentElement // Pega o elemento <html>
  const img = document.querySelector("#profile img") // Pega a imagem do perfil

  // Alterna a classe 'light' no elemento <html>
  html.classList.toggle("light")

  // Verifica se o modo claro está ativo APÓS a alternância
  const isLightMode = html.classList.contains("light")

  if (isLightMode) {
    // Se AGORA estiver no modo claro
    img.setAttribute("src", "./assets/eu-avatar2.png") // Imagem para o modo claro
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, com barba e fundo azul."
    ) // Adiciona ou atualiza o alt text
  } else {
    // Se AGORA estiver no modo escuro
    img.setAttribute("src", "./assets/eu-avatar.jpeg") // Imagem para o modo escuro
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, com barba e fundo colorido."
    ) // Adiciona ou atualiza o alt text
  }

  // Parte de Acessibilidade para o switch (boa prática)
  const switchElement = document.getElementById("switch")
  if (switchElement) {
    switchElement.setAttribute("aria-checked", isLightMode)
    switchElement.setAttribute(
      "aria-label",
      isLightMode ? "Ativar modo escuro" : "Ativar modo claro"
    ) // Alt text para o switch
  }
}

// REMOVA OU COMENTE ESTE BLOCO SE ESTIVER USANDO onclick="toggleMode()" NO HTML
/*
const switchButton = document.querySelector("#switch button");
if (switchButton) {
  switchButton.addEventListener("click", toggleMode);
}
*/

// Configuração Inicial ao Carregar a Página
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement
  const switchElement = document.getElementById("switch")
  if (switchElement) {
    // Define o estado inicial de aria-checked e aria-label com base no tema atual
    const isLightMode = html.classList.contains("light")
    switchElement.setAttribute("aria-checked", isLightMode)
    switchElement.setAttribute(
      "aria-label",
      isLightMode ? "Ativar modo escuro" : "Ativar modo claro"
    )
  }
})
