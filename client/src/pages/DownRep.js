import SideNav from "../components/SideNav"
import { usePeriodContext } from "../hooks/usePeriodContext.js"
import { useAuthContext } from "../hooks/useAuthContext";
import React from 'react';
import html2pdf from 'html2pdf.js';

const DownRep = () => {

    const {period} = usePeriodContext()
    const {user} = useAuthContext();

    const downloadPdf = () => {
        const element = document.createElement('div');
        element.innerHTML = `
            <h1 style="text-align: center; font-weight: bold;">CycleSense Report</h1>
            <p>Hi <b>${user.first_name} ${user.last_name}!</b></p>
            <p>Your average cycle length is ${period[0].length} days.</p>
            <p>Your latest symptoms: <b>${period[0].symptoms}</b></p>
            <p>Your latest flow type: <b>${period[0].menstrual_flow}</b></p>
            <p>Your moods during then: <b>${period[0].mood}</b></p>

        `;
        const opt = {
            margin: 1,
            filename: 'download.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    };

    return(
        <div>
            <SideNav />
            <div className="downloadreport">
                <h1>Download your report</h1>
                <p>Press the button to download your report</p>
                <button onClick={downloadPdf} type="button" className="Downloadbtn">Download PDF</button>
            </div>
        </div>
    )
}
export default DownRep