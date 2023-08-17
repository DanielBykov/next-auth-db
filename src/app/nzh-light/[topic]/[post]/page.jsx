import {Summary} from "@/app/nzh-light/_components/Summary";
import {Sentiment} from "@/app/nzh-light/_components/Sentiment";

const paragraphRender = (data) => {
  return data.map(({_id, type, content}) => {
    if(type==='text') return (<p  className="my-4" dangerouslySetInnerHTML={{__html: content}}/>)
    if(type==='raw_html') return (<p  className="my-4" dangerouslySetInnerHTML={{__html: content}}/>)
  })
}

async function getData(postId) {
  const q=`https://api.sandbox.nzme.arcpublishing.com/content/v4/?_id=${postId}&website=nzh`;
  try {
    const res = await fetch(q, {
      headers: {Authorization: 'Bearer EV3REEA5C71MPTOCOC64FHCH1P4PLOC2LngvzliwmiTRhzIS2NQbMhhoZmlrWpPXHP2n8aOT'}
    })
    return res.json()

  } catch (e) {
    console.log('d256 e:', e)
    throw new Error('Failed to fetch data')
  }

}
export default async function Post({params:{post:postId}}) {
  const p = await getData(postId)
  const text = p.content_elements
    .filter(({type}) => (type==='text'))
    .map(({content}) => (content))
    .join(" ");
  return (
    <div data-ui={'Post Page'}>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">{p.headlines.web}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{p.headlines.basic}</h1>
          <p className="mt-6 text-xl leading-8">
            {p.description.basic}
          </p>
          <Summary text={text}/>
          <Sentiment text={text}/>

          <div className="mt-10 max-w-2xl">
            {paragraphRender(p.content_elements)}
          </div>
        </div>
      </div>
    </div>
  )
}


