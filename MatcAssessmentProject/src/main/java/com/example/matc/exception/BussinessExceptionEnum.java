package com.example.matc.exception;

public enum BussinessExceptionEnum {


	NOT_FOUND("Field Not Found", "404"),
	ALREADY_EXIST("Field already Exist","208"),
	BAD_REQUEST("Bad Request","400"),
	UNAUTHORIZED("Unauthorized","401");
	

	String errorCode;
	String message;

	BussinessExceptionEnum(String errorCode ,String message) {

		this.errorCode = errorCode;
		this.message = message;

	}

	public String getCode() {
		return errorCode;
	}

	public void setCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
