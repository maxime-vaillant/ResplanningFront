import {useState} from 'react'

const useModalForm = () => {
    const [modalSettings, setModalSettings] = useState({
        isOpen: false,
        ruleId: null
    })

    return {
        modalSettings,
        setModalSettings
    }
}

export default useModalForm