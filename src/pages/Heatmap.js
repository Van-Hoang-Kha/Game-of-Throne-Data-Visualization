import React from "react";
import { HeatMap } from "@nivo/heatmap";
import wordCountRawData from "../data/wordcountsbyseason.json";
import characterRawData from "../data/characters.json";
import _ from "underscore";

export default function MyResponsiveHeatMap() {
  const processNameList = () => {
    return characterRawData.characters.map((character) => {
      return character.characterName;
    });
  };

  let processedName = processNameList(); //charactername

  //!add list of seasons;
  const justSeasonNames = () => {
    return wordCountRawData.count.map((episode) => {
      return episode.seasonNum;
    });
  };

  const newJustSeasonList = justSeasonNames();
  //!remove DUPS

  const withoutDupJustSeasonList = [...new Set(newJustSeasonList)];
  const createCountObj = () => {
    return {
      season: null,
      characterCounts: processedName.map((name) => {
        return {
          name: name,
          count: null,
        };
      }),
    };
  };

  let newObjectList = createCountObj(); //!a SINGLE object list per SEASON

  const checkCharacterNameList = () => {
    return wordCountRawData.count.map((episode) => {
      return {
        season: episode.seasonNum,
        characterCounts: episode.text.filter((item) =>
          processedName.includes(item.name)
        ),
      };
      //!filter has to have be an array otherwise, 'filter is not a function' error;
    });
  };

  const CharacterListwithCount = checkCharacterNameList();

  //combine the duplicates in each episode;
  const combineDups = () => {
    return CharacterListwithCount.map((seasonName) => {
      let counts = seasonName.characterCounts.reduce((prev, curr) => {
        let cnt = prev.get(curr.name) || 0;
        prev.set(curr.name, curr.count + cnt);
        return prev;
      }, new Map());

      let season = seasonName.season;

      let reducedObj = [...counts].map(([name, count]) => {
        return { name, count, season };
      });
      return reducedObj;
    });
  };

  const combinedDupByEpisode = combineDups();

  const newArra = () => {
    combinedDupByEpisode.map((ele) => {
      return ele.filter((item) => processedName.includes(item.name));
    });
  };

  //!
  const seasonCounts = [];
  let seasonObj = {
    season: 1,
  };

  combinedDupByEpisode.forEach((episode) => {
    if (episode[0].season !== seasonObj.season) {
      seasonCounts.push(seasonObj);
      seasonObj = {
        season: episode[0].season,
      };
    }
    episode.forEach((character) => {
      if (!Object.keys(seasonObj).includes(character.name)) {
        seasonObj[character.name] = character.count;
      } else {
        seasonObj[character.name] += character.count;
      }
    });
  });
  seasonCounts.push(seasonObj);

  const commonProperties = {
    width: 1000,
    height: 700,
    margin: { top: 100, right: 10, bottom: 10, left: 60 },
    data: seasonCounts,
    indexBy: "season",
    keys: processedName,
  };

  console.log("loading");

  return (
    <HeatMap
      {...commonProperties}
      forceSquare={true}
      axisTop={{
        orient: "top",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "",
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Season",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}
