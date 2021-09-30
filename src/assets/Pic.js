export const rulesBySlot = [
    {
        "method": "exact",
        "param": 2,
        "counter": -1,
        "slots": [-1],
        "people": [-1],
        "on_call_times": ["0", "1"],
        "exigency": 0,
        "disable": false
    },
    {
        "method": "at_most",
        "param": 1,
        "counter": -1,
        "slots": [0, 1, 2, 3, 4, 5, 6, 7],
        "people": [-1],
        "exigency": 0,
        "on_call_times": ["3"],
        "disable": true
    },
    {
        "method": "at_least",
        "param": 3,
        "counter": -1,
        "slots": [0, 1, 2, 3, 4, 5, 6, 7],
        "people": [-1],
        "exigency": 0,
        "on_call_times": ["2"],
        "disable": true
    },
    {
        "method": "at_most",
        "param": 6,
        "counter": -1,
        "slots": [0, 1, 2, 3, 4, 5, 6, 7],
        "people": [-1],
        "exigency": 0,
        "on_call_times": ["2"],
        "disable": true
    },
    {
        "method": "exact",
        "param": 0,
        "counter": -1,
        "slots": [0, 1, 2, 3, 4, 5, 6, 7],
        "people": [-1],
        "exigency": 0,
        "on_call_times": ["4", "5"],
        "disable": true
    },
    {
        "method": "exact",
        "param": 0,
        "counter": -1,
        "slots": [8, 9],
        "people": [-1],
        "exigency": 0,
        "on_call_times": ["2", "6", "3"],
        "disable": true
    },
    {
        "method": "at_most",
        "param": 3,
        "counter": -1,
        "slots": [8, 9],
        "people": [-1],
        "exigency": 0,
        "on_call_times": ["5"],
        "disable": true
    },
]

export const rulesByPerson = [
    {
        "method": "at_most",
        "param": 2,
        "counter": -1,
        "slots": [-1],
        "people": [-1],
        "on_call_times": ["0", "1"],
        "exigency": 0,
        "disable":  true
    },
    {
        "method": "at_most",
        "param": 3,
        "counter": -1,
        "slots": [-1],
        "people": [-1],
        "on_call_times": ["0+1"],
        "exigency": 0,
        "disable":  true
    },
    {
        "method": "at_most",
        "param": 1,
        "counter": 2,
        "slots": [-1],
        "people": [-1],
        "on_call_times": ["0+1", "6"],
        "exigency": 0,
        "disable":  true
    },
    {
        "method": "at_most",
        "param": 2,
        "counter": 3,
        "slots": [-1],
        "people": [-1],
        "on_call_times": ["2"],
        "exigency": 0,
        "disable":  true
    }
]

export const onCallTimes = [
    {
        key: 0,
        text: "Sécu pente",
        value: 0
    },
    {
        key: 1,
        text: "Sécu escalier",
        value: 1
    },
    {
        key: 2,
        text: "Bar",
        value: 2
    },
    {
        key: 3,
        text: "Caisse",
        value: 3
    },
    {
        key: 4,
        text: "Ménage",
        value: 4
    },
    {
        key: 5,
        text: "Sécu trottoir",
        value: 5
    },
    {
        key: 6,
        text: "Pause",
        value: 6
    }
]

export const slots = [
    {
        key: 0,
        text: "18h00"
    },
    {
        key: 1,
        text: "18h30"
    },
    {
        key: 2,
        text: "19h00"
    },
    {
        key: 3,
        text: "19h30"
    },
    {
        key: 4,
        text: "20h00"
    },
    {
        key: 5,
        text: "20h30"
    },
    {
        key: 6,
        text: "21h00"
    },
    {
        key: 7,
        text: "21h30"
    },
    {
        key: 8,
        text: "22h00"
    },
    {
        key: 9,
        text: "22h30"
    },
]