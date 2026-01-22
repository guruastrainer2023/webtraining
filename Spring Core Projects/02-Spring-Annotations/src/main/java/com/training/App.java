package com.training;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.training.config.MyConfiguration1;
import com.training.model.HelloWorld;
import com.training.model.Person;

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
       ApplicationContext context;
       context=new AnnotationConfigApplicationContext(MyConfiguration1.class);
       
       HelloWorld helloWorld=(HelloWorld) context.getBean("hw");
       System.out.println(helloWorld);
       
       Person person=(Person) context.getBean("personBean");
       System.out.println(person);
    }
}
