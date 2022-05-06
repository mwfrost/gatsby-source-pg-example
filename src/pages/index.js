import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";


const IndexPage = ({ data }) => (
  <Layout>
    <p><a href="/___graphql">GraphQL IDE</a></p>
    <h1>Case List</h1>
    <ul>
      {data.postgres.enfcases.map(enfcase => (
        <li key={enfcase.enforceId}>
          {enfcase.enforceId}&nbsp;{enfcase.cpfNum}
          <em>{enfcase.operatorN}</em>
        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  {
    postgres {
      enfcases: allEnfcasesList {
        enforceId
        cpfNum
        operatorN
      }
    }
  }
`;

export default IndexPage;
