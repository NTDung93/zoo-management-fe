import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { currencyFormat } from "../../utils/utils";
import { clearCart } from "./cartSlice";
import agent from "../../api/agent";

export default function BasketSummary() {
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCheckout = () => {
        agent.Payments.create(cartItems)
            .then((res) => {
                if (res) {
                    window.location.href = res;
                }
                console.log(res);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    var total = 0;

    cartItems.forEach(item => {
        total += item.ticket.unitPrice * item.quantity;
    });

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(total)} Vnđ</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell colSpan={2}>
                                <a href="/ticket" className="btn btn--sm btn--base" style={{ marginRight: '1rem', backgroundColor: '#C2BFBE' }}>
                                    {" "}
                                    Continue shopping{" "}
                                </a>
                                <a href="#" className="btn btn--sm btn--base" style={{ backgroundColor: '#E35020' }}
                                    onClick={() => handleClearCart()}
                                >
                                    {" "}
                                    Clear cart{" "}
                                </a>
                            </TableCell>
                            <TableCell align="right">
                                <a href="#" className="btn btn--sm btn--base" onClick={() => handleCheckout()}>
                                    {" "}
                                    Checkout{" "}
                                </a>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}