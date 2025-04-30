import axios from 'axios';
import { createURL } from './../utils';

export async function getTodoItemList() {
    try {
        const url = createURL("todo/public")
        const token = sessionStorage.getItem("token")

        const response = await axios.get(url, {
            headers: {
                token
            }
        })

        return response.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function getMyItemList() {
    try {
        const url = createURL("todo/my")
        const token = sessionStorage.getItem("token")

        const response = await axios.get(url, {
            headers: {
                token
            }
        })

        return response.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function makePublic(id) {
    try {
        const url = createURL("todo/makePublic/" + id)
        const token = sessionStorage.getItem("token")

        const response = await axios.patch(url, {}, {
            headers: {
                token
            } 
        })
        return response.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function makePrivate(id) {
    try {
        const url = createURL("todo/makePrivate/" + id)
        const token = sessionStorage.getItem("token")

        const response = await axios.patch(url, {}, {
            headers: {
                token
            } 
        })
        return response.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function deleteItem(id) {
    try {
        const url = createURL("todo/delete/" + id)
        const token = sessionStorage.getItem("token")

        const response = await axios.delete(url, {
            headers: {
                token
            } 
        })
        return response.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
} 

export async function addItem(title, details) {
    try {
        const url = createURL("todo/")
        const token = sessionStorage.getItem("token")
        const body = {
            title,
            details
        }

        const response = await axios.post(url, body, {
            headers: {
                token
            }
        })
        return response.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}