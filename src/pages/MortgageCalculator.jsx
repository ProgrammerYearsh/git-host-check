import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SeeAlso from '../components/SeeAlso'
import BaseConverterSection from '../components/BaseConverterSection'
import MortgageCalci from '../components/MortgageCalci'
import LoanPaymentBreakDown from '../PageSections/LoanPaymentBreakDown'
import RepaymentTable from '../PageSections/RepayementTable'
import Notepad from '../components/Notepad'
import CalcPageHeader from '../components/CalcPageHeader'
import MaintenancePage from './MaintenancePage'
import PageHeader from '../components/PageHeader'
import SlateNotepad from '../components/SlateNotepad/SlateNotepad'
import CalcInfoSection from '../components/CalcInfoSection'
import SidebarQuickNotes from '../components/SidebarQuickNotes'
import { useSearchParams } from 'react-router'
import ShareModal from '../components/ShareModal'
import { shareLinkBase } from '../config'

function MortgageCalculator() {
    //  ------------------------ Custom Year Entery ------------------------
    const [customYearDisplayStatus, setCustomYearDisplayStatus]=useState(false)
    const [ mortgageInputs , setMortgageInputs ]=useState({
      loanAmount: null,
      downPayment: null,
      loanTerm: null,
      interestRate: null
    })
    const [repaymentDetails, setRepaymentDetails]=useState({
      totalRepaymentAmount: null, 
      principalAmount : null, 
      totalInterestPaid: null,
      monthlyPayment: null, 
      totalMonths: null, 
      downPaymentMade: null
    })
  
    const [yearlyPaymentBreakdown, setYearlyPaymentBreakdown] = useState([])
    const [monthlyPaymentBreakdown, setMontlyPaymentBreakdown] = useState([])
    const [repaymentTableDisplayStatus, setRepaymentTableDisplayStatus]=useState(false)
    const [loadSharedInputs, setLoadSharedInputs]=useState(false); 
    const [shareModalDisplayStatus, setShareModalDisplayStatus]=useState(false)
    const initialShareLink ='Nothing to share, please perform some calculations to share'
    const [shareLink, setShareLink]=useState(initialShareLink)
    const [renderChartStatus, setRenderChartStatus]=useState(false)
    const rePaymentBreakdownRef = useRef(null);
    
    const [searchParams] = useSearchParams();

    let montlySchedule = [];
    let annualSchedule = []; 


    
  
      // <------------------------ Handling the Inputs  ------------------------>
      const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "Enter Custom") {
          setCustomYearDisplayStatus(true);
        } else {
          setCustomYearDisplayStatus(false);
          // const isNumber = (selectedValue) => !isNaN(+selectedValue);
          setMortgageInputs((prevState) => ({
            ...prevState,
            loanTerm: selectedValue // Replace `newLoanTerm` with the actual value you want to set
          }));
        }
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target; // Extract name and value from the input
    
        // Update the specific field in state
        setMortgageInputs((prevInputs) => ({
          ...prevInputs, // Spread the previous state
          [name]: value, // Update the specific field based on the name
        }));
      };
  
    //  ------------------------ Calculating the loan Repayment Breakdowns  ------------------------
   
    // <---------- Calculating Functions ----------> 

    // Calculating Monthly Payment 
    const calculateMonthlyPayment = (monthlyRate, loanAmount, totalMonths ) => {
      if (monthlyRate === 0) return loanAmount / totalMonths;
      return (
        loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      );
    };

    // Calculate Total Payment 
    const calculateTotalPayment = (monthlyPayment, totalMonths) => {
      return monthlyPayment * totalMonths;
    };

    // Calculate Total Interest Paid
    const calculateTotalInterest = (totalPayment, principalAmount) => {
      return totalPayment - principalAmount;
    };

    // <---------- Running Calculation Functions ----------> 

    const calculateRepaymentBreakDown = (loanAmount, monthlyRate, totalMonths, monthlyPayment) =>{
  
      let remainingBalance = loanAmount;
      let annualInterstPayment = 0;
      let annualPricipalPayment = 0; 

      for (let i = 1; i <= totalMonths; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;
    
        montlySchedule.push({
          month: i,
          principalPayment: principalPayment.toFixed(2),
          interestPayment: interestPayment.toFixed(2),
          remainingBalance: remainingBalance.toFixed(2),
        });
    
        annualInterstPayment += interestPayment; 
        annualPricipalPayment += principalPayment; 
      
    
      if (i % 12 === 0) {
          annualSchedule.push({
              year: i/12,
              annualPrincipalPayment: annualPricipalPayment.toFixed(2),
              annualInterstPayment: annualInterstPayment.toFixed(2),
              remainingBalance: remainingBalance.toFixed(2),
          });
          annualInterstPayment=0; 
          annualPricipalPayment=0; 
    
        } 
      } 
      setMontlyPaymentBreakdown(montlySchedule);
      setYearlyPaymentBreakdown(annualSchedule);
      // alert(`All entries are filled: ${JSON.stringify(monthlyPaymentBreakdown, null, 2)}`);
    }

    const calculateRepaymentAmount = (finalInputs) =>{
      // alert(`All entries are filled: ${JSON.stringify(finalInputs, null, 2)}`);
      const monthlyRate = finalInputs['interestRate'] / 100 / 12;
      const totalMonths = finalInputs['loanTerm'] * 12;
      const principalAmount = finalInputs['loanAmount']-finalInputs['downPayment']
      const monthlyPayment = calculateMonthlyPayment(monthlyRate, principalAmount,totalMonths ).toFixed(2)
      const totalRepaymentAmount = calculateTotalPayment(monthlyPayment, totalMonths ).toFixed(2)
      const totalInterestPaid = calculateTotalInterest(totalRepaymentAmount, principalAmount).toFixed(2)
      setRepaymentDetails(prevDetails => ({ ...prevDetails, totalRepaymentAmount: totalRepaymentAmount }));
      setRepaymentDetails(prevDetails => ({ ...prevDetails, principalAmount: principalAmount }));
      setRepaymentDetails(prevDetails => ({ ...prevDetails, totalInterestPaid: totalInterestPaid }));
      setRepaymentDetails(prevDetails => ({ ...prevDetails, monthlyPayment: monthlyPayment }));
      setRepaymentDetails(prevDetails => ({ ...prevDetails, totalMonths: totalMonths }));
      setRepaymentDetails(prevDetails => ({ ...prevDetails, downPaymentMade: finalInputs['downPayment'] }));
      calculateRepaymentBreakDown(principalAmount, monthlyRate, totalMonths, monthlyPayment)
    }

     // <------------------------ Share Func  ------------------------>
     const shareFunc = () =>{
       let newLink =`${shareLinkBase}/mortgage-calculator?share=${true}&type=mortgage-calculator&lAmt=${mortgageInputs['loanAmount']}&dp=${mortgageInputs['downPayment']}&dur=${mortgageInputs['loanTerm']}&int=${mortgageInputs['interestRate']}`
       setShareLink(newLink)
       window.history.pushState({}, '', newLink);
    }

    const scrollToRepaymentBreakdown = () => {
      rePaymentBreakdownRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    
     // <------------------------ Handling Button Click  ------------------------>
    const handleCalculateBtn = () => {
      const incompleteFields = Object.entries(mortgageInputs)
        .filter(([key, value]) => value === null || value === '')
        .map(([key]) => key); // Collect field names that are not filled
    
      if (incompleteFields.length > 0) {
        alert(`Please fill the following fields: ${incompleteFields.join(', ')}`);
      } else {
        // Proceed with your logic
        calculateRepaymentAmount(mortgageInputs)
        setRepaymentTableDisplayStatus(true)
        shareFunc()
        scrollToRepaymentBreakdown()
        setRenderChartStatus(!renderChartStatus)
        
      }
    };

    const modalDisplayFunc = () =>{
      setShareModalDisplayStatus(!shareModalDisplayStatus)
    }

      useEffect(() => {
        const share = searchParams.get('share');
        const lAmt = searchParams.get('lAmt');
        const dp = searchParams.get('dp');
        const dur = searchParams.get('dur');
        const int = searchParams.get('int');
        const type = searchParams.get('type'); 
        if(share && type === 'mortgage-calculator'){
          setMortgageInputs(() => ({
            loanAmount : Number(lAmt),
            downPayment: Number(dp),
            loanTerm: Number(dur),
            interestRate: Number(int)
          }));
          const loadedInputs = {
            loanAmount : Number(lAmt),
            downPayment: Number(dp),
            loanTerm: Number(dur),
            interestRate: Number(int)
          }
          setLoadSharedInputs(true)
          calculateRepaymentAmount(loadedInputs)
          setRepaymentTableDisplayStatus(true)
        }else{
          setLoadSharedInputs(true)
        }
      }, [])


  return (
    <div className="bg-white dark:bg-mattBlack  flex-col  ">
    <PageHeader/>
    <ShareModal
   shareLink={shareLink} 
   shareModalDisplayStatus={shareModalDisplayStatus} 
   modalDisplayFunc={modalDisplayFunc} 
   initialShareLink={initialShareLink}
    />

    <div className="pt-20 sm:pt-28 ">
    <div className="mx-auto flex flex-col  px-1 lg:px-6 md:px-3 sphn:px-2 max-w-6xl bg items-start justify-center gap-10 text-left">

    <CalcPageHeader
    nav1={'Finance'}
    nav2={'Mortgage Calculator'}
    calcName={'Mortgage Calculator'}
    calcDesc={'Our Mortgage Calculator simplifies loan calculations by providing accurate monthly interest figures.'}
    />

    <div className='   w-full gap-0 justify-start items-start grid grid-cols-5'>
      <div className=' col-span-5 sm:col-span-3 md:col-span-2 -mt-5'>  
          <MortgageCalci 
          modalDisplayFunc={modalDisplayFunc}
          handleSelectChange={handleSelectChange}
          handleInputChange={handleInputChange}
          handleCalculateBtn={handleCalculateBtn}
          customYearDisplayStatus={customYearDisplayStatus}
          initailValue={mortgageInputs}
          loadSharedInputs={loadSharedInputs}
          
          />
      </div>
      <div className=' col-span-5 sm:col-span-2 md:col-span-3 min-h-full '>
      <CalcInfoSection
              heading={'Understanding Mortgage Repayments '}
              para1={"1. Inputting Loan Details: You can enter key information such as the desired loan amount, the interest rate, the loan term (e.g., 15 years, 30 years), and the down payment amount."}
              para2={'2. Calculating Repayments: The calculator then processes this information and generates estimates for Monthly Payments, Yearly Payments, Total Interest Paid & more'}
              para3={''}
              />  
      </div> 
    </div>

        </div>
    </div>

    <LoanPaymentBreakDown   repaymentDetails={repaymentDetails} 
    scrollToRepaymentBreakdown={scrollToRepaymentBreakdown} 
    rePaymentBreakdownRef={rePaymentBreakdownRef}
    renderChartStatus={renderChartStatus}
    /> 
  
    <RepaymentTable repaymentTableDisplayStatus={repaymentTableDisplayStatus}  monthlyPaymentBreakdown={monthlyPaymentBreakdown} yearlyPaymentBreakdown={yearlyPaymentBreakdown} />
    <SeeAlso/>
    <Footer/>
    </div>
  )
}

export default MortgageCalculator