// public/script.js
document.addEventListener('DOMContentLoaded', () => {
  const { Editor } = toastui;

  const titleInput = document.querySelector('#title');
  const editorContainer = document.querySelector('#editor');
  const submitButton = document.querySelector('#submit');

  // TOAST UI Editor 초기화
  const editor = new Editor({
    el: editorContainer,
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
  });

  // 게시 버튼 클릭 이벤트
  submitButton.addEventListener('click', () => {
    const markdownContent = editor.getMarkdown(); // 작성된 Markdown 가져오기
    const title = titleInput.value;

    // JSON 형식으로 콘솔 출력
    const postData = { title, content: markdownContent };
    console.log('Post Data:', JSON.stringify(postData, null, 2));
  });
});