package com.example.blumen.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.blumen.models.PedidoTieneProductoModel;


@Repository
public interface PedidoTieneProductoRepository extends CrudRepository<PedidoTieneProductoModel, Long> {

	public ArrayList<PedidoTieneProductoModel> findByid(Long id);

}
