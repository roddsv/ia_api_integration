const axios = require('axios');

getSentimento = () = async (prompt) => {
    const commandprompt = `Retorne-me o sentimento que a frase a seguir expressa (se bom ou ruim): ${prompt}`;

    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: commandprompt}]
        },
        {
            headers: {
                'Authorization': `Bearer ${process.env.OPEN_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    );

    return response.data.choices[0].text;
}