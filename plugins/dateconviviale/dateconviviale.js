exports.action = function(data, callback, SARAH){

	var moment = require('moment');
	moment.lang('fr');
	//var datedujour = moment().format('LLLL');
	var datedujour = moment().format("dddd, DD MMMM YYYY, HH [heure] mm");
	var jour = moment().date();	
	var mois = moment().month() + 1;
	var annee = moment().year();	

	var text = 'Nous sommes le ';
	text += datedujour;
	text += '.';	
	text += events(jour,mois,annee);
	text += '.';

  // Callback avec TTS
  callback({'tts': text});
}


// Ajoute une petite phrase spéciale selon la date de l'année (Halloween, fête du travail, Noël, ..) 
var events = function(jour,mois,annee){
	  switch (mois)
		{
		// Janvier
		case 1 : switch (jour)
		  {
		  case 1 : return (" BONNE ANNEE " + annee + " !")
		  break
		  }
		// Fevrier
		case 2 : switch (jour)
		  {
		  case 7 : return (" Dans une semaine, c'est la Saint Valentin. Ne l'oubliez pas !")
		  break
		  case 13 : return (" Demain, c'est la Saint Valentin. Ne l'oubliez pas !")
		  break
		  case 14 : return (" Aujourd'hui, c'est la Saint Valentin. Ne l'oubliez pas !")
		  break
		  }
		// Juin  
		case 6 : switch (jour)
		  {
		  case 20 : return (" C'est bientot les vacances.")
		  break
		  }	  
		}
		return (".")
}
