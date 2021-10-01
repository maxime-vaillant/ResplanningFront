import { Button, Icon, Table } from 'semantic-ui-react'
import EditableLabel from 'react-editable-label'
import {
    addPerson,
    addSlot,
    handleChangeOnAvailabilities,
    removePerson, removeSlot,
    updatePeople,
    updateSlots
} from "../helpers/PlanningHelper";

const AvailabilitiesContainer = ({ data, setData }) => {
    return (
        <>
            <Table celled padded color='green'>
                <Table.Header>
                    <Table.Row textAlign='center'>
                        <Table.HeaderCell singleLine width={4}>
                            Personnes
                        </Table.HeaderCell>
                        {
                            data.slots.map(slot =>
                                <Table.HeaderCell singleLine key={slot.key}>
                                    <Icon
                                        color='red'
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removeSlot(data, setData, slot.key)}
                                    />
                                    <EditableLabel
                                        initialValue={slot.text}
                                        save={value => updateSlots(data, setData, value, slot.key)}
                                    />
                                </Table.HeaderCell>
                            )
                        }
                        <Table.Cell>
                            <Button
                                circular
                                color='green'
                                icon='add'
                                onClick={() => addSlot(data, setData)}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <Button
                                circular
                                color='green'
                                icon='add'
                                onClick={() => addSlot(data, setData)}
                            />
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        data.people.map(person =>
                            <Table.Row key={person.key}>
                                <Table.Cell singleLine textAlign='center'>
                                    <Icon
                                        color='red'
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removePerson(data, setData, person.key)}
                                    />
                                    <EditableLabel
                                        initialValue={person.text}
                                        save={value => updatePeople(data, setData, value, person.key)}
                                    />
                                </Table.Cell>
                                {
                                    data.slots.map(slot =>
                                        <Table.Cell
                                            selectable
                                            positive={slot.key in data.planning[person.key]}
                                            negative={!(slot.key in data.planning[person.key])}
                                            onClick={() => {
                                                handleChangeOnAvailabilities(data, setData, person.key, slot.key)
                                            }}
                                            key={person+slot+person.key+slot.key}
                                        />
                                    )
                                }
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
            <Button color='green' onClick={() => {addPerson(data, setData)}}>
                Ajouter une personne
            </Button>
        </>
    )
}

export default AvailabilitiesContainer