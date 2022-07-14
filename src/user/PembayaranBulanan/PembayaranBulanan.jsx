import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPrint } from "@fortawesome/free-solid-svg-icons";
import { Redirect, Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Invoice from "./Invoice";

import user from "./user.jpg";
import logo from "../Assets/LandingPageImg/Logo.png";

import "./PembayaranBulanan.css";

export default class PembayaranBulanan extends Component {
  render() {
    return (
      <div>
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
                    <th>jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Januari</td>
                    <td>Lunas</td>
                    <td>10/01/2022</td>
                    <td>Rp 300.000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Februari</td>
                    <td>Lunas</td>
                    <td>4/02/2022</td>
                    <td>Rp 300.000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Maret</td>
                    <td>Lunas</td>
                    <td>13/03/2022</td>
                    <td>Rp 300.000</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>April</td>
                    <td>Belum Lunas</td>
                    <td>-</td>
                    <td>Rp 300.000</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Mei</td>
                    <td>Belum Lunas</td>
                    <td>-</td>
                    <td>Rp 300.000</td>
                  </tr>
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
                  <tr>
                    <td>1</td>
                    <td>Januari</td>
                    <td>Rp 300.000</td>
                    <td>
                      <Button variant="success"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Februari</td>
                    <td>Rp 300.000</td>
                    <td>
                      <Button variant="success"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Maret</td>
                    <td>Rp 300.000</td>
                    <td>
                      <Button variant="success"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>April</td>
                    <td>Rp 300.000</td>
                    <td>
                      <Button variant="secondary"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Mei</td>
                    <td>Rp 300.000</td>
                    <td>
                      <Button variant="secondary"></Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success"></Button> Lunas &nbsp;
              <Button variant="secondary"></Button> Belum Lunas
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
