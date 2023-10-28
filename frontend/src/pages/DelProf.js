import SideNav from "../components/SideNav"

const DelProf = () => {
    return(
        <div>
        <SideNav />
        <div className="downloadreport">
        <h1>Delete your profile</h1>
        <p>Are you sure you want to delete the profile?</p>
	    <button type="button" className="deletebtn1">Yes</button>
        <button type="button" className="deletebtn2">No</button>
        
        </div>
        </div>
    )
}
export default DelProf