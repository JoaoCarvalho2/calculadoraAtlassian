// Função para formatar valores com ponto e vírgula
function formatarValor(valor, casasDecimais = 2) {
    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: casasDecimais,
        maximumFractionDigits: casasDecimais,
    });
}

// Habilita/desabilita campos de quantidade quando o checkbox é marcado/desmarcado
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const quantidadeInput = checkbox.parentElement.querySelector(".quantidade");
        quantidadeInput.disabled = !checkbox.checked;
        if (!checkbox.checked) {
            quantidadeInput.value = ""; // Limpa o valor se desmarcado
            checkbox.parentElement.querySelector(".valor-bruto").textContent = "$ 0,00"; // Reseta o valor bruto
            checkbox.parentElement.querySelector(".valor").textContent = "$ 0,00"; // Reseta o valor com desconto
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
            "101-200": 17100,
            "201-300": 25600,
            "301-400": 34100,
            "401-500": 42600,
            "501-600": 51100,
            "601-800": 68100,
            "801-1000": 85100,
        },
        premium: {
            "1-10": 1700,
            "11-15": 2550,
            "16-25": 4250,
            "26-50": 8500,
            "51-100": 17000,
            "101-200": 34000,
            "201-300": 51000,
            "301-400": 68000,
            "401-500": 85000,
            "501-600": 102000,
            "601-800": 136000,
            "801-1000": 170000,
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
            "101-200": 37500,
            "201-300": 56250,
            "301-400": 75000,
            "401-500": 93750,
            "501-600": 112500,
            "601-800": 150000,
            "801-1000": 187500,
        },
        premium: {
            "1-3": 1600,
            "4-5": 2650,
            "6-10": 5350,
            "11-15": 8000,
            "16-25": 12650,
            "26-50": 24500,
            "51-100": 47500,
            "101-200": 95000,
            "201-300": 142500,
            "301-400": 190000,
            "401-500": 237500,
            "501-600": 285000,
            "601-800": 380000,
            "801-1000": 475000,
        },
    },
    confluence: {
        standard: {
            "1-10": 650,
            "11-15": 950,
            "16-25": 1600,
            "26-50": 3200,
            "51-100": 6400,
            "101-200": 12800,
            "201-300": 19200,
            "301-400": 25600,
            "401-500": 32000,
            "501-600": 38400,
            "601-800": 51200,
            "801-1000": 64000,
        },
        premium: {
            "1-10": 1225,
            "11-15": 1850,
            "16-25": 3075,
            "26-50": 6150,
            "51-100": 12300,
            "101-200": 24600,
            "201-300": 36900,
            "301-400": 49200,
            "401-500": 61500,
            "501-600": 73800,
            "601-800": 98400,
            "801-1000": 123000,
        },
    },
};

// Variável global para armazenar a taxa de câmbio
let taxaDolar = 5.0; // Valor padrão

// Função para obter a taxa de câmbio PTAX do Banco Central
async function getPTAX() {
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json');
        const data = await response.json();
        taxaDolar = parseFloat(data[0].valor).toFixed(2); // Arredonda para 2 casas decimais
        document.getElementById("taxaPTAX").textContent = `O valor do dólar é: R$ ${formatarValor(taxaDolar)}`;
        calcularProdutos(); // Recalcula os valores com a nova taxa
    } catch (error) {
        console.error("Erro ao obter a taxa PTAX:", error);
        alert("Erro ao obter a taxa PTAX. Usando valor padrão.");
    }
}

// Função para atualizar manualmente o valor do dólar
function atualizarTaxaDolar(novaTaxa) {
    novaTaxa = parseFloat(novaTaxa);
    if (!isNaN(novaTaxa) && novaTaxa > 0) {
        taxaDolar = novaTaxa;
        document.getElementById("taxaPTAX").textContent = `O valor do dólar é: R$ ${formatarValor(taxaDolar)}`;
        calcularProdutos(); // Recalcula os valores com a nova taxa
    } else {
        alert("Por favor, insira um valor válido para a taxa do dólar.");
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
            valorBrutoSpan.textContent = `$ ${formatarValor(valorBruto)}`;

            // Aplica o desconto apenas para o cálculo do total
            const valorComDesconto = valorBruto * desconto;
            valorTotalDolar += valorComDesconto;

            // Exibe o valor com desconto (opcional, se necessário)
            valorSpan.textContent = `$ ${formatarValor(valorComDesconto)}`;
        } else {
            // Reseta os valores se não estiver selecionado
            valorBrutoSpan.textContent = "$ 0,00";
            valorSpan.textContent = "$ 0,00";
        }
    });

    // Exibe o valor total em dólar
    document.getElementById("valorTotalDolar").textContent = `O valor total em dólar é: $ ${formatarValor(valorTotalDolar)}`;

    // Converte para real usando a taxa de câmbio atual
    const valorTotalReal = valorTotalDolar * taxaDolar;
    document.getElementById("valorTotalReal").textContent = `O valor total em real é: R$ ${formatarValor(valorTotalReal)}`;
}

// Função para calcular o valor final com margem relacional
function valormargem() {
    const valor = parseFloat(document.getElementById("valorTotalReal").textContent.replace("O valor total em real é: R$ ", "").replace(".", "").replace(",", "."));
    const margem = parseFloat(document.getElementById("margem").value);

    if (isNaN(valor)) {
        alert("Por favor, calcule o valor total em reais primeiro.");
        return;
    }

    if (isNaN(margem) || margem < 0 || margem >= 100) {
        alert("Por favor, insira uma margem válida (entre 0% e 99%).");
        return;
    }

    // Calcula o fator de divisão com base na margem
    const fatorDivisao = 1 - (margem / 100);

    // Aplica a margem relacional
    const valorfinal = valor / fatorDivisao;

    // Exibe o valor final com margem
    document.getElementById("valorfinal").textContent = `Valor com margem de ${margem}%: R$ ${formatarValor(valorfinal)}`;
}

// Adiciona um evento de clique ao botão de calcular margem
document.getElementById("calcularMargem").addEventListener("click", valormargem);

// Adiciona um evento de clique ao campo do dólar para torná-lo editável
document.getElementById("taxaPTAX").addEventListener("click", () => {
    tornarCampoDolarEditavel();
});

// Função para tornar o campo do dólar editável
function tornarCampoDolarEditavel() {
    const taxaPTAXElement = document.getElementById("taxaPTAX");
    const taxaDolarInput = document.createElement("input");
    taxaDolarInput.type = "number";
    taxaDolarInput.value = taxaDolar.toFixed(2); // Valor atual do dólar
    taxaDolarInput.style.width = "80px"; // Ajuste o tamanho conforme necessário

    // Substitui o texto pelo campo de entrada
    taxaPTAXElement.textContent = "";
    taxaPTAXElement.appendChild(taxaDolarInput);

    // Foca no campo de entrada automaticamente
    taxaDolarInput.focus();

    // Atualiza o valor do dólar ao pressionar "Enter" ou ao sair do campo
    taxaDolarInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            atualizarTaxaDolar(taxaDolarInput.value);
        }
    });

    taxaDolarInput.addEventListener("blur", () => {
        atualizarTaxaDolar(taxaDolarInput.value);
    });
}

// Inicializa a taxa PTAX ao carregar a página
getPTAX();