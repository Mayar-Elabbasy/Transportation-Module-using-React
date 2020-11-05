import { Navbar, NavbarBrand } from 'reactstrap';

const MainNavbar = () => {
    return (
    <div>
      <Navbar style={{ backgroundColor: "#2774AE" }} expand="md">
        <NavbarBrand style={{ color: "white", fontWeight: "bold" }}
        className="ml-5" href="/">Transportation</NavbarBrand>
      </Navbar>
    </div>   
    );
};

export default MainNavbar;