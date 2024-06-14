'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { Select } from './'

const OptionsSortBy = [
  {
    value: '',
    title: 'Sort By',
    default: true,
  },
  {
    value: '&sortBy=title&order=asc',
    title: 'Title A-z',
    default: false,
  },
  {
    value: '&sortBy=title&order=desc',
    title: 'Title Z-a',
    default: false,
  },
  {
    value: '&sortBy=brand&order=asc',
    title: 'Brand A-z',
    default: false,
  },
  {
    value: '&sortBy=brand&order=desc',
    title: 'Brand Z-a ',
    default: false,
  },
]

const SelectSortBy = (query: {
  [key: string]: string | string[] | undefined
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (sortBy: string) => {
    const params = new URLSearchParams(searchParams)
    if (sortBy) {
      params.set('sortBy', sortBy)
    } else {
      params.delete('sortBy')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select.Root
      defaultValue={query.sortBy}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handleSearch(e.currentTarget.value)
      }
    >
      {OptionsSortBy.map((item, index) => (
        <Select.Option key={`${item.value}-${index}`} value={item.value}>
          {item.title}
        </Select.Option>
      ))}
    </Select.Root>
  )
}

export default SelectSortBy
