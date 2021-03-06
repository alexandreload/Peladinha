
 
/**
 * Romanian translation
 * @author Alexandru Tutica <contact@tutica.me>
 * @version 2013-15-12
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.ro = {
		translator : 'Alexandru Tutica (contact@tutica.me)',
		language   : 'Romanian',
		direction  : 'ltr',
		dateFormat : 'j.M.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Eroare',
			'errUnknown'           : 'Eroare necunoscuta.',
			'errUnknownCmd'        : 'Comanda necunoscuta.',
			'errJqui'              : 'Configuratie jQuery UI invalida. Trebuiau incluse componentele selectabile, draggable si droppable',
			'errNode'              : 'elFinder requires DOM Element to be created.',
			'errURL'               : 'Configuratie elFinder invalida! Optiuniile de legatura nu sunt setate.',
			'errAccess'            : 'Acces refuzat.',
			'errConnect'           : 'Nu se poate conecta la backend.',
			'errAbort'             : 'Conexiune anulata.',
			'errTimeout'           : 'Conexiune expirata.',
			'errNotFound'          : 'Backend negasit.',
			'errResponse'          : 'Raspuns backend invalid.',
			'errConf'              : 'Configurare backend invalida.',
			'errJSON'              : 'Modulul PHP JSON nu este instalat.',
			'errNoVolumes'         : 'Volumele citibile nu sunt disponibile.',
			'errCmdParams'         : 'Parametrii pentru comanda "$1" sunt invalizi.',
			'errDataNotJSON'       : 'Datele nu sunt JSON.',
			'errDataEmpty'         : 'Datele sunt goale.',
			'errCmdReq'            : 'Cererea backend necesita numele comenzii.',
			'errOpen'              : 'Nu pot deschide "$1".',
			'errNotFolder'         : 'Obiectul nu este un dosar.',
			'errNotFile'           : 'Obiectul nu este un fisier.',
			'errRead'              : 'Nu pot citi "$1".',
			'errWrite'             : 'Nu pot scrie in "$1".',
			'errPerm'              : 'Permisiune refuzata.',
			'errLocked'            : '"$1" este blocat si nu poate fi redenumit, mutat sau sters.',
			'errExists'            : 'Exista deja un fisier cu numele "$1".',
			'errInvName'           : 'Nume fisier invalid.',
			'errFolderNotFound'    : 'Dosarul nu a fost gasit.',
			'errFileNotFound'      : 'Fisierul nu a fost gasit.',
			'errTrgFolderNotFound' : 'Dosarul tinta "$1" nu a fost gasit.',
			'errPopup'             : 'Browserul a impiedicat deschiderea ferestrei pop-up. Pentru a deschide fisierul trebuie sa permiteti pop-up-uri in browser.',
			'errMkdir'             : 'Nu pot crea dosarul "$1".',
			'errMkfile'            : 'Nu pot crea fisierul "$1".',
			'errRename'            : 'Nu pot redenumi fisierul "$1".',
			'errCopyFrom'          : 'Nu este permisa copierea fisierelor din volumul "$1".',
			'errCopyTo'            : 'Nu este permisa copierea fisierelor in volumul "$1".',
			'errUploadCommon'      : 'Eroare incarcare.',
			'errUpload'            : 'Nu pot incarca "$1".',
			'errUploadNoFiles'     : 'Nu au fost gasite fisiere pentru incarcare.',
			'errMaxSize'           : 'Datele depasesc dimensiunea maxima permisa.',
			'errFileMaxSize'       : 'Fisierul depaseste dimensiunea maxima permisa..',
			'errUploadMime'        : 'Tipul fisierului nu este permis.',
			'errUploadTransfer'    : 'Eroare transfer "$1".', 
			'errSave'              : '"$1" Nu poate fi salvat.',
			'errCopy'              : '"$1" Nu poate fi copiat.',
			'errMove'              : '"$1" Nu poate fi mutat.',
			'errCopyInItself'      : '"$1" Nu poate fi copiat peste el.',
			'errRm'                : '"$1" Nu poate fi sters.',
			'errExtract'           : 'Nu pot extrage fisierele din "$1".',
			'errArchive'           : 'Arhiva nu poate fi creata.',
			'errArcType'           : 'Tip arhiva nesuportat.',
			'errNoArchive'         : 'Fisierul nu este o arhiva or sau este o arhiva de tip nesuportat.',
			'errCmdNoSupport'      : 'Backend nu intelege aceasta comanda.',
			'errReplByChild'       : 'Folderul “$1” nu poate fi inlocuit de un element continut de acesta.',
			'errArcSymlinks'       : 'Din motive de securitate, este interzisa dezarhivarea fisierelor arhivelor care contin symlinks.',
			'errArcMaxSize'        : 'Fișiere arhivei depasesc dimensiunea maxima permisa.',
			'errResize'            : 'Nu pot redimensiona "$1".',
			'errUsupportType'      : 'Tip fisier nesuportat.',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Creeaza arhiva',
			'cmdback'      : 'Inapoi',
			'cmdcopy'      : 'Copiaza',
			'cmdcut'       : 'Taie',
			'cmddownload'  : 'Descarca',
			'cmdduplicate' : 'Dubleaza',
			'cmdedit'      : 'Editeaza fisier',
			'cmdextract'   : 'Extrage fisierele din arhiva',
			'cmdforward'   : 'Inainte',
			'cmdgetfile'   : 'Alege fisiere',
			'cmdhelp'      : 'Despre acest software',
			'cmdhome'      : 'Acasa',
			'cmdinfo'      : 'Obtine informatii',
			'cmdmkdir'     : 'Dosar Nou',
			'cmdmkfile'    : 'Fisier text nou',
			'cmdopen'      : 'Deschide',
			'cmdpaste'     : 'Lipeste',
			'cmdquicklook' : 'Previzualizare',
			'cmdreload'    : 'Reincarca',
			'cmdrename'    : 'Redenumeste',
			'cmdrm'        : 'Sterge',
			'cmdsearch'    : 'Gaseste fisiere',
			'cmdup'        : 'Mergi la dosarul parinte',
			'cmdupload'    : 'Incarca fisiere',
			'cmdview'      : 'Examinare',
			'cmdresize'    : 'Redimensioneaza si roteste',
			'cmdsort'      : 'Sorteaza',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Inchide',
			'btnSave'   : 'Salveaza',
			'btnRm'     : 'Sterge',
			'btnApply'  : 'Aplica',
			'btnCancel' : 'Revoca',
			'btnNo'     : 'Nu',
			'btnYes'    : 'Da',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Deschid dosarul',
			'ntffile'     : 'Deschid fisierul',
			'ntfreload'   : 'Reincarc continutul dosarului',
			'ntfmkdir'    : 'Creez dosarul',
			'ntfmkfile'   : 'Creez fisierul',
			'ntfrm'       : 'Sterg fisierele',
			'ntfcopy'     : 'Copiez fisierele',
			'ntfmove'     : 'Mut fisierele',
			'ntfprepare'  : 'Ma pregatesc sa copiez fisierele',
			'ntfrename'   : 'Redenumesc fisierele',
			'ntfupload'   : 'Incarc fisierele',
			'ntfdownload' : 'Descarc fisierele',
			'ntfsave'     : 'Salvez fisiere',
			'ntfarchive'  : 'Creez arhiva',
			'ntfextract'  : 'Extrag fisierele din arhiva',
			'ntfsearch'   : 'Caut fiserele',
			'ntfsmth'     : 'Fac eu ceva :P',
      		'ntfloadimg'  : 'Incarc imaginea',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'necunoscuta',
			'Today'       : 'Astazi',
			'Yesterday'   : 'Ieri',
			'Jan'         : 'Ian',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'Mai',
			'Jun'         : 'Iun',
			'Jul'         : 'Iul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Oct',
			'Nov'         : 'Noi',
			'Dec'         : 'Dec',
			'January'     : 'Ianuarie',
			'February'    : 'Februarie',
			'March'       : 'Martie',
			'April'       : 'Aprilie',
			'May'         : 'Mai',
			'June'        : 'Iunie',
			'July'        : 'Iulie',
			'August'      : 'August',
			'September'   : 'Septembrie',
			'October'     : 'Octombrie',
			'November'    : 'Noiemrie',
			'December'    : 'Decembrie',
			'Sunday'      : 'Duminica', 
			'Monday'      : 'Luni', 
			'Tuesday'     : 'Marti', 
			'Wednesday'   : 'Miercuri', 
			'Thursday'    : 'Joi', 
			'Friday'      : 'Vineri', 
			'Saturday'    : 'Sambata',
			'Sun'         : 'Dum', 
			'Mon'         : 'Lun', 
			'Tue'         : 'Mar', 
			'Wed'         : 'Mie', 
			'Thu'         : 'Joi', 
			'Fri'         : 'Vin', 
			'Sat'         : 'Sam',
			/******************************** sort variants ********************************/
			'sortnameDirsFirst' : 'dupa nume (dosare intai)', 
			'sortkindDirsFirst' : 'dupa tip (dosare intai)', 
			'sortsizeDirsFirst' : 'dupa marime (dosare intai)', 
			'sortdateDirsFirst' : 'dupa data (dosare intai)', 
			'sortname'          : 'dupa nume', 
			'sortkind'          : 'dupa tip', 
			'sortsize'          : 'dupa marime',
			'sortdate'          : 'dupa data',
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Confirmare necesara',
			'confirmRm'       : 'Esti sigur ca vrei sa stergi fisiere?<br/>Acest lucru este irevocabil!',
			'confirmRepl'     : 'Inlocuiesc fisierul vechi cu cel nou?',
			'apllyAll'        : 'Aplica la toate',
			'name'            : 'Nume',
			'size'            : 'Marime',
			'perms'           : 'Permisiuni',
			'modify'          : 'Modificat',
			'kind'            : 'Tip',
			'read'            : 'citire',
			'write'           : 'scriere',
			'noaccess'        : 'fara acces',
			'and'             : 'si',
			'unknown'         : 'necunoscut',
			'selectall'       : 'Selecteaza toate fisierele',
			'selectfiles'     : 'Selecteaza fisiere(le)',
			'selectffile'     : 'Selecteaza primul fisier',
			'selectlfile'     : 'Selecteaza ultimul fisier',
			'viewlist'        : 'Vizualizare lista',
			'viewicons'       : 'Vizualizare Icoane',
			'places'          : 'Locuri',
			'calc'            : 'Calculeaza', 
			'path'            : 'Cale',
			'aliasfor'        : 'Alias pentru',
			'locked'          : 'Incuiat',
			'dim'             : 'Dimensiuni',
			'files'           : 'Fisiere',
			'folders'         : 'Foldere',
			'items'           : 'Articole',
			'yes'             : 'da',
			'no'              : 'nu',
			'link'            : 'Legatura',
			'searcresult'     : 'Rezultatele cautarii',  
			'selected'        : 'articolele selectate',
			'about'           : 'Despre',
			'shortcuts'       : 'Scurtaturi',
			'help'            : 'Ajutor',
			'webfm'           : 'Manager Fisiere Web',
			'ver'             : 'Versiune',
			'protocol'        : 'versiune protocol',
			'homepage'        : 'Origine proiect',
			'docs'            : 'Documentatie',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Urmareste-ne pe Twitter',
			'facebook'        : 'Alatura-te noua pe Facebook',
			'team'            : 'Echipa',
			'chiefdev'        : 'dezvotator sef',
			'developer'       : 'dezvoltator',
			'contributor'     : 'contribuitor',
			'maintainer'      : 'sustinator',
			'translator'      : 'traducator',
			'icons'           : 'Icoane',
			'dontforget'      : 'si nu uita sa-ti iei prosopul',
			'shortcutsof'     : 'Scurtături dezactivate',
			'dropFiles'       : 'Trage fisierele aici',
			'or'              : 'sau',
			'selectForUpload' : 'Selecteaza fisiere pentru a le incarca',
			'moveFiles'       : 'Muta fisiere',
			'copyFiles'       : 'Copiaza fisiere',
			'rmFromPlaces'    : 'Eliminati din locuri',
			'untitled folder' : 'dosar fara titlu',
			'untitled file.txt' : 'fisier fara titlu.txt',
			'aspectRatio'     : 'Raport de aspect',
			'scale'           : 'Scara',
			'width'           : 'latime',
			'height'          : 'Inaltime',
			'mode'            : 'Mod',
			'resize'          : 'Redimensionare',
			'crop'            : 'Taie',
			'rotate'          : 'Roteste',
			'rotate-cw'       : 'Roteste 90 grade CW',
			'rotate-ccw'      : 'Roteste 90 grade CCW',
			'degree'          : 'Grade',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Necunoscut',
			'kindFolder'      : 'Dosar',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias spart',
			// applications
			'kindApp'         : 'Aplicatie',
			'kindPostscript'  : 'Document Postscript',
			'kindMsOffice'    : 'Microsoft Office',
			'kindMsWord'      : 'Ddocument Microsoft Word',
			'kindMsExcel'     : 'Document Microsoft Excel',
			'kindMsPP'        : 'Prezentare Microsoft Powerpoint',
			'kindOO'          : 'Document Open Office',
			'kindAppFlash'    : 'Aplicatie Flash',
			'kindPDF'         : 'Format in format portabil (PDF)',
			'kindTorrent'     : 'Fisier Bittorrent',
			'kind7z'          : 'Arhiva 7z',
			'kindTAR'         : 'Arhiva TAR',
			'kindGZIP'        : 'Arhiva GZIP',
			'kindBZIP'        : 'Arhiva BZIP',
			'kindZIP'         : 'Arhiva ZIP',
			'kindRAR'         : 'Arhiva RAR',
			'kindJAR'         : 'Fisier Java JAR',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'Pachet RPM',
			// texts
			'kindText'        : 'Document Text',
			'kindTextPlain'   : 'Text simplu',
			'kindPHP'         : 'Sursa PHP',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'Document HTML',
			'kindJS'          : 'Sursa Javascript ',
			'kindRTF'         : 'Format text imbogatit',
			'kindC'           : 'Sursa C',
			'kindCHeader'     : 'Sursa antet C ',
			'kindCPP'         : 'Sursa C++',
			'kindCPPHeader'   : 'Sursa antet C++',
			'kindShell'       : 'Script de shell Unix',
			'kindPython'      : 'Sursa Python',
			'kindJava'        : 'Sursa Java',
			'kindRuby'        : 'Sursa Ruby ',
			'kindPerl'        : 'Sursa Perl',
			'kindSQL'         : 'Sursa SQL',
			'kindXML'         : 'Document XML',
			'kindAWK'         : 'Sursa AWK',
			'kindCSV'         : 'Valori separate prin virgula',
			'kindDOCBOOK'     : 'Document Docbook XML',
			// images
			'kindImage'       : 'Imagine',
			'kindBMP'         : 'Imagine BMP',
			'kindJPEG'        : 'Imagine JPEG',
			'kindGIF'         : 'Imagine GIF',
			'kindPNG'         : 'Imagine PNG',
			'kindTIFF'        : 'Imagine TIFF',
			'kindTGA'         : 'Imagine TGA',
			'kindPSD'         : 'Imagine Adobe Photoshop',
			'kindXBITMAP'     : 'Imagine X bitmap',
			'kindPXM'         : 'Imagine Pixelmator',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'Lista Redare MP3',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'Film DV',
			'kindVideoMPEG'   : 'Film MPEG',
			'kindVideoMPEG4'  : 'Film MPEG-4',
			'kindVideoAVI'    : 'Film AVI',
			'kindVideoMOV'    : 'Film Quick Time',
			'kindVideoWM'     : 'Film Windows Media',
			'kindVideoFlash'  : 'Film Flash',
			'kindVideoMKV'    : 'Film Matroska',
			'kindVideoOGG'    : 'Film Ogg'
		}
	}
}

