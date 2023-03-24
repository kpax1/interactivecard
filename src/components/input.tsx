import React from 'react'
import '../components/input.css'

export default function Input(props:{
    name:string;
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    number: string;
    numChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    month:string;
    monthChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    cvc:string;
    cvcchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    year:string;
    yearChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    submit:() => void;
    invalidCvc: boolean | null;
    invalidnumber: boolean | null;
    invalidMonth:boolean |null;
    invalidYear: boolean | null;
    showthank: boolean;

}) {const {name,handleChange,number,numChange,month,monthChange,cvc,cvcchange,submit,year,yearChange,invalidCvc,invalidnumber,invalidMonth,invalidYear,showthank} =props
  return (
    <div className='inputsection'>
    <div className='input'>
    <div>
    <label htmlFor="name">CARDHOLDER NAME</label>

      <div className='textbox'>
    <input type="text" placeholder='name' id='name'
    value={name}
    onChange={handleChange}
    required
    />
    </div>
    </div>
  <div className=''>
  <label htmlFor="numbersinput">CARD NUMBER</label>

    <div className='invalidnumber'>
    <input className={invalidnumber ? 'numbersinput' : ''} type="text" placeholder='e.g. 1234 5678 9012 3456' id='numbersinput'
      value={number} onChange={numChange}
      
    />
           <p>{invalidnumber ? "wrong format numbers only": null}</p>

    </div>
    </div>    

    <label htmlFor='numberandcvcinput'>Exp. Date (MM/YY)</label>
    <label htmlFor='cvcinput'>CVC</label>

<div className='nandcvc'>
  <div className='numberandcvcinput' 
  id='numberandcvcinput'>

    <input className={invalidMonth ? 'yyinput' : ''}type="number" placeholder='MM' 
    id='yy'
    required
    value={month}
    onChange={monthChange}
  
    />


  <input className={invalidYear ? 'mminput' : ''}type="number" placeholder='YY' required
  value={year} onChange={yearChange}
    />
        <p>{invalidMonth || invalidYear ? "can't be clear ": null}</p>

    </div>
    <div className='cvcinputbox'>

    <input className={invalidCvc ? 'cvcinput' : ''}type="number" placeholder='e.g 123'
    value={cvc} onChange={cvcchange}
    />
          <p>{invalidCvc ? "can't be clear ": null}</p>

    </div>

    </div>
    <div className='error'>

    </div>
    <button className='confirm'
    onClick={submit}> 
    confirm </button>
    </div>

    </div>

      )
}
