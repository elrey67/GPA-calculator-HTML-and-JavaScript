document.addEventListener('DOMContentLoaded',()=>{
const number=document.getElementById('info')
const conti=document.querySelector('#continue')
const table=document.getElementById('table')
const submit=document.getElementById('submit')
const calculatebutton=document.querySelector('#submit')

let nameofcourse
let score
let unit
const namesarr=[]
const scorearr=[]
const unitarr=[]
let gain=[]

conti.addEventListener('click',(e)=>{
	e.preventDefault()
    create()
	console.log(number.value)
	number.remove()
	conti.remove() 
    })
 
	///table
	
	function create(){
const calculate=document.createElement('button')
	for(let i=0;i<number.value;i++){
	const seperation=document.createElement('div')
	nameofcourse=document.createElement('input')
	nameofcourse.type='text'
	nameofcourse.className='nameofcourse'
	nameofcourse.placeholder='Name of course'
	score=document.createElement('input')
	score.type='text'
	score.className='score'
	score.placeholder='Score'
	unit=document.createElement('input')
	unit.type='text'
	unit.className='unit'
	unit.placeholder='Unit'
	
	calculate.innerHTML='Calculate'
	calculate.id='submit'
	
	
	seperation.append(nameofcourse,score,unit)
	table.appendChild(seperation)
		
	}
	
	submit.appendChild(calculate)

    }
	
	//geting data
	
    function data(){
		const allNames=document.querySelectorAll('.nameofcourse')
		const allScore=document.querySelectorAll('.score')
		const allUnit=document.querySelectorAll('.unit')
		allNames.forEach(name=>{
	namesarr.push(name.value)
	})
	console.log(namesarr)
     allScore.forEach(Score=>{
		 scorearr.push(Score.value)
	 })
	 console.log(scorearr)
	 allUnit.forEach(Unit=>{
		 unitarr.push(Unit.value)
	 })
	 console.log(unitarr)
	 //grades
	 let A=5,
	 B=4,
	 C=3,
	 D=2,
	 E=1,
	 F=0
	 
	 //getting points earned
	 let total
	 for(let i=0;i<scorearr.length;i++){
		 if(scorearr[i]>=70){
			 scorearr[i]=A
		total=parseInt(A*unitarr[i])
		console.log(total)
	}
	   else if((scorearr[i]>=60)&&(scorearr[i]<70)){
		   scorearr[i]=B
		   total=parseInt(B*unitarr[i])
	   }
	   else if((scorearr[i]>=50)&&(scorearr[i]<60)){
		   scorearr[i]=C
		   total=parseInt(C*unitarr[i])
	   }
	   else if((scorearr[i]>=45)&&(scorearr<50)){
		   scorearr[i]=D
		   total=parseInt(D*unitarr[i])
	   }
	   else if((scorearr[i]>=40)&&(scorearr[i]<45)){
		   scorearr[i]=E
		   total=parseInt(E*unitarr[i])
	   }
	   else if(scorearr[i]<40){
		   scorearr[i]=F
		   total=parseInt(F*unitarr[i])
	   }
	   gain.push(total)
	    
	 }
	 console.log(gain) 
	 const all=gain.reduce((strt,accumulator)=>{
	return strt+accumulator
	},0)
	console.log(all)
	
	const sum=unitarr.reduce((strt,acc)=>{
		return parseInt(strt)+parseInt(acc)
	},0)
	console.log(sum)
	
	//result calculation
	
  const cgpa=(all/sum)
  console.log(cgpa.toFixed(2))
  const tce=document.getElementById('tce')
tce.innerHTML=sum
const tcc=document.getElementById('tcc')
tcc.innerHTML=all
const gpa=document.getElementById('gpa')
gpa.innerHTML=cgpa.toFixed(2)

    }

	calculatebutton.addEventListener('click',(e)=>{
	e.preventDefault()
  console.log('clicked')
	data()
	calculatebutton.remove()
    })    
	
	
	})
