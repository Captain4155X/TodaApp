import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services/user";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const onRegister = async () => {
        if (firstName.length === 0) {
            toast.warning("Please enter first name");
        } else if (lastName.length === 0) {
            toast.warning("Please enter last name");
        } else if (email.length === 0) {
            toast.warning("Please enter email");
        } else if (phone.length === 0) {
            toast.warning("Please enter phone number");
        } else if (password.length === 0) {
            toast.warning("Please enter password");
        } else if (confirmPassword.length === 0) {
            toast.warning("Please enter confirm password");
        } else if (password !== confirmPassword) {
            toast.warning("Passsword does not match");
        } else {
            const result = await register(
                firstName,
                lastName,
                email,
                phone,
                password
            )
            if (result.status === "Success") {
                toast.success("User successfully registered");
                navigate("/login");
            } else {
                toast.error(result.error);
            }
        }
    };

    return (
        <div>
            <h1 className="heading">Register</h1>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 borders">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Fisrt Name</label>
                                <input type="text" className="form-control"
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className="form-control"
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control"
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Phone</label>
                                <input type="text" maxLength="10" className="form-control"
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" className="form-control"
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div>
                        Already have an account? <Link to="/login">Login here</Link>
                    </div>
                    <button className="btn btn-success mt-2" onClick={onRegister}>
                        Register
                    </button>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Register;
