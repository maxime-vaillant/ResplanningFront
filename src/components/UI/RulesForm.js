import {Button, Container, Dropdown, Grid, Icon, Input, Label} from 'semantic-ui-react'
import usePlanning from '../hooks/usePlanning'
import useRulesForm from '../hooks/useRulesForm'
import {
    addOnCallTimeInRule,
    addPersonInRule,
    addSlotInRule, handleChangeOnMethod, handleChangeOnParam,
    removeOnCallTimeInRule, removePersonInRule,
    removeSlotInRule
} from "../helpers/FormHelper";

const RulesForm = ({ ruleName, ruleId, data, setData }) => {
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
        onCallTimesChosen,
        peopleChosen,
        slotsChosen
    } = formData

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
                                        onClick={() => removeOnCallTimeInRule(formData, setFormData, data, onCallTimeId)}
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
                                style={{ cursor: 'pointer' }}
                                onClick={() => addOnCallTimeInRule(formData, setFormData, key)}
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
                                    color={slot === 'all' ? 'purple' : colors[slot%colors.length]}
                                    style={{ marginTop: '0.5vh'}}
                                >
                                    <Icon
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removeSlotInRule(formData, setFormData, data, slot)}
                                    />
                                    {slot === 'all' ? 'Tous les créneaux' : slots.find(({ key }) => key === slot).text}
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
                                color={key === 'all' ? 'purple' : colors[key%colors.length]}
                                style={{ cursor: 'pointer' }}
                                onClick={() => addSlotInRule(formData, setFormData, key)}
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
                                    color={person === 'all' ? 'teal' : colors[person%colors.length]}
                                    style={{ marginTop: '0.5vh'}}
                                >
                                    <Icon
                                        name='remove'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removePersonInRule(formData, setFormData, data, person)}
                                    />
                                    {person === 'all' ? 'Tout le monde' : people.find(({ key }) => key === person).text}
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
                                color={key === 'all' ? 'teal' : colors[key%colors.length]}
                                style={{ cursor: 'pointer' }}
                                onClick={() => addPersonInRule(formData, setFormData, key)}
                            >
                                {text}
                            </Label>
                        )
                    }
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default RulesForm