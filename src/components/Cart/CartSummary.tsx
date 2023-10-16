import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { currencyFormat } from "../../utils/utils";

export default function BasketSummary() {
    const { cartItems } = useSelector((state: RootState) => state.cart);
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
                                <span style={{ fontStyle: 'italic' }}>*Please check again before checking out</span>
                            </TableCell>
                            <TableCell align="right">
                                <a href="#" className="btn btn--sm btn--base">
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