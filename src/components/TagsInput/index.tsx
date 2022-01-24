import { KeyboardEvent, useState } from 'react';
import { Input } from '../index';
import { XIcon } from '@heroicons/react/outline';

interface TagsInputProps {
  tagLabel: string;
  selectedTags: (tags: Array<string>) => void;
}
export const TagsInput = ({ tagLabel, selectedTags }: TagsInputProps) => {
  const [tags, setTags] = useState<Array<string>>([]);
  const addTags = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      setTags([...tags, e.currentTarget.value]);
      selectedTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };
  const removeTags = (index: Number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <div>
      {tags.map((tag, index) => (
        <li
          key={index}
          className='shadow-sm bg-indigo-600 p-2 m-1 inline-block text-xl text-white mb-1'
        >
          <span>{tag}</span>
          <XIcon
            className='inline h-6 w-5 text-white cursor-pointer'
            onClick={() => removeTags(index)}
          />
        </li>
      ))}
      <Input placeholder={tagLabel} onKeyUp={addTags} />
    </div>
  );
};
