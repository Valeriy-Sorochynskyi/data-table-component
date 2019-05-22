import React from "react";
import Thead from "../Thead/Thead";

function Table(props) {
  const { data, dataFromServer } = props;
  return (
    <table className="table table-striped">
      <Thead data={dataFromServer} />
      {data.length > 0 ? (
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
      ) : null}
    </table>
  );
}

export default Table;
