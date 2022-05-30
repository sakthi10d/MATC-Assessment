package com.example.matc.mongorepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.matc.mongomodel.AddressMongo;

@Repository
public interface AddressMongoRepository extends MongoRepository<AddressMongo, String> {

}
