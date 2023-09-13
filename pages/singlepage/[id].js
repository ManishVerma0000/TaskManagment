import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import axios from 'axios';
const CustomTable = ({ }) => {
    const router = useRouter();
    const { id } = router.query;
    const [result, setResult] = useState({})
    const [email, setEmail] = useState()
    const [sender, setSender] = useState()
    const [body, setBody] = useState()
    const [Recivied, setRecivied] = useState()
    const [Subject, setSubject] = useState()
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:5000/resource/${id}`).then((res) => {
                const data = JSON.parse(res.data);
                console.log(data)
                if (res) {
                    setResult(data.data)
                    setEmail(data['Sender Email Address'])
                    data['Sender Email Address'].includes("@") ? setEmail(data['Sender Email Address']) : setEmail("Email are in forms of group")
                    setSender(data['Sender'])
                    setBody(data['Body'])
                    setSubject(data['Subject'])
                    // new Date(data['Received Time']).toLocaleDateString();
                    setRecivied(new Date(parseInt(data['Received Time'])).toDateString())
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [id])

    console.log(email, 'this is the baue')

    return (
        <div className="custom-table" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <table style={{ width: "100vw" }}>
                <thead>
                    <tr>
                        <th>Email Address</th>
                        <th>User Name</th>
                        <th>Subject </th>
                        <th>Message</th>
                        <th>Attachments</th>
                        <th>Assigned To  </th>
                        <th>Recivied Date </th>
                        {/* <th>Reply to The Email </th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: 300 }}>{email}</td>
                        <td>{sender}</td>
                        <td>{Subject}</td>
                        <td style={{ width: 500 }}>{body}</td>
                        <td>SKAPS</td>
                        <td style={{ width: 300 }}>
                            <select style={{ border: "2px solid black", height: 40, width: "200px" }}>
                                <option>
                                    SELECT
                                </option>
                                <option>
                                    Deepak
                                </option>
                                <option>
                                    Vrushali
                                </option>
                                <option>
                                    Hitesh
                                </option>

                            </select>

                        </td>
                        <td>{Recivied}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
