import React from 'react';
import Navv from './Navv'
import img2 from './images/Solar5.jpg'
import img3 from './images/Solar6.jpg'
import img4 from './images/Solar7.jpg'
import Contact from './Contact';


export default function Home() {



    return (
        <>
            <div id='Home'>
                <Navv />

                <div className='container-fluid Home pb-5' style={{ color: 'white', marginTop: '80px' }} >
                    <div className="container d-flex">
                        <div>
                            <h1 style={{ marginTop: '100px', fontSize: '70px', fontWeight: '600' }}>It’s Time <br /> for a Change</h1>
                            <p className='mt-5' >Generate and store your own power. Start saving today using clean, eco-friendly energy.</p>
                            <br /><br />
                            <a href="#0" class="button12">
                                <em> </em>
                                <span>
                                    Learn How
                                </span>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="container-fluid mt-3 mb-3 " style={{ backgroundColor: 'black', color: 'white', paddingBottom: '50px' }} >
                    <div className=' container'>
                        <h3 className='pt-5'>Get a No-Obligation Quote Today!</h3>
                        <div className='pt-5'>
                            <input className='input' type="text" placeholder='First Name*' required />
                            <input className='input' type="text" placeholder='Last Name*' required />
                            <input className='input' type="email" placeholder='Email*' required />
                            <input className='input' type="tel" placeholder='Phone number*' required />
                            <input className='input' type="text" placeholder='Address' />
                            <button class="btn bt1 m-3"><span>Submit</span></button>
                        </div>

                    </div>
                </div>

                <div className="container-fluid mt-3 " style={{ background: 'aliceblue' }}>
                    <div className="container pt-5 pb-5" >
                        <h1>WHY SHOULD YOU SWITCH?</h1><br />
                        <button class="btn"><span>Learn How</span></button>
                    </div>
                </div>


                <div className="container-fluid mt-3 d-flex " >
                    <div className="container ">
                        <div className="row " >
                            <div className='col-lg-4 col-md-4 col-sm-12 h-auto    no1 mt-3' >
                                <div className="p-5 ">
                                    <h3 >Sustainable & <br /> Renewable Energy</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 h-auto   no2 mt-3 '>
                                <div className="p-5 text-light " style={{ marginTop: '150px', }}>
                                    <h3 >
                                        Safe & Reliable. <br />
                                        Take Control of Your Power Production</h3>
                                    <p className='pt-4 ' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.  </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 h-auto   no3 mt-3' >
                                <div className="p-5">
                                    <h3 >Great Savings & <br /> Return on Investment</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-3" style={{ background: 'aliceblue' }}>
                    <div className="container pt-5 pb-5" >
                        <h1> How Solar Energy Works</h1>
                    </div>
                </div>



                <div className="container-fluid mt-3 mb-4">

                    <div className='d-flex row h-auto' style={{ height: '200px', margin: '10px' }} >
                        <div className='p-5 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center text-center no4 mt-2' > <div> <h1>200k</h1><p>Happy Customar</p></div></div>
                        <div className='p-5 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center text-center no4 mt-2' >  <div> <h1>3.1 Billion</h1>          <p>KwH of Clean Energy</p></div> </div>
                        <div className='p-5 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center text-center no4 mt-2' >   <div> <h1>2.4 Million</h1>          <p>Metric Tons of Carbon Emissions Avoided</p></div> </div>
                    </div>

                </div>

                <div className="container-fluid im1 pb-5 h-auto " style={{ height: '550px' }}>
                    <div className="container">
                        <div className="row" >
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <p className='text-light' style={{ textAlign: 'justify', marginTop: '90px' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.

                                </p>
                                <p className='text-light' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-3 mb-5 grey">
                    <div className="container pt-5 pb-5" >
                        <h1>
                            Our Services</h1>
                        <p>We make going solar easy, so you’ll get a better energy service at a better price.</p>
                    </div>
                </div>

                <div className="container-fluid mt-3 d-flex " >
                    <div className="container ">
                        <div className="row  " >
                            <div className='col-lg-4 col-md-4  col-sm-12  h-auto no5  mt-3' >
                                <div className="p-5 " style={{ marginTop: '80px' }}>
                                    <h3 >Sustainable & <br /> Renewable Energy</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4  col-sm-12 h-auto  no6 mt-3'>
                                <div className="p-5 text-light " style={{ marginTop: '80px' }}>
                                    <h3 >
                                        Safe & Reliable. <br />
                                        Take Control of Your Power Production</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.  </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 h-auto  no7 mt-3' >
                                <div className="p-5" style={{ marginTop: '80px' }}>
                                    <h3 >Great Savings & <br /> Return on Investment</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-3 mb-5" style={{ background: 'aliceblue' }}>
                    <div className="container pt-5 pb-5" >
                        <h1>See Our Work</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className='col-lg-5 col-md-5 col-sm-12 mt-5' > <img src={img2} className='img-fluid img w-100' alt="" /></div>
                        <div className='col-lg-7 col-md-7 col-sm-12 mt-2 d-flex justify-content-center alu\ign-items-center text-center'>
                            <div>
                                <img src={img3} className='img-fluid mb-5 mt-4 img' width={'70%'} alt="" />

                                <img src={img4} className='img-fluid  img' width={'70%'} alt="" />
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-3" style={{ background: 'aliceblue' }}>
                    <div className="container pt-5 pb-5" >
                        <h1> How Solar Energy Works</h1>
                    </div>
                </div>
                <div className="container-fluid mt-3 mb-5 d-flex " >
                    <div className="container ">
                        <div className="row " >
                            <div className='col-lg-4 col-md-4 col-sm-12  h-auto  no8 mt-3' >
                                <div className="p-5 text-light " style={{ marginTop: '200px' }}>
                                    <h3 >Sustainable & <br /> Renewable Energy</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 h-auto  no9 mt-3'>
                                <div className="p-5 text-dark " >
                                    <h3 >
                                        Safe & Reliable. <br />
                                        Take Control of Your Power Production</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.  </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 h-auto  no10 mt-3' >
                                <div className="p-5 text-light " style={{ marginTop: '200px' }}>
                                    <h3 >Great Savings & <br /> Return on Investment</h3>
                                    <p className='pt-4' style={{ textAlign: 'justify' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Contact />
            </div>
        </>
    )
}
