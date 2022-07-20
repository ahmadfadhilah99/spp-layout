import React from "react";
import { Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPrint } from "@fortawesome/free-solid-svg-icons";
import { Redirect, Link } from "react-router-dom";

import "./PembayaranBulanan.css";
const PembayaranBulanan = () => {
  const Bulanan = [
    {
      id_bulanan: 1,
      bulan: "Januari",
      status: "lunas",
      tgl_bayar: "10/01/2022",
      jumlah: "300.000",
    },
    {
      id_bulanan: 2,
      bulan: "Februari",
      status: "lunas",
      tgl_bayar: "5/02/2022",
      jumlah: "300.000",
    },
    {
      id_bulanan: 3,
      bulan: "Maret",
      status: "lunas",
      tgl_bayar: "13/03/2022",
      jumlah: "300.000",
    },
    {
      id_bulanan: 3,
      bulan: "April",
      status: "Belum lunas",
      tgl_bayar: "",
      jumlah: "300.000",
    },
    {
      id_bulanan: 3,
      bulan: "Mei",
      status: "Belum lunas",
      tgl_bayar: "",
      jumlah: "300.000",
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
                  <th>Bulan</th>
                  <th>Status</th>
                  <th>Tanggal</th>
                  <th>Jumlah</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Bulanan.map((Data, index) => (
                  <tr key={index}>
                    <td>{Data.id_bulanan}</td>
                    <td>{Data.bulan}</td>
                    <td>{Data.status}</td>
                    <td>{Data.tgl_bayar === "" ? "-" : Data.tgl_bayar}</td>
                    <td>Rp {Data.jumlah}</td>
                    <td>
                      <Link to="/user/invoice/bulanan">
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
                  <th>Jumlah</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Bulanan.map((Data, index) => (
                  <tr key={index}>
                    <td>{Data.id_bulanan}</td>
                    <td>{Data.bulan} </td>
                    <td>Rp {Data.jumlah}</td>
                    <td>
                      <Link to="/user/invoice/bulanan">
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
        </Card>
      </div>
    </>
  );
};
export default PembayaranBulanan;
