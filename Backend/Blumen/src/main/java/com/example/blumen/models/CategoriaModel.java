package com.example.blumen.models;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table (name="categorias")
public class CategoriaModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(unique=true, nullable=false)
    private Long id;
    @Column(nullable=false)
    private String nombre;
    private String descripcion;
    
    @OneToMany(mappedBy="categoria")
    private ArrayList<ProductoModel> producto;
    
    
    public CategoriaModel() {
		
	}
	public CategoriaModel(Long id, String nombreCategoria, String descripcion) {
		this.id = id;
		this.nombre = nombreCategoria;
		this.descripcion = descripcion;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombreCategoria() {
		return nombre;
	}
	public void setNombreCategoria(String nombreCategoria) {
		this.nombre = nombreCategoria;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}