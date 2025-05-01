import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>강의 소개 페이지</h1>
        <p>
          GitHub Pages를 이용한 강의 웹사이트에 오신 것을 환영합니다.
        </p>
        <div className="lecture-info">
          <h2>강의 목록</h2>
          <ul>
            <li>강의 1: GitHub Pages 소개</li>
            <li>강의 2: React 기초</li>
            <li>강의 3: TypeScript 활용</li>
            <li>강의 4: 웹 배포 방법</li>
          </ul>
        </div>
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub 방문하기
        </a>
      </header>
    </div>
  );
}

export default App;
