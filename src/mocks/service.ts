export const enableMocking = async () => {
  // 개발 버전에서만 mocking 을 활성화 합니다.
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }

  const { worker } = await import('@/mocks/browser')

  return worker.start({
    // msw 사용시 의도하지 않는 요청이 가로채지는 경우가 있음.
    onUnhandledRequest: (request, print) => {
      if (
        !request.url.includes('/api/') ||
        request.url.includes('.ts') ||
        request.url.includes('.tsx')
      ) {
        return
      }

      // 그 외의 처리되지 않은 요청에 대해서는 경고 출력
      print.warning()
    }
  })
}
