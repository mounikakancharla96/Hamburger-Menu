import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-main-container">
      <div className="home-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </div>
      <div className="home-small-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
      </div>
    </div>
  </>
)

export default Home
