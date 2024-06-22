import React from 'react'
import '../style.css'
import FinalView from './FinalView'



function Table({ data }) {
    let correctval = 0;
    let missingcount = 0;

    const strcheck = (data, type) => {
        if (data) {
            if (typeof data === type) {
                return data
            } else {
                return <span className="datamissing">incorrect data</span>
            }
        } else {
            console.log("else ", data)
            return <span className="datamissing">missing data</span>
        }
    }
    const intcheck = (data) => {
        if (data) {
            if (Number.isInteger(parseInt(data))) {
                return data
            } else {
                return <span className="datamissing">incorrect data</span>
            }
        } else {

            return <span className="datamissing">missing data</span>
        }
    }
    console.log("111 tab ", data)
    const renderTable = data.map((row, index) => {
        if (row.UserName || row.Firstname || row.Lastname || row.Age) {
            if (row.UserName && row.Firstname && row.Lastname && row.Age) {
                correctval++
            } else {
                missingcount++
            }
            return (

                <tr key={index}>
                    <td>{strcheck(row.UserName, 'string')}</td>
                    <td>{strcheck(row.Firstname, 'string')}</td>
                    <td>{strcheck(row.Lastname, 'string')}</td>
                    <td>{intcheck(row.Age)}</td>

                </tr>

            )
        }
    })

    return (
        <div><nav></nav>
            <h3>My users</h3>
            <div className='searchBar'></div>
            <div>

                <table>
                    {correctval || missingcount > 1 ?
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        : <h1>incorrect data format</h1>}
                    <tbody>
                        {renderTable}
                    </tbody>
                </table>
            </div>
            <p>{correctval}:{missingcount}</p>
            {correctval || missingcount > 1 ? <FinalView correctval={correctval}
                missingcount={missingcount} /> : null}
        </div>
    )
}

export default Table