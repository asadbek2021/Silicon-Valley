import express from 'express';
import dbConnect from './loader/db';
import authRoutes from './resources/auth/auth.routes';
import blogRoutes from './resources/blogs/blogs.routes';
import userRoutes from './resources/users/users.routes';

dbConnect()
const app = express();

app.use(authRoutes);
app.use(blogRoutes);
app.use(userRoutes);

export default app;