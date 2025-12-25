import UserInfo from '@app/user/components/UserInfo'
import LogoutButton from '@app/user/components/LogoutButton'

import { useGetUser } from '@app/user/hooks/useUser'

const UserPage = () => {
  const { data } = useGetUser()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-disabled-900">회원정보</h1>
        <p className="text-sm text-disabled-600">
          내 정보를 확인하고 관리하세요
        </p>
      </div>

      <UserInfo data={data} />

      <div className="flex justify-end">
        <LogoutButton />
      </div>
    </div>
  )
}

export default UserPage
