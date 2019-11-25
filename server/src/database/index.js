import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Book from '../app/models/Book';

const models = [Book];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
