"use client"
import Link from "next/link";
import {Cog6ToothIcon, XMarkIcon, PlusIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {initTopics} from "@/app/nzh-light/_components/mock-data";
import {usePathname} from "next/navigation";

let logo = "https://www.nzherald.co.nz/pf/resources/images/fallback-promo-image.png?d=627"
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const urlSegment = '/nzh-light'

export const Sidebar = () => {
  let path = usePathname()
  let currentTopicUrl = path.split('/')[2]

  const [topics, setTopics ] = useState(initTopics)
  const [favTopics, setFavTopics ] = useState([])

  const topicClick = (item) => (e) => {
    e.preventDefault()
    setFavTopics([...favTopics, item])
    setTopics([...topics.filter((item_) => item_ !== item)])
  }
  const favTopicClick = (item) => (e) => {
    e.preventDefault()
    setFavTopics([...favTopics.filter((item_) => item_ !== item)])
    setTopics([...topics, item])
  }
  return (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-700 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src={logo}
            alt="NZH"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <div className="text-xs font-semibold leading-6 text-yellow-400">Favourite Topics</div>
              <ul role="list" className="-mx-2 space-y-1">

                {favTopics.sort((a,b) => a.id-b.id).map((item) => (
                  <li key={item.name}>
                    <Link href={`${urlSegment}/${item.href}`}
                      className={classNames(
                        item.href === currentTopicUrl
                          ? 'bg-yellow-600 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-yellow-600/20',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                      )}
                    >
                      <div className="flex gap-3">
                        <item.icon
                          className='text-yellow-400 group-hover:text-white h-6 w-6 shrink-0'
                          aria-hidden="true"
                        />
                        <div className="">{item.name}</div>
                      </div>

                      <div className="flex-1 flex justify-end items-center">
                        <XMarkIcon
                          onClick={favTopicClick(item)}
                          className="h-4 w-4 text-white/20 hover:text-white"
                          aria-hidden="true"
                        />
                      </div>

                    </Link>
                  </li>
                ))}
              </ul>

            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-indigo-200">Add Topics</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">


                {topics.sort((a,b) => a.id-b.id).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`${urlSegment}/${item.href}`}
                      className={classNames(
                        item.href === currentTopicUrl
                          ? 'bg-yellow-600 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-yellow-600/20',

                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                      )}
                    >
                      <div className="flex gap-3">
                        <item.icon
                          className={classNames(
                            // item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </div>

                      <div className="flex-1 flex justify-end items-center">
                        <PlusIcon
                          onClick={topicClick(item)}
                          className="h-4 w-4 text-white/20 hover:text-white"
                          aria-hidden="true"
                        />
                      </div>

                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="border border-gray-800 rounded p-2 text-center text-sm">
                Click "+" to add a topic to the favourite section
              </div>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
  )
}
