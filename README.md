## Requisitos
Para executar este projeto, você precisará ter instalado:
- [Node.js - v18](https://nodejs.org/en/)
- [Docker - v24](https://www.docker.com/)

## Primeiros Passos

Para começar, instale as dependências e execute o servidor de desenvolvimento:
  
```bash
npm install
npm run dev
```
Isso iniciará o servidor de desenvolvimento, permitindo que você trabalhe no projeto.

## Executar o Servidor Mock
Para executar o servidor mock, que estará disponível em http://localhost:1080, utilize o seguinte comando:

```bash
docker compose up
```

## Testes Unitários
Para executar os testes unitários, use os comandos a seguir:

```bash
npm run test
npm run test:watch
```

## Testes End-to-End (e2e)
Execute os testes end-to-end com o comando:

```bash
npm run test:e2e
```

## Build da Aplicação
Para gerar o build da aplicação, utilize o seguinte comando:

```bash
npm run build
```

## Análise de Código (Lint)
Para realizar a análise de código e garantir conformidade com as práticas recomendadas, execute:

```bash
npm run lint
```