import {Button, Confirm, Container, Menu} from "semantic-ui-react";
import {generatePlanning, getCsvData, resetData} from "../helpers/PlanningHelper";
import {CSVLink} from "react-csv";
import {handleCloseConfirm, handleOpenConfirm} from "../helpers/FormHelper";

const MenuContainer = ({ data, setData }) => {
    return (
        <Menu className="ui fixed inverted menu">
            <Container>
                <Menu.Item header>
                    Resplanning
                </Menu.Item>
                <Menu.Item onClick={() => generatePlanning({...data}, setData)}>
                    <Button color='teal'>Génération Planning</Button>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <CSVLink data={getCsvData(data)} filename={"planning.csv"}>
                            <Button color='green'>Exportation Planning</Button>
                        </CSVLink>
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={() => handleOpenConfirm(data, setData)} color='red'>Remise à zéro</Button>
                        <Confirm
                            open={data.confirmOpen}
                            content='Es-tu sûr.e de vouloir remettre à zéro TOUTES les données de la page (permanences, règles, personnes...) ?'
                            onCancel={() => handleCloseConfirm(data,  setData)}
                            onConfirm={() => resetData(data, setData)}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}

export default MenuContainer