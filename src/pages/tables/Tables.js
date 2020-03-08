import React, { Component } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {
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

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          picture: require("../../images/tables/1.jpg"), // eslint-disable-line global-require
          description: "Trám Răng",
          info: {
            type: "anh Khánh",
            dimensions: "0908778989"
          },
          date: new Date("October 13, 2014 11:13:00"),
          size: "Cancle",
          color: "text-danger",
          progress: {
            percent: 29,
            colorClass: "success"
          }
        },
        {
          id: 2,
          picture: require("../../images/tables/2.jpg"), // eslint-disable-line global-require
          description: "Lấy cao răng",
          info: {
            type: "Chị Hoài",
            dimensions: "240021455"
          },
          date: new Date("November 14, 2012"),
          size: "Waiting",
          color: "text-warning",
          progress: {
            percent: 33,
            colorClass: "warning"
          }
        },
        {
          id: 3,
          picture: require("../../images/tables/3.jpg"), // eslint-disable-line global-require
          description: "Chữa nướu",
          label: {
            colorClass: "success"
            // text: "INFO!"
          },
          info: {
            type: "Bé Na",
            dimensions: "082001150"
          },
          date: new Date("September 14, 2012"),
          size: "Waiting",
          color: "text-warning",
          progress: {
            percent: 38,
            colorClass: "inverse"
          }
        },
        {
          id: 4,
          picture: require("../../images/tables/4.jpg"), // eslint-disable-line global-require
          description: "Làm sạch tuỷ",
          info: {
            type: "Anh Long",
            dimensions: "072101160"
          },
          date: new Date("September 15, 2012"),
          size: "Waiting",
          color: "text-warning",
          progress: {
            percent: 17,
            colorClass: "danger"
          }
        },
        {
          id: 5,
          picture: require("../../images/tables/5.jpg"), // eslint-disable-line global-require
          description: "Niềng răng",
          info: {
            type: "chú Tư",
            dimensions: "08145201320"
          },
          date: new Date("October 1, 2012 "),
          size: "Done",
          color: "text-success",
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
  // ${this.dateSet[4]} ${this.dataSet[0]}
  parseDate(date) {
    this.dateSet = date.toGMTString().split(" ");
    console.log(this.dateSet);
    return `${this.dateSet[4]} ${this.dateSet[0]} ${date.toLocaleString(
      "en-us",
      {
        month: "long"
      }
    )} ${this.dateSet[1]}, ${this.dateSet[3]}`;
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
          <BreadcrumbItem active>Booking Sheet</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg">
          Booking -{" "}
          <span className="fw-semi-bold">Track your customer's booking</span>
        </h1>
        <Row>
          <Col sm={12}>
            <Widget
              title={
                <h5>
                  Booking <span className="fw-semi-bold">Sheet</span>
                </h5>
              }
              settings
              close
            >
              <Table borderless className={s.mainTable}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Service</th>
                    <th className="hidden-sm-down">Info Customer</th>
                    <th className="hidden-sm-down">Status</th>
                    <th>Action</th>
                    {/* <th className="hidden-sm-down">Size</th>
                    <th /> */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableStyles.map(row => (
                    <tr key={row.id}>
                      <td className="text-semi-muted">
                        {this.parseDate(row.date)}
                      </td>
                      <td>
                        {row.description}
                        {row.label && (
                          <div>
                            <Badge color={row.label.colorClass}>
                              {row.label.text}
                            </Badge>
                          </div>
                        )}
                      </td>
                      <td>
                        <p className="mb-0">
                          <small>
                            <span className="fw-semi-bold">Name:</span>
                            <span className="text-muted">
                              &nbsp; {row.info.type}
                            </span>
                          </small>
                        </p>
                        <p>
                          <small>
                            <span className="fw-semi-bold">Phone number:</span>
                            <span className="text-muted">
                              &nbsp; {row.info.dimensions}
                            </span>
                          </small>
                        </p>
                      </td>
                      <td class={row.color}>{row.size}</td>
                      <td>
                        <BootstrapSwitchButton
                          checked={false}
                          onlabel="Canceled"
                          offlabel="Click To Cancle"
                          width={150}
                          onstyle="outline-danger"
                          offstyle="outline-info"
                          // onChange={() => {
                          //   this.state.tableStyles[row.id - 1].size = "ahihi";
                          //   this.forceUpdate();
                          // }}
                        />
                      </td>
                      {/* <td>
                        <img
                          className="img-rounded"
                          src={row.picture}
                          alt=""
                          height="60"
                        />
                      </td>

                      <td className="width-150">
                        <Progress
                          style={{ height: "7px" }}
                          color="success"
                          value={row.progress.percent}
                          className="progress-sm mb-xs rounded mt-xs"
                        />
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="clearfix">
                <div className="float-right">
                  <Button color="danger" className="mr-xs" size="sm">
                    Filter
                  </Button>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      color="default"
                      className="mr-xs"
                      size="sm"
                      caret
                    >
                      Status
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Cancle</DropdownItem>
                      <DropdownItem>Waiting</DropdownItem>
                      <DropdownItem>Done</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tables;
