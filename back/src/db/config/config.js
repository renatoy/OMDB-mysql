module.exports = {
  development: {
    username: "tato",
    password: "philpropeavey",
    database: "omdb_test",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: false
  }
  }, 
  test: {
    username: "root",
    password: null,
    database: "omdb_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "omdb_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
