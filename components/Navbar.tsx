'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Input, Button } from './'

const Navbar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  const search = params.get('search')

  const handleFormAction = (formData: FormData) => {
    const searchText = formData.get('search')

    if (searchText) {
      params.set('search', searchText.toString())
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <header>
      <nav className="mb-6 flex flex-col items-center justify-between sm:flex-row">
        <Link href="/">
          <h1 className="text-2xl font-bold sm:text-3xl">Beta</h1>
        </Link>
        <div className="mt-5 flex sm:mt-0">
          <form action={handleFormAction}>
            <Input
              defaultValue={search || ''}
              type="text"
              id="search"
              name="search"
              placeholder="Phone"
              className="w-40"
            />
            <Button className="ml-3">Search</Button>
          </form>

          <Link href="/product/create">
            <Button className="ml-3 border border-black bg-transparent text-black">
              Add
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
