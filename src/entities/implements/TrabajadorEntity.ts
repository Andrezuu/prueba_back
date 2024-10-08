import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { IPedido } from "../IPedido";
import { ITrabajador } from "../ITrabajador";
import { IVendedor } from "../IVendedor";
import { VendedorEntity } from "./VendedorEntity";
import { PedidoEntity } from "./PedidoEntity";
import { ISucursal } from "../ISucursal";
import { SucursalEntity } from "./SucursalEntity";
import { FlujoFinancieroEntity } from "./FlujoFinancieroEntity";
import { IFlujoFinanciero } from "../IFlujoFinanciero";
import { IUser } from "../IUser";
import { UserEntity } from "./UserEntity";

@Entity({ name: "Trabajador" })
export class TrabajadorEntity implements ITrabajador {
  @PrimaryGeneratedColumn()
  id_trabajador!: number;

  @Column({ type: "varchar" })
  nombre!: string;

  @Column()
  numero!: number;

  @Column({ type: "varchar" })
  rol!: string;

  @Column({ type: "varchar" })
  estado!: string;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user!: IUser;
  @OneToMany(
    () => VendedorEntity,
    (vendedorEntity) => vendedorEntity.trabajador
  )
  vendedor!: IVendedor[];

  @OneToMany(() => PedidoEntity, (pedidoEntity) => pedidoEntity.trabajador)
  pedido!: IPedido[];

  @OneToMany(
    () => FlujoFinancieroEntity,
    (flujoFinancieroEntity) => flujoFinancieroEntity.trabajador
  )
  flujoFinanciero!: IFlujoFinanciero[];

  @ManyToOne(
    () => SucursalEntity,
    (sucursalEntity) => sucursalEntity.trabajador
  )
  @JoinColumn({ name: "id_sucursal" })
  sucursal!: ISucursal[];
}
