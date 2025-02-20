// Habilita/desabilita campos de quantidade quando o checkbox é marcado/desmarcado
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const quantidadeInput = checkbox.parentElement.querySelector(".quantidade");
        quantidadeInput.disabled = !checkbox.checked;
        if (!checkbox.checked) quantidadeInput.value = ""; // Limpa o valor se desmarcado
    });
});

// Definição dos preços dos produtos em dólar
const produtos = {
    jira: {
        standard: {
            "1-10": 875,
            "11-15": 1300,
            "16-25": 2150,
            "26-50": 4350,
            "51-100": 8600,
        },
        premium: {
            "1-10": 1700,
            "11-15": 2550,
            "16-25": 4250,
            "26-50": 8500,
            "51-100": 17000,
        },
    },
    jsm: {
        standard: {
            "1-3": 700,
            "4-5": 1200,
            "6-10": 2400,
            "11-15": 3550,
            "16-25": 5350,
            "26-50": 9800,
            "51-100": 18750,
        },
        premium: {
            "1-3": 1600,
            "4-5": 2650,
            "6-10": 5350,
            "11-15": 8000,
            "16-25": 12650,
            "26-50": 24500,
            "51-100": 47500,
        },
    },
    confluence: {
        standard: {
            "1-10": 650,
            "11-15": 950,
            "16-25": 1600,
            "26-50": 3200,
            "51-100": 6400,
        },
        premium: {
            "1-10": 1225,
            "11-15": 1850,
            "16-25": 3075,
            "26-50": 6150,
            "51-100": 12300,
        },
    },
};

// Função para obter a taxa de câmbio PTAX do Banco Central
async function getPTAX() {
    const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json');
    const data = await response.json();
    return parseFloat(data[0].valor);
}

// Função principal para calcular os produtos
async function calcularProdutos() {
    const nivelDesconto = document.getElementById("desconto").value;
    let valorTotalDolar = 0;

    // Aplica o desconto
    let desconto = 1; // Sem desconto por padrão
    if (nivelDesconto === "silver") {
        desconto = 0.90; // 10% de desconto
    } else if (nivelDesconto === "gold") {
        desconto = 0.80; // 20% de desconto
    } else if (nivelDesconto === "platinum") {
        desconto = 0.75; // 25% de desconto
    }

    // Percorre todos os produtos
    document.querySelectorAll(".produto").forEach((produtoDiv) => {
        const checkbox = produtoDiv.querySelector('input[type="checkbox"]');
        const tipo = produtoDiv.querySelector(".tipo").value;
        const quantidadeInput = produtoDiv.querySelector(".quantidade");
        const valorSpan = produtoDiv.querySelector(".valor");

        if (checkbox.checked && quantidadeInput.value) {
            const quantidadeUsuarios = parseInt(quantidadeInput.value);
            const produtoId = checkbox.id;
            const faixas = produtos[produtoId][tipo];
            let valorBruto = 0;

            // Determina o valor bruto com base na faixa
            for (const faixa in faixas) {
                const [min, max] = faixa.split("-").map(Number);
                if (quantidadeUsuarios >= min && quantidadeUsuarios <= max) {
                    valorBruto = faixas[faixa];
                    break;
                }
            }

            // Aplica o desconto
            const valorComDesconto = valorBruto * desconto;
            valorTotalDolar += valorComDesconto;

            // Exibe o valor ao lado do produto
            valorSpan.textContent = `$ ${valorComDesconto.toFixed(2)}`;
        } else {
            valorSpan.textContent = "$ 0.00"; // Reseta o valor se não estiver selecionado
        }
    });

    // Exibe o valor total em dólar
    document.getElementById("valorTotalDolar").textContent = `$ ${valorTotalDolar.toFixed(2)}`;

    // Obtém a taxa PTAX e converte para real
    const taxaPTAX = await getPTAX();
    const valorTotalReal = valorTotalDolar * taxaPTAX;
    document.getElementById("valorTotalReal").textContent = `R$ ${valorTotalReal.toFixed(2)}`;
}