import { useState, useEffect } from "react";
import axios from 'axios';

export default () => {
    const [graph, setGraph] = useState([])
    async function useGraph() {
        try {
            const response = await axios.get("https://run.mocky.io/v3/3c610078-f6ed-4b50-90e9-bb0be72cb59d")
            setGraph(response.data)
        } catch (err) {
            console.log("something went wrong");
        }
    }
    useEffect(() => {
        useGraph()
    },[])
    return [graph]
}