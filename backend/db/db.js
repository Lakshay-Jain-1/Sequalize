import { Sequelize } from "sequelize";
import config from "../config/config.js";

export const sequelize = new Sequelize(config.development);
