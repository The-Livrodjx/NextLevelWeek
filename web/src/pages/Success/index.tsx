import React, {useEffect} from 'react';
import { useHistory} from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import './styles.css'

const Success = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 2000)
    }, [])

    return (
        <div className="page-success">
            <div className="content">

                <main>
                    <span>
                        <FiCheck id="teste"/>
                        <p>Cadastrado com sucesso !</p>
                    </span>
                </main>
            </div>
    
        </div>
        
    )
}

export default Success