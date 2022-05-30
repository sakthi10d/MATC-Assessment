package com.example.matc.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.matc.entity.Employee;
import com.example.matc.entity.Person;
import com.example.matc.model.EmployeeDto;
import com.example.matc.model.PersonDto;
import com.example.matc.mongomodel.EmployeeMongo;
import com.example.matc.mongomodel.PersonMongo;
import com.example.matc.mongoservice.AddressMongoService;
import com.example.matc.mongoservice.EmployeeMongoService;
import com.example.matc.mongoservice.PersonMongoService;
import com.example.matc.service.AddressService;
import com.example.matc.service.EmployeeService;
import com.example.matc.service.PersonService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;


@RestController
@SecurityRequirement(name = "Authentication")
@RequestMapping("/MATC")
public class MatcController {


	@Autowired
	EmployeeMongoService employeeMongoService;

	@Autowired
	PersonMongoService  personMongoService;

	@Autowired
	AddressMongoService addressMongoService;

	@Autowired
	EmployeeService employeeService;

	@Autowired
	PersonService personService;

	@Autowired
	AddressService addressService;


	//@ApiOperation(value = "All", notes = "All Api Call Details in Swagger2", code = 200)
	//person
	@PostMapping("/insertperson")	
	public String insertPersonDetails(@RequestBody PersonDto personDto) {

		Person person = new Person(); 
		BeanUtils.copyProperties(personDto, person);
		personService.insertPerson(person);

		PersonMongo personMongo = new PersonMongo();
		BeanUtils.copyProperties(personDto, personMongo);
		personMongoService.insertPersonMongo(personMongo);

		return "Inserted Successfully in Both";
	}

	@GetMapping("/getallperson")
	public List<Person> getaLLPerson(@RequestParam (defaultValue = "0")Integer pageNo,
			@RequestParam(defaultValue = "10")Integer pageSize,@RequestParam(defaultValue = "id")String sortBy){

		List<Person> personList = personService.getPersonDetails(pageNo, pageSize, sortBy);
		return personList;
	}


	@GetMapping("/getperson/{mobileNumber}")
	public Person getPersonDetailsBymobileNumber(@PathVariable String mobileNumber) {
		return personService.getPersonByMobileNumber(mobileNumber);
	}


	//employee
	@PostMapping("/insertemployee")
	public String insertEmployee(@RequestBody EmployeeDto employeeDto) {
		Employee employee = new Employee();
		BeanUtils.copyProperties(employeeDto, employee);
		employeeService.insertEmployee(employeeDto);

		EmployeeMongo employeeMongo = new EmployeeMongo();
		BeanUtils.copyProperties(employeeDto, employeeMongo);
		employeeMongoService.insertEmployeeMongo(employeeDto);


		return "insert successfully";

	}


	@GetMapping("/getemployee")
	public List<Employee> getEmployeeDetails(@RequestParam(defaultValue = "0") Integer pageNo, 
			@RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy){

		List<Employee> employeeList = employeeService.getEmployee(pageNo, pageSize,sortBy);
		return employeeList;
	}

    


}
