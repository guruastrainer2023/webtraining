package com.training;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.training.model.Circle;
import com.training.model.Customer;
import com.training.model.HelloWorld;
import com.training.model.Loan;
import com.training.model.Shape;

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
        ApplicationContext context;
        context=new ClassPathXmlApplicationContext("beans.xml");
        
       // HelloWorld helloWorld=(HelloWorld) context.getBean("hw");
       // System.out.println(helloWorld);
        
       // Shape shape;
      //  shape=(Shape) context.getBean("squareBean");
        //System.out.println(shape.getArea());
        
        //here
        
      //  Customer customer=(Customer) context.getBean("customerBean");
      //  System.out.println(customer);
        
        	Loan loan=(Loan) context.getBean("loanBean");
        	System.out.println(loan);
        
        
    }
}
