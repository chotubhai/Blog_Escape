import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarResponsive,
  Header,
  Row,
  Typography,
  Container,
  Column,
  HoverCard,
} from "../layouts";

export const Category = () => {
  return (
    <>
      <Header
      height="70vh"
      backgroundImage="linear-gradient(100deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.04)) , url('http://uploads.webflow.com/560425adca8e085154729773/5614eb8fe8da77e53e25f7fc_photo-1439189741837-58720e8d82d5.jpg')">
        <NavbarResponsive style={{ backgroundColor: "transparent" }}>
          <li className="logo">
            <a href="/">Escape</a>
          </li>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/categories">CATEGORIES</a>
          </li>
        </NavbarResponsive>
        <Row className="row-center" style={{height: '65%'}}>
          <Typography className="display-2" style={{color: 'white'}}>Categories</Typography>
        </Row>
      </Header>
      <Container padding="5rem">
        <Row>
          <Column>
          <Link to="./categories/nature">
            <HoverCard translateDown style={{ padding: '7rem 0',textAlign: 'center' , backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed199343713a5819b372_photo-1433890070408-084b6b305d72.jpg')"}}>
              <Typography className="h1" style={{color:'white'}}>Nature</Typography>
            </HoverCard>
            </Link>
          </Column>
          <Column>
          <Link to="./categories/photography">
            <HoverCard translateDown style={{padding: '7rem 0',textAlign: 'center',backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed0ae8da77e53e25f843_photo-1416949929422-a1d9c8fe84af.jpg')"}}>
              <Typography className="h1" style={{color:'white'}}>Photography</Typography>
            </HoverCard>
            </Link>
          </Column>
          <Column>
          <Link to="./categories/relaxation">
            <HoverCard translateDown style={{ padding: '7rem 0',textAlign: 'center',backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed3b20fa552c1b077720_photo-1436916154952-3aeb6d98001a.jpg')"}}>
              <Typography className="h1" style={{color:'white'}}>Relaxation</Typography>
            </HoverCard>
            </Link>
          </Column>
        </Row>
        <Row>
          <Column>
          <Link to="./categories/vacation">
            <HoverCard translateDown style={{ padding: '7rem 0',textAlign: 'center',backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed69e8da77e53e25f859_photo-1440558899941-2b58b4b0e6ad.jpg')"}}>
              <Typography className="h1" style={{color:'white'}}>Vacation</Typography>
            </HoverCard>
            </Link>
          </Column>
          <Column>
          <Link to="./categories/travel">
            <HoverCard translateDown style={{ padding: '7rem 0',textAlign: 'center',backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed459343713a5819b380_photo-1437846972679-9e6e537be46e.jpg')"}}>
              <Typography className="h1" style={{color:'white'}}>Travel</Typography>
            </HoverCard>
            </Link>
          </Column>
          <Column>
          <Link to="./categories/adventure">
            <HoverCard translateDown style={{ padding: '7rem 0',textAlign: 'center',backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed85e8da77e53e25f85e_photo-1436285122087-89584a1d9398.jpg')"}}>
              <Typography className="h1" style={{color:'white'}}>Adventure</Typography>
            </HoverCard>
            </Link>
          </Column>
        </Row>
      </Container>
    </>
  );
};
