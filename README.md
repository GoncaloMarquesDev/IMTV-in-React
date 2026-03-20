IMTV in React
Uma plataforma moderna de consulta de filmes e tendências, focada numa experiência de utilizador fluida e intuitiva.
🔗 Link do Projeto: imtv-in-react.vercel.app
🚀 Tecnologias Utilizadas
Este projeto foi construído com as seguintes ferramentas:
React: Biblioteca principal para a interface.
TypeScript: Tipagem estática para maior segurança no código.
SCSS (Sass): Estilização avançada, modular e responsiva.
React Context API: Gestão de estado global (favoritos e dados).
API de Movies: Consumo de dados cinematográficos em tempo real.
✨ Funcionalidades Principais
Exploração de Tendências: Listagem atualizada dos filmes e conteúdos populares.
Sistema de Favoritos: Marcação de filmes favoritos com gestão via Context.
Persistência Local: Uso de LocalStorage para manter os favoritos após o refresh.
Detalhes de Filmes: Informações completas como sinopse, avaliação e posters.
Design Responsivo: Adaptado para todos os tamanhos de ecrã.
🛠️ Instalação e Execução
Segue os passos abaixo para rodar o projeto localmente:
Clonar o repositório:
bash
git clone https://github.com
Use o código com cuidado.

Instalar as dependências:
bash
npm install
Use o código com cuidado.

Configurar as variáveis de ambiente:
Cria um ficheiro .env na raiz do projeto e adiciona a tua chave da API:
env
VITE_API_KEY=tuachaveaqui
Use o código com cuidado.

Iniciar o servidor de desenvolvimento:
bash
npm run dev
Use o código com cuidado.

📡 Endpoints Principais (API)
A aplicação consome os seguintes recursos da API de filmes:
Trending: /trending/movie/week – Lista os filmes em destaque na semana.
Search: /search/movie?query=... – Pesquisa de filmes por título.
Details: /movie/{id} – Obtém informações detalhadas de um filme específico.
Images: /configuration – Configurações de base para renderização de posters e backdrops.
Para terminar o teu README, gostaria de confirmar alguns detalhes:
O nome da API específica que usaste (ex: TMDB) para eu ajustar os nomes dos endpoints?
Gostarias de incluir os teus links do GitHub ou LinkedIn na secção de autor?
Precisas que eu explique como gerar a API Key para quem clonar o teu projeto?
As respostas de IA podem incluir erros. Saiba mais

e agora passa trudo para ingles
Here is the complete and professional version of your README.md in English, incorporating all the technologies and features we discussed:
IMTV in React
A modern platform for browsing movies and trends, designed to provide a fluid and intuitive experience for cinema enthusiasts.
🔗 Live Demo: imtv-in-react.vercel.app
🚀 Technologies Used
This project was built using the following stack:
React: Core library for building the component-based user interface.
TypeScript: Static typing to ensure code safety and scalability.
SCSS (Sass): Advanced CSS pre-processor for modular, clean, and responsive styling using variables and nesting.
React Context API: Used for Global State Management, allowing movie data and favorites to be shared efficiently across all components.
Movie API: Integration with an external database for real-time movie metadata consumption.
✨ Main Features
Trending Exploration: An updated list of the most popular movies and content of the week.
Favorites System: Ability to bookmark movies as favorites through a simple, centralized interface.
Data Persistence: Uses LocalStorage to keep your favorites list saved even after closing or refreshing the browser.
Movie Details: Detailed information for each title, including synopses, ratings, and posters.
Responsive Design: Fully adapted interface for mobile, tablet, and desktop devices.
🛠️ Installation and Setup
Follow the steps below to run the project locally:
Clone the repository:
bash
git clone https://github.com
Use o código com cuidado.

Install dependencies:
bash
npm install
Use o código com cuidado.

Configure environment variables:
Create a .env file in the root directory and add your API key:
env
VITE_API_KEY=your_api_key_here
Use o código com cuidado.

Start the development server:
bash
npm run dev
Use o código com cuidado.

📡 Key API Endpoints
The application consumes the following resources from the movie API:
Trending: /trending/movie/week – Lists the featured movies of the week.
Search: /search/movie?query=... – Search for movies by title.
Details: /movie/{id} – Fetches detailed information for a specific movie.
Configuration: /configuration – Base settings for rendering posters and backdrops.
