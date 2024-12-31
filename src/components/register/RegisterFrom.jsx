import React, { useState } from 'react'

function RegisterFrom() {

    // state
    // Form State
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    // Loading State
    const[loading,setLoading]=useState(false);

    // Error
    const[errors,setErrors]=useState({});

    // OnChange All
    const handleChange=(e)=>{
        const {name, value} = e.target;

        setFormData({
            ...FormData,
            [name]:value
        });
    }

    // Validation
    const validate=()=>{
        let tempErrors={};
        let isValid=true;

        // Username
        if(formData.username.trim().length<3){
            tempErrors.username="Username must be at least 3 character";
            isValid=false;
        }

        // Password
        if(formData.password.length<6){
            tempErrors.password="password must be at least 6 character";
            isValid=false;
        }

        // Re-password
        if(formData.password != formData.confirmPassword){
            tempErrors.confirmPassword="Password is not the same";
            isValid=false;
        }

        // Mail
        if(formData.email.trim().length<6){
            tempErrors.email="email must be at least 6 character";
            isValid=false;
        }


        const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if(emailPattern.test(formData.email)){
            tempErrors.email="email is not correct";
            isValid=false;
        }

        setErrors(tempErrors);
        return isValid;

    }
    // Submit
    const handleSubmit= async (e)=>{
        e.preventDefault();

        // Loading start working
        setLoading(true)

        //validate
        if(validate()){
            // Loading working
            setLoading(false)
            alert("Registered")
            // Form submission logic here
            console.log(formData)
        }
    }

    // Return
  return (
    <>
    <h1 className="text-center text-uppercase display-4 text-primary mt-4 mb-4"></h1>
    
    <div>
      <h1 className='text-center display-4 text-primary text-uppercase'>Register</h1>
      <form onSubmit={handleSubmit}>

        {/* // USERNAME */}
        <div className="form-group mb-4">
            <label htmlFor="username">User name:</label>
            <input 
            type="text" 
            name="username" 
            id="username"
            className='form-control'
            onChange={handleChange}
            value={formData.username}
            />
            {errors.username && <p style={{color:'red'}}> {errors.username} </p>}

        </div>

        {/* // EMAIL */}
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

        {/* // PASSWORd */}
        <div className="form-group mb-4">
            <label htmlFor="re_password">RePassword:</label>
            <input 
            type="password" 
            name="re_password" 
            id="re_password"
            className='form-control'
            onChange={handleChange}
            value={formData.confirmPassword}
            />
            {errors.password && <p style={{color:'red'}}> {errors.password} </p>}
        </div>

        {/* // REPASSWORd */}
        <div className="form-group mb-4">
            <label htmlFor="password">Email:</label>
            <input 
            type="password" 
            name="confirmPassword" 
            id="re_password"
            className='form-control'

            onChange={handleChange}
            value={formData.confirmPassword}
            />
            {errors.confirmPassword && <p style={{color:'red'}}> {errors.confirmPassword} </p>}
        </div>

        <button className="btn btn-danger">Clear</button>
        <button 
        type="submit"
        disabled={false}
        className="btn btn-primary">
            {(loading)&&
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
            }

                Register
        </button>

      </form>
    </div>
    </>
  )
}

// Export
export default RegisterFrom