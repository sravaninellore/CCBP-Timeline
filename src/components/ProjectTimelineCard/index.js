// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectData

  return (
    <div className="project-container">
      <div className="project-image-container">
        <img src={imageUrl} alt="project img" className="project-image" />
      </div>
      <div className="title-duration">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-icon">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
