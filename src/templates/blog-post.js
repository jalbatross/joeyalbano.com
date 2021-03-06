import React from "react";
import Helmet from "react-helmet";
import '../styles/blog-post-code-formatting.css'

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div className="blog-post-container">
     <Helmet title={`Jlife - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <h2>Tags: {post.frontmatter.tags.map((x, index, arr)=> index !== arr.length - 1 ? x+', ' : x)}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
;
