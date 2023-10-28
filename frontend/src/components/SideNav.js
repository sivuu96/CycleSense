import { Link } from "react-router-dom";

const SideNav = () => {
    return(
        <div className="sidenav">
            <Link to="/">
                <img className="logo" src="logo.jpeg" alt="CycleSense"/>
            </Link>
            <Link to='/profile'>
                <span className="item active" href="profile.html"><img src="prof.png"/>Profile</span>
            </Link>
            <Link to='/setalarm'>
                <span className="item" href="alarm.html"><img src="alar.png"/>Set Alarm</span>
            </Link>
            <Link to='/download'>
                <span className="item" href="download.html"><img src="down.png"/>Download Report</span>
            </Link>
            <Link to='/edit'>
                <span className="item" href="edit.html"><img src="edit.png"/>Edit Profile</span>
            </Link>
            <Link to='/delete'>
                <span className="item" href="delete.html"><img src="delt.png"/>Delete Profile</span>
            </Link>
            <Link to='/aboutus'>
                <span className="item" href="about.html"><img src="abtu.png"/>About Us</span>
            </Link>
        </div>
    )
}

export default SideNav