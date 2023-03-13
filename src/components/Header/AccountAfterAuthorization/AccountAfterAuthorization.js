import React, { useEffect } from 'react';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Avatar from './Avatar/Avatar';
import LoaderInfo from './LoaderInfo/LoaderInfo';
import './AccountAfterAuthorization.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyInfo } from '../../../store/slices/profile';
const AccountAfterAuthorization = () => {
const dispatch = useDispatch();
const companyInfo = useSelector(state => state.profile.companyInfo)
useEffect(()=>{
  dispatch(getCompanyInfo())
},[companyInfo , dispatch]) 
return (
    <div className='accountPanel'>      
      {companyInfo ? <CompanyInfo /> : <LoaderInfo />}
      <Avatar />
    </div>
  )
}

export default AccountAfterAuthorization
