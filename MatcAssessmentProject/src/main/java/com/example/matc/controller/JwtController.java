package com.example.matc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;


@RestController
@SecurityRequirement(name = "Authentication")
@RequestMapping("/security")
public class JwtController {

	@GetMapping("/display")
	public String getDetails() {
		return "JSON WEB TOKEN COMPLETED";
	}
}
