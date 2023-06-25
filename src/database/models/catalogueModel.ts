import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "catalogues",
})
export class Catalogue extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  API!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  Description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Auth!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  HTTPS!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Cors!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Link!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Category!: string;
}