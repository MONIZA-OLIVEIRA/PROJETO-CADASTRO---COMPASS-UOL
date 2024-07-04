// Função principal que retorna o cadastro
function funcaodeCadastro() {
    return {
        // cadastro dos dados
        Cadastrar: function() {
            // Coleta dos campos
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

            // Validação dos campos obrigatórios
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
        }
    }
}