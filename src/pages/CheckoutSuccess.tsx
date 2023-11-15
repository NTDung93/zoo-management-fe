import { Typography } from "@mui/material";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageSliderBottom from "../components/Bottom/ImageSliderBottom";

export default function CheckoutSuccess() {
    return (
        <>
            <BackToTop />
            <Banner
                pageName={"Checkout Status"}
                singleName={"Checkout Status"}
                pictureUrl="https://res.cloudinary.com/dnk5fcjhn/image/upload/v1696253385/images/thu-an-thuc-vat/eagle/s2bwmtgsgqkv762k3lat.jpg"
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%' }}>
                    <Typography variant="h2" style={{ color: '#86c305', display: 'block', marginBottom: '2rem' }}>Checkout successfully!</Typography>
                    <Typography variant="h5" style={{ color: 'black', textAlign: 'center' }}>We will send you a confirm email. If you do not receive it, contact us via our email amazoo@gmail.com</Typography>
                </div>
            </div>
            <ImageSliderBottom />
        </>
    )
}