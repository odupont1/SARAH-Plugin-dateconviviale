exports.action = function(data, callback, config, SARAH){

	// Recuperation de la config
	config = config.modules.dateconviviale;
	if (!config.Donne_heure){
		console.log("La variable Donne_heure n'est pas configuree");
		// l'orthographe n'est pas exacte pour permettre une bonne vocalisation.
		return callback({'tts' : "La variable, Donne,  heure, n'est pas configurai. Les valeurs correctes sont oui, ou  non."});
	}

	if (!config.Rappel_calendrier){
		console.log("La variable Rappel_calendrier n'est pas configuree");
		// l'orthographe n'est pas exacte pour permettre une bonne vocalisation.
		return callback({'tts' : "La variable, Rappel,  calendrier, n'est pas configurai. Les valeurs correctes sont oui, ou  non."});
	}	
	
	var moment = require('moment');
	moment.lang('fr');
	var donne_heure=config.Donne_heure;
	var rappel_calendrier=config.Rappel_calendrier;
	var jour = moment().date();	
	var mois = moment().month() + 1;
	var annee = moment().year();
	
    if (donne_heure=='oui' || donne_heure=='OUI') {
        var datedujour = moment().format("dddd, DD MMMM YYYY, HH [heure] mm");
    }	
	else { var datedujour = moment().format("dddd, DD MMMM YYYY,");}

    if (rappel_calendrier=='oui' || rappel_calendrier=='OUI') {
        var RappelEvents = events(jour,mois,annee) + ".";
    }	
	else { var RappelEvents = ".";}
	
	var text = 'Nous sommes le ';
	text += datedujour;
	text += '.';	
	text += RappelEvents;


  // Callback avec TTS
  callback({'tts': text});
}


// Ajoute une petite phrase spéciale selon la date de l'année (Halloween, fête du travail, Noël, ..)
// l'orthographe n'est pas exacte pour permettre une bonne vocalisation. 
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
		// Mars
		case 3 : switch (jour)
		  {
		  case 3 : return (" Aujourd'hui, c'est la fete des Grands Maire !")
		  break
		  case 31 : return (" Aujourd'hui, c'est le jour de Paques. Que la chasse aux zeu commence !")
		  break
		  }		  
		// Mai
		case 5 : switch (jour)
		  {
		  case 1 : return (" Aujourd'hui, c'est la fete du travail. Donc : REPOS !")
		  break
		  case 26 : return (" Aujourd'hui, c'est la fete des maire !")
		  break
		  case 31 : return (" Aujourd'hui, c'est la fete des voisins !")
		  break
		  }			  
		// Juin  
		case 6 : switch (jour)
		  {
		  case 16 : return (" Aujourd'hui, c'est la fete des paires !")
		  break  
		  case 21 : return (" Aujourd'hui, c'est la fete de la musique !")
		  break
		  case 24 : return (" Aujourd'hui, c'est la fete de la saint Jean !")
		  break		  
		  }
		// Juillet  
		case 7 : switch (jour)
		  {
		  case 14 : return (" Aujourd'hui, c'est la fete nationnale !")
		  break  
		  }		  
		// Aout  
		case 8 : switch (jour)
		  {
		  case 15 : return (" Aujourd'hui, c'est l'Assomption !")
		  break  
		  }			  
		// Octobre
		case 10 : switch (jour)
		  {
		  case 6 : return (" Aujourd'hui, c'est la fete des Grands Peres !")
		  break
		  case 31 : return (" Aujourd'hui, c'est Hallowine !")
		  break		  
		  }	
		// Novembre
		case 11 : switch (jour)
		  {
		  case 11 : return (" Aujourd'hui, c'est le jour de la signature de l'armistice de la guerre 14, 18 !")
		  break		  
		  }
		// Decembre
		case 12 : switch (jour)
		  {
		  case 25 : return (" Aujourd'hui, c'est le jour de Noel ! Tu as eu quoi comme cadeaux ?")
		  break		  
		  }	
		}
		return (".")
}
