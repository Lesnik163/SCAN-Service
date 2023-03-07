import React from 'react'
import { useSelector } from 'react-redux';
import './CompanyInfo.css';
const CompanyInfo = () => {
  const usedCompany = useSelector(state => state.profile.companyInfo[0]);
  console.log(usedCompany)
  const companyLimit = useSelector(state => state.profile.companyInfo[1]);
  console.log(companyLimit)
  return (
    <div className='companyBox'>
      <div >
        <span className='companyBox__usedCompany'>Использовано компаний</span>
        <span className='companyBox__black'>35</span>
      </div>
      <div>
        <span className='companyBox__usedCompany'>Лимит по компаниям</span>
        <span className='companyBox__green'>44</span>
      </div>
    </div>
  )
}

export default CompanyInfo
