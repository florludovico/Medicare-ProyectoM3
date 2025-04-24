import bcrypt from "bcrypt"
import { Credential } from "../entities/Credentials.entity";
import { EntityManager } from "typeorm";
import { CredentialModel } from "../config/data.source";



export const createCredentialService: (entityManager : EntityManager, a: string, b: string) => Promise<Credential> = async ( EntityManager: EntityManager, username: string, password: string ): Promise<Credential> => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const credentials: Credential = EntityManager.create(Credential, {
        username,
        password :hashedPassword
    });
    return await EntityManager.save(credentials)
};



export const checkCredentials = async (username: string, password: string ): Promise<number | undefined> => {

    const usernameFound: Credential | null = await CredentialModel.findOne({
        where: {
            username: username
        }
    });

    if(!usernameFound) throw new Error(`El usuario ${username} no fue encontrado`);

    const isPasswordValid: boolean = await bcrypt.compare(password, usernameFound.password);

    if(!isPasswordValid) throw new Error(`Usuario o contrasena incorrecta`)

    return usernameFound.id;

};