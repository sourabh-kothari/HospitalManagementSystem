package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Doctor;
import com.example.demo.entity.User;
import com.example.demo.persistance.doctorRepository;
import com.example.demo.persistance.userRepository;

@Service
public class ServiceImplementations implements ServiceDeclarations {
	public doctorRepository drepo;
	public userRepository urepo;
	
	@Autowired
	public ServiceImplementations(doctorRepository drepo, userRepository urepo) {
		super();
		this.drepo = drepo;
		this.urepo = urepo;
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
	public List<User> displayUser() {
		return urepo.findAll();
	}
	@Override
	@Transactional
	public void InsertUser(User user) {
		Doctor doctor=drepo.findById(user.getDid()).get();
		doctor.addUsers(user);
		urepo.save(user);
		doctor.setDpatientcount();
		
	}
	@Override
	public List<User> getPatientListOfDoctor(String name, Doctor doctor) {
		return doctor.getUsers();
	}

	

}
