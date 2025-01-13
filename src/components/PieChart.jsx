import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto';

function PieChart({repaymentDetails, renderChartStatus}) {
  const [initialData , setInitialData]=useState([0,100,0])
  const chartRef = useRef(null); 
  const canvasRef = useRef(null);
  
    useEffect(() => {
      let dataArr=[]
      repaymentDetails['principalAmount']===null ? dataArr=[0,100,0] :
      dataArr=[ repaymentDetails['principalAmount'], repaymentDetails['totalInterestPaid'],repaymentDetails['downPaymentMade'] ]
    
      

      const data = {
        labels: [
          'Principal Repayment',
          'Total Interest',
          'Down Payment'
        ],
        datasets: [{
          label: 'Loan Repayment',
          data: dataArr,
          backgroundColor: [
            '#1F1F1F',
            '#BBFE69',
            '#E3E4E9'
          ],
          hoverOffset: 4
        }]
      };

        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext("2d");
        chartRef.current = new Chart(ctx, {
          type: "doughnut",
          data: data,
        });
        
        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
    
    }, [renderChartStatus])
    



  return (
    <canvas ref={canvasRef} ></canvas>
  )
}

export default PieChart