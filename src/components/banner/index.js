import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner(){
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">New Bags</BannerTitle>
                <BannerDescription variant="subtitle">lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmo tempor incidudnt ut labore et dolore magna</BannerDescription>
                <BannerShopButton color="primary">Show Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );

}