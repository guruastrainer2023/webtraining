import { Component } from '@angular/core';

@Component({
  selector: 'app-pipingexample',
  templateUrl: './pipingexample.component.html',
  styleUrl: './pipingexample.component.css'
})
export class PipingexampleComponent {
  otherBankName='icici bank' 
  myBankName="Indus Ind"
  myName="Anju Ambani";
  accountType="Savings Account";
  accountStartDate=new Date(2020,10,25,10,25);
  savingsAccountBalance=5600000.00;
  takenLoanAmount=200000;
  loanTakenDate=new Date(2022,4, 10);
  interestRate=0.15;
  message="Welcome to Angular World ...I am learning Angular Framework";
  description="The Customer Service by this bank is excellent !!"
  myAddress={
    "door Number": "F3",
    "street name":"5th Street",
    "areaName":"Kamakoti Nagar",
    "cityName": "Bangalore"
  }

}
