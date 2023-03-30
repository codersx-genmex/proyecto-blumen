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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.blumen.models.UsuarioModel;
import com.example.blumen.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;
    
    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id) {
    	boolean ok = usuarioService.eliminarUsuario(id);
    	if (ok) {
			return "Se elimino el usuario";
		} else {
			return "No se elimino el usuario";
		}
    }
    
    @GetMapping()
    public ArrayList<UsuarioModel> listarUsuarios() {
        return usuarioService.listarUsuarios();
    }
    @PostMapping()
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuariomodelo) {
        return usuarioService.guardarUsuario(usuariomodelo);
    }
    @GetMapping("/query")
    public ArrayList<UsuarioModel> obtenerPorEstatus(@RequestParam("estatus") Boolean estatus) {
        return usuarioService.obtenerPorEstatus(estatus);
    }
    @GetMapping(path = "/{id}")
    public Optional<UsuarioModel> obtenerUsuarioPorId(@PathVariable ("id")Long id){
        return usuarioService.obtenerPorId(id);
    }
}