import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PresentationGather from "./PresentationGather";
import GatherGame from "./GatherGame";

export default function Gather({ random }) {
  const [gatherScreen, setGatherScreen] = useState("presentation");
  const [itemsForSession, setItemsForSession] = useState([]);

  /* tableau des items qui peuvent potentiellement apparaître lors du mini jeu de collecte */
  const itemsToGather = [
    "Bamboo-shoot",
    "Berry",
    "Bird-egg",
    "Calla Lily",
    "Carrot",
    "Fish",
    "Jueyun Chili",
    "Lotus Head",
    "Matsutake",
    "Mint",
    "Mushroom",
    "Onion",
    "Pinecone",
    "Potato",
    "Qingxin",
    "Radish",
    "Raw Meat",
    "Small Lamp Grass",
    "Snapdragon",
    "Sweet Flower",
    "Tomato",
    "Violet Grass",
  ];

  /* Définition des objets qui pourront être récoltés dans cette session */
  const sessionRandomItems = () => {
    const randomItems = [];
    fetch(`https://api.genshin.dev/materials/cooking-ingredients/`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 1; randomItems.length < 3; i += 1) {
          const randomItemName = itemsToGather[
            random(0, itemsToGather.length - 1)
          ]
            .toLowerCase()
            .replaceAll(" ", "-");
          if (!randomItems.includes(data[randomItemName])) {
            randomItems.push(data[randomItemName]);
          }
        }
        setItemsForSession(randomItems);
      });
  };

  useEffect(() => {
    sessionRandomItems();
  }, []);

  if (gatherScreen === "presentation") {
    return (
      <PresentationGather
        setGatherScreen={setGatherScreen}
        itemsForSession={itemsForSession}
      />
    );
  }
  if (gatherScreen === "game") {
    return (
      <GatherGame
        random={random}
        setGatherScreen={setGatherScreen}
        itemsForSession={itemsForSession}
      />
    );
  }
}

Gather.propTypes = {
  random: PropTypes.func.isRequired,
};
