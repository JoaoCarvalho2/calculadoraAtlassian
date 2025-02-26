
// Definição dos preços dos produtos em dólar
const produtos = {
    jira: {
        standard: {
            "1-10": 875,
            "11-15": 1300,
            "16-25": 2150,
            "26-50": 4350,
            "51-100": 8600,
            "101-200": 16000,
            "201-300": 22500,
            "301-400": 28500,
            "401-500": 35000,
            "501-600": 41000,
            "601-800": 53000,
            "801-1000": 65500,
            "1001-1200": 76500,
            "1201-1400": 87500,
            "1401-1600": 98500,
            "1601-1800": 109500,
            "1801-2000": 120500,
            "2001-2250": 134000,
            "2251-2500": 148000,
            "2501-2750": 161000,
            "2751-3000": 174000,
        },
        premium: {
            "1-10": 1700,
            "11-15": 2550,
            "16-25": 4250,
            "26-50": 8500,
            "51-100": 17000,
            "101-200": 30000,
            "201-300": 40500,
            "301-400": 49500,
            "401-500": 58500,
            "501-600": 67500,
            "601-800": 85000,
            "801-1000": 103000,
            "1001-1200": 120000,
            "1201-1400": 137500,
            "1401-1600": 154500,
            "1601-1800": 171500,
            "1801-2000": 189000,
            "2001-2250": 210000,
            "2251-2500": 232000,
            "2501-2750": 253000,
            "2751-3000": 273000,
        
        },
        enterprise: {
            "801-1000": 155000,
            "1001-1200": 180500,
            "1201-1400": 206500,
            "1401-1600": 232500,
            "1601-1800": 258000,
            "1801-2000": 284000,
            "2001-2250": 316000,
            "2251-2500": 348000,
            "2501-2750": 379000,
            "2751-3000": 411000,
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
            "101-200": 30700,
            "201-300": 40750,
            "301-400": 48950,
            "401-500": 57150,
            "501-600": 65000,
            "601-800": 80700,
            "801-1000": 96400,
            "1001-1200": 111500,
            "1201-1400": 126600,
            "1401-1600": 141700,
            "1601-1800": 156800,
            "1801-2000": 171900,
            "2001-2250": 190800,
            "2251-2500": 209650,
            "2501-2750": 228550,
            "2751-3000": 247400,
        },
        premium: {
            "1-3": 1600,
            "4-5": 2650,
            "6-10": 5350,
            "11-15": 8000,
            "16-25": 12650,
            "26-50": 24500,
            "51-100": 47500,
            "101-200": 78500,
            "201-300": 104500,
            "301-400": 126000,
            "401-500": 147000,
            "501-600": 167000,
            "601-800": 206500,
            "801-1000": 245500,
            "1001-1200": 276500,
            "1201-1400": 307000,
            "1401-1600": 338000,
            "1601-1800": 368000,
            "1801-2000": 399000,
            "2001-2250": 438000,
            "2251-2500": 476000,
            "2501-2750": 513000,
            "2751-3000": 550000,
        },
        enterprise: {
            "201-300": 157000,
            "301-400": 189000,
            "401-500": 221000,
            "501-600": 250500,
            "601-800": 309500,
            "801-1000": 368500,
            "1001-1200": 414500,
            "1201-1400": 460500,
            "1401-1600": 507000,
            "1601-1800": 553000,
            "1801-2000": 599000,
            "2001-2250": 656500,
            "2251-2500": 714000,
            "2501-2750": 770000,
            "2751-3000": 825000,
        },
    },
    confluence: {
        standard: {
            "1-10": 650,
            "11-15": 950,
            "16-25": 1600,
            "26-50": 3200,
            "51-100": 6400,
            "101-200": 11500,
            "201-300": 15500,
            "301-400": 19000,
            "401-500": 22500,
            "501-600": 26500,
            "601-800": 33500,
            "801-1000": 40500,
            "1001-1200": 47500,
            "1201-1400": 54000,
            "1401-1600": 61000,
            "1601-1800": 67500,
            "1801-2000": 74000,
            "2001-2250": 83000,
            "2251-2500": 91000,
            "2501-2750": 99000,
            "2751-3000": 106000,
        },
        premium: {
            "1-10": 1225,
            "11-15": 1850,
            "16-25": 3075,
            "26-50": 6150,
            "51-100": 12300,
            "101-200": 21200,
            "201-300": 29175,
            "301-400": 36225,
            "401-500": 43275,
            "501-600": 50325,
            "601-800": 64425,
            "801-1000": 78525,
            "1001-1200": 91500,
            "1201-1400": 104000,
            "1401-1600": 117000,
            "1601-1800": 129500,
            "1801-2000": 142500,
            "2001-2250": 159000,
            "2251-2500": 175000,
            "2501-2750": 190000,
            "2751-3000": 205000,
        },
        enterprise: {
            "801-1000": 118000,
            "1001-1200": 137500,
            "1201-1400": 156500,
            "1401-1600": 175500,
            "1601-1800": 195000,
            "1801-2000": 214000,
            "2001-2250": 238000,
            "2251-2500": 262000,
            "2501-2750": 285000,
            "2751-3000": 308000,
        },
    },
    bitbucket: {
        premium: {
            "1-10": 660,
            "11-15": 1000,
            "16-25": 1650,
            "26-50": 3300,
            "51-100": 6600,
            "101-200": 12650,
            "201-300": 18450,
            "301-400": 23950,
            "401-500": 29450,
            "501-600": 34950,
            "601-800": 45950,
            "801-1000": 56950,
            "1001-1200": 67950,
            "1201-1400": 78950,
            "1401-1600": 89950,
            "1601-1800": 100950,
            "1801-2000": 111950,
            "2001-2250": 125700,
            "2251-2500": 139450,
            "2501-2750": 153200,
            "2751-3000": 166950,
            
        },
    },
};

