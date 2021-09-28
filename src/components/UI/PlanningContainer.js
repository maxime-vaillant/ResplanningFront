import { Button, Dropdown, Icon, Table } from 'semantic-ui-react'
import {
    addPerson,
    addSlot, getCsvData,
    getOnCallTimeValue,
    handleChangeOnPlanning,
    removePerson,
    removeSlot, resetPlanning
} from '../helpers/PlanningHelper'
import { CSVLink } from 'react-csv'
import usePlanning from "../hooks/usePlanning";

const PlanningContainer = ({ data, setData }) => {
    const {
        colors
    } = usePlanning()

    console.log(data.planning)

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
                                    {slot.text}
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
                                    {person.text}
                                </Table.Cell>
                                {
                                    data.slots.map(slot =>
                                        <Table.Cell singleLine key={person+slot+person.key+slot.key}>
                                            {
                                                data.planning[person.key][slot.key].available ?
                                                    <Button.Group
                                                        color={
                                                            getOnCallTimeValue(data, person.key, slot.key) !== null ?
                                                                colors[getOnCallTimeValue(data, person.key, slot.key)%colors.length] :
                                                                null
                                                        }
                                                    >
                                                        <Dropdown
                                                            clearable
                                                            className='button'
                                                            placeholder='Perm'
                                                            fluid
                                                            value={ getOnCallTimeValue(data, person.key, slot.key) }
                                                            options={data.onCallTimes}
                                                            onChange={(i, datas) => {
                                                                handleChangeOnPlanning(data, setData, datas.value, person.key, slot.key)
                                                            }}
                                                            selection
                                                            style={{ width: '100%' }}
                                                        />
                                                    </Button.Group>
                                                     :
                                                    null
                                            }
                                        </Table.Cell>
                                    )
                                }
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
            <Button
                circular
                color='green'
                icon='add'
                onClick={() => addPerson(data, setData)}
            />
            <CSVLink data={getCsvData(data)} filename={"planning.csv"}><Button>Exporter en CSV</Button></CSVLink>
            <Button color='red' onClick={() => resetPlanning(data, setData)}>RAZ</Button>
        </>
    )
}

export default PlanningContainer