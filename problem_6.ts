{


       

  interface Profile {

    name: string,
    age: number,
    email: string

  }

  const updateProfile = (profle: Profile, UpDts: Partial<Profile> ): Profile =>{

     const upPro = { ...profle, ...UpDts } 

     const all = upPro 

     return all

   }

   const manProfile: Profile = {
    
     name: "Alice",
     age: 26,
     email: "alice@example.com"

   }

   const Manresult = updateProfile(manProfile,  { age:26 } )
   
   const finalResult = Manresult 
   
   console.log(finalResult)





}