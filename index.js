const drivers = ['LEC','HAM','VER','LAW','NOR','PIA','RUS','ANT','ALB','SAI','STR','ALO','TSU','HAD','GAS','DOO',
	'HUL','BOR','OCO','BER'];
const pred = new Array(10);
let pos = document.getElementsByClassName("pilot-select");
for(let select of pos ) {
	for (let i = 0; i < drivers.length; i++) {
		let opt = document.createElement("option");
		opt.value = drivers[i];
		opt.text = drivers[i];
		select.appendChild(opt);
	}
}
const output = document.getElementsByClassName("result");
console.log(pos);
document.getElementById("submitreslts").addEventListener("click", getDrivers);
function getDrivers()
{
	var isRight = true
	for (let i=0; i<pred.length; i++)
	{
		pred[i] = pos[i].value;
	}
	for( let i = 0; i < pred.length; i++ )
	{
		for (let j = i + 1; j < pred.length; j++)
		{
			if (pred[i] === pred[j])
			{
				isRight = false;
			}
		
		}
	}
	if(isRight) {
		output[0].innerHTML = `Дивізіон ${document.getElementById("division").value}<br>` +
			`${document.getElementById("firstname").value} ${document.getElementById("lastname").value}<br>` +
			`${document.getElementById("team").value}<br>` +
			`${document.getElementById("session").value}<br>` +
			`1. ${pred[0]}<br>` +
			`2. ${pred[1]}<br>` +
			`3. ${pred[2]}<br>` +
			`4. ${pred[3]}<br>` +
			`5. ${pred[4]}<br>` +
			`6. ${pred[5]}<br>` +
			`7. ${pred[6]}<br>` +
			`8. ${pred[7]}<br>` +
			`9. ${pred[8]}<br>` +
			`10. ${pred[9]}`
	}
	else{
		alert('в прогнозі обрано два пілоти, спробуйте ще раз');
	}
}
