import axios from 'axios'
import { createURL } from './../utils';

export async function register(firstName, lastName, email, phone, password) {
    try {
        const url = createURL('user/register')
        const body = {
            firstName, 
            lastName,
            email, 
            phone,
            password
        }

        const resposnse = await axios.post(url, body)
        return resposnse.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function login(email, password) {
    try {
        const url = createURL("user/login")
        const body = {
            email,
            password
        }

        const resposnse = await axios.post(url, body)
        return resposnse.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function getProfile() {
    try {
        const url = createURL("user/profile")
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

export async function updateProfile(firstName, lastName, phone) {
    try {
        const url = createURL("user/profile")
        const token = sessionStorage.getItem("token")
        const body = {
            firstName,
            lastName,
            phone
        }

        const resposnse = await axios.put(url, body, {
            headers: {
                token
            }
        })
        return resposnse.data
    }
    catch(e) {
        return {status: "Error", error: e}
    }
}

export async function updatePassword(password) {
    try {
        const url = createURL("user/password")
        const token = sessionStorage.getItem("token")
        const body = {password}
        
        const response = await axios.patch(url, body, {
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