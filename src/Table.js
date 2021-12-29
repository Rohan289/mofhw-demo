import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { columnMapping } from './constants';

const Table = ({ tableData, headingColumns, title, breakOn = 'medium' }) => {
    const [myValues, setMyValues] = useState(tableData);
    useEffect(() => {
        setMyValues(tableData);
    },[tableData])
  let tableClass = 'table-container__table';

  if(breakOn === 'small') {
    tableClass += ' table-container__table--break-sm';
  }else if(breakOn === 'medium') {
    tableClass += ' table-container__table--break-md';
  }else if(breakOn === 'large') {
    tableClass += ' table-container__table--break-lg';
  }

  const data = myValues.map((row, index) => {
    let rowData = [];
    let i = 0;

    for(const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key]
      });
      i++;
    }
 

    const fetchData = (index,data) => {
        if(data.key ===("New Death Cases") || data.key == ("New Active Cases") || data.key == ("New Discharged Cases")) {
            if(parseInt(data.val) < 0) {
                return(
                    <>
                    <td style={{color : "red", fontWeight : "bold"}} key={index} data-heading={data.key}>{data.val}<i style={{color : "red"}} class="fa fa-arrow-down" aria-hidden="true"></i></td>
                    </>
                )
            }
            else {
                return(
                    <td style={{color : "green",fontWeight : "bold"}} key={index} data-heading={data.key}>{data.val}<i style={{color : "green"}} class="fa fa-arrow-down" aria-hidden="true"></i></td>
                )
            }
        }
        else {
        return(
            <td key={index} data-heading={data.key}>{data.val == "" ? "Total" : data.val}</td>
        )
        }
    }


    return <tr key={index}>
      {rowData.map((data, index) => fetchData(index,data))}
    </tr>
  });

  return(
    <div className="table-container">
      <div className="table-container__title">
        <h2>{title}</h2>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index}>{col == "Name of State" ? <div>{col}</div> : (<div>{col}<i onClick={(e) => {
                let sortByValue = columnMapping[col];
                axios.get(`${process.env.BACKEND_BASE_URL}/filtered_list_covid_state_wise?sort_by=${sortByValue}`).then(response => {
                   setMyValues(response.data);
                  })
              }} class="fa fa-sort-asc" aria-hidden="true"></i></div>)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  breakOn: PropTypes.oneOf(['small', 'medium', 'large']) 
}

export default Table;