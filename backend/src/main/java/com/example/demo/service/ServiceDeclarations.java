package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Doctor;
import com.example.demo.entity.User;


public interface ServiceDeclarations {
	public void InsertDoctor(Doctor doctor);
	public void UpdateDoctor(Doctor doctor);
	public List<Doctor> displayDoctor();
	public void deleteDoctor(int id);
	public List<User> displayUser();
	public void InsertUser(User user);
	public List<User> getPatientListOfDoctor(String name,Doctor doctor);
}
