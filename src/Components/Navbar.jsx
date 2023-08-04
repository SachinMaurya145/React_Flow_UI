import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background: "blue"
`;

const Tabs = styled(NavLink)`
font-size:20px; 
margin-right: 20px;
color:inherit;
text-decoration:none;
`;

const Navbar = () => {
    return ( 
        <Header position='static'>
            <Toolbar>
            <Tabs to="/">Code for interview</Tabs>
              <Tabs to="/AllUsers"> AllUsers</Tabs>
            <Tabs to="/AddUser"> AddUser </Tabs>

            </Toolbar>
        </Header>
    )
}

export default Navbar;