# 🎮 GameTrack

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-563D7C?style=flat-square&logo=vite&logoColor=yellow)](https://vitejs.dev/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://render.com/)

---

Gerencie e acompanhe seus jogos favoritos com o **GameTrack** — uma aplicação full stack onde o usuário pode visualizar informações detalhadas sobre jogos (como data de lançamento, plataformas e notas), favoritar títulos, definir status personalizados e manter tudo sincronizado com sua conta.

> 💡 Projeto desenvolvido para estudo e prática de tecnologias modernas de desenvolvimento web (frontend, backend e banco de dados).

---

## 🚀 Deploys

- **Frontend:** [GameTrack - Vercel](https://gametrack-nine.vercel.app)
- **Backend API:** [GameTrack API - Render](https://gametrack-backend.onrender.com)

---

## 🧩 Tecnologias Utilizadas

### Frontend

- ⚛️ **React** com **Vite**
- 💅 **Styled Components**
- 🌐 **Axios** (requisições HTTP)
- 🔄 **React Router DOM**
- 💾 **Context API** (autenticação e gerenciamento global de estado)

### Backend

- 🧠 **Node.js + Express**
- 🗄️ **PostgreSQL** com **Prisma ORM**
- 🔒 **JWT (JSON Web Token)** para autenticação
- ☁️ **Render** (deploy do backend)
- 🧰 **CORS** configurado para integração segura com o frontend

---

## 📸 Demonstração

### Tela inicial

Exibe uma lista de jogos com informações vindas da [RAWG API](https://rawg.io/apidocs).

![tela-inicial](./frontend/public/gif/tela-inicial.gif)

### Detalhes do jogo

Mostra dados completos, como:

- Nome
- Data de lançamento
- Plataformas
- Nota de avaliação

![detalhes-jogo](./frontend/public/gif/detalhes-jogo.gif)

### Login e Meus Jogos

Crie uma conta, faça login e salve seus jogos favoritos de forma persistente.

![login](./frontend/public/gif/login.gif)

---

## ⚙️ Como rodar localmente

### 🔧 Pré-requisitos

- Node.js instalado
- PostgreSQL rodando localmente ou link de conexão com Render
- Conta na [RAWG API](https://rawg.io/apidocs) para obter sua chave

### 📦 Passo a passo

#### Clonar o projeto

```bash
git clone https://github.com/seuusuario/gametrack.git
cd gametrack
```

Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

Crie um arquivo .env

```bash
DATABASE_URL="sua_url_do_postgres"
JWT_SECRET="sua_chave_jwt"
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

Crie um arquivo .env

```bash
VITE_RAWG_KEY="sua_chave_rawg_api"
```

Acesse o app em:

```bash
http://localhost:5173
```

---

## 💡 Funcionalidades principais

- 🔐 Autenticação JWT
- 🕹️ Favoritar / desfavoritar jogos
- 📊 Atualização de status dos jogos
- 🔍 Busca e filtros
- 💾 Persistência de dados no banco
- 🧭 Rotas protegidas e públicas

---

## 🛠️ Próximas melhorias

- 💬 Sistema de comentários e reviews dos jogos
- ⭐ Ranking dos jogos mais adicionados
- 🌙 Tema escuro / claro com toggle
- 🧩 Integração com mais APIs de games

---

## 👨‍💻 Autor

Endrius da Silva dos Santos
Desenvolvedor Full-Stack • Apaixonado por tecnologia, design e experiências interativas.

💼 [LinkedIn](https://www.linkedin.com/in/endrius-da-silva-dos-santos-8a7113328)
💻 [GitHub](https://github.com/endriusssantos)

Este projeto foi criado com o objetivo de consolidar conhecimentos em desenvolvimento web fullstack, explorando boas práticas, autenticação segura e integração entre frontend e backend.
