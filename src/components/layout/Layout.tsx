import { Box } from '@mui/material';
import Provider from '../provider/Provider';
import AppBar from './Navbar/AppBar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <Box component="header" sx={{ flexGrow: 1 }}>
        <AppBar />
      </Box>
      {children}
      <Box component="footer" mt="auto">
        footer
      </Box>
    </Provider>
  );
}

export default Layout;
