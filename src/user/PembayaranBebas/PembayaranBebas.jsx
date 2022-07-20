import React from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPrint } from "@fortawesome/free-solid-svg-icons";
import { Redirect, Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import logo from "../Assets/LandingPageImg/Logo.png";

import "./PembayaranBebas.css";

const PembayaranBebas = () => {
  const Datas = [
    {
      id_bebas: 1,
      pembayaran: "Seragam",
      status: "lunas",
      tgl_bayar: "10/01/2022",
      Jumlah: "1.000.000",
    },
    {
      id_bebas: 2,
      pembayaran: "Gedung",
      status: "lunas",
      tgl_bayar: "12/04/2022",
      Jumlah: "2.000.000",
    },
    {
      id_bebas: 3,
      pembayaran: "Sumb. Pend",
      status: "Belum lunas",
      tgl_bayar: "-",
      Jumlah: "1.800.000",
    },
  ];

  return (
    <>
      <div className="data-user">
        {/* Navbar */}

        {/* Sidebar */}

        {/* Data Table  */}
        <Card body>
          {/* Tampilan Desktop */}
          <div className="desktop">
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Pembayaran</th>
                  <th>Status</th>
                  <th>Tanggal Bayar</th>
                  <th>Jumlah</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Datas.map((Data, index) => (
                  <tr key={index}>
                    <td>{Data.id_bebas}</td>
                    <td>{Data.pembayaran}</td>
                    <td>{Data.status}</td>
                    <td>{Data.tgl_bayar}</td>
                    <td>Rp {Data.Jumlah}</td>
                    <td>
                      <Link to="/user/invoice/bebas">
                        <Button
                          variant="outline-warning"
                          className={
                            Data.status === "lunas" ? "d-block" : "d-none"
                          }
                          style={{ margin: "0 auto" }}
                        >
                          <FontAwesomeIcon icon={faPrint} />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* Tampilan Mobile */}
          <div className="mobile">
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Bulan</th>
                  <th>jumlah</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Datas.map((Data, index) => (
                  <tr key={index}>
                    <td>{Data.id_bebas}</td>
                    <td>{Data.pembayaran}</td>
                    <td>Rp {Data.Jumlah}</td>
                    <td>
                      <Link to="/user/invoice/bebas">
                        <Button
                          variant="outline-warning"
                          className={
                            Data.status === "lunas" ? "d-block" : "d-none"
                          }
                        >
                          <FontAwesomeIcon icon={faPrint} />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  );
};
export default PembayaranBebas;
