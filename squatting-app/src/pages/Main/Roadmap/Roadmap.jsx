import './Roadmap.scss'

import { useRenderOnMount } from '../../../hooks/useRenderOnMount'
import { addClassOnVisible } from '../../../utils/functions'
import { useRef } from 'react'

const roadmap = [
    {
        title: 'Real World Utilities',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariatur.',
        isDone: true
    },
    {
        title: 'Real World Utilities',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariatur.',
        isDone: true
    },
    {
        title: 'Real World Utilities',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariatur.',
        isDone: false
    },
    {
        title: 'Real World Utilities',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariatur.',
        isDone: false
    },
    {
        title: 'Real World Utilities',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariatur.',
        isDone: false
    },
]

const Roadmap = () => {
    const roadmapRef = useRef()
    const elementsRefs = useRef([])
    useRenderOnMount('addClassOnVisibleRoadmap', addClassOnVisible, roadmapRef, elementsRefs.current, 'visible')

    return (
        <div ref={roadmapRef} id="roadmap" className="section roadmap">
            <h2>ROADMAP</h2>
            <div className="roadmap__scheme">
                {roadmap.map((stage, idx) => {
                    if ((idx + 1) % 2 === 0) {
                        return (
                            <div ref={ref => elementsRefs.current[idx] = ref} key={idx} className={stage.isDone ? "roadmap__scheme-row hidden done" : "roadmap__scheme-row hidden"}>
                            <div></div>
                            <div></div>
                            <div>
                                <h4 data-text={idx + 1}><span>{ stage.title }</span></h4>
                                <p>{ stage.body }</p>
                            </div>
                        </div>
                        )
                    }
                    return (
                        <div ref={ref => elementsRefs.current[idx] = ref} key={idx} className={stage.isDone ? "roadmap__scheme-row hidden done" : "roadmap__scheme-row hidden"}>
                        <div>
                            <h4 data-text={idx + 1}><span>{ stage.title }</span></h4>
                            <p>{ stage.body }</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Roadmap