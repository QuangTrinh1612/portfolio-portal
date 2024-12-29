import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  return (
    <section className="qualification">
      <h2 className="section__title">Experience</h2>
      <div className="underline"></div>

      <div className="qualification__container container">
        <div className="qualification__sections">
          {/* Work Section */}
          <div className="qualification__content qualification__active" data-content id="work">
          <div className="qualification__data qualification__left">
              <div>
                <h3 className="qualification__title">Solution Architect</h3>
                <span className="qualification__subtitle">Rackspace Technology</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon"  />
                  2023 - Current
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Lead Data Engineer</h3>
                <span className="qualification__subtitle">Rackspace Technology</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                  2021 - 2023
                </div>
              </div>
            </div>
            
            {/* Work 1 */}
            <div className="qualification__data qualification__left">
              <div>
                <h3 className="qualification__title">Senior Data Engineer</h3>
                <span className="qualification__subtitle">Rackspace Technology</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon"  />
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
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                  2019 - 2020
                </div>
              </div>
            </div>

            {/* Work 3 */}
            <div className="qualification__data qualification__left">
              <div>
                <h3 className="qualification__title">Data Analyst</h3>
                <span className="qualification__subtitle">Athena Investment System Inc.</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                  2018 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Relationship Manager</h3>
                <span className="qualification__subtitle">Vietcombank</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                  2017 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data qualification__left">
              <div>
                <h3 className="qualification__title">Audit Associate</h3>
                <span className="qualification__subtitle">Deloitte</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                  2014 - 2017
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