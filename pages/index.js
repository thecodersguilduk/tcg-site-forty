import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">

        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Our Work</h2>
            </header>
            <p>
            Promoting inclusion, diversity and equality through expert training, coaching and CPD opportunities. A safe space offering community-driven, peer-reviewed and open-source knowledge share.
            </p>
            <p>
            We are best known for creating the nations first industry led digital apprenticeship. We are following on the success of this programme with apprenticeships in Software Testing, Data Analysis and Digital Marketing. We also provide CPD training and coaching for individuals and teams as well as consultancy and development of bespoke training programmes.
            </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <Link href="https://webdevapprentice.uk/">
              <a className="image">
                <img
                  src="/static/images/web-dev-apprentice.png"
                  alt="Screenshot of Web Dev Apprentice website - front page"
                />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Web/App Dev Apprenticeship</h3>
                </header>
                <p>
                  Technical apprenticeship in software development. All training
                  devised and delivered by professional developers, many of them
                  experts in their field.
                </p>
                <ul className="actions">
                  <li>
                    <Link href="https://webdevapprentice.uk/">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="https://curriculum.thecodersguild.org.uk/">
              <a className="image">
                <img
                  src="/static/images/curriculum.png"
                  alt="Screenshot of front page of curriculum site"
                />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Industry Led Curriculum</h3>
                </header>
                <p>
                  Lesson plans, seminars, webinars, workshops and field trips
                  all under constant review and development by prominent
                  industry professionals.
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/thecodersguilduk/wda-curriculum">
                      <a className="button">View on GitHub</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        
        
        

        <section id="one" className="tiles">
          <article
            style={{
              backgroundImage: `url('/static/images/dan-training.jpg')`,
            }}
          >
            <header className="major">
              <h3>YouTube</h3>
              <p>Tutorials, Demos and CPD resources</p>
            </header>
            <Link href="https://www.youtube.com/channel/UC_By6GiE5aVoMyoTLr5lGZA">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/github.jpg')` }}
          >
            <header className="major">
              <h3>Github</h3>
              <p>Open Source curriculum and training materials</p>
            </header>
            <Link href="https://github.com/thecodersguilduk">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/linkedin.jpg')` }}
          >
            <header className="major">
              <h3>LinkedIn</h3>
              <p>Rescources and knowledge share for Mentors and Managers</p>
            </header>
            <Link href="https://www.linkedin.com/groups/8324305/">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/slack.jpg')` }}
          >
            <header className="major">
              <h3>Slack</h3>
              <p>Knowledge share and support for developers</p>
            </header>
            <Link href="https://wdanuk.slack.com">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);
