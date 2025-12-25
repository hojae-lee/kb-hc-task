/**
 * MSW 핸들러에서 사용하는 토큰 검증 헬퍼 함수
 * @param authHeader Authorization 헤더 값
 * @returns 토큰이 유효한지 여부
 */
export const verifyToken = (authHeader: string | null): boolean => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false
  }
  const token = authHeader.replace('Bearer ', '')

  return token.length > 0
}
