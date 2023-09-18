import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useRouter } from 'next/router';
export default function Home() {
  const [attributes, setAttributes] = useState()
  const tdElement = attributes
  if (tdElement) {
    const data = tdElement.textContent.trim();
    console.log(data, 'this si the result');
  }


  const [result, setResult] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/result').then((res) => {
      const data = JSON.parse(res.data.data);
      setResult(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const functionrender = () => {
    if (data) {
      window.location.href = `/singlepage/${data}`
    }

  }

  return <Layout>
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">IT SKAPS</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">SrNo.</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>{
            result.map((res, index) => {

              return (
                <tr key={index}>
                  <td className="border px-4 py-2" onClick={(e) => {
                    setAttributes(e.target),
                      functionrender()
                  }} >{index}</td>
                  <td className="border px-4 py-2"
                  >{res['Sender']}</td>
                  <td className="border px-4 py-2">{res['Subject']}</td>
                  <td className="border px-4 py-2">{res['Sender Email Address'].includes("@") ? res['Sender Email Address'] : "invalid email format"}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  </Layout>;
}
