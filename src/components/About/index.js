import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-main-container">
      <div className="large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
      <div className="small-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
      </div>
    </div>
  </>
)

export default About
