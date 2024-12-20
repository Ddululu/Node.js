document.addEventListener('DOMContentLoaded', () => {
    const { Editor } = toastui;
    const { colorSyntax } = Editor.plugin;
  
    const titleInput = document.querySelector('#title');
    const editorContainer = document.querySelector('#editor');
    const submitButton = document.querySelector('#submit');
  
    console.log('Initializing Editor with Color Syntax Plugin...');
  
    // TOAST UI Editor 초기화
    const editor = new Editor({
      el: editorContainer,
      height: '500px',
      initialEditType: 'wysiwyg', // 초기 모드 설정
      previewStyle: 'vertical',
      plugins: [colorSyntax], // Color Syntax 플러그인 추가
    });
  
    console.log('Editor initialized with Color Syntax Plugin.');
  
    // 에디터 초기화 후 작성 모드를 Markdown 모드로 이동
    editor.changeMode('markdown');
    console.log('Editor mode switched to Markdown.');
  
    // 샘플 데이터 로드
    const postId = "1734631299633"; // 샘플 데이터 ID
    fetch(`/post/${postId}`)
      .then((response) => {
        console.log('Fetching post data...');
        return response.json();
      })
      .then((data) => {
        console.log('Post data fetched:', data);
  
        // 제목 설정
        titleInput.value = data.title;
  
        // HTML을 에디터 초기 값으로 설정
        if (data.content[0].html) {
          console.log('Setting HTML content in WYSIWYG mode...');
          editor.setHTML(data.content[0].html); // HTML을 WYSIWYG 모드로 설정
          console.log('Content set in WYSIWYG mode.');
  
          // 다시 Markdown 모드로 전환
          editor.changeMode('markdown');
          console.log('Editor mode switched to Markdown after setting content.');
        } else {
          console.warn('No HTML content found in post data.');
        }
      })
      .catch((error) => console.error('Error loading post:', error));
  
    // 게시 버튼 클릭 이벤트
    submitButton.addEventListener('click', () => {
      console.log('Submit button clicked.');
  
      const markdownContent = editor.getMarkdown(); // 작성된 Markdown 가져오기
      const title = titleInput.value;
  
      console.log('Submitting data:', { title, markdownContent });
  
      fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: markdownContent, title }),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log('Server response:', data);
        })
        .catch((error) => console.error('Error submitting post:', error));
    });
  });