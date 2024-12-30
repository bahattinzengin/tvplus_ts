import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { buttonConstant } from '../constant/buttonConstant'
// import { ButtonConstantType } from './Header'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { ButtonConstantType } from '../type/Type';


export default function Example() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-yellow-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-yellow-700 border-none p-2">
                   
                    <TiThMenu aria-hidden="true" className="-mr-1 size-7 text-black" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-72 h-80 origin-top-right rounded-md bg-[#1A1A1D] shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
            >
                <div className="py-1 space-y-5">

                    {buttonConstant.map((item: ButtonConstantType,i) => (


                        <MenuItem                         
                        key={i}
                        >
                            <Link
                                className="block px-4 py-2 text-base font-bold text-[#F6F7C4] data-[focus]:bg-yellow-500 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                to={item.path}>
                                {item.name}
                            </Link>
                        </MenuItem>

                    ))}

                </div>
            </MenuItems>
        </Menu>
    )
}
