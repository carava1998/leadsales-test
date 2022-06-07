import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-950 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Leadsales</span>
      </div>
      <div className="block">
        <title>Menu</title>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div className="block mt-4 lg:inline-block lg:mt-0 text-periwinkle hover:text-white mr-4">
            <Link href="/">
              Home
            </Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-periwinkle hover:text-white mr-4">
            <Link href="/about">
              About
            </Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-periwinkle hover:text-white mr-4">
            <Link href="/contact">
              Contact
            </Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-periwinkle hover:text-white">
            <Link href="/menu">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar