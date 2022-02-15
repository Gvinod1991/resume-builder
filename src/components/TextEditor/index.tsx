import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
const TINY_MCE_API_KEY = process.env.REACT_APP_TINY_MCE_API_KEY;
import { Loader } from '..';
export const TextEditor = ({
  textEditorValue,
  handleEditorChange,
}: any): JSX.Element => {
  const [loading, setLoading] = useState(true);
  return (
    <div className='border m-1 rounded-md bg-gray-200 border-gray-500 hover:border-indigo-500 hover:cursor-text hover:bg-white'>
      {loading && <Loader />}
      <Editor
        apiKey={TINY_MCE_API_KEY}
        value={textEditorValue}
        init={{
          skin: 'snow',
          icons: 'thin',
          placeholder: '',
          height: 200,
          menubar: false,
          textcolor_rows: '4',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks fullscreen textcolor ',
            'insertdatetime media table paste help',
          ],
          toolbar:
            'formatselect | ' +
            'bold italic underline backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent |' +
            '| image link table blockquote |' +
            'removeformat | help',
        }}
        onEditorChange={handleEditorChange}
        outputFormat='html'
        onInit={() => {
          setLoading(false);
        }}
      />
    </div>
  );
};
