import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    return (
    <div>
      <Navbar style={{ backgroundColor: "#2774AE" }} expand="md">
        <Link to={`/`}>
          <NavbarBrand style={{ color: "white", fontWeight: "bold" }}
          className="ml-5">Transportation</NavbarBrand>
        </Link>
      </Navbar>
    </div>   
    );
};

export default MainNavbar;