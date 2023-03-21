package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Doctor;

public interface doctorRepository extends JpaRepository<Doctor, Integer> {

}