// Contador para numerar os cenários
let contadorCenarios = 1;

// Taxa de câmbio (dólar para real)
let taxaDolar = 5.0; // Valor inicial (pode ser atualizado via API ou manualmente)

// Função para adicionar um novo cenário
function adicionarNovoCenario() {
    const container = document.querySelector('.cenarios-container');
    contadorCenarios++;

    // Cria o novo cenário
    const novoCenario = document.createElement('div');
    novoCenario.className = 'cenario';
    novoCenario.innerHTML = `
        <h2>Cenário ${contadorCenarios}</h2>
        <div class="parceria">
            <p>Selecione o nível de parceria:</p>
            <select class="desconto">
                <option value="none">Nenhum</option>
                <option value="silver">Silver (10% de desconto)</option>
                <option value="gold">Gold (20% de desconto)</option>
                <option value="platinum">Platinum (25% de desconto)</option>
            </select>
        
            <h3>Produtos:</h3>
            <div class="produtos">
                <!-- Jira -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="jira"> Jira
                        <select class="tipo">
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                <!-- Jira Service Management -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="jsm"> Jira Service Management
                        <select class="tipo">
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                <!-- Confluence -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="confluence"> Confluence
                        <select class="tipo">
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                <!-- Bitbucket -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="bitbucket"> Bitbucket
                        <select class="tipo">
                            <option value="premium">Premium</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                
                <!-- Container para produtos personalizados -->
                <div class="produtos-personalizados"></div>
            </div>
            
            <!-- Botões -->
            <div class="botoes-container">
                <button onclick="adicionarNovoProduto(this)">Adicionar Novo Produto</button>
                <br>
                <button onclick="calcularCenario(this)">Calcular</button>
            </div>
        </div>
        
        <div class="resultado">
            <h3>Valor Total:</h3>
            <p class="valorTotalDolar">O valor total em dólar é: $ 0.00</p>
            <p class="valorTotalReal">O valor total em real é: R$ 0.00</p>
            <p class="taxaPTAX">O valor do dólar é: R$</p>

            <!-- Adicionar Margem -->
            <h3>Adicionar Margem:</h3>
            <label for="margem">Margem (%):</label>
            <input type="number" class="margem" placeholder="Insira a margem">
            <br>
            <button class="buton" onclick="calcularMargem(this)">Calcular Margem</button>
            <p class="valorfinal">Valor com margem: R$ 0.00</p>
        </div>
    `;

    // Adiciona o novo cenário ao container
    container.appendChild(novoCenario);

    // Configura os event listeners para o novo cenário
    configurarEventListeners(novoCenario);

    // Habilita o botão de comparar cenários se houver pelo menos 2 cenários
    const botaoComparar = document.getElementById('botao-comparar');
    if (document.querySelectorAll('.cenario').length >= 2) {
        botaoComparar.disabled = false;
    }
}
// Função para configurar os event listeners de um cenário
function configurarEventListeners(cenarioDiv) {
    // Event listeners para os checkboxes
    cenarioDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const quantidadeInput = checkbox.parentElement.querySelector('.quantidade');
            quantidadeInput.disabled = !checkbox.checked;
            if (!checkbox.checked) {
                quantidadeInput.value = '';
                checkbox.parentElement.querySelector('.valor-bruto').textContent = '$ 0.00';
                checkbox.parentElement.querySelector('.valor').textContent = '$ 0.00';
                checkbox.parentElement.querySelector('.tier').textContent = '';
            }
        });
    });

    // Event listeners para os campos de quantidade
    cenarioDiv.querySelectorAll('.quantidade').forEach(quantidadeInput => {
        quantidadeInput.addEventListener('input', () => {
            calcularCenario(cenarioDiv.querySelector('button'));
        });
    });

    // Event listener para o campo de taxa de câmbio
    cenarioDiv.querySelector('.taxaPTAX').addEventListener('click', () => {
        tornarCampoDolarEditavel(cenarioDiv);
    });
}

