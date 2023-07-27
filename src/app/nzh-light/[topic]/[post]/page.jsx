import {getSumAI_NLPCloud} from "@/app/nzh-light/_components/getSummaryAI_NLPCloud";
import {Summary} from "@/app/nzh-light/_components/Summary";
import {Sentiment} from "@/app/nzh-light/_components/Sentiment";

let q = `https://www.nzherald.co.nz/pf/api/v3/content/fetch/content-by-id?query={%22id%22:%22Q3PAAWTFJBF7VPETXNWFC2QPNM%22}`
let q2='https://api.sandbox.nzme.arcpublishing.com/content/v4/?website_url=/nz/devastating-fatal-plane-crash-at-masterton-aerodrome-prompts-major-safety-recommendations/4PYICIXPOUW5CID3QW3DRL4L54/&website=nzh';
let q3='https://api.sandbox.nzme.arcpublishing.com/content/v4/?_id=WQKTAMH72MOQWQCUFZMH2SR6BE&website=nzh';

let p_ = {
  _id: '4PYICIXPOUW5CID3QW3DRL4L54',
  type: 'story',
  version: '0.10.7',
  content_elements: [
    {
      _id: 'SZO2RPJAXBGGZN2ZQZSSXXHOO4',
      type: 'raw_html',
      content: '<a href="https://www.nzherald.co.nz/topic/public-interest-open-justice/" target="_blank"><img src="https://www.nzherald.co.nz/resizer/wGQ7NH5Nw3Azdl1drqv396PGUS4=/cloudfront-ap-southeast-2.images.arcpublishing.com/sandbox.nzme/NP7VOLA2BVCR27YTH3MPOZAE2Y.jpg" style="height:auto; max-width:100%; width:100%;" alt=""/></a>'
    },
    {
      _id: 'HOPXQ53USZGZLH4JMJ7DF5W2GI',
      type: 'text',
      content: 'Micro-light pilot Craig McBride was approaching the runway at the Hood Aerodrome near Masterton when disaster struck in 2019.'
    },
    {
      _id: '3SDUVEAIKBEP5JXYUURMUIOGGE',
      type: 'text',
      content: 'Commercially qualified pilot Josh Christensen, who had just dropped off some skydivers, was also approaching the runway in a Cessna but when he tried to overtake McBride, who was in his blind spot, the two collided.'
    },
    {
      _id: '33IDCAL2CBAKHGLOGRW5TMW24M',
      type: 'text',
      content: 'The impact caused the two planes to become entangled before separating and spiralling to the ground.'
    },
    {
      _id: 'HCNMECEKPRF7TKIPB7OCNZ2O3A',
      type: 'text',
      content: 'Both pilots died on impact, leaving behind grieving friends, family and community.'
    },
    {
      _id: '7BR2TQZOHVAUJGXGWURXWOKMOM',
      type: 'text',
      content: "Today a report from the Transport Accident Investigation Commission (TAIC) into the crash has revealed major safety issues at unattended aerodromes and has made significant recommendations to make sure such a devastating loss won't happen again."
    },
    {
      _id: 'RJM4N5KRCFBRBCOSXNQ2TPWQDQ',
      type: 'text',
      content: 'TAIC found the official cause of the crash was that Christensen did not give way to McBride, a qualified micro-light pilot making his descent on to the runway.'
    },
    {
      _id: 'F3TPVLC6T5AN5DPT6UIQW4DWLE',
      type: 'text',
      content: `McBride was in Christensen's "blind spot" and he didn't see McBride during his final turn to land before it was too late.`
    },
    {
      _id: '6OVSVIXLRFHC7GJF44SWDFFA6A',
      type: 'text',
      content: "TAIC's chief investigator of accidents, Naveen Kozhuppakalam, said Christensen's approach went against civil aviation rules but that it was the way the young pilot, who was 20 at the time, had been taught."
    },
    {
      _id: 'J22MWDDJYNHQTJN5YPDBRPXTPM',
      type: 'text',
      content: '"The pilot had been trained to do it this way in accordance with this accepted local practice at Hood Aerodrome," Kozhuppakalam said.'
    },
    {
      _id: 'YEWNBM6LA5CR5OPPRGNYNDUIFU',
      type: 'raw_html',
      additional_properties: [Object],
      content: '<div class="element-action-button" style="text-align: center;"><a class="button" href="mailto: openjustice@nzme.co.nz">Do you have a justice story we should be covering? </a></div>'
    },
    {
      _id: 'DDT6HGEDJZBGDGOGSTRQNAI7ZU',
      type: 'text',
      content: 'However, there were a number of failures that led to the crash that rocked the regional community, and these have highlighted vital changes that need to be made nationwide according to TAIC.'
    },
    {
      _id: 'FFP6A2RQXJCOTLM6QJZRGFJBNI',
      type: 'text',
      content: 'The 2019 crash happened near Masterton, around an hour and a half from Wellington, at the Hood Aerodrome, one of a number around the country that do not have air traffic control.'
    },
    {
      _id: 'LHNFXTOMKVDAJCHGCM3WMAG7AE',
      type: 'text',
      content: 'Conditions were clear on the morning of June 16 2019, when a Tecnam micro-light, piloted by McBride, and a Cessna used for parachuting, piloted by Christensen, both prepared to land.'
    },
    {
      _id: '2UC6VYWI6BDDVLXSNHZGSRS3LU',
      type: 'text',
      content: 'They were coming into the Masterton Aerodrome, McBride Infront and on his final approach of a sealed runway and Christensen aiming for the parallel grass runway when they collided mid-air.'
    },
    {
      _id: 'S7MMQFUWDVBF7BEXSBNMGLFWLA',
      type: 'text',
      content: "Christensen's aircraft was faster and collided with McBride's as it overtook from the right, before the planes crashed."
    },
    {
      _id: 'YLAX7HHCWNO7GIG3UXPPQW23XQ',
      additional_properties: [Object],
      address: {},
      caption: 'The fatal crash happened at the Hood Aerodrome in Masterton in 2019. Photo / File',
      created_date: '2022-11-02T05:06:31Z',
      height: 432,
      last_updated_date: '2022-11-02T05:06:31Z',
      licensable: false,
      owner: [Object],
      source: [Object],
      type: 'image',
      url: 'https://cloudfront-ap-southeast-2.images.arcpublishing.com/sandbox.nzme/YLAX7HHCWNO7GIG3UXPPQW23XQ.jpg',
      version: '0.10.3',
      width: 768,
      alignment: 'left'
    },
    {
      _id: 'GGIWRYCAMRAYLL7PPCWK7U2G7A',
      type: 'text',
      content: 'The report said Christensen needed to give way to McBride, but was performing a non-standard landing that had become accepted at the Aerodrome.'
    },
    {
      _id: '73ZUO6XF4ZAD7MIFRMFX4T5HOE',
      type: 'text',
      content: 'The landing, according to TAIC, was a "variance" to the Civil Aviation Rules, and despite simultaneous landings being prohibited with charts at the Aerodrome that outlined this, there was no clear definition for pilots.'
    },
    {
      _id: 'SI7S43HGGBFYDBQUUMEZCZQFME',
      type: 'text',
      content: "The Commission found unattended aerodromes differed in their compliance with Civil Aviation Rules; in 'simultaneous operations' practice (planes taking off and landing on close parallel runways); and in observing the requirement to report safety incidents."
    },
    {
      _id: 'FZMGA6ZURZG7JFGFQE6MEBA5IQ',
      type: 'text',
      content: `"These unattended aerodromes are safe so long as they're well managed by appropriately qualified ground staff, and everyone observes Civil Aviation Rules," Kozhuppakalam said.`
    },
    {
      _id: 'GB7LOXOMUVDIFFBTAEVDKD4B4I',
      type: 'text',
      content: 'Both pilots made appropriate radio calls, both were familiar with the aerodrome and the conditions on the day were fine.'
    },
    {
      _id: 'AVJ2GJOBFJDO5A6CVHOOYUNBZQ',
      type: 'text',
      content: "TAIC's investigation highlighted two other crashes, one in Paraparaumu in 2008 and another in Feilding two years later, with near-identical similarities, and as a result, found common safety issues."
    },
    {
      _id: 'LQF2JK2ONJEGLBQWVGIMVFYH3E',
      type: 'text',
      content: 'In all three crashes, the pilots were not actively listening to the radio calls from the other plane and there was a deficiency in the adequacy of training and support of aerodrome managers at unattended sites.'
    },
    {
      _id: 'IYYELRXYAVF3VNJYUNGLDXBWFQ',
      type: 'text',
      content: 'McBride, who was 60 when he died, had been learning to fly with a few years under his belt.'
    },
    {
      _id: 'FCPFHDYXKHTXSVHDZLWZHQYDWU',
      additional_properties: [Object],
      address: {},
      caption: 'Craig McBride was a beloved member of his community. Photo / File',
      created_date: '2022-11-02T05:06:32Z',
      height: 699,
      last_updated_date: '2022-11-02T05:06:32Z',
      licensable: false,
      owner: [Object],
      source: [Object],
      type: 'image',
      url: 'https://cloudfront-ap-southeast-2.images.arcpublishing.com/sandbox.nzme/FCPFHDYXKHTXSVHDZLWZHQYDWU.jpg',
      version: '0.10.3',
      width: 1240,
      alignment: 'left'
    },
    {
      _id: 'NXTOET7ELJFOBKHQ2EJFEDWS24',
      type: 'text',
      content: 'A member of the local aviation club, he was a beloved community member and significant volunteer around the Wairarapa district for decades before his death.'
    },
    {
      _id: '742WG3ZIJZBJDKXLHSW6HYGY4U',
      type: 'text',
      content: 'Christensen was a passionate qualified commercial pilot working for Skydive Wellington.'
    },
    {
      _id: '5KSC42HRQZGJTFZ6DX7HSONETA',
      type: 'text',
      content: 'At the time, his former boss described him as a quiet young man with a wicked sense of humour, who integrated well with the team.'
    },
    {
      _id: 'BCGEYGFOOFF5DHHSBA4RJ5QYWU',
      type: 'text',
      content: 'The crash, and the deaths of the two pilots, devastated the community, and the recent report seeks to make nationwide changes that mean a fatal crash such as this one will be avoided.'
    },
    {
      _id: '6LQ42DVOVRTNIJFBHKRDQY6JXA',
      additional_properties: [Object],
      address: {},
      caption: 'Josh Christensen was just 20 when he died in the crash. Photo / Facebook',
      created_date: '2022-11-02T05:06:33Z',
      height: 298,
      last_updated_date: '2022-11-02T05:06:33Z',
      licensable: false,
      owner: [Object],
      source: [Object],
      type: 'image',
      url: 'https://cloudfront-ap-southeast-2.images.arcpublishing.com/sandbox.nzme/6LQ42DVOVRTNIJFBHKRDQY6JXA.jpg',
      version: '0.10.3',
      width: 366,
      alignment: 'left'
    },
    {
      _id: 'REU7YWSR4BC5FNGVQO7TRNAOYU',
      type: 'text',
      content: 'Then-Mayor Lyn Patterson spoke on behalf of the Masterton District Council, which owns and operate the Hood Aerodrome, and said the loss was devastating not only for the aviation community but the community as a whole.'
    },
    {
      _id: 'ODSVUKGMVNG33PU47NVPT7N2Z4',
      type: 'text',
      content: 'From tragedy have come vital learnings for pilots, regardless of experience, including maintaining an effective lookout and proactively listening to radio calls from other pilots.'
    },
    {
      _id: '3JVEUDFPJJAPXH2I63R6QHHJ4A',
      type: 'text',
      content: 'TAIC said pilots need to be aware of and comply with the aviation recommendations and follow the standard operating procedures.'
    },
    {
      _id: 'ENVCFT46TVBUTD2OVFVBWWFKPU',
      type: 'text',
      content: 'Aerodrome owners and operators, along with WorkSafe and the Civil Aviation Authority need to ensure appropriate training and support is given to those running the sites which can be incredibly busy.'
    },
    {
      _id: 'KW6DR2YJ4BDTLAD3VHMDXJROHU',
      type: 'text',
      content: 'There needs to be a collaborative effort by all agencies involved with unattended aerodrome sites to ensure all comply with the universal, and proper, safety procedures in the future.'
    },
    {
      _id: 'KGZLIKTQXNBABBYQIQBULEEXPU',
      type: 'text',
      content: '"Safety depends not just on operators and pilots of aircraft, but also aerodrome owners, operators, managers and ground staff; they should all have appropriate training and support, with scrutiny and further support from safety regulators the Civil Aviation Authority and WorkSafe," Kozhuppakalam said.'
    },
    {
      _id: 'SNRQTXYZMVFNLGHAFDD362TET4',
      type: 'text',
      content: 'TAIC has received a positive response from the Civil Aviation Authority, which has accepted and committed to address all of these recommendations.'
    },
    {
      _id: 'V27I3TLRRVHBNINEH45TLPQYJQ',
      type: 'raw_html',
      content: '<a href="https://www.nzherald.co.nz/topic/public-interest-open-justice/" target="_blank"><img src="https://www.nzherald.co.nz/resizer/OovrOawH9EyO7FHh0NkV45CW1QY=/cloudfront-ap-southeast-2.images.arcpublishing.com/sandbox.nzme/25JXSTEVJOMJRB6FCRVQLULR6E.jpg" style="height:auto; max-width:100%; width:100%;" alt=""/></a>'
    }
  ],
  created_date: '2022-11-02T03:46:19.609Z',
  revision: {
    revision_id: '4NWC2GKLBZCXPN4HNMPJWRM5WA',
    parent_id: 'SCACIUZD5FA2HIMSATJE6K5DMY',
    editions: [ 'default' ],
    branch: 'default',
    published: true
  },
  last_updated_date: '2022-11-02T23:52:12.203Z',
  headlines: {
    basic: 'Devastating fatal plane crash at Masterton Aerodrome prompts major safety recommendations',
    meta_title: '',
    mobile: '',
    native: '',
    print: '',
    tablet: '',
    web: 'Aerodrome tragedy: Pilot of skydiving plane failed to give way to microlight'
  },
  owner: { name: 'NZ Herald', sponsored: false, id: 'sandbox.nzme' },
  content_restrictions: { content_code: 'free' },
  comments: { display_comments: false },
  syndication: { facebook_instant: true },
  workflow: { note: '9.30am embargo', status_code: 6 },
  description: {
    basic: 'Changes needed as crash report reveals major safety issues at unattended aerodromes.'
  },
  source: {
    edit_url: 'https://zen.nzherald.co.nz/v2/index.cfm?page=article&objectid=12564645',
    name: '',
    source_id: '12564645',
    source_type: 'staff',
    system: 'Zen'
  },
  taxonomy: {
    primary_section: {
      _id: '/nz',
      _website: 'nzh',
      type: 'section',
      version: '0.6.0',
      name: 'New Zealand',
      description: null,
      path: '/nz',
      parent_id: '/',
      parent: [Object],
      additional_properties: [Object]
    },
    sections: [ [Object] ],
    tags: [ [Object], [Object], [Object], [Object], [Object] ]
  },
  promo_items: {
    basic: {
      _id: 'JZTWC24MYCXE324ZOBPFOPQAKE',
      additional_properties: [Object],
      address: [Object],
      caption: 'Pilots Joshua Christensen and Craig McBride were killed when their planes collided at the Hood Aerodrome in Masterton. Photo / Supplied',
      created_date: '2022-11-02T09:06:23Z',
      height: 1211,
      last_updated_date: '2022-11-02T09:06:23Z',
      licensable: false,
      owner: [Object],
      slug: 'APNZ0555396720',
      source: [Object],
      type: 'image',
      url: 'https://cloudfront-ap-southeast-2.images.arcpublishing.com/sandbox.nzme/JZTWC24MYCXE324ZOBPFOPQAKE.jpg',
      version: '0.10.3',
      width: 1920
    }
  },
  related_content: { basic: [] },
  distributor: { category: 'staff', name: 'NZ Herald', subcategory: '' },
  canonical_website: 'nzh',
  planning: {
    additional_properties: {},
    internal_note: '9.30am embargo',
    scheduling: {
      planned_publish_date: '2022-11-02T16:55:24+13:00',
      will_have_gallery: false,
      will_have_image: false,
      will_have_video: false
    },
    story_length: { word_count_actual: 896 }
  },
  display_date: '2022-11-02T20:30:00Z',
  credits: { by: [ [Object] ], byline: [] },
  subtype: 'news',
  first_publish_date: '2022-11-02T20:30:00Z',
  websites: {
    nzh: {
      website_section: [Object],
      website_url: '/nz/devastating-fatal-plane-crash-at-masterton-aerodrome-prompts-major-safety-recommendations/4PYICIXPOUW5CID3QW3DRL4L54/'
    }
  },
  additional_properties: {
    adapter_source: 'NZME-Adapter',
    api_support: 'DraftAPI',
    has_published_copy: true,
    is_published: true,
    legacy_urls: { nzh: [Object] },
    rt: '7A879C1DEAD8CCC6D00B247E1412C99B',
    zen_status: 'published'
  },
  publish_date: '2022-11-02T20:30:00Z',
  slug: 'OJ-HO-PLANE-02',
  canonical_url: '/nz/devastating-fatal-plane-crash-at-masterton-aerodrome-prompts-major-safety-recommendations/4PYICIXPOUW5CID3QW3DRL4L54/',
  website: 'nzh',
  website_url: '/nz/devastating-fatal-plane-crash-at-masterton-aerodrome-prompts-major-safety-recommendations/4PYICIXPOUW5CID3QW3DRL4L54/'
}

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
  // const p = p_
  let text = p.content_elements
    .filter(({type}) => (type==='text'))
    .map(({content}) => (content))
    .join(" ");
  // const sum = await getSumAI_NLPCloud(text)
  const sum = '==temp=off=='
  // console.log('d256 p.content_elements:', p.content_elements)
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


