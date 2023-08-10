const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // 在這裡替換成你的 PostgreSQL 資料庫的實際埠口號
    // 其他 Sequelize 相關設定...
});

module.exports = sequelize;
