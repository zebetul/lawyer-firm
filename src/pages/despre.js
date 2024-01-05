import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Despre = ({ data }) => {
  const { html } = data.allMarkdownRemark.nodes[0];
  const { contact } = data.site.siteMetadata;

  console.log(data);

  console.log(html);
  console.log(contact);

  return (
    <Layout>
      <h1>Despre</h1>
    </Layout>
  );
};

export default Despre;

// Export page query
export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        html
      }
    }
    site {
      siteMetadata {
        contact {
          email
          phone
        }
      }
    }
  }
`;
