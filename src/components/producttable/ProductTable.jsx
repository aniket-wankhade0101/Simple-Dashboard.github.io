import "./product.scss"
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows} from "../../productTableSource.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";


const ProductTable = () => {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/products" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <div className="product">
                <div className="productTitle">
                    Add New Product
                    <Link to="/products/new" className="link">
                        Add New Products
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={productColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>

        </>
    )
}

export default ProductTable