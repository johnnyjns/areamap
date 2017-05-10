var lms = true;

if (lms)
{
	//Atribui o objeto pipwerks.SCORM na variavel scorm
	var scorm = pipwerks.SCORM,
		trace = pipwerks.UTILS.trace;
	//Definição da versão do SCORM utilizada
	scorm.version = "1.2";
	//Inicia a conexão com o SCORM
	scorm.init();

	//Verifica se conexão com LMS ainda está ativa
	window.onunload = window.onbeforeunload = function()
	{
		if(scorm.connection.isActive)
		{
			trace("Finalizando conexão no Unload");
			fecharJanela();
		}
	}
}

function fecharJanela()
{
	var tab = window.open(window.location, "_self"),
		tab2 = window.open(window.location,"_top");

	scorm.data.set("cmi.core.lesson_status", "completed");
	scorm.data.set("cmi.core.score.raw", 100);
	scorm.data.set("cmi.core.score.min", 0);
	scorm.data.set("cmi.core.score.max", 100);
	scorm.save();
	scorm.quit();
	tab.close();
	tab2.close();
}
