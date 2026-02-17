import React, { useMemo } from "react";
import "./ContactProfileCard.css";
import { deleteContactById } from "../../../Service/ApiService";

export default function ContactProfileCard({ contact }) {

  const handleDeleteContact = async (id) => {
    console.log('comando chamado')
    const backend = await deleteContactById(id)
    console.log(backend)
  }

 const formattedDate = useMemo(() => {
    if (!contact?.birthdate) return { day: "01", month: "Janeiro", year: "2000" };

    const [year, monthNum, day] = contact.birthdate.split("-");
    
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const monthName = months[parseInt(monthNum) - 1] || "mês";

    return { day, month: monthName, year };
  }, [contact.birthdate]);

  const formattedAddress = useMemo(() => {
  const parts = [
    contact.street,
    contact.streetNumber ? `nº ${contact.streetNumber}` : null,
    contact.neighborhood,
    contact.city
  ].filter(part => part && part.trim() !== "");

  return parts.length > 0 ? parts.join(", ") : "Endereço não informado";
}, [contact]);

  return (
    <div className="contactProfileCardContactCard">
      <div className="contactProfileCardContactHeader">
        <div className="contactProfileCardProfileLeft">
          <div className="contactProfileCardAvatar">
            <i className="bi bi-person-fill"></i>
          </div>

          <div className="contactProfileCardProfileInfo">
            <h2>
              {contact.fullName}{" "}
              <i className="bi bi-star-fill contactProfileCardStar"></i>
            </h2>

            <p className="contactProfileCardSubtitle">
              {contact.occupation || 'Sem ocupação'}
            </p>

            <div className="contactProfileCardTags">
              <span className="contactProfileCardTag contactProfileCardTagBlue">
                FAMÍLIA
              </span>
              <span className="contactProfileCardTag contactProfileCardTagPurple">
                FAVORITOS
              </span>
              <span className="contactProfileCardTag contactProfileCardTagGreen">
                VIP
              </span>
            </div>
          </div>
        </div>

        <div className="contactProfileCardActions">
          <button className="contactProfileCardBtn contactProfileCardEdit">
            <i className="bi bi-pencil"></i>
            Editar
          </button>

          <button className="contactProfileCardBtn contactProfileCardDelete" onClick={()=> handleDeleteContact(contact.id)}>
            <i className="bi bi-trash"></i>
            Excluir
          </button>
        </div>
      </div>

      <hr />

      <div className="contactProfileCardContactContent">
        <div className="contactProfileCardInfoSection">
          <h3>Informações de Contato</h3>

          <div className="contactProfileCardInfoItem">
            <i className="bi bi-envelope"></i>
            <div>
              <span className="contactProfileCardLabel">E-mail</span>
              <p>{contact.email}</p>
            </div>
          </div>

          <div className="contactProfileCardInfoItem">
            <i className="bi bi-telephone"></i>
            <div>
              <span className="contactProfileCardLabel">Telefone</span>
              <p>{contact.phone}</p>
            </div>
          </div>

          <div className="contactProfileCardInfoItem">
            <i className="bi bi-geo-alt"></i>
            <div>
              <span className="contactProfileCardLabel">Endereço</span>
              <p>
                {formattedAddress}
              </p>
            </div>
          </div>
        </div>

        <div className="contactProfileCardInfoSection">
          <h3>Detalhes Pessoais</h3>

          <div className="contactProfileCardInfoItem">
            <i className="bi bi-cake"></i>
            <div>
              <span className="contactProfileCardLabel">Aniversário</span>
              <p>{formattedDate.day} de {formattedDate.month} de {formattedDate.year}</p>
            </div>
          </div>

          <div className="contactProfileCardInfoItem">
            <i className="bi bi-file-text"></i>
            <div>
              <span className="contactProfileCardLabel">
                Notas / Observações
              </span>
              <p>{contact.note  || 'Sem notas'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contactProfileCardFooter">
        Última atualização em 12 de Out, 2023
      </div>
    </div>
  );
}
