import { useRouter } from "next/router";

// our-domain.com/news/important-news

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend API
  //to fetch the news item with newsId

  return <h1>Details Page</h1>;
}

export default DetailPage;
