import { Link, useLocation } from 'react-router'
import { LayoutDashboard, ListTodo } from 'lucide-react'

const Nav = () => {
  const location = useLocation()

  const navItems = [
    {
      path: '/',
      icon: LayoutDashboard,
      label: '대시보드'
    },
    {
      path: '/task',
      icon: ListTodo,
      label: '할 일'
    }
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => {
        const Icon = item.icon
        const active = isActive(item.path)
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
              active
                ? 'bg-primary text-white'
                : 'text-primary-700 hover:bg-primary-100'
            }`}
            title={item.label}
          >
            <Icon className="h-5 w-5" />
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
