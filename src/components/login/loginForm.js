import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../authSlice";
import { useNavigate, Link } from "react-router-dom";


// Login
const LoginForm = () => {
    // State
    const [email, setEmail] = useState(''); // correct definiton
    const [password, setPassword] = useState(''); // correct definition
    const dispatch = useDispatch();

    // Users
    const[users, setUsers]= useState([]);
    const[findUser, setFindUser] = useState(null);

    //Redirect
    const navigate= useNavigate();

    // UseEffect
    useEffect(() => {
        fetch('https://67894cf72c874e66b7d85403.mockapi.io/api/v1/blog/react-project')
        .then((response)=> response.json())
        .then((data)=> setUsers(data))
        .catch((err)=> {console.error(err)})
    },[])

    // Find
    const searchUser= ()=> {
       const user= users.find((u)=> u.email.toLowerCase() === email.toLowerCase());
       setFindUser(user);
       return findUser;
    } 

    // HandleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Default: email: admin
        // Default: password: admin

        // if (username === "admin" && password === "admin") {
        //     dispatch(login({ username }));
        //     // Redirect
        //     navigate("/index")
        // } else {
        //     alert("Invalid username or incorrect password");
        // }

        if (email === findUser.email && password === findUser.password) {
            dispatch(login({ email }));
            // Redirect
            navigate("/index")
        } else {
            alert("Invalid email or incorrect password");
        }
    };

    // return
    return (
        <div className="shadow p-2">
        <h1 className="h1.text-center display-3 text-primary mt-4}">Login</h1>
        <diV></diV>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Username</label>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input
                            type="text"
                            value={email}
                            className="form-control"
                            placeholder="User name"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label>Password</label>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            className="form-control"
                            placeholder="User Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button type="rser" className="btn btn-danger m-2">Reset</button>
                <button type="submit" className="btn btn-primary" onClick={searchUser}>Log in</button>
                <Link className="btn btn-info text-white ms-2" to="/register">Sign Up</Link>
            </form>
        </div>
    );
};

// Export
export default LoginForm;
