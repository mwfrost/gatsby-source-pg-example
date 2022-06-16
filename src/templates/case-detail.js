import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Case = ({ data }) => {
  const { scCase } = data.postgres;
  return (
    <Layout>
      <div>
        <h1>{scCase.cpfNum}</h1>
        <p>{scCase.operatorN} </p>
        <p>{scCase.openedDt} </p>
        <p>{scCase.caseStatu} </p>
        <p>{scCase.caseType} </p>
      </div>
    </Layout>
  );
};

export default Case;

export const query = graphql`
  query ($enforceId: Float!) {
    postgres {
      scCase: scCaseByEnforceId(enforceId: $enforceId) {
        caseType
        caseStatu
        openedDt
        closedDt
        operatorN
        regionNam
        cpfNum
        enforceId
      }
    }
  }
`;
