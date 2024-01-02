//// to do list//
const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');
    var modal = document.getElementById("containertime");
		btn.addEventListener('click', addList);
        const btnclose = document.getElementById('btnclosed');
        




		
		
		function addList(e){
			const notCompleted = document.querySelector('.notCompleted');
			const Completed = document.querySelector('.Completed');
			const newLi = document.createElement('li');
			const checkBtn = document.createElement('button');
		
			const clockBtn = document.createElement('button');
			const referkBtn = document.createElement('button');
			const delBtn = document.createElement('button');
			checkBtn.innerHTML = '<i class="fa fa-check" title="انجام شد" id="ok"></i>';
			clockBtn.innerHTML = '<i class="fa fa-clock fa-fade" title="تنظیم تایمر"></i>';
			delBtn.innerHTML = '<i class="fa fa-trash" title="سطل زباله"></i>';
			referkBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate" title="برگرداندن"></i>';
			if(input.value !==''){
				newLi.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newLi);
				newLi.appendChild(checkBtn);
				newLi.appendChild(clockBtn);
				newLi.appendChild(delBtn);

			}

			checkBtn.addEventListener('click', function (){
				Swal.fire({
					title: 'زمان کار شما به پایان رسید',
					showDenyButton: true,
					confirmButtonText: 'تایید',
					denyButtonText: ' انصراف ',
				   }).then((result) => {
					if (result.isConfirmed) {
						modal.style.display = 'none';
						const parent = this.parentNode;
						parent.remove();
						Completed.appendChild(parent);
						newLi.appendChild(referkBtn);
						checkBtn.style.display = 'none';
						clockBtn.style.display = 'none';
			
					} 
					else if (result.isDenied) {
						h.value = "00";
						m.value = "00";
						s.value = "00";
						stopInterval();
			
					}
				   })
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
			referkBtn.addEventListener('click', function(){
				notCompleted.appendChild(newLi);
				referkBtn.style.display = 'none';
				checkBtn.style.display = 'inline';
				clockBtn.style.display = 'inline';
		
			});
			clockBtn.addEventListener('click', function(){
				modal.style.display = "flex";
			});

	
		}
       

		
		
        
			


  /////timer //////
  
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timercol = document.querySelector("containertime")
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("sec");
const showTimeAll = document.getElementById('donDay');
 let alarmSound = new Audio("../music_2.mp3");
 const btnDone = document.getElementById('save')
let startTimer = null;

function appendZeroS(){
if (s.value < 10 ){
  s.value = "0" + s.value;
}
return;
}
function appendZeroM(){
 if (m.value < 10){
  m.value = "0" + m.value;
}
return;
}
function appendZeroh(){
if (h.value < 10) {
  h.value = "0" + h.value ;
}
return;
}
let sumtime = 0;

function timer(){
  if(h.value == 0 && m.value == 0 && s.value == 0){
      h.value = "00";
      m.value = "00";
      s.value = "00";
  } 
  else if(s.value != 0){
      appendZeroS(s.value--);
      sumtime++;
  }
   else if(m.value != 0 && s.value == 0){
      s.value = 59;
      appendZeroM(m.value--);
      sumtime++;

  } 
  else if(h.value != 0 && m.value == 0){
      m.value = 60;
      appendZeroh(h.value--);
      sumtime++;

  }
    
  return;
  
}

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
            AlarmTimer();
            
        }, 1000);
      
    }
    startInterval();
  
})
function stopInterval() {
    clearInterval(startTimer);
}
reset.addEventListener('click', function(){
  h.value = "00";
  m.value = "00";
  s.value = "00";
  stopInterval()
})



btnclose.addEventListener('click', function(){
	modal.style.display = 'none';
		h.value = "00";
		 m.value = "00";
		 s.value = "00";
		 });

btnDone.addEventListener('click' , function(){
	modal.style.display = 'none';
})
showTimeAll.addEventListener ('click' , function(){
  let minTimer = Math.floor(sumtime / 60) ;
  
  confirm(" کار کرد امروز شما" + " " + minTimer   +" "+ " دقیقه می باشد");
})