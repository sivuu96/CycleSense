import {Link} from 'react-router-dom'

const Profile = () => {
    return(
    <div class="sidenav">
     <img class="logo" src="logo.jpeg" alt="CycleSense"/>
     <Link to='/profile'>
     <a class="item dumbb" href="profile.html"><img src="prof.png"/>Profile</a>
     </Link>
     <Link to='/setalarm'>
     <a class="item" href="alarm.html"><img src="alar.png"/>Set Alarm</a>
     </Link>
     <Link to='/downrep'>
     <a class="item" href="download.html"><img src="down.png"/>Download Report</a>
     </Link>
     <Link to='/editprof'>
     <a class="item" href="edit.html"><img src="edit.png"/>Edit Profile</a>
     </Link>
     <Link to='/delprof'>
     <a class="item" href="delete.html"><img src="delt.png"/>Delete Profile</a>
     </Link>
     <Link to='/aboutus'>
     <a class="item" href="about.html"><img src="abtu.png"/>About Us</a>
     </Link>
    </div>
    )
}
export default Profile