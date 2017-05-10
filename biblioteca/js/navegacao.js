var lms = true;

if (lms)
{
	//Instancia um objeto da classe pipwerks.SCORM
	var scorm = pipwerks.SCORM;
	//Definição da versão do SCORM utilizada
	scorm.version = "1.2";
	//Inicia a conexão com o SCORM
	scorm.init();

	//Verifica se conexão com LMS ainda está ativa
	window.onunload = window.onbeforeunload = function()
	{
	    fecharJanela();
	}
}

function fecharJanela()
{
	var tab = window.open(window.location, "_self");
	var tab2 = window.open(window.location,"_top");

	if (lms)
	{
		scorm.data.set("cmi.core.lesson_status", "completed");
		scorm.data.set("cmi.core.score.raw", 100);
		scorm.data.set("cmi.core.score.min", 0);
		scorm.data.set("cmi.core.score.max", 100);
		scorm.save();
		scorm.quit();
	}

	tab.close();
	tab2.close();
}
