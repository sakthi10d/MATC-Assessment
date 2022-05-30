package com.example.matc.mongorepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.matc.mongomodel.PersonMongo;

@Repository
public interface PersonMongoRepository extends MongoRepository<PersonMongo, Integer>{

	PersonMongo findByMobileNumber(String mobileNumber);

	boolean existsByMobileNumber(String mobileNumber);



}
