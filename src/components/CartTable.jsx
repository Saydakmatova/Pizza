import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getCart, changeCount } from "../actions/ClientAction";

export default function CartTable() {
  const { cart } = useSelector((state) => state.clientReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCart());
  }, []);
  console.log(cart);
  if (!cart) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 100 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Кол-во</TableCell>
              <TableCell align="right">Сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.product.name}
                </TableCell>

                <TableCell align="right">
                  <img src={item.product.image} alt="cart-img" width={100} />
                </TableCell>
                <TableCell align="right">{item.product.price} сом</TableCell>
                <TableCell align="right">
                  <input
                    min={1}
                    type="number"
                    onChange={(e) => {
                      if (e.target.value < 1) {
                        return;
                      }
                      dispatch(changeCount(e.target.value, item.product.id));
                    }}
                    value={item.count}
                  />
                </TableCell>
                <TableCell align="right">{item.subPrice} сом</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <strong style={{ fontSize: 22 }}>Итоговая сумма:</strong>
              </TableCell>
              <TableCell colSpan={1} align="right">
                <strong style={{ fontSize: 22 }}>{cart.totalPrice} сом</strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <div className="order-button">
        <Button variant="contained">Оформить заказ</Button>
      </div>
    </>
  );
}