// Função para adicionar um novo produto personalizado
function adicionarNovoProduto(button) {
    const produtosPersonalizados = button.closest('.parceria').querySelector('.produtos-personalizados');
    const novoProduto = document.createElement('div');
    novoProduto.className = 'produto personalizado';
    novoProduto.innerHTML = `
        <label>
            <input type="checkbox" class="personalizado"> Produto Personalizado
            <input type="number" class="valor-dolar" placeholder="Valor em dólar" disabled>
        </label>
        <span class="valor-bruto">$ 0.00</span>
        <span class="valor">$ 0.00</span>
        <button class="remover-produto" onclick="removerProduto(this)">×</button>
    `;
    produtosPersonalizados.appendChild(novoProduto);

    // Adiciona event listeners para o novo produto
    const checkbox = novoProduto.querySelector('input[type="checkbox"]');
    const valorDolarInput = novoProduto.querySelector('.valor-dolar');

    checkbox.addEventListener('change', () => {
        valorDolarInput.disabled = !checkbox.checked;
        if (!checkbox.checked) {
            valorDolarInput.value = '';
            novoProduto.querySelector('.valor-bruto').textContent = '$ 0.00';
            novoProduto.querySelector('.valor').textContent = '$ 0.00';
        }
    });

    valorDolarInput.addEventListener('input', () => {
        calcularCenario(button.closest('.cenario').querySelector('button'));
    });
}

// Função para remover um produto personalizado
function removerProduto(button) {
    const produtoDiv = button.closest('.produto');
    produtoDiv.remove();
    calcularCenario(button.closest('.cenario').querySelector('button'));
}

// Função para calcular um cenário específico
function calcularCenario(button) {
    const cenarioDiv = button.closest('.cenario');
    const descontoSelect = cenarioDiv.querySelector('.desconto');
    const nivelDesconto = descontoSelect.value;
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

    // Calcula produtos padrão (Jira, JSM, Confluence)
    cenarioDiv.querySelectorAll('.produto:not(.personalizado)').forEach((produtoDiv) => {
        const checkbox = produtoDiv.querySelector('input[type="checkbox"]');
        const tipo = produtoDiv.querySelector('.tipo');
        
        if (checkbox.checked && tipo) {
            const quantidadeInput = produtoDiv.querySelector('.quantidade');
            const valorBrutoSpan = produtoDiv.querySelector('.valor-bruto');
            const valorSpan = produtoDiv.querySelector('.valor');
            const tierElement = produtoDiv.querySelector('.tier'); // Novo elemento para mostrar o tier

            if (quantidadeInput.value) {
                const quantidadeUsuarios = parseInt(quantidadeInput.value);
                const produtoId = checkbox.className;
                const faixas = produtos[produtoId][tipo.value];
                let valorBruto = 0;

                for (const faixa in faixas) {
                    const [min, max] = faixa.split("-").map(Number);
                    if (quantidadeUsuarios >= min && quantidadeUsuarios <= max) {
                        valorBruto = faixas[faixa];
                        break;
                    }
                }

                // Mostra o tier
                mostrarTier(quantidadeUsuarios, produtoId, tipo.value, tierElement);

                valorBrutoSpan.textContent = `$ ${formatarValor(valorBruto)}`;
                const valorComDesconto = valorBruto * desconto;
                valorTotalDolar += valorComDesconto;
                valorSpan.textContent = `$ ${formatarValor(valorComDesconto)}`;
            }
        }
    });

    // Calcula produtos personalizados
    cenarioDiv.querySelectorAll('.produto.personalizado').forEach((produtoDiv) => {
        const checkbox = produtoDiv.querySelector('input[type="checkbox"]');
        const valorDolarInput = produtoDiv.querySelector('.valor-dolar');
        const valorBrutoSpan = produtoDiv.querySelector('.valor-bruto');
        const valorSpan = produtoDiv.querySelector('.valor');

        if (checkbox.checked && valorDolarInput.value) {
            const valorBruto = parseFloat(valorDolarInput.value) || 0;
            valorBrutoSpan.textContent = `$ ${formatarValor(valorBruto)}`;
            const valorComDesconto = valorBruto * desconto;
            valorTotalDolar += valorComDesconto;
            valorSpan.textContent = `$ ${formatarValor(valorComDesconto)}`;
        }
    });

    // Atualiza os totais do cenário
    const valorTotalDolarElement = cenarioDiv.querySelector('.valorTotalDolar');
    const valorTotalRealElement = cenarioDiv.querySelector('.valorTotalReal');
    
    valorTotalDolarElement.textContent = `O valor total em dólar é: $ ${formatarValor(valorTotalDolar)}`;
    const valorTotalReal = valorTotalDolar * taxaDolar;
    valorTotalRealElement.textContent = `O valor total em real é: R$ ${formatarValor(valorTotalReal)}`;

    return valorTotalReal;
}

