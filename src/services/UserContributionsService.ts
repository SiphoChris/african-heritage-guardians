import { databases, Query } from '@/lib/appwrite';
import { ID, Permission, Role } from 'appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const CONTRIBUTIONS_COLLECTION = 'userContributions';

export interface UserContribution {
  $id: string;
  userId: string;
  type: 'word' | 'sentence';
  wordId?: string;
  dictionaryId: string;
  content: any;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: string;
  createdAt: string;
}

export const createContribution = async (contributionData: Omit<UserContribution, '$id' | 'createdAt'>) => {
  const permissions = [
    Permission.read(Role.admin()),
    Permission.write(Role.any()),
  ];

  return await databases.createDocument(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    ID.unique(),
    {
      ...contributionData,
      status: 'pending'
    },
    permissions
  );
};

export const getContributions = async (queries: string[] = []) => {
  return await databases.listDocuments(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    queries
  );
};

export const getContributionById = async (contributionId: string) => {
  return await databases.getDocument(DATABASE_ID, CONTRIBUTIONS_COLLECTION, contributionId);
};

export const getUserContributions = async (userId: string) => {
  return await databases.listDocuments(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    [Query.equal('userId', userId)]
  );
};

export const updateContribution = async (contributionId: string, data: Partial<UserContribution>) => {
  return await databases.updateDocument(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    contributionId,
    data
  );
};

export const approveContribution = async (contributionId: string, adminId: string) => {
  return await databases.updateDocument(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    contributionId,
    {
      status: 'approved',
      reviewedBy: adminId,
      reviewedAt: new Date().toISOString()
    }
  );
};

export const rejectContribution = async (contributionId: string, adminId: string) => {
  return await databases.updateDocument(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    contributionId,
    {
      status: 'rejected',
      reviewedBy: adminId,
      reviewedAt: new Date().toISOString()
    }
  );
};

export const deleteContribution = async (contributionId: string) => {
  return await databases.deleteDocument(
    DATABASE_ID,
    CONTRIBUTIONS_COLLECTION,
    contributionId
  );
};