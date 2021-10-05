import axios from "axios";

export const addSlot = (data, setData) => {
    data.slots = [...data.slots, {key: data.slotCount, text: '00h00'}]
    data.people.forEach(({ key }) =>
        data.planning[key][data.slotCount] = null
    )
    data.slotCount += 1
    setData({...data})
}

export const addPerson = (data, setData) => {
    data.people = [...data.people, {key: data.personCount, text: 'Personne'}]
    data.planning[data.personCount] = {}
    data.slots.forEach(slot => {
        data.planning[data.personCount][slot.key] = null
    })
    data.personCount += 1
    setData({...data})
}

export const addOnCallTimes = (data, setData) => {
    data.onCallTimes = [...data.onCallTimes, {key: data.onCallTimeCount, text: 'Perm', value: data.onCallTimeCount}]
    data.onCallTimeCount += 1
    setData({...data})
}

export const removeSlot = (data, setData, slotId) => {
    data.slots = data.slots.filter(e  => e.key !== slotId)
    data.people.forEach(person =>
        delete data.planning[person.key][slotId]
    )
    data.rulesBySlot.forEach(item =>
        item.slots = item.slots.filter(e => e !== slotId)
    )
    data.rulesByPerson.forEach(item =>
        item.people = item.people.filter(e => e !== slotId)
    )
    setData({...data})
}

export const removePerson = (data, setData, personId) => {
    data.people = data.people.filter(e => e.key !== personId)
    delete data.planning[personId]
    data.rulesBySlot.forEach(item =>
        item.slots = item.slots.filter(e => e !== personId)
    )
    data.rulesByPerson.forEach(item =>
        item.people = item.people.filter(e => e !== personId)
    )
    setData({...data})
}

export const removeAllPeople = (data, setData) => {
    const { people } = data
    people.forEach(({ key }) => {
        removePerson(data, setData, key)
    })
}

export const removeOnCallTime = (data, setData, onCallTimeId) => {
    data.onCallTimes = data.onCallTimes.filter(e => e.key !== onCallTimeId)
    data.people.forEach(person  => {
        data.slots.forEach(slot  => {
            if (slot.key in data.planning[person.key] && data.planning[person.key][slot.key] === onCallTimeId){
                data.planning[person.key][slot.key] = null
            }
        })
    })
    setData({...data})
}

export const removeRule = (rule, data, setData, index) => {
    if (rule === 'slot'){
        data.rulesBySlot = data.rulesBySlot.filter((e, i) => i !== index)
    } else if  (rule === 'person'){
        data.rulesByPerson = data.rulesByPerson.filter((e, i) => i !== index)
    }
    setData({ ...data })
}

export const removeAllSlots = (data, setData) => {
    const { slots } = data
    slots.forEach(({ key }) => {
        removeSlot(data, setData, key)
    })
}

export const updateSlots = (data, setData, newSlot, slotId) => {
    data.slots.find(e => e.key === slotId).text = newSlot
    setData({...data})
}

export const updatePeople = (data, setData, newPerson, personId) => {
    data.people.find(e => e.key === personId).text = newPerson.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    setData({...data})
}

export const updateOnCallTimes = (data, setData, newOnCallTime, onCallTimeId) => {
    data.onCallTimes.find(e => e.key === onCallTimeId).text = newOnCallTime
    setData({...data})
}

export const handleChangeOnAvailabilities = (data, setData, personId, slotId) => {
    if (slotId in data.planning[personId]){
        delete data.planning[personId][slotId]
    } else {
        data.planning[personId][slotId] = null
    }
    setData({...data})
}

export const handleChangeOnPlanning = (data, setData, value, personId, slotId) => {
    data.planning[personId][slotId] = value !== '' ? data.onCallTimes.find(e => e.value === value).key : null
    setData({...data})
}

export const getOnCallTimeValue = (data,  personId, slotId) => {
    let key = null
    if (slotId in data.planning[personId]){
        key = data.planning[personId][slotId]
    }
    if (key !== null) {
        const onCallTime = data.onCallTimes.find(e => e.key === key)
        if (onCallTime) {
            return onCallTime.value
        }
    }
    return null
}

export const getCsvData = (data) => {
    const csvData = [['Personnes']]
    data.slots.forEach(slot => {
        csvData[0].push(slot.text)
    })
    data.people.forEach(person => {
        const csvRow = [data.people.find(e => e.key === person.key).text]
        data.slots.forEach(slot => {
            let key = null
            if (slot.key in data.planning[person.key]){
                key = data.planning[person.key][slot.key]
            }
            csvRow.push(key !== null ? data.onCallTimes.find(e => e.key === key).text : null)
        })
        csvData.push(csvRow)
    })
    return csvData
}

export const resetData = (data, setData) => {
    data = {
        slots: [],
        people: [],
        onCallTimes: [],
        rulesByPerson: [],
        rulesBySlot: [],
        planning: {},
        callback: {
            error: false,
            message: { status: null, statusMsg: null }
        },
        onCallTimeCount: 0,
        slotCount: 0,
        personCount: 0,
        loading: false,
        confirmOpen: false
    }
    setData({...data})
}

export const resetPlanning = (data, setData) => {
    data.people.forEach(person => {
        data.slots.forEach(slot => {
            if (slot.key in data.planning[person.key]){
                data.planning[person.key][slot.key] = null
            }
        })
    })
    setData({...data})
}

const getIdsToSend = (array) => {
    const arrayTmp = []
    array.forEach(e => arrayTmp.push(e.key))
    return arrayTmp
}

export const importCsv = async (data,setData, file, setIsImportOpen) => {
    data.loading = true
    setData({...data})
    if (file !== null) {
        const reqData = new FormData()
        reqData.append('file', file)
        const config = {
            method: 'POST',
            // url: 'https://resplanning-back.herokuapp.com/generate/',
            url: 'http://localhost:8000/parse-csv/',
            data : reqData
        }
        await axios(config)
            .then(function (response) {
                removeAllPeople(data, setData)
                removeAllSlots(data, setData)
                data.people = JSON.parse(JSON.stringify(response.data.people))
                data.slots = JSON.parse(JSON.stringify(response.data.slots))
                data.planning = JSON.parse(JSON.stringify(response.data.planning))
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    setIsImportOpen(false)
    data.loading = false
    setData({...data})
}

export const generatePlanning = async (data, setData) => {
    data.loading = true
    setData({...data})
    const reqData = JSON.stringify({
        "planning": data.planning,
        "on_call_times": getIdsToSend(data.onCallTimes),
        "slots": getIdsToSend(data.slots),
        "people": getIdsToSend(data.people),
        "rules_by_person": data.rulesByPerson,
        "rules_by_slot": data.rulesBySlot
    })
    const config = {
        method: 'POST',
        url: 'https://resplanning-back.herokuapp.com/generate/',
        // url: 'http://localhost:8000/generate/',
        headers: {
            'Content-Type': 'application/json'
        },
        data : reqData
    }
    await axios(config)
        .then(function (response) {
            data.planning = JSON.parse(JSON.stringify(response.data.planning))
            data.loading = false
            setData({...data})
            console.log(data.planning)
        })
        .catch(function (error) {
            data.callback.error = true
            data.callback.message = { status: error.response.status, statusMsg: error.response.statusText }
            data.loading = false
            setData({...data})
        });
}