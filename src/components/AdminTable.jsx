import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../actions/AdminAction";

const AdminTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.adminReducer);

  const { user } = useSelector((state) => state.userAuthReducer);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [user]);

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="add-edit-page">
      <h2 style={{ marginBottom: 30, textAlign: "center", fontSize: 30 }}>
        AdminTable
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => handleDelete(item.id)}
                  >
                    DEl
                  </Button>
                </TableCell>
                <TableCell>
                  <Link to={`/admin-panel/edit${item.id}`}>
                    <Button color="warning" variant="contained">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.categories}
                </TableCell>
                <TableCell align="right">
                  <img width={80} src={item.image} alt="product-img" />
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.ingredients}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTable;
