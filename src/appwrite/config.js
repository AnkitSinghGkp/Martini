import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createMcq({ qus, options, ans, id }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        id,
        {
          qus,
          options,
          ans,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createMcq :: error", error);
    }
  }

  async deleteMcq() {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        id
      );
    } catch (error) {
      console.log("Appwrite service :: deleteMcq :: error", error);
      return false;
    }
  }

  async getMcq(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        id
      );
    } catch (error) {
      console.log("Appwrite service :: getMcq :: error", error);
    }
  }

  async updateMcq(id, atemptedby) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        id,
        {
          atemptedby,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateMcq :: error", error);
    }
  }

  async getMcqs() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2
      );
    } catch (error) {
      console.log("Appwrite service :: getMcqs :: error", error);
    }
  }

  async getCash(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
    } catch (error) {
      console.log("Appwrite service :: getCash :: error", error);
    }
  }

  async updateCash(id, cash, userid) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        {
          cash,
          userid,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateCash :: error", error);
    }
  }
}

const service = new Service();
export default service;
