import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div class="container">
                <section id="home">
                    <img id="judy" src="/assets/judy.jpg" />
                    <img id="quickbooks-logo" src="/assets/qblogo.jpg"/>
                    <div id="title">
                        <h2> JC Accounting & Taxation Services </h2>
                        <h3>Your Local Accounting Solution </h3>
                        <p>At JC Accounting & Taxation Services LLC, we keep your business financial records organized, we process your payroll and file your taxes on time.
                        </p>
                        <p>Let us take care of your books so you can focus on managing your business!
                        </p>
                    </div>
                </section>


                <aside className="bullet-aside">
                    <h3>Why Outsource Your Accounting & Bookkeeping Services?</h3>
                    <ul type="square">
                        <li>Saves your business time</li>
                        <li>Saves your business money</li>
                        <li>Keep up-to-date information</li>
                        <li>Ready for tax time</li>
                        <li>Organized accounting records</li>
                        <li>Eliminate need for full-time bookkeeper</li>
                    </ul>
                </aside>

                <aside id="business-performance">
                    <h3>Know How Your Business Is Performing At All Times</h3>
                    <p>With our experience we can set up your bookkeeping system specialized for your line of work.
                        In addition, we can maintain your accounts payable, accounts receivable, bank reconcilliation cost
                        and all your financial reporting.</p>

                    <p>By maintaining your accounting records you will save on accountants fee at tax time.</p>
                </aside>

                <aside className="bullet-aside">
                    <h3>Work With Us However Is Most Convenient For You</h3>
                    <ul>
                        <li>
                            On-Site: At Your office, using Your computuer system and software on Your schedule
                            </li>
                        <li>
                            Off-site At Our office, using Our computer system and software of Your choice
                            </li>
                    </ul>
                </aside>

                <section id="what-we-do">
                    <h1><span>What We Do...</span></h1>
                    <p>With our proficiency in Quickbooks Online, Quickbooks Enterprise and Peachtree Manufacturing we are able to provide a wide range of accounting and taxation services to help your business save money and succeed.  </p>
                    <div className="do-cards">
                        <h3>
                            <span>Accounts Payables</span>
                        </h3>
                        <ul>
                            <li>
                                Data Capture
                            </li>
                            <li>
                                Vendor Payments
                            </li>
                            <li>
                                Track Account Balances
                            </li>
                            <li>
                                Vendor File Maintenance
                            </li>
                            <li>
                                Year-End 1099 Preparation
                            </li>
                        </ul>
                    </div>

                    <div className="do-cards">
                        <h3>
                            <span>Accounts Receivables</span>
                        </h3>
                        <ul>
                            <li>
                                Generate Customer Invoices
                            </li>
                            <li>
                                Track Unpaid/Outstanding Balances
                            </li>
                            <li>
                                Assist With Collections
                            </li>
                            <li>
                                Ensure Proper Allocation of Payments
                            </li>
                            <li>
                                Customer File Maintenance
                            </li>
                            <li>
                                Sales Tax Return
                            </li>
                        </ul>
                    </div>

                    <div className="do-cards">
                        <h3>
                            <span>Bank Reconcilliation</span>
                        </h3>
                        <ul>
                            <li>
                                Matching Up Your Bank Statments With Your Books
                            </li>
                            <li>
                                Identify Lost Checks, Lost Deposits and Any Unauthorized Transactions
                            </li>

                        </ul>
                    </div>

                    <div className="do-cards">
                        <h3>
                            <span>Payroll Services</span>
                        </h3>
                        <ul>
                            <li>
                                Complete Payroll Services Off-Site
                            </li>
                            <li>
                                Timely
                            </li>
                            <li>
                                Prompt Payment of Payroll Taxes
                            </li>
                            <li>
                                Monthly, Quarterly & Annual IRS Reports
                            </li>
                            <li>
                                W-2 Preparation
                            </li>
                        </ul>
                    </div>



                    <div className="do-cards">
                        <h3>
                            <span>Monthly Reports</span>
                        </h3>
                        <ul>
                            <li>
                                Income Statement
                            </li>
                            <li>
                                Balance Sheet
                            </li>
                            <li>
                                Cashflow Reports
                            </li>
                            <li>
                                General Ledger Accounting
                            </li>
                            <li>
                                Bring Books to Trial Balance Stage
                            </li>
                        </ul>
                    </div>

                    <div className="do-cards">
                        <h3>
                            <span> Ad Hoc Services</span>
                        </h3>
                        <ul>
                            <li>
                                Budget Preparation
                            </li>
                            <li>
                                Florida Notary
                            </li>
                            <li>
                                Income Tax Preparation
                            </li>

                        </ul>
                    </div>
            </section>
        </div>


            
        )
    }

}

export default Home;