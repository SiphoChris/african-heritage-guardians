import { databases, Query } from '@/lib/appwrite';
import { ID, Permission, Role } from 'appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const ADMINS_COLLECTION = 'admins';

export interface Admin {
  $id: string;
  adminId: string;
  name: string;
  surname: string;
  email: string;
  isVerified: boolean;
  isSuperAdmin: boolean;
  language: string;
  profession?: string;
  department?: string;
  country?: string;
  settings?: any;
  privileges: {
    edit: boolean;
    create: boolean;
    delete: boolean;
    view: boolean;
  };
  createdAt: string;
}

export const createAdmin = async (adminData: Omit<Admin, '$id' | 'createdAt'>) => {
  const permissions = [
    Permission.read(Role.admin()),
    Permission.write(Role.superadmin()),
  ];

  return await databases.createDocument(
    DATABASE_ID,
    ADMINS_COLLECTION,
    ID.unique(),
    adminData,
    permissions
  );
};

export const getAdmins = async () => {
  return await databases.listDocuments(DATABASE_ID, ADMINS_COLLECTION);
};

export const getAdminById = async (adminId: string) => {
  return await databases.getDocument(DATABASE_ID, ADMINS_COLLECTION, adminId);
};

export const getAdminByEmail = async (email: string) => {
  const result = await databases.listDocuments(
    DATABASE_ID,
    ADMINS_COLLECTION,
    [Query.equal('email', email)]
  );
  return result.documents[0] as Admin | undefined;
};

export const updateAdmin = async (adminId: string, data: Partial<Admin>) => {
  return await databases.updateDocument(
    DATABASE_ID,
    ADMINS_COLLECTION,
    adminId,
    data
  );
};

export const deleteAdmin = async (adminId: string) => {
  return await databases.deleteDocument(
    DATABASE_ID,
    ADMINS_COLLECTION,
    adminId
  );
};

export const verifyAdmin = async (adminId: string) => {
  return await databases.updateDocument(
    DATABASE_ID,
    ADMINS_COLLECTION,
    adminId,
    { isVerified: true }
  );
};