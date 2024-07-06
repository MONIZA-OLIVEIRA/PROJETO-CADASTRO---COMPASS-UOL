## Sistema de Cadastro de Pacientes

### Descrição

Este projeto consiste em um sistema simples de cadastro de pacientes desenvolvido utilizando HTML, JavaScript e CSS. O desenvolvimento foi dividido em partes:

- **HTML:** Estrutura básica da aplicação.
- **JavaScript:** Implementação progressiva incluindo cadastro e validação dos campos, armazenamento local, recuperação , exibição de dados, e exclusão de registros.
- **CSS:** Estilo simples para um layout limpo.

### Funcionalidades Principais

- **Cadastro de Pacientes:** Permite adicionar novos pacientes à lista.
- **Busca de Pacientes:** Possui uma funcionalidade de busca que permite encontrar pacientes pelo nome e exibir os detalhes do paciente buscado.
- **Exclusão de Pacientes:** Permite remover um paciente da lista.

### Armazenamento Local

Utiliza o armazenamento local (localStorage) para manter os dados dos pacientes.

### Tecnologias Utilizadas

- **HTML:** Estrutura da aplicação.
- **CSS:** Estilização e layout da interface.
- **JavaScript:** Lógica de programação para interatividade da aplicação e manipulação dos dados.

### Dificuldades Enfrentadas

Durante o desenvolvimento, algumas dificuldades foram encontradas:

- **Manipulação da localStorage:** Gerenciamento do armazenamento local.
- **Sincronização de Dados:** Adição e remoção de nomes na lista.
- **Validação de Entrada:** Implementação adequada da validação para o campo de busca e para os nomes inseridos.
- **Estilo e Layout:** Ajuste do layout para uma apresentação clara e responsiva.

### Como Utilizar

Para utilizar o sistema:

1. Clone o repositório.
2. Execute o arquivo `index.html` em seu navegador web.
3. Para cadastrar um novo paciente, preencha os dados e clique no botão "Cadastrar". Todos os campos são obrigatórios; caso não preenchidos, uma mensagem será exibida na tela.
4. Para buscar um cadastro, digite o nome desejado e clique em "Consultar Cadastro". O cadastro do paciente buscado será exibido abaixo.
5. Para excluir um cadastro, clique no botão "Excluir" ou "Fechar" para limpar o formulário.
