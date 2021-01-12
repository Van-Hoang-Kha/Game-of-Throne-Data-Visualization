import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import monochrome from "@amcharts/amcharts4/themes/moonrisekingdom";

import myData from "../../data/characters.json";

am4core.useTheme(moonrisekingdom);
am4core.useTheme(monochrome);

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.ChordDiagram);

    //extract characterName from the array:
    const processRawData = () => {
      return myData.characters.map((character) => {
        return character.characterName;
      });
    };
    let processedNameList = processRawData();

    //removes the dups:
    const combinedToList = [];
    const processRelationshipNameList = () => {
      return myData.characters.map((character, index) => {
        const relationsWithDups = combinedToList.concat(
          character.marriedEngaged,
          character.killed,
          character.killedBy,
          character.guardianOf,
          character.parentOf,
          character.serves,
          character.siblings,
          character.parents,
          character.guardedBy,
          character.encountered
        );

        //convert into object;
        const person = {
          name: character.characterName, //string
          relations: [...new Set(relationsWithDups)], //array
        };
        return person;
      });
    };

    const relationList = processRelationshipNameList();

    //filter unlisted names from relationList;
    const filteredRelationList = relationList.map((person) => {
      return {
        name: person.name,
        relations: person.relations.filter((name) =>
          processedNameList.includes(name)
        ),
      };
    });

    chart.data = [];

    //and flatten the array into object;
    //! map expect you to return something while ForEach doesnt;
    filteredRelationList.forEach((person) => {
      if (!person) return;
      person.relations.forEach((name) => {
        chart.data.push({
          from: person.name,
          to: name,
          value: Math.round(Math.random() * processedNameList.length),
        });
      });
    });

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    chart.nodePadding = 0.5;
    chart.minNodeSize = 0.01;
    chart.startAngle = 80;
    chart.endAngle = chart.startAngle + 360;
    chart.sortBy = "value";
    chart.fontSize = 10;

    let nodeTemplate = chart.nodes.template;
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.propertyFields.fill = "color";
    nodeTemplate.tooltipText = "{name}";

    // when rolled over the node, make all the links rolled-over
    nodeTemplate.events.on("over", function (event) {
      let node = event.target;
      node.outgoingDataItems.each(function (dataItem) {
        if (dataItem.toNode) {
          dataItem.link.isHover = true;
          dataItem.toNode.label.isHover = true;
        }
      });
      node.incomingDataItems.each(function (dataItem) {
        if (dataItem.fromNode) {
          dataItem.link.isHover = true;
          dataItem.fromNode.label.isHover = true;
        }
      });

      node.label.isHover = true;
    });

    // when rolled out from the node, make all the links rolled-out
    nodeTemplate.events.on("out", function (event) {
      let node = event.target;
      node.outgoingDataItems.each(function (dataItem) {
        if (dataItem.toNode) {
          dataItem.link.isHover = false;
          dataItem.toNode.label.isHover = false;
        }
      });
      node.incomingDataItems.each(function (dataItem) {
        if (dataItem.fromNode) {
          dataItem.link.isHover = false;
          dataItem.fromNode.label.isHover = false;
        }
      });

      node.label.isHover = false;
    });

    let label = nodeTemplate.label;
    label.relativeRotation = 90;

    label.fillOpacity = 0.4;
    let labelHS = label.states.create("hover");
    labelHS.properties.fillOpacity = 1;

    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    // link template
    let linkTemplate = chart.links.template;
    linkTemplate.strokeOpacity = 0;
    linkTemplate.fillOpacity = 0.15;
    linkTemplate.tooltipText = "{fromName} to {toName}:{value.value}";

    let hoverState = linkTemplate.states.create("hover");
    hoverState.properties.fillOpacity = 0.7;
    hoverState.properties.strokeOpacity = 0.7;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div
        id="chartdiv"
        style={{
          width: "100%",
          height: "46rem",
        }}
      ></div>
    );
  }
}

export default App;
