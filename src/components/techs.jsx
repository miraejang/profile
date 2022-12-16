import React from 'react';

const TECHS_DATA = {
  'React': {
    icon: 'react.svg',
    details: [
      'State와 Props를 이해하고 있습니다.',
      'Class Component와 Function Component를 사용할 수 있습니다.',
      'React Hook을 사용할 수 있습니다.',
      'React Router, axios을 사용할 수 있습니다.',
      'Redux를 이용한 상태 관리를 할 수 있습니다.',
      'Dependency Injection을 할 수 있습니다.',
      'Pure Component와 memo로 Re-Render를 방지할 수 있습니다.',
    ],
  },
  'Vue.js': {
    icon: 'vuedotjs.svg',
    details: [
      '라이프사이클을 이해하고 사용할 수 있습니다.',
      '조건부 렌더링을 할 수 있습니다',
      '속성을 바인딩할 수 있습니다.',
      '이벤트를 등록하고 핸들링할 수 있습니다.',
      '양방향 데이터 바인딩을 할 수 있습니다.',
      'Vuex, Vue Router을 활용할 수 있습니다.',
    ],
  },
  'JavaScript': {
    icon: 'javascript.svg',
    details: [
      'ES6+ 문법을 사용할 수 있습니다.',
      '데이터의 타입을 알고, 호이스팅에 대해 이해하고 있습니다.',
      '배열과 객체를 활용할 수 있습니다.',
      'Class 문법을 사용할 수 있습니다.',
      '동기와 비동기를 이해하고 사용할 수 있습니다.',
    ],
  },
  'Git': {
    icon: 'git.svg',
    details: [
      'Repository를 생성하고 local에 저장할 수 있습니다.',
      'Repository의 내용을 local에 push, pull 할 수 있습니다.',
      'branch create, checkout, merge, delete 할 수 있습니다.',
      'commit 한 내용을 reset, revert, cherry-pick 할 수 있습니다.',
      'stash를 사용할 수 있습니다.',
    ],
  },
  'HTML / CSS': {
    details: [
      '시맨틱 마크업을 준수합니다.',
      '웹접근성을 고려하여 작성합니다.',
      '크로스브라우징을 할 수 있습니다.',
      '반응형 웹 제작을 할 수 있습니다.',
      'flex, grid등 최근 업데이트 된 내용들도 사용할 수 있습니다.',
    ],
  },
};

// const BADGES = {
//   'language': {
//     html: 'html5.svg',
//     css: 'css3.svg',
//     javascript: 'javascript.svg',
//   },
//   'JavaScript Framework': {
//     'React': 'react.svg',
//     'vue.js': 'vuedotjs.svg',
//   },
//   'CSS Framework': {
//     'PostCSS': 'postcss.svg',
//     'Tailwind CSS': 'tailwindcss.svg',
//     'Styled-Components': 'styledcomponents.svg',
//   },
//   'ect': {
//     GraphQL: 'graphql.svg',
//     Redux: 'redux.svg',
//   },
// };

const BADGES = [
  'typescript.svg',
  'react.svg',
  'vuedotjs.svg',
  'javascript.svg',
  'html5.svg',
  'css3.svg',
  'graphql.svg',
  'redux.svg',
  'postcss.svg',
  'tailwindcss.svg',
  'styledcomponents.svg',
  'firebase.svg',
  'postman.svg',
  'git.svg',
];

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="title">
        <span>기술</span>
      </h2>
      <div className="badges">
        <ul>
          {BADGES.map(badge => (
            <li key={badge} className="badge">
              <div className="img">
                <img src={`./assets/icons/${badge}`} alt={badge.slice(0, -4)} />
              </div>
            </li>
          ))}
        </ul>
        {/* {Object.keys(BADGES).map(group => (
          <div key={group}>
            <p className="group_name">{group}</p>
            <ul>
              {Object.keys(BADGES[group]).map(badge => (
                <li key={badge} className="badge">
                  <div className="img">
                    <img src={`./assets/icons/${BADGES[group][badge]}`} alt={badge} />
                  </div>
                  <div className="name">{badge}</div>
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>
      {Object.keys(TECHS_DATA).map(tech => (
        <div className="tech">
          <p className="tech_name">
            {TECHS_DATA[tech].icon && <img src={`./assets/icons/${TECHS_DATA[tech].icon}`} alt={tech} className="icon" />}
            <span>{tech}</span>
          </p>
          <ul className="tech_detail">
            {TECHS_DATA[tech].details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Techs;
