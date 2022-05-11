import * as React from 'react'
import {ColumnWrapper} from "../components/Grid"
import {Link} from "gatsby";

const Sidebar = ( children ) => {
  return (
    <ColumnWrapper style={{ gridColumn: "span 2"}}>
        <h2>Sidebar Header</h2>
        <ul>
            <li>
                <a href="#summary1">Summary of Enforcement Activity - Nationwide</a>
            </li>
        </ul>
        <h4>Summary of Enforcement Actions</h4>
        <ul>
            <li>
                <a href="#summary2">Enforcement Cases Initiated</a>
            </li>
            <li>
                <a href="#summary3">Enforcement Orders Issued</a>
            </li>
        </ul>
        <li>
        <Link to="#caselist">Case List</Link>
        </li>
    </ColumnWrapper>

  )
}

export default Sidebar