import { storage } from '@/lib/appwrite';
import { ID } from 'appwrite';

const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_AUDIO_BUCKET_ID!;

export const uploadAudioFile = async (file: File) => {
  return await storage.createFile(
    BUCKET_ID,
    ID.unique(),
    file
  );
};

export const getAudioFileUrl = (fileId: string) => {
  return storage.getFileView(BUCKET_ID, fileId);
};

export const deleteAudioFile = async (fileId: string) => {
  return await storage.deleteFile(BUCKET_ID, fileId);
};