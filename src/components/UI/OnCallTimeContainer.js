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
            {
                data.onCallTimes.map(
                    onCallTime =>
                        <Label key={onCallTime.key} color={colors[onCallTime.key%colors.length]} horizontal style={{ marginTop: '1vh'}}>
                            <Icon
                                name='remove'
                                style={{ cursor: 'pointer' }}
                                onClick={() => removeOnCallTime(data, setData, onCallTime.key)}
                            />
                            <EditableLabel
                                initialValue={onCallTime.text}
                                save={value => updateOnCallTimes(data, setData, value, onCallTime.key)}
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