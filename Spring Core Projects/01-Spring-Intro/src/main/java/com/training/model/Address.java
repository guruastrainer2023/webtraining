package com.training.model;

public class Address {
	String doorNo;
	String areaName;
	String city;
	
	public String getDoorNo() {
		return doorNo;
	}
	public void setDoorNo(String doorNo) {
		this.doorNo = doorNo;
	}
	public String getAreaName() {
		return areaName;
	}
	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	@Override
	public String toString() {
		return "Address [doorNo=" + doorNo + ", areaName=" + areaName + ", city=" + city + "]";
	}
	
	
}
