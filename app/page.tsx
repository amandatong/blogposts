'use client'

import { Card } from "@canonical/react-components";
import { useEffect, useState } from "react";
import { BlogPost } from "./types";
import Link from "next/link";

const WP_API_URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch(WP_API_URL).then(response => {
      return response.json()
    })
      .then((response: BlogPost[]) => {
        setBlogPosts(response);
      });

  });

  return (
    <main>
      {blogPosts.map((blogPost: BlogPost) => {
        const timestamp = new Date(blogPost.date).toLocaleDateString(
          'en-GB',
          { month: 'long', day: 'numeric', year: 'numeric' }
        );

        return (
          <Card>
            <div className="header">cloud and server</div>
            <div className="body">
              <Link href={blogPost.link}>
                <img src={blogPost.featured_media} />
                <h3>{blogPost.title.rendered}</h3></Link>
              <i>
                By&nbsp;
                <Link href={blogPost._embedded.author[0].link}>
                  {blogPost._embedded.author[0].name}
                </Link>
                &nbsp;on {timestamp}
              </i>
            </div>
            <div className="footer">Article</div>
          </Card>
        )
      })}
    </main>
  )
}
