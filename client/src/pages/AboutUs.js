import SideNav from "../components/SideNav"

const AboutUs = () => {
    return(
        <div>
        <SideNav />
        <div className="aboutus">
        <h1>About Us</h1>
        <p>CycleSense is a comprehensive period tracker website designed       
           to empower individuals to monitor, understand, and take control 
           of their menstrual cycles. The team: <br/>

        </p>
        <ul>
             <li>J Sivsankar</li>
             <li>Gowri B Kumar</li>
             <li>Sanil Mishra</li>
             <li>Juby Johnson</li>
             <li>Solanki Himalay Harjivan</li>
        </ul>
        <p>For further details, Contact us at : cyclesense.notif@gmail.com</p>
        </div>

        </div>
    )
}
export default AboutUs