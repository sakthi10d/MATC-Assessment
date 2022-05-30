package com.example.matc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.matc.entity.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {


	boolean existsByMobileNumber(String mobileNumber);

	Person findByMobileNumber(String mobileNumber);


}
