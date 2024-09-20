import app from './app.js';
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
      app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
      });
  } catch (error) {
      console.error('Erro ao iniciar o servidor:', error);
      process.exit(1); 
  }
};

startServer();