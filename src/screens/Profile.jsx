import Navbar from "../components/Navbar"
import { useEffect, useState } from 'react';
import { getProfile, updateProfile } from "../services/user";
import { toast } from 'react-toastify';

function Profile() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onLoad = async () => {
        const result = await getProfile()
        if (result.status === "Success") {
            setFirstName(result.data.firstName)
            setLastName(result.data.lastName)
            setEmail(result.data.email)
            setPhone(result.data.phone)
        }
        else {
            console.log("hi")
            toast.error("Profile loading failed")
        }
    }

    useEffect(() => {
        onLoad()

        return () => {

        }
    }, [])

    const onUpdate = async () => {
        if (firstName.length === 0) {
            toast.warning("Please enter first name")
        }
        else if (lastName.length === 0) {
            toast.warning("Please enter last name")
        }
        else if (phone.length === 0) {
            toast.warning("Please enter phone number")
        }
        else {
            const result = await updateProfile(firstName, lastName, phone)
            if (result.status === "Success") {
                toast.success("Profile updated successfully")
                onLoad()
            }
            else {
                toast.error("Profile update failed")
            }
        }
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <h3 className="heading">My Profile</h3>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 borders">
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="">First Name</label>
                                <input type="text" className="form-control" value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className="form-control" value={lastName} 
                                onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" value={email} readOnly 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Phone</label>
                                <input type="text" className="form-control" value={phone} 
                                onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                        <button className="btn btn-success mt-3"
                            onClick={onUpdate}>Update Profile</button>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile