import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";


function Footer(){
        return (

            <div className="footer">
                <div className="download">
                    <span><BsCloudDownload size="20px" /></span>
                     Donwload Results
                </div>
                <div className="pagination">
                    <span className="lessthan">
                        <FaLessThan/>
                    </span>
                    <span className="greaterthan">
                        <FaGreaterThan/>
                    </span>

                </div>
            </div>
        )

}

export default Footer;