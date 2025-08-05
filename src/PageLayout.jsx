import { NavLink, Outlet, Link } from "react-router-dom"

const Header = () => {
  return(
    <header className="w-full h-12 flex justify-center items-center bg-amber-700">
      <Link to="/" className="text-2xl font-mono">Bloggy</Link>
    </header>
  )
}

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full h-12 bg-stone-700 flex justify-center items-center">
      <input
        type="text"
        id="search bar"
        name="search bar"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-1 pl-2 w-70 border rounded-md bg-white"
      />
    </div>
  )
}


const Nav = () => {
  return (
    <nav className="w-full flex justify-center py-4 bg-stone-700">
      <ul className="w-full flex justify-evenly items-center">
        <li><NavLink to="/" 
          className={({isActive}) =>
          `
          relative pb-2 transition-colors active:text-amber-50
          after:content-[''] after:bg-amber-700 after:absolute
          after:h-1 after:transition-all after:duration-300
          after:bottom-0 after:left-0 after:rounded-sm
          ${
            isActive? 'after:w-full' : 'after:w-0'
          }
          `}      
          >Home
          </NavLink></li>
        <li><NavLink to="/post" 
          className={({isActive}) =>
          `
          relative pb-2 transition-colors active:text-slate-50
          after:content-[''] after:bg-amber-700 after:absolute
          after:h-1 after:transition-all after:duration-300
          after:bottom-0 after:left-0 after:rounded-sm
          ${
            isActive? 'after:w-full' : 'after:w-0'
          }
          `}       
          >Post
          </NavLink>
        </li><NavLink 
          to="/about" 
          className={({isActive}) =>
          `
          relative pb-2 mt-2 transition-colors active:text-slate-50
          after:content-[''] after:bg-amber-700 after:absolute
          after:h-1 after:transition-all after:duration-300
          after:bottom-0 after:left-0 after:rounded-sm
          ${
            isActive? 'after:w-full' : 'after:w-0'
          }
          `} 
        >
          About
        </NavLink>
      </ul>
    </nav>
  )
}

const Footer = () => {
  const today = new Date()
  return(
    <footer className="w-full h-12 flex justify-center items-center bg-amber-700">
      <h1 className="text-lg font-mono">
        Copyright &copy; {today.getFullYear()}
      </h1>
    </footer>
  )
}

const PageLayout = ({ search, setSearch }) => {
  return (
    <div className="h-full flex flex-col gap-0 overflow-hidden">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <Nav />
      <main className="h-full overflow-scroll">
          <Outlet /> {/* This renders the child routes */}
      </main>
    </div>
  )
}

export default PageLayout