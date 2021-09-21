import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});

export const pokeapi = {
  getPokemonData: async () => {
    const response = await instance.get("/pokemon");
    // if response status from pokeapi is HTTP-200, return the data
    if (response.status === 200) {
      // the result would be JSON array of object {name: string, url: string}
      return response.data.results.map((r) => ({
        id: Math.random() * 1000,
        name: r.name,
        url: r.url,
      }));
    } else {
      // return null if the response status other than HTTP-200
      return null;
    }
  },
  getPokemonImageUrl: async (url) => {
    const response = await axios.get(url);
    if (response.status === 200) {
      const spriteUrl = response.data.sprites.other.dream_world.front_default;
      return spriteUrl;
    }
    return "";
  },
};
