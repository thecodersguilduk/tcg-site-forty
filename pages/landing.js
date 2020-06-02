import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerLanding";

export default () => (
  <Layout>
    <Head>
      <title>Landing Page</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Our Work</h2>
            </header>
            <p>
              Promoting inclusion, diversity and equality through expert
              training, coaching and CPD opportunities for software development.
              A safe space offering community-driven, peer-reviewed and
              open-source knowledge share.
            </p>
            <p>
              We are best known for creating the nations first industry led
              digital apprenticeship. This scheme recently recieved the silver
              award in the <strong>Apprenticeship Of The Year</strong> awards
              for our work improving diversty in the industry. We are following
              on the success of this programme with apprenticeships in Software
              Testing, Data Analysis and Digital Marketing. We also provide CPD
              training and coaching for indivuals and teams as well as
              consultnacy and development of bespoke training programmes.{" "}
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
      </div>
    </div>
  </Layout>
);
