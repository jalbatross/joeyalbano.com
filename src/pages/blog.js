import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../styles/blog-listing.css';
export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {

        {/* Generate code for tags */}
        const tags = post.frontmatter.tags.map((tag, ind, arr) => <a href={`/tags/${tag}`} key={tag}>{tag}{ind === arr.length - 1 ? null : ', '}</a>);
        const subtitle = post.frontmatter.subtitle ? <h2>{post.frontmatter.subtitle}</h2> : null;
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              {subtitle}
              <h2>{post.frontmatter.date}</h2>
              <h5><Link to="/tags">Tags</Link>:  <div>{tags}</div></h5>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`;
