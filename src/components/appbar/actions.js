import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList, ActionsIconsContainerDesktop, ActionsIconsContainerMobile } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Colors } from "../../styles/theme";

export default function Actions({ matches }){

    const Component = matches 
    ? ActionsIconsContainerMobile
    : ActionsIconsContainerDesktop;

    return(
        <Component>
            <MyList type="row">

                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem/>

                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem/>

                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    );
}