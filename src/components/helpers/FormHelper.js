export const handleChangeOnMethod = (rule, setRule, newMethod) => {
    rule.method = newMethod ? newMethod : 'exact'
    setRule({...rule})
}

export const handleChangeOnParam = (rule, setRule, newValue) => {
    rule.param = newValue
    setRule({...rule})
}

export const addOnCallTimeInRule = (formData, setFormData, onCallTimeId) => {
    formData.onCallTimesChosen = [...formData.onCallTimesChosen, String(onCallTimeId)].sort()
    formData.onCallTimesChoice = formData.onCallTimesChoice.filter(({ key }) => key !== onCallTimeId)
    setFormData({...formData})
}

export const addSlotInRule = (formData, setFormData, slotId) => {
    formData.slotsChosen = slotId === 'all' ? [slotId] : [...formData.slotsChosen, slotId].sort()
    formData.slotsChoice = slotId === 'all' ? [] : formData.slotsChoice.filter(({ key }) => key !== slotId)
    setFormData({...formData})
}

export const addPersonInRule = (formData, setFormData, personId) => {
    formData.peopleChosen = personId === 'all' ? [personId] : [...formData.peopleChosen, personId].sort()
    formData.peopleChoice = personId === 'all' ? [] : formData.peopleChoice.filter(({ key }) => key !== personId)
    setFormData({...formData})
}

export const removeOnCallTimeInRule = (formData, setFormData, data, onCallTimeId) => {
    formData.onCallTimesChosen = formData.onCallTimesChosen.filter(id => id !== onCallTimeId)
    formData.onCallTimesChoice = data.onCallTimes.filter(({ key }) => !formData.onCallTimesChosen.includes(String(key)))
    setFormData({...formData})
}

export const removeSlotInRule = (formData, setFormData, data, slotId) => {
    formData.slotsChosen = formData.slotsChosen.filter(id => id !== slotId)
    formData.slotsChoice = [{key: 'all', text: 'Tous les créneaux', value: 'all'}].concat(
        data.slots.filter(({ key }) => !formData.slotsChosen.includes(key))
    )
    setFormData({...formData})
}

export const removePersonInRule = (formData, setFormData, data, personId) => {
    formData.peopleChosen = formData.peopleChosen.filter(id => id !== personId)
    formData.peopleChoice = [{key: 'all', text: 'Tout le monde', value: 'all'}].concat(
        data.people.filter(({ key }) => !formData.peopleChosen.includes(key))
    )
    setFormData({...formData})
}

export const submitForm = (formData, data, setData) => {

}