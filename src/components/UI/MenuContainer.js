import {Button, Confirm, Container, Input, Menu, Modal} from "semantic-ui-react";
import {generatePlanning, getCsvData, importCsv, resetData} from "../helpers/PlanningHelper";
import {CSVLink} from "react-csv";
import {handleCloseConfirm, handleOpenConfirm} from "../helpers/FormHelper";
import {useState} from "react";

const MenuContainer = ({ data, setData }) => {
    const [isImportOpen, setIsImportOpen] = useState(false)

    const [selectedFile, setSelectedFile] = useState(null);

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
                        <Button color='violet' onClick={() => setIsImportOpen(true)}>Importation Frama</Button>
                        <Modal
                            open={isImportOpen}
                            onClose={() => setIsImportOpen(false)}
                        >
                            <Modal.Content>
                                <Input
                                    type='file'
                                    accept='.csv'
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setIsImportOpen(false)}>Annuler</Button>
                                <Button
                                    color='green'
                                    onClick={() => importCsv(data, setData, selectedFile, setIsImportOpen)}
                                >
                                    Valider
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Menu.Item>
                    <Menu.Item>
                        <CSVLink data={getCsvData(data)} filename={"planning.csv"}>
                            <Button color='brown'>Exportation Planning</Button>
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