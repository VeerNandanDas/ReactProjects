/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import conf from '../config/config'
import { Client, Account , ID } from 'appwrite'


export class AuthService {
    client = new  Client;
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method
                return this.login({email,password})      
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try{
          return await this.account.createEmailPasswordSession(email, password)
        }
        catch(error){
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logOut(){
        try{
            return  await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite serive :: logOut :: error", error);
        }
    }
};

const authService  = new AuthService();


export default authService;