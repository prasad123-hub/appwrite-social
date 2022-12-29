import { account, databases } from "./appwrite";

let AuthApi = {
  createAccount: (email, password, name) => {
    return account.create("unique()", email, password, name);
  },

  getAccount: () => {
    return account.getSession();
  },

  createSession: (email, password) => {
    return account.createEmailSession(email, password);
  },

  //   deleteCurrentSession: () => {
  //     return AuthApi.provider().account.deleteSession("current");
  //   },

  //   createDocument: (collectionId, data, read, write) => {
  //     return AuthApi.provider().database.createDocument(
  //       collectionId,
  //       "unique()",
  //       data,
  //       read,
  //       write
  //     );
  //   },

  //   listDocuments: (collectionId) => {
  //     return AuthApi.provider().database.listDocuments(collectionId);
  //   },

  //   updateDocument: (collectionId, documentId, data, read, write) => {
  //     return AuthApi.provider().database.updateDocument(
  //       collectionId,
  //       documentId,
  //       data,
  //       read,
  //       write
  //     );
  //   },

  //   deleteDocument: (collectionId, documentId) => {
  //     return AuthApi.provider().database.deleteDocument(collectionId, documentId);
  //   },
};

export default AuthApi;
