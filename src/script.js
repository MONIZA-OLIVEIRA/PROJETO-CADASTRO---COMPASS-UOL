// Cria uma instância da função de cadastro
const cadastro = funcaodeCadastro();

// Associa a função de cadastro ao botão de cadastro
document.getElementById('Cadastrar').onclick = function() {
    cadastro.Cadastrar();
};

// Função principal que retorna um objeto com a função de cadastro
function funcaodeCadastro() {
    return {
        // cadastro dos dados
        Cadastrar: function() {
            // Coleta de valores
            const nome = document.getElementById('nome').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const telefone = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;
            const rua = document.getElementById('rua').value;
            const numero = document.getElementById('numero').value;
            const bairro = document.getElementById('bairro').value;
            const cidade = document.getElementById('cidade').value;
            const cep = document.getElementById('cep').value;
            const email = document.getElementById('email').value;
            const convenio = document.getElementById('convenio').value;

            // Validação dos campos para garantir que todos os campos obrigatórios estão preenchidos
            if (!nome || !dataNascimento || !telefone || !cpf || !rua || !numero || !bairro || !cidade || !cep || !email || !convenio) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Cria um objeto com os dados do formulário
            const cadastroForm = {
                Nome: nome,
                DataNascimento: dataNascimento,
                Telefone: telefone,
                CPF: cpf,
                Rua: rua,
                Numero: numero,
                Bairro: bairro,
                Cidade: cidade,
                CEP: cep,
                Email: email,
                Convenio: convenio
            };

            // Recupera os dados dos pacientes, ou um array vazio
            let pacientes;
            let pacienteJSON = localStorage.getItem('Paciente');

            if (pacienteJSON !== null) {
                pacientes = JSON.parse(pacienteJSON);
            } else {
                pacientes = [];
            }
            
            // Adiciona o novo cadastro ao array
            pacientes.push(cadastroForm);
            
            // Armazena o array atualizado no localStorage
            localStorage.setItem('Paciente', JSON.stringify(pacientes));

            
            alert('Cadastro Concluído');

            // Limpa os campos do formulário após o cadastro
            document.getElementById('cadastroForm').reset();
        }
    };
}



// Função para recuperar os dados do cadastro armazenados no localStorage
function recuperarDadosCadastro() {
    // Recupera o array "Paciente" do localStorage
    const pacientes = JSON.parse(localStorage.getItem('Paciente')) || [];
    return pacientes;
}

// Função para buscar um paciente pelo nome na array do localStorage
function buscarPaciente(nomeChave, nome) {
    // Obter os dados do localStorage
    const items = obterdados(nomeChave);

    // Procurar paciente pelo nome
    const pacienteEncontrado = items.find(item => item.Nome === nome);

    return pacienteEncontrado;
}

//clique no botão de busca
document.getElementById('consultarcadastro').addEventListener('click', function() {
    // Obter o valor digitado no campo de busca
    const nomeBusca = document.getElementById('nomebusca').value.trim();
    const chaveLocalStorage = 'Paciente'; 
    const dadosExibidos = document.getElementById('dadosExibidos');
    
    // Verificar se o campo de busca está vazio
    if (nomeBusca !== '') {
        // Chamar a função buscarPaciente
        let pacienteEncontrado = buscarPaciente(chaveLocalStorage, nomeBusca);

    
        if (pacienteEncontrado) {
            let html = '';
            //dados do paciente encontrado
            html += `
                <p><strong>Nome:</strong> ${pacienteEncontrado.Nome}</p>
                <p><strong>Data de Nascimento:</strong> ${pacienteEncontrado.DataNascimento}</p>
                <p><strong>Telefone:</strong> ${pacienteEncontrado.Telefone}</p>
                <p><strong>CPF:</strong> ${pacienteEncontrado.CPF}</p>
                <p><strong>Endereço:</strong> ${pacienteEncontrado.Rua}, ${pacienteEncontrado.Numero}, ${pacienteEncontrado.Bairro}, ${pacienteEncontrado.Cidade}, ${pacienteEncontrado.CEP}</p>
                <p><strong>E-Mail:</strong> ${pacienteEncontrado.Email}</p>
                <p><strong>Convênio:</strong> ${pacienteEncontrado.Convenio}</p>
                <hr>
            `;
            
            // Exibir os dados no elemento HTML
            dadosExibidos.innerHTML = html;
            
        } else {
            alert('Paciente não encontrado.');
        }
    } else {
        alert('Por favor, digite um nome para buscar.');
    }
});

// Função para obter os dados do localStorage
function obterdados(nomeChave) {
    let dados = localStorage.getItem(nomeChave);
    if (dados) {
        return JSON.parse(dados);
    } else {
        return []; 
    }
}

// recupera os dados e exibe no console
const dadosArmazenados = recuperarDadosCadastro();
console.log('Dados Armazenados:', dadosArmazenados);


// botao Excluir cadastro
document.getElementById('excluircadastro').addEventListener('click', function() {
    const nomeBusca = document.getElementById('nomebusca').value.trim();
    const chaveLocalStorage = 'Paciente';

    if (nomeBusca != ''){
        let pacientes = JSON.parse (localStorage.getItem(chaveLocalStorage)) || [];

        // encontrar o indice para excluir
        const index = pacientes.findIndex (paciente => paciente.Nome === nomeBusca);
        //apga o paciente da array
        if (index !== -1);
            pacientes.splice(index, 1);
            // atualiza a array
            localStorage.setItem(chaveLocalStorage, JSON.stringify(pacientes));

            //limpa a exibição
            document.getElementById('dadosExibidos').innerHTML = '';
            document.getElementById('nomebusca').value = '';
            alert ('Paciente Excluido')
    }
   
})
 // botao fechar
document.getElementById('fechar').addEventListener('click', function() {
       
            //limpa a exibição e a busca
            document.getElementById('dadosExibidos').innerHTML = '';
            
            document.getElementById('nomebusca').value = '';

})
