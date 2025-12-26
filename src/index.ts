import dotenv from "dotenv";
import { listDatasets } from "@arizeai/ax-client";

// Load environment variables
dotenv.config();

const datasets = await listDatasets();

console.log("Available datasets:", datasets);
