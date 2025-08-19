import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"
import router from "./routes"
import { FRONTEND_URL } from "./config/env"


const server: Application = express()

// Configura CORS
const corsOptions = {
  origin: FRONTEND_URL,
  // optionsSuccessStatus: 200 // Opcional, para navegadores antiguos
};

server.use(express.json())
server.use(morgan("dev"))
server.use(cors(corsOptions))

server.use(router)

export default server;