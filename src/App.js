import './App.css';
import PersonalInfo from './components/personal-info';
import Projects from './components/projects';
import Techs from './components/techs';
import WorkExperience from './components/work-experience';

function App() {
  return (
    <div className="profile">
      <header>
        <div className="top">
          <p>프론트엔드 개발자 장미래입니다.</p>
        </div>
      </header>
      <main className="main">
        <PersonalInfo />
        <Techs />
        <Projects />
        <WorkExperience />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
