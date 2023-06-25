import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';


export class Catalogue extends Model {
  public id!: number;
  public API!: string;
  public Description!: string;
  public Auth!: string;
  public HTTPS!: string;
  public Cors!: string;
  public Link!: string;
  public Category!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Catalogue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    API: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Auth: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    HTTPS: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Cors: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    Link: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    Category: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Catalogue',
    //paranoid: true
  }
);

export default new Catalogue;