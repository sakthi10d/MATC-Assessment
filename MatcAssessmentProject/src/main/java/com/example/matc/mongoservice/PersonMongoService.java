package com.example.matc.mongoservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.matc.mongomodel.PersonMongo;
import com.example.matc.mongorepository.PersonMongoRepository;

@Service
public class PersonMongoService {

	@Autowired
	PersonMongoRepository personMongoRepository;


	public String insertPersonMongo(PersonMongo personMongo) {
		personMongoRepository.save(personMongo);
		return "inserted Successfully in MongoDB";
	}




}
