import axios from "axios";

export const addSlot = (data, setData) => {
    data.slots = [...data.slots, {key: data.slotCount, text: '00h00'}]
    data.people.forEach(person =>
        data.planning[person.key][data.slotCount] = { available: true, onCallTime: null }
    )
    data.slotCount += 1
    setData({...data})
}

export const addPerson = (data, setData) => {
    data.people = [...data.people, {key: data.personCount, text: 'Personne'}]
    data.planning[data.personCount] = {}
    data.slots.forEach(slot => {
        data.planning[data.personCount][slot.key] = { available: true, onCallTime: null }
    })
    data.personCount += 1
    setData({...data})
}

export const addOnCallTimes = (data, setData) => {
    data.onCallTimes = [...data.onCallTimes, {key: data.onCallTimeCount, text: 'Perm', value: data.count}]
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

export const removeOnCallTime = (data, setData, onCallTimeId) => {
    data.onCallTimes = data.onCallTimes.filter(e => e.key !== onCallTimeId)
    data.people.forEach(person  => {
        data.slots.forEach(slot  => {
            if (data.planning[person.key][slot.key].onCallTime === onCallTimeId){
                data.planning[person.key][slot.key].onCallTime = null
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

export const updateSlots = (data, setData, newSlot, slotId) => {
    data.slots.find(e => e.key === slotId).text = newSlot
    setData({...data})
}

export const updatePeople = (data, setData, newPerson, personId) => {
    data.people.find(e => e.key === personId).text = newPerson
    setData({...data})
}

export const updateOnCallTimes = (data, setData, newOnCallTime, onCallTimeId) => {
    data.onCallTimes.find(e => e.key === onCallTimeId).text = newOnCallTime
    setData({...data})
}

export const handleChangeOnAvailabilities = (data, setData, personId, slotId) => {
    data.planning[personId][slotId] = {available:!data.planning[personId][slotId].available, onCallTime: null}
    setData({...data})
}

export const handleChangeOnPlanning = (data, setData, value, personId, slotId) => {
    data.planning[personId][slotId].onCallTime = value !== '' ? data.onCallTimes.find(e => e.value === value).key : null
    setData({...data})
}

export const getOnCallTimeValue = (data,  personId, slotId) => {
    const key = data.planning[personId][slotId].onCallTime
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
            const key = data.planning[person.key][slot.key].onCallTime
            csvRow.push(key !== null ? data.onCallTimes.find(e => e.key === key).text : null)
        })
        csvData.push(csvRow)
    })
    return csvData
}

export const resetPlanning = (data, setData) => {
    data.people.forEach(person => {
        data.slots.forEach(slot => {
            data.planning[person.key][slot.key].onCallTime = null
        })
    })
    setData({...data})
}

const getIdsToSend = (array) => {
    const arrayTmp = []
    array.forEach(e => arrayTmp.push(e.key))
    return arrayTmp
}

export const generatePlanning = async (data, setData) => {
    console.log('dataGen', data)
    const reqData = JSON.stringify({
        "on_call_times": getIdsToSend(data.onCallTimes),
        "planning": data.planning,
        "slots": getIdsToSend(data.slots),
        "people": getIdsToSend(data.people),
        "rules_by_person": data.rulesByPerson,
        "rules_by_slot": data.rulesBySlot
    })

    const config = {
        method: 'POST',
        url: 'http://localhost:8000/generate/',
        headers: {
            'Content-Type': 'application/json'
        },
        data : reqData
    }
    axios(config)
        .then(function (response) {
            data.planning = JSON.parse(JSON.stringify(response.data.planning))
            setData({...data})
            console.log(data.planning)
        })
        .catch(function (error) {
            data.callback.error = true
            data.callback.message = error
            setData({...data})
        });
}