import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { currencyFormat } from "../../utils/utils";
import { clearCart } from "./cartSlice";

interface Props {
    entryDate: Date;
}

export default function BasketSummary({ entryDate }: Props) {
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    var total = 0;
    cartItems.forEach(item => {
        total += item.ticket.unitPrice * item.quantity;
    });

    const currentDate = new Date();

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(total)} vnd</TableCell>
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
                                {entryDate >= currentDate ? (
                                    <a href="/checkout" className="btn btn--sm btn--base">
                                        {" "}
                                        Checkout{" "}
                                    </a>
                                ) : (
                                    <span className="btn btn--sm btn--base disabled-text" style={{backgroundColor: 'gray'}}>Checkout</span>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}