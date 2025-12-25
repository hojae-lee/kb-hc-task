import { User } from 'lucide-react'

import type { UserResponse } from '@api/user/schema'
import Label from '@common/components/ui/Label'

type UserInfoProps = {
  data: UserResponse
}

const UserInfo = ({ data }: UserInfoProps) => {
  return (
    <div className="rounded-lg border-2 border-primary-200 bg-primary-50 p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary-100 p-3">
          <User className="h-6 w-6 text-primary-600" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-semibold text-disabled-900">
              {data.name}
            </p>
          </div>
          <div>
            <p className="text-base text-disabled-700">{data.memo}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
