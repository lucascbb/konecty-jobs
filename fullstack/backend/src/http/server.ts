import express from 'express';
import cors from 'cors';
import routes from '../routes/routes';

class App {
  private server: express.Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes() {
    this.server.use(routes);
  }

  public start(PORT: number) {
    this.server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }
}

export default App;
