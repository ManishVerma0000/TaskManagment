import React from 'react'
import Layout from '../components/Layout'

const tutorials = () => {
  return (
    <Layout>
      <div className="table-container">
        <h2>Sample Table</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default tutorials