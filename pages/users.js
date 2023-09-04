import React from "react";
import Layout from "../components/Layout";

const users = () => {
  return <Layout>
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">Sample Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Admin</td>
              <td className="border px-4 py-2">Skaps@gamil.com</td>
              <td className="border px-4 py-2">Skaps@gamil.com</td>
              <td className="border px-4 py-2">Skaps@gamil.com</td>
              <td className="border px-4 py-2">
                <button className="bg-black-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded">
                  Delete
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded">
                  Completed
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </Layout>;
};

export default users;
