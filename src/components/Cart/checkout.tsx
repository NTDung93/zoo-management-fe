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

  import { Link } from "react-router-dom";
  
  export default function CheckOut() {
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
                        <div className="row mt-3  align-items-center">
                          <div className="col-sm-3">
                            <label className="col-form-label">FullName</label>
                          </div>
                          <div className="col-sm-8">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mt-3 align-items-center">
                          <div className="col-sm-3">
                            <label className="col-form-label">Email</label>
                          </div>
                          <div className="col-sm-8">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mt-3 align-items-center">
                          <div className="col-sm-3">
                            <label className="col-form-label">Phone Number</label>
                          </div>
                          <div className="col-sm-8">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography p={1} variant="h5" color={"#86c305"}>
                        ORDER SUMMARY:
                      </Typography>
                      <TableContainer component={Card} variant="outlined">
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <TableRow>Name</TableRow>
                                <TableRow>Quantity: 1</TableRow>
                              </TableCell>
                              <TableCell align="right">$17</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <TableRow>Name</TableRow>
                                <TableRow>Quantity: 1</TableRow>
                              </TableCell>
                              <TableCell align="right">$17</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography variant="h6" color={"#86c305"}>
                                  Total
                                </Typography>
                              </TableCell>
                              <TableCell align="right">
                                <Typography variant="h6" color={"#86c305"}>
                                  $17
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
                      component={Link}
                      to={`/cart`}
                      size="large"
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
  