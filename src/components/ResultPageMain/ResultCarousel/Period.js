import React from 'react'
const Period = ({date, risk, total, ...rest}) => {
    const dateObj = new Date(date)
    const customDate =`${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`
    return (
    <div className='periodItemCss' {...rest}>
      <div>{customDate}</div>
      <div>{total}</div>
      <div>{risk}</div>
    </div>
  )
}

export default Period
