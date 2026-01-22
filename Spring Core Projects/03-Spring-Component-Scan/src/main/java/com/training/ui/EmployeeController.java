package com.training.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.training.service.EmployeeService;

@Component
public class EmployeeController {
	
	@Autowired
	EmployeeService service;

	@Override
	public String toString() {
		return "EmployeeController [service=" + service + "]";
	}

	

}
