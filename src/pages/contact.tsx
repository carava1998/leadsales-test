import type { NextPage } from 'next'
import NavBar from '../components/NavBar'

const Contact: NextPage = () => {
  return (
    <>
      <NavBar/>
      <div className="p-4 text-xl text-center font-semibold text-indigo-500">
          Contact
      </div>
    </>
  )
}

export default Contact
