import { createClient, LiveList, LiveObject } from '@liveblocks/client';
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

export const useLiveblocks = () => {
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();
  const room = useRoom();

  const setCursor = (cursor: { x: number; y: number } | null) => {
    updateMyPresence({ cursor });
  };

  const setSelectedWord = (wordId: string | null) => {
    updateMyPresence({ selectedWordId });
  };

  const setEditingField = (field: string | null) => {
    updateMyPresence({ editingField: field });
  };

  return {
    myPresence,
    others,
    room,
    setCursor,
    setSelectedWord,
    setEditingField,
  };
};