import express from "express";
import cors from "cors";
import subjectsRouter from "./routes/subject.route";

const app = express();

// CORS
const allowedOrigin = process.env.FRONTEND_URL;

if (!allowedOrigin) {
    throw new Error("FRONTEND_URL is not defined in environment variables");
}

app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Classroom API is running"
    });
});

export default app;
