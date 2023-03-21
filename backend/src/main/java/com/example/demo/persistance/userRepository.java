package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.User;

public interface userRepository extends JpaRepository<User, Integer> {
	@Query(" from User where  uemail = :uemail and  upassword = :upassword")
	public User patientLogin(@Param("uemail") String email, @Param("upassword") String password);
}
