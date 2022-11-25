import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
// import rect_1 from '../assets/rect.png'
// import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
// import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
// import Tweet from '../components/Tweet';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SocialCard from '../css/SocialCard';

const Contact = ({ isActive, setActive }) => {
    useEffect(() => {
        setActive('Contact')
    }, [setActive])
    return (
        <div className='page_'>
            <div className='sidebar_'>
                <Sidebar isActive={isActive} setActive={setActive} />
            </div>
            <div className='component_'>
                <div className='home_section'>
                    <div className='section_heading'>
                        <h1>University of  Albama <br /> Cryptocurrency Club</h1>
                    </div>
                    <div className='social_cards'>
                        <SocialCard title='Twitter' src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png' link='' />
                        <SocialCard title='Facebook' src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png' link='' />
                        <SocialCard title='Linkedln' src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw' link='' />
                        <SocialCard title='Email' src='https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png' link='' />
                        {/* <SocialCard title='Location' src='https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png' link='' />
                        <SocialCard title='Location' src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png' link='' /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

/*

 <div className='home_section'>
                    <div className='section_heading'>
                    <h1>University of  Albama <br /> Cryptocurrency Club</h1>
                    </div>
                    <p>200 tweets</p>
                    <div>
                        <img src={rect_1} alt='section' />
                    </div>
                    <div className='section_heading'>
                        <h1>University of <br /> Albama</h1>
                    </div>
                    <div>
                        <p>@alabana_club</p>

                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non nisi quod laboriosam quo vel dolores blanditiis adipisci eum aliquid nostrum beatae nesciunt amet, qui praesentium voluptatem ipsam optio tempore.</p>
                    </div>
                    <div>
                        <div>
                            <SchoolOutlinedIcon /> <p>Education</p>
                        </div>
                        <div>
                            <AddLocationOutlinedIcon /><p>University of Alabama Club</p>
                        </div>
                        <div>
                            <AssignmentOutlinedIcon /><p>Joined September 2021</p>
                        </div>
                    </div>
                    <div>
                        <p><label>140</label> Following</p>
                        <p><label>150</label> Followers</p>

                    </div>

                    <div>
                        <p>Tweets</p>
                        <p>Tweets & replies</p>
                        <p>Media</p>
                        <p>Likes</p>
                    </div>

                    <div>
                        <div>
                            <div>
                                <PushPinOutlinedIcon />
                                <p>Tweet & replies</p>
                            </div>

                            <Tweet />
                        </div>
                        <div>
                            <div>
                                <PushPinOutlinedIcon />
                                <p>Tweet & replies</p>
                            </div>
                            <Tweet />
                        </div>
                    </div>

                </div>
            </div>

*/