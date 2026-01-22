package com.training.model;

public class Loan {
	String customerName;
	double loanAmount;
	
	public Loan(String customerName, double loanAmount) {
		super();
		this.customerName = customerName;
		this.loanAmount = loanAmount;
	}

	public Loan() {
		super();
		
	}

	@Override
	public String toString() {
		return "Loan [customerName=" + customerName + ", loanAmount=" + loanAmount + "]";
	}
	
	
}
