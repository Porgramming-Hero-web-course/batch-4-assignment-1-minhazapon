{


    class Car {

        constructor(public make: string, public model: string, public year: number){
        }
       
        getCarAge(): number {
           
           const CYear = new Date().getFullYear()
           const fullYear = CYear 
           return fullYear - this.year

        }
   }


   const car = new Car("Honda", "Civic", 2018)

   const carResult = car.getCarAge()
   console.log(carResult)






}