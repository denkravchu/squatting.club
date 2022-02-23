import './Team.scss'

import alexanderImage from './assets/alexander.png'
import christinaImage from './assets/christina.png'
import vladislavImage from './assets/vladislav.png'
import romanImage from './assets/roman.png'
import denImage from './assets/den.png'


const team = [
    {
        image: christinaImage,
        name: 'Christina',
        body: 'Specialization'
    },
    {
        image: alexanderImage,
        name: 'Alexander',
        body: 'Specialization'
    },
    {
        image: vladislavImage,
        name: 'Vladislav',
        body: 'Specialization'
    },
    {
        image: romanImage,
        name: 'Roman',
        body: 'ui/ux designer'
    },
    {
        image: denImage,
        name: 'Den',
        body: 'blockchain dev'
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