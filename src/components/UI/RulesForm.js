import {Button, Container, Divider, Dropdown, Grid, Icon, Input, Label} from 'semantic-ui-react'
import usePlanning from '../hooks/usePlanning'
import useRulesForm from '../hooks/useRulesForm'
import {
    addOnCallTimeInRule,
    addPersonInRule,
    addSlotInRule, handleChangeOnCounter, handleChangeOnMethod, handleChangeOnParam, handleCloseOnModal,
    removeOnCallTimeInRule, removePersonInRule,
    removeSlotInRule, submitForm
} from "../helpers/FormHelper";

const RulesForm = ({ modalSettings, setModalSettings, ruleName, ruleId, data, setData }) => {
    const {
        rule,
        setRule,
        formData,
        setFormData
    } = useRulesForm(data, ruleName, ruleId)

    const {
        onCallTimes,
        people,
        slots
    } = data

    const {
        onCallTimesChoice,
        peopleChoice,
        slotsChoice,
    } = formData

    const {
        on_call_times: onCallTimesChosen,
        people: peopleChosen,
        slots: slotsChosen
    } = rule

    const {
        colors
    } = usePlanning()

    const methodOptions = [
        { key: 'exact', value: 'exact', text: 'Exactement'},
        { key: 'at_least', value: 'at_least', text: 'Au moins'},
        { key: 'at_most', value: 'at_most', text: 'Au plus'},
    ]

    return(
        <Container>
            <Grid>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <h3>Méthode :</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            clearable={rule.method !== 'exact'}
                            value={rule.method}
                            selection
                            onChange={(i, datas) => handleChangeOnMethod(rule, setRule, datas.value)}
                            options={methodOptions}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Paramètre :</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <Input
                            value={rule.param}
                            min={0}
                            onChange={(i, datas) => handleChangeOnParam(rule, setRule, datas.value)}
                            type='number'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <h3>Permanences :</h3>
                    </Grid.Column>
                    <Grid.Column>
                        {
                            onCallTimesChosen.map(onCallTimeId =>
                                <Label
                                    key={onCallTimeId}
                                    color={colors[onCallTimeId%colors.length]}
                                    style={{ marginTop: '0.5vh'}}
                                >
                                    <Icon
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removeOnCallTimeInRule(rule, setRule, formData, setFormData, data, onCallTimeId)}
                                    />
                                    {onCallTimes.find(({ key }) => key === parseInt(onCallTimeId)).text}
                                </Label>
                            )
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {
                        onCallTimesChoice.map(({ key, text }) =>
                            <Label
                                horizontal
                                key={key}
                                color={colors[key%colors.length]}
                                style={{ cursor: 'pointer', marginTop: '0.5vh' }}
                                onClick={() => addOnCallTimeInRule(rule, setRule, formData, setFormData, key)}
                            >
                                {text}
                            </Label>
                        )
                    }
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <h3>Créneaux :</h3>
                    </Grid.Column>
                    <Grid.Column>
                        {
                            slotsChosen.map(slot =>
                                <Label
                                    horizontal
                                    key={slot}
                                    color={slot === -1 ? 'purple' : colors[slot%colors.length]}
                                    style={{ marginTop: '0.5vh'}}
                                >
                                    <Icon
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removeSlotInRule(rule, setRule, formData, setFormData, slots, slot)}
                                    />
                                    {slot === -1 ? 'Tous les créneaux' : slots.find(({ key }) => key === slot).text}
                                </Label>
                            )
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {
                        slotsChoice.map(({ key, text }) =>
                            <Label
                                key={key}
                                color={key === -1 ? 'purple' : colors[key%colors.length]}
                                style={{ cursor: 'pointer', marginTop: '0.5vh' }}
                                onClick={() => addSlotInRule(rule, setRule, formData, setFormData, key)}
                            >
                                {text}
                            </Label>
                        )
                    }
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <h3>Personnes :</h3>
                    </Grid.Column>
                    <Grid.Column>
                        {
                            peopleChosen.map(person =>
                                <Label
                                    horizontal
                                    key={person}
                                    color={person === -1 ? 'teal' : colors[person%colors.length]}
                                    style={{ marginTop: '0.5vh'}}
                                >
                                    <Icon
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removePersonInRule(rule, setRule, formData, setFormData, people, person)}
                                    />
                                    {person === -1 ? 'Tout le monde' : people.find(({ key }) => key === person).text}
                                </Label>
                            )
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {
                        peopleChoice.map(({ key, text }) =>
                            <Label
                                key={key}
                                color={key === -1 ? 'teal' : colors[key%colors.length]}
                                style={{ cursor: 'pointer', marginTop: '0.5vh' }}
                                onClick={() => addPersonInRule(rule, setRule, formData, setFormData, key)}
                            >
                                {text}
                            </Label>
                        )
                    }
                </Grid.Row>
                { ruleName === 'person' &&
                (<Grid.Row columns={4}>
                    <Grid.Column>
                        <h3>Lot :</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <Input
                            value={rule.counter}
                            min={-1}
                            onChange={(i, datas) => handleChangeOnCounter(rule, setRule, datas.value)}
                            type='number'
                        />
                    </Grid.Column>
                </Grid.Row>)
                }
            </Grid>
            <Divider />
            <Button negative onClick={() => handleCloseOnModal(modalSettings, setModalSettings)}>Annuler</Button>
            <Button positive onClick={() => submitForm(modalSettings, setModalSettings, rule, ruleName, ruleId, data, setData)}>Sauvegarder</Button>
        </Container>
    )
}

export default RulesForm