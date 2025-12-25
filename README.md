# KB HC Task

할 일 관리 시스템 프론트엔드 프로젝트

## 환경 설정

### 패키지 매니저

이 프로젝트는 **pnpm**을 사용합니다.

### pnpm 설치

```bash
npm install -g pnpm
```

또는 volta 사용시...

```bash
volta install pnpm
```

### 의존성 설치

```bash
pnpm install
```

### 실행

```bash
# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm start
```

## 환경 변수

프로젝트 루트에 `.env.example` 파일을 참고하여 `.env` 파일을 생성하고 필요한 환경 변수를 설정하세요.

```bash
cp .env.example .env
```

`.env` 파일에 실제 환경 변수 값을 입력하세요. (미리 입력되어 있음)

## 라우터 페이지

### 대시보드 (`/`)

- 할 일 통계를 카드 형태로 표시
- 전체 할 일, 해야할 일, 완료된 일의 개수 표시

### 로그인 (`/sign-in`)

- 이메일/비밀번호 기반 로그인
- 폼 유효성 검증 (react-hook-form)
- 로그인 실패 시 에러 모달 표시

### 할 일 목록 (`/task`)

- 할 일 목록을 카드 형태로 표시
- 가상 스크롤링 및 무한 스크롤 구현
- 페이지네이션 지원

### 할 일 상세 (`/task/:id`)

- 할 일 상세 정보 표시
- 삭제 기능 (ID 확인 모달 포함)
- 404 에러 처리

### 회원정보 (`/user`)

- 사용자 정보 표시
- 로그아웃 기능

## 기술 스택

### 핵심 기술

- **React 19** + **TypeScript**
- **Vite** - 빌드 도구
- **React Router** - 라우팅 (`createBrowserRouter`)
- **React Query** - 서버 상태 관리 (`@tanstack/react-query`)
- **Zustand** - 클라이언트 상태 관리
- **TailwindCSS v4** - 스타일링

### 주요 라이브러리

- **react-virtuoso** - 가상 스크롤링 ([React 19 호환성 문제](https://github.com/TanStack/virtual/issues/1094)로 `@tanstack/react-virtual`에서 변경)
- **react-hook-form** - 폼 관리
- **MSW** - API 모킹
- **sonner** - Toast 알림
- **lucide-react** - 아이콘

## 주요 특징

### 성능 최적화

- **React Compiler** 사용 - 메모이제이션 자동 최적화
- 수동 메모이제이션 (`React.memo`, `useCallback`, `useMemo`) 사용 안함
- 코드 스플리팅

### 라우팅 및 데이터 페칭

- **createBrowserRouter** + **React Query** 조합
- 도메인별 라우터 분리 (`router.tsx`)
- Loader를 통한 데이터 prefetch
- **useSuspenseQuery** 사용 - Suspense를 유용하게 활용하기 위해 사용

### 스타일링

- TailwindCSS v4 사용
- 커스텀 색상 토큰 (primary, disabled)
- Pretendard 폰트 적용

## 프로젝트 구조

```
src/
├── app/              # 페이지별 도메인 폴더
│   ├── dashboard/   # 대시보드
│   ├── task/         # 할 일 (목록, 상세)
│   ├── user/         # 회원정보
│   └── sign-in/      # 로그인
├── api/              # API 정의
├── common/           # 공통 컴포넌트 및 훅
├── mocks/            # MSW 핸들러
├── provider/         # Provider
└── store/            # Zustand 스토어
```

## 개발 가이드

### 코드 스타일

- TypeScript strict 모드
- ESLint + Prettier 사용
- 절대 경로 import (`@/`, `@common/`, `@app/`)

### 컴포넌트 설계

- Atomic Design 원칙 (간단하고 러프한)
- 기능별 컴포넌트 분리 및 캡슐화 구조 설계
- 재사용 가능한 UI 컴포넌트 (`components/ui/`)
