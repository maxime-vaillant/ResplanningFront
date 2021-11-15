import { useState } from 'react'
import config from '../../assets/resplanning-config-2.json'

const {
    onCallTimes,
    rulesByPerson,
    rulesBySlot,
    slots,
    slotCount,
    onCallTimeCount
} = config

const usePlanning = () => {
    const colors = ['blue', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'violet', 'purple', 'pink', 'brown']

    const [data, setData] = useState({
        slots: slots,
        people: [],
        onCallTimes: onCallTimes,
        rulesByPerson: rulesByPerson,
        rulesBySlot: rulesBySlot,
        planning: {},
        callback: {
            error: false,
            message: { status: null, statusMsg: null }
        },
        onCallTimeCount: onCallTimeCount,
        slotCount: slotCount,
        personCount: 0,
        loading: false,
        confirmOpen: false
    })

    return {
        data,
        setData,
        colors
    }
}

export default usePlanning