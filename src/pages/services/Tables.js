import React, { Component } from "react";
import {
  FormGroup,
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Sparklines, SparklinesBars } from "react-sparklines";

import Widget from "../../components/Widget";
import s from "./Static.module.scss";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          picture: require("../../images/tables/1.jpg"), // eslint-disable-line global-require
          description: "Palo Alto",
          info: {
            type: "JPEG",
            dimensions: "200x150"
          },
          date: new Date("September 14, 2012"),
          size: "45.6 KB",
          progress: {
            percent: 29,
            colorClass: "success"
          }
        },
        {
          id: 2,
          picture: require("../../images/tables/2.jpg"), // eslint-disable-line global-require
          description: "The Sky",
          info: {
            type: "PSD",
            dimensions: "2400x1455"
          },
          date: new Date("November 14, 2012"),
          size: "15.3 MB",
          progress: {
            percent: 33,
            colorClass: "warning"
          }
        },
        {
          id: 3,
          picture: require("../../images/tables/3.jpg"), // eslint-disable-line global-require
          description: "Down the road",
          label: {
            colorClass: "success",
            text: "INFO!"
          },
          info: {
            type: "JPEG",
            dimensions: "200x150"
          },
          date: new Date("September 14, 2012"),
          size: "49.0 KB",
          progress: {
            percent: 38,
            colorClass: "inverse"
          }
        },
        {
          id: 4,
          picture: require("../../images/tables/4.jpg"), // eslint-disable-line global-require
          description: "The Edge",
          info: {
            type: "PNG",
            dimensions: "210x160"
          },
          date: new Date("September 15, 2012"),
          size: "69.1 KB",
          progress: {
            percent: 17,
            colorClass: "danger"
          }
        },
        {
          id: 5,
          picture: require("../../images/tables/5.jpg"), // eslint-disable-line global-require
          description: "Fortress",
          info: {
            type: "JPEG",
            dimensions: "1452x1320"
          },
          date: new Date("October 1, 2012"),
          size: "2.3 MB",
          progress: {
            percent: 41,
            colorClass: "primary"
          }
        }
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false]
    };

    this.checkAll = this.checkAll.bind(this);
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(" ");
    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = new Array(this.state[checkbox].length).fill(
      ev.target.checked
    );
    this.setState({
      [checkbox]: checkboxArr
    });
  }

  changeCheck(ev, checkbox, id) {
    const { checkboxes1, checkboxes2, checkboxes3 } = this.state;
    if (checkbox === "checkboxes1") {
      const checkedBox1 = (checkboxes1[id] = ev.target.checked);
      this.setState({
        checkedBox1
      });
    } else if (checkbox === "checkboxes2") {
      const checkedBox2 = (checkboxes2[id] = ev.target.checked);
      this.setState({
        checkedBox2
      });
    } else {
      const checkedBox3 = (checkboxes3[id] = ev.target.checked);
      this.setState({
        checkedBox3
      });
    }

    this.setState({
      [checkbox]: this.state[checkbox]
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem active>All Services</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12}>
            <Widget>
              <h3>
                Services <span className="fw-semi-bold">Table</span>
              </h3>

              <div className="widget-table-overflow">
                <Table className="table-striped table-lg mt-lg mb-0">
                  <thead>
                    <tr>
                      <th style={{ fontWeight: "bold" }}>Service</th>
                      <th style={{ fontWeight: "bold" }} className="text-right">
                        Price
                      </th>
                      <th
                        style={{ fontWeight: "bold" }}
                        className="text-center"
                      >
                        Discount
                      </th>
                      <th>
                        <div className="abc-checkbox">
                          <Input
                            id="checkbox20"
                            type="checkbox"
                            checked={this.state.checkboxes3[0]}
                            onChange={event =>
                              this.checkAll(event, "checkboxes3")
                            }
                          />
                          <Label for="checkbox20" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trám răng</td>
                      <td className="text-right">150.000 VND</td>
                      <td className="text-center">
                        <input style={{ width: "40px" }}></input> <span>%</span>
                      </td>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id="checkbox21"
                            type="checkbox"
                            checked={this.state.checkboxes3[1]}
                            onChange={event =>
                              this.changeCheck(event, "checkboxes3", 1)
                            }
                          />
                          <Label for="checkbox21" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Lấy cao răng</td>
                      <td className="text-right">320.000 VND</td>
                      <td className="text-center">
                        <input style={{ width: "40px" }}></input> <span>%</span>
                      </td>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id="checkbox22"
                            type="checkbox"
                            checked={this.state.checkboxes3[2]}
                            onChange={event =>
                              this.changeCheck(event, "checkboxes3", 2)
                            }
                          />
                          <Label for="checkbox22" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Niềng răng</td>
                      <td className="text-right">22.000.000 VND</td>
                      <td className="text-center">
                        <input style={{ width: "40px" }}></input> <span>%</span>
                      </td>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id="checkbox23"
                            type="checkbox"
                            checked={this.state.checkboxes3[3]}
                            onChange={event =>
                              this.changeCheck(event, "checkboxes3", 3)
                            }
                          />
                          <Label for="checkbox23" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Chữa nướu</td>
                      <td className="text-right">160.000 VND</td>
                      <td className="text-center">
                        <input style={{ width: "40px" }}></input> <span>%</span>
                      </td>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id="checkbox24"
                            type="checkbox"
                            checked={this.state.checkboxes3[4]}
                            onChange={event =>
                              this.changeCheck(event, "checkboxes3", 4)
                            }
                          />
                          <Label for="checkbox24" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Làm sạch tuỷ</td>
                      <td className="text-right">400.000 VND</td>
                      <td className="text-center">
                        <input style={{ width: "40px" }}></input> <span>%</span>
                      </td>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id="checkbox25"
                            type="checkbox"
                            checked={this.state.checkboxes3[5]}
                            onChange={event =>
                              this.changeCheck(event, "checkboxes3", 5)
                            }
                          />
                          <Label for="checkbox25" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Widget>
          </Col>
        </Row>
        <div style={{ right: "25px", position: "absolute" }}>
          <Button color="success" className="width-100 mb-xs mr-xs">
            Create
          </Button>
          <Button color="warning" className="width-100 mb-xs mr-xs">
            Update
          </Button>
          <Button color="danger" className="width-100 mb-xs mr-xs">
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default Services;
