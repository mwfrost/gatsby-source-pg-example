import * as React from 'react'
import {ColumnWrapper} from "../components/Grid"
import {Link} from "gatsby";

const Sidebar = ( children ) => {
  return (
    <ColumnWrapper style={{ gridColumn: "span 2"}}>
        <h2>Postgres queries</h2>
        <ul>
            <li>
            <Link to="#example1">Cases by Region</Link>
            </li>
            <li>
            <Link to="#example2">National Summary</Link>
            </li>
            <li>
            <Link to="#caselist">Case List</Link>
            </li>
        </ul>

    </ColumnWrapper>

  )
}

export default Sidebar