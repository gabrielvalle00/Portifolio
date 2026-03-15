# Portfolio - Gabriel Valle

Portfolio profissional com React (frontend) e FastAPI (backend).

## Pré-requisitos

- **Node.js** 18+ e npm/yarn
- **Python** 3.10+
- **MongoDB** (opcional) – sem MongoDB, o backend usa armazenamento em memória

## Como executar

### 1. Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

API disponível em: http://localhost:8000  
Documentação: http://localhost:8000/docs

### 2. Frontend

```bash
cd frontend
npm install   # (usa legacy-peer-deps via .npmrc)
npm start
```

Aplicação disponível em: http://localhost:3000

## Variáveis de ambiente

### Backend (`backend/.env`)

| Variável    | Padrão                 | Descrição          |
|------------|------------------------|--------------------|
| MONGO_URL  | mongodb://localhost:27017 | URL do MongoDB  |
| DB_NAME    | test_database          | Nome do banco     |
| CORS_ORIGINS | *                    | Origens CORS      |

### Frontend (`frontend/.env`)

| Variável               | Padrão             | Descrição          |
|------------------------|--------------------|--------------------|
| REACT_APP_BACKEND_URL  | http://localhost:8000 | URL da API backend |

## Funcionalidades

- **Formulário de contato**: Envia mensagens para o backend (POST `/api/contact`)
- **MongoDB opcional**: Se o MongoDB não estiver disponível, as mensagens são armazenadas em memória
