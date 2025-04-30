import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from './screens/Register';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TodoItemList from "./screens/TodoItemList";
import MyItemList from './screens/MyItemList';
import AddItem from "./screens/AddItem";
import Profile from './screens/Profile';
import UpdatePassword from './screens/UpdatePassword';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/todo-item-list" element={<TodoItemList />} />
                <Route path="/my-items" element={<MyItemList />} />
                <Route path="/add-item" element={<AddItem />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/update-password" element={<UpdatePassword />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
