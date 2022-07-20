import React, { Component } from "react";
import { Card, Breadcrumb, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import kucing from "../Assets/kucing.jpeg";

export default class UbahProfileSiswa extends Component {
  render() {
    return (
      <div>
        <Card style={{ color: "black" }}>
          <Card.Body>
            <Card.Title>Ubah Profile</Card.Title>
            <hr />
            <Form>
              <Row>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Foto Siswa<span className="text-danger">*</span>
                    </Form.Label>
                    <div
                      style={{
                        marginBottom: "12px",
                      }}
                    >
                      <img
                        src={kucing}
                        width={160}
                        height={160}
                        style={{
                          display: "block",
                          margin: "0 auto",
                          borderRadius: "10px",
                          // border: "1px solid black",
                        }}
                      />
                    </div>
                    <Form.Control
                      style={{
                        marginTop: "1px",
                        display: "flex",
                      }}
                      name="img"
                      accept="image/*"
                      type="file"
                      // onChange={this.imageHandler}
                    />
                  </Form.Group>
                </Col>

                <Col md={5}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      NIS<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="siswa_nis"
                      id="siswa_nis"
                      type="text"
                      value="192010434"
                      placeholder="NIS"
                      noValidate
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Nama Siswa<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      name="siswa_nama"
                      id="siswa_nama"
                      type="text"
                      value="Ahmad Fadhilah"
                      placeholder="Nama Siswa"
                      noValidate
                      disabled
                    />
                  </Form.Group>

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
                </Col>

                <Col md={5}>
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
                      type="password"
                      value="uhuy123"
                      placeholder="Masukkan Password"
                      noValidate
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Button variant="outline-primary" type="submit">
                Ubah Profile
              </Button>
              &ensp;
              <Link to="/user/profile/">
                <Button variant="outline-danger" type="submit">
                  Kembali
                </Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
