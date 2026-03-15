# Guia de Deploy - Portfólio

Este projeto tem **frontend** (React) e **backend** (FastAPI + MongoDB). Siga os passos abaixo.

---

## 1. MongoDB Atlas (Banco de Dados)

1. Acesse [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Crie uma conta gratuita
3. Crie um cluster **M0 (FREE)**
4. Em **Database Access** → adicione um usuário com senha
5. Em **Network Access** → adicione `0.0.0.0/0` para permitir conexões
6. Em **Database** → **Connect** → copie a **connection string** (ex: `mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)

---

## 2. Backend (Render)

1. Acesse [render.com](https://render.com) e faça login com GitHub
2. **New** → **Web Service**
3. Conecte o repositório `gabrielvalle00/Portifolio`
4. Use o arquivo **render.yaml** (Render detecta automaticamente)
5. Ou configure manualmente:
   - **Root Directory:** `backend`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Adicione as variáveis de ambiente:
   - `MONGO_URL`: sua connection string do MongoDB Atlas
   - `DB_NAME`: `portfolio_db` (ou outro nome)
   - `CORS_ORIGINS`: `https://seu-site.vercel.app` (ajuste depois do deploy do frontend)
7. Clique em **Create Web Service**
8. **Copie a URL** do backend (ex: `https://portfolio-api-xxxx.onrender.com`)

---

## 3. Frontend (Vercel)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. **Add New** → **Project**
3. Importe o repositório `gabrielvalle00/Portifolio`
4. Configure:
   - **Root Directory:** `frontend` (clique em Edit e selecione a pasta)
   - **Framework Preset:** Create React App (detectado automaticamente)
5. Adicione a variável de ambiente:
   - `REACT_APP_BACKEND_URL`: URL do backend no Render (ex: `https://portfolio-api-xxxx.onrender.com`)
6. Clique em **Deploy**
7. **Copie a URL** do frontend (ex: `https://portifolio-xxxx.vercel.app`)

---

## 4. Atualizar CORS no Backend

1. Volte ao projeto no **Render**
2. **Environment** → edite `CORS_ORIGINS`
3. Cole a URL do frontend na Vercel (ex: `https://portifolio-xxxx.vercel.app`)
4. **Save** → o Render fará redeploy automático

---

## 5. Deploy via CLI (opcional)

**Frontend (Vercel):**
```bash
cd frontend
vercel login
vercel
```

**Variáveis de ambiente:** configure no dashboard da Vercel ou use `vercel env add REACT_APP_BACKEND_URL`

---

## Resumo das URLs

| Serviço | Onde | URL exemplo |
|---------|------|-------------|
| Banco | MongoDB Atlas | (connection string) |
| API | Render | `https://portfolio-api-xxxx.onrender.com` |
| Site | Vercel | `https://portifolio-xxxx.vercel.app` |

O formulário de contato só funciona quando o frontend aponta para o backend correto (`REACT_APP_BACKEND_URL`) e o backend permite o domínio do frontend no CORS.
