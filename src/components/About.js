import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <h4>App Version: 1.0.0</h4>
        <p>Welcome to the task Tracker. Simple, light-weight, customizable</p>
        <p>&nbsp;</p>
        <Link to="/">Go Back</Link>
    </div>
  )
}

export default About