package com.example.blumen.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.blumen.models.PedidoTieneProductoModel;


@Repository
public interface PedidoTieneProductoRepository extends CrudRepository<PedidoTieneProductoModel, Long> {

}
