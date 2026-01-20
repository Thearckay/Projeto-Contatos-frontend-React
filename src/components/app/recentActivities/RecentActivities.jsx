import React from 'react'
import './RecentActivities.css'

const RecentActivities = () => {
  return (
    <section className='recentActivities'>
        <header className='recentActivitiesHeader'>
            <h3>
                <i className="bi bi-clock-history"></i>
                Atividades Recentes 
            </h3>
            <button className='recentActivitiesSeeAllBtn'>Ver tudo</button>
        </header>
        <div className='recentActivitiesCard'>
          <i className="bi bi-envelope-fill recentActivitiesIcon"></i>
          <div>
            <h4>Titulo da atividade Recente</h4>
            <p>Assunto da atividade recente</p>
          </div>
          <span>quando</span>
        </div>
    </section>
  )
}

export default RecentActivities