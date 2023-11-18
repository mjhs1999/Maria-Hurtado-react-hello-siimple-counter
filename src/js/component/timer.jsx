import React, { useState, useEffect } from 'react';

function SelectTimer(){
	const [counter, setCounter] = useState(0);
	const [targetTime, setTargetTime] = useState("20");

	useEffect(() =>{
		const intervalID = setInterval(()=>{
		setCounter( counter => counter +1);
	},10000);

	return () => clearInterval(intervalID);
},[counter,targetTime]);
useEffect(() =>{
	if(counter=== Number(targetTime)){
		alert ("Time was reached");
	}	
},[counter, targetTime]);

return(
	<div className='selectTimer'>
		<input type="number" value={targetValue} onChange={e => setTargetTime(e.target.value)} />
		Set Timer
	</div>
);
}

export {SelectTimer};
