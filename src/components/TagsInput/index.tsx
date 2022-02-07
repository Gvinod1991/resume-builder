import { KeyboardEvent, useState } from 'react';
import { Input } from '../index';
import { XIcon } from '@heroicons/react/outline';

interface ITagsInput {
  tagLabel: string;
  selectedTags: (tags: Array<string>) => void;
  initTags: Array<string>;
}
export const TagsInput = ({
  tagLabel,
  selectedTags,
  initTags,
}: ITagsInput): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>(initTags);
  const addTags = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      setTags([...tags, e.currentTarget.value]);
      selectedTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = '';
      setInputValue('');
    }
  };
  const removeTags = (index: Number): void => {
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
            onClick={(): void => removeTags(index)}
          />
        </li>
      ))}
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={tagLabel}
        onKeyUp={addTags}
      />
    </div>
  );
};
