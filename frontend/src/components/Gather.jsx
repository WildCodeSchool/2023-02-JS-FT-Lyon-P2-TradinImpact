import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Gather({ random }) {
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

  const sessionRandomItems = () => {
    const randomItems = [];
    fetch(`https://api.genshin.dev/materials/cooking-ingredients/`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 1; i < 4; i += 1) {
          const randomItemName = itemsToGather[
            random(0, itemsToGather.length - 1)
          ]
            .toLowerCase()
            .replaceAll(" ", "-");
          randomItems.push(data[randomItemName]);
        }
        setItemsForSession(randomItems);
      });
  };

  useEffect(() => {
    sessionRandomItems();
  }, []);

  return (
    itemsForSession && (
      <div>
        {itemsForSession.map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    )
  );
}

Gather.propTypes = {
  random: PropTypes.func.isRequired,
};