// Função para calcular a margem
function calcularMargem(button) {
    const cenarioDiv = button.closest('.cenario');
    const margemInput = cenarioDiv.querySelector('.margem');
    const valorTotalReal = parseFloat(cenarioDiv.querySelector('.valorTotalReal').textContent.replace("O valor total em real é: R$ ", "").replace(".", "").replace(",", "."));
    const margem = parseFloat(margemInput.value);

    if (isNaN(valorTotalReal)) {
        alert("Por favor, calcule o valor total em reais primeiro.");
        return;
    }

    if (isNaN(margem) || margem < 0 || margem >= 100) {
        alert("Por favor, insira uma margem válida (entre 0% e 99%).");
        return;
    }

    // Calcula o valor final com margem
    const valorfinal = valorTotalReal / (1 - margem / 100);
    cenarioDiv.querySelector('.valorfinal').textContent = `Valor com margem de ${margem}%: R$ ${formatarValor(valorfinal)}`;
}

// Função para comparar os cenários
function compararCenarios() {
    const cenarios = document.querySelectorAll('.cenario');
    if (cenarios.length < 2) {
        alert("É necessário ter pelo menos 2 cenários para comparar.");
        return;
    }

    // Obtém os valores totais de cada cenário
    const valoresTotais = [];
    cenarios.forEach((cenarioDiv) => {
        const valorTotalReal = calcularCenario(cenarioDiv.querySelector('button'));
        valoresTotais.push(valorTotalReal);
    });

    const [valorCenario1, valorCenario2] = valoresTotais;

    // Determina qual cenário tem o maior valor
    const maiorValor = Math.max(valorCenario1, valorCenario2);
    const menorValor = Math.min(valorCenario1, valorCenario2);

    // Calcula a margem necessária para igualar os valores
    const margemNecessaria = ((maiorValor / menorValor) - 1) * 100;

    // Exibe o resultado da comparação
    const resultadoComparacao = document.getElementById('resultado-comparacao');
    resultadoComparacao.innerHTML = `
        <h4>Resultado da Comparação:</h4>
        <p><strong>Cenário 1:</strong> R$ ${formatarValor(valorCenario1)}</p>
        <p><strong>Cenário 2:</strong> R$ ${formatarValor(valorCenario2)}</p>
        <p><strong>Maior valor:</strong> R$ ${formatarValor(maiorValor)}</p>
        <p><strong>Margem necessária para igualar:</strong> ${formatarValor(margemNecessaria)}%</p>
    `;
}

// Função para formatar valores
function formatarValor(valor, casasDecimais = 2) {
    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: casasDecimais,
        maximumFractionDigits: casasDecimais,
    });
}

// Função para buscar o valor atual do dólar (PTAX)
async function getPTAX() {
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json');
        const data = await response.json();
        taxaDolar = parseFloat(data[0].valor).toFixed(2); // Arredonda para 2 casas decimais
        document.querySelectorAll('.taxaPTAX').forEach(element => {
            element.textContent = `O valor do dólar é: R$ ${formatarValor(taxaDolar)}`;
        });
        calcularCenario(document.querySelector('.cenario').querySelector('button')); // Recalcula os valores com a nova taxa
    } catch (error) {
        console.error("Erro ao obter a taxa PTAX:", error);
        alert("Erro ao obter a taxa PTAX. Usando valor padrão.");
    }
}

