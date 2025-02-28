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
};

const authService  = new AuthService();


export default authService;