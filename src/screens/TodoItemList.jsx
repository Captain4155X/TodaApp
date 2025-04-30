import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import { getTodoItemList } from "../services/todo";
import { toast } from 'react-toastify';


function TodoItemList() {

    const [items, setItems] = useState([])

    const onLoad = async () => {
        const result = await getTodoItemList()
        if (result.status === "Success") {
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

    return (
        <div>
            <Navbar />
            <div className="container">
                <h3 className="heading">Todo Item List</h3>
                <table className="table table-info table-bordered" style={{ textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Details</th>
                            <th>Date</th>
                            <th>Owner</th>
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
                                    <td>{item.firstName} {item.lastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoItemList