package com.example.matc;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;


@SpringBootApplication
@SecurityScheme(name = "Authentication",description = "JWT token",type = SecuritySchemeType.HTTP,
scheme = "bearer",bearerFormat = "JWT",in = SecuritySchemeIn.HEADER)
@OpenAPIDefinition(info = @Info(title = "Assessments",version = "1.0.0",
description = "ESS system is used for management of employees data and their respective request in a organisation"
		+ " to serve the needs in a efficient manner. "
		+ "API Used for managing employees"))
public class MatcAssessmentProjectApplication {

	Logger logger = LoggerFactory.getLogger(MatcAssessmentProjectApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(MatcAssessmentProjectApplication.class, args);
		System.out.println("MatcAssessmentProjectApplication");
	}

}
