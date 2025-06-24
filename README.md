# API com integração de IA
### Objetivo
Criar uma API simples que:
	1.	Analisa um texto de entrada.
	2.	Retorna estatísticas básicas.
	3.	Integra com uma API pública de IA para detectar sentimento.

### Requisitos obrigatórios
Crie um endpoint POST /analyze-text que receba um JSON com o seguinte formato:
```
{
  "text": "Seu texto livre aqui..."
}
```
A resposta da API deve conter:
- A contagem total de palavras.
- As 5 palavras mais frequentes (ignorando stopwords, se possível).
- Um resumo de sentimento do texto, utilizando alguma API pública de IA como:
  - OpenAI (ex: `gpt-3.5-turbo` ou `gpt-4`)
  - Claude (Anthropic)
  - Hugging Face (ex: `distilbert-base-uncased-finetuned-sst-2-english`)

### Opcional
Adicionar um endpoint GET /search-term?term=... que retorne:
- Se o termo informado foi encontrado na última análise.
- Pode manter o histórico em cache/memória ou SQLite.

### Tecnologias sugeridas
- Linguagens: Node.js ou Python
- Frameworks: Express, FastAPI, Django ou similar
- Armazenamento: pode usar cache em memória, JSON local ou SQLite
- Outras boas práticas:
- Organização do código
- Tratamento de erros
- Uso de status codes HTTP adequados
- Documentação simples (ex: Swagger ou README)

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

1. Adicione o link do repositório com a sua solução no teste
2. Verifique se o Readme está bom e faça o commit final em seu repositório;
3. Envie e aguarde as instruções para seguir. Caso o teste tenha apresentação de vídeo, dentro da tela de entrega será possível gravar após adicionar o link do repositório. Sucesso e boa sorte. =)


## Suporte

Para tirar dúvidas sobre o processo envie uma mensagem diretamente a um especialista no chat da plataforma. 
