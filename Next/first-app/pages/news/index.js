// our-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-important">nextjs is important</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
