import { useState } from 'react'

const useRulesForm = (data, ruleName, ruleId) => {
    const {
        onCallTimes,
        people,
        slots,
        rulesBySlot,
        rulesByPerson
    } = data || {}

    const existingRule = ruleName === 'slot' ?
        rulesBySlot[ruleId] :
        rulesByPerson[ruleId]

    const [rule, setRule] = useState(existingRule || {
        method: "exact",
        param: 0,
        counter: 'all',
        slots: [],
        people: [],
        on_call_times: [],
        exigency: 0,
        disable: false
    })

    const filteredPeopleChoice = rule.people[0] !== 'all' ?
        [{key: 'all', text: 'Tout le monde', value: 'all'}].concat(people.filter(({ key }) => !rule.people.includes(key))) :
        []

    const filteredSlotsChoice = rule.slots[0] !== 'all' ?
        [{key: 'all', text: 'Tous les créneaux', value: 'all'}].concat(slots.filter(({ key }) => !rule.people.includes(key))) :
        []

    const [formData, setFormData] = useState({
        onCallTimesChoice: onCallTimes.filter(({ key }) => !rule.on_call_times.includes(String(key))),
        peopleChoice: filteredPeopleChoice,
        slotsChoice: filteredSlotsChoice,
        onCallTimesChosen: rule.on_call_times,
        peopleChosen: rule.people,
        slotsChosen: rule.slots
    })

    return {
        rule,
        setRule,
        formData,
        setFormData
    }
}

export default useRulesForm