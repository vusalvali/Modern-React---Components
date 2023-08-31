function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  //   const renderedRows = data.map((fruit) => {
  //     return (
  //       <tr className="border-b" key={fruit.name}>
  //         <td className="p-3">{fruit.name}</td>
  //         <td className="p-3">
  //           <div className={`p-3 m-2 ${fruit.color}`}></div>
  //         </td>
  //         <td className="p-3">{fruit.score}</td>
  //       </tr>
  //     );
  //   });

  // const renderedRows = data.map((fruit) => {
  //     return (
  //       <tr className="border-b" key={fruit.name}>
  //         <td className="p-3">{config[0].render(fruit)}</td>
  //         <td className="p-3">
  //         {config[1].render(fruit)}
  //         </td>
  //         <td className="p-3">{config[2].render(fruit)}</td>
  //       </tr>
  //     );
  //   });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });
 

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {/* <th>Fruit</th>
          <th>Color</th>
          <th>Score</th> */}
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
