import React from "react";
import capitalize from '../../service/service'

function Thead(props) {
  const { data } = props;
  return data.length ? (
    <thead>
      <tr>
        {data
          .map(item => Object.keys(item))[0]
          .map((item, i) => (
            <th scope="col" key={i}>
              {capitalize(item)}
            </th>
          ))}
      </tr>
    </thead>
  ) : (
    <tbody>
      <tr>
        <th>Loading...</th>
      </tr>
    </tbody>
  );
}

export default Thead;
