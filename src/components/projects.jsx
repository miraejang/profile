import React from 'react';

const PROJECTS_DATA = {
  // Name: {
  //   kr_name: ,
  //   github_code_link: ,
  //   page_link: ,
  //   thumnail: ,
  //   techs: [

  //   ],
  //   features: [

  //   ],
  // },
  'Youtube': {
    kr_name: '유튜브',
    github_code_link: 'https://github.com/miraejang/react-youtube',
    page_link: 'https://miraejang.github.io/react-youtube/',
    thumnail: 'youtube.jpg',
    techs: ['React', 'React Hook', 'React Router', 'axios', 'Redux', 'Firebase', 'Postman', 'PostCSS'],
    features: [
      'Redux를 이용한 state 상태관리',
      'axios를 이용한 Youtuube API 사용',
      'Router를 이용한 SPA',
      'React Hook 사용하여 제작',
      'Firebase를 이용한 로그인 기능 / 사용자별 내용 저장',
      'local storage를 사용하여 상태 저장',
      'Postman을 이용한 API 관리',
      'PostCSS를 이용한 Component 별 style 적용',
      'Github 자동 배포',
    ],
  },
  'Notion': {
    kr_name: '노션',
    github_code_link: 'https://github.com/miraejang/typescript-notion',
    page_link: 'https://miraejang.github.io/typescript-notion/',
    thumnail: 'notion.jpg',
    techs: ['TypeScript'],
    features: ['TypeScript를 이용한 메모 App'],
  },
  'Blockchain': {
    kr_name: '블록체인',
    github_code_link: 'https://github.com/miraejang/typescript-blockchain',
    page_link: null,
    thumnail: 'blockchain.jpg',
    techs: ['TypeScript'],
    features: ['TypeScript를 이용한 Blockchaing code'],
  },
  'Movie Web Service': {
    kr_name: '영화 소개 앱',
    github_code_link: 'https://github.com/miraejang/react-netflix',
    page_link: 'https://miraejang.github.io/react-netflix/',
    thumnail: 'movie-app.jpg',
    techs: ['React', 'React Router', 'axios', 'Styled Components'],
    features: ['axios를 이용한 API 사용', 'Styled Components를 이용한 style 적용', 'Router을 이용한 영화 상세정보 페이지 이동', '체크된 조건 별 영화 리스트 렌더링'],
  },
  'Twitter': {
    kr_name: '트위터',
    github_code_link: 'https://github.com/miraejang/vue-twitter',
    page_link: 'https://miraejang.github.io/vue-twitter/',
    thumnail: 'vue-twitter.jpg',
    techs: ['Vue3', 'Vuex', 'Vue Router', 'Tailwind CSS', 'Firebase'],
    features: ['Vuex를 이용한 상태관리와 화면 업데이트', 'Firebase를 이용한 로그인 / 로그아웃 기능', 'Firebase를 이용한 데이터 저장', 'Tailwind CSS를 이용한 styles 적용', 'Github 자동 배포'],
  },
  'Mini Games': {
    kr_name: '미니 게임 앱',
    github_code_link: 'https://github.com/miraejang/vue-web-games',
    page_link: 'https://miraejang.github.io/vue-web-games/',
    thumnail: 'vue-game.jpg',
    techs: ['Vue.js', 'Vuex', 'Vue Router'],
    features: ['조건문과 반복문', 'Props 전달', '변화 감지 및 선택적 렌더링', 'class와 style 속성 바인딩', 'Form(input, textarea, select) 바인딩', 'Router를 이용한 페이지 이동'],
  },
};

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="title">
        <span>프로젝트</span>
      </h2>
      {Object.keys(PROJECTS_DATA).map(project => (
        <div className="project" key={project}>
          <div className="project_name">
            <h3>{project}</h3>
            <div className="btn_box">
              <a className="btn" href={PROJECTS_DATA[project].github_code_link} target="_blank" rel="noopener noreferrer">
                상세 내용 보기
              </a>
              {PROJECTS_DATA[project].page_link && (
                <a className="btn" href={PROJECTS_DATA[project].page_link} target="_blank" rel="noopener noreferrer">
                  {`${project} 페이지 보기`}
                </a>
              )}
            </div>
          </div>
          <div className="project_content">
            <div className="img">
              <img src={`./assets/thumbnails/${PROJECTS_DATA[project].thumnail}`} alt={`${PROJECTS_DATA[project].kr_name} 이미지`} />
            </div>
            <div className="disc">
              <div className="container">
                <div className="tech_stack">
                  <ul>
                    {PROJECTS_DATA[project].techs.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail">
                  {PROJECTS_DATA[project].features.map((feature, i) => (
                    <p key={i}>{feature}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
