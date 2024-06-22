import React from 'react'
import success from '../images/tick-green-icon.svg'
import failure from '../images/red-x-line-icon.svg'
function FinalView({ correctval, missingcount }) {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12' style={{ textAlign: 'center' }}>
          {missingcount > 0 ? <img width={250} height={250} src={failure} /> : <img width={250} height={250} src={success} />}
          <h2>Data imported Succesfull </h2>
        </div>



        <div className='col-md-12'>
          <h3 style={{ color: '#3493cd' }}> Employee Detail </h3>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <h6>
                  Employee Detail
                </h6>
              </div>
              <div className='row'>
                <h6>
                  Total No of Records : {correctval + missingcount}
                </h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <h6 style={{ color: '#3493cd' }}>
                  Success : {correctval}
                </h6>
              </div>
              <div className='row'>
                <h6 style={{ color: '#e35b5b' }}>
                  Failure : {missingcount}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalView