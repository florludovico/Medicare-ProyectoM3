import "dotenv/config"

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const DB_SYNC: boolean = process.env.DB_SYNC ? process.env.DB_SYNC === "true" : true
export const DB_LOGGING: boolean = process.env.DB_LOGGING ? process.env.DB_LOGGING === "true" : true
export const DB_ENTITIES: string[] = process.env.DB_ENTITIES
  ? process.env.DB_ENTITIES.split(",")
  : process.env.NODE_ENV === "production"
  ? ["dist/entities/**/*.js"]
  : ["src/entities/**/*.ts"];
export const DB_DROP: boolean = process.env.DB_DROP ? process.env.DB_DROP === "true" : true
export const DB_SSL = { rejectUnauthorized: false};