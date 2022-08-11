Projeto de portfólio pensado para controle de funcionários de empresa com funções de login, registro, editar e excluir funcionários. Realizado como teste de estágio para Viuzz.

Projeto iniciado em: 31/07/2022 <br>
Projeto finalizado em: 10/08/2022 <br>
Deadline: Não definida <br>

_______________________________________________________________________________________________________________________________________________________________________

Recursos solicitados:

Autenticação de usuários para acesso a tela de cadastro e funcionários <br>
Tela de login com email e senha <br>
Formulário de cadastro com nome, cidade e cargo <br>
Utilização de API do IBGE (https://servicodados.ibge.gov.br/api/v1/localidades/distritos) para seleção de cidade <br>
Utilizar o localStorage para armazenamento de dados da aplicação <br>

_______________________________________________________________________________________________________________________________________________________________________

Recursos opcionais utilizados: <br>

Styled-Components <br>
Material-UI <br>
TypeScript <br>

_______________________________________________________________________________________________________________________________________________________________________

Como rodar o projeto:

Via Git Bash, utilize o comando => **git clone https://github.com/RhuanLNO/viuzz-test.git** <br>
Abra a pasta pelo VSCode <br>
Instale as libs utilizando o comando => **yarn** <br>
Para iniciar o projeto, utilize o comando => **yarn run dev** <br>
Abra o link local fornecido no navegador <br>

_______________________________________________________________________________________________________________________________________________________________________

Como utilizar o projeto:<br>

Fazer o login no botão login<br>

Usuário: admin <br>
Senha: admin <br>

Cadastrar novo funcionário novo funcionário clicando no botão cadastro. Cadastro com nome, e-mail e cidade. (Necessário localStorage para funcionar).<br>
Em funcionários é permitido editar ou remover os funcionários cadastrados.<br>
Ao editar funcionário e clicar no botão salvar, a página funcionários é exibida novamente.

_______________________________________________________________________________________________________________________________________________________________________

App.tsx - Contém funções para renderização condicional <br>
Home.tsx - Contém a Navbar <br>
Login2.tsx - Página de login (acesso com **Usuário: admin Senha: admin**, necessário para o acesso a lista de funcionários) <br>
Employees.tsx - Lista de usuários com funções de editar e deletar funcionários. Utiliza o localstorage para armazenar os funcionários. <br>
RegisterForm.tsx - Página de registro de funcionários <br>

_______________________________________________________________________________________________________________________________________________________________________

Styled.ts, StyledHome.ts, StyledLogin.ts - Estilização com Styled-Components

_______________________________________________________________________________________________________________________________________________________________________
