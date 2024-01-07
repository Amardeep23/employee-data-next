// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
//       <Link className="text-white font-bold" href={"/"}>
//         GTCoding.
//       </Link>
//       <Link className="bg-white p-2" href={"/addTopic"}>
//         Add Topic
//       </Link>
//     </nav>
//   );
// }

// "use client"

import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg"
          alt="Promptopia"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
        <p className='logo_text'>Employee Data</p>
      </Link> 
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href={"/addTopic"} className=
            "black_btn">
              Add Employee
            </Link>
          </div>
      </div>

    </nav>
  )
}

export default Nav