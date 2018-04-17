import React from "react";
import { Chart, Axis, Geom, Tooltip } from "bizcharts";
import Slider from "bizcharts-plugin-slider";
import * as data from "./polyfill/bof.json";
import { DataSet } from "@antv/data-set";

const ds = new DataSet({
  state: {
    start: "2016-04-12",
    end: "2016-05-20"
  }
});

const originDv = ds.createView("origin");

originDv.source(data[0][0]);

const chartDv = ds.createView();

chartDv.source(originDv).transform({
  type: "filter",
  callback(obj) {
    const time = obj.heat_start_date;
    return time >= ds.state.start && time <= ds.state.end;
  }
});

class SliderChart extends React.Component {
  onChange(obj) {
    const { startText, endText } = obj;
    ds.setState("start", startText);
    ds.setState("end", endText);
  }
  render() {
    return (
      <div>
        <h2>终点碳</h2>
        <hr />
        <Chart height={400} data={chartDv} forceFit>
          <Axis name="heat_id" />
          <Axis name="fin_c" />
          <Tooltip crosshairs={{ type: "cross" }} />
          <Geom type="line" position="heat_id*fin_c" size={2} />
          <Geom
            type="point"
            position="heat_id*fin_c"
            size={4}
            shape={"circle"}
            style={{ stroke: "#fff", lineWidth: 1 }}
          />
        </Chart>
        <Slider
          width="auto"
          height={26}
          start={ds.state.start}
          end={ds.state.end}
          xAxis="heat_start_date"
          yAxis="fin_c"
          data={originDv}
          onChange={timeObj => {
            this.onChange(timeObj);
          }}
        />
      </div>
    );
  }
}

export default SliderChart;
