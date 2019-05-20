import React from "react";

function Table(props) {
    const { data } = props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {data
            .map(item => Object.keys(item))[0]
            .map((item, i) => (
              <th scope="col" key={i}>
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data
          .map(item => Object.entries(item))
          .map((row, i) => (
            <tr key={i}>
              {row.map((item, i) => (
                <td key={i}>{item[1]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
