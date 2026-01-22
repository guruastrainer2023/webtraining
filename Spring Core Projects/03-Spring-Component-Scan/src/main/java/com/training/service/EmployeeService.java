package com.training.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.training.db.EmployeeDb;

@Component
public class EmployeeService {

	@Autowired
	EmployeeDb employeeDb;

	@Override
	public String toString() {
		return "EmployeeService [employeeDb=" + employeeDb + "]";
	}

	
}
