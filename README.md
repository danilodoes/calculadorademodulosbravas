# Calculadora de Módulos Bravas

- Git Page do projeto: [Clique aqui](https://danilodoes.github.io/calculadorademodulosbravas/)

## Sobre o Projeto
Este projeto é uma **calculadora especializada** desenvolvida para auxiliar no **dimensionamento de módulos de comandos** necessários em instalações de **Controle de Acesso** e **Automação de Circuitos Eletroeletrônicos**.

Foi desenvolvido para **simplificar o trabalho da equipe de projetos e integradores**, eliminando a necessidade de cálculos manuais complexos e propensos a erros, e fornecendo uma estimativa rápida da quantidade de módulos requeridos para um determinado projeto de automação.

## Objetivos
- **Otimizar o Dimensionamento:** Reduzir o tempo e a complexidade na determinação dos módulos de automação necessários para um projeto.
- **Aumentar a Precisão:** Minimizar erros de cálculo que poderiam levar a orçamentos incorretos ou problemas durante a instalação.
- **Auxiliar o Integrador:** Oferecer uma ferramenta prática e acessível para profissionais que trabalham com os equipamentos da BRAVAS Tecnologia.
- **Aplicar Conceitos de Desenvolvimento:** Utilizar um projeto real para consolidar conhecimentos em lógica de programação e desenvolvimento web.

## Funcionalidades
- **Estimativa de Módulos:** Através dos dados que o usuário preenche, a aplicação calcula automaticamente a quantidade e quais os módulos serão necessários para automação ou projeto de controle de acesso.
- **Interface Intuitiva:** Um formulário web simples e direto onde os dados de entrada são facilmente inseridos.
- **Feedback Imediato:** O resultado do dimensionamento é exibido em tempo real, após a inserção dos dados.
- **Gerar Relatório do Cálculo:** Após calcular, a aplicação também gera um relatório em PDF, para que o usuário possa enviar para o setor de projetos e iniciar uma avaliação.

## Como Funciona
***O projeto opera com base em regras de negócio específicas dos equipamentos Bravas:***

1.  **Entrada de Dados:** O usuário informa no formulário a quantidade total de recursos a serem controlados fisicamente (portas, catracas, etc.).
2.  **Lógica de Dimensionamento:** O **JavaScript** no *front-end* aplica a lógica de cálculo que simula a capacidade de cada tipo de módulo e funcionalidades na arquitetura eletrônica da BRAVAS.
3.  **Resultado:** Os resultados são formatados e apresentados ao usuário na própria interface, indicando a lista e a quantidade de módulos a serem adquiridos para atender à demanda informada (além de ser gerado um relatório das informações inputadas e do cálculo realizado).

## Tecnologias Utilizadas
- **HTML:** Estrutura base da aplicação e do formulário de entrada.
- **CSS + Bootstrap:** Estilização da interface para garantir clareza e usabilidade.
- **JavaScript:** Lógica de cálculo, dimensionamento e geração do relatório. Responsável por processar os dados de entrada e gerar os resultados com base nas regras de de negócio estabelecidas.


- Funcionando: [Clique aqui para visualizar o projeto em funcionamento](https://www.bravas.ind.br/calculadora/)