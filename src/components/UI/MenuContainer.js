import React, { useState } from 'react'
import { Button, Confirm, Container, Divider, Icon, Input, Label, Menu, Modal } from 'semantic-ui-react'
import {
    generatePlanning,
    getCsvData,
    importCsv,
    importRules,
    resetData,
    resetDefaultData
} from '../helpers/PlanningHelper'
import {
    handleCloseResetConfirm,
    handleCloseResetDefaultConfirm,
    handleOpenResetConfirm,
    handleOpenResetDefaultConfirm
} from '../helpers/FormHelper'
import { CSVLink } from 'react-csv'
import exportFromJSON from 'export-from-json'

const MenuContainer = ({ data, setData }) => {
    const [isImportOpen, setIsImportOpen] = useState(false)
    const [isRuleOpen, setIsRuleOpen] = useState(false)
    const [isResetOpen, setIsResetOpen] = useState(false)
    const [selectedRuleFile, setSelectedRuleFile] = useState(null)
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
                        <Button color='orange' onClick={() => setIsRuleOpen(true)}>
                            Options Règles
                        </Button>
                        <Modal
                            open={isRuleOpen}
                            onClose={() => setIsRuleOpen(false)}
                        >
                            <Modal.Content>
                                <Label
                                    color='olive'
                                    onClick={()  => exportFromJSON({
                                        data: {
                                            onCallTimes: data.onCallTimes,
                                            rulesByPerson: data.rulesByPerson,
                                            rulesBySlot: data.rulesBySlot,
                                            slots: data.slots,
                                            slotCount: data.slotCount,
                                            onCallTimesCount: data.onCallTimesCount,
                                        },
                                        fileName: 'resplanning-config',
                                        exportType: exportFromJSON.types.json})
                                    }
                                    style={{ cursor: 'pointer'}}
                                >Exporter les règles</Label>
                                <Divider />
                                  <label htmlFor="file" style={{ cursor: 'pointer',fontWeight: 'bold', marginRight: '0.5vw' }}>
                                    <Label color='violet'>Importer des règles</Label>
                                </label>
                                <Input
                                    id='file'
                                    type='file'
                                    accept='.json'
                                    onChange={(e) => setSelectedRuleFile(e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                                { selectedRuleFile ? <Icon color='green' name='circle' /> : <Icon color='red' name='circle outline' />}
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setIsRuleOpen(false)}>Annuler</Button>
                                <Button color='green' onClick={() => importRules(data, setData, selectedRuleFile, setSelectedRuleFile, setIsRuleOpen)}>Valider</Button>
                            </Modal.Actions>
                        </Modal>
                    </Menu.Item>
                    {/*
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
                    */}
                    <Menu.Item>
                        <CSVLink data={getCsvData(data)} filename={"planning.csv"}>
                            <Button color='brown'>Exportation Planning</Button>
                        </CSVLink>
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={() => setIsResetOpen(true)} color='red'>Réinitialiser</Button>
                        <Modal
                            open={isResetOpen}
                            onClose={() => setIsResetOpen(false)}
                        >
                            <Modal.Content>
                                <Button onClick={() => handleOpenResetDefaultConfirm(data, setData)} color='orange'>Remettre les paramètres par défaut</Button>
                                <Confirm
                                    open={data.confirmResetDefaultOpen}
                                    content='Es-tu sûr.e de vouloir remettre les paramètres par défaut de TOUTES les données de la page (permanences, règles, personnes...) ?'
                                    onCancel={() => handleCloseResetDefaultConfirm(data, setData)}
                                    onConfirm={() => {
                                        resetDefaultData(data, setData)
                                        setIsResetOpen(false)
                                    }}
                                />
                                <Divider />
                                <Button onClick={() => handleOpenResetConfirm(data, setData)} color='black'>Remise à zéro globale</Button>
                                <Confirm
                                    open={data.confirmResetOpen}
                                    content='Es-tu sûr.e de vouloir remettre à zéro TOUTES les données de la page (permanences, règles, personnes...) ?'
                                    onCancel={() => handleCloseResetConfirm(data, setData)}
                                    onConfirm={() => {
                                        resetData(data, setData)
                                        setIsResetOpen(false)
                                    }}
                                />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setIsResetOpen(false)}>Annuler</Button>
                            </Modal.Actions>
                        </Modal>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}

export default MenuContainer