package com.example.matc.model;

public class AddressDto {

	String location;
	String landmark;
	String pincode;

	public AddressDto(String location, String landmark, String pincode) {
		super();
		this.location = location;
		this.landmark = landmark;
		this.pincode = pincode;
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

	@Override
	public String toString() {
		return "AddressDto [location=" + location + ", landmark=" + landmark + ", pincode=" + pincode + "]";
	}



}
