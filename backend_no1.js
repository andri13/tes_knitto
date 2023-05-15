class Worker {
  constructor(hoursWorked, rate, TAX){
    this.hoursWorked = hoursWorked;
    this.rate = rate;
    this.TAX = TAX;
  }
  
  calculateSalary(){
    return this.hoursWorked * this.rate;
  } 
  
  basicSalary(){
    return this.calculateSalary();
  } 
  
  overviewSalary() {
   return this.calculateSalary() - this.TAX;
  }
}
