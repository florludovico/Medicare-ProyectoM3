import { DataSource, Repository } from "typeorm";
import {DATABASE_URL, DB_DROP, DB_ENTITIES,  DB_LOGGING, DB_SSL, DB_SYNC, } from "./env";
import { User } from "../entities/User.entity";
import { Credential } from "../entities/Credentials.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL,
  synchronize: DB_SYNC,
  logging: DB_LOGGING,
  entities: DB_ENTITIES,
  dropSchema: DB_DROP,
  ssl: DB_SSL,
});

export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const CredentialModel: Repository<Credential> = AppDataSource.getRepository(Credential);
