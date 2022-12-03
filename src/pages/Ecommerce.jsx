import React from 'react';
import {BsCurrentDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {Stacked , Pie , Button , SparkLine} from '../components';
import {earningData , SparklineAreaData ,ecomPieChartData} from '../data/dummy';


const Ecommerce = () => {
  return (
      <div className='d-flex flex-column justify-content-center mt-3 mx-3' >

        <div  className='d-flex flex-column align-items-start justify-content-center ps-3 mb-3' style={{height:'270px',background: `url( ${ require('../components/1.jpg') } )`,backgroundPosition:'right 38%',backgroundSize:'cover',borderRadius:'20px'}}>
          <p className='text-muted fw-bold mb-0'>Earnings</p>
          <p className='fs-4'> $63,448.73</p>
          <Button color="white" title="download" background="blue" borderRadius='10px' />
        </div>

        <div className='d-flex align-items-center justify-content-around flex-wrap'>
          {earningData.map((ele)=>(
            <div className='p-3 mt-3' style={{boxShadow:'0px 0px 3px gray', width:'300px',background:'white'}} key={ele.title}>

              <p style={{background:ele.iconBg , fontSize:'25px',width:'fit-content',padding:'4px 15px 10px 15px',borderRadius:'50%',color:ele.iconColor}} > {ele.icon} </p>
              <span className='fw-bold me-2 fs-5'> {ele.amount}</span>
              <span style={{color:ele.pcColor}}>{ele.percentage}</span>
              <p className='text-muted mt-2 fs-5'>{ele.title}</p>

            </div>
          ))}
        </div>

        <div className='mt-5 pt-3' style={{background:'white'}}>

            <div className='d-flex justify-content-around align-items-center mt-2 flex-wrap'>
              <p className='text-muted fs-6 fw-bold mb-0'> Revenue Updates</p>
              <div>
              <span> <GoPrimitiveDot />  Expense </span>
              <span className='text-success ms-2'> <GoPrimitiveDot />  Budget </span>
              </div>
            </div>

            <div className='d-flex justify-content-around align-items-center mt-4 flex-wrap'>

              <div className='rightSyncCom mb-3'>

                <div className='mb-3'>
                  <span className='fw-bold fs-5 me-3'>$93,438</span>
                  <span className='text-light bg-success rounded-circle p-2' > 23%</span>
                  <p className='mb-0 text-muted'> Budget</p>
                </div>
                <div>
                  <span className='fw-bold fs-5 me-3'>$48,487</span>
                  <p className='mb-0 text-muted'> Expense</p>
                </div>
                <div className='mt-5'>
                  <SparkLine
                    id='line-sparkline'
                    width='250px'
                    height='80px'
                    type='Line'
                    color='blue'
                    currentColor='blue'
                    data={SparklineAreaData}
                  />
                </div>
                <div className='mt-5'>
                  <Button color="white" title="Dowload Report" background="blue" borderRadius='20px' />
                </div>

              </div>

              <div>
                <Stacked width='320px' height='360px' />
              </div>

            </div>

        </div>
      
      </div>
  )
}

export default Ecommerce;