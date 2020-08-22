window.onload = function(){
	let dabba=document.querySelector('.dabba');
	let ypos=document.getElementById('ypos');
	ypos.addEventListener('change',function()
	{
		dabba.style.top= this.value+'px';
		
	})

	let xpos=document.querySelector('#pos-x');
	xpos.onchange=function()
	{
		dabba.style.left=this.value+'px';
	}

	let size=document.querySelector('#size');
	size.addEventListener('change',function(){
		dabba.style.transform='scale('+this.value+')';
	})

	let opac=document.querySelector('#opac');
	opac.onchange=function() {
		dabba.style.opacity=this.value;
	}

	let shape=document.getElementById('shape');
	let okbtn=document.querySelector('.okbtn');
	okbtn.onclick=function(){
		console.log('clicked');
		let option=shape.value;
		if(option === '1')
		{
			dabba.style.borderRadius= '0';
			dabba.style.transform='rotate(0deg)';
		}
		else if(option === '2')
		{
			dabba.style.borderRadius='50%';
		}
		else if(option === '3')
		{
			dabba.style.borderRadius='0';
			dabba.style.transform='rotate(45deg)';
		}
	}

	let code=document.querySelector('#hex-code');
	code.onkeypress=function(e){
		if(e.which === 13)
		{
			dabba.style.background='#'+this.value;
		}
	}

	let r=document.getElementById('rgba-r');
	let g=document.getElementById('rgba-g');
	let b=document.getElementById('rgba-b');
	let a=document.getElementById('rgba-a');
	r.onchange=function()
	{
		dabba.style.background='rgba('+r.value+','+g.value+','+b.value+','+a.value+')';
	}
	g.onchange=function()
	{
		dabba.style.background='rgba('+r.value+','+g.value+','+b.value+','+a.value+')';
	}
	b.onchange=function()
	{
		dabba.style.background='rgba('+r.value+','+g.value+','+b.value+','+a.value+')';
	}
	a.onchange=function()
	{
		dabba.style.background='rgba('+r.value+','+g.value+','+b.value+','+a.value+')';
	}

}
