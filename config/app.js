const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/devices', require('./routes/deviceRoutes'));
app.use('/api/profiles', require('./routes/profileRoutes'));
app.use('/api/sessions', require('./routes/sessionRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

app.use(require('./middleware/errorHandler'));

module.exports = app;
