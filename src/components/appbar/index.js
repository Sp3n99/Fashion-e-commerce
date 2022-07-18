import { useMediaQuery, useTheme } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";


export default function Appbar(){

    const theme = useTheme();
    /* if matches is true, the user is on a mobile browser*/
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <>
            {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/>}
        </>
    );
}