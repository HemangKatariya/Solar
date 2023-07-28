import React from 'react'
import Navv from './Navv'
import Contact from './Contact'

export default function About() {
    return (
        <>
            <Navv />

            <div className='container-fluid About pb-5 ' style={{ color: 'black' }} >
                <div className="container d-flex">
                    <div>
                        <h1 style={{ marginTop: '150px', fontSize: '70px', fontWeight: '600' }}>We Are Go Solar</h1>
                        <p className='mt-5  text-justify' >Commercial & residential solar panel installations. </p>
                        <br /><br />

                    </div>
                </div>
            </div>

            <div className="container-fluid mt-3 mb-3" style={{ background: 'aliceblue' }}>
                <div className="container pt-5 pb-5" >
                    <h1> How Solar Energy Works</h1>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: 'black', color: "white" }}>
                <div className="container d-flex pt-5 pb-5">
                    <div className="row">
                        <div className='col-lg-7 col-md-7 col-sm-12'>
                            <p className='pt-3'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <p className='pt-3'>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are

                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-3 mb-3" style={{ background: 'aliceblue' }}>
                <div className="container pt-5 pb-5" >
                    <h1>Careers</h1>
                </div>
            </div>

            <div className="container-fluid mt-3 d-flex mb-3 abc h-auto">
                <div className="container  d-flex justify-content-center align-items-center">
                    <div className="row">

                        <div className='col-lg-6 col-md-6 col-sm-12 mt-3 m1 mt-2 p-5'>
                            <h3>
                                Invest in Your Future</h3>
                            <p className='w-75 pt-3 text-justify'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

                            </p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 mt-3 m1 mt-2 p-5'>
                            <h3>Join the Family</h3>
                            <p className='w-75 pt-3 text-justify'>A change is coming, you can be a part of it.

                                Contact us at info@mysite.com to learn about future job opportunities.</p>
                        </div>

                    </div>
                </div>
            </div>



            <Contact />
        </>
    )
}
