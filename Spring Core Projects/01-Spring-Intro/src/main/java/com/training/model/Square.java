package com.training.model;

public class Square implements Shape{
	int size;

	@Override
	public void setSize(int size) {
		this.size=size;
		
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return this.size*this.size;
	}
	
}
