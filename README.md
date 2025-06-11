# 🗨️ Chat em Tempo Real com Node.js e Socket.IO  
Este é um projeto simples de chat em tempo real utilizando *Express, **Socket.IO* e *HTML estático*, com suporte a múltiplas salas de conversa.

## 📁 Estrutura

📦 seu-projeto/
├── public/
│   ├── sala1.html
│   ├── sala2.html
│   └── (outras salas)
├── server.js
└── README.md


## 🚀 Funcionalidades  
- Conexão em tempo real via WebSockets  
- Suporte a múltiplas salas de chat  
- Mensagens em tempo real para todos os usuários da mesma sala  

## 🛠️ Tecnologias usadas  
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Socket.IO](https://socket.io/)  
- HTML/CSS simples  

## ▶️ Como executar  
1. Clone o repositório:  
bash
git clone https://github.com/seu-usuario/nome-do-repo.git
  
2. Instale as dependências:  
bash
npm install
  
3. Inicie o servidor:  
bash
node server.js
  
4. Acesse no navegador:  

http://localhost:3000/chat/sala1
http://localhost:3000/chat/sala2
  
> Crie arquivos HTML em /public com o nome da sala (ex: sala1.html) para que a rota funcione corretamente.

## ✍️ Exemplo de evento de chat  
javascript
socket.emit('chat message', {
    room: 'sala1',
    message: 'Olá, mundo!',
    username: 'João'
});
---