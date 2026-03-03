# 🚀 FisioPlay – Frontend (React + Vite)

Este é o **frontend** do projeto FisioPlay. Ele foi desenvolvido para ser agnóstico ao servidor, o que significa que pode ser integrado com **qualquer backend** (Python, Node, .NET, etc.), desde que a API respeite o contrato de autenticação esperado.

---

## 📋 Pré-requisitos

### 1. Verificar instalação do Node.js
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. No terminal, execute:

```bash
node -v
# ou
npm -v

```

Se aparecer uma versão (ex: v18.x, v20.x), você está pronto.
Não tenho: Instale a versão LTS pelo site oficial: nodejs.org.

🛠️ Instalação e Execução
Siga os passos abaixo para colocar o projeto em funcionamento:

Instalar dependências: Dentro da pasta raiz do projeto, execute:

```bash
npm install

```
Apos instalar as dependências executar, 
```bash
npm run dev

```
Acessar o projeto: O Vite indicará o endereço local no terminal, geralmente:
🌐 http://localhost:5173 ou http://localhost:8080

⚙️ Configuração do Backend (.env)
Para que o frontend consiga se comunicar com a sua API, você deve configurar as variáveis de ambiente.
Localize o arquivo .env na raiz do projeto.
Edite a variável VITE_API_URL com o endereço do seu backend:

# Exemplos comuns:
VITE_API_URL=http://localhost:8000
# ou
VITE_API_URL=[http://127.0.0.1:5000](http://127.0.0.1:5000)

[!IMPORTANT]
Sempre que alterar o arquivo .env, você deve reiniciar o servidor para que as mudanças surtam efeito. Pare o processo atual (Ctrl + C) e rode npm run dev novamente.

🔐 Testando o Fluxo de Login
Com o backend rodando e o endereço configurado no .env:

Abra o FisioPlay no navegador.

Insira as credenciais (E-mail e Senha).

O frontend disparará uma requisição para:

POST {VITE_API_URL}/auth/login

Formato de Resposta Esperado
O seu backend deve retornar um JSON seguindo esta estrutura para que o login seja validado:

JSON
{
  "token": "seu_token_aqui",
  "user": {
    "id": "123",
    "email": "usuario@exemplo.com",
    "name": "Nome do Usuário"
  }
}
Se os dados estiverem corretos, o Dashboard será carregado automaticamente.
