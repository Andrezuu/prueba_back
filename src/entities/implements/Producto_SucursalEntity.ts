import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { IProducto } from "../IProducto";
import { IProducto_Sucursal } from "../IProducto_Sucursal";
import { ISucursal } from "../ISucursal";
import { ProductoEntity } from './ProductoEntity';
import { SucursalEntity } from './SucursalEntity';

@Entity({ name: 'Producto_Sucursal' })
export class Producto_SucursalEntity implements IProducto_Sucursal {

    @PrimaryColumn({ nullable: false })
    id_producto!: number;

    @PrimaryColumn({ nullable: false })
    id_sucursal!: number;

    @Column()
    cantidad_por_sucursal!: number;

    @Column({ default: 0 })
    numero_caja!: number;

    @ManyToOne(() => ProductoEntity, productoEntity => productoEntity.producto_sucursal)
    @JoinColumn({ name: 'id_producto' })
    producto!: IProducto;

    @ManyToOne(() => SucursalEntity, sucursalEntity => sucursalEntity.producto_sucursal)
    @JoinColumn({ name: 'id_sucursal' })
    sucursal!: ISucursal;
}