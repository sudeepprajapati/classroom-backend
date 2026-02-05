import express from "express";
import subjectsRouter from "./routes/subject.route";

const app = express();

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
