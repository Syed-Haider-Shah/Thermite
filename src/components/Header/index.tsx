import { Bell, Download, Person, SearchBar } from '@/components'

const Header = () => {
  return (
    <header className="bg-white rounded-lg py-2.5 px-4 flex items-center justify-between h-15 w-full">
      <div className="gap-6 h-full flex items-center">
        <SearchBar placeholder="Search anything" className="w-72" />
        <button
          type="button"
          className="px-3 py-1.5 text-white text-xs font-bold rounded-full bg-indigo-600 h-min"
        >
          Create
        </button>
      </div>
      <div className="h-full flex gap-8 items-center">
        <Bell />
        <Download />
        <Person />
      </div>
    </header>
  )
}

export default Header
