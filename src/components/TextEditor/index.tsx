import { Editor } from '@tinymce/tinymce-react';

export const TextEditor = ({
  textEditorValue,
  handleEditorChange,
}: any): JSX.Element => {
  return (
    <div className='border m-1 rounded-md bg-gray-200 border-gray-500 hover:border-indigo-500 hover:cursor-text hover:bg-white'>
      <Editor
        apiKey='qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc'
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
      />
    </div>
  );
};
