
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import Input from './components/input';
import Thank from './components/thank';
function App() {
  const [name, setName] = useState<string>('');
  const [number, setNumber ] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [invalidnumber,setInvalidnumber] = useState<boolean|null>(null);
  const [invalidCvc, setInvalidCvc] = useState<boolean | null>(null);
  const [invalidMonth, setinvalidMonth] = useState<boolean| null>(null);
  const [invalidYear, setinvalidYear] = useState<boolean|null>(null);
  const [showthank, setShowthank] = useState<boolean>(false);
  
 
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
   
    setName(e.target.value.toUpperCase())
  }



  const numChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target.value.length <= 19){
       setNumber(e.target.value.replace(/\s/g, "")
       .replace(/(\d{4})/g, "$1 ")
       .trim())
    } else return
  }

  const monthChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
   setMonth(e.target.value.slice(0 , 2));

   if(e.target.value.length === 0 ){
    setinvalidMonth(true);
  } else if(e.target.value.length === 2) {
    setinvalidMonth(false)
  }

  }

  const cvcchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setCvc(e.target.value.slice(0 , 3));
    if(e.target.value.length === 0 ){
      setInvalidCvc(true);
    } else if(e.target.value.length === 3) {
      setInvalidCvc(false)
    }
  }

  const yearChange = (e:any)=>{
    setYear(e.target.value.slice(0 , 2));
    if (e.target.value.length === 0){
      setinvalidYear(true);
    } else {
      setinvalidYear(false)
    }
  }

  


  const submit=()=>{
    const letters = /^[A-Za-z]+$/;
     if(number.match(letters)){
      setInvalidnumber(true)
      } else {
        setInvalidCvc(false)
      }

    if (cvc.length === 0){
      setInvalidCvc(true);
    } else {
      setInvalidCvc(false);
    }

   

    if(year.length === 0){
      setinvalidYear(true);
    } else if  (year.length ===2){
      setinvalidYear(false);
    }

    if(month.length === 0){
      setinvalidMonth(true);
    } else if (year.length === 2){
      setinvalidMonth(false)
    }



    if(invalidYear===false && invalidMonth === false && invalidCvc===false){
      setShowthank(true);
    } 




  }

console.log(invalidCvc)



  return (
    <div className="App">
      <Card 
      name={name}
      number={number}
      year={year}
      month={month}
      cvc={cvc}
      />

    {!showthank ?
    <Input 
    name={name}
    handleChange={handleChange}
    number={number}
    numChange={numChange}
    month={month}
    monthChange={monthChange}
    cvc={cvc}
    cvcchange={cvcchange}
    submit={submit}
    year={year}
    yearChange={yearChange}
    invalidCvc={invalidCvc}
    invalidnumber={invalidnumber}
    invalidMonth={invalidMonth}
    invalidYear={invalidYear}
    showthank={showthank}
    
    /> :
    < Thank />

  }
     

    </div>
  );
}

export default App;
