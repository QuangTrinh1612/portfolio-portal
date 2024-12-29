import React from 'react';

function Experience() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Experience</h2>
      <div className="underline"></div>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* Only the Work tab */}
          <div className="qualification__button button--flex qualification__active">
            <i className="uil uil-suitcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* Work Section */}
          <div className="qualification__content qualification__active" data-content id="work">
            {/* Work 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Data Engineer</h3>
                <span className="qualification__subtitle">Rackspace Technology</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Work 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Senior Business Intelligence Analyst</h3>
                <span className="qualification__subtitle">Shopee - Vietnam</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>
            </div>

            {/* Work 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Analyst</h3>
                <span className="qualification__subtitle">Athena Investment System Inc.</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* Line removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;