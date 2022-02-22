import './Team.scss'

import userImage from './assets/user.png'

const team = [
    {
        image: userImage,
        name: 'Name',
        body: 'Specialization'
    },
    {
        image: userImage,
        name: 'Name',
        body: 'Specialization'
    },
    {
        image: userImage,
        name: 'Name',
        body: 'Specialization'
    },
    {
        image: userImage,
        name: 'Name',
        body: 'Specialization'
    },
    {
        image: userImage,
        name: 'Name',
        body: 'Specialization'
    },
]

const Team = () => {
    return (
        <div id="team" className="section team">
            <h2>Our team</h2>
            <div className="team__list">
                {
                    team.map((person, idx) => (
                        <div key={idx} className="team__list-person">
                            <img src={person.image} width={120} height={120} alt="" />
                            <div className="person__text-block">
                                <h4>{ person.name }</h4>
                                <p>{ person.body }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team