package com.training.model;

public class Circle implements Shape{
	int radius;

	@Override
	public void setSize(int size) {
		this.radius=size;
		
	}

	@Override
	public double getArea() {
		
		return 3.14*this.radius*this.radius;
	}

	
	
	
}
