import { toast } from "react-toastify";
import Navbar from "../components/Navbar"
import { useState } from 'react';
import {updatePassword } from "../services/user";

function UpdatePassword() {

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onPasswordUpdate = async () => {
        if (newPassword.length === 0) {
            toast.warning("Please enter new password")
        }
        else if (confirmPassword.length === 0) {
            toast.warning("Please enter confirm password")
        }
        else if (newPassword !== confirmPassword) {
            toast.warning("Passwords do not match")
        }
        else {
            const result = await updatePassword(newPassword)
            if (result.status === "Success") {
                toast.success("Password updated successfully")
            }
            else {
                toast.error("Error while updating password")
            }
        }
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <h3 className="heading">Update Password</h3>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 borders">
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="">New Password</label>
                                <input type="password" className="form-control" placeholder="Enter new password"
                                    onChange={(e) => setNewPassword(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="confirm password"
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <button className="btn btn-success mt-3"
                            onClick={onPasswordUpdate}>Update Password</button>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword