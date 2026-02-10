import React  from 'react';
import './NewContactModal.css';
import { newContactModalRequest } from '../../../Service/ApiService';

const NewContactModal = ({ handleOpenOrCloseNewContactModal, handleRequestToBackend }) => {

    const handleModalClick = (e) => {
        e.stopPropagation();
    }

    const handleAddNewContact = async (e) => {
        e.preventDefault()
        const form = document.querySelector('.newContactModalForm')
        const formdata = new FormData(form);
        const dataForm = Object.fromEntries(formdata);
        dataForm.favorited = formdata.has('favorited')
        newContactModalRequest(dataForm)

        setTimeout(()=>{
            handleOpenOrCloseNewContactModal()
            handleRequestToBackend()
        },100)
    }

    return (
        <div className="newContactModalOverlay" id='newContactModalOverlay' onClick={()=>handleOpenOrCloseNewContactModal}>
            <div className="newContactModalContainer" onClick={handleModalClick}>
        
                <div className="newContactModalHeader">
                    <div>
                        <h2>Adicionar Novo Contato</h2>
                        <p>Insira as informações do novo contato abaixo.</p>
                    </div>
                    <button className="newContactModalCloseButton" onClick={handleOpenOrCloseNewContactModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                
                <div className="newContactModalPhotoSection">
                    <div className="newContactModalPhotoCircle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="newContactModalUploadText">Carregar foto</span>
                </div>

               
                <form className="newContactModalForm" onSubmit={handleAddNewContact}>
                    
                    <div className="newContactModalInputGroup fullWidth">
                        <label>NOME COMPLETO</label>
                        <input type="text" placeholder="Ex: João Silva" name="fullName" />
                    </div>

                    <div className="newContactModalInputGroup startPosition">
                        <label>Favorito</label>
                        <input type='checkbox' name='favorited' />
                    </div>

                    <div className="newContactModalFormRow">
                        <div className="newContactModalInputGroup">
                            <label>EMAIL</label>
                            <input type="email" placeholder="email@exemplo.com" name="email" />
                        </div>
                        <div className="newContactModalInputGroup">
                            <label>TELEFONE</label>
                            <input type="tel" placeholder="(00) 00000-0000" name="phone" />
                        </div>
                    </div>
                    <div className="newContactModalFormRow">
                        <div className="newContactModalInputGroup">
                            <label>ANIVERSÁRIO</label>
                            <input type="date" name="birthdate" />
                        </div>
                        <div className="newContactModalInputGroup">
                            <label>PROFISSÃO</label>
                            <input type="text" placeholder="Ex: Desenvolvedor" name="occupation" />
                        </div>
                    </div>

                    <div className="newContactModalFormRow addressRow">
                        <div className="newContactModalInputGroup">
                            <label>CIDADE</label>
                            <input type="text" placeholder="Itaperuna" name="city" />
                        </div>
                        <div className="newContactModalInputGroup">
                            <label>BAIRRO</label>
                            <input type="text" placeholder="Centro" name="neighborhood" />
                        </div>
                    </div>

                   
                    <div className="newContactModalFormRow">
                        <div className="newContactModalInputGroup">
                            <label>RUA</label>
                            <input type="text" placeholder="Rua das Flores" name="street" />
                        </div>
                        <div className="newContactModalInputGroup">
                            <label>NÚMERO</label>
                            <input type="text" placeholder="123" name="streetNumber" />
                        </div>
                    </div>


                    <div className="newContactModalInputGroup fullWidth">
                        <label>NOTAS</label>
                        <textarea placeholder="Observações importantes..." rows="3" name="note"></textarea>
                    </div>

                    <div className="newContactModalFooter">
                        <button type="button" className="newContactModalCancelBtn" onClick={handleOpenOrCloseNewContactModal}>Cancelar</button>
                        <button type="submit" className="newContactModalSaveBtn" onClick={handleAddNewContact}>✓ Salvar Contato</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default NewContactModal;