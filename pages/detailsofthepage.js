import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FaDownload } from 'react-icons/fa';
const TableContainer = () => {
    var { id } = 2
    const [result, setResult] = useState({})
    const [email, setEmail] = useState()
    const [sender, setSender] = useState()
    const [body, setBody] = useState()
    const [Recivied, setRecivied] = useState()
    const [Subject, setSubject] = useState()
    useEffect(() => {
        console.log(id)
        axios.get(`http://127.0.0.1:5000/resource/${2}`).then((res) => {
            const data = JSON.parse(res.data);
            if (res) {
                setResult(data.data)
                setEmail(data['Sender Email Address'])
                data['Sender Email Address'].includes("@") ? setEmail(data['Sender Email Address']) : setEmail("Email are in forms of group")
                setSender(data['Sender'])
                setBody(data['Body'])
                setSubject(data['Subject'])
                setRecivied(new Date(parseInt(data['Received Time'])).toDateString())
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className='singledetailsoftheemail'>
            <div className='headingoftheemail'>
                <div className='imageofskaps'>
                    <img src='https://skaps.com/wp-content/uploads/2023/02/SkapsLogo_300px-e1692974942849.png' alt='skapslogo' style={{ height: 250, width: 250, borderRadius: 30, margin: 10 }}></img>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <div className='displayemail'>
                            <div className='email' style={{ padding: 30 }}>
                                <div style={{ fontWeight: "bolder", fontSize: 20 }}>Email</div>
                            </div>
                            <div style={{ width: 700, padding: 20 }}>{body}</div>
                        </div>
                    </div>
                    <div className='email'>
                        <div className='displayemail'>
                            <div className='email' style={{ padding: 30 }}>
                                <div style={{ fontWeight: "bolder", fontSize: 20 }}>User Name</div>
                            </div>
                            <div style={{ width: 700, padding: 20 }}>{sender}</div>
                        </div>
                    </div>

                    <div className='email'>
                        <div className='displayemail'>
                            <div className='email' style={{ padding: 30 }}>
                                <div style={{ fontWeight: "bolder", fontSize: 20 }}>Subject</div>
                            </div>
                            <div style={{ width: 700, padding: 20 }}>{Subject}</div>
                        </div>
                    </div>

                    <div className='email'>
                        <div className='displayemail'>
                            <div className='email' style={{ padding: 30 }}>
                                <div style={{ fontWeight: "bolder", fontSize: 20 }}>Attachments</div>

                            </div>
                            <div style={{ width: 700, padding: 20, display: 'flex' }}>
                                Attachments
                                <div style={{ marginLeft: 20 }} onClick={(e) => {
                                    alert("clicked")
                                }}>
                                    <FaDownload />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='email'>
                        <div className='displayemail'>
                            <div className='email' style={{ padding: 30 }}>
                                <div style={{ fontWeight: "bolder", fontSize: 20 }}>Recivied Date</div>
                            </div>
                            <div style={{ width: 700, padding: 20 }}>{Recivied}</div>
                        </div>
                    </div>


                    <div className='email'>
                        <div className='displayemail'>
                            <div className='email' style={{ padding: 30 }}>
                                <div style={{ fontWeight: "bolder", fontSize: 20 }}>Assigned TO </div>
                            </div>
                            <div style={{ width: 700, padding: 20 }}>
                                <select style={{ width: 200, height: 50, border: "2px solid black" }}>
                                    <option>Choose</option>
                                    <option>Vrushali</option>
                                    <option>Deepak</option>
                                    <option>Hitesh Maurya</option>
                                    <option>Manish</option>
                                </select>
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default TableContainer;
