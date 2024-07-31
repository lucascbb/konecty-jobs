import { v4 as uuidv4 } from "uuid";
import { Brand } from "../interfaces/index";

const brands: Brand[] = [
  { id: uuidv4(), name: "Nike" },
  { id: uuidv4(), name: "Adidas" },
  { id: uuidv4(), name: "Puma" },
  { id: uuidv4(), name: "Converse" },
  { id: uuidv4(), name: "New Balance" },
  { id: uuidv4(), name: "Crocs" },
  { id: uuidv4(), name: "Vans" },
];

export default brands;