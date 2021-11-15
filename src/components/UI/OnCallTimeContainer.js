import usePlanning from '../hooks/usePlanning'
import {Icon, Label, Popup} from 'semantic-ui-react'
import EditableLabel from 'react-editable-label'
import {addOnCallTimes, removeOnCallTime, updateOnCallTimes} from '../helpers/PlanningHelper';

const OnCallTimeContainer = ({ data, setData }) => {
    const {
        colors
    } = usePlanning()

    return (
        <>
            <div>
                <b>La première permanence complète le planning par défaut</b>
            </div>
            {
                data.onCallTimes.map(
                    ({ key, text }) =>
                        <Label key={key} color={colors[key%colors.length]} horizontal style={{ marginTop: '1vh'}}>
                            { key !== 0 && <Icon
                                name='remove'
                                style={{ cursor: 'pointer' }}
                                onClick={() => removeOnCallTime(data, setData, key)}
                            />}
                            <EditableLabel
                                initialValue={text}
                                save={value => updateOnCallTimes(data, setData, value, key)}
                            />
                        </Label>
                )
            }
            <Popup content='Ajouter une permanence' inverted basic trigger={
                <Icon
                    color='green'
                    name='add'
                    style={{ cursor: 'pointer' }}
                    onClick={() => addOnCallTimes(data, setData)}
                />
            } />
        </>
    )
}

export default OnCallTimeContainer