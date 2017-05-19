// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistoria ('La App se Pausó');
		},false);//pause
		document.addEventListener("resume",function(){
			escribehistoria ('La App se Reinició');
		},false);//resume
		document.addEventListener("online",function(){
			escribehistoria ('La app se Conecto de la Red');
		},false);//se desconecto
		document.addEventListener("offline",function(){
			escribehistoria ('La app se Desconecto de la Red');
		},false);//se desconecto
		
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
		
