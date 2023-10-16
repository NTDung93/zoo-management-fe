import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageBottom from "../components/Bottom/ImageBottom";
import { useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import BasketSummary from "../components/Cart/CartSummary";

export default function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <BackToTop />
      <Banner
        pageName={"Cart"}
        singleName={"Cart"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091228/banner/ejxl6rugbbou2yzhxyli.jpg"
      />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          {cartItems.length === 0 ? (
            <Typography variant="h3" style={{color:'#86c305'}}>Your basket is now empty!</Typography>
          ) : (
            <TableContainer component={Paper} style={{ marginBottom: '2rem' }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow style={{ backgroundColor: '#86c305' }}>
                    <TableCell>Ticket</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map(item => (
                    <TableRow
                      key={item.ticket.ticketId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Box display={'flex'} alignItems={'center'}>
                          <img src={item.ticket.image} alt={item.ticket.type} style={{ height: 50, marginRight: 20 }}></img>
                          <span>{item.ticket.type}</span>
                        </Box>
                      </TableCell>
                      <TableCell align="right">{(item.ticket.unitPrice / 1000).toFixed(3)} Vnđ</TableCell>
                      <TableCell align="center">
                        <LoadingButton
                          color="error">
                          <Remove />
                        </LoadingButton>
                        {item.quantity}
                        <LoadingButton
                          color="secondary">
                          <Add />
                        </LoadingButton>
                      </TableCell>
                      <TableCell align="right">{((item.ticket.unitPrice * item.quantity) / 1000).toFixed(3)} Vnđ</TableCell>
                      <TableCell align="right">
                        <LoadingButton>
                          <Delete style={{ color: '#86c305' }} />
                        </LoadingButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {cartItems.length != 0 && (
            <Grid container>
              <Grid item xs={6} />
              <Grid item xs={6}>
                <BasketSummary />
              </Grid>
            </Grid>)}
        </div>
      </div>

      <ImageBottom />
    </>
  );
}