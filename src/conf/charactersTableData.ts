/** @format */

import { ICharacter } from "../services/disneyService";

export interface ITableColumnConfig {
  field: keyof ICharacter;
  displayName: string;
  render?: (row: ICharacter) => JSX.Element | string;
  sortable?: boolean;
  filterable?: boolean;
}

export const disneyCharacterColumns: ITableColumnConfig[] = [
  {
    field: "name",
    displayName: "Character Name",
    render: (row) => row.name,
    sortable: true,
    filterable: true,
  },
  {
    field: "tvShows",
    displayName: "TV Shows Count",
    render: (row) => row.tvShows.length.toString(),
    sortable: false,
    filterable: false,
  }, 
  {
    field: "videoGames",
    displayName: "Video Games Count",
    render: (row) => row.videoGames.length.toString(),
    sortable: false,
    filterable: false,
  },
  {
    field: "allies",
    displayName: "Allies",
    render: (row) => row.allies.join(", ") || "N/A",
    sortable: false,
    filterable: false,
  },
  {
    field: "enemies",
    displayName: "Enemies",
    render: (row) => row.enemies.join(", ") || "N/A",
    sortable: false,
    filterable: false,
  },
];
