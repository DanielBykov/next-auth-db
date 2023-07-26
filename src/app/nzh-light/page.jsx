import Link from "next/link";

// const querySample = "https://www.nzherald.co.nz/pf/api/v3/content/fetch/content-feed-advanced?query={%22q%22:%22type:story%22,%22site%22:%22nzh%22,%22sort%22:%22display_date:desc%22}&_website=nzh"
const querySample = "https://play.nzherald.co.nz/pf/api/v3/content/fetch/content-feed-advanced?query=%7B%22limit%22%3A12%2C%22q%22%3A%22type%3Astory%22%2C%22site%22%3A%22whanganui-chronicle%22%7D&d=1584&_website=nzh"
async function getData() {
  const res = await fetch(querySample, {
    headers: {
      Cookie: 'arc-access=jJ7f2tbWT9jQZYwT'
    }
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log('d256 res:', res)
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function ArticleList() {
  const articles = await getData()

  console.log('d256 articles:', articles)

  const alink = (a) => `/nzh-light/${a.id}`

  return (
    <div data-ui={'OnePage'}>
      <ul className="flex flex-wrap gap-6">
        {articles.map(a => (
          <li>

            <div
              key={a.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href={{pathname: alink(a)}} >
                <img className="rounded-t-lg" src={a.image.url} alt=""/>
              </Link>
              <div className="p-5">
                <Link href={{pathname: alink(a)}} >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{a.headline}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{a.description}</p>
                <Link href={{pathname: alink(a)}}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}
