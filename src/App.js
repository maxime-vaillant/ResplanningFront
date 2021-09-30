import {Accordion, Container, Label, Message, Modal} from 'semantic-ui-react'
import _ from 'lodash'
import OnCallTimeContainer from './components/UI/OnCallTimeContainer'
import AvailabilitiesContainer from './components/UI/AvailabilitiesContainer'
import PlanningContainer from './components/UI/PlanningContainer'
import usePlanning from './components/hooks/usePlanning'
import RulesContainer from './components/UI/RulesContainer'

function App() {
    const {
        data,
        setData
    } = usePlanning()

    const containers = [
        {title: 'Permanences', content: <OnCallTimeContainer data={data} setData={setData} />},
        {title: 'Règles', content: <RulesContainer data={data} setData={setData} />},
        {title: 'Disponibilités', content: <AvailabilitiesContainer data={data} setData={setData} />},
        {title: 'Planning', content: <PlanningContainer data={data} setData={setData} />},
    ]

    const panels = _.times(containers.length, (i) => ({
        key: `panel-${i}`,
        title: {
            content: <Label basic color='black' size='massive' content={containers[i].title} />
        },
        content: {
            content: containers[i].content
        }
    }))

    console.log(data.callback.message)

    return (
        <Container fluid style={{ paddingLeft: '3vw', paddingTop: '1vh', overflow: 'scroll', minHeight: '100vh' }}>
            <Modal
                basic
                open={data.callback.error}
                onClose={() => {
                    data.callback.error = false
                    data.callback.message = ''
                    setData({...data})
                }}
            >
                <Message negative>
                    <Message.Header>Nope</Message.Header>
                </Message>
            </Modal>
            <Accordion
                panels={panels}
                exclusive={false}
                fluid
            />
        </Container>
    );
}

export default App;
