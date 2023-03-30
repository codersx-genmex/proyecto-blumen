package com.example.blumen.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.blumen.models.UsuarioModel;
import com.example.blumen.repositories.UsuarioRepository;

//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;
    
    public boolean eliminarUsuario(Long id) {
    	try {
    		usuarioRepository.deleteById(id);
        	return true; 
		} catch (Exception e) {
			return false;
		}
    }

    public ArrayList<UsuarioModel> listarUsuarios() {
        return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
    }
    
    public UsuarioModel guardarUsuario(UsuarioModel usuario) {
        return usuarioRepository.save(usuario);
    }
    
     public ArrayList<UsuarioModel> obtenerPorEstatus (Boolean estatus) {
      return usuarioRepository.findByEstatus(estatus); 
      }
     
     public Optional<UsuarioModel> obtenerPorId (Long id){
         return usuarioRepository.findById(id);
     }
}