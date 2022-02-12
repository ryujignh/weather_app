import React, {FC} from "react";
import {LocationData} from "../store/types";
import {Table} from "antd";

interface LocationProps {
  data: LocationData[];
}

const Location: FC<LocationProps> = ({data}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    }
  ]
  return (
    <section className="section">
      <div className="container">

        <Table dataSource={data} columns={columns} style={{tableLayout: 'auto'}}/>


        {/*<h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.title}</h1>*/}
        {/*<div className="level-item has-text-centered">*/}
        {/*  <div>*/}
        {/*    <p>asdasd</p>*/}
        {/*    /!*<p className="heading">{data.weather[0].description}</p>*!/*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

export default Location;
