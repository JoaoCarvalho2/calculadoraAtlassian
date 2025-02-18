function calcularJira() {
   
    const escolhaUsuario = parseInt(document.getElementById("numeroEscolhido").value);
    const tipoJira = document.getElementById("tipoJira").value; 
    const resultadoDiv = document.getElementById("resultado");

   
    if (isNaN(escolhaUsuario) || escolhaUsuario < 1 || escolhaUsuario > 100) {
        resultadoDiv.textContent = "Por favor, insira um número válido entre 1 e 100.";
        resultadoDiv.className = "erro";
        return;
    }

  
    const jiraStandard = {
        "1-10": 875,
        "11-15": 1300,
        "16-25": 2150,
        "26-50": 4350,
        "51-100": 8600,
    };

    
    const jiraPremium = {
        "1-10": 1700,
        "11-15": 2550,
        "16-25": 4250,
        "26-50": 8500,
        "51-100": 17000,
    };

   
    let jira;
    if (tipoJira === "standard") {
        if (escolhaUsuario >= 1 && escolhaUsuario <= 10) {
            jira = jiraStandard["1-10"];
        } else if (escolhaUsuario >= 11 && escolhaUsuario <= 15) {
            jira = jiraStandard["11-15"];
        } else if (escolhaUsuario >= 16 && escolhaUsuario <= 25) {
            jira = jiraStandard["16-25"];
        } else if (escolhaUsuario >= 26 && escolhaUsuario <= 50) {
            jira = jiraStandard["26-50"];
        } else if (escolhaUsuario >= 51 && escolhaUsuario <= 100) {
            jira = jiraStandard["51-100"];
        }
    } else if (tipoJira === "premium") {
        if (escolhaUsuario >= 1 && escolhaUsuario <= 10) {
            jira = jiraPremium["1-10"];
        } else if (escolhaUsuario >= 11 && escolhaUsuario <= 15) {
            jira = jiraPremium["11-15"];
        } else if (escolhaUsuario >= 16 && escolhaUsuario <= 25) {
            jira = jiraPremium["16-25"];
        } else if (escolhaUsuario >= 26 && escolhaUsuario <= 50) {
            jira = jiraPremium["26-50"];
        } else if (escolhaUsuario >= 51 && escolhaUsuario <= 100) {
            jira = jiraPremium["51-100"];
        }
    }

    function calcularDesconto() {
        // Obtém o valor selecionado no dropdown
        const nivelDesconto = document.getElementById('desconto').value;
    
        let desconto = 0;
    
        // Aplica o desconto com base no nível selecionado
        if (nivelDesconto === "silver") {
            desconto = 0.90; // 10% de desconto
        } else if (nivelDesconto === "gold") {
            desconto = 0.80; // 20% de desconto
        } else if (nivelDesconto === "platinum") {
            desconto = 0.75; // 25% de desconto
        } else {
            desconto = 1; // Sem desconto
        }
    
        // Exibe o resultado
        const resultado = document.getElementById('resultado');
        resultado.textContent = `Desconto aplicado: ${(1 - desconto) * 100}%`;
    }
    /*
    let desconto = 0;
        if (desconto === silver) 
            desconto = 0.90 //10%
        
        else if (desconto === gold)
            desconto = 0.80 //20%
        else if (desconto === platinum)
            desconto = 0.75 //25%
    
        };
  */  
    const valorComDesconto = jira / desconto;

    
    resultadoDiv.innerHTML = `
        <p>Valor bruto: R$ ${jira.toFixed(2)}</p>
        <p>Desconto aplicado: ${desconto * 100}%</p>
        <p>Valor com desconto: R$ ${valorComDesconto.toFixed(2)}</p>
    `;
    resultadoDiv.className = ""}
