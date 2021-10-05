import {Button, Confirm, Container, Icon, Input, Label, Menu, Modal} from "semantic-ui-react";
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
                            onClose={() => {
                                setSelectedFile(null)
                                setIsImportOpen(false)
                            }}
                        >
                            <Modal.Content style={{ textAlign: 'center' }}>
                                <label htmlFor="file" style={{ cursor: 'pointer',fontWeight: 'bold', marginRight: '0.5vw' }}>
                                    <Label color='violet'>Upload un fichier</Label>
                                </label>
                                <Input
                                    id='file'
                                    type='file'
                                    accept='.csv'
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                                { selectedFile ? <Icon color='green' name='circle' /> : <Icon color='red' name='circle outline' />}
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => {
                                    setSelectedFile(null)
                                    setIsImportOpen(false)
                                }}>Annuler</Button>
                                <Button
                                    color='green'
                                    onClick={() => importCsv(data, setData, selectedFile, setSelectedFile, setIsImportOpen)}
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