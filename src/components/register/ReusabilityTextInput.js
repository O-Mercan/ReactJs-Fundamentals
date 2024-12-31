/*

    <div className="form-group mb-4">
        <label htmlFor="email">Email:</label>
        <input 
            type="email" 
            name="email" 
            id="email"
            className='form-control'

            onChange={handleChange}
            value={formData.email}
        />
        {errors.email && <p style={{color:'red'}}> {errors.email} </p>}
    </div>

*/

import React from 'react'

const ReusabilityTextInput = ({label, type, className, name, value, onChange, error}) =>  {
  return (
    <div className="form-group mb-4">
        <label>{label}</label>
        <input 
            type={type} 
            name={name}
            className={className}
            value={value}
            onChange={onChange}
        />
        {error && <p style={{color:'red'}}> {error} </p>}
    </div>
  )
}

// Export
export default ReusabilityTextInput
