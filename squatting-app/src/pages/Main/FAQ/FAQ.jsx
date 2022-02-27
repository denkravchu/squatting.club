import './FAQ.scss'

import Accordion from '../../../components/UI/Accordion/Accordion'

const faq = [
    {
        title: 'Lorem test2 dolor sit amet?',
        body: 'Lorem test2 dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
    },
    {
        title: 'Lorem test2 dolor sit amet?',
        body: 'Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
    },
    {
        title: 'Lorem test2 dolor sit amet?',
        body: 'Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
    },
    {
        title: 'Lorem ipsum dolor sit amet?',
        body: 'Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
    },
    {
        title: 'Lorem ipsum dolor sit amet?',
        body: 'Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
    },
]

const FAQ = () => {
    return (
        <div id="faq" className="section faq">
            <h2>Faq</h2>
            <div className="faq__list">
                {faq.map((item, idx) => (
                    <Accordion key={idx} title={item.title} body={item.body}/>
                ))}
            </div>
        </div>
    )
}

export default FAQ
