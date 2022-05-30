package com.example.matc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.matc.entity.Person;
import com.example.matc.exception.BussinessException;
import com.example.matc.exception.BussinessExceptionEnum;
import com.example.matc.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	PersonRepository personRepository;


	public String insertPerson(Person person) {
		personRepository.save(person);
		return "inserted Successfully";
	}


	public List<Person> getPersonDetails(Integer pageNo,Integer pageSize,String sortBy) {
		PageRequest paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<Person> pagedResult = personRepository.findAll(paging);
		return pagedResult.getContent();
	}



	public Person getPersonByMobileNumber(String mobileNumber) throws BussinessException{
	Person person=	personRepository.findByMobileNumber(mobileNumber);
		if (person != null) {
			return person;	
		}
		throw new BussinessException(BussinessExceptionEnum.NOT_FOUND.name(),BussinessExceptionEnum.NOT_FOUND);	

	}
}

