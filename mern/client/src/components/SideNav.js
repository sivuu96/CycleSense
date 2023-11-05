import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
    const location = useLocation();

    return (
        <div className="sidenav">
            <br /><br />
            <br /><br />
            <br /><br />
            <Link to='/profile'>
                <span className={location.pathname === '/profile' ? "item active" : "item"}><img src="prof.png" />Profile</span>
            </Link>
            <Link to='/setalarm'>
                <span className={location.pathname === '/setalarm' ? "item active" : "item"}><img src="alar.png" />Set Alarm</span>
            </Link>
            <Link to='/download'>
                <span className={location.pathname === '/download' ? "item active" : "item"}><img src="down.png" />Download Report</span>
            </Link>
            <Link to='/edit'>
                <span className={location.pathname === '/edit' ? "item active" : "item"}><img src="edit.png" />Edit Profile</span>
            </Link>
            <Link to='/delete'>
                <span className={location.pathname === '/delete' ? "item active" : "item"}><img src="delt.png" />Delete Profile</span>
            </Link>
            <Link to='/aboutus'>
                <span className={location.pathname === '/aboutus' ? "item active" : "item"}><img src="abtu.png" />About Us</span>
            </Link>
        </div>
    );
}

export default SideNav;