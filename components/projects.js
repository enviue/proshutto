import React from 'react'
import FeaturedProject from './projcts/featuredProject'
import TopProjects from './projcts/topProjects'

const Projects = ({ ClassName }) => {
    return (
        <div className={ClassName}>
            <div>
                <FeaturedProject />
            </div>
            <div>
                <TopProjects />
            </div>
        </div>
    )
}

export default Projects
