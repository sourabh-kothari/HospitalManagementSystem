package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;

public interface userRepository extends JpaRepository<User, Integer> {

}
