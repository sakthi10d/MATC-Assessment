package com.example.matc.mongoservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.matc.model.EmployeeDto;
import com.example.matc.mongomodel.AddressMongo;
import com.example.matc.mongomodel.EmployeeMongo;
import com.example.matc.mongomodel.PersonMongo;
import com.example.matc.mongorepository.AddressMongoRepository;
import com.example.matc.mongorepository.EmployeeMongoRepository;
import com.example.matc.mongorepository.PersonMongoRepository;

@Service
public class EmployeeMongoService {

	@Autowired
    PersonMongoRepository personMongoRepository;

	@Autowired
	EmployeeMongoRepository employeeMongoRepository;
	
	@Autowired
	AddressMongoRepository addressMongoRepository;
     
	

	public String insertEmployeeMongo(EmployeeDto employeeDto) {
		
		PersonMongo personMongo = personMongoRepository.findByMobileNumber(employeeDto.getMobileNumber());
		
		if (personMongoRepository.existsByMobileNumber(employeeDto.getMobileNumber())) {
			
			EmployeeMongo employeeMongo = new EmployeeMongo();
			employeeMongo.setPersonMongo(personMongo);
			employeeMongo.setId(employeeDto.getId());
			employeeMongo.setDesignation(employeeDto.getDesignation());
			employeeMongo.setExperience(employeeDto.getExperience());
			employeeMongo.setSalary(employeeDto.getSalary());
			employeeMongoRepository.save(employeeMongo);
			
			
			AddressMongo addressMongo = new AddressMongo();
			addressMongo .setEmployeeMongo(employeeMongo);
			addressMongo .setLandmark(employeeDto.getLandmark());
			addressMongo .setLocation(employeeDto.getLocation());
			addressMongo .setPincode(employeeDto.getPincode());
		    addressMongoRepository.save(addressMongo);
		    
		    return "inserted SuccessFully in MongoDB";
		}
		
		return "Failed in MongoDB";
	}
	
	
	
}
