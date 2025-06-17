# Fake-CV: 동적 이력서 웹사이트

이 프로젝트는 Vanilla JS, HTML, CSS를 사용하여 만든 동적인 이력서(CV) 웹사이트입니다. 모든 이력서 데이터는 별도의 JavaScript 파일에 저장되어 있어, 데이터를 쉽게 수정하고 웹사이트 내용을 업데이트할 수 있습니다.

## ✨ 주요 기능

-   **데이터 분리**: 이력서의 모든 내용(개인 정보, 학력, 경력, 프로젝트 등)은 `data/resumeData.js` 파일에서 관리됩니다.
-   **동적 렌더링**: `script.js`가 `resumeData.js`의 데이터를 읽어와 동적으로 HTML 콘텐츠를 생성합니다.
-   **반응형 웹 디자인**: 다양한 화면 크기에서 이력서를 잘 볼 수 있도록 스타일이 적용되어 있습니다. (style.css)
-   **다국어 지원**: 한국어와 영어 두 가지 언어를 지원하며, 버튼 클릭으로 쉽게 전환할 수 있습니다.
-   **모달 기능**: 프로젝트 항목을 클릭하면 상세 내용을 보여주는 모달 창이 나타납니다.

## 📂 프로젝트 구조

```
/
├── assets/
│   └── icons/          # (현재 비어있음, SVG 아이콘은 script.js에 내장)
├── data/
│   └── resumeData.js   # 모든 이력서 데이터
├── index.html          # 웹페이지의 기본 HTML 구조
├── script.js           # 데이터 렌더링 및 상호작용 로직
└── style.css           # 웹페이지 스타일 시트
```

## 🚀 시작하기

1.  이 저장소를 클론하거나 다운로드합니다.
2.  `index.html` 파일을 웹 브라우저에서 엽니다.

## ✍️ 이력서 내용 수정하기

1.  `data/resumeData.js` 파일을 엽니다.
2.  `resumeData` 객체 안의 값을 자신의 정보에 맞게 수정합니다.
    -   이름, 자기소개, 연락처, 경력, 학력, 기술 등을 변경할 수 있습니다.
    -   각 항목은 `kor` (한국어)와 `eng` (영어)로 나뉘어 있으므로, 두 언어 모두 수정하거나 하나만 사용할 수 있습니다.
3.  파일을 저장한 후 `index.html`을 새로고침하면 변경사항이 적용됩니다.

```javascript
// data/resumeData.js 예시

export const resumeData = {
  name: "이름을 여기에 입력하세요",
  profileImage: "path/to/your/image.jpg",
  tagline: {
    kor: "당신을 나타내는 한 줄 소개 (한)",
    eng: "Your one-line pitch (eng)",
  },
  // ... 기타 정보 수정
};
```

## 🛠️ 사용된 기술

-   HTML5
-   CSS3
-   JavaScript (ES6 Modules)

이 프로젝트는 외부 라이브러리나 프레임워크 없이 순수 Vanilla JS로만 작성되었습니다. 