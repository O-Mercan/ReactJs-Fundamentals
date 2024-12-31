import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../authSlice";
import { useNavigate } from "react-router-dom";


// Login
const LoginForm = () => {
    // State
    const [username, setUsername] = useState(''); // correct definiton
    const [password, setPassword] = useState(''); // correct definition
    const dispatch = useDispatch();

    //Redirect
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Default: username: admin
        // Default: password: admin

        if (username === "admin" && password === "admin") {
            dispatch(login({ username }));
            // Redirect
            navigate("/index")
        } else {
            alert("Invalid username or incorrect password");
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
                            value={username}
                            className="form-control"
                            placeholder="User name"
                            onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit" className="btn btn-primary">Enter</button>
            </form>
        </div>
    );
};

// Export
export default LoginForm;
