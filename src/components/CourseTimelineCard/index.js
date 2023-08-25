// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props

  const {courseTitle, description, duration, tagsList} = courseData

  return (
    <div>
      <div className="title-duration">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-icon">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="list-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="tag-item">
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
