import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { pokeapi } from "../services/pokemonAPI";

const columns = [
  { field: "name", headerName: "Pokemon Name", width: 200 },
  { field: "url", headerName: "URL", width: 300 },
  {
    field: "image",
    headerName: "Image",
    width: 200,
    renderCell: (params) => {
      return <img src={params.row.image} height={48} alt="image" />;
    },
  },
];

const PokemonTable = () => {
  const [rows, setRows] = React.useState([]);
  const fetchData = async () => {
    const pokemonDataWithImageUrl = [];
    const pokemonData = await pokeapi.getPokemonData();
    for (const pokedata of pokemonData) {
      const imageUrl = await pokeapi.getPokemonImageUrl(pokedata.url);
      pokemonDataWithImageUrl.push({
        ...pokedata,
        image: imageUrl,
      });
    }
    setRows(pokemonDataWithImageUrl);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default PokemonTable;
