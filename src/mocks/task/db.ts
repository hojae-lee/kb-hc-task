import type { TaskItem } from '@api/task/schema'

// task mock 데이터
export const tasks: TaskItem[] = [
  {
    id: '1',
    title: '프로젝트 기획서 작성',
    memo: '중요한 작업이므로 신중하게 진행해야 합니다.',
    status: 'TODO'
  },
  {
    id: '2',
    title: 'API 문서 정리',
    memo: '우선순위가 높은 작업입니다.',
    status: 'DONE'
  },
  {
    id: '3',
    title: '데이터베이스 설계',
    memo: '다른 팀과 협의가 필요합니다.',
    status: 'TODO'
  },
  {
    id: '4',
    title: 'UI 컴포넌트 개발',
    memo: '기한 내에 완료해야 합니다.',
    status: 'TODO'
  },
  {
    id: '5',
    title: '테스트 코드 작성',
    memo: '문서를 참고하여 진행하세요.',
    status: 'DONE'
  },
  {
    id: '6',
    title: '코드 리뷰 진행',
    memo: '코드 리뷰를 받아야 합니다.',
    status: 'TODO'
  },
  {
    id: '7',
    title: '버그 수정',
    memo: '테스트를 완료한 후 진행하세요.',
    status: 'DONE'
  },
  {
    id: '8',
    title: '성능 최적화',
    memo: '관련 이슈를 확인하세요.',
    status: 'TODO'
  },
  {
    id: '9',
    title: '문서화 작업',
    memo: '스테이크홀더 승인이 필요합니다.',
    status: 'DONE'
  },
  {
    id: '10',
    title: '배포 준비',
    memo: '문서화를 함께 진행하세요.',
    status: 'TODO'
  },
  {
    id: '11',
    title: '회의록 작성',
    memo: '성능에 영향을 줄 수 있으니 주의하세요.',
    status: 'DONE'
  },
  {
    id: '12',
    title: '이슈 트래킹',
    memo: '보안 검토가 필요합니다.',
    status: 'TODO'
  },
  {
    id: '13',
    title: '사용자 피드백 반영',
    memo: '사용자 피드백을 반영하세요.',
    status: 'DONE'
  },
  {
    id: '14',
    title: '보안 점검',
    memo: '접근성을 고려하여 개발하세요.',
    status: 'TODO'
  },
  {
    id: '15',
    title: '모니터링 설정',
    memo: '반응형 디자인을 적용하세요.',
    status: 'DONE'
  },
  {
    id: '16',
    title: '로깅 시스템 구축',
    memo: '다국어 지원을 고려하세요.',
    status: 'TODO'
  },
  {
    id: '17',
    title: '에러 핸들링 개선',
    memo: '테스트 커버리지를 높이세요.',
    status: 'DONE'
  },
  {
    id: '18',
    title: '접근성 개선',
    memo: '코드 품질을 유지하세요.',
    status: 'TODO'
  },
  {
    id: '19',
    title: '반응형 디자인 적용',
    memo: '문서를 최신 상태로 유지하세요.',
    status: 'DONE'
  },
  {
    id: '20',
    title: '국제화 작업',
    memo: '변경 사항을 기록하세요.',
    status: 'TODO'
  },
  {
    id: '21',
    title: '단위 테스트 작성',
    memo: '중요한 작업이므로 신중하게 진행해야 합니다.',
    status: 'DONE'
  },
  {
    id: '22',
    title: '통합 테스트 수행',
    memo: '우선순위가 높은 작업입니다.',
    status: 'TODO'
  },
  {
    id: '23',
    title: '성능 테스트',
    memo: '다른 팀과 협의가 필요합니다.',
    status: 'DONE'
  },
  {
    id: '24',
    title: '보안 테스트',
    memo: '기한 내에 완료해야 합니다.',
    status: 'TODO'
  },
  {
    id: '25',
    title: '사용자 테스트',
    memo: '문서를 참고하여 진행하세요.',
    status: 'DONE'
  },
  {
    id: '26',
    title: '디자인 시스템 구축',
    memo: '코드 리뷰를 받아야 합니다.',
    status: 'TODO'
  },
  {
    id: '27',
    title: '컴포넌트 라이브러리 제작',
    memo: '테스트를 완료한 후 진행하세요.',
    status: 'DONE'
  },
  {
    id: '28',
    title: '스토리북 설정',
    memo: '관련 이슈를 확인하세요.',
    status: 'TODO'
  },
  {
    id: '29',
    title: 'CI/CD 파이프라인 구축',
    memo: '스테이크홀더 승인이 필요합니다.',
    status: 'DONE'
  },
  {
    id: '30',
    title: '인프라 설정',
    memo: '문서화를 함께 진행하세요.',
    status: 'TODO'
  },
  {
    id: '31',
    title: '데이터 마이그레이션',
    memo: '성능에 영향을 줄 수 있으니 주의하세요.',
    status: 'DONE'
  },
  {
    id: '32',
    title: '레거시 코드 리팩토링',
    memo: '보안 검토가 필요합니다.',
    status: 'TODO'
  },
  {
    id: '33',
    title: '아키텍처 설계',
    memo: '사용자 피드백을 반영하세요.',
    status: 'DONE'
  },
  {
    id: '34',
    title: '기술 스택 선정',
    memo: '접근성을 고려하여 개발하세요.',
    status: 'TODO'
  },
  {
    id: '35',
    title: '팀 온보딩 자료 준비',
    memo: '반응형 디자인을 적용하세요.',
    status: 'DONE'
  },
  {
    id: '36',
    title: '문서 번역',
    memo: '다국어 지원을 고려하세요.',
    status: 'TODO'
  },
  {
    id: '37',
    title: 'API 엔드포인트 개발',
    memo: '테스트 커버리지를 높이세요.',
    status: 'DONE'
  },
  {
    id: '38',
    title: '프론트엔드 개발',
    memo: '코드 품질을 유지하세요.',
    status: 'TODO'
  },
  {
    id: '39',
    title: '백엔드 개발',
    memo: '문서를 최신 상태로 유지하세요.',
    status: 'DONE'
  },
  {
    id: '40',
    title: '모바일 앱 개발',
    memo: '변경 사항을 기록하세요.',
    status: 'TODO'
  },
  {
    id: '41',
    title: '웹사이트 리뉴얼',
    memo: '중요한 작업이므로 신중하게 진행해야 합니다.',
    status: 'DONE'
  },
  {
    id: '42',
    title: '마이크로서비스 분리',
    memo: '우선순위가 높은 작업입니다.',
    status: 'TODO'
  },
  {
    id: '43',
    title: '캐싱 전략 수립',
    memo: '다른 팀과 협의가 필요합니다.',
    status: 'DONE'
  },
  {
    id: '44',
    title: '로드 밸런싱 설정',
    memo: '기한 내에 완료해야 합니다.',
    status: 'TODO'
  },
  {
    id: '45',
    title: '데이터 백업',
    memo: '문서를 참고하여 진행하세요.',
    status: 'DONE'
  },
  {
    id: '46',
    title: '재해 복구 계획 수립',
    memo: '코드 리뷰를 받아야 합니다.',
    status: 'TODO'
  },
  {
    id: '47',
    title: '모니터링 대시보드 구축',
    memo: '테스트를 완료한 후 진행하세요.',
    status: 'DONE'
  },
  {
    id: '48',
    title: '알림 시스템 구축',
    memo: '관련 이슈를 확인하세요.',
    status: 'TODO'
  },
  {
    id: '49',
    title: '리포트 생성 기능',
    memo: '스테이크홀더 승인이 필요합니다.',
    status: 'DONE'
  },
  {
    id: '50',
    title: '데이터 분석 도구 개발',
    memo: '문서화를 함께 진행하세요.',
    status: 'TODO'
  },
  {
    id: '51',
    title: '프로젝트 기획서 작성',
    memo: '성능에 영향을 줄 수 있으니 주의하세요.',
    status: 'DONE'
  },
  {
    id: '52',
    title: 'API 문서 정리',
    memo: '보안 검토가 필요합니다.',
    status: 'TODO'
  },
  {
    id: '53',
    title: '데이터베이스 설계',
    memo: '사용자 피드백을 반영하세요.',
    status: 'DONE'
  },
  {
    id: '54',
    title: 'UI 컴포넌트 개발',
    memo: '접근성을 고려하여 개발하세요.',
    status: 'TODO'
  },
  {
    id: '55',
    title: '테스트 코드 작성',
    memo: '반응형 디자인을 적용하세요.',
    status: 'DONE'
  },
  {
    id: '56',
    title: '코드 리뷰 진행',
    memo: '다국어 지원을 고려하세요.',
    status: 'TODO'
  },
  {
    id: '57',
    title: '버그 수정',
    memo: '테스트 커버리지를 높이세요.',
    status: 'DONE'
  },
  {
    id: '58',
    title: '성능 최적화',
    memo: '코드 품질을 유지하세요.',
    status: 'TODO'
  },
  {
    id: '59',
    title: '문서화 작업',
    memo: '문서를 최신 상태로 유지하세요.',
    status: 'DONE'
  },
  {
    id: '60',
    title: '배포 준비',
    memo: '변경 사항을 기록하세요.',
    status: 'TODO'
  },
  {
    id: '61',
    title: '회의록 작성',
    memo: '중요한 작업이므로 신중하게 진행해야 합니다.',
    status: 'DONE'
  },
  {
    id: '62',
    title: '이슈 트래킹',
    memo: '우선순위가 높은 작업입니다.',
    status: 'TODO'
  },
  {
    id: '63',
    title: '사용자 피드백 반영',
    memo: '다른 팀과 협의가 필요합니다.',
    status: 'DONE'
  },
  {
    id: '64',
    title: '보안 점검',
    memo: '기한 내에 완료해야 합니다.',
    status: 'TODO'
  },
  {
    id: '65',
    title: '모니터링 설정',
    memo: '문서를 참고하여 진행하세요.',
    status: 'DONE'
  },
  {
    id: '66',
    title: '로깅 시스템 구축',
    memo: '코드 리뷰를 받아야 합니다.',
    status: 'TODO'
  },
  {
    id: '67',
    title: '에러 핸들링 개선',
    memo: '테스트를 완료한 후 진행하세요.',
    status: 'DONE'
  },
  {
    id: '68',
    title: '접근성 개선',
    memo: '관련 이슈를 확인하세요.',
    status: 'TODO'
  },
  {
    id: '69',
    title: '반응형 디자인 적용',
    memo: '스테이크홀더 승인이 필요합니다.',
    status: 'DONE'
  },
  {
    id: '70',
    title: '국제화 작업',
    memo: '문서화를 함께 진행하세요.',
    status: 'TODO'
  },
  {
    id: '71',
    title: '단위 테스트 작성',
    memo: '성능에 영향을 줄 수 있으니 주의하세요.',
    status: 'DONE'
  },
  {
    id: '72',
    title: '통합 테스트 수행',
    memo: '보안 검토가 필요합니다.',
    status: 'TODO'
  },
  {
    id: '73',
    title: '성능 테스트',
    memo: '사용자 피드백을 반영하세요.',
    status: 'DONE'
  },
  {
    id: '74',
    title: '보안 테스트',
    memo: '접근성을 고려하여 개발하세요.',
    status: 'TODO'
  },
  {
    id: '75',
    title: '사용자 테스트',
    memo: '반응형 디자인을 적용하세요.',
    status: 'DONE'
  },
  {
    id: '76',
    title: '디자인 시스템 구축',
    memo: '다국어 지원을 고려하세요.',
    status: 'TODO'
  },
  {
    id: '77',
    title: '컴포넌트 라이브러리 제작',
    memo: '테스트 커버리지를 높이세요.',
    status: 'DONE'
  },
  {
    id: '78',
    title: '스토리북 설정',
    memo: '코드 품질을 유지하세요.',
    status: 'TODO'
  },
  {
    id: '79',
    title: 'CI/CD 파이프라인 구축',
    memo: '문서를 최신 상태로 유지하세요.',
    status: 'DONE'
  },
  {
    id: '80',
    title: '인프라 설정',
    memo: '변경 사항을 기록하세요.',
    status: 'TODO'
  },
  {
    id: '81',
    title: '데이터 마이그레이션',
    memo: '중요한 작업이므로 신중하게 진행해야 합니다.',
    status: 'DONE'
  },
  {
    id: '82',
    title: '레거시 코드 리팩토링',
    memo: '우선순위가 높은 작업입니다.',
    status: 'TODO'
  },
  {
    id: '83',
    title: '아키텍처 설계',
    memo: '다른 팀과 협의가 필요합니다.',
    status: 'DONE'
  },
  {
    id: '84',
    title: '기술 스택 선정',
    memo: '기한 내에 완료해야 합니다.',
    status: 'TODO'
  },
  {
    id: '85',
    title: '팀 온보딩 자료 준비',
    memo: '문서를 참고하여 진행하세요.',
    status: 'DONE'
  },
  {
    id: '86',
    title: '문서 번역',
    memo: '코드 리뷰를 받아야 합니다.',
    status: 'TODO'
  },
  {
    id: '87',
    title: 'API 엔드포인트 개발',
    memo: '테스트를 완료한 후 진행하세요.',
    status: 'DONE'
  },
  {
    id: '88',
    title: '프론트엔드 개발',
    memo: '관련 이슈를 확인하세요.',
    status: 'TODO'
  },
  {
    id: '89',
    title: '백엔드 개발',
    memo: '스테이크홀더 승인이 필요합니다.',
    status: 'DONE'
  },
  {
    id: '90',
    title: '모바일 앱 개발',
    memo: '문서화를 함께 진행하세요.',
    status: 'TODO'
  },
  {
    id: '91',
    title: '웹사이트 리뉴얼',
    memo: '성능에 영향을 줄 수 있으니 주의하세요.',
    status: 'DONE'
  },
  {
    id: '92',
    title: '마이크로서비스 분리',
    memo: '보안 검토가 필요합니다.',
    status: 'TODO'
  },
  {
    id: '93',
    title: '캐싱 전략 수립',
    memo: '사용자 피드백을 반영하세요.',
    status: 'DONE'
  },
  {
    id: '94',
    title: '로드 밸런싱 설정',
    memo: '접근성을 고려하여 개발하세요.',
    status: 'TODO'
  },
  {
    id: '95',
    title: '데이터 백업',
    memo: '반응형 디자인을 적용하세요.',
    status: 'DONE'
  },
  {
    id: '96',
    title: '재해 복구 계획 수립',
    memo: '다국어 지원을 고려하세요.',
    status: 'TODO'
  },
  {
    id: '97',
    title: '모니터링 대시보드 구축',
    memo: '테스트 커버리지를 높이세요.',
    status: 'DONE'
  },
  {
    id: '98',
    title: '알림 시스템 구축',
    memo: '코드 품질을 유지하세요.',
    status: 'TODO'
  },
  {
    id: '99',
    title: '리포트 생성 기능',
    memo: '문서를 최신 상태로 유지하세요.',
    status: 'DONE'
  },
  {
    id: '100',
    title: '데이터 분석 도구 개발',
    memo: '변경 사항을 기록하세요.',
    status: 'TODO'
  }
]
