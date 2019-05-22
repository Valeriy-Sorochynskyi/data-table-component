import React from 'react'

function Thead(props) {
  const { data } = props;
    return (
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
    )
}

export default Thead;
