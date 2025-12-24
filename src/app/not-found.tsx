import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center gap-6">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold text-disabled-900">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="text-disabled-700">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFound
