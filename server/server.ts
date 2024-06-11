const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 配置 MySQL 连接
const db = mysql.createConnection({
  host: '192.168.106.1',
  user: 'root',
  password: '123456',
  database: 'smart_ward'
});

// 连接到 MySQL 数据库
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// 使用 body-parser 中间件解析 JSON 请求体
app.use(bodyParser.json());

// 处理登录请求
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 根据 userType 确定查询哪个表
  let query;
  let queryParams;
  switch (userType) {
    case 'nurse':
      query = 'SELECT * FROM nurse WHERE number = ? AND password = ?';
      queryParams = [username, password];
      break;
    case 'admin':
      query = 'SELECT * FROM admins WHERE username = ? AND password = ?';
      break;
    case 'staff':
      query = 'SELECT * FROM staff WHERE username = ? AND password = ?';
      break;
    default:
      return res.status(400).json({ success: false, message: 'Invalid user type' });
  }

  // 查询用户信息
  db.query(query, queryParams, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database query error' });
    }

    if (results.length > 0) {
      // 登录成功
      res.json({
        success: true,
        message: 'Login successful',
        userId: results[0].id,
        token: 'your-jwt-token' // 这里可以生成一个 JWT token 返回给客户端
      });
    } else {
      // 登录失败
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