// Função para mostrar o tier
function mostrarTier(quantidade, produtoId, tipo, elemento) {
    const faixas = produtos[produtoId][tipo];
    let tier = "Nenhum tier encontrado";

    for (const faixa in faixas) {
        const [min, max] = faixa.split("-").map(Number);
        if (quantidade >= min && quantidade <= max) {
            tier = `Tier: ${faixa}`;
            break;
        }
    }

    // Atualiza o elemento com o tier
    elemento.textContent = tier;
}

// Função para tornar o campo do dólar editável
function tornarCampoDolarEditavel(cenarioDiv) {
    const taxaPTAXElement = cenarioDiv.querySelector('.taxaPTAX');
    const taxaDolarInput = document.createElement("input");
    taxaDolarInput.type = "number";
    taxaDolarInput.value = Number(taxaDolar).toFixed(2); // Valor atual do dólar
    taxaDolarInput.style.width = "70px"; // Ajuste o tamanho conforme necessário

    // Substitui o texto pelo campo de entrada
    taxaPTAXElement.textContent = "";
    taxaPTAXElement.appendChild(taxaDolarInput);

    // Foca no campo de entrada automaticamente
    taxaDolarInput.focus();

    // Atualiza o valor do dólar ao pressionar "Enter" ou ao sair do campo
    taxaDolarInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            atualizarTaxaDolar(taxaDolarInput.value, cenarioDiv);
            restaurarTexto(taxaPTAXElement, taxaDolarInput.value); // Restaura o texto após atualizar
        }
    });

    taxaDolarInput.addEventListener("blur", () => {
        atualizarTaxaDolar(taxaDolarInput.value, cenarioDiv);
        restaurarTexto(taxaPTAXElement, taxaDolarInput.value); // Restaura o texto após atualizar
    });
}

// Função para atualizar a taxa do dólar
function atualizarTaxaDolar(novoValor, cenarioDiv) {
    taxaDolar = parseFloat(novoValor).toFixed(2); // Atualiza a taxa do dólar
    calcularCenario(cenarioDiv.querySelector('button')); // Recalcula os valores com a nova taxa
}

// Função para restaurar o texto após edição
function restaurarTexto(elemento, valor) {
    elemento.textContent = `O valor do dólar é: R$ ${formatarValor(valor)}`;
}

// Configura os event listeners para o cenário inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const cenarioInicial = document.querySelector('.cenario');
    if (cenarioInicial) {
        configurarEventListeners(cenarioInicial);
    }
});

// Inicializa a taxa PTAX ao carregar a página
getPTAX();

