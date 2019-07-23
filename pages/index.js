import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">

            <section id="two">
                <div className="inner">
                    <header className="major">
                        <h2>Our Work</h2>
                    </header>
                    <p>Promoting inclusion, diversity and equality through expert training, coaching and CPD opportunities for software development. A safe space offering community-driven, peer-reviewed and open-source knowledge share.</p>
                    <ul className="actions">
                        <li><Link href="#one"><a className="button next">Find out more</a></Link></li>
                    </ul>
                </div>
            </section>
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/dan-training.jpg')`}}>
                        <header className="major">
                            <h3>YouTube</h3>
                            <p>Tutorials, Demos and CPD resources</p>
                        </header>
                        <Link href="https://www.youtube.com/channel/UC_By6GiE5aVoMyoTLr5lGZA"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/github.jpg')`}}>
                        <header className="major">
                            <h3>Github</h3>
                            <p>Open Source curriculum and training materials</p>
                        </header>
                        <Link href="https://github.com/thecodersguilduk"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/london-bootcamp.jpg')`}}>
                        <header className="major">
                            <h3>Web Dev Apprenticeship</h3>
                            <p>Training the next generation of developers</p>
                        </header>
                        <Link href="https://webdevapprentice.uk/"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/linkedin.jpg')`}}>
                        <header className="major">
                            <h3>LinkedIn</h3>
                            <p>Rescources and knowledge share for Mentors and Managers</p>
                        </header>
                        <Link href="https://www.linkedin.com/groups/8324305/"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/slack.jpg')`}}>
                        <header className="major">
                            <h3>Slack</h3>
                            <p>Knowledge share and support for developers</p>
                        </header>
                        <Link href="https://wdanuk.slack.com"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/hippo-js.jpg')`}}>
                        <header className="major">
                            <h3>Web Dev Meet-up</h3>
                            <p>Lunch and Learn sessions in Leeds</p>
                        </header>
                        <Link href="https://leedswebdev.org/"><a className="link primary"></a></Link>
                    </article>
                </section>
            </div>

        </div>
    </Layout>
)
