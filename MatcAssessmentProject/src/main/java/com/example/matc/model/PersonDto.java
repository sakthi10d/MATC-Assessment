package com.example.matc.model;

public class PersonDto {
	
          int id;
          String userName;
          String password;
          String email;
          String mobileNumber;
          
          
          
		public PersonDto(int id, String userName, String password, String email, String mobileNumber) {
			super();
			this.id = id;
			this.userName = userName;
			this.password = password;
			this.email = email;
			this.mobileNumber = mobileNumber;
		}



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



		@Override
		public String toString() {
			return "PersonDto [id=" + id + ", userName=" + userName + ", password=" + password + ", email=" + email
					+ ", mobileNumber=" + mobileNumber + "]";
		}
          
          
}
