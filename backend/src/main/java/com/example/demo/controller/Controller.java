package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Doctor;
import com.example.demo.entity.User;
import com.example.demo.service.ServiceImplementations;



@RestController
@RequestMapping("/hospital")
public class Controller {
	private ServiceImplementations serimp;

	public Controller(ServiceImplementations serimp) {
		this.serimp = serimp;
	}
	
	@PostMapping("/doctor")
	public void insertDoctor(@RequestBody Doctor doctor) {
		serimp.InsertDoctor(doctor);
	}
	@GetMapping("/doctor")
	public List<Doctor> displayDoctor(){
		return serimp.displayDoctor();
	}
	@PutMapping("/doctor")
	public void updateDoctor(@RequestBody Doctor doctor) {
		serimp.UpdateDoctor(doctor);
	}
	@DeleteMapping("/doctor/{id}")
	public void deleteDoctor(@PathVariable(value = "id") int id) {
		serimp.deleteDoctor(id);
	}
	@GetMapping("/user")
	public List<User> displayUser(){
		return serimp.displayUser();
	}
	@PostMapping("/user")
	public void insertUser(@RequestBody User user) {
		serimp.InsertUser(user);
	}
}
