package com.example.matc.mongomodel;

import javax.persistence.Column;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Person")
public class PersonMongo {

	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	@Column(name = "userName",nullable = false)
	String userName;
	@Column(name = "password",nullable = false)
	String password;
	@Column(name = "email",nullable = false)
	String email;
	@Column(name = "mobileNumber",nullable = false)
	String mobileNumber;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMobileNumber() {
		return mobileNumber;
	}



	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

}
