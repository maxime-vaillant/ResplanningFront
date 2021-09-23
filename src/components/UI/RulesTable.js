import {Checkbox, Icon, Label, Table} from 'semantic-ui-react'
import usePlanning from '../hooks/usePlanning'
import { removeRule } from '../helpers/PlanningHelper'
import {isEmpty} from "lodash";

const RulesTable = ({ name, data, setData }) => {
    const {
        colors
    } = usePlanning()

    const rule = name === 'slot' ? data.rulesBySlot : data.rulesByPerson

    const columnsName = ['', '', 'Méthode', 'Paramètre', 'Permanences', 'Créneaux', 'Lot', 'Personnes', 'Exigence', 'Actif']

    return (
        <Table celled padded color='blue'>
            <Table.Header>
                <Table.Row>
                    {
                        columnsName.map((item, index) =>
                            <Table.HeaderCell key={index}>
                                {item}
                            </Table.HeaderCell>
                        )
                    }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    rule.map((item, index) =>
                        <Table.Row key={item+index}>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Icon
                                    color='red'
                                    name='remove'
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => removeRule(name, data, setData, index)}
                                />
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Icon
                                    color='blue'
                                    name='edit'
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => console.log()}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                {item.method === 'at_least'  && 'Au moins'}
                                {item.method === 'at_most'  && 'Au plus'}
                                {item.method === 'exact'  && 'Exactement'}
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                {item.param}
                            </Table.Cell>
                            <Table.Cell>
                                {item.on_call_times.map(itm => {
                                    const onCallTimes = data.onCallTimes.filter(e => itm.split('+').map(i => (parseInt(i))).includes(e.key))
                                    if (!isEmpty(onCallTimes)){
                                        return (
                                            <Label
                                                key={itm}
                                                color={colors[onCallTimes.length > 1 ? onCallTimes.reduce((s, a) => s + a.key, 0)*10%colors.length : onCallTimes[0].key%colors.length]}
                                                horizontal
                                                style={{ marginTop: '1vh'}}
                                            >
                                                {onCallTimes[0].text}
                                                {onCallTimes.filter(i => i.key !== onCallTimes[0].key).map(i => ' + ' + i.text)}
                                            </Label>
                                        )
                                    }
                                    return null
                                })}
                            </Table.Cell>
                            <Table.Cell>
                                {item.slots.map(slot => {
                                    return(
                                        <Label
                                            key={slot}
                                            color={slot === 'all' ? 'purple' : colors[slot%colors.length]}
                                            style={{ marginTop: '1vh'}}
                                        >
                                            {slot === 'all' ? 'Tous les créneaux' : data.slots.find(e => e.key === slot).text}
                                        </Label>
                                    )
                                })}
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                {
                                    name === 'slot' && (
                                    (name === 'slot' && item.counter === 'all' && !isEmpty(item.slots) && item.slots[0] === 'all' && data.slots.length) ||
                                    (name === 'slot' && item.counter === 'all' && !isEmpty(item.slots) && item.slots[0] !== 'all' && item.slots.length) ||
                                    (name === 'slot' && item.counter === 'all' && isEmpty(item.slots) && 0) ||
                                    (item.counter !== 'all' && item.counter)
                                    )
                                }
                            </Table.Cell>
                            <Table.Cell>
                                {item.people.map(person => {
                                    return(
                                        <Label
                                            key={person}
                                            color={person === 'all' ? 'teal' : colors[person%colors.length]}
                                            style={{ marginTop: '1vh'}}
                                        >
                                            {person === 'all' ? 'Tout le monde' : data.people.find(e => e.key === person).text}
                                        </Label>
                                    )
                                })}
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Label circular color={'red'}>
                                    {item.exigency}
                                </Label>
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Checkbox toggle checked={!item.disable} onChange={() => {
                                    item.disable = !item.disable
                                    setData({ ...data })
                                }} />
                            </Table.Cell>
                        </Table.Row>
                    )
                }
            </Table.Body>
        </Table>
    )
}

export default RulesTable