# 🖨️ Papelaria & Cyber

> Uma landing page moderna e responsiva para serviços de papelaria e cyber café, com um formulário otimizado para pedidos via WhatsApp.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 💻 Sobre o Projeto

Este projeto é uma página web desenvolvida para facilitar a solicitação de orçamentos e serviços de uma Papelaria e Cyber Café. O foco principal é oferecer uma interface amigável onde o cliente pode selecionar o serviço desejado e enviar as especificações diretamente para o WhatsApp do estabelecimento.

A identidade visual combina o estilo clássico de papelaria (fontes cursivas) com elementos digitais (fontes monoespaçadas), utilizando uma paleta de cores em tons pastéis, sombras suaves e um layout limpo para uma experiência de usuário agradável.

## ✨ Funcionalidades

-   **Integração com WhatsApp API:** O formulário coleta nome, e-mail, tipo de serviço e especificações, gerando um link automático que abre uma conversa no WhatsApp com a mensagem pré-formatada.
-   **Validação de Formulário:** Verifica se os campos essenciais (nome, e-mail, serviço) foram preenchidos antes de permitir o envio.
-   **Design Responsivo:** Layout adaptável para dispositivos móveis (Mobile First) e desktops, com ajustes específicos de tipografia e espaçamento.
-   **Navegação Suave (Smooth Scroll):** Navegação fluida ao clicar no botão de orçamento, levando o usuário suavemente até a seção de formulário.
-   **Boas Práticas de Desenvolvimento:**
    -   **HTML Semântico:** Uso correto de tags como `<main>`, `<section>`, `<form>` e `<label>` para melhor acessibilidade e SEO.
    -   **Separação de Responsabilidades:** O JavaScript é mantido separado do HTML, utilizando `addEventListener` em vez de atributos `onclick`.
-   **Estilização Personalizada:**
    -   Uso de **CSS Variables** para fácil manutenção de cores.
    -   Animações sutis de `hover` e `focus` para uma interface mais interativa.

## 🎨 Identidade Visual

O projeto utiliza uma paleta de cores suave definida via variáveis CSS:

-   🔵 **Primária:** `#a2c9f0` (Azul Pastel)
-   🔴 **Secundária:** `#fb8ea1` (Rosa Pastel)
-   🟡 **Accent:** `#ffcd6b` (Amarelo)
-   🟤 **Texto:** `#5a4a46` (Marrom Suave)

As fontes utilizadas reforçam a dualidade do negócio:
*   *"Dancing Script"* para títulos (toque manual/artístico).
*   *"Courier New"* para botões e inputs (toque técnico/cyber).

## 🚀 Como Executar

1.  **Clone o repositório** (ou baixe os arquivos):
    ```bash
    git clone https://github.com/seu-usuario/papelaria-e-cyber.git
    ```
2.  **Abra o arquivo principal:**
    Basta abrir o arquivo `index.html` em qualquer navegador moderno.

## 📂 Estrutura de Arquivos

```text
papelaria-e-cyber/
│
├── index.html      # Estrutura semântica da página
├── style.css       # Estilização moderna, layout e responsividade
├── script.js       # Lógica de interatividade, validação e envio para WhatsApp
└── README.md       # Documentação do projeto
```

## 🛠️ Trecho de Código (Destaque)

A função abaixo é responsável por capturar os dados e codificá-los para a URL do WhatsApp, garantindo que caracteres especiais e quebras de linha funcionem corretamente:

```javascript
function mensag() {
    const mensagem =
        `Nome: ${nome.value}
Email: ${email.value} 
Serviço: ${select.value}
Especificações: ${msg.value}`
    
    // encodeURIComponent garante que o texto seja formatado para URL
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
}
```

## 📱 Preview Mobile

O CSS inclui media queries robustas para telas menores que 500px, ajustando:
-   Tamanho das fontes (usando unidades `vmin`).
-   Largura dos cards e inputs.
-   Layout do rodapé.

---

## 👨‍💻 Autor

Desenvolvido com carinho e código.

[!LinkedIn](https://www.linkedin.com/in/seu-linkedin) 
[!GitHub](https://github.com/Robson-Dev60)

---
*Este projeto é para fins de estudo e portfólio.*
