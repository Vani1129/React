import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();
            if (currentUser) {
                return currentUser;
            }
        } catch (error) {
            console.error("Appwrite serive :: getCurrentUser :: error", error.message);
            // Handle different error types accordingly (e.g., expired session)
        }
    
        return null;
    }

    // async getCurrentUser() {
    //     try {
    //         const user = await this.account.get();
    //         if (user) {
    //             return user;
    //         }
    //     } catch (error) {
    //         console.error("getCurrentUser error: ", error.message);
    //         if (error.code === 401) {
    //             // Handle unauthorized user, possibly redirect to login
    //         }
    //     }
    //     return null;
    // }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

