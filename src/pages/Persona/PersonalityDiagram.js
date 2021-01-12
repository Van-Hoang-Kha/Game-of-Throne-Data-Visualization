import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import data from "../../data/personality.json";

export default function PersonalityDiagram() {
  const theme = {
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#ffffff",
        },
      },
    },
  };
  return (
    <ResponsiveRadar
      data={data}
      keys={[
        "Danearys Targaryen",
        "Cersei Lannister",
        "Arya Star",
        "Jon Snow",
        "Sansa Stark",
        "The Night King",
      ]}
      indexBy="taste"
      maxValue="auto"
      margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
      curve="linearClosed"
      borderWidth={1}
      borderColor={{ from: "color" }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={3}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color" }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: "nivo" }}
      fillOpacity={0.3}
      blendMode="multiply"
      animate={true}
      theme={theme}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#fff",
              },
            },
          ],
        },
      ]}
    />
  );
}
