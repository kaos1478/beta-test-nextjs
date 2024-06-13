import Link from 'next/link'
import { Input, Button } from './'

const Navbar = () => {
  return (
    <header>
      <nav className="m-4 flex items-center justify-between">
        <Link href="/">
          <h1>BetaShop</h1>
        </Link>
        <div>
          <Input />
          <Button className="ml-3">Search</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
