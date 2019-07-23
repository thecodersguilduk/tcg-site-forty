import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/static/docs/tcg_privacy_policy.pdf"><a><span onClick={props.onToggleMenu}>Privacy Policy</span></a></Link></li>
                <li><Link href="/static/docs/tcg_complaints_policy.pdf"><a><span onClick={props.onToggleMenu}>Complaints Policy</span></a></Link></li>
                <li><Link href="//static/docs/tcg_equality_diversity_policy.pdf"><a><span onClick={props.onToggleMenu}>Equality &amp; Diversity Policy</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
