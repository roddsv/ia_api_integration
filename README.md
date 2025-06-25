# 📊 Text Analyzer API

API simples desenvolvida com **Node.js** e **Express** que realiza:
- Análise estatística de um texto
- Detecção de sentimento via **OpenAI** (GPT-3.5)
- Retorno das 5 palavras mais frequentes (ignorando *stopwords*)
- Histórico de análise com busca por termos

---

## 🚀 Tecnologias Utilizadas

- Node.js + Express
- OpenAI API (GPT-3.5 Turbo)
- Regex para análise textual
- Cache em memória (pode ser adaptado para SQLite)
- Documentação Swagger (OpenAPI 3.0)

---

## 📦 Instalação

```bash
npm install
```

Crie o arquivo `.env` na raiz:

```env
OPENAI_API_KEY=sk-sua-chave-aqui
PORT=3000
```

---

## ▶️ Executar o projeto

```bash
npm run dev     # Modo desenvolvimento
npm start       # Modo produção
```

---

## 📌 Endpoints disponíveis

### 🔹 POST `/api/analyze-text`

Envia um texto para análise de palavras e sentimento.

#### Body (JSON):
```json
{
  "text": "Hoje estou muito feliz por estar programando."
}
```

#### Resposta:
```json
{
  "wordCount": 6,
  "top5Words": [
    { "word": "feliz", "count": 1 },
    { "word": "programando", "count": 1 },
    { "word": "hoje", "count": 1 },
    { "word": "estar", "count": 1 },
    { "word": "muito", "count": 1 }
  ],
  "sentiment": "positivo"
}
```

---

### 🔹 GET `/api/search-term?term=palavra`

Verifica se a palavra pesquisada está presente no último texto analisado.

#### Resposta:
```json
{
  "found": true
}
```

---

## 🧠 Stopwords

As palavras mais comuns da língua (ex: "o", "de", "que") são ignoradas na contagem para tornar a análise mais relevante. Listadas em `src/utils/stopwords.js`.

---

## 📄 Documentação Swagger

Arquivo Swagger incluso (`swagger.yaml`) com a especificação completa em OpenAPI 3.0.
Você pode:
- Visualizar com [Swagger Editor](https://editor.swagger.io)
- Importar no Postman

---

## 💡 Estrutura do Projeto

```
text-analyzer-api/
├── src/
│   ├── controllers/         # Lógica dos endpoints
│   ├── services/            # Regras de negócio
│   ├── routes/              # Rotas da API
│   ├── db/                  # Histórico em memória
│   ├── utils/               # Stopwords
│   └── app.js               # App principal
├── swagger.yaml             # Documentação da API
├── .env                     # Variáveis de ambiente
├── package.json             # Scripts e dependências
```

---

## 👨‍💻 Autor

Desenvolvido por Rodrigo Soares como desafio técnico — API organizada, comentada e testável com Postman ou Swagger.

---
