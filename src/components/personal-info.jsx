import React from 'react';

const PersonalInfo = () => {
  return (
    <section className="personal_info">
      <header className="header">
        <div>
          <h1 className="name">
            <span>장미래</span>
          </h1>
          <a className="home_btn print" href="https://miraejang.github.io/profile/" target="_blank" rel="noopener noreferrer">
            사이트로 이동하기
          </a>
        </div>
      </header>
      <p className="intro">
        안녕하세요😊 <br />
        가장 효율적인 해결책을 고민하는 프론트엔드 개발자 입니다.
      </p>
      <div className="info">
        <div className="email">
          <span className="link_name">Email</span>
          <span className="link">jangmirae611@gmail.com</span>
        </div>
        <div>
          <a className="btn link_name" href="https://github.com/miraejang" target="_blank" rel="noopener noreferrer">
            <span>Github</span>
            <i className="icon fa-brands fa-github fa-xl"></i>
          </a>
          <span className="link print">https://github.com/miraejang</span>
        </div>
        <div>
          <a className="btn link_name" href="https://infuture.notion.site/Study-4e55922f04fb49168e891160f2bc5614" target="_blank" rel="noopener noreferrer">
            <span>Study Note</span>
            <i className="icon fa-solid fa-pen"></i>
          </a>
          <span className="link print">https://infuture.notion.site/Study-4e55922f04fb49168e891160f2bc5614</span>
        </div>
        <div>
          <a className="btn link_name" href="https://in-future.tistory.com" target="_blank" rel="noopener noreferrer">
            <span>Blog</span>
            <i className="icon fa-solid fa-book"></i>
          </a>
          <span className="link print">https://in-future.tistory.com</span>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
