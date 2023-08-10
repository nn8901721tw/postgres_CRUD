const express = require('express');
const sequelize = require('./config/db');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());

// 建立資料庫表格
sequelize.sync().then(() => {            //預設情況下，Sequelize 的 sequelize.sync() 方法會在名為 models 的資料夾中尋找模型定義來同步資料庫。
    console.log('資料庫連線成功');
}).catch((error) => {
    console.error('資料庫連線失敗', error);
});

// 將使用者相關的路由交由 usersRouter 處理，並指定路由前綴為 /users
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('應用程式運行於 http://localhost:3000');
});