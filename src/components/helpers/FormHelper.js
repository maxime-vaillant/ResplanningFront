export const handleChangeOnMethod = (rule, setRule, newMethod) => {
    rule.method = newMethod ? newMethod : 'exact'
    setRule({...rule})
}

export const handleChangeOnParam = (rule, setRule, newValue) => {
    rule.param = parseInt(newValue)
    setRule({...rule})
}

export const handleChangeOnCounter = (rule, setRule, newValue) => {
    rule.counter = parseInt(newValue)
    setRule({...rule})
}

export const addOnCallTimeInRule = (rule, setRule, formData, setFormData, onCallTimeId) => {
    rule.on_call_times = [...rule.on_call_times, String(onCallTimeId)].sort()
    formData.onCallTimesChoice = formData.onCallTimesChoice.filter(({ key }) => key !== onCallTimeId)
    setRule({...rule})
    setFormData({...formData})
}

export const addSlotInRule = (rule, setRule, formData, setFormData, slotId) => {
    rule.slots = slotId === -1 ? [slotId] : [...rule.slots, slotId].sort((a, b) => a.key - b.key)
    formData.slotsChoice = slotId === -1 ? [] : formData.slotsChoice.filter(({ key }) => key !== slotId)
    setRule({...rule})
    setFormData({...formData})
}

export const addPersonInRule = (rule, setRule, formData, setFormData, personId) => {
    rule.people = personId === -1 ? [personId] : [...rule.people, personId].sort((a, b) => a.key - b.key)
    formData.peopleChoice = personId === -1 ? [] : formData.peopleChoice.filter(({ key }) => key !== personId)
    setRule({...rule})
    setFormData({...formData})
}

export const removeOnCallTimeInRule = (rule, setRule, formData, setFormData, data, onCallTimeId) => {
    rule.on_call_times = rule.on_call_times.filter(id => id !== onCallTimeId)
    formData.onCallTimesChoice = data.onCallTimes.filter(({ key }) => !rule.on_call_times.includes(String(key)))
    setRule({...rule})
    setFormData({...formData})
}

export const removeSlotInRule = (rule, setRule, formData, setFormData, slots, slotId) => {
    rule.slots = rule.slots.filter(id => id !== slotId)
    formData.slotsChoice = [{key: -1, text: 'Tous les créneaux', value: -1}].concat(
        slots.filter(({ key }) => !rule.slots.includes(key))
    )
    setRule({...rule})
    setFormData({...formData})
}

export const removePersonInRule = (rule, setRule, formData, setFormData, people, personId) => {
    rule.people = rule.people.filter(id => id !== personId)
    formData.peopleChoice = [{key: -1, text: 'Tout le monde', value: -1}].concat(
        people.filter(({ key }) => !rule.people.includes(key))
    )
    setRule({...rule})
    setFormData({...formData})
}

export const handleOpenConfirm = (data, setData) => {
    data.confirmOpen = true
    setData({...data})
}

export const handleCloseConfirm = (data, setData) => {
    data.confirmOpen = false
    setData({...data})
}

export const handleCloseOnModal = (modalSettings, setModalSettings) => {
    modalSettings.isOpen = false
    setModalSettings({...modalSettings})
}

export const handleOpenOnModal = (modalSettings, setModalSettings) => {
    modalSettings.isOpen = true
    modalSettings.ruleId = null
    setModalSettings({...modalSettings})
}

export const handleEditRule = (modalSettings, setModalSettings, id) => {
    modalSettings.isOpen = true
    modalSettings.ruleId = id
    setModalSettings({...modalSettings})
}

export const submitForm = (modalSettings, setModalSettings, rule, ruleName, ruleId, data, setData) => {
    const {
        rulesBySlot,
        rulesByPerson
    } = data

    const rules = ruleName === 'slot' ?
        rulesBySlot :
        rulesByPerson

    if ( rules[ruleId] ) {
        rules[ruleId] = rule
    } else {
        rules.push(rule)
    }

    setData({...data})
    modalSettings.isOpen = false
    setModalSettings({...modalSettings})
}