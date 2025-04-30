import Navbar from "../components/Navbar"
import { useEffect, useState } from 'react';
import { deleteItem, getMyItemList, makePrivate, makePublic } from "../services/todo";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function MyItemList() {
    const [items, setItems] = useState([])

    const onLoad = async () => {
        const result = await getMyItemList()
        if (result.status === 'Success') {
            setItems(result.data)
        }
        else {
            toast.error(result.error)
        }
    }

    useEffect(() => {
        onLoad()

        return () => {

        }
    }, [])

    const onToggle = async (id, isPublic) => {
        let result
        if (isPublic === 0) {
            result = await makePublic(id)
        }
        else {
            result = await makePrivate(id)
        }

        if (result.status === "Success") {
            toast.success("Status update successfull")
            onLoad()
        }
        else {
            toast.error(result.error)
        }
    }

    const onDelete = async (id) => {
        const result = await deleteItem(id)
        if (result.status === "Success") {
            toast.success("Item deleted successfully")
            onLoad()
        }
        else {
            toast.error(result.error)
        }
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <h3 className="heading">My Item Lists</h3>

                {items.length === 0 && (
                    <div >
                        <h5 style={{ textAlign: "center" }}>There are no items added by you</h5>
                        <div className="container mt-3" style={{ textAlign: "center" }} >
                            <Link to="/add-item" className="btn btn-success">Add Items</Link>
                        </div>
                    </div>
                )}

                {items.length > 0 && (
                    <table className="table table-info table-bordered" style={{ textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Details</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.details}</td>
                                        <td>{item.createdTimestamp}</td>
                                        <td>
                                            {item.isPublic === 0 && (
                                                <button className="btn btn-warning btn-sm"
                                                    onClick={() => onToggle(item.id, item.isPublic)}>
                                                    Make public
                                                </button>
                                            )}

                                            {item.isPublic === 1 && (
                                                <button className="btn btn-warning btn-sm"
                                                    onClick={() => onToggle(item.id, item.isPublic)}>
                                                    Make private
                                                </button>
                                            )}

                                            <button className="btn btn-danger btn-sm ms-2"
                                                onClick={() => onDelete(item.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default MyItemList