import React from "react";
import "./About.css"
import { Link } from "react-router-dom";


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div id="about-wrapper">
                <h1 id="about-us-header">Who We Are</h1>

                <section className="worker-bio" id="judy-bio">
                    <h2>Judy Chaitain</h2>
                    <p>Judy is a Certified Public Accountant (Licensed State of Georgia) with over 25 years of financial
                        accounting experience. Her experience has a very diverse base covering many industries:
                        manufacturing, construction, food production, hospitality, education, lawn care and not-for-profits.
                    </p>
                    <p>
                        She will work with you to address any concerns or requirements you have including General
                        Accounting, Financial Statement Preparation, Payroll, Cash Management, Budget Preparation and
                        Income Tax Preparation.
                    </p>
                    <p>
                        Judy is a Certified QuickBooks Online ProAdvisor.
                    </p>

                </section>
                <div className="img-box">
                    <img src="https://via.placeholder.com/200x300.jpg" />
                </div>

                <div className="img-box">
                    <img src="https://via.placeholder.com/200x300.jpg" />
                </div>
                <section className="worker-bio" id="valerie-bio">

                    <h2> Valerie Chaitain </h2>
                    <p>
                        Valerie is a Senior Accountant with over 25 years experience in a variety of industries including
                        manufacturing, healthcare, property management, not-for profits and small business accounting.
                    </p>
                    <p>
                        She has strong IT skills and an extensive background in GAAP accounting. With proficiency in
                        QuickBooks Online, QuickBooks Enterprise and Peachtree Accounting, she can help you set up
                        your accounting system.
                    </p>
                </section>

            </div>


        )
    }

}

export default About;