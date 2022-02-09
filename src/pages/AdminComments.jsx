import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, getCommentsAll } from "../actions/AdminAction";

const AdminComments = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getCommentsAll());
  }, []);

  if (!allPosts) {
    return <h2>Loading...</h2>;
  }

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
    dispatch(getCommentsAll());
  };
  console.log(allPosts);
  return (
    <div style={{ marginTop: 150 }}>
      <Container>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allPosts.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {" "}
                  <TableCell>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(row.id)}
                    >
                      DEl
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.content}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.user.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AdminComments;