// Função para adicionar um novo cenário
function adicionarNovoCenario() {
    const container = document.querySelector('.cenarios-container');
    contadorCenarios++;

    // Cria o novo cenário
    const novoCenario = document.createElement('div');
    novoCenario.className = 'cenario';
    novoCenario.innerHTML = `
        <h2>Cenário ${contadorCenarios}</h2>
        <div class="parceria">
            <p>Selecione o nível de parceria:</p>
            <select class="desconto">
                <option value="none">Nenhum</option>
                <option value="silver">Silver (10% de desconto)</option>
                <option value="gold">Gold (20% de desconto)</option>
                <option value="platinum">Platinum (25% de desconto)</option>
            </select>
        
            <h3>Produtos:</h3>
            <div class="produtos">
                <!-- Jira -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="jira"> Jira
                        <select class="tipo">
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                <!-- Jira Service Management -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="jsm"> Jira Service Management
                        <select class="tipo">
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                <!-- Confluence -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="confluence"> Confluence
                        <select class="tipo">
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                <!-- Bitbucket -->
                <div class="produto">
                    <label>
                        <input type="checkbox" class="bitbucket"> Bitbucket
                        <select class="tipo">
                            <option value="premium">Premium</option>
                        </select>
                        <input type="number" class="quantidade" min="1" max="1000" placeholder="Usuários" disabled>
                    </label>
                    <span class="tier"></span>
                    <span class="valor-bruto">$ 0.00</span>
                    <span class="valor">$ 0.00</span>
                </div>
                
                <!-- Container para produtos personalizados -->
                <div class="produtos-personalizados"></div>
            </div>
            
            <!-- Botões -->
            <div class="botoes-container">
                <button onclick="adicionarNovoProduto(this)">Adicionar Novo Produto</button>
                <br>
                <button onclick="calcularCenario(this)">Calcular</button>
            </div>
        </div>
        
        <div class="resultado">
            <h3>Valor Total:</h3>
            <p class="valorTotalDolar">O valor total em dólar é: $ 0.00</p>
            <p class="valorTotalReal">O valor total em real é: R$ 0.00</p>
            <p class="taxaPTAX">O valor do dólar é: R$</p>

            <!-- Adicionar Margem -->
            <h3>Adicionar Margem:</h3>
            <label for="margem">Margem (%):</label>
            <input type="number" class="margem" placeholder="Insira a margem">
            <br>
            <button class="buton" onclick="calcularMargem(this)">Calcular Margem</button>
            <p class="valorfinal">Valor com margem: R$ 0.00</p>
        </div>
    `;

    // Adiciona o novo cenário ao container
    container.appendChild(novoCenario);

    // Configura os event listeners para o novo cenário
    configurarEventListeners(novoCenario);

    // Habilita o botão de comparar cenários se houver pelo menos 2 cenários
    const botaoComparar = document.getElementById('botao-comparar');
    if (document.querySelectorAll('.cenario').length >= 2) {
        botaoComparar.disabled = false;
    }
}
// Função para configurar os event listeners de um cenário
function configurarEventListeners(cenarioDiv) {
    // Event listeners para os checkboxes
    cenarioDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const quantidadeInput = checkbox.parentElement.querySelector('.quantidade');
            quantidadeInput.disabled = !checkbox.checked;
            if (!checkbox.checked) {
                quantidadeInput.value = '';
                checkbox.parentElement.querySelector('.valor-bruto').textContent = '$ 0.00';
                checkbox.parentElement.querySelector('.valor').textContent = '$ 0.00';
                checkbox.parentElement.querySelector('.tier').textContent = '';
            }
        });
    });

    // Event listeners para os campos de quantidade
    cenarioDiv.querySelectorAll('.quantidade').forEach(quantidadeInput => {
        quantidadeInput.addEventListener('input', () => {
            calcularCenario(cenarioDiv.querySelector('button'));
        });
    });

    // Event listener para o campo de taxa de câmbio
    cenarioDiv.querySelector('.taxaPTAX').addEventListener('click', () => {
        tornarCampoDolarEditavel(cenarioDiv);
    });
}

// Função para adicionar um novo produto personalizado
function adicionarNovoProduto(button) {
    const produtosPersonalizados = button.closest('.parceria').querySelector('.produtos-personalizados');
    const novoProduto = document.createElement('div');
    novoProduto.className = 'produto personalizado';
    novoProduto.innerHTML = `
        <label>
            <input type="checkbox" class="personalizado"> Produto Personalizado
            <input type="number" class="valor-dolar" placeholder="Valor em dólar" disabled>
        </label>
        <span class="valor-bruto">$ 0.00</span>
        <span class="valor">$ 0.00</span>
        <button class="remover-produto" onclick="removerProduto(this)">×</button>
    `;
    produtosPersonalizados.appendChild(novoProduto);

    // Adiciona event listeners para o novo produto
    const checkbox = novoProduto.querySelector('input[type="checkbox"]');
    const valorDolarInput = novoProduto.querySelector('.valor-dolar');

    checkbox.addEventListener('change', () => {
        valorDolarInput.disabled = !checkbox.checked;
        if (!checkbox.checked) {
            valorDolarInput.value = '';
            novoProduto.querySelector('.valor-bruto').textContent = '$ 0.00';
            novoProduto.querySelector('.valor').textContent = '$ 0.00';
        }
    });

    valorDolarInput.addEventListener('input', () => {
        calcularCenario(button.closest('.cenario').querySelector('button'));
    });
}

// Função para remover um produto personalizado
function removerProduto(button) {
    const produtoDiv = button.closest('.produto');
    produtoDiv.remove();
    calcularCenario(button.closest('.cenario').querySelector('button'));
}

