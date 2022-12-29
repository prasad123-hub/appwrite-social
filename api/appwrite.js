import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
  .setProject("63ac47052a7e2e4c27fd"); // Your project ID //// Go to localhost:80 // Sign Up // Create-Project // under setting You will get projectID

export const account = new Account(client);

// Database

export const databases = new Databases(client, "63ac47882a1c65f7d64f");
