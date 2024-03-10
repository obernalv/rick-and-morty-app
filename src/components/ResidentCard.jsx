import { useEffect } from "react"
import useHttp from "../hooks/useHttp"
import './styles/ResidentCard.css'

const ResidentCard = ({url}) => {
 
  //uso del hook
  const [character, getCharacter] = useHttp(url)

  useEffect(() => {
    getCharacter()
  }, [])
 
  console.log(character);

  return (

    <article className="resident">
      <header className="resident__header">
        <img className="resident__image" src={character?.image} alt="" />

        <div className="status aparecer">
          <div className={`status__circle ${character?.status}`}></div>
          <div className="status__value">{character?.status}</div>
        </div>
      </header>

      <section className="resident__body">
        <h3 className="resident__name">{character?.name}</h3>
        <hr className="resident__hr"/>
          <ul className="resident__list">

            <li className="resident__item">
              <span className="resident__label">Especie </span>
              <span className="resident__value">{character?.species}</span>
            </li>

            <li className="resident__item">
              <span className="resident__label">Origen </span>
              <span className="resident__value">{character?.origin.name}</span>
            </li>

            <li className="resident__item">
              <span className="resident__label">Episodes where appear </span>
              <span className="resident__value">{character?.episode.length}</span>
            </li>

          </ul>
      </section>
    </article>

  )
}

export default ResidentCard