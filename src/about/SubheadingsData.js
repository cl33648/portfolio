import profileIcon from "../assets/profile.png"
import univIcon from "../assets/UT_Austin_logo.png";
import aaIcon from "../assets/aa.png";
import byIcon from "../assets/blueyonder.png";
import hyundaiIcon from "../assets/hyundai.png";

const SubheadingsData = {
    1: [
        {
            title: "About Me",
            content: (
                <>
                    <img src={profileIcon} alt="Conrad Lee" className="sub-container-icon"/>
                    <div className="p-container">
                        <p>I am a persevering, self-taught individual with experiences in IT profession, particular in software development, analysis and support.</p>
                        <p>Throughout the demonstrated work history, I have acquired skills in Spring boot, Java, Kubernetes, SQL, HTML/CSS, Angular, and more.</p>
                        <p>I put value in consistentency and discipline, I aspire to be a better version of myself through showing up, learning, and taking small steps each and every day. </p>
                    </div>
                </>
            )
        }
    ],
    2: [
        {
            title: "2016 Bachelor's Degree",
            content: (
                <>
                    <img src={univIcon} alt="University of Texas at Austin" className="sub-container-icon"/>
                    <div className="p-container">
                        <p>Mechanical Engineering</p>
                        <p>Cockrell School of Engineering @ University of Texas at Austin</p>
                    </div>
                </>
            )
        }
    ],
    3: [
        {
            title: "2021 Software Developer",
            content: (
                <>
                    <img src={aaIcon} alt="American Airlines" className="sub-container-icon"/>
                    <div className="p-container">
                        <p>American Airlines</p>
                        <p>Developed Spring Java backend and maintained 24/7 operation of Retrieve Reservation Service, the vital service responsible for delivering the airline's customer reservation information.</p>
                        <p>Developed aa.com's view-reservation-page for unaccompanied minor reservations, utilizing Angular/Javascript.</p>
                        <p>Bridged the gap with the airline business requirements, by consistently delivering reliable software enhancements and bug fixes.</p>
                        <p>Coordinated IBM Cloud's Kubernetes components and pods, which serve 25 million+ traffic daily.</p>
                        <p>Monitored Dynatrace & Apigee dashboards for Retrieve Reservation Service's response times, failure rates, resource consumptions, and more.</p>
                        <p>Improved resiliency by introducing caching to Retrieve Reservation Service, to achieve faster API response times.</p>
                    </div>
                </>
            )
        },
        {
            title: "2020 Support Engineer",
            content: (
                <>
                    <img src={byIcon} alt="Blue Yonder" className="sub-container-icon"/>
                    <div className="p-container">
                        <p>Blue Yonder</p>
                        <p>Delivered resolutions to countless incoming inquiries and problems that customers report on Transportation Management System products, and documented articles for each solution delivered.</p>
                        <p>Utilized SQL, debug logs, and webservice calls to effectively replicate the error and test cases.</p>
                        <p>Analyzed server logs and Oracle data schemas on different levels of hosted Cloud environments (Test, QA, Dev, and Production).</p>
                        <p>Collaborated, shared detail-oriented findings, and pinpointed the problem's root cause with many software developers, to deliver efficient resolutions that meet each different customer's business needs, in a timely manner.</p>
                    </div>
                </>
            )
        },
        {
            title: "2017 Business Logics IT Programmer",
            content: (
                <>
                    <img src={hyundaiIcon} alt="Hyundai U & I" className="sub-container-icon"/>
                    <div className="p-container">
                        <p>Hyundai U&I</p>
                        <p>Programmed backend servers of numerous UI menus, to ensure accurate/reliable equipment and shipping information 24/7.</p>
                        <p>Managed and connected database by implementing Java/JDBC, SQL, and IBM RPG.</p>
                        <p>Established successful EDI connections with terminals and clients, used for exchanging Hyundai's fleet and equipment move status.</p>
                    </div>
                </>
            )
        },
    ],
}

export default SubheadingsData;
