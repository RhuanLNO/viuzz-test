Projeto de portfólio pensado para controle de funcionários de empresa com funções de login, registro, editar e excluir funcionários.

App.tsx - Contém funções para renderização condicional <br>
Home.tsx - Contém a Navbar <br>
Login2.tsx - Página de login (acesso com **Usuário: admin Senha: admin**, necessário para o acesso a lista de funcionários) <br>
Employees.tsx - Lista de usuários com funções de editar e deletar funcionários. Utiliza o localstorage para armazenar os funcionários. <br>
RegisterForm.tsx - Página de registro de funcionários <br>
_________________________________________________________________________________________________________________________________________________________________________

Styled.ts, StyledHome.ts, StyledLogin.ts - Estilização com Styled-Components

_________________________________________________________________________________________________________________________________________________________________________

Como utilizar o projeto:

Fazer o login no botão login com Usuário: admin Senha: admin
Cadastrar novo funcionário novo funcionário clicando no botão cadastro. Cadastro com nome, e-mail e cidade. (Necessário localStorage para funcionar).
Em funcionários é permitido editar ou remover os funcionários cadastrados.
Ao editar funcionário e clicar no botão salvar, a página funcionários é exibida novamente.
