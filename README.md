# Agência Compromisso

Em parceria com a Lojas Renner, o CEA (Centro de Educação Ambiental da Vila Pinto) começou a desenvolver um projeto para encontrar modelos de prova para suas criações dentro do bairro Bom Jesus. Para quem não é familiar com este termo, modelo de prova é a pessoa que experimenta peças-piloto antes da produção em larga escala.

Para facilitar a localização de modelos de prova dentro da própria comunidade e, no caminho, fortalecer a economia local, nasceu a Agência Compromisso. Saiba mais acessando a página do Facebook, Instagram e Youtube.

## Projeto

Para auxiliar na captação dos dados e medidas das modelos da comunidade e suas respectivas, construímos um primeiro MVP contendo um banco de dados associado ao Google Forms.

Durante o Hackathon da Diversidade, evento que aconteceu no escritório da Thoughtworks em Porto Alegre, começamos a trabalhar em nosso segundo MVP: uma interface customizada para facilitar ainda mais o processo cadastro e busca das modelos.

Após o evento, algumas pessoas seguiram trabalhando na iniciativa que tem como objetivo transformar o projeto em uma prancheta digital que pode ser acessada offline, com novas funcionalidades, como filtros, edição, busca e melhor usabilidade.

## Tecnologias Utilizadas

**Linguagem:** React

**Hosting:** Heroku

**CI/CD:** CircleCI

## Pré-requisitos

Para rodar a aplicação você precisa:

- Yarn ou npm

## Como rodar a aplicação

Depois de clonar o projeto

### Instale as dependências:

**Yarn**

```
yarn install
```

**npm**

```
npm install
```

### Rode na sua máquina local:

**Yarn**

```
yarn start
```

**npm**

```
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) em seu navegador.

## CI/CD

O projeto conta com uma pipeline configurada no CircleCI que você pode acessar atráves desse [link](https://app.circleci.com/github/hackathon-da-diversidade/agencia-compromisso-web/pipelines). A cada novo commit na master a pipeline roda automáticamente, buildando e rodando todos os testes da aplicação. Caso esse processo seja um sucesso é feito o deploy no ambiente de staging. O deploy para produção é um passo manual e pode ser facilmente execultado dentro do CircleCI.

## Ambientes

- [Staging](https://agencia-compromisso-stg.herokuapp.com/)

- [Produção](https://agencia-compromisso.herokuapp.com/)

## Links úteis

[API](https://github.com/hackathon-da-diversidade/agencia-compromisso)

[trello](https://trello.com/b/YL5SbWzZ/ag%C3%AAncia-compromisso)

## Contribuindo

Qualquer ajuda é bem vinda e adorariamos receber sua contribuição. Acesse o nosso trello para entender o estágio atual do projeto. Lá você encontra tudo que estamos trabalhando e o que queremos iniciar. Procure também as pessoas envolvidas no projeto atualmente em caso de dúvidas.
