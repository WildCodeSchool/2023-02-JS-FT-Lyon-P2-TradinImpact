import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useGatherContext } from "../contexts/GatherContext";
import PresentationGather from "./PresentationGather";
import GatherRecap from "./GatherRecap";
import GatherGame from "./GatherGame";

export default function Gather({ random, inventory, setInventory }) {
  const [itemsForSession, setItemsForSession] = useState([]);
  const { gatherScreen, setGatherScreen } = useGatherContext();
  const [gatherSatchel, setGatherSatchel] = useState([]);
  // tableau des items qui peuvent potentiellement apparaître lors du mini jeu de collecte
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
    "VioletGrass",
  ];

  // Définition des objets qui pourront être récoltés dans cette session
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
      });
    fetch(`https://api.genshin.dev/materials/local-specialties/`)
      .then((response) => response.json())
      .then((data) => {
        randomItems.push(data.mondstadt[7]);
      });
    setItemsForSession(randomItems);
  };
  useEffect(() => {
    sessionRandomItems();
  }, []);

  // Lorsque le composant est démonté, le nouvel écran par défaut devient "présentation" / cooldown
  useEffect(() => {
    return () => setGatherScreen("presentation");
  }, []);

  if (gatherScreen === "presentation" || gatherScreen === "cooldown") {
    return (
      <PresentationGather
        setGatherScreen={setGatherScreen}
        itemsForSession={itemsForSession}
      />
    );
  }
  if (gatherScreen === "recap") {
    return (
      <GatherRecap
        inventory={inventory}
        setInventory={setInventory}
        gatherSatchel={gatherSatchel}
      />
    );
  }

  if (gatherScreen === "game") {
    return (
      <GatherGame
        random={random}
        setGatherScreen={setGatherScreen}
        itemsForSession={itemsForSession}
        gatherSatchel={gatherSatchel}
        setGatherSatchel={setGatherSatchel}
      />
    );
  }
}

Gather.propTypes = {
  random: PropTypes.func.isRequired,
  setInventory: PropTypes.func.isRequired,
  inventory: PropTypes.arrayOf.isRequired,
};
