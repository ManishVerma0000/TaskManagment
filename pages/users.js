import React from "react";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios"
import cogoToast from "cogo-toast";
const users = () => {
  const [result, setResult] = useState([]);
  const [attributes, setAttributes] = useState()
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/totalAssign").then((res) => {
      const data = JSON.parse(res.data.data);
      setResult(data)
    }).catch((err) => {
      cogoToast.warn('error occurs')
    })
  }, [])

  return <Layout>
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">Sample Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Sender</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Recivied Date</th>
              <th className="px-4 py-2">Assigned To</th>
            </tr>
          </thead>
          <tbody>{
            result.map((res, index) => {
              return (
                <tr key={index}>
                  <td className="border px-4 py-2" onClick={(e) => {
                    setAttributes(e.target)
                  }} >{index}</td>
                  <td className="border px-4 py-2"
                  >{res['sender']}</td>
                  <td className="border px-4 py-2">{res['Subject']}</td>
                  <td className="border px-4 py-2">{res['Recivied']}</td>
                  <td className="border px-4 py-2">{res['assignedTo']}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  </Layout>;
};

export default users;
