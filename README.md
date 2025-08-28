
# Blog Pessoal

Este é um **blog pessoal** feito com **React**, **Vite**, **Tailwind CSS** e **MDX**, que transforma arquivos Markdown em HTML, permitindo criar postagens de forma simples e elegante.

## Tecnologias utilizadas

- **React** – Biblioteca principal para construção da interface.
- **Vite** – Bundler rápido e moderno para desenvolvimento e build.
- **Tailwind CSS** – Framework de CSS utilitário para estilização rápida.
- **MDX** – Permite escrever Markdown com componentes React.

## Funcionalidades

- Transformação de posts em Markdown para HTML.
- Suporte a componentes React dentro dos posts via MDX.
- Estilização responsiva e moderna com Tailwind CSS.
- Estrutura modular para fácil criação e manutenção de posts.

## Estrutura do projeto

```
.
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   ├── posts/           # Posts em Markdown/MDX
│   ├── pages/           # Páginas do blog
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Entrada do projeto
├── tailwind.config.js   # Configuração do Tailwind
├── vite.config.js       # Configuração do Vite
└── package.json
```

## Como rodar o projeto

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`.

## Build para produção

Para gerar a versão final do blog:
```bash
npm run build
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
