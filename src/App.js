import { Accordion, Container, Dimmer, Label, Loader, Message, Modal } from 'semantic-ui-react'
import _ from 'lodash'
import OnCallTimeContainer from './components/UI/OnCallTimeContainer'
import AvailabilitiesContainer from './components/UI/AvailabilitiesContainer'
import PlanningContainer from './components/UI/PlanningContainer'
import usePlanning from './components/hooks/usePlanning'
import RulesContainer from './components/UI/RulesContainer'
import MenuContainer from './components/UI/MenuContainer'
import Footer from './components/UI/Footer'

function App() {
    const {
        data,
        setData
    } = usePlanning()

    const containers = [
        {title: 'Permanences', content: <OnCallTimeContainer data={data} setData={setData} />},
        {title: 'Contraintes', content: <RulesContainer data={data} setData={setData} />},
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

    return (
        <>
            <MenuContainer data={data} setData={setData}/>
            <Container fluid style={{ paddingLeft: '3vw', paddingTop: '10vh', overflow: 'scroll', minHeight: '100vh' }}>

                {
                    data.loading &&
                    (<Dimmer active page>
                        <Loader size='massive'>Loading</Loader>
                    </Dimmer>)
                }
                <Modal
                    basic
                    open={data.callback.error}
                    onClose={() => {
                        data.callback.error = false
                        data.callback.message = { status: null, statusMsg: null }
                        setData({...data})
                    }}
                >
                    <Message negative>
                        <Message.Header>
                            {data.callback.message.status === 404 && 'Modèle introuvable'}
                            {data.callback.message.status === 400 && 'Données invalides'}
                            {data.callback.message.status === 409 && 'Erreur avec le solveur'}
                            {data.callback.message.status === 500 && 'Erreur système'}
                        </Message.Header>
                        <Message.Content>
                            {data.callback.message.status === 404 && 'Trop de contraintes liées aux règles ou manque de personnes'}
                            {data.callback.message.status === 500 && 'Contactes le dev'}
                        </Message.Content>
                    </Message>
                </Modal>
                <Accordion
                    panels={panels}
                    exclusive={false}
                    fluid
                />
            </Container>
            <Footer />
        </>

    );
}

export default App;
