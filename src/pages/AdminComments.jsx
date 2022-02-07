import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getComments } from "../actions/AdminAction";

const AdminComments = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getComments());
  }, []);

  if (!posts) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ marginTop: 150 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {" "}
                <TableCell>
                  <Button
                    color="error"
                    variant="contained"
                    // onClick={() => handleDelete(item.id)}
                  >
                    DEl
                  </Button>
                </TableCell>
                <TableCell>
                  <Link to={`/`}>
                    <Button color="warning" variant="contained">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.comment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminComments;
