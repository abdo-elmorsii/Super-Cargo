import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { RiDeleteBin7Fill } from "react-icons/ri";

function Table({ arr, deletefun }) {
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
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      selector: "delete",
      sortable: true,
    },
  ];

  const data = arr.map((item) => {
    return {
      cubic: item.cubic,
      length: item.length,
      width: item.width,
      height: item.height,
      title: item.title,
      id: item.id,  
      delete: (
        <RiDeleteBin7Fill
          style={{ cursor: "pointer" }}
          onClick={() => {
            deletefun(item.id);
          }}
        />
      ),
    };
  });

  console.log(data);

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
