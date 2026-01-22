package com.training;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.training.config.MyConfiguration;

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
       ApplicationContext context;
       context=new AnnotationConfigApplicationContext(MyConfiguration.class);
       
       System.out.println(context.getBean("employeeDb"));
       System.out.println(context.getBean("employeeService"));
       System.out.println(context.getBean("employeeController"));
    }
}
