// models/user.js

// 引入 Sequelize 的 DataTypes 和我們在 config/db.js 中建立的 Sequelize 實例
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// 定義 User 模型
const User = sequelize.define('User', {
    // 使用 DataTypes.STRING 表示欄位的資料型別是字串
    // username 欄位
    username: {
        type: DataTypes.STRING,
        allowNull: false, // 允許欄位值為 NULL 嗎？這裡設為 false，代表不允許為 NULL
        unique: true, // 該欄位的值必須在資料表中是唯一的，不可重複
    },

    // email 欄位
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    // password 欄位
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // 不創建 createdAt 和 updatedAt 欄位
});

// 導出 User 模型
module.exports = User;
