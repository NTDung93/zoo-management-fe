import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import agent from "../../api/agent";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { currencyFormat } from "../../utils/utils";
import { clearCart } from "./cartSlice";
import { useEffect, useState } from "react";
import { OrderObj, OrderDetailObject } from '../../models/order';
import { toast } from "react-toastify";

export default function CheckOut() {
  const [formData, setFormData] = useState<OrderObj>({} as OrderObj);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  useEffect(() => {
    const orderDetails: OrderDetailObject[] = [];
    cartItems.forEach(item => {
      const orderDetail: OrderDetailObject = {
        ticketId: item.ticket.ticketId,
        quantity: item.quantity,
        unitTotalPrice: item.ticket.unitPrice * item.quantity,
        entryDate: item.entryDate!
      };
      orderDetails.push(orderDetail);
    });

    setFormData({
      ...formData,
      orderDetails: orderDetails
    });
  }, [cartItems]);

  console.log(formData);

  var total = 0;
  cartItems.forEach(item => {
    total += item.ticket.unitPrice * item.quantity;
  });

  function isEmailValid(email: string): boolean {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  }

  function isPhoneNumberValid(phoneNumber: string): boolean {
    const phoneRegex = /^\d{10,12}$/;
    return phoneRegex.test(phoneNumber);
  }

  const handleCheckout = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      if (!formData.fullName) {
        toast.error(`Please enter your full name!`, { position: "bottom-left", autoClose: 2000 });
      }
      if (!formData.email) {
        toast.error(`Please enter your email!`, { position: "bottom-left", autoClose: 2000 });
      }
      if (!formData.phoneNumber) {
        toast.error(`Please enter your phone number!`, { position: "bottom-left", autoClose: 2000 });
      }
    }else if (!isEmailValid(formData.email)) {
      toast.error(`Invalid email!`, { position: "bottom-left", autoClose: 2000 });
    } else if (!isPhoneNumberValid(formData.phoneNumber)) {
      toast.error(`Invalid phone number!`, { position: "bottom-left", autoClose: 2000 });
    } else if (cartItems.length === 0) {
      toast.error(`Your cart is now empty!`, { position: "bottom-left", autoClose: 2000 });
    } else {
      agent.Payments.createOrder(formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })

      agent.Payments.create(cartItems)
        .then(res => {
          window.location.href = res;
          handleClearCart();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }


  return (
    <>
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="table-responsive--md">
                <Grid
                  p={1}
                  mb={2}
                  className=""
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ backgroundColor: "#86c305" }}
                >
                  <Grid>
                    <Typography variant="body1" color={"white"}>
                      ORDER SUMMARY
                    </Typography>
                  </Grid>
                  <Grid>
                    <Button
                      style={{ borderColor: "#FFFFFF", color: "white" }}
                      variant="outlined"
                      component={Link}
                      to={`/cart`}
                    >
                      Back to cart
                    </Button>
                  </Grid>
                </Grid>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={9}>
                    <Typography p={1} variant="h5" color={"#86c305"}>
                      SHIPPING DETAILS:
                    </Typography>
                    <div className="form">
                      <form>
                        <div className="row mt-3  align-items-center">
                          <div className="col-sm-3">
                            <label className="col-form-label">FullName</label>
                          </div>
                          <div className="col-sm-8">
                            <input type="text" className="form-control"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Enter your full name here"
                            />
                          </div>
                        </div>
                        <div className="row mt-3 align-items-center">
                          <div className="col-sm-3">
                            <label className="col-form-label">Email</label>
                          </div>
                          <div className="col-sm-8">
                            <input type="text" className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="abc@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="row mt-3 align-items-center">
                          <div className="col-sm-3">
                            <label className="col-form-label">Phone Number</label>
                          </div>
                          <div className="col-sm-8">
                            <input type="text" className="form-control"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="Phone number contains 10-12 digits"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography p={1} variant="h5" color={"#86c305"}>
                      ORDER SUMMARY:
                    </Typography>
                    <TableContainer component={Card} variant="outlined">
                      <Table>
                        <TableBody>
                          {cartItems.map(item => (
                            <TableRow>
                              <TableCell>
                                <TableRow> <b>Ticket type: </b>{item.ticket.type}</TableRow>
                                <TableRow> <b>Quantity: </b>{item.quantity}</TableRow>
                              </TableCell>
                              <TableCell align="right">{(item.ticket.unitPrice / 1000).toFixed(3)} vnd</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell>
                              <Typography variant="h6" color={"#86c305"}>
                                Total
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h6" color={"#86c305"}>
                                {currencyFormat(total)} vnd
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
                <Grid
                  mt={2}
                  p={1}
                  className=""
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Button
                    style={{ backgroundColor: "#86c305", color: "white" }}
                    variant="contained"
                    size="large"
                    onClick={() => handleCheckout()}
                  >
                    PLACE ORDER
                  </Button>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

