package com.example.blumen.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedidos")
public class PedidoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	@Column(nullable = false)
	private String numPedido;
	@Column(nullable = false)
	private Integer cantidad;
	@Column(nullable = false)
	private Float pagoTotal;
	private String claveRastreo;
	@Column(nullable = false)
	private String estatus;
	
	@OneToOne(mappedBy = "pedido")
    private PedidoTieneProductoModel ptpm;

	public PedidoModel() {

	}

	public PedidoModel(Long id, String numPedido, Integer cantidad, float pagoTotal, String claveRastreo,
			String estatus) {
		this.id = id;
		this.numPedido = numPedido;
		this.cantidad = cantidad;
		this.pagoTotal = pagoTotal;
		this.claveRastreo = claveRastreo;
		this.estatus = estatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumPedido() {
		return numPedido;
	}

	public void setNumPedido(String numPedido) {
		this.numPedido = numPedido;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public float getPagoTotal() {
		return pagoTotal;
	}

	public void setPagoTotal(float pagoTotal) {
		this.pagoTotal = pagoTotal;
	}

	public String getClaveRastreo() {
		return claveRastreo;
	}

	public void setClaveRastreo(String claveRastreo) {
		this.claveRastreo = claveRastreo;
	}

	public String getEstatus() {
		return estatus;
	}

	public void setEstatus(String estatus) {
		this.estatus = estatus;
	}
}