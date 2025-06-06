import  Main  from '@/app/(auth)/admin/_components/Main';
import { getAdmins } from '@/services/AdminService';
import { getDictionaries } from '@/services/DictionaryService';
import { auth } from '@/lib/appwrite';

export default async function DashboardPage() {
  const session = await auth.get();
  
  if (!session) {
    return <div>Unauthorized</div>;
  }

  const dictionaries = await getDictionaries();
  const admins = await getAdmins();

  return <Main dictionaries={dictionaries} admins={admins} />;
}