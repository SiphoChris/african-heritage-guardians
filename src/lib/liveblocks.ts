import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
});

type Presence = {
  cursor: {
    x: number;
    y: number;
  } | null;
  selectedWordId: string | null;
  editingField: string | null;
  name: string;
  color: string;
};

type Storage = {
  activeAdmins: LiveList<LiveObject<{
    id: string;
    name: string;
    email: string;
  }>>;
};

export const {
  RoomProvider,
  useMyPresence,
  useUpdateMyPresence,
  useSelf,
  useOthers,
  useRoom,
  useMutation,
} = createRoomContext<Presence, Storage>(client);