// Função para calcular um cenário específico
function calcularCenario(button) {
    const cenarioDiv = button.closest('.cenario');
    const descontoSelect = cenarioDiv.querySelector('.desconto');
    const nivelDesconto = descontoSelect.value;
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

    // Calcula produtos padrão (Jira, JSM, Confluence)
    cenarioDiv.querySelectorAll('.produto:not(.personalizado)').forEach((produtoDiv) => {
        const checkbox = produtoDiv.querySelector('input[type="checkbox"]');
        const tipo = produtoDiv.querySelector('.tipo');
        
        if (checkbox.checked && tipo) {
            const quantidadeInput = produtoDiv.querySelector('.quantidade');
            const valorBrutoSpan = produtoDiv.querySelector('.valor-bruto');
            const valorSpan = produtoDiv.querySelector('.valor');
            const tierElement = produtoDiv.querySelector('.tier'); // Novo elemento para mostrar o tier

            if (quantidadeInput.value) {
                const quantidadeUsuarios = parseInt(quantidadeInput.value);
                const produtoId = checkbox.className;
                const faixas = produtos[produtoId][tipo.value];
                let valorBruto = 0;

                for (const faixa in faixas) {
                    const [min, max] = faixa.split("-").map(Number);
                    if (quantidadeUsuarios >= min && quantidadeUsuarios <= max) {
                        valorBruto = faixas[faixa];
                        break;
                    }
                }

                // Mostra o tier
                mostrarTier(quantidadeUsuarios, produtoId, tipo.value, tierElement);

                valorBrutoSpan.textContent = `$ ${formatarValor(valorBruto)}`;
                const valorComDesconto = valorBruto * desconto;
                valorTotalDolar += valorComDesconto;
                valorSpan.textContent = `$ ${formatarValor(valorComDesconto)}`;
            }
        }
    });

    // Calcula produtos personalizados
    cenarioDiv.querySelectorAll('.produto.personalizado').forEach((produtoDiv) => {
        const checkbox = produtoDiv.querySelector('input[type="checkbox"]');
        const valorDolarInput = produtoDiv.querySelector('.valor-dolar');
        const valorBrutoSpan = produtoDiv.querySelector('.valor-bruto');
        const valorSpan = produtoDiv.querySelector('.valor');

        if (checkbox.checked && valorDolarInput.value) {
            const valorBruto = parseFloat(valorDolarInput.value) || 0;
            valorBrutoSpan.textContent = `$ ${formatarValor(valorBruto)}`;
            const valorComDesconto = valorBruto * desconto;
            valorTotalDolar += valorComDesconto;
            valorSpan.textContent = `$ ${formatarValor(valorComDesconto)}`;
        }
    });

    // Atualiza os totais do cenário
    const valorTotalDolarElement = cenarioDiv.querySelector('.valorTotalDolar');
    const valorTotalRealElement = cenarioDiv.querySelector('.valorTotalReal');
    
    valorTotalDolarElement.textContent = `O valor total em dólar é: $ ${formatarValor(valorTotalDolar)}`;
    const valorTotalReal = valorTotalDolar * taxaDolar;
    valorTotalRealElement.textContent = `O valor total em real é: R$ ${formatarValor(valorTotalReal)}`;

    return valorTotalReal;
}

// Função para calcular a margem
function calcularMargem(button) {
    const cenarioDiv = button.closest('.cenario');
    const margemInput = cenarioDiv.querySelector('.margem');
    const valorTotalReal = parseFloat(cenarioDiv.querySelector('.valorTotalReal').textContent.replace("O valor total em real é: R$ ", "").replace(".", "").replace(",", "."));
    const margem = parseFloat(margemInput.value);

    if (isNaN(valorTotalReal)) {
        alert("Por favor, calcule o valor total em reais primeiro.");
        return;
    }

    if (isNaN(margem) || margem < 0 || margem >= 100) {
        alert("Por favor, insira uma margem válida (entre 0% e 99%).");
        return;
    }

    // Calcula o valor final com margem
    const valorfinal = valorTotalReal / (1 - margem / 100);
    cenarioDiv.querySelector('.valorfinal').textContent = `Valor com margem de ${margem}%: R$ ${formatarValor(valorfinal)}`;
}

