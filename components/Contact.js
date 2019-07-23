const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="https://formspree.io/hello@thecodersguild.org.uk" >
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:hello@thecodersguild.org.uk">hello@thecodersguild.org.uk</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>0113 460 1024</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span><a href="https://goo.gl/maps/UepHrDsXD962" title="map and directions">Duke Studios</a><br />
                        3 Sheaf St<br />
                        Leeds LS10 1HD</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
