import { Popover } from '@headlessui/react'
import './Header.css';

export default function Header() {
  return (
    <Popover className="relative bg-white header">
      <div>
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">DACE</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="/create" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Create
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
            >
              Connect
            </a>
          </div>
        </div>
      </div>

    </Popover>
  )
}