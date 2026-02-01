const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const select = document.querySelector("#servico")
const msg = document.querySelector("#msg")
const numero = '5599992155967'
const form = document.querySelector(".form-container")
const orcamentoBtn = document.querySelector(".orcamento")


function orcamento() {
    // O scroll suave agora pode ser feito via CSS com `scroll-behavior: smooth;` no <html>
    // Mas para garantir compatibilidade e controle, mantemos a função JS.
    // O clique no botão agora aponta para a seção do formulário.
    const formSection = document.querySelector("#form-section");
    formSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function mensag(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Validação simples para garantir que campos essenciais não estão vazios
    if (nome.value.trim() === "" || email.value.trim() === "") {
        alert("Por favor, preencha os campos 'Nome Completo' e 'Email' antes de enviar.");
        return; // Interrompe a função se a validação falhar
    }

    if (select.value === "") {
        alert("Por favor, selecione um serviço de interesse.");
        return;
    }

    const mensagem =
        `Nome: ${nome.value}
Email: ${email.value} 
Serviço: ${select.value}
Especificações: ${msg.value}`

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
}

// Adiciona os "escutadores de eventos" para separar o HTML do JavaScript
orcamentoBtn.addEventListener("click", orcamento);
form.addEventListener("submit", mensag);
