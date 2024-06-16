# Projeto React/Next.js Beta Test
Este é um projeto [Next.js](https://nextjs.org/) e foi hospedado em [https://beta-test-nextjs.vercel.app/](https://beta-test-nextjs.vercel.app/).

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR).
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **Zod**: Biblioteca para validação de esquemas de dados em TypeScript.
- **Jest**: Framework de teste de JavaScript.
- **Husky**: Ferramenta para execução de scripts pré-commit e pré-push.
- **Commitizen**: Utilitário para facilitar commits conforme convenção.
- **ESLint**: Ferramenta de linting para JavaScript e TypeScript.
- **Prettier**: Formatador de código para manter consistência no estilo de código.
- **TypeScript**: Linguagem de programação superset do JavaScript.
- **PostCSS**: Ferramenta para transformar CSS com JavaScript.
- **Autoprefixer**: Plugin PostCSS para adicionar prefixos de vendor automaticamente.
- **React Icons**: Biblioteca de ícones para React.
- **React Intersection Observer**: Componente React para observar elementos entrando e saindo da visão do usuário.
- **React Toastify**: Biblioteca para exibir notificações toast em React.
- **clsx**: Utilitário para gerar strings de classe condicionalmente.

## Como executar

Modo desenvolvedor:

```bash
npm install
# and
npm run dev
```

Testes unitários:
```bash
npm run test
```

Commit com patterns/lint:
```bash
npm run commit
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Nota pessoal.

Este projeto foi criado utilizando NextJS 14 e foram utilizados conceitos relativamente novos como [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations), [App Router](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration), [Server and Client Composition](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns).
Todas as rotas são renderizadas no lado do servidor (server-side rendering). Para validação de formulários, foi adotado o Zod para eficiência na implementação.
Testes básicos foram incluídos por questões de tempo. Este é um projeto de teste React, portanto, não foi desenvolvida uma camada de backend, conforme não especificado.

## Informativo padrão

Este projeto não está disponível para uso comercial
Tempo de desenvolvimento: 13:52:00 (aproximadamente)
Informações de contato: [Portfolio](https://www.brunohenriqueweb.com/)