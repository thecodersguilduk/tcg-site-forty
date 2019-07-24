import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>The Coders Guild</title>
                    <meta name="description" content="Promoting inclusion, diversity and equality through expert training, coaching and CPD opportunities for software development. A safe space offering community-driven, peer-reviewed and open-source knowledge share." />
                    <link href="/static/css/skel.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins|Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    <link rel="/static/icons/apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
                    <link rel="/static/icons/apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
                    <link rel="icon" type="image/png" sizes="192x192"  href="/static/icons/android-icon-192x192.png">
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png">
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png">
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png">
                    <link rel="manifest" href="/manifest.json">
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default Layout
