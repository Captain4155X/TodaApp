import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from "../services/user";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onLogin = async() => {
        if(email.length === 0) {
            toast.warning("Please enter email")
        }
        else if(password.length === 0) {
            toast.warning("Please enter password")
        }
        else {
            const result = await login(email, password)
            if(result.status === "Success") {
                sessionStorage.setItem("token", result.data.token)
                toast.success("User logged in")
                navigate("/todo-item-list")
            }
            else {
                toast.warning(result.error)
            }
        }
    }

    return (
        <div>
            <h1 className="heading">Login</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="borders">
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control"
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control"
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            Don't have an account? <Link to='/register'>Register here</Link>
                        </div>
                        <button className="btn btn-success" onClick={onLogin}>Login</button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login