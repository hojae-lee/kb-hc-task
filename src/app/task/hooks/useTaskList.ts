import { useInfiniteQuery } from '@tanstack/react-query'

import { taskKeys, getTaskList } from '@api/task'

export const useTaskList = () => {
  return useInfiniteQuery({
    queryKey: [...taskKeys.list()],
    queryFn: ({ pageParam }) => getTaskList({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined
    }
  })
}
