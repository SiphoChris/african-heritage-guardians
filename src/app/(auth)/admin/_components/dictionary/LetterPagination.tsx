import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@radix-ui/themes';

interface LetterPaginationProps {
  letters: string[];
  currentLetter?: string;
  dictionaryId: string;
}

export const LetterPagination = ({ letters, currentLetter, dictionaryId }: LetterPaginationProps) => {
  const router = useRouter();
  
  return (
    <div className="flex flex-wrap gap-2 justify-center my-6">
      {letters.map((letter) => (
        <Link 
          key={letter} 
          href={`/dictionary/${dictionaryId}?letter=${letter}`}
          passHref
        >
          <Button
            variant={currentLetter === letter ? 'solid' : 'soft'}
            size="3"
            className={`w-10 h-10 flex items-center justify-center ${
              currentLetter === letter 
                ? 'bg-amber-400 text-slate-900' 
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {letter}
          </Button>
        </Link>
      ))}
    </div>
  );
};