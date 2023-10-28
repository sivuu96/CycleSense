import SideNav from "../components/SideNav"

const DownRep = () => {
    return(
        <div>
        <SideNav />
        <div className="downloadreport">
        <h1>Download your report</h1>
        <p>Press the button to download your report</p>
	    <button type="button" className="Downloadbtn">Download</button>
        
        </div>
        
        </div>
    )
}
export default DownRep