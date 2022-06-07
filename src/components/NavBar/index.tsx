import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="flex justify-center flex-row pt-3 ">
      <Link href="/">
        <div className="border-l border-t border-b px-2 cursor-pointer">
            Home
        </div>
      </Link>
      <Link href="/about">
        <div className="border-l border-t border-b px-2 cursor-pointer">
          About
        </div>
      </Link>
      <Link href="/contact">
        <div className="border-l border-t border-b px-2 cursor-pointer">
          Contact
        </div>
      </Link>
      <Link href="/menu">
        <div className="border px-2 cursor-pointer">
          Menu
        </div>
      </Link>
    </div>
  )
}

export default NavBar