import React from "react";
import Thead from "../Thead/Thead";
import DATA from "../../data/data";

function Table(props) {
  const { data } = props;
  return (
    <table className="table table-striped">
      <Thead data={DATA} />
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
      ) : (
        null
      )}
    </table>
  );
}

export default Table;
