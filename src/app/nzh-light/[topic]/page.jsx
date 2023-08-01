import {ArticleListUi} from "@/app/nzh-light/_components/ArticleListUi";
import {initTopics} from "@/app/nzh-light/_components/mock-data";
export default function ArticleListByTopic({params:{topic:topicName}}) {
  let title = initTopics.find((it) => it.href === topicName).name
  return (
    <div data-ui={'ArticleListByTopic'}>
      <h1 className="text-3xl mb-3 dark:text-gray-200">{title}</h1>
      <ArticleListUi topic={topicName}/>
    </div>
    )
}
