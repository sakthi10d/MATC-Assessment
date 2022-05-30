package com.example.matc.mongomodel;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.data.mongodb.core.mapping.Document;


@Document("Address")
public class AddressMongo {

	@Id
	@Column(name = "location")
	String location;
	@Column(name = "landmark")
	String landmark;
	@Column(name = "pincode")
	String pincode;
	
	@ManyToOne
	private EmployeeMongo employeeMongo;
	

	public EmployeeMongo getEmployeeMongo() {
		return employeeMongo;
	}
	public void setEmployeeMongo(EmployeeMongo employeeMongo) {
		this.employeeMongo = employeeMongo;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	
	
}
