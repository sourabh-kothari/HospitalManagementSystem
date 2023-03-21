package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Doctor;
import com.example.demo.entity.Patient;
import com.example.demo.entity.User;


public interface ServiceDeclarations {
	public void InsertDoctor(Doctor doctor);
	public void UpdateDoctor(Doctor doctor);
	public List<Doctor> displayDoctor();
	public void deleteDoctor(int id);
	public List<Patient> displayPatient();
	public void InsertUser(User user);
	public List<User> displayUser();
	public List<Patient> getPatientListOfDoctor(int did,Doctor doctor);
	public void InsertPatient(Patient patient);
	public List<Patient> getPatientListByDid(int did);
	public User login(String email,String password);
	
}
