const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.COLLECTION_ID),
    appwriteBucketsID: String(import.meta.env.VITE_BUCKET_ID),
   
};



export default config;