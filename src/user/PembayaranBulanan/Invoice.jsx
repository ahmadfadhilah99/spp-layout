import React, { Component } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import Icon from "../Assets/Invoice/Sukses.svg";
import watermark from "../Assets/Invoice/Watermark.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import InvoiceOutput from "../PembayaranBebas/InvoiceOutput";

export default class Invoice extends Component {
  render() {
    return (
      <div>
        <div
          className="wrap m-4 "
          style={{
            boxShadow: "0 0 16px rgba(0, 0, 0, 0.5)",
            padding: "10px 0",
          }}
        >
          <img
            src={watermark}
            alt=""
            style={{
              left: "25%",
              top: "30%",
              position: "absolute",
              objectFit: "cover",
              width: "50%",
              opacity: "0.5",
            }}
          />

          <div
            className="content-invoice"
            style={{ position: "relative", zIndex: "1" }}
          >
            <div className="head" style={{ borderBox: "1px solid black" }}>
              <img
                src={Icon}
                alt=""
                style={{
                  width: "16%",
                  height: "16%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "10px",
                }}
              />
              <br />
              <h6 className="text-center " style={{ fontWeight: "800" }}>
                Terima Kasih
              </h6>
              <h6 className="text-center" style={{ fontWeight: "500" }}>
                Pembayaran anda telah berhasil
              </h6>
            </div>
            <hr />
            <br />
            <div className="container">
              <div
                className="no-tgl d-flex "
                style={{
                  justifyContent: "space-between",
                  marginBottom: "-8px",
                }}
              >
                <div className="nomor">
                  <h6 style={{ fontWeight: "700" }}>No. Pembayaran</h6>
                  <p style={{ marginTop: "14px" }}>220110434</p>
                </div>
                <div className="tanggal " style={{ textAlign: "right" }}>
                  <h6 style={{ fontWeight: "700" }}>Tgl. Pembayaran</h6>
                  <p style={{ marginTop: "14px" }}>10/01/2022</p>
                </div>
              </div>
              <hr />
              <div
                className="nama-nis d-flex "
                style={{
                  justifyContent: "space-between",
                  marginBottom: "-8px",
                }}
              >
                <div className="nama">
                  <h6 style={{ fontWeight: "700" }}>Nama Lengkap</h6>
                  <p style={{ marginTop: "14px" }}>Ahmad Fadhilah</p>
                  <p style={{ marginTop: "14px" }}>12 RPL 3</p>
                </div>
                <div className="kelas">
                  <h6 style={{ fontWeight: "700", textAlign: "right" }}>NIS</h6>
                  <p style={{ marginTop: "14px" }}>192010434</p>
                </div>
              </div>
              <hr />
              <div
                className="desk-total d-flex"
                style={{
                  justifyContent: "space-between",
                  marginBottom: "-4px",
                }}
              >
                <div className="nama">
                  <h6 style={{ fontWeight: "700" }}>Deskripsi</h6>
                </div>
                <div className="kelas">
                  <h6 style={{ fontWeight: "700" }}>Subtotal</h6>
                </div>
              </div>
              <hr />
              <div
                className="desk-total-isi d-flex"
                style={{
                  justifyContent: "space-between",
                  marginBottom: "-2px",
                }}
              >
                <div className="nama-isi">
                  <p>Januari</p>
                </div>
                <div className="kelas-isi">
                  <p>Rp 300.000</p>
                </div>
              </div>
              <hr />
              <div
                className="total d-flex"
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "-18px",
                }}
              >
                <h6 style={{ fontWeight: "700" }}>Total</h6>
                <p style={{ fontWeight: "700" }}>Rp 300.000</p>
              </div>
              <hr />
              <div
                className="invoice-footer d-flex"
                style={{ justifyContent: "space-between", color: "gray" }}
              >
                <div className="alamat">
                  <h6 style={{ fontSize: "9px", fontWeight: "600" }}>
                    SMKN 2 KOTA BEKASI
                  </h6>
                  <p
                    style={{
                      maxWidth: "240px",
                      letterSpacing: "0.2px",
                      fontSize: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Jl. Lap. Bola Rw. Butun, RT.001/RW.006, Ciketing Udik, Kec.
                    Bantar Gebang, Kota Bks, Jawa Barat 17153
                  </p>
                </div>
                <div className="email">
                  <p
                    style={{
                      maxWidth: "240px",
                      letterSpacing: "0.1px",
                      fontSize: "8px",
                      fontWeight: "500",
                      paddingTop: "16px",
                    }}
                  >
                    digitechpayment@gmail.com
                  </p>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <Link to="/user/transaksi">
          <Button>Kembali</Button>
        </Link>
      </div>
    );
  }
}
