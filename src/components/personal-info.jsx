import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBook, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        가장 효율적인 해결책을 고민하는 프론트엔드 개발자입니다.
      </p>
      <div className="info">
        <div>
          <div className="info_name">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>Email</span>
          </div>
          <span className="link">jangmirae611@gmail.com</span>
        </div>
        <div>
          <a className="btn info_name" href="https://github.com/miraejang" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <span>Github</span>
          </a>
          <span className="link print">https://github.com/miraejang</span>
        </div>
        <div>
          <a className="btn info_name" href="https://infuture.notion.site/Study-4e55922f04fb49168e891160f2bc5614" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPen} className="icon" />
            <span>Study Note</span>
          </a>
          <span className="link print">https://infuture.notion.site/Study-4e55922f04fb49168e891160f2bc5614</span>
        </div>
        <div>
          <a className="btn info_name" href="https://in-future.tistory.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBook} className="icon" />
            <span>Blog</span>
          </a>
          <span className="link print">https://in-future.tistory.com</span>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
