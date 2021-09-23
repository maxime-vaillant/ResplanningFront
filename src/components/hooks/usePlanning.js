import { useState } from 'react'
import {onCallTimes, rulesByPerson, rulesBySlot, slots} from "../../assets/Pic";

const usePlanning = () => {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown']

    const [data, setData] = useState({
        slots: slots,
        people: [],
        onCallTimes: onCallTimes,
        rulesByPerson: rulesByPerson,
        rulesBySlot: rulesBySlot,
        planning: {},
        callback: {
            error: false,
            message: ''
        },
        onCallTimeCount: onCallTimes.length,
        slotCount: slots.length,
        personCount: 0
    })

    return {
        data,
        setData,
        colors
    }
}

export default usePlanning