import React from 'react';
import NewExpense from './NewExpense';
import Expenses from './Expenses';

function App() {
  const expenses=[
    {
      id:"e1",
      title: "Paper",
      amount:94.2,
      date:new Date(2020,3,23),
    },
    {id:"e2",title:"Car Insurance", amount:99.65,date:new Date(2020,4,24)},
    {id:"e3", title:"New Desk",amount:99.74,date:new Date(2020,5,25)},
  ];

  
  return (
    <div>
      <h1>Let's Get Started!</h1>
      <NewExpense />
      <Expenses items={expenses}/>
      
      </div>
  );
}

export default App;
