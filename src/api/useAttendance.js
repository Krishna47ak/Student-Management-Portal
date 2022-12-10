import { useState, useEffect } from "react";
import axios from 'axios';

export default () => {
    const [attendence, setAttendence] = useState([])
    async function useResults() {
        try {
            const response = await axios.get("https://run.mocky.io/v3/9de62c67-95f8-49c6-bbf4-9cd9d6e6eba0")
            setAttendence(response.data)
        } catch (err) {
            console.log("something went wrong");
        }
    }
    useEffect(() => {
        useResults()
    },[])
    return [attendence]
}