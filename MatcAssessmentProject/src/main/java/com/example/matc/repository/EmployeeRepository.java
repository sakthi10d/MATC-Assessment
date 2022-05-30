package com.example.matc.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.matc.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

	//Optional<Employee> findEmployeeByDesignation(String designation);

	Page<Employee> findByDesignation(String designation, PageRequest paging);


}
