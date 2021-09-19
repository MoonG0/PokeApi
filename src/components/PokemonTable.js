import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { pokeapi } from "../services/pokemonAPI";

const columns = [
  { field: "name", headerName: "Pokemon Name", width: 200 },
  { field: "url", headerName: "URL", width: 500 },
];

const PokemonTable = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    pokeapi.getPokemonData().then((pokemonData) => {
      if (pokemonData) {
        setRows(pokemonData);
      }
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default PokemonTable;
