const menuAvaliacao = document.getElementById("menuDeAvaliacao")
const avaliacaoCompleta = document.getElementById("avaliacaoCompleta")
const numeros = document.querySelectorAll(".numero")

numeros.forEach(numero => {
    numero.addEventListener("click", () => {
        const numeroSelecionado = numero.textContent;
      numero.style.backgroundColor = "hsl(25, 97%, 53%)";
      numero.style.color = "white"
      const resultado = document.querySelector(".resultado")
      resultado.innerHTML = `You selected ${numeroSelecionado} out of 5`
    });
  })

function esconder(){
    menuAvaliacao.style.display = "none";
    avaliacaoCompleta.style.display = "block";
}
