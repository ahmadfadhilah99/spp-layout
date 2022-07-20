import React, { useState } from "react";
// import ProtectedRoute from "../../ProtectedRoute";
// import { useHistory } from "react-router";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
  Button,
  Image, Offcanvas
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCreditCard,
  faHome,
  faBell,
  faCog,
  faSignOutAlt,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Swal from "sweetalert2";
import logo from "../Assets/logotextwhite.svg";

import "./SideBarUser.css";

import Dashboard from "../DashboardUser/DashboardUser";
import Transaksi from "../Transaksi/Transaksi";
import Logout from "../Logout/Logout";
import PembayaranBebas from "../PembayaranBebas/PembayaranBebas";
import ProfileSiswa from "./../Profile/ProfileSiswa";
import UbahProfileSiswa from "../Profile/UbahProfileSiswa";
import Invoice from "../PembayaranBulanan/Invoice";
import InvoiceBebas from "./../PembayaranBebas/InvoiceBebas";

import QRCode from "react-qr-code";
import Qr from "../Assets/QrCode.svg";
import PembayaranBulanan from "../PembayaranBulanan/PembayaranBulanan";

const SideBar = () => {
  // const user = JSON.parse(localStorage.getItem("dataSiswa"));

  const [sidebar, setSidebar] = useState("sidebar");
  const [main, setMain] = useState("main");
  const [text, setText] = useState("block");
  const [button, setbutton] = useState("button");
  
  const [qr, setqr] = useState("none");


  const [mode, setMode] = useState(1);

  const changeSidebar = () => {
    if (mode == 0) {
      setSidebar("sidebar1");
      setMain("main1");
      setbutton("button1");
      setText("none");
      setMode(1);
    } else {
      setSidebar("sidebar");
      setMain("main");
      setbutton("button");
      setText("block");
      setMode(0);
    }
  };
  
  const changeQr = () => {
    if (mode == 0) {
      setqr("block");
      setMode(1);
    } else {
      setqr("none");
      setMode(0);
    }
  };

  return (
    <div>
      <div className="user">
        {/* Navbar */}
        <Navbar bg="light" expand={false} className="navbar" fixed="top">
          < >
            <Navbar.Brand style={{
              color: 'white',
              border: '5px',
            }}>
              <Image onClick={changeSidebar} className="logo" src={logo}
              position="absolute"
              alt="logo"/>
            </Navbar.Brand>
            <Navbar.Text className="text justify-content-end">
              <span style={{
                fontSize: '16px',
                fontWeight: '600',
                marginRight:'30px'
              }}> 
              Hi, Ahmad Fadhilah
              </span>
            </Navbar.Text>
           
          </>
        </Navbar>
      </div>

      
      {/* Sidebar */}

      <div className={sidebar}>
        <br />

        <Link to="/user" style={{textDecoration: 'none'}}>
          <span className="menu">
            <center className="logo">
              <FontAwesomeIcon icon={faHome} />
            </center>
            <p style={{ display: text }}>Home</p>
          </span>
        </Link>

        <br />
        <Link to="/user/transaksi" style={{textDecoration: 'none'}}>
          <span className="menu">
            <center className="logo">
              <FontAwesomeIcon icon={faCreditCard} />
            </center>
            <p style={{ display: text }}>Transaksi</p>
          </span>
        </Link>

        <br />
        <Link to="/user/profile" style={{textDecoration: 'none'}}>
          <span className="menu">
            <center className="logo">
              <FontAwesomeIcon icon={faUser} />
            </center>
            <p style={{ display: text }}>Profile</p>
          </span>
        </Link>

        <br />
        <Link to="/user/login" style={{textDecoration: 'none'}}>
        <span className="menu" >
          <center className="logo">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </center>
          <p style={{ display: text }}>Log out</p>
        </span>
        </Link>
      </div>
      
     
      <div className={main}>
{/* <div id="myModal" class="modal" > */}
<div className="qrcode" style={{display: qr }} onClick={changeQr}> 
                  <div id="myModal" class="modal">

                    {/* <!-- Modal content --> */}
                    <div class="modal-content" >
                      <QRCode
                        // check if user.nis[0] and user.nama is not null then value is user.nis[0] and user.nama
                        value="192010434"
                        size={220}
                        />
                    </div>
                  </div >
            </div>


        <Route exact path="/user/" component={Dashboard} />
        <Route exact path="/user/transaksi" component={Transaksi} />
        <Route exact path="/user/profile" component={ProfileSiswa} />
        <Route exact path="/user/profile/ubah/" component={UbahProfileSiswa} />
        <Route
          exact
          path="/user/invoice/bulanan"
          component={Invoice}
        />
         
        <Route
          exact
          path="/user/invoice/bebas"
          component={InvoiceBebas}
        />
    <br/>
    <br/>
    <br/>

      </div>



             {/* Navbar Bottom */}
             <div className="navbar-bottom">
             
              <Navbar  className="navbar" fixed="bottom">
                  <Container style={{maxWidth:'380px'}}>
                      <Link to="/user" style={{textDecoration: 'none',marginTop:'-10px',color:'black'}}>
                         <span className="menu-bottom-bar">
                        <center>
                          <FontAwesomeIcon icon={faHome}  className="logo"/>
                        </center>
                        <p style={{ fontSize:'12px', marginBottom:'-6px'}}>Home</p>
                      </span>
                      </Link>
          
                      <Link to="/user/transaksi" style={{textDecoration: 'none',marginTop:'-10px',color:'black'}}>
                        <span className="menu-bottom-bar">
                          <center >
                            <FontAwesomeIcon icon={faCreditCard} className="logo"/>
                          </center>
                          <p style={{ fontSize:'12px', marginBottom:'-6px'}}>Transaksi</p>
                        </span>
                      </Link>

                      <span className="menu-bottom-bar" onClick={changeQr}>
                        <center >
                        <Image src={Qr} style={{width:'64px', height:'auto', marginTop:'-24px'}}/>
                        </center>
                      </span>
          
                      <Link to="/user/profile" style={{textDecoration: 'none',marginTop:'-10px',color:'black'}}>
                        <span className="menu-bottom-bar">
                          <center >
                            <FontAwesomeIcon icon={faUser} style={{marginTop:'14px'}}/>
                          </center>
                            <p style={{ fontSize:'12px', marginBottom:'-6px'}}>Profile</p>
                        </span>
                      </Link>
          

                      <Link to="/user/login" style={{textDecoration: 'none',marginTop:'-10px',color:'black'}}>
                      <span className="menu-bottom-bar"   >
                        <center >
                           <FontAwesomeIcon icon={faSignOutAlt}/>
                        </center>
                           <p style={{ fontSize:'12px', marginBottom:'-6px'}}>Log out</p>
                      </span>
                      </Link>

                  </Container>
                </Navbar>
             </div>
    </div>
  );
};

export default SideBar;
