import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

function Table({ arr }) {
  const columns = [
    {
      name: "Cubic",
      selector: "cubic",
      sortable: true,
    },
    {
      name: "Length",
      selector: "length",
      sortable: true,
    },
    {
      name: "Width",
      selector: "width",
      sortable: true,
    },
    {
      name: "Height",
      selector: "height",
      sortable: true,
    },
  ];

  const data = arr.map((item) => {
    return {
      cubic: item.cubic,
      length: item.length,
      width: item.width,
      height: item.height,
    };
  });

  return (
    <div className="main">
      {/* <DataTableExtensions
        columns={columns}
        data={data}
        filter={true}
        print={false}
        export={false}
      > */}
      {console.log(data)}
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
      {/* </DataTableExtensions> */}
    </div>
  );
}
export default Table;
