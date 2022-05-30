package com.example.matc.servicetest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.matc.entity.Address;
import com.example.matc.entity.Employee;
import com.example.matc.entity.Person;
import com.example.matc.model.EmployeeDto;
import com.example.matc.mongorepository.AddressMongoRepository;
import com.example.matc.repository.AddressRewpository;
import com.example.matc.repository.EmployeeRepository;
import com.example.matc.repository.PersonRepository;
import com.example.matc.service.EmployeeService;
import com.example.matc.service.PersonService;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class EmployeeTest {

	
	@InjectMocks
	EmployeeService employeeService;
	
	@InjectMocks
	PersonService personService;
	
	@Mock
	EmployeeRepository employeeRepository;
	
	@Mock
	PersonRepository personRepository; 
	
	@Mock
	AddressRewpository addressRewpository; 
	
	
	@Test
	void insertEmployeeTest() {
		
		EmployeeDto employeeDto = new EmployeeDto();
		employeeDto.setId(1);
		employeeDto.setDesignation("employee");
		employeeDto.setExperience(2);
		employeeDto.setSalary(10000);
		employeeDto.setMobileNumber("6381800989");
		employeeDto.setLocation("Chennai");
		employeeDto.setLandmark("porur");
		employeeDto.setPincode("637301");
        
		Person person = new Person();
		person.setMobileNumber("6381800989");;
			
        
		Employee employee = new Employee();
		employee.setPerson(person);
		employee.setId(employeeDto.getId());
		employee.setExperience(employee.getExperience());
		employee.setDesignation(employeeDto.getDesignation());
		employee.setSalary(employeeDto.getSalary());
		
		Address address = new Address();
		address.setEmployee(employee);
		address.setLandmark(employeeDto.getLandmark());
		address.setLocation(employeeDto.getLocation());
		address.setPincode(employeeDto.getPincode());
		
		Employee dto = employeeRepository.save(employee);
		verify(employeeRepository,times(1)).save(employee);

		
	}
	    
}
