package com.example.blumen.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.blumen.models.PedidoTieneProductoModel;
import com.example.blumen.repositories.PedidoTieneProductoRepository;


@Service
public class PedidoTieneProductoService {

	@Autowired
	PedidoTieneProductoRepository pedidoTieneProductoRepository;

	public boolean eliminar(Long id) {
		try {
			pedidoTieneProductoRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public ArrayList<PedidoTieneProductoModel> listarTodos() {
		return (ArrayList<PedidoTieneProductoModel>) pedidoTieneProductoRepository.findAll();
	}

	public Optional<PedidoTieneProductoModel> obtenerPorId(Long id) {
		return pedidoTieneProductoRepository.findById(id);
	}

	public void crearTablaPivote(PedidoTieneProductoModel tablaPivote) { 
		pedidoTieneProductoRepository.save(tablaPivote);
	}
}
