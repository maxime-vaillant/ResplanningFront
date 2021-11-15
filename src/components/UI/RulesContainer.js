import { Accordion, Container, Label } from 'semantic-ui-react'
import RulesTable from './RulesTable'
import _ from "lodash";

const RulesContainer = ({ data, setData }) => {
    const containers = [
        {title: 'Règles par créneau', content: <RulesTable name='slot' data={data} setData={setData} />},
        {title: 'Règles par personne', content: <RulesTable name='person' data={data} setData={setData} />}
    ]
    const panels = _.times(containers.length, (i) => ({
        key: `panel-${i}`,
        title: {
            content: <Label color='black' content={containers[i].title} />
        },
        content: {
            content: containers[i].content
        }
    }))
    return (
        <Container>

            <Accordion exclusive={false} panels={panels} />
        </Container>
    )
}

export default RulesContainer