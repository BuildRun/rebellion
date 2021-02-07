import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Editor
        apiKey="46i4ip38uewows9yu8s3ed3v0gnwuqhj3541b6nsbpj26sdu"
        initialValue="Hi! Welcome to the rebellion editor! This is just a demo."
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
        }}
        onEditorChange={handleEditorChange}
      />
    </StyledPage>
  );
}

export default Index;
