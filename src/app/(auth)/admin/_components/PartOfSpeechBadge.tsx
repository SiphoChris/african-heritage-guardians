import { Badge } from '@radix-ui/themes';

interface PartOfSpeechBadgeProps {
  pos?: string;
}

const POS_COLORS: Record<string, string> = {
  noun: 'blue',
  verb: 'green',
  adjective: 'orange',
  adverb: 'purple',
  pronoun: 'pink',
  preposition: 'red',
  conjunction: 'yellow',
  interjection: 'cyan',
};

export const PartOfSpeechBadge = ({ pos }: PartOfSpeechBadgeProps) => {
  if (!pos) return null;

  const posKey = pos.toLowerCase();
  const color = POS_COLORS[posKey] || 'gray';

  return (
    <Badge color={color as any} variant="soft">
      {pos}
    </Badge>
  );
};