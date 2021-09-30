import { useState } from 'react'

const useRulesForm = (data, ruleName, ruleId) => {
    const {
        onCallTimes,
        people,
        slots,
        rulesBySlot,
        rulesByPerson
    } = data

    const existingRule = ruleName === 'slot' ?
        rulesBySlot[ruleId] :
        rulesByPerson[ruleId]

    const [rule, setRule] = useState(existingRule ? {...existingRule} : {
        method: "exact",
        param: 0,
        counter: -1,
        slots: [],
        people: [],
        on_call_times: [],
        exigency: 0,
        disable: false
    })

    const filteredPeopleChoice = rule.people[0] !== -1 ?
        [{key: -1, text: 'Tout le monde', value: -1}].concat(people.filter(({ key }) => !rule.people.includes(key))) :
        []

    const filteredSlotsChoice = rule.slots[0] !== -1 ?
        [{key: -1, text: 'Tous les créneaux', value: -1}].concat(slots.filter(({ key }) => !rule.slots.includes(key))) :
        []

    const [formData, setFormData] = useState({
        onCallTimesChoice: onCallTimes.filter(({ key }) => !rule.on_call_times.includes(String(key))),
        peopleChoice: filteredPeopleChoice,
        slotsChoice: filteredSlotsChoice,
    })

    return {
        rule,
        setRule,
        formData,
        setFormData
    }
}

export default useRulesForm