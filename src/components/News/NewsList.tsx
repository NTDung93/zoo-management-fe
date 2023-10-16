import { NewsObj } from "../../models/news";
import New from "./New";

interface Props {
  listnews: NewsObj[];
}

export default function NewsList({ listnews }: Props) {
  return (
    <>
      {listnews.map((curNews) => (
        <New key={curNews.newsId} news={curNews} />
      ))}
    </>
  );
}
