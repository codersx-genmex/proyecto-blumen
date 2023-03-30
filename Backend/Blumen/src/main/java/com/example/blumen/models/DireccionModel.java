package com.example.blumen.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table (name="direcciones")
public class DireccionModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(unique=true, nullable=false)
    private Long id;
    @Column(nullable=false)
    private String calle;
    private String numInterior;
    @Column(nullable=false)
    private String numExterior;
    @Column(nullable=false)
    private String codigoPostal;
    private String referencia;
    
    @OneToOne(mappedBy = "direccion")
    private UsuarioTieneDireccionModel utdm;
    
	public DireccionModel() {
	}

	public DireccionModel(Long id, String calle, String numInterior, String numExterior, String codigoPostal,
			String referencia) {
		this.id = id;
		this.calle = calle;
		this.numInterior = numInterior;
		this.numExterior = numExterior;
		this.codigoPostal = codigoPostal;
		this.referencia = referencia;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public String getNumInterior() {
		return numInterior;
	}

	public void setNumInterior(String numInterior) {
		this.numInterior = numInterior;
	}

	public String getNumExterior() {
		return numExterior;
	}

	public void setNumExterior(String numExterior) {
		this.numExterior = numExterior;
	}

	public String getCodigoPostal() {
		return codigoPostal;
	}

	public void setCodigoPostal(String codigoPostal) {
		this.codigoPostal = codigoPostal;
	}

	public String getReferencia() {
		return referencia;
	}

	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}
}