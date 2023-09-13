import React from 'react';

const CustomTable = ({ data }) => {
  return (
    <div className="custom-table" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <table style={{ width: "100vw" }}>
        <thead>
          <tr>
            <th>Email Address</th>
            <th>User Name</th>
            <th>Message</th>
            <th>Attachments</th>
            <th>Assigned To  </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SKAPS</td>
            <td>skaps@gmail.com</td>
            <td>email is here</td>
            <td>SKAPS</td>
            <td>
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
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
