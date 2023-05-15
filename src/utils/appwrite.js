import { Client } from "appwrite";
const client  = new Client() ;

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT);
export default client;
