package com.example.matc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.matc.entity.Address;
import com.example.matc.entity.Employee;
import com.example.matc.entity.Person;
import com.example.matc.model.EmployeeDto;
import com.example.matc.repository.AddressRewpository;
import com.example.matc.repository.EmployeeRepository;
import com.example.matc.repository.PersonRepository;

@Service
public class EmployeeService {

	@Autowired
	PersonRepository personRepository;

	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	AddressRewpository addressRewpository;



	public String insertEmployee(EmployeeDto employeeDto) {

		Person person = personRepository.findByMobileNumber(employeeDto.getMobileNumber());
		if (personRepository.existsByMobileNumber(employeeDto.getMobileNumber())) {

			Employee employee = new Employee();
			employee.setPerson(person);
			employee.setId(employeeDto.getId());
			employee.setDesignation(employeeDto.getDesignation());
			employee.setExperience(employeeDto.getExperience());
			employee.setSalary(employeeDto.getSalary());
			employeeRepository.save(employee);


			Address address = new Address();
			address.setEmployee(employee);
			address.setLandmark(employeeDto.getLandmark());
			address.setLocation(employeeDto.getLocation());
			address.setPincode(employeeDto.getPincode());
			addressRewpository.save(address);

			return "inserted Succesfully";

		}

		return "failed";
	}

	public List<Employee> getEmployee(Integer pageNo,Integer pageSize, String sortBy) {

		PageRequest paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<Employee> pagedResult = employeeRepository.findAll(paging);
		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Employee>();
		}
	}



}
