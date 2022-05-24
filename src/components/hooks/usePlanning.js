import { useState } from 'react'
import config from '../../assets/resplanning-config.json'

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

    const initialData = {
        slots: slots,
        people: [
            {key: 0, text: 'Personne'},
            {key: 1, text: 'Personne'},
            {key: 2, text: 'Personne'},
            {key: 3, text: 'Personne'},
            {key: 4, text: 'Personne'},
            {key: 5, text: 'Personne'},
            {key: 6, text: 'Personne'},
            {key: 7, text: 'Personne'},
            {key: 8, text: 'Personne'},
            {key: 9, text: 'Personne'}
        ],
        onCallTimes: onCallTimes,
        rulesByPerson: rulesByPerson,
        rulesBySlot: rulesBySlot,
        planning: {
            0: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            1: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            2: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            3: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            4: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            5: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            6: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            7: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            8: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null},
            9: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null}
        },
        callback: {
            error: false,
            message: { status: null, statusMsg: null }
        },
        onCallTimeCount: onCallTimeCount,
        slotCount: slotCount,
        personCount: 10,
        loading: false,
        confirmOpen: false
    }

    const [data, setData] = useState(initialData)

    return {
        data,
        setData,
        colors
    }
}

export default usePlanning