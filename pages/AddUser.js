import React from 'react'
import Layout from '../components/Layout'
import '../styles/Home.module.css'

const posts = () => {
    return (
        <Layout>
            <div className='addusertopcontianer'>
                <div className='innercoontainerofadduser'>
                    <div className='forinputtheuser'>
                        <input className='addthsuserusernameinputtag' placeholder='Enter the username'></input>
                    </div>

                    <div className='forinputtheuser'>
                        <input className='addthsuserusernameinputtag' placeholder='enter the Password'></input>
                    </div>


                    <div className='btnfortheadduser'>
                        <button className='btnofthesubmit'>
                          Submit
                        </button>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default posts