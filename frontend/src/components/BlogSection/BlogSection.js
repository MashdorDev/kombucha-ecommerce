// BlogSection.js
import React from "react";

function BlogSection() {
  return (
    <section className="blog">
    <h2>From the Narrow Gate Blog</h2>
    <div className="blog-posts">
      <div className="blog-post">
        <h3>Post Title</h3>
        <p>Post Excerpt</p>
        <a href="/blog/post-title">Read More</a>
      </div>
      <div className="blog-post">
        <h3>Post Title</h3>
        <p>Post Excerpt</p>
        <a href="/blog/post-title">Read More</a>
      </div>
      <div className="blog-post">
        <h3>Post Title</h3>
        <p>Post Excerpt</p>
        <a href="/blog/post-title">Read More</a>
      </div>
    </div>
  </section>
  );
}

export default BlogSection;
