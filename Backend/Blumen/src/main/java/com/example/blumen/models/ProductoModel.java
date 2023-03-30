package com.example.blumen.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity // La clase es una entidad de base de datos
@Table(name = "productos") // Nombre de la tabla a la que se mapeará esta entidad

public class ProductoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    
    @Column(name = "nombreRamo", nullable = false)
    private String nombreRamo;
    
    private String imagen;
    
    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;
 
    private String descripcion;
    
    @Column(name = "precio", nullable = false)
    private Float precio;
    
    @ManyToOne
    private CategoriaModel categoria;
    
    
    @OneToOne(mappedBy = "producto")
    private PedidoTieneProductoModel ptpm;
        
    //Constructor vacio
    public ProductoModel() {
    
    }
    
    //Constructor
    public ProductoModel(Long id, String nombreRamo, String imagen, Integer cantidad, String descripcion, Float precio) {
		this.id = id;
		this.nombreRamo = nombreRamo;
		this.imagen = imagen;
		this.cantidad = cantidad;
		this.descripcion = descripcion;
		this.precio = precio;
	}
	
    // inician getters y setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNombreRamo() {
        return nombreRamo;
    }
    
    public void setNombreRamo(String nombreRamo) {
        this.nombreRamo = nombreRamo;
    }
    
    public String getImagen() {
        return imagen;
    }
    
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    
    public Integer getCantidad() {
        return cantidad;
    }
    
    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public Float getPrecio() {
        return precio;
    }
    
    public void setPrecio(Float precio) {
        this.precio = precio;
    }
}