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
