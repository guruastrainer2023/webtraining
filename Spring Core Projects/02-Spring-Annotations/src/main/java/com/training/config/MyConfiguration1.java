package com.training.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.training.model.HelloWorld;
import com.training.model.Person;

@Configuration
public class MyConfiguration1 {

	@Bean(name="hw")
	public HelloWorld f1() {
		HelloWorld obj=new HelloWorld();
		obj.setMessage("Welcome to Annotations");
		return obj;
	}
	
	@Bean(name="personBean")
	public Person f2() {
		Person person=new Person();
		person.setId(101);
		person.setName("Poorna");
		person.setAge(50);
		return person;
	}
}
