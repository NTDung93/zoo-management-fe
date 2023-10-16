import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import { TicketObj } from "../../models/ticket";
import { LoadingButton } from '@mui/lab';
import { currencyFormat } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";

interface Props {
    ticket: TicketObj
}

export default function ProductCard({ ticket: ticket }: Props) {
    const dispatch = useDispatch();

    const handleAddToCart = (ticket: TicketObj) => {
        dispatch(addToCart({ticket: ticket, quantity: 1}));
    }

    return (
        <Card sx={{ maxWidth: 345, height: 370 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#86c305' }}>
                        {ticket.type.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={ticket.type}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: '#86c305' }
                }}
            ></CardHeader>
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: '#86c305' }}
                image={ticket.image}
                title={ticket.type}
            />
            <CardContent sx={{ height: '100px' }}>
                <Typography gutterBottom color='#86c305' variant="h5">
                    {currencyFormat(ticket.unitPrice)} Vnđ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {ticket.description}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton
                    size="small" 
                    sx={{ color: "#86c305" }}
                    onClick={() => handleAddToCart(ticket)}
                >
                    Add to cart
                </LoadingButton>
            </CardActions>
        </Card>
    )
}