// Função para comparar os cenários
function compararCenarios() {
    const cenarios = document.querySelectorAll('.cenario');
    if (cenarios.length < 2) {
        alert("É necessário ter pelo menos 2 cenários para comparar.");
        return;
    }

    // Obtém os valores totais de cada cenário
    const valoresTotais = [];
    cenarios.forEach((cenarioDiv) => {
        const valorTotalReal = calcularCenario(cenarioDiv.querySelector('button'));
        valoresTotais.push(valorTotalReal);
    });

    const [valorCenario1, valorCenario2] = valoresTotais;

    // Determina qual cenário tem o maior valor
    const maiorValor = Math.max(valorCenario1, valorCenario2);
    const menorValor = Math.min(valorCenario1, valorCenario2);

    // Calcula a margem necessária para igualar os valores
    const margemNecessaria = ((maiorValor / menorValor) - 1) * 100;

    // Exibe o resultado da comparação
    const resultadoComparacao = document.getElementById('resultado-comparacao');
    resultadoComparacao.innerHTML = `
        <h4>Resultado da Comparação:</h4>
        <p><strong>Cenário 1:</strong> R$ ${formatarValor(valorCenario1)}</p>
        <p><strong>Cenário 2:</strong> R$ ${formatarValor(valorCenario2)}</p>
        <p><strong>Maior valor:</strong> R$ ${formatarValor(maiorValor)}</p>
        <p><strong>Margem necessária para igualar:</strong> ${formatarValor(margemNecessaria)}%</p>
    `;
}

// Função para formatar valores
function formatarValor(valor, casasDecimais = 2) {
    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: casasDecimais,
        maximumFractionDigits: casasDecimais,
    });
}

// Função para buscar o valor atual do dólar (PTAX)
async function getPTAX() {
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json');
        const data = await response.json();
        taxaDolar = parseFloat(data[0].valor).toFixed(2); // Arredonda para 2 casas decimais
        document.querySelectorAll('.taxaPTAX').forEach(element => {
            element.textContent = `O valor do dólar é: R$ ${formatarValor(taxaDolar)}`;
        });
        calcularCenario(document.querySelector('.cenario').querySelector('button')); // Recalcula os valores com a nova taxa
    } catch (error) {
        console.error("Erro ao obter a taxa PTAX:", error);
        alert("Erro ao obter a taxa PTAX. Usando valor padrão.");
    }
}

// Função para mostrar o tier
function mostrarTier(quantidade, produtoId, tipo, elemento) {
    const faixas = produtos[produtoId][tipo];
    let tier = "Nenhum tier encontrado";

    for (const faixa in faixas) {
        const [min, max] = faixa.split("-").map(Number);
        if (quantidade >= min && quantidade <= max) {
            tier = `Tier: ${faixa}`;
            break;
        }
    }

    // Atualiza o elemento com o tier
    elemento.textContent = tier;
}

// Função para tornar o campo do dólar editável
function tornarCampoDolarEditavel(cenarioDiv) {
    const taxaPTAXElement = cenarioDiv.querySelector('.taxaPTAX');
    const taxaDolarInput = document.createElement("input");
    taxaDolarInput.type = "number";
    taxaDolarInput.value = Number(taxaDolar).toFixed(2); // Valor atual do dólar
    taxaDolarInput.style.width = "70px"; // Ajuste o tamanho conforme necessário

    // Substitui o texto pelo campo de entrada
    taxaPTAXElement.textContent = "";
    taxaPTAXElement.appendChild(taxaDolarInput);

    // Foca no campo de entrada automaticamente
    taxaDolarInput.focus();

    // Atualiza o valor do dólar ao pressionar "Enter" ou ao sair do campo
    taxaDolarInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            atualizarTaxaDolar(taxaDolarInput.value, cenarioDiv);
            restaurarTexto(taxaPTAXElement, taxaDolarInput.value); // Restaura o texto após atualizar
        }
    });

    taxaDolarInput.addEventListener("blur", () => {
        atualizarTaxaDolar(taxaDolarInput.value, cenarioDiv);
        restaurarTexto(taxaPTAXElement, taxaDolarInput.value); // Restaura o texto após atualizar
    });
}

// Função para atualizar a taxa do dólar
function atualizarTaxaDolar(novoValor, cenarioDiv) {
    taxaDolar = parseFloat(novoValor).toFixed(2); // Atualiza a taxa do dólar
    calcularCenario(cenarioDiv.querySelector('button')); // Recalcula os valores com a nova taxa
}

// Função para restaurar o texto após edição
function restaurarTexto(elemento, valor) {
    elemento.textContent = `O valor do dólar é: R$ ${formatarValor(valor)}`;
}

// Configura os event listeners para o cenário inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const cenarioInicial = document.querySelector('.cenario');
    if (cenarioInicial) {
        configurarEventListeners(cenarioInicial);
    }
});


// Inicializa a taxa PTAX ao carregar a página
getPTAX();