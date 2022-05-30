package com.example.matc.mongorepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.matc.mongomodel.EmployeeMongo;

@Repository
public interface EmployeeMongoRepository extends MongoRepository<EmployeeMongo, Integer> {


}
