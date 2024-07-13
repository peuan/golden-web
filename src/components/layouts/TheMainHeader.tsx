import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import "./TheMainHeader.css";
import Logo from "../../assets/images/logo.svg";

const TheMainHeader = () => {
  return (
    <div className="bg-lighten">
      <Navbar
        className="container mx-auto the-main-header bg-inherit"
        maxWidth="full"
      >
        <NavbarBrand>
          <img {...Logo} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Event History
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Jobs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" color="foreground">
              Login
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default TheMainHeader;
