# Fisio Play — Login Portal

Resumo rápido
- Projeto React + TypeScript criado com Vite
- UI pronta (Tailwind + componentes shadcn/Radix)
- Roteamento mínimo (`/` e `*`)

O que eu adicionei
- Serviço de autenticação: `src/services/auth.ts` — funções `loginRequest` e `fetchMe`.
- Helper `authFetch` em `src/lib/api.ts` — adiciona token em requisições.
- Contexto de autenticação: `src/contexts/AuthContext.tsx` — `AuthProvider` e `useAuth()`.
- Integração do login na página `src/pages/Index.tsx` (usa `useAuth().login`).

Como conectar ao backend
1. Defina a variável de ambiente `VITE_API_URL` no seu `.env` (ex: `VITE_API_URL=http://localhost:4000`).
2. O endpoint de login esperado é `POST ${VITE_API_URL}/auth/login` que deve retornar JSON:

```json
{ "token": "<jwt>", "user": { "id": "...", "email": "...", "name": "..." } }
```

3. Opcionalmente `GET ${VITE_API_URL}/auth/me` é usado para buscar dados do usuário quando o token existe.

Como iniciar (desenvolvimento)

```bash
npm install
npm run dev
```

Arquitetura e próximos passos sugeridos
- Persistência de token: atualmente armazenado em `localStorage` por simplicidade.
- Proteção de rotas: criar um `PrivateRoute` que verifica `useAuth().user`.
- Refresh token: implementar refresh/expiração se backend fornecer.
- Melhor UX: usar toasts/sonner para notificações ao invés de `alert()` (o projeto já tem `sonner`).

Se quiser, eu posso:
- Implementar rotas privadas e uma tela de dashboard.
- Substituir `alert()` por toasts e feedback visual.
- Integrar com um backend de exemplo (mock) para testes locais.
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
