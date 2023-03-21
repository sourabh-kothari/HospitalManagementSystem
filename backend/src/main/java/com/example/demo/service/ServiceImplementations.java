package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Doctor;
import com.example.demo.entity.Patient;
import com.example.demo.entity.User;
import com.example.demo.persistance.PatientRepository;
import com.example.demo.persistance.doctorRepository;
import com.example.demo.persistance.userRepository;

@Service
public class ServiceImplementations implements ServiceDeclarations {
	public doctorRepository drepo;
	public userRepository urepo;
	public PatientRepository prepo;
	
	@Autowired
	public ServiceImplementations(doctorRepository drepo, userRepository urepo, PatientRepository prepo) {
		super();
		this.drepo = drepo;
		this.urepo = urepo;
		this.prepo=prepo;
	}
	@Override
	@Transactional
	public void InsertDoctor(Doctor doctor) {
		drepo.save(doctor);
	}

	@Override
	@Transactional
	public void UpdateDoctor(Doctor doctor) {
		drepo.save(doctor);
	}

	@Override
	@Transactional
	public List<Doctor> displayDoctor() {
		return drepo.findAll();
	}

	@Override
	@Transactional
	public void deleteDoctor(int id) {
		drepo.deleteById(id);
	}

	@Override
	@Transactional
	public void InsertUser(User user) {
		//Doctor doctor=drepo.findById(user.getDid()).get();
		//doctor.addUsers(user);
		urepo.save(user);
		//doctor.setDpatientcount();
		
	}
	@Override
	@Transactional
	public List<Patient> getPatientListOfDoctor(int did, Doctor doctor) {
		return doctor.getPatient();
	}
	@Override
	@Transactional
	public List<Patient> displayPatient() {
		
		return prepo.findAll();
	}
	@Override
	@Transactional
	public void InsertPatient(Patient patient) {
		Doctor doctor=drepo.findById(patient.getDid()).get();
		doctor.addPatient(patient);
		prepo.save(patient);
		doctor.setDpatientcount();
		
	}
	@Override
	public List<User> displayUser() {
		
		return urepo.findAll();
	}
	@Override
	public List<Patient> getPatientListByDid(int did) {
		return prepo.findByDid(did);
	}
	@Override
	public User login(String email, String password) {
		
		return urepo.patientLogin(email, password);
	}

	

}
