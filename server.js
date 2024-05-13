// server.js
const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const db = require('./db');

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
