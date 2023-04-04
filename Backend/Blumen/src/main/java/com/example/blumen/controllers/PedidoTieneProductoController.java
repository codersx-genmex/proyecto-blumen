package com.example.blumen.controllers;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.blumen.models.PedidoTieneProductoModel;
import com.example.blumen.services.PedidoTieneProductoService;


@RestController
@RequestMapping("/pedidos_tienen_productos")
public class PedidoTieneProductoController {
    @Autowired
    PedidoTieneProductoService pedidoTieneProductoService;
    
    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id) {
    	boolean ok = pedidoTieneProductoService.eliminar(id);
    	if (ok) {
			return "Se elimino el usuario";
		} else {
			return "No se elimino el usuario";
		}
    }
    
    @GetMapping()
    public ArrayList<PedidoTieneProductoModel> getTablaPivote() {
        return pedidoTieneProductoService.listarTodos();
    }
    @GetMapping(path = "/{id}")
    public Optional<PedidoTieneProductoModel> getById(@PathVariable ("id")Long id){
        return pedidoTieneProductoService.obtenerPorId(id);
    }
    
    @PostMapping
	public void postTablaPivote(@RequestBody PedidoTieneProductoModel tablaPivote) 
	{
    	pedidoTieneProductoService.crearTablaPivote(tablaPivote); 
	}
    
}
