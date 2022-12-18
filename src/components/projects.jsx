import React from 'react';

const PROJECTS_DATA = {
  Youtube: {
    kr_name: '유튜브',
    github_link: 'https://github.com/miraejang/react-youtube',
    page_link: 'https://miraejang.github.io/react-youtube/',
    thumnail: 'youtube.jpg',
    front_end: ['React', 'React Router', 'Axios', 'Redux', 'PostCss'],
    back_end: ['Firebase (Authentication)', 'Firebase (Realtime Database)'],
    etc: ['Postman'],
    features: ['로그인 / 로그아웃', '시청한 동영상 저장', '동영상 저장', '동영상 검색'],
    deployment: 'GitHub Pages',
  },
  Notion: {
    kr_name: '노션',
    github_link: 'https://github.com/miraejang/typescript-notion',
    page_link: 'https://miraejang.github.io/typescript-notion/',
    thumnail: 'notion.jpg',
    front_end: ['TypeScript'],
    features: ['메모 추가, 삭제', '이미지, 동영상, 텍스트, 체크박스 4가지 종류로 메모 생성', '드래그하여 리스트 순서 변경'],
    deployment: 'GitHub Pages',
  },
  Movie_Web_Service: {
    kr_name: '영화 소개 앱',
    github_link: 'https://github.com/miraejang/react-netflix',
    page_link: 'https://miraejang.github.io/react-netflix/',
    thumnail: 'movie-app.jpg',
    front_end: ['React', 'React Router', 'Axios', 'Styled Components'],
    features: ['보고 싶은 리스트를 선택하여 확인', '영상 검색'],
    deployment: 'GitHub Pages',
  },
  Twitter: {
    kr_name: '트위터',
    github_link: 'https://github.com/miraejang/vue-twitter',
    page_link: 'https://miraejang.github.io/vue-twitter/',
    thumnail: 'vue-twitter.jpg',
    front_end: ['Vue3', 'Vuex', 'Vue Router', 'Tailwind CSS', 'Firebase'],
    features: ['로그인 / 로그아웃', '트윗 생성, 삭제, 수정', '내 프로필 수정', '다른 사람의 프로필 확인', '쪽지 주고 받기'],
    deployment: 'GitHub Pages',
  },
  Mini_Games: {
    kr_name: '미니 게임 앱',
    github_link: 'https://github.com/miraejang/vue-web-games',
    page_link: 'https://miraejang.github.io/vue-web-games/',
    thumnail: 'vue-game.jpg',
    front_end: ['Vue.js', 'Vuex', 'Vue Router'],
    features: ['가볍게 즐길 수 있는 9가지 게임'],
    deployment: 'GitHub Pages',
  },
};

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section_title">
        <span>프로젝트</span>
      </h2>
      {Object.keys(PROJECTS_DATA).map(project => {
        const { kr_name, github_link, page_link, thumnail, front_end, back_end, etc, features, deployment } = PROJECTS_DATA[project];
        const project_name = project.replace(/\_/g, ' ');

        return (
          <div className={`project ${project.toLowerCase()}`} key={project}>
            <div className="project_name">
              <h3>{project_name}</h3>
            </div>
            <div className="project_contents">
              <div className="project_thumbnail">
                <img src={`${process.env.PUBLIC_URL}/assets/thumbnails/${thumnail}`} alt={kr_name} />
              </div>
              <div className="project_info">
                <ul className="info">
                  <li className="page_links">
                    <h5>자세히 보기</h5>
                    <div className="btn_box">
                      <a className="btn" href={`${github_link}#readme`} target="_blank" rel="noopener noreferrer">
                        상세 내용 보기
                      </a>
                      <a className="btn" href={page_link} target="_blank" rel="noopener noreferrer">
                        {`${project_name} 페이지 보기`}
                      </a>
                    </div>
                  </li>
                  <li>
                    <h5>주요 기능</h5>
                    <ul className="features">
                      {features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <h5>Front-end</h5>
                    <ul className="labels">
                      {front_end.map(tech => (
                        <li className="label" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </li>
                  {back_end && (
                    <li>
                      <h5>Back-end</h5>
                      <ul className="labels">
                        {back_end.map(tech => (
                          <li className="label" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                  {deployment && (
                    <li>
                      <h5>Deployment</h5>
                      <div className="labels">
                        <p className="label">{deployment}</p>
                      </div>
                    </li>
                  )}
                  {etc && (
                    <li>
                      <h5>etc</h5>
                      <ul className="labels">
                        {etc.map(tech => (
                          <li className="label" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
