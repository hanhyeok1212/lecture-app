# 강의 소개 웹사이트

이 프로젝트는 GitHub Pages를 이용하여 배포된 강의 소개 웹사이트입니다.

## 기술 스택

- React
- TypeScript
- GitHub Pages

## 프로젝트 설정

이 프로젝트는 Create React App을 사용하여 생성되었습니다.

### 로컬 개발 환경 설정

1. 저장소 클론
```
git clone https://github.com/USERNAME/lecture-app.git
cd lecture-app
```

2. 의존성 설치
```
npm install
```

3. 개발 서버 실행
```
npm start
```

4. 웹 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### GitHub Pages 배포

1. 프로젝트의 package.json 파일에서 "homepage" 필드를 자신의 GitHub 사용자 이름으로 수정
```json
"homepage": "https://YOUR_USERNAME.github.io/lecture-app"
```

2. 배포 실행
```
npm run deploy
```

## 사용 가능한 스크립트

프로젝트 디렉토리에서 다음 명령어를 실행할 수 있습니다:

### `npm start`

개발 모드로 앱을 실행합니다.
브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 볼 수 있습니다.

### `npm run build`

프로덕션용 앱을 `build` 폴더에 빌드합니다.

### `npm run deploy`

앱을 빌드하고 GitHub Pages에 배포합니다.
