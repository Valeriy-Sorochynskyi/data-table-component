import React from 'react'

function Thead(props) {
  const { data } = props;
    return (
      data.length > 0 ? (
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
      ) : <tbody><tr><th>Loading...</th></tr></tbody>
    )
}

export default Thead;
