import SideNav from './components/SideNav'


const Home = ({ onLogoClick }) => {


  return (
    <div className='home'>
      <SideNav onLogoClick={onLogoClick} />
    </div>
  )
}

export default Home;