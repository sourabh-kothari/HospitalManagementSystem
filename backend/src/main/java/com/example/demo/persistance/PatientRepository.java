package com.example.demo.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
	 @Query("from Patient  where did=?1")
		List<Patient> findByDid(int id); 
}
