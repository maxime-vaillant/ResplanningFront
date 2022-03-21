import {Button, Checkbox, Icon, Label, Modal, Table} from 'semantic-ui-react'
import usePlanning from '../hooks/usePlanning'
import { removeRule } from '../helpers/PlanningHelper'
import {isEmpty} from 'lodash'
import RulesForm from './RulesForm'
import {handleCloseOnModal, handleEditRule, handleOpenOnModal} from "../helpers/FormHelper";
import useModalForm from "../hooks/useModalForm";

const RulesTable = ({ name, data, setData }) => {
    const {
        colors
    } = usePlanning()

    const rules = name === 'slot' ? data.rulesBySlot : data.rulesByPerson

    const {
        modalSettings,
        setModalSettings
    } = useModalForm()

    const columnsName = name === 'person' ?
        ['', '', 'Méthode', 'Paramètre', 'Permanences', 'Créneaux', 'Personnes', 'Lot', 'Actif'] :
        ['', '', 'Méthode', 'Paramètre', 'Permanences', 'Créneaux', 'Personnes', 'Actif']

    return (
        <>
            <Modal
                open={modalSettings.isOpen}
                onClose={() => handleCloseOnModal(modalSettings, setModalSettings)}
            >
                <Modal.Header>Règle par {name === 'slot' ? 'créneau' : 'personne'}</Modal.Header>
                <Modal.Content>
                    <RulesForm
                        modalSettings={modalSettings}
                        setModalSettings={setModalSettings}
                        ruleId={modalSettings.ruleId}
                        ruleName={name}
                        data={data}
                        setData={setData}
                    />
                </Modal.Content>
            </Modal>
            {
                name === 'slot' &&
                <div>
                    <b>Si une permanence n'apparaît pas sur un créneau, elle est automatiquement désactivée</b>
                </div>
            }
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
                        rules.map((item, index) =>
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
                                        onClick={() => handleEditRule(modalSettings, setModalSettings, index)}
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
                                                color={slot === -1 ? 'purple' : colors[slot%colors.length]}
                                                style={{ marginTop: '1vh'}}
                                            >
                                                {slot === -1 ? 'Tous les créneaux' : data.slots.find(e => e.key === slot)?.text}
                                            </Label>
                                        )
                                    })}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.people.map(person => {
                                        return(
                                            <Label
                                                key={person}
                                                color={person === -1 ? 'teal' : colors[person%colors.length]}
                                                style={{ marginTop: '1vh'}}
                                            >
                                                {person === -1 ? 'Tout le monde' : data.people.find(e => e.key === person).text}
                                            </Label>
                                        )
                                    })}
                                </Table.Cell>
                                {
                                    name === 'person' && (
                                        <Table.Cell style={{ textAlign: 'center' }}>
                                            {
                                                (item.counter === -1 && !isEmpty(item.people) && item.people[0] === -1 && 'Tous') ||
                                                (item.counter === -1 && !isEmpty(item.people) && item.people[0] !== -1 && item.people.length) ||
                                                (item.counter === -1 && isEmpty(item.people) && 0) ||
                                                (item.counter !== -1 && item.counter)
                                            }
                                        </Table.Cell>
                                    )
                                }
                                {/*
                                <Table.Cell style={{ textAlign: 'center' }}>
                                    <Label circular color={'red'}>
                                        {item.exigency}
                                    </Label>
                                </Table.Cell>
                                */}
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
            <Button positive onClick={() => handleOpenOnModal(modalSettings, setModalSettings)}>Ajouter une règle</Button>
        </>
    )
}

export default RulesTable