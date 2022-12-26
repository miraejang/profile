import React from 'react';

const TECHS_DATA = {
  Front_end: {
    react: {
      name: 'React',
      icon: 'react',
      desc: `React를 사용한 웹앱을 제작할 수 있습니다.`,
      sub_techs: ['react_query', 'next_js', 'recoil', 'react_router', 'axios'],
    },
    javascript: {
      name: 'JavaScript',
      icon: 'javascript',
      icon_size: 'small',
      desc: 'ES6+ 구문을 사용합니다. Prototype, Hoisting, Scope, Closure를 이해하고 있으며 브라우저 API를 사용할 수 있습니다.',
      sub_techs: ['jquery'],
    },
    typescript: {
      name: 'TypeScript',
      icon: 'typescript',
      icon_size: 'small',
      desc: '안정성 있는 개발을 위해 TypeScript를 사용할 수 있습니다.',
      sub_techs: null,
    },
    vue: {
      name: 'Vue.js',
      icon: 'vuedotjs',
      desc: `Vue.js를 사용한 웹앱을 제작할 수 있습니다.`,
      sub_techs: null,
    },
    graphql: { name: 'GraphQL', icon: 'graphql', desc: '리소스와 데이터를 필요에 맞게 작성하여 사용할 수 있습니다.', sub_techs: null },
    redux: { name: 'Redux', icon: 'redux', desc: '상태 관리를 할 수 있습니다.', sub_techs: null },
    css: {
      name: 'CSS',
      icon: 'css3',
      icon_size: 'small',
      desc: '레이아웃을 구성하고 스타일링할 수 있습니다. \n다수의 반응형 웹사이트를 제작해 본 경험이 있습니다.',
      sub_techs: ['sass', 'postcss', 'tailwindcss', 'styled_components'],
    },
    html: {
      name: 'HTML',
      icon: 'html5',
      icon_size: 'small',
      desc: '시맨틱 마크업, 웹 접근성, 크로스 브라우징, SEO를 고려하여 작성할 수 있습니다. \n다수의 웹 사이트를 제작해 본 경험이 있습니다.',
      sub_techs: ['bootstrap'],
    },
  },
  Back_end: {
    firebase: {
      name: 'Firebase',
      icon: 'firebase',
      desc: 'Authentication, Realtime Database를 사용해 본 경험이 있습니다.',
      sub_techs: null,
    },
  },
};

const OTHERS_TECHS_DATA = {
  Communication: {
    git: {
      name: 'Git',
      icon: 'git',
      icon_size: 'small',
      desc: 'Git을 이용하여 버전 관리를 할 수 있고, 협업의 경험이 있습니다.',
      sub_techs: ['github', 'gitlab'],
    },
    slack: {
      name: 'Slack',
      icon: 'slack',
      icon_size: 'small',
      desc: 'Slack을 이용한 소통, 협업을 경험이 있습니다.',
      sub_techs: null,
    },
    figma: {
      name: 'Figma',
      icon: 'figma',
      icon_size: 'small',
      desc: 'Figma를 사용해보고, 디자이너와 협업해 본 경험이 있습니다.',
      sub_techs: null,
    },
  },
};

const Techs = () => {
  return (
    <section className="tech_skills">
      <h2 className="section_title">
        <span>기술</span>
      </h2>
      {Object.keys(TECHS_DATA).map(category => {
        return (
          <div className={`category ${category.toLowerCase()}`} key={category}>
            <h3>{category.replace(/_/g, '-')}</h3>
            <ul className="techs">
              {Object.keys(TECHS_DATA[category]).map(tech => {
                const { name, icon, icon_size, desc, sub_techs } = TECHS_DATA[category][tech];

                return (
                  <li className={tech.toLowerCase()} key={tech}>
                    <div className="card">
                      <div className="card_main">
                        <div className="tech_title">
                          <img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`} alt={tech} className={`icon ${icon_size && icon_size}`} />
                          <h4>{name}</h4>
                        </div>
                        <div className="tech_desc">
                          {desc.split('\n').map(str => (
                            <p key={str}>{str}</p>
                          ))}
                        </div>
                      </div>
                      {sub_techs && (
                        <div className="card_sub">
                          <div className="related_techs">
                            <h6>관련된 Tech</h6>
                            <ul className="tech_icons no_print">
                              {sub_techs.map(sub_tech => (
                                <li key={sub_tech}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/icons/${sub_tech}.png`} alt={sub_tech} className="icon" />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="category other_techs">
        <h3>And other things</h3>
        {Object.keys(OTHERS_TECHS_DATA).map(category => {
          const sub_category = OTHERS_TECHS_DATA[category];

          return (
            <div className={`sub_category ${category.toLowerCase()}`} key={category}>
              <h4>{category}</h4>
              <ul className="techs">
                {Object.keys(sub_category).map(techs => {
                  const { name, icon, icon_size, desc, sub_techs } = sub_category[techs];

                  return (
                    <li className={techs} key={techs}>
                      <div className="card">
                        <div className="card_main">
                          <div className="tech_title">
                            <img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`} alt={techs} className={`icon ${icon_size && icon_size}`} />
                            <h4>{name}</h4>
                          </div>
                          <div className="tech_desc">
                            {desc.split('\n').map(str => (
                              <p key={str}>{str}</p>
                            ))}
                          </div>
                        </div>
                        {sub_techs && (
                          <div className="card_sub">
                            <div className="related_techs">
                              <h6>관련된 Tech</h6>
                              <ul className="tech_icons no_print">
                                {sub_techs.map(sub_tech => (
                                  <li key={sub_tech}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/icons/${sub_tech}.png`} alt={sub_tech} className="icon" />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Techs;
