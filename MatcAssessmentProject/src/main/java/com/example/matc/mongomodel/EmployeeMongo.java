package com.example.matc.mongomodel;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Document("Employee")
public class EmployeeMongo {
	
	
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	@Column(name = "designation")
	String designation;
	@Column(name = "experience")
	int experience;
	@Column(name = "salary")
	long salary;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "Person_id")
    private PersonMongo personMongo;
	
	@JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="employee_id")
	private List<AddressMongo> addressMongo;
	
	

	public PersonMongo getPersonMongo() {
		return personMongo;
	}
	public void setPersonMongo(PersonMongo personMongo) {
		this.personMongo = personMongo;
	}
	public List<AddressMongo> getAddressMongo() {
		return addressMongo;
	}
	public void setAddressMongo(List<AddressMongo> addressMongo) {
		this.addressMongo = addressMongo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public long getSalary() {
		return salary;
	}
	public void setSalary(long salary) {
		this.salary = salary;
	}




}
