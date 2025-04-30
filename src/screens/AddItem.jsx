import { useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from 'react-toastify';
import { addItem } from "../services/todo";
import { useNavigate } from "react-router-dom";

function AddItem() {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')         

    const navigate = useNavigate()

    const onAdd = async () => {
        if (title.length === 0) {
            toast.warning("Please enter a title")
        }
        else if (details.length === 0) {
            toast.warning("Please enter details")
        }
        else {
            const result = await addItem(title, details)
            if (result.status === "Success") {
                toast.success("Item added successfully")
                navigate("/my-items")
            }
            else {
                toast.error(result.error)
            }
        }
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <h3 className="heading">Create New Todo</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 borders">
                        <div className="mb-3">
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control"
                                onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Details</label>
                            <textarea type="text" rows="8" className="form-control"
                                onChange={e => setDetails(e.target.value)} />
                        </div>
                        <button className="btn btn-success"
                            onClick={() => onAdd(details, title)}>Add</button>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default AddItem