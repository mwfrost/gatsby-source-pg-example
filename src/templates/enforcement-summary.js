import React from "react";
import Layout from "../components/layout";

const SummaryList = ({ pageContext: { casesByYearAndType }}) => {
  console.log(casesByYearAndType);
  return (
    <Layout>
      <div>
      <ul style={{ padding: 0 }}>
      {casesByYearAndType.map(row => (
        <li key={row.case_type + row.opened_yr}>
          <p>{row.case_type}</p>
        </li>
      ))}
    </ul>
      </div>
    </Layout>
  );
};

export default SummaryList;


