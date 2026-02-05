import express from 'express';
import subjectsRouter from './routes/subject.route';

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

app.use('/api/subjects', subjectsRouter)

// Root GET route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the classroom backend!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
