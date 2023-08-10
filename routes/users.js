// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 新增資料
router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password }); // 使用 User 模型的 create 方法來新增一筆使用者資料
        res.status(201).json(user); // 回傳 HTTP 狀態碼 201 Created，並將新增的使用者資料回傳給客戶端
    } catch (error) {
        res.status(500).json({ error: '新增使用者失敗' }); // 回傳 HTTP 狀態碼 500 Internal Server Error，表示伺服器錯誤
    }
});

// 讀取資料
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll(); // 使用 User 模型的 findAll 方法來讀取所有使用者資料
        res.json(users); // 將使用者資料回傳給客戶端
    } catch (error) {
        res.status(500).json({ error: '讀取使用者失敗' }); // 回傳 HTTP 狀態碼 500 Internal Server Error，表示伺服器錯誤
    }
});

// 更新資料
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        const user = await User.findByPk(id); // 使用 User 模型的 findByPk 方法來尋找特定 ID 的使用者資料
        if (!user) {
            return res.status(404).json({ error: '使用者不存在' }); // 如果找不到對應 ID 的使用者，回傳 HTTP 狀態碼 404 Not Found
        }
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save(); // 使用 save 方法來更新使用者資料
        res.json(user); // 將更新後的使用者資料回傳給客戶端
    } catch (error) {
        res.status(500).json({ error: '更新使用者失敗' }); // 回傳 HTTP 狀態碼 500 Internal Server Error，表示伺服器錯誤
    }
});

// 刪除資料
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id); // 使用 User 模型的 findByPk 方法來尋找特定 ID 的使用者資料
        if (!user) {
            return res.status(404).json({ error: '使用者不存在' }); // 如果找不到對應 ID 的使用者，回傳 HTTP 狀態碼 404 Not Found
        }
        await user.destroy(); // 使用 destroy 方法來刪除使用者資料
        res.json({ message: '使用者已刪除' }); // 回傳一個 JSON 物件表示使用者已經刪除
    } catch (error) {
        res.status(500).json({ error: '刪除使用者失敗' }); // 回傳 HTTP 狀態碼 500 Internal Server Error，表示伺服器錯誤
    }
});

module.exports = router;