import { useState } from 'react'
import { defaultData } from '../../assets/defaultData'

const usePlanning = () => {
    const colors = ['blue', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'violet', 'purple', 'pink', 'brown']

    const saved = localStorage.getItem("data")

    const [data, setData] = useState(saved !== null ? JSON.parse(saved) : defaultData)

    return {
        data,
        setData,
        colors
    }
}

export default usePlanning