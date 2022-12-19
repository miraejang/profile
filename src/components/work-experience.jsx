import React from 'react';

const WorkExperience = () => {
  return (
    <section className="work_experience">
      <h2 className="section_title">
        <span>경력</span>
      </h2>
      <div className="experience">
        <div className="company_info">
          <h3 className="company_name">예스콜닷컴</h3>
          <div className="period">
            <p>
              2019.02.25
              <br />~ 2021.10.29
            </p>
            <p>(2년 8개월)</p>
          </div>
        </div>
        <div className="work_info">
          <ul className="labels">
            <li className="label">HTML/CSS</li>
            <li className="label">SCSS</li>
            <li className="label">jQuery</li>
            <li className="label">JavaScript</li>
            <li className="label">Vue.js</li>
            <li className="label">Gitlab</li>
            <li className="label">Slack</li>
          </ul>
          <div className="work_detail">
            <h4>퍼블리셔</h4>
            <ul>
              <li>
                <span>고객 업체 반응형 사이트 제작</span>
                <ul>
                  <li>100건 이상 업체 반응형 사이트 제작</li>
                  <li>업체 사이트 유지 & 보수</li>
                </ul>
              </li>
              <li>
                <span>자사 솔루션 개발 참여</span>
                <ul>
                  <li>솔루션 업데이트 시 UI 작업</li>
                  <li>Javascript를 사용하여 Form 태그의 유효성 검사</li>
                  <li>솔루션 디자인 템플릿 추가 제작</li>
                  <li>기존 기능을 다른 UI로 편하게 사용하도록 JavaScript를 사용한 캡슐화 작업</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="company_info">
          <h3 className="company_name">메이크엠</h3>
          <div className="period">
            <p>
              2016.03.17
              <br />~ 2018.03.31
            </p>
            <p>(2년)</p>
          </div>
        </div>
        <div className="work_info">
          <ul className="labels">
            <li className="label">Photoshop</li>
            <li className="label">Cafe24</li>
          </ul>
          <div className="work_detail">
            <h4>웹디자이너</h4>
            <ul>
              <li>
                <span>상품 상세 페이지 제작</span>
                <ul>
                  <li>의류 쇼핑몰 제품 상세 페이지 촬영 및 제작</li>
                  <li>광고 배너 제작</li>
                  <li>카페 24 상품 등록 & 11번가 상품 연동</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
