import axios from "axios";
import React, { Component } from "react";
import { Card, Breadcrumb, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swal } from "sweetalert2";

import kucing from "../Assets/kucing.jpeg";

export default class ProfileSiswa extends Component {
  render() {
    return (
      <div>
        <br />
        {/* <Card.Title> */}
        <h3 style={{ paddingBottom: "10px" }}>Profile</h3>

        {/* </Card.Title> */}
        <Card style={{ color: "black" }}>
          <Card.Body>
            <Form>
              <Row>
                <Col md={2}>
                  <div
                    style={{
                      margin: "20px 0",
                    }}
                  >
                    <img
                      src={kucing}
                      width={164}
                      height={164}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <Link
                    to="/user/profile/ubah"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="outline-primary"
                      type="submit"
                      style={{
                        display: "flex",
                        margin: "0 auto",
                      }}
                    >
                      Ubah Profile
                    </Button>
                  </Link>
                  <br />
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      NIS<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="siswa_nis"
                      type="text"
                      value="192010434"
                      placeholder="NIS"
                      // onChange={this.handleChange}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Nama Siswa<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="siswa_nama"
                      id="nama"
                      type="text"
                      value="Ahmad Fadhilah"
                      placeholder="Nama Siswa"
                      noValidate
                      // onChange={this.handleChange}
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Jenis Kelamin
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="siswa_gender"
                      value="Laki-laki"
                      disabled
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Kelas<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="kelas_nama"
                      value="12 RPL 3"
                      disabled
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Password<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="password"
                      id="password"
                      type="password"
                      value="uhuy123"
                      placeholder="Masukkan Password"
                      noValidate
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
