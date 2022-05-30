package com.example.matc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.matc.entity.Address;

@Repository
public interface AddressRewpository extends JpaRepository<Address,String> {

}
