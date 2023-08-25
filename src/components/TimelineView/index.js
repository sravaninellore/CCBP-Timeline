// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  constructor(props) {
    super(props)
    this.state = {timelineData: props.timelineItemsList}
  }

  render() {
    const {timelineData} = this.state

    return (
      <div className="bg-container">
        <h1 className="my-journey">
          MY JOURNEY OF <br /> <br />
          <span className="ccbp">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: '#0967d2',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
              titleColor: '#0967d2',
            }}
            items={timelineData}
          >
            {timelineData.map(eachItem => {
              if (eachItem.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard courseData={eachItem} key={eachItem.id} />
                )
              }
              return (
                <ProjectTimelineCard projectData={eachItem} key={eachItem.id} />
              )
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
