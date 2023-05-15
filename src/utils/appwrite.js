import { Client } from "appwrite";
const client = new Client();

client
  .setEndpoint(import.meta.env.URL)
  .setProject(import.meta.env.PROJECT);
export default client;
