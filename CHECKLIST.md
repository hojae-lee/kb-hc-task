# 체크리스트

## 기본 설정

- [x] React@18/19 및 TypeScript 설정
- [x] Pretendard 폰트 적용
- [x] 색상 토큰 설정 (primary: blue, disabled: gray)
- [x] TailwindCSS 설정 및 커스텀 색상 토큰 적용
- [x] MSW 설정 및 기본 구조

## GNB/LNB

- [x] Header 컴포넌트 구현
- [x] Nav 컴포넌트 구현 (대시보드, 할 일 아이콘 및 라우팅)
- [x] AuthNav 컴포넌트 구현 (로그인/회원정보 아이콘 및 라우팅)
- [x] Logo 컴포넌트 구현 (홈 링크 포함)

## 라우팅 및 인증

- [x] 라우터 구조 설정 (도메인별 router.tsx 분리)
- [x] ProtectedRoute 구현 (라우터 가드)
- [x] AuthErrorHandlerProvider 구현 (401 에러 자동 리다이렉션)
- [x] API 인터셉터 구현 (토큰 자동 추가, 401 처리, refresh 토큰 갱신)
- [x] Zustand 스토어 설정 (인증 상태 관리)

## 로그인 페이지 (/sign-in)

- [x] 로그인 폼 UI 구현
- [x] 이메일/비밀번호 입력 필드 및 라벨
- [x] 폼 유효성 검증 (react-hook-form)
  - [x] 이메일 형식 검증
  - [x] 비밀번호 검증 (8-24자, 영문/한글/숫자)
- [x] 제출 버튼 활성화/비활성화 조건
- [x] [POST] /api/sign-in API 연동
- [x] 에러 처리 (toast 메시지)
- [x] 로딩 상태 표시 (스피너)
- [x] API Status Code가 200이 아닌 경우 errorMessage 모달 표시

## 대시보드 페이지 (/)

- [x] [GET] /api/dashboard API 연동
- [x] useDashboard 훅 구현
- [x] UI 구현
  - [x] 일의 갯수(numOfTask) 표시
  - [x] 해야할 일 갯수(numOfRestTask) 표시
  - [x] 한 일의 갯수(numOfDoneTask) 표시

## 할 일 목록 페이지 (/task)

- [x] [GET] /api/task API 구현
- [x] useGetTasks 훅 구현 (useTaskList)
- [x] UI 구현
  - [x] 카드 목록 표시 (title, memo)
  - [x] 가상 스크롤링 구현
  - [x] 무한 스크롤 구현 (페이지네이션)
  - [x] 카드 클릭 시 상세 페이지 이동
- [x] 에러 처리
  - [x] API Status Code 400: errorMessage 모달 + 목록으로 redirect 버튼
  - [x] API Status Code 401: 로그인 페이지로 이동 (이미 AuthErrorHandlerProvider로 처리됨)

## 할 일 상세 페이지 (/task/:id)

- [x] [GET] /api/task/:id API 구현
- [x] useGetTask 훅 구현 (useTaskDetail)
- [x] UI 구현
  - [x] 상세 정보 표시 (title, memo, registerDatetime)
  - [x] 삭제 버튼
  - [x] 삭제 확인 모달 (id 입력 필드 포함)
    - [x] id 일치 시 제출 버튼 활성화
    - [x] 제출 시 목록으로 redirect
- [x] 에러 처리
  - [x] API Status Code 401: 로그인 페이지로 이동 (이미 AuthErrorHandlerProvider로 처리됨)
  - [x] API Status Code 404: not-found 페이지 렌더링 (loader에서 처리)

## 회원정보 페이지 (/user)

- [x] [GET] /api/user API 구현
- [x] useGetUser 훅 구현
- [x] UI 구현
  - [x] 회원정보 표시 (name, memo)
- [x] 에러 처리
  - [x] API Status Code 401: 로그인 페이지로 이동 (이미 AuthErrorHandlerProvider로 처리됨)

## API 구현

- [x] [POST] /api/sign-in
- [x] [POST] /api/refresh
- [x] [GET] /api/dashboard
- [x] [GET] /api/task
- [x] [GET] /api/task/:id
- [x] [GET] /api/user

## Mock 추가

- [x] [POST] /api/sign-in 핸들러
- [x] [POST] /api/refresh 핸들러
- [x] [GET] /api/dashboard 핸들러
- [x] [GET] /api/task 핸들러
- [x] [GET] /api/task/:id 핸들러
- [x] [GET] /api/user 핸들러
