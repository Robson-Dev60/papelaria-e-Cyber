
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const select = document.querySelector("#servico")
const msg = document.querySelector(".msg")
const numero = '5599992155967'


function orcamento() {
    document.querySelector(".endereco").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
/* 
.scrollIntoView({ ... })
👉 Executa o scroll até esse elemento.
O objeto { ... } serve para configurar como o scroll acontece.
3️⃣ behavior: "smooth"
👉 Define o tipo de movimento do scroll.
Opções:
"auto" → pula direto (padrão)
"smooth" → desliza suavemente 🧈
📌 Não muda o destino, só a animação.
4️⃣ block: "start"
👉 Controla onde o elemento vai parar na tela (vertical).
Opções principais:
"start" → topo da tela ⬆️
"center" → centro 🟦
"end" → final ⬇️
"nearest" → posição mais próxima*/

function mensag() {
    const mensagem =
        `Nome: ${nome.value}
Email: ${email.value} 
Serviço: ${select.value}
Especificações: ${msg.value}`
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
}
