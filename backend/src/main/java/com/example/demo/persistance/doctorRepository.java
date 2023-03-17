package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Doctor;

public interface doctorRepository extends JpaRepository<Doctor, Integer> {
    @Query("from Doctor  where dfield=?1")
	List<Doctor> findByName(String name); 
}
