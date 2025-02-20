// Habilita/desabilita campos de quantidade quando o checkbox é marcado/desmarcado
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const quantidadeInput = checkbox.parentElement.querySelector(".quantidade");
        quantidadeInput.disabled = !checkbox.checked;
        if (!checkbox.checked) {
            quantidadeInput.value = ""; // Limpa o valor se desmarcado
            checkbox.parentElement.querySelector(".valor-bruto").textContent = "$ 0.00"; // Reseta o valor bruto
            checkbox.parentElement.querySelector(".valor").textContent = "$ 0.00"; // Reseta o valor com desconto
        }
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
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json');
        const data = await response.json();
        return parseFloat(data[0].valor);
    } catch (error) {
        console.error("Erro ao obter a taxa PTAX:", error);
        return 5.0; // Valor padrão em caso de erro
    }
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
        const valorBrutoSpan = produtoDiv.querySelector(".valor-bruto"); // Span para o valor bruto
        const valorSpan = produtoDiv.querySelector(".valor"); // Span para o valor com desconto

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

            // Exibe o valor bruto ao lado do produto
            valorBrutoSpan.textContent = `$ ${valorBruto.toFixed(2)}`;

            // Aplica o desconto apenas para o cálculo do total
            const valorComDesconto = valorBruto * desconto;
            valorTotalDolar += valorComDesconto;

            // Exibe o valor com desconto (opcional, se necessário)
            valorSpan.textContent = `$ ${valorComDesconto.toFixed(2)}`;
        } else {
            // Reseta os valores se não estiver selecionado
            valorBrutoSpan.textContent = "$ 0.00";
            valorSpan.textContent = "$ 0.00";
        }
    });

    // Exibe o valor total em dólar
    document.getElementById("valorTotalDolar").textContent = `O valor total em dólar é: $ ${valorTotalDolar.toFixed(2)}`;

    // Obtém a taxa PTAX e converte para real
    const taxaPTAX = await getPTAX();
    const valorTotalReal = valorTotalDolar * taxaPTAX;
    document.getElementById("valorTotalReal").textContent = `O valor total em real é: R$ ${valorTotalReal.toFixed(2)}`;
    document.getElementById("taxaPTAX").textContent = `O valor do dólar é: $ ${taxaPTAX.toFixed(2)}`;
}

 /*   function valormargem() {
        var valor = document.getElementById("valor").value;
        var margem = document.getElementById("margem").value;
        var valorfinal = parseFloat(valor) + (parseFloat(valor) * parseFloat(margem) / 100);
        document.getElementById("valorfinal").value = valorfinal.toFixed
}
*/
    // Função para calcular o valor final com margem
    function valormargem() {
        const valor = parseFloat(document.getElementById("valorTotalReal").textContent.replace("O valor total em real é: R$ ", ""));
        const margem = parseFloat(document.getElementById("margem").value);
        const impostos = 12.857142; // 12.15%
    
        if (isNaN(valor)) {
            alert("Por favor, calcule o valor total em reais primeiro.");
            return;
        }
    
        if (isNaN(margem)) {
            alert("Por favor, insira uma margem válida.");
            return;
        }
    
        const margemEImpostos = margem + impostos;
        const valorfinal = valor * (1 + margemEImpostos / 100);
        document.getElementById("valorfinal").textContent = `Valor com margem e impostos: R$ ${valorfinal.toFixed(2)}`;
    }
    
    // Adiciona um evento de clique ao botão de calcular margem
    document.getElementById("calcularMargem").addEventListener("click", valormargem);