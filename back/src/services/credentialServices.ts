import bcrypt from "bcrypt"
import { Credential } from "../interfaces/CredentialsInterface";


const credentialList: Credential[] = []


let id: number = 1

export const createCredentialService: (a: string, b: string) => Promise<number> = async (username: string, password: string ): Promise<number> => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    
    const credentialObject: Credential = {
        id,
        username,
        password :hashedPassword
    }

    credentialList.push(credentialObject)

   
    return id++;
}

export const checkCredentials = async (username: string, password: string ): Promise<number | undefined> => {

    const usernameFound: Credential | undefined = credentialList.find(credential => credential.username === username );

    if(!usernameFound) throw new Error(`El usuario ${username} no fue encontrado`);

    const isPasswordValid: boolean = await bcrypt.compare(password, usernameFound.password);

    
    if(!isPasswordValid) throw new Error(`Usuario o contrasena incorrecta`)

    return usernameFound.id;

};