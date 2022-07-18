
import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import AppDrawer from './components/drawer';
import Footer from './components/footer';
import Products from './components/products';
import Promotions from './components/promotions';
import SearchBox from './components/search';
import { UIProvider } from './context/ui';
import theme from './styles/theme';

function App() {

  useEffect(()=>{
    document.title = "React Material UI - Home";
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth="xl"
      sx={{
        background: '#fff'
      }}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Catalog</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>

  );
}

export default App;
