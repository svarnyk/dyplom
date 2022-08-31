import React from "react";
import VideoGallery from "./videoGallery";
import { action } from "@storybook/addon-actions";

export default {
  title: "Partials/VideoGallery",
  Component: VideoGallery,
  argTypes: {
    content: [],
    heading: "",
    buttonOnClick: {action: "clicked"},
  }
};

function Template(args) {
  return (
    <div style={{ maxWidth: "1340px" }}>
      <VideoGallery {...args} />
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
  content: [
    {
      "url": "https://www.youtube.com/watch?v=Euj_p2c6IBQ",
      "title": "Once Upon a December",
      "description": "A little singer performs a song that immerses you in a winter fairy tale.",
      "id": "string",
      "userId": "string"
    },
    {
      "url": "https://www.youtube.com/watch?v=u4bt2-p0q10&t=28s",
      "title": "Yarosha puppy",
      "description": "The little Yarosha cressing is playing after sleeping",
      "id": "string",
      "userId": "string"
    },
    {
      "url": "https://www.youtube.com/watch?v=yxW5yuzVi8w",
      "title": "Doja Cat - Woman",
      "description": "\"Woman\" is a song by American rapper and singer Doja Cat from her third studio album Planet Her (2021)",
      "id": "string",
      "userId": "string"
    },
    {
      "url": "https://www.youtube.com/watch?v=zOuOJh83CJg",
      "title": "Dual Manner - Elsewhere",
      "description": "Director Jacob Edmonds. Talent Rachael Wood. Location Rye Beach. Melbourne, Australia.",
      "id": "string",
      "userId": "string"
    },
    {
      "url": "https://youtube.com/embed/ia50r3fa67s",
      "title": "SKOFKA",
      "id": "6f694bc45b864e633380dc2b99c2e88d",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "ЧУТИ ГІМН"
    },
    {
      "url": "https://youtube.com/embed/1dBApMl1BWE",
      "title": "SKYLERR",
      "id": "31f94b3d5212294089ba03efc5db7ff8",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Хвилями [Official video]"
    },
    {
      "url": "https://youtube.com/embed/siW74rXDZ3s",
      "title": "Tery",
      "id": "50c6835cdb28f4273708ed3c885c8d70",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Чи я роблю щось не те? (Official Audio)"
    },
    {
      "url": "https://youtube.com/embed/EpAzKy0sgBQ",
      "title": "Анна Буткевич ",
      "id": "3e11932e7fdcf379e2a15afc13e372a7",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "СеЛяВі"
    },
    {
      "url": "https://youtube.com/embed/xYrPGIJ2qoo",
      "title": "Макс Барських",
      "id": "edaa4a64e63d7e9df98b5456d3ee18aa",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Україна [Lyric video]"
    },
    {
      "url": "https://youtube.com/embed/2PWCn8QpEtg",
      "title": "Сергій Лазановський|RIDNYI feat DIRESH",
      "id": "0d00690861d0153db4906fdb08b204c6",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "З C У"
    },
    {
      "url": "https://youtube.com/embed/552B7dZjcNM",
      "title": "Іван Дорн",
      "id": "9054cd70518682eb08baf5bc90eea221",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Нескорена"
    },
    {
      "url": "https://youtube.com/embed/nLeYPk_-lYs",
      "title": "ЗЛАТА ОГНЄВІЧ",
      "id": "e8d5d06acc186a3a80ebe1343c13bead",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Лелека"
    },
    {
      "url": "https://youtube.com/embed/PL_E46LE_NOwc13CHfrqvv-g9aOxUSD5ky",
      "title": "ЛЮСЯ КАВА",
      "id": "9f5b491d11af68fcfa344ad77126a9bb",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Маємо жити"
    },
    {
      "url": "https://youtube.com/embed/CmwMCM1A7jQ",
      "title": "Музика війни 2022",
      "id": "40e0dc0dd3b13ae88dbf9ae3ad6536e2",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Пісні про україну 2022 | Українська музика 2022"
    },
    {
      "url": "https://youtube.com/embed/cCSkv62weI0",
      "title": "Нежный Шум Моря",
      "id": "0b8acea90256f4d32512416af7b020f4",
      "userId": "246aac98343e9c28f32860533b473086",
      "description": "Звуки Волн Для Сна и Релаксации"
    },
    {
      "url": "https://youtube.com/watch?v=JCOJS1wWmeo",
      "title": "Музика для праці",
      "id": "184df90d7d457d1ee38b5dfa50db6df2",
      "userId": "ddffcd7b27e8e0ddf48098f48233dbbe",
      "description": "Нереально крутий трек, коли починаєш під нього працювати, то все ніби саме складається і виходить."
    }
  ],
  heading: "Chester",
  buttonOnClick: action("submit"),
};