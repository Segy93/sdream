(function() {
	


	
$( "#footer" ).append('<footer id="footer" class="container"><div class="row"><section class="footer-block col-xs-12 col-sm-2" id="open1"> <span class="open1" onclick="open1()"><i id="iO1" class="fa fa-sort-desc" aria-hidden="true"></i></span><h4>Informations</h4><ul class="toggle-footer" style=""><li class="item"> <span id="oNamaZen" onclick="pageChecloNama()" title="About us">About us </span></li><li class="item"><span id="maloZ1" onclick="pageChecl()" title="Retail">Retail </span></li><li class="item"> <span id="sertifikatiZen" onclick="pageCheckSertifikati()" title="Certificates">Certificates </span></li><li class="item"> <span id="partneriZen" onclick="pageCheckPartneri()" title="Partners">Partners </span></li><li class="item"> <span id="modeliSaradnjeZen" onclick="pageCheckModeliSaradnje()" itle="Models of cooperation">Models of cooperation </span></li><li><a href="https://www.sdream.rs/en/info/privacy-policy/" title="Privacy policy" style=" position: relative; top: 1px;">Privacy policy</a></li><li><a href="https://www.sdream.rs/en/info/terms-and-conditions-of-use/" title="Terms and conditions of use">Terms and conditions of use</a></li></ul></section><section class="footer-block col-xs-12 col-sm-2" id="open2"> <span class="open2" onclick="open2()"><i id="iO2" class="fa fa-sort-desc" aria-hidden="true"></i></span><h4> FAQ</h4><ul class="toggle-footer" style=""><li class="item"> <span id="kakoOdabratiZen1" title="How to choose a mattress" onclick="pageCheclkakoOdabrati()">How to Choose a Mattress </span></li><li class="item"><span id="kakoKupitZen1" title="How to buy" onclick="pageCheclKakoKupiti()">How to buy </span></li><li style="position: relative;top: 1px;"><a href="https://www.sdream.rs/en/info/payment-methods/" title="Payment methods">Payment methods</a></li><li style="position: relative;top: 0px;"><a href="https://www.sdream.rs/en/info/how-to-add-new-addresses/" title="How to add new addresses">How to add new addresses</a><li class="item"> <span title="Payments">Payments </span></li><li class="item"> <span title="Help with shopping">Help with shopping </span></li><li class="item"> <span id="faqZen1" onclick="pageCheckFAQ()" title="FAQ"> FAQ </span></li><li class="item"> <span id="isporukaZen" onclick="pageCheckIsporka()" title="Delivery">Delivery </span></li><li class="item"></li></ul></section><section id="open3" class="footer-block col-xs-12 col-sm-2"> <span class="open3" onclick="open3()"><i id="iO3" class="fa fa-sort-desc" aria-hidden="true"></i></span><h4> My Account</h4><div class="block_content toggle-footer" style=""><ul class="bullet"><li> <a id="orderHistoryZen" href="https://www.sdream.rs/en/order-history" title="My orders" rel="nofollow">My orders</a></li><li> <a id="identityZen" href="https://www.sdream.rs/en/identity" title="My personal info" rel="nofollow">My personal info</a></li><li style="position: relative;top: 0px;"><a href="https://www.sdream.rs/en/info/merchandise-returns/" title="Merchandise returns">Merchandise returns</a><li> <a id="discountZen" href="https://www.sdream.rs/en/discount" title="My vouchers" rel="nofollow">My vouchers </a></li></ul></div></section> <section id="open4" class="block_contact_infos footer-block col-xs-12 col-sm-4"><span class="open4" onclick="open4()"><i id="iO4" class="fa fa-sort-desc" aria-hidden="true"></i></span> <h4> Information about the legal entity </h4><ul class="toggle-footer" style=""><li><i class="icon-map-marker ikoneiceFooterZ"> </i>Srbija, Čačak 32212,<br> ul. Radonje Golubovića Goluba br. 9</li><li><i class="icon-phone ikoneiceFooterZ"> </i>Pnone: <span><a href="tel:+381 32 53 77 050">+381 32 53 77 050</a> </span></li><li><i class="icon-envelope-alt ikoneiceFooterZ"> </i>Email: <span> <ahref="mailto:office@sdream.rs?subject=email poruka="" sa="" www.sdream.rs"="">office@sdream.rs </ahref="mailto:office@sdream.rs?subject=email></span></li></ul></section><section id="open5" class="footer-block col-xs-12 col-sm-2"><span class="open5" onclick="open5()"><i id="iO44" class="fa fa-sort-desc" aria-hidden="true"></i></span> <h4> Legal information </h4><ul class="toggle-footer" style=""><li><a href="https://www.vapeks.rs" target = "_blank"><img src="https://www.sdream.rs/img/vapex-logo.png" alt="Vapex logo" height="40"></a></li><li><a href="https://www.vapeks.rs" target = "_blank">www.vapeks.rs</a></li><li>PIB: 103209922</li><li>MB: 17533827</li><li>Šifra de. 2016</li></ul></section></div></footer>');
	$('.footer-container').append('<div style=" border-top: 1px solid rgba(6,4,3,0.1); border-bottom: 1px solid rgba(6,4,3,0.1);"><div class="footer-cards-payment" style="background: radial-gradient(rgba(0,0,0,.1), transparent);padding: 8px 0px;margin: 0 auto;display: table;"><div><span class="footer-card-logo credit-card-maestro" style=""></span></div><div><span class="footer-card-logo credit-card-master" style=""></span></div><div data-tooltip-position="top" data-tooltip="Learn more about MasterCard association"><a href="https://www.mastercard.us/en-us/consumers/payment-technologies/securecode.html" target="_blank"><span style="" class="footer-card-logo masterCardSecure"></span></a></div><div><span class="footer-card-logo credit-card-visa" style=""></span></div><div><span class="footer-card-logo credit-card-visa-electron" style=""></span></div><div data-tooltip-position="top" data-tooltip="Learn more about Visa Association"><a href="https://usa.visa.com/pay-with-visa/featured-technologies/verified-by-visa.html" target="_blank"><span class="footer-card-logo verivied-by-visa" style=""></span></a></div><div><span class="footer-card-logo credit-card-dina-card" style=""></span></div><div data-tooltip-position="top" data-tooltip="Visit the Commercial Bank website"><a href="https://www.kombank.com/sr" target="_blank"><span class="footer-card-logo komercijalna-banka" style=""></span></a></div></div></div><center style="float: none;"><div style="display:none" id="vzmanKa">guzanka</div><div style="display:none" id="vrvi2">guzanka</div><div class="bottomFooterZ" style="padding:16px;background:#848484;"><span style="color:#222222;"> All rights reserved © 2013 - 2019 <a style="font-weight:bold; color:#222222;" class="_blank" href="#" target="_blank">S Dream </a> | Desing by <a style="font-weight:bold; color:#222222;" class="_blank" href="#" target="_blank"> MA Team </a> </span></div></center>');
$('#kinoZen').append('<ul class="topNavigationMenuZ"><li><span style="cursor:pointer;" id="kakoKupitiZen2" class="listinaSlova" onclick="pageCheclkakoKupiti()">How to buy</span></li><li><span style="cursor:pointer;" id="kakoOdabratiZen2" class="listinaSlova" onclick="pageCheclkakoOdabrati()">How to choose a mattress</span></li><li><a href="https://www.sdream.rs/en/info/payment-methods/" style="cursor:pointer;" class="listinaSlova">Payment methods</a></li><li><span id="faqZen2" onclick="pageCheckFAQ()" style="cursor:pointer;" class="listinaSlova">FAQ</span></li></ul>');	
	
	var bodyId = document.body.id;
	codeAdress4();
	codeAdress3();
   if (bodyId === "index") {
				console.log('da index');
	   
				var xzy = window.location.href;
 if (xzy.indexOf("/o-nama/") >= 0) {
							document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060; margin-left:30px; margin-right:30px;color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-12"> <h1 class="zukiraZo">O nama </h1> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ">Kompanija Vapeks iz Čačka, članica FoamLine grupe iz Rusije, je duži niz godina lider u regionu što se tiče proizvodnje svih vrsta pena (Sky cell pena, Memory pena, HR pena), a od 2010.godine počeli smo i proizvodnju dušeka. Naša kompanija je posvećena kreiranju i proizvodnji dušeka prema aktuelnim trendovima iz sveta, od materijala koje koriste najpoznatiji svetski proizvođači. Proizvodimo vrhunske proizvode ali po ceni koja je prilagođena mogućnostima tržišta i krajnjih kupaca. Možemo se pohvaliti širokim asortimanom i izuzetnim kvalitetom naših proizvoda. </div><div class="col-md-12 leftZZ">Našu kompaniju čini tim stručnjaka iz oblasti tehnologije proizvodnje, organizacije i logistike, marketinga i prodaje... Sarađujemo sa lekarima i fizioterapeutima najpoznatijih zdravstvenih institucija u Srbiji i Rusiji. Kontinuirano testiramo i proučavamo uticaj naših proizvoda na smanjenje tegoba sa kičmom, glavoboljama i hroničnim umorom. Na taj način unapređujemo naše proizvode, a našim kupcima dodatno poboljšavamo kvalitet života. </div><div class="col-md-12 leftZZ">Oformili smo laboratoriju sa istraživačkim centrom koji neprestano kontroliše kvalitet materijala i krajnih proizvoda i kreira nove proizvode sa poboljšanim karakteristikama. Osnova svih naših proizvoda je ispuna od najkvalitenijih SKY CELL sunđera. Zahvaljujući jedinstvenom tehnološkom rešenju kompanije BAYER, naši SKY CELL sunđeri imaju otvorene ćelije kroz koje neprestano struji svež vazduh. U našim proizvodima nema plesni niti grinja i nakon višegodišnje upotrebe, pa je zdrav san zagarantovan tokom čitavog perioda korišćenja. </div><div class="col-md-12 leftZZ">U skladu sa opredeljenima najpoznatijih proizvođača na svetu, proizvodimo vrhunske proizvode sa ispunom od različitih vrsta SKY CELL pena ili kombinacije pena sa visokokvalitetnim Bonnell oprugama ili džepičastim jezgrima.Brend dušeka S)DREAM je već prepoznatljiv na tržištu Srbije i u okruženju, i što je još važnije, ima idealan odnos cene i kvaliteta. </div><div class="col-md-12 leftZZ">Dobrom imidžu naših proizvoda doprinosi: <ul class="productListingZ" style="font-family: myFirstFont2!important;"> <li class="prva">jedini u zemlji imamo dušeke, naddušeke i jastuke sa MEMO COOL penom. Koristeći ovakav dušek uverićete se da svaki deo Vašeg tela u toku sna ima adekvatnu potporu i podršku. </li><li class="druga">kupcima nudimo sve vrste penastih/poliuretanskih dušeka sa profilisanim jezgrima i višezonskim dejstvom. </li><li class="treca">dobra pokrivenost tržišta - brend S)DREAM možete naći u svim većim salonima nameštaja i "sleep" shopovima na teritoriji čitave ex-YU, a prisutni smo i na najprobirljivijim evropskim tržištima, kao što su Nemačka, Grčka, Italija, Švajcarska, Rusija, Bugarska... </li></ul> </div><div class="col-md-12 leftZZ">U zavisnosti od specifičnosti tržišta i mogućnosti naših partnera zajedno sa njima kreiramo prilagođen asortiman sa našim S)DREAM brendom ili po želji naših partnera formiramo Private label liniju. Za nas saradnja ne prestaje prvom porudžbinom. Ona tek počinje tog trenutka i ne prestaje čak ni kada obezbedimo najbolju prodaju i prepoznatljiv imidž na tržištu. </div></div><div class="col-md-6"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/about-us-picture.jpg" style="width:100%; height:auto;"> </div></div></div><div class="row" id="iframeZkiZ" style="margin-bottom:24px;padding-bottom:32px;margin-lefT: 0px;margin-right: 0px;"> <div class="video-container"> <iframe style=" -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;" src="https://www.youtube.com/embed/GaAdD6L4Agw" frameborder="0" allowfullscreen=""> </iframe> </div></div>';
document.title = 'O nama - S Dream Shop';	
						console.log('krzman');
						
					}
					if (xzy.indexOf("/en/") >= 0) {
						
						$( ".shopping_cart" ).click(function() {
						window.location.href=  'https://www.sdream.rs/en/order'
						});
						
						console.log('da da eng');
						codeAddress();
						codeAddress2();

							if ($('.logout').length > 0) {
								$('.logout').attr('href','https://www.sdream.rs/en/my-account?mylogout=');
									}
											}
				
							else
								{
				console.log('srba');
				codeAddress();
				codeAddress2();
						if ($('.logout').length > 0) {
							$('.logout').attr('href','https://www.sdream.rs/sr/moj-nalog?mylogout=');
										}

								}

	   
	   }
	    	var xzzy = window.location.href;
	   	if (xzzy.indexOf("/info/merchandise-returns/") >= 0) {
									    document.getElementById('formacicaz').innerHTML='<form action="/sr/kontakt" method="post" id="kockarnizi" class="contact-form-box" enctype="multipart/form-data" _lpchecked="1"><fieldset><div class="clearfix"><div class="col-xs-12 col-md-12"> <input type="hidden" name="id_contact" value="1"><p id="desc_contact0" style="display:none;" class="desc_contact">&nbsp;</p><p id="desc_contact2" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>For any question about a product, an order</p><p id="desc_contact1" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>If a technical problem occurs on this website</p><p class="text"> <label for="extrafield2" id="fullnamez"> Ime i prezime </label> <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value=""></p><p class="text" style="display:none"> <label for="extrafield3" id="tipForme"> Tip forme </label> <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="reklamacija"></p><p class="form-group"> <label for="email">E-mail adresa</label> <input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value=""></p><p class="text"> <label for="extrafield4" id="brojTelefona"> Broj telefona </label> <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value=""></p><p class="text"> <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbinice </label> <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value=""></p><p class="text" style="display:none;"> <label for="extrafield" id="subject">Naslov poruke</label> <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value=""></p></div><div class="col-xs-12 col-md-12"><div class="form-group" style=""> <label for="message">Poruka</label><textarea class="form-control" style="height:200px; background: #fbfbfb;" id="message" name="message"></textarea></div></div></div><div class="submit"> <button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span>Pošalji<i class="icon-chevron-right right"></i></span></button></div></fieldset></form><div class="divTable steelBlueCols" style="margin-top: 16px;float: left;padding: 8px;border: 1px solid rgba(6,5,3,0.1);border-radius: 11px;background: #fbfbfb;width: 100%;text-align: -webkit-center;"> <h5 style="width: 100%;display: table-caption;color: #f06423;font-weight: bold;font-size: 32px;overflow: unset;text-transform: none;padding-bottom: 0px;line-height: 34px;text-decoration: underline;text-decoration-color: #555454;margin-bottom: 24px;">Odgovorno lice za prijem reklamacija</h5><div class="divTableBody"><div class="divTableRow"><div class="divTableCell" style=" border-bottom: 0;">Ime i prezime</div><div class="divTableCell" style="padding: 0;vertical-align: middle;font-size: 26px;font-weight: 900;line-height: 36px;border: 4px solid #fbfbfb;border-radius: 8px;">Ljiljana Đoković</div></div><div class="divTableRow" style=""><div class="divTableCell" style=" border-bottom: 0;">Telefon</div><div class="divTableCell" style="padding: 0;vertical-align: middle;font-size: 26px;font-weight: 900;line-height: 36px;border: 4px solid #fbfbfb;border-radius: 8px;">+381 63 649 132</div></div><div class="divTableRow" style=""><div class="divTableCell" style=" border-bottom: 0;">Email</div><div class="divTableCell" style="font-size: 18px;font-weight: 900;line-height: 36px;border: 4px solid #fbfbfb;border-radius: 8px;">ljiljana.djokovic@foamline.com</div></div></div></div><div class="divTable steelBlueCols" style="margin-top: 16px;float: left;padding: 8px;border: 1px solid rgba(6,5,3,0.1);border-radius: 11px;background: #fbfbfb;width: 100%;text-align: -webkit-center;"> <h5 style=" width: 100%; display: table-caption; color: #f06423; font-weight: bold; font-size: 32px; overflow: unset; text-transform: none; padding-bottom: 0px; line-height: 34px; text-decoration: underline; text-decoration-color: #555454; margin-bottom: 24px;">Zakon o zaštiti potrošača</h5><div class="divTableBody" style=" width: 100%;"><div class="divTableRow"><div class="divTableCell" style="vertical-align: middle;border: 0;"><a href="http://mtt.gov.rs/download/1(2)/ZZP.pdf" class="kilouye"><span lang="sr-Latn-RS"><span style="font-size: 18px;font-weight: 900;line-height: 36px;color: #555454;">http://mtt.gov.rs/download/1(2)/ZZP.pdf</span></span></a></div></div></div></div><style>div.steelBlueCols{ background-color: #FFFFFF; text-align: center; }.divTable.steelBlueCols .divTableCell, .divTable.steelBlueCols .divTableHead{border-bottom: 1px solid #555454; padding: 5px 10px;}.divTable.steelBlueCols .divTableBody .divTableCell{font-size: 15px; font-weight: bold; color: #555454;}.divTable.steelBlueCols .divTableCell:nth-child(even){background: #FFFFFF;}.divTable.steelBlueCols .divTableHeading{}.divTable.steelBlueCols .divTableHeading .divTableHead{font-weight: normal;}/* DivTable.com */.divTableRow{margin-bottom:4px;display: table-row;}.divTableHeading{display: table-header-group;}.divTableCell, .divTableHead{display: table-cell;}.divTableHeading{display: table-header-group;}.divTableFoot{display: table-footer-group;}.divTableBody{display: table-row-group;}</style>';
         
        
		
		
			
	   	}
	   if (bodyId === "category") {
		   codeAddress2a();
		   
	   }

	else {
		console.log('nije kategorija');
		}
	codeAdress5();
	animatiza();

		setInterval(function(){ 
		animatiza(); 
		}, 12000);

$('#htmlcontent_top ul li#z0zz0 a').attr('href','https://www.sdream.rs/en/how-to-choose-a-mattress/');
$('#htmlcontent_top ul li#z1zz1 a').attr('href','https://www.sdream.rs/upload/katalogS)Dream2016-1.pdf');		
$('#htmlcontent_top ul li#z1zz1 a').attr('target','_blank');			
$('#htmlcontent_home ul li#z0zz0 a').attr('href','https://www.sdream.rs/en/specials');			
$('#htmlcontent_home ul li#z1zz1 a').attr('href','https://www.sdream.rs/en/specials');
$('#htmlcontent_home ul li#z2zz2 a').attr('href','https://www.sdream.rs/en/newlyweds-special/');			
$('#htmlcontent_home ul li#z3zz3 a').attr('href','https://www.sdream.rs/en/specials');			
$('#htmlcontent_home ul li#z4zz4 a').attr('href','https://www.sdream.rs/en/specials');			
$( "#homeslider li" ).each(function() {
	var zamba= $( this ).find('a').attr('title');
	if(zamba==='Up to 30% discount for newlyweds'){
  $( this ).find('a').attr('href','https://www.sdream.rs/en/newlyweds-special/');
	}
	if(zamba==='Up to 25% discount on mattresses'){
  $( this ).find('a').attr('href','https://www.sdream.rs/en/specials');
	}
});	

$( ".fa-facebook" ).click(function() {
  window.open('https://www.facebook.com/SDreamVapeks','_blank');
});
$( ".fa-youtube-play" ).click(function() {
 window.open('https://www.youtube.com/watch?v=GaAdD6L4Agw','_blank');
});
$( ".fa-instagram" ).click(function() {
 window.open('https://www.instagram.com/sdream.duseci','_blank');
});
}());


function codeAddress() {
            

var el = document.createElement("span");
el.innerHTML = '<div class=reggDiv id=reggDiv><i aria-hidden=true class="fa fa-gift fazli"id=c1></i><div style="width: 100%;text-align: center;" class=divCenterZ2 id=c2><span class=textZ2>Sing up on our website and get a gift voucher of 1,000 RSD, which you can use when shopping for amounts exceeding 10,000 RSD. See how to use welcome coupon <em style="cursor:pointer;" onclick="pageCheclKakoKupiti(){">here...</em></span></div><a class=buttonZ2 style="margin-right: 24px;min-width: 54px;" href="https://www.sdream.rs/en/login?back=my-account"id=c3>Sing up</a></div>';
var div = document.getElementById("slider_row");
insertAfter(div, el);



        }
		
		function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	
}

 function codeAddress2() {
            


var el2 = document.createElement("div");
el2.innerHTML = '<div class="borderZ row" style="margin: 0px;HEIGHT: 164PX;"><div id="cZZ1" class="col-lg-3"><div class="divLeft"> <i style="" class="faZ fa fa-id-card-o" aria-hidden="true"> </i></div><div class="divright"><h4>Choose the payment method that best suits you</h4><h6>Online credit card payment will be available soon</h6></div></div><div id="cZZ2" class="col-lg-3"><div class="divLeft"> <i style="" class="faZ fa fa-thumbs-o-up" aria-hidden="true"> </i></div><div class="divright"><h4>Termination of the agreement at a distance</h4><h6>The consumer has the right to terminate the contract concluded at a distance, or outside the premises within 14 days, without specifying the reason.</h6></div></div><div id="cZZ3" class="col-lg-3"><div class="divLeft"> <i style="" class="faZ2 fa fa-phone " aria-hidden="true"> </i> <i style="font-size:60px!important;position:relative!important; bottom:2px;" class="faZ fa fa-circle-thin" aria-hidden="true"> </i></div><div class="divright"><h4>Phone support</h4><h6>You need help or you have a question about ordering. Our operators will help you step by step, call<a href="tel:+381325377050">+381 32 53 77 050</a></h6></div></div><div id="cZZ4" class="col-lg-3"><div class="divLeft"> <i style="" class="faZ fa fa-lock" aria-hidden="true"> </i></div><div class="divright"><h4>100% secure shopping</h4><h6>You can be completely sure that online payments on our site are safe and secure. We also take care of the security of your personal information and respect for your privacy.</h6></div></div><div id="cZZ5" class="col-lg-3" style="height:8px;"></div></div>';
el2.setAttribute("style","float: left; display: block; width: 100%; margin-top: 32px;");
el2.setAttribute("class","natcica");
var div2 = document.getElementById("center_column");
insertAfter(div2, el2);

        }

 function codeAddress2a() {
            


var el2a = document.createElement("div");
el2a.setAttribute("class", "col-xs-12 col-sm-12");
el2a.setAttribute("style", "max-width:1202px; margin:0 auto; margin-bottom:44px; padding-left:0px; padding-right:0px;");
el2a.innerHTML = '<div class="borderZ row" style="margin:8px; padding-top:8px;"> <div id="cZZ1" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ fa fa-id-card-o" aria-hidden="true"> </i> </div><div class="divright"> <h4> Odaberite način plaćanja koji Vam najviše odgovara </h4> <h6> Uskoro dostupno i online plaćanje kreditnom karticom </h6> </div></div><div id="cZZ2" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ fa fa-thumbs-o-up" aria-hidden="true"> </i> </div><div class="divright"> <h4> Raskid ugovora na daljinu </h4> <h6> Ukoliko niste zadovoljni proizvodima možete ih vratiti u roku od 14 dana od dana prijema </h6> </div></div><div id="cZZ3" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ2 fa fa-phone " aria-hidden="true"> </i> <i style="font-size:60px!important;position:relative!important; bottom:2px;" class="faZ fa fa-circle-thin" aria-hidden="true"> </i> </div><div class="divright"> <h4> Telefonska podrška </h4> <h6> Potrebna Vam je pomoć ili imate pitanje u vezi poručivanja. Naši operateri će Vam pomoći korak po korak, pozovite <a href="tel:+381325377050">+381 32 53 77 050</a> </h6> </div></div><div id="cZZ4" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ fa fa-lock" aria-hidden="true"> </i> </div><div class="divright"> <h4> 100% sigurna kupovina </h4> <h6> Možete biti potpuno sigurni pri online plaćanju na našem sajtu. Brinemo i o sigurnosti Vaših ličnih podataka i poštovanju Vaše privatnosti. </h6> </div></div><div id="cZZ5" class="col-lg-3"style="height:8px;"> </div></div>';
var div2a = document.getElementById("columns");
insertAfter(div2a, el2a);

        }	

 function codeAddress2b() {
            


var el2b = document.createElement("div");
el2b.setAttribute("class", "col-xs-12 col-sm-12");
el2b.setAttribute("style", "max-width:1234px; margin:0 auto; margin-bottom:0px; padding-left:0px; padding-right:0px;");
el2b.innerHTML = '<div class="borderZ row" style="margin:8px; padding-top:8px;margin-left:0px; margin-right:0px;"> <div id="cZZ1" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ fa fa-id-card-o" aria-hidden="true"> </i> </div><div class="divright"> <h4> Odaberite način plaćanja koji Vam najviše odgovara </h4> <h6> Uskoro dostupno i online plaćanje kreditnom karticom </h6> </div></div><div id="cZZ2" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ fa fa-thumbs-o-up" aria-hidden="true"> </i> </div><div class="divright"> <h4> Raskid ugovora na daljinu </h4> <h6> Ukoliko niste zadovoljni proizvodima možete ih vratiti u roku od 14 dana od dana prijema </h6> </div></div><div id="cZZ3" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ2 fa fa-phone " aria-hidden="true"> </i> <i style="font-size:60px!important;position:relative!important; bottom:2px;" class="faZ fa fa-circle-thin" aria-hidden="true"> </i> </div><div class="divright"> <h4> Telefonska podrška </h4> <h6> Potrebna Vam je pomoć ili imate pitanje u vezi poručivanja. Naši operateri će Vam pomoći korak po korak, pozovite <a href="tel:+381325377050">+381 32 53 77 050</a> </h6> </div></div><div id="cZZ4" class="col-lg-3"> <div class="divLeft"> <i style="" class="faZ fa fa-lock" aria-hidden="true"> </i> </div><div class="divright"> <h4> 100% sigurna kupovina </h4> <h6> Možete biti potpuno sigurni pri online plaćanju na našem sajtu. Brinemo i o sigurnosti Vaših ličnih podataka i poštovanju Vaše privatnosti. </h6> </div></div><div id="cZZ5" class="col-lg-3"style="height:8px;"> </div></div>';
var div2b = document.getElementById("iframeZkiZ");
insertAfter(div2b, el2b);

        }			
		
		

function codeAdress3(){
var el3 = document.createElement("div");
el3.setAttribute("id", "kazinka1");
el3.innerHTML = '<div id="search_block_top" class="col-sm-4 clearfix cc12"> <div class="shop-phoneZ is_logged" style="font-size:26px; font-weight:600; color:#606061;"><a href="tel:+381325377050">+381 32 53 77 050</a> </div><div class="kazinka"> <div id="cz1" class="shop-phone2 is_logged" style="font-size:14px; font-weight:300; color:#606061;"> Working days 8:00h to 15:00h </div><div id="cz2" class="shop-phone2 is_logged" style="font-size:14px; font-weight:300; color:#606061"> Saturdays 9:00h to 14:00h </div></div></div>';
var div3 = document.getElementById("header_logo");
insertAfter(div3, el3);

}

function codeAdress4(){
var el4 = document.createElement("div");
el4.innerHTML = '<div class="clearfix col-lg-12 sf-contener"> <section class="header" id="header"> <div id="sticky_wrapper"> <div id="sticky_navigation"> <nav id="top-navigation"> <ul id="#main-nav"> <li class="menu-item-a parent-cat" id="menu-a-1" style=" width: 118px;"><a id="duseciZen1" class="krkiNZ activePageZen2 activePageZen2" href="https://www.sdream.rs/en/mattresses/" style="color: rgb(119, 119, 119);">Mattresses</a> <div class="nav-dropdown-container"> <div class="links-container"> <ul class="nav-dropdown"> <li> <a id="duseciOdPeneZen2" href="https://www.sdream.rs/en/mattresses/foam-mattresses/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/28-small_default/spa.jpg" alt="Foam Matresses" title="Foam Matresses" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Foam Matresses</a> </li><li> <a id="duseciSaDzepastimJezgromZen1" href="https://www.sdream.rs/en/mattresses/pocket-sprung-core-mattresses/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;"><img src="https://www.sdream.rs/98-small_default/green-plus-26cm.jpg" alt="Pocket Sprung Core Mattresses" title="Pocket Sprung Core Mattresses" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Pocket Sprung Core Mattresses</a> </li><li> <a id="duseciSaZicanimJezgromZen1" href="https://www.sdream.rs/en/mattresses/bonnel-spring-mattresses/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;"><img src="https://www.sdream.rs/93-small_default/fleks-24cm.jpg" alt="Bonnel spring mattresses" style=" width: 34px; position: absolute; left: -37px; top: -11px;" title="Bonnel spring mattresses">Bonnel spring mattresses</a> </li><li> <a id="decijiDuseciZen1" href="https://www.sdream.rs/en/mattresses/children-s-mattresses/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;"><img src="https://www.sdream.rs/100-small_default/baby-energy.jpg" alt="Childrens mattresses" style=" width: 34px; position: absolute; left: -37px; top: -11px;" title="Dečiji dušeci">Childrens mattresses</a> </li><li> <a id="navlakeZen1" href="https://www.sdream.rs/en/covering/" style="margin-left: 34px; font-size: 11px; font-weight: 900; color: rgb(119, 119, 119);"><img src="https://www.sdream.rs/57-small_default/step-deka.jpg" alt="Covering" style=" width: 34px; position: absolute; left: -37px; top: -11px;" title="Covering">Covering</a> </li></ul> <div class="menu-divider" style=" margin-bottom: 29px;"></div><ul class="nav-dropdown"> <li> <a href="https://www.sdream.rs/en/foam-mattresses/apolon/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;" class="replace-2x img-responsive"><img src="https://www.sdream.rs/94-small_default/apolon.jpg" alt="Apolon, 30cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;" class="replace-2x img-responsive" title="Apolon, 30cm">Apolon, 30cm</a> </li><li> <a id="memoProstirkaZ" href="https://www.sdream.rs/en/children-s-mattresses/memo-prostirka/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;"><img class="img-responsive" id="thumb_29" src="https://www.sdream.rs/147-small_default/memo-prostirka.jpg" alt="Memo prostirka, 2cm" title="Memo prostirka, 2cm" height="80" width="80" itemprop="image" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memo Prostirka, 2cm</a> </li><li> <a id="afroditaZ" href="https://www.sdream.rs/en/pocket-sprung-core-mattresses/afrodita/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;"><img src="https://www.sdream.rs/97-small_default/afrodita.jpg" alt="Afrodita, 28cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;" title="Afrodita, 28cm">Afrodita, 28cm</a> </li><li> <a id="greenPlusZen" href="https://www.sdream.rs/en/pocket-sprung-core-mattresses/green-plus-26cm/" style=" margin-left: 34px; font-size: 11px; font-weight: 900;"><img src="https://www.sdream.rs/98-small_default/green-plus-26cm.jpg" alt="Green Plus, 26cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;" title="Green Plus, 26cm">Green Plus, 26cm</a> </li></ul> </div><div class="cat-img"><a href="https://www.sdream.rs/en/mattresses/"><span class="cat-img-text">Mattresses</span><img width="225" height="345" src="https://sdream.rs/themes/SDreamShopTheme/img/duseciSdream.jpg"></a></div></div></li><li class="menu-item-a parent-cat" id="menu-a-2"><a class="krkiNZ" id="jastuciZen1" href="https://www.sdream.rs/en/pillows/" style="color: rgb(119, 119, 119);">Pillows</a> <div class="nav-dropdown-container"> <div class="links-container"> <ul class="nav-dropdown"> <li> <a id="mhrZen" href="https://www.sdream.rs/en/pillows/kontur-mhr/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/45-small_default/kontur-mhr.jpg" alt="Kontur M/HR" style=" width: 34px; position: absolute; left: -37px; top: -11px;">KONTUR M/HR</a> </li><li> <a id="msZen" href="https://www.sdream.rs/en/pillows/kontur-ms/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/46-small_default/kontur-ms.jpg" alt="Kontur M/S" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Kontur M/S</a> </li><li> <a id="memorisanZen" href="https://www.sdream.rs/en/pillows/memorisan/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/49-small_default/memorisan.jpg" alt="Memorisan" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memorisan</a> </li><li> <a id="sweetDreamZen" href="https://www.sdream.rs/en/pillows/sweet-dream/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/51-small_default/sweet-dream.jpg" alt="Sweet Dream" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Sweet Dream</a> </li></ul> <div class="menu-divider"></div><ul class="nav-dropdown"> <li> <a id="memoCoolClassicZen" href="https://www.sdream.rs/en/pillows/memo-cool-classic/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/47-small_default/memo-cool-classic.jpg" alt="Memo Cool Classic" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memo Cool Classic</a> </li><li> <a id="memoCoolKonturZen" href="https://www.sdream.rs/en/pillows/memo-cool-kontur/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/48-small_default/memo-cool-kontur.jpg" alt="Memo Cool Kontur" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memo Cool Kontur</a> </li></ul> <div class="menu-divider"></div><ul class="nav-dropdown"> <li> <a id="sofyZen" href="https://www.sdream.rs/en/pillows/softy/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/50-small_default/softy.jpg" alt="Softy" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Softy</a> </li></ul> </div><div class="cat-img"><a href="https://www.sdream.rs/en/pillows/"><span class="cat-img-text">Pillows </span><img width="225" height="345" src="https://sdream.rs/themes/SDreamShopTheme/img/sdreamJastuci.jpg"></a></div></div></li><li class="menu-item-a parent-cat" id="menu-a-3"><a class="krkiNZ" id="nadduseciZen1" href="https://www.sdream.rs/en/mattress-toppers/" style="color: rgb(119, 119, 119);">Mattress Toppers</a> <div class="nav-dropdown-container"> <div class="links-container"> <ul class="nav-dropdown"> <li> <a id="memo44Zen" href="https://www.sdream.rs/en/mattress-toppers/naddusek-memo-4-4cm/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"> <img src="https://www.sdream.rs/53-small_default/naddusek-memo-4-4cm.jpg" alt="Mattress Topper Memo 4, 4cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memo 4, 4cm</a> </li><li> <a id="memoSoftZen" href="https://www.sdream.rs/en/mattress-toppers/naddusek-memo-soft-5cm/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/55-small_default/naddusek-memo-soft-5cm.jpg" alt="Mattress Topper Memo soft, 5cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memo soft, 5cm</a> </li><li> <a id="memoZen77" href="https://www.sdream.rs/en/mattress-toppers/naddusek-memo-7-7cm/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/54-small_default/naddusek-memo-7-7cm.jpg" alt="Mattress Topper Memo 6, 6cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Memo 6, 6cm</a> </li></ul> <div class="menu-divider"></div><ul class="nav-dropdown"> <li> <a id="hr44cmZen" href="https://www.sdream.rs/en/mattress-toppers/naddusek-hr-4-4cm/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/52-small_default/naddusek-hr-4-4cm.jpg" alt="Mattress Topper HR 4, 4cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;">HR 4, 4cm</a> </li><li> <a id="softZenZen" href="https://www.sdream.rs/en/mattress-toppers/naddusek-soft-4-4cm/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/56-small_default/naddusek-soft-4-4cm.jpg" alt="Mattress Topper Soft 4, 4cm" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Soft 4, 4cm</a> </li></ul> <div class="menu-divider"></div><ul class="nav-dropdown"> <li> <a id="stepDekaZen" href="https://www.sdream.rs/en/mattress-toppers/step-deka/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/57-small_default/step-deka.jpg" alt="Štep deka" style=" width: 34px; position: absolute; left: -37px; top: -11px;">Štep deka</a> </li></ul> </div><div class="cat-img"><a href="https://www.sdream.rs/en/mattress-toppers/"><span class="cat-img-text">Mattress Toppers </span><img width="225" height="345" src="https://sdream.rs/themes/SDreamShopTheme/img/nadduseciSdream.jpg"></a></div></div></li><li class="menu-item-a parent-cat" id="menu-a-3-a"><a class="krkiNZ" id="krevetiZen1" href="https://www.sdream.rs/en/beds/" style="color: rgb(119, 119, 119);">Beds</a> <div class="nav-dropdown-container"> <div class="links-container"> <ul class="nav-dropdown"> <li id="kkeess"> <a id="dodaciZaKreveteZen" href="https://www.sdream.rs/en/beds/bed-accessories/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/112-small_default/k1.jpg" alt="K1" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed accessories</a> </li><li> <a id="k1sofazen" href="https://www.sdream.rs/en/beds/k-1-sofa/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/116-small_default/k1-sofa.jpg" alt="K1 - sofa" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed K1 - sofa</a> </li><li> <a id="k2zen" href="https://www.sdream.rs/en/beds/k2/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/118-small_default/k2.jpg" alt="K2" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed K - 2</a> </li></ul> <div class="menu-divider"></div><ul class="nav-dropdown"> <li><a id="k4zen" href="https://www.sdream.rs/en/beds/k-4/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/123-small_default/k-4.jpg" alt="K-4" style="width: 34px;position: absolute;left: -37px;top: -7px;" "="">Bed K - 4</a></li><li> <a id="k6zen" href="https://www.sdream.rs/en/beds/k-6/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/125-small_default/k-6.jpg" alt="K-6" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed K - 6</a> </li><li> <a id="k7zen" href="https://www.sdream.rs/en/beds/k-7/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/148-small_default/k-7.jpg" alt="K-7" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed K - 7</a> </li></ul> <div class="menu-divider"></div><ul class="nav-dropdown"> <li> <a id="k10zen" href="https://www.sdream.rs/en/beds/k-10/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/130-small_default/k-10.jpg" alt="K-10" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed na sprat K - 10</a> </li><li> <a id="k14zen" href="https://www.sdream.rs/en/beds/k-14/" style="margin-left: 34px;font-size: 11px;font-weight: 900;"><img src="https://www.sdream.rs/134-small_default/k-14.jpg" alt="K-14" style="width: 34px;position: absolute;left: -37px;top: -7px;">Bed na sprat K - 14</a> </li></ul> </div><div class="cat-img"><a href="https://www.sdream.rs/en/beds/"><span class="cat-img-text">Beds</span><img width="225" height="345" src="https://sdream.rs/themes/SDreamShopTheme/img/krevetiSdream.jpg"></a></div></div></li><li class="menu-item-a parent-cat" id="menu-a-3-b" style="width: 120px;"><a class="krkiNZ" id="nadduseciZen1" href="https://www.sdream.rs/en/textile-products/" style="color: rgb(119, 119, 119);">Textile products</a> <div class="nav-dropdown-container"> <div class="links-container" style=" padding: 0;"> <ul class="nav-dropdown iolep"> <li style="padding-bottom: 8px;padding-top: 19px;" class=""><a id="PosteljineZen1" href="https://www.sdream.rs/en/textile-products/beddings/" style="padding-bottom: 4px;">Beddings</a></li></ul> <div class="menu-divider" style="margin: 0px 20px 0px;"></div><ul class="nav-dropdown iolep"> <li style="padding-bottom: 8px;padding-top: 19px;" class=""><a id="jorganiZen1" href="https://www.sdream.rs/en/textile-products/quilts/" style=" padding-bottom: 4px;">Quilts</a></li></ul> <div class="menu-divider" style="margin: 0px 20px 0px;"></div><ul class="nav-dropdown iolep"> <li style="padding-bottom: 8px;padding-top: 19px;" class=""><a id="cebadZen1" href="https://www.sdream.rs/en/textile-products/blankets/" style=" padding-bottom: 4px;">Blankets</a></li></ul> <div class="menu-divider" style="margin: 0px 20px 0px;"></div><ul class="nav-dropdown iolep"> <li style="padding-bottom: 8px;padding-top: 19px;" class=""><a id="prekrivaciZen1" href="https://www.sdream.rs/en/textile-products/bedspreads/" style=" padding-bottom: 4px;">Bedspreads</a></li></ul> <div class="menu-divider" style="margin: 0px 20px 0px;"></div><ul class="nav-dropdown iolep"> <li style="padding-bottom: 8px;padding-top: 19px;" class=""><a id="proizvodiOdVuneZen1" href="https://www.sdream.rs/en/textile-products/wool-products/" style=" padding-bottom: 4px;">Wool products</a></li></ul> <div class="menu-divider" style="margin: 0px 20px 0px;"></div><ul class="nav-dropdown iolep"> <li style="padding-bottom: 8px;padding-top: 19px;" class=""><a id="krevetskiCarsaviZen1" href="https://www.sdream.rs/en/textile-products/bed-sheets/" style=" padding-bottom: 4px;">Bed sheets</a></li></ul> <div class="menu-divider" style="margin: 0px 20px 0px;"></div></div><div class="cat-img"><a href="https://www.sdream.rs/en/textile-products/"><span class="cat-img-text">Textile products</span><img width="225" height="345" src="https://sdream.rs/themes/SDreamShopTheme/img/tekstilniProizvodiSdream.jpg"></a></div></div></li><li class="menu-item-a parent-cat" id="menu-a-5"><a id="akcijeZen" href="https://www.sdream.rs/en/specials">Specials</a></li><li class="menu-item-a parent-cat" id="menu-a-6"><span id="maloZ2" onclick="pageChecl()" style="cursor:pointer;">Maloprodaje</span></li><li class="menu-item-a parent-cat" id="menu-a-7"><a id="kontaktZen1" href="https://www.sdream.rs/en/contact-us">Contact</a></li></ul> </nav> </div></div></section></div>';
var div4 = document.getElementById("block_top_menu");
insertAfter(div4, el4);

}
function codeAdress5(){
	
document.getElementById('mySidenav').innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> <div class="zmijskiZMenu" id="zmijskiZMenu"> <i id="iO5" style="float: right; color: rgb(240, 100, 35); display: block; transition-delay: 0.1s;" onclick="openZ1menu()" class="fa fa-sort-desc" aria-hidden="true"></i> <a id="duseciZen2" href="https://www.sdream.rs/en/mattresses/"> Mattresses</a><ul class="nav-dropdown"><li><a class="zmijskiZ" id="duseciOdPeneZen1" href="https://www.sdream.rs/en/mattresses/foam-mattresses/">Foam Mattresses</a></li><li><a id="duseciSaDzepastimJezgromZen2" class="zmijskiZ" href="https://www.sdream.rs/en/mattresses/pocket-sprung-core-mattresses/">Pocket Sprung Core Mattresses</a></li><li><a id="duseciSaZicanimJezgromZen2" class="zmijskiZ" href="https://www.sdream.rs/en/mattresses/bonnel-spring-mattresses/">Bonnel Spring Mattresses</a></li><li><a id="decijiDuseciZen2" class="zmijskiZ" href="https://www.sdream.rs/en/mattresses/children-s-mattresses/">Children`s Mattresses</a></li></ul> </div><a class="zmijskiZ2" id="jastuciZen2" href="https://www.sdream.rs/en/pillows/">Pillows</a> <a class="zmijskiZ2" id="nadduseciZen2" href="https://www.sdream.rs/en/mattress-toppers/">Mattress Toppers</a> <a class="zmijskiZ2" id="navlakeZen2" href="https://www.sdream.rs/en/covering/">Covering</a><a class="zmijskiZ2" id="krevetiZen2" href="https://sdream.rs/en/beds/">Beds</a><a class="zmijskiZ2" id="tekstilniProizvodiZen2" href="https://sdream.rs/en/textile-products/">Textile products</a> <a class="zmijskiZ2" href="#">Specials</a> <span class="zmijskiZ2" id="maloZ3" onclick="pageChecl()">Retail</span> <a class="zmijskiZ2" id="kontaktZen2" href="https://www.sdream.rs/en/contact-us">Contact Us</a> <span id="kakoKupitiZen3" class="zmijskiZ2" onclick="pageCheclKakoKupiti()">How to buy</span> <span id="kakoOdabratiZen3" class="zmijskiZ2" onclick="pageCheclkakoOdabrati()">How to Chose a Mattress</span> <a href="https://www.sdream.rs/en/info/payment-methods/" class="zmijskiZ2">Payment methods</a> <span id="faqZen3" onclick="pageCheckFAQ()" class="zmijskiZ2">FAQ</span>';
}
function animatiza(){

setTimeout(function(){ prva(); }, 5000);
setTimeout(function(){ druga(); }, 6000);
setTimeout(function(){ treca(); }, 11000);
setTimeout(function(){ cetvrta(); }, 12000);



}







function cetvrta(){ 
$("#cz2").animate({ 
					bottom: "-=56px",
					}, 400 );
}


function treca(){
$("#cz2").animate({ 

        bottom: "+=28px",
		opacity: "-=1",
      }, 400 );	
	  $("#cz1").animate({ 
		opacity: "+=1",
        bottom: "+=28px",
      }, 400 );	

}	
function druga(){
$("#cz1").animate({ 
					bottom: "-=56px",
					
					}, 400 );	}
function prva(){

$("#cz1").animate({ 
        bottom: "+=28px",
		opacity: "-=1",
      }, 400 );   
$("#cz2").animate({ 
        opacity: "+=1",
        bottom: "+=28px",
      }, 400 );	
 

  
}

function pageChecl(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    maloZZ();
	   }

	else {
		 maloZZ2();
		 
		}
	
	
}

function pageChecloNama(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    oNama();
	   }

	else {
		 oNamaZZ();
		 
		}
	
	
}
function pageCheclkakoOdabrati(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    kakoOdabrati();
	   }

	else {
		 kakoOdabratiZ();
		 
		}
	
	
}

function pageCheclKakoKupiti(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    kakoKupiti();
	   }

	else {
		 kakoKupitiZ();
		 
		}
	
	
}

function pageCheckPartneri(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    partneri();
	   }

	else {
		 partneriZ();
		 
		}
	
	
}
function pageCheckModeliSaradnje(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    modeliSaradnje();
	   }

	else {
		 modeliSaradnjeZ();
		 
		}
	
	
}
function pageCheckIsporka(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    isporuka();
	   }

	else {
		isporukaZ();
		 
		}
	
	
}

function pageCheckReklamacije(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    reklamacije();
	   }

	else {
		reklamacijez();
		 
		}
	
	
}
function pageCheckFAQ(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    faqz();
	   }

	else {
		 faqzz();
		 
		}
	
	
}

function pageCheckMladenci(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    mladenci();
	   }

	else {
		 mladenciZ();
		 
		}
	
	
}

function pageCheckSertifikati(){
	
	 var bodyId2 = document.body.id;
	   if (bodyId2 === "category") {
		  
		    sertifikati();
	   }

	else {
		 sertifikatiZ();
		 
		}
	
	
}

function activeZen(){
							$( ".toggle-footer li" ).each(function() {
								$( this ).find('span').removeClass( "activePageZen" );
							});
							$( ".bullet li" ).each(function() {
								$( this ).find('a').removeClass( "activePageZen" );
							});
							$( ".menu-item-a span" ).each(function() {
								$( this ).removeClass( "activePageZen2" );
							});
							$( ".menu-item-a a" ).each(function() {
								$( this ).removeClass( "activePageZen2" );
							});
							$( ".topNavigationMenuZ li span" ).each(function() {
								$( this ).removeClass( "activePageZen3" );
							});
							$( "#mySidenav span" ).each(function() {
								$( this ).removeClass( "activePageZen" );
							});
							$( "#mySidenav a" ).each(function() {
								$( this ).removeClass( "activePageZen" );
							});
	
}




function maloZZ() {
	


	
	
var xzy = window.location.href; 
			if (xzy.indexOf("/retail/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'retail/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'retail/';}
								document.getElementById('columns').innerHTML = '<iframe id="iframeZkiZ" src="https://www.sdream.rs/maloprodaje/index.html" style="height:1040px; width:100%; margin-bottom:16px;"></iframe>';
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
						activeZen();
								document.getElementById('maloZ1').className += ' activePageZen';	
							document.getElementById('maloZ2').className += ' activePageZen2';	
							document.getElementById('maloZ3').className += ' activePageZen';
							document.title = 'Retail - S Dream Shop';	
							 $('html, body').animate({scrollTop: '0px'}, 300);
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/retail")>= 0){
								document.getElementById('columns').innerHTML = '<iframe id="iframeZkiZ" src="https://www.sdream.rs/maloprodaje/index.html" style="height:1040px; width:100%; margin-bottom:16px;"></iframe>';
								document.title = 'Retail - S Dream Shop';	
									document.getElementById('maloZ1').className += ' activePageZen';	
							document.getElementById('maloZ2').className += ' activePageZen2';	
							document.getElementById('maloZ3').className += ' activePageZen';
							$('html, body').animate({scrollTop: '0px'}, 300);
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);
							}
			};
	
			}

    }
	function maloZZ2() {
	
	var xzy = window.location.href; 
			if (xzy.indexOf("/retail/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'retail/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'retail/';}
								document.getElementById('columns').innerHTML = '<iframe id="iframeZkiZ" src="https://www.sdream.rs/maloprodaje/index.html" style="height:1040px; width:100%; margin-bottom:16px;"></iframe>';
								$('.borderZ').parent().remove();
								codeAddress2b();
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
						activeZen();
							
							document.getElementById('maloZ1').className += ' activePageZen';	
							document.getElementById('maloZ2').className += ' activePageZen2';	
							document.getElementById('maloZ3').className += ' activePageZen';
							document.title = 'Retail - S Dream Shop';	
							$('html, body').animate({scrollTop: '0px'}, 300);
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/retail")>= 0){
								document.getElementById('columns').innerHTML = '<iframe id="iframeZkiZ" src="https://www.sdream.rs/maloprodaje/index.html" style="height:1040px; width:100%; margin-bottom:16px;"></iframe>';
									$('.borderZ').parent().remove();
									codeAddress2b();
								document.title = 'Retail - S Dream Shop';	
									document.getElementById('maloZ1').className += ' activePageZen';	
							document.getElementById('maloZ2').className += ' activePageZen2';	
							document.getElementById('maloZ3').className += ' activePageZen';
							$('html, body').animate({scrollTop: '0px'}, 300);
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);
							}
			};
	
			}
	

    }
function oNama() {
		var xzy = window.location.href; 
			if (xzy.indexOf("/about-us/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'about-us/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'about-us/';}
							document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060; margin-left:30px; margin-right:30px;color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-12"> <h1 class="zukiraZo">O nama </h1> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ">Kompanija Vapeks iz Čačka, članica FoamLine grupe iz Rusije, je duži niz godina lider u regionu što se tiče proizvodnje svih vrsta pena (Sky cell pena, Memory pena, HR pena), a od 2010.godine počeli smo i proizvodnju dušeka. Naša kompanija je posvećena kreiranju i proizvodnji dušeka prema aktuelnim trendovima iz sveta, od materijala koje koriste najpoznatiji svetski proizvođači. Proizvodimo vrhunske proizvode ali po ceni koja je prilagođena mogućnostima tržišta i krajnjih kupaca. Možemo se pohvaliti širokim asortimanom i izuzetnim kvalitetom naših proizvoda. </div><div class="col-md-12 leftZZ">Našu kompaniju čini tim stručnjaka iz oblasti tehnologije proizvodnje, organizacije i logistike, marketinga i prodaje... Sarađujemo sa lekarima i fizioterapeutima najpoznatijih zdravstvenih institucija u Srbiji i Rusiji. Kontinuirano testiramo i proučavamo uticaj naših proizvoda na smanjenje tegoba sa kičmom, glavoboljama i hroničnim umorom. Na taj način unapređujemo naše proizvode, a našim kupcima dodatno poboljšavamo kvalitet života. </div><div class="col-md-12 leftZZ">Oformili smo laboratoriju sa istraživačkim centrom koji neprestano kontroliše kvalitet materijala i krajnih proizvoda i kreira nove proizvode sa poboljšanim karakteristikama. Osnova svih naših proizvoda je ispuna od najkvalitenijih SKY CELL sunđera. Zahvaljujući jedinstvenom tehnološkom rešenju kompanije BAYER, naši SKY CELL sunđeri imaju otvorene ćelije kroz koje neprestano struji svež vazduh. U našim proizvodima nema plesni niti grinja i nakon višegodišnje upotrebe, pa je zdrav san zagarantovan tokom čitavog perioda korišćenja. </div><div class="col-md-12 leftZZ">U skladu sa opredeljenima najpoznatijih proizvođača na svetu, proizvodimo vrhunske proizvode sa ispunom od različitih vrsta SKY CELL pena ili kombinacije pena sa visokokvalitetnim Bonnell oprugama ili džepičastim jezgrima.Brend dušeka S)DREAM je već prepoznatljiv na tržištu Srbije i u okruženju, i što je još važnije, ima idealan odnos cene i kvaliteta. </div><div class="col-md-12 leftZZ">Dobrom imidžu naših proizvoda doprinosi: <ul class="productListingZ" style="font-family: myFirstFont2!important;"> <li class="prva">jedini u zemlji imamo dušeke, naddušeke i jastuke sa MEMO COOL penom. Koristeći ovakav dušek uverićete se da svaki deo Vašeg tela u toku sna ima adekvatnu potporu i podršku. </li><li class="druga">kupcima nudimo sve vrste penastih/poliuretanskih dušeka sa profilisanim jezgrima i višezonskim dejstvom. </li><li class="treca">dobra pokrivenost tržišta - brend S)DREAM možete naći u svim većim salonima nameštaja i "sleep" shopovima na teritoriji čitave ex-YU, a prisutni smo i na najprobirljivijim evropskim tržištima, kao što su Nemačka, Grčka, Italija, Švajcarska, Rusija, Bugarska... </li></ul> </div><div class="col-md-12 leftZZ">U zavisnosti od specifičnosti tržišta i mogućnosti naših partnera zajedno sa njima kreiramo prilagođen asortiman sa našim S)DREAM brendom ili po želji naših partnera formiramo Private label liniju. Za nas saradnja ne prestaje prvom porudžbinom. Ona tek počinje tog trenutka i ne prestaje čak ni kada obezbedimo najbolju prodaju i prepoznatljiv imidž na tržištu. </div></div><div class="col-md-6"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/about-us-picture.jpg" style="width:100%; height:auto;"> </div></div></div><div class="row" id="iframeZkiZ" style="margin-bottom:24px;padding-bottom:32px;margin-lefT: 0px;margin-right: 0px;"> <div class="video-container"> <iframe style=" -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;" src="https://www.youtube.com/embed/GaAdD6L4Agw" frameborder="0" allowfullscreen=""> </iframe> </div></div>';
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
						activeZen();
							
							
							document.getElementById('oNamaZen').className += 'activePageZen';
							document.title = 'About us - S Dream Shop';	
							$('html, body').animate({scrollTop: '0px'}, 300);
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/about-us")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060; margin-left:30px; margin-right:30px;color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-12"> <h1 class="zukiraZo">O nama </h1> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ">Kompanija Vapeks iz Čačka, članica FoamLine grupe iz Rusije, je duži niz godina lider u regionu što se tiče proizvodnje svih vrsta pena (Sky cell pena, Memory pena, HR pena), a od 2010.godine počeli smo i proizvodnju dušeka. Naša kompanija je posvećena kreiranju i proizvodnji dušeka prema aktuelnim trendovima iz sveta, od materijala koje koriste najpoznatiji svetski proizvođači. Proizvodimo vrhunske proizvode ali po ceni koja je prilagođena mogućnostima tržišta i krajnjih kupaca. Možemo se pohvaliti širokim asortimanom i izuzetnim kvalitetom naših proizvoda. </div><div class="col-md-12 leftZZ">Našu kompaniju čini tim stručnjaka iz oblasti tehnologije proizvodnje, organizacije i logistike, marketinga i prodaje... Sarađujemo sa lekarima i fizioterapeutima najpoznatijih zdravstvenih institucija u Srbiji i Rusiji. Kontinuirano testiramo i proučavamo uticaj naših proizvoda na smanjenje tegoba sa kičmom, glavoboljama i hroničnim umorom. Na taj način unapređujemo naše proizvode, a našim kupcima dodatno poboljšavamo kvalitet života. </div><div class="col-md-12 leftZZ">Oformili smo laboratoriju sa istraživačkim centrom koji neprestano kontroliše kvalitet materijala i krajnih proizvoda i kreira nove proizvode sa poboljšanim karakteristikama. Osnova svih naših proizvoda je ispuna od najkvalitenijih SKY CELL sunđera. Zahvaljujući jedinstvenom tehnološkom rešenju kompanije BAYER, naši SKY CELL sunđeri imaju otvorene ćelije kroz koje neprestano struji svež vazduh. U našim proizvodima nema plesni niti grinja i nakon višegodišnje upotrebe, pa je zdrav san zagarantovan tokom čitavog perioda korišćenja. </div><div class="col-md-12 leftZZ">U skladu sa opredeljenima najpoznatijih proizvođača na svetu, proizvodimo vrhunske proizvode sa ispunom od različitih vrsta SKY CELL pena ili kombinacije pena sa visokokvalitetnim Bonnell oprugama ili džepičastim jezgrima.Brend dušeka S)DREAM je već prepoznatljiv na tržištu Srbije i u okruženju, i što je još važnije, ima idealan odnos cene i kvaliteta. </div><div class="col-md-12 leftZZ">Dobrom imidžu naših proizvoda doprinosi: <ul class="productListingZ" style="font-family: myFirstFont2!important;"> <li class="prva">jedini u zemlji imamo dušeke, naddušeke i jastuke sa MEMO COOL penom. Koristeći ovakav dušek uverićete se da svaki deo Vašeg tela u toku sna ima adekvatnu potporu i podršku. </li><li class="druga">kupcima nudimo sve vrste penastih/poliuretanskih dušeka sa profilisanim jezgrima i višezonskim dejstvom. </li><li class="treca">dobra pokrivenost tržišta - brend S)DREAM možete naći u svim većim salonima nameštaja i "sleep" shopovima na teritoriji čitave ex-YU, a prisutni smo i na najprobirljivijim evropskim tržištima, kao što su Nemačka, Grčka, Italija, Švajcarska, Rusija, Bugarska... </li></ul> </div><div class="col-md-12 leftZZ">U zavisnosti od specifičnosti tržišta i mogućnosti naših partnera zajedno sa njima kreiramo prilagođen asortiman sa našim S)DREAM brendom ili po želji naših partnera formiramo Private label liniju. Za nas saradnja ne prestaje prvom porudžbinom. Ona tek počinje tog trenutka i ne prestaje čak ni kada obezbedimo najbolju prodaju i prepoznatljiv imidž na tržištu. </div></div><div class="col-md-6"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/about-us-picture.jpg" style="width:100%; height:auto;"> </div></div></div><div class="row" id="iframeZkiZ" style="margin-bottom:24px;padding-bottom:32px;margin-lefT: 0px;margin-right: 0px;"> <div class="video-container"> <iframe style=" -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;" src="https://www.youtube.com/embed/GaAdD6L4Agw" frameborder="0" allowfullscreen=""> </iframe> </div></div>';
								document.title = 'About us - S Dream Shop';	
								document.getElementById('oNamaZen').className += 'activePageZen';		
								$('html, body').animate({scrollTop: '0px'}, 300);								
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);
							}
			};
	
			}
    }
	
	function oNamaZZ() {
		var xzy = window.location.href; 
			if (xzy.indexOf("/about-us/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'about-us/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'about-us/';}
							document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060; margin-left:30px; margin-right:30px;color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-12"> <h1 class="zukiraZo">O nama </h1> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ">Kompanija Vapeks iz Čačka, članica FoamLine grupe iz Rusije, je duži niz godina lider u regionu što se tiče proizvodnje svih vrsta pena (Sky cell pena, Memory pena, HR pena), a od 2010.godine počeli smo i proizvodnju dušeka. Naša kompanija je posvećena kreiranju i proizvodnji dušeka prema aktuelnim trendovima iz sveta, od materijala koje koriste najpoznatiji svetski proizvođači. Proizvodimo vrhunske proizvode ali po ceni koja je prilagođena mogućnostima tržišta i krajnjih kupaca. Možemo se pohvaliti širokim asortimanom i izuzetnim kvalitetom naših proizvoda. </div><div class="col-md-12 leftZZ">Našu kompaniju čini tim stručnjaka iz oblasti tehnologije proizvodnje, organizacije i logistike, marketinga i prodaje... Sarađujemo sa lekarima i fizioterapeutima najpoznatijih zdravstvenih institucija u Srbiji i Rusiji. Kontinuirano testiramo i proučavamo uticaj naših proizvoda na smanjenje tegoba sa kičmom, glavoboljama i hroničnim umorom. Na taj način unapređujemo naše proizvode, a našim kupcima dodatno poboljšavamo kvalitet života. </div><div class="col-md-12 leftZZ">Oformili smo laboratoriju sa istraživačkim centrom koji neprestano kontroliše kvalitet materijala i krajnih proizvoda i kreira nove proizvode sa poboljšanim karakteristikama. Osnova svih naših proizvoda je ispuna od najkvalitenijih SKY CELL sunđera. Zahvaljujući jedinstvenom tehnološkom rešenju kompanije BAYER, naši SKY CELL sunđeri imaju otvorene ćelije kroz koje neprestano struji svež vazduh. U našim proizvodima nema plesni niti grinja i nakon višegodišnje upotrebe, pa je zdrav san zagarantovan tokom čitavog perioda korišćenja. </div><div class="col-md-12 leftZZ">U skladu sa opredeljenima najpoznatijih proizvođača na svetu, proizvodimo vrhunske proizvode sa ispunom od različitih vrsta SKY CELL pena ili kombinacije pena sa visokokvalitetnim Bonnell oprugama ili džepičastim jezgrima.Brend dušeka S)DREAM je već prepoznatljiv na tržištu Srbije i u okruženju, i što je još važnije, ima idealan odnos cene i kvaliteta. </div><div class="col-md-12 leftZZ">Dobrom imidžu naših proizvoda doprinosi: <ul class="productListingZ" style="font-family: myFirstFont2!important;"> <li class="prva">jedini u zemlji imamo dušeke, naddušeke i jastuke sa MEMO COOL penom. Koristeći ovakav dušek uverićete se da svaki deo Vašeg tela u toku sna ima adekvatnu potporu i podršku. </li><li class="druga">kupcima nudimo sve vrste penastih/poliuretanskih dušeka sa profilisanim jezgrima i višezonskim dejstvom. </li><li class="treca">dobra pokrivenost tržišta - brend S)DREAM možete naći u svim većim salonima nameštaja i "sleep" shopovima na teritoriji čitave ex-YU, a prisutni smo i na najprobirljivijim evropskim tržištima, kao što su Nemačka, Grčka, Italija, Švajcarska, Rusija, Bugarska... </li></ul> </div><div class="col-md-12 leftZZ">U zavisnosti od specifičnosti tržišta i mogućnosti naših partnera zajedno sa njima kreiramo prilagođen asortiman sa našim S)DREAM brendom ili po želji naših partnera formiramo Private label liniju. Za nas saradnja ne prestaje prvom porudžbinom. Ona tek počinje tog trenutka i ne prestaje čak ni kada obezbedimo najbolju prodaju i prepoznatljiv imidž na tržištu. </div></div><div class="col-md-6"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/about-us-picture.jpg" style="width:100%; height:auto;"> </div></div></div><div class="row" id="iframeZkiZ" style="margin-bottom:24px;padding-bottom:32px;margin-lefT: 0px;margin-right: 0px;"> <div class="video-container"> <iframe style=" -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;" src="https://www.youtube.com/embed/GaAdD6L4Agw" frameborder="0" allowfullscreen=""> </iframe> </div></div>';
								$('.borderZ').parent().remove();
								codeAddress2b();
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('oNamaZen').className += 'activePageZen'
							document.title = 'About us - S Dream Shop';
							$('html, body').animate({scrollTop: '0px'}, 300);
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/about-us")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060; margin-left:30px; margin-right:30px;color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-12"> <h1 class="zukiraZo">O nama </h1> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ">Kompanija Vapeks iz Čačka, članica FoamLine grupe iz Rusije, je duži niz godina lider u regionu što se tiče proizvodnje svih vrsta pena (Sky cell pena, Memory pena, HR pena), a od 2010.godine počeli smo i proizvodnju dušeka. Naša kompanija je posvećena kreiranju i proizvodnji dušeka prema aktuelnim trendovima iz sveta, od materijala koje koriste najpoznatiji svetski proizvođači. Proizvodimo vrhunske proizvode ali po ceni koja je prilagođena mogućnostima tržišta i krajnjih kupaca. Možemo se pohvaliti širokim asortimanom i izuzetnim kvalitetom naših proizvoda. </div><div class="col-md-12 leftZZ">Našu kompaniju čini tim stručnjaka iz oblasti tehnologije proizvodnje, organizacije i logistike, marketinga i prodaje... Sarađujemo sa lekarima i fizioterapeutima najpoznatijih zdravstvenih institucija u Srbiji i Rusiji. Kontinuirano testiramo i proučavamo uticaj naših proizvoda na smanjenje tegoba sa kičmom, glavoboljama i hroničnim umorom. Na taj način unapređujemo naše proizvode, a našim kupcima dodatno poboljšavamo kvalitet života. </div><div class="col-md-12 leftZZ">Oformili smo laboratoriju sa istraživačkim centrom koji neprestano kontroliše kvalitet materijala i krajnih proizvoda i kreira nove proizvode sa poboljšanim karakteristikama. Osnova svih naših proizvoda je ispuna od najkvalitenijih SKY CELL sunđera. Zahvaljujući jedinstvenom tehnološkom rešenju kompanije BAYER, naši SKY CELL sunđeri imaju otvorene ćelije kroz koje neprestano struji svež vazduh. U našim proizvodima nema plesni niti grinja i nakon višegodišnje upotrebe, pa je zdrav san zagarantovan tokom čitavog perioda korišćenja. </div><div class="col-md-12 leftZZ">U skladu sa opredeljenima najpoznatijih proizvođača na svetu, proizvodimo vrhunske proizvode sa ispunom od različitih vrsta SKY CELL pena ili kombinacije pena sa visokokvalitetnim Bonnell oprugama ili džepičastim jezgrima.Brend dušeka S)DREAM je već prepoznatljiv na tržištu Srbije i u okruženju, i što je još važnije, ima idealan odnos cene i kvaliteta. </div><div class="col-md-12 leftZZ">Dobrom imidžu naših proizvoda doprinosi: <ul class="productListingZ" style="font-family: myFirstFont2!important;"> <li class="prva">jedini u zemlji imamo dušeke, naddušeke i jastuke sa MEMO COOL penom. Koristeći ovakav dušek uverićete se da svaki deo Vašeg tela u toku sna ima adekvatnu potporu i podršku. </li><li class="druga">kupcima nudimo sve vrste penastih/poliuretanskih dušeka sa profilisanim jezgrima i višezonskim dejstvom. </li><li class="treca">dobra pokrivenost tržišta - brend S)DREAM možete naći u svim većim salonima nameštaja i "sleep" shopovima na teritoriji čitave ex-YU, a prisutni smo i na najprobirljivijim evropskim tržištima, kao što su Nemačka, Grčka, Italija, Švajcarska, Rusija, Bugarska... </li></ul> </div><div class="col-md-12 leftZZ">U zavisnosti od specifičnosti tržišta i mogućnosti naših partnera zajedno sa njima kreiramo prilagođen asortiman sa našim S)DREAM brendom ili po želji naših partnera formiramo Private label liniju. Za nas saradnja ne prestaje prvom porudžbinom. Ona tek počinje tog trenutka i ne prestaje čak ni kada obezbedimo najbolju prodaju i prepoznatljiv imidž na tržištu. </div></div><div class="col-md-6"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/about-us-picture.jpg" style="width:100%; height:auto;"> </div></div></div><div class="row" id="iframeZkiZ" style="margin-bottom:24px;padding-bottom:32px;margin-lefT: 0px;margin-right: 0px;"> <div class="video-container"> <iframe style=" -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;" src="https://www.youtube.com/embed/GaAdD6L4Agw" frameborder="0" allowfullscreen=""> </iframe> </div></div>';
									$('.borderZ').parent().remove();
									codeAddress2b();
									
								document.title = 'About us - S Dream Shop';	
								document.getElementById('oNamaZen').className += 'activePageZen'
								$('html, body').animate({scrollTop: '0px'}, 300);								
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);	
							}
			};
	
			}
    }	
	

	
	function kakoOdabrati() {
	
	
	
	
	var xzy = window.location.href; 
			if (xzy.indexOf("/how-to-choose-a-mattress/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'how-to-choose-a-mattress/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'how-to-choose-a-mattress/';}
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h1 class="h2ZZZ" style="margin-bottom:32px;">Kako odabrati dušek</h1> Ovde možete pronaći par zanimljivih stvari kada je odabir dušeka u pitanju. Obzirom da trećinu života provedete u snu i da san itekako utiče na vaše zdravlje i raspoloženje, preporučljivo je da se temi kupovine dušeka ozbiljno posvetite. Više faktora utiču na to koji tip dušeka odgovara baš vama. Mi ćemo pokušati u tome da vam pomognemo. <h2 class="h2ZZZ">Jezgro dušeka </h2>Bitna stavka prilikom izbora duseka je takodje i od cega je sastavljeno njegovo jezgro. <br><strong>Dušeci od pene </strong> (Sky cell, Hr, Memory, Eco latex) su najuniverzalniji.U zavisnosti od njihove tvrdoće, gotovo da ne postoji osoba koja ne može da pronadje odgovarajući dušek za sebe. Hladno livene pene su odličan material koji je sačinjen od otvorenih ćelija. Kroz njih vazduh neprestalno cirkuliše i onemogućava skupljanje budji i grinja. Uglavnom imaju i skidajuću navlaku koja se pere na 400. <br><strong>Dušeci sa džepičastim jezgrom </strong> su potpuni hit u svetu, kod njih je svaka opruga zasebna i obmotana u reteks. Preporučuju se osobama koje imaju nemiran san (često se okreću u toku noći), kao i osobama koje dušek dele sa partnerom. Kada se izvrši pritisak na jedan deo dušeka, drugi deo se ne pomera. U ponudi imamo i one sa 7-ZONSKIM džepičastim jezgrom, kod takvog dušeka pritisak tela se ravnomerno rasporedjuje i kičma ne trpi opterećenja, već ostaje u idealnom položaju. Preporučujemo ih osobama sa raznim obolenjima na kičmenom stubu. <br><strong>Dušeci sa zičanim jezgrom </strong> pripadaju prvoj generaciji dušeka. Spadaju u tradicionalna rešenja i u kombinaciji sa Memory ili softnom penom mogu biti pravo rešenje po jako pristupačnim cenama. <br><h2 class="h2ZZZ">Navlake dušeka </h2>Istraživanja su pokazala da nam u salonu gde su izloženi dušeci zapravo navlaka prva privuče pažnju.One se mogu najpre razlikovati kao SKIDAJUĆE i NESKIDAJUĆE. Neskidajuće navlake možete pomoću RSV zatvarača komotno skinuti sa dušeka i oprati ih. Na taj način vaš dušek će dosta duže ostati nov i čist.Takođe, navlake možemo razlikovati i po svojstvima materijala koji se nalaze u njihovom sastavu. Evo nekih koje možete pronaći u našem asortimanu: <ul class="productListingZ"> <li class="prva"> <strong>Navlaka sa protkanim srebrnim nitima.  </strong>Pored vizuelnog efekta koji joj daje glamurozni izgled, poznata je i po tome što sprečava prekomerno znojenje i onemogućava nakupljanje neprijatnih mirisa u dušeku. </li><li class="druga"> <strong>Navlaka sa ekstraktom Aloe Vera.  </strong>Pokazala se kao dobra pomoć u tretiranju problematične kože. Sastav ove navlake pospešuje regeneraciju ćelija kože, ne iritira osetljivu kožu i održava njenu prirodnu ravnotežu. Ljudi koji imaju ekcem, psorijazu, akne, rozaceu ili bilo koji problem sa kožom treba da odaberu ovakvu navlaku. </li><li class="treca"> <strong>Navlaka sa kašmirskim vlaknima.  </strong>Tkanine od kašmira su već vekovima simbol elegancije i raskoši. Vlakna kašmira su od fine spiralne teksture i odlikuje ih izuzetna mekoća na dodir i čvrstoća po pitanju izdržljivosti. Sa ovakvim karakteristikama one su pravi toplotni izolator. Kako bi dao svoj maksimum udobnosti navlake za dušek dodaje mu se viskozni sastav. Takva svojstva su trajna i ne gube se prilikom pranja navlake. Pogodan je za sva godišnja doba, dok zimi greje, kombinacija viskoze i kašmira leti daje prozračnost. </li></ul> <h2 class="h2ZZZ">Stepen tvrdoće dušeka </h2>Je ustvari nivo opterećenja koji dušek može da podnese, a da u njegovoj strukturi ne dodje do deformacija i ujedno da osoba koja na njemu spava ne izgubi osećaj komfora.U našoj kompaniji smo tvrdoću dušeka podelili u 4 kategorije: <ul class="productListingZ"> <li class="prva"> <strong>H1 </strong> - (do 60 kg) to su mekaniji dušeci, koji nisu u stanju da podnesu veća opterećenja i uglavnom se preporučuju za decu i tinejdžere, odnosno za osobe do 60kg telesne težine. </li><li class="druga"> <strong>H2 </strong> - (do 90 kg) – nesto čvršći od prethodne kategorije. Takodje se preporučuju za mladje osobe ili za mršavije. </li><li class="treca"> <strong>H3 </strong> - (do 130kg)- dušeci pod oznakom H3 mogu da podnesu visok nivo opterećena i smatra se da su najoptimalniji najvećem broju korisnika. </li><li class="cetvrta"> <strong>H4 </strong> - (i preko 130kg)- Ovo su izuzetno tvrdi dušeci, mogu ih koristiti osobe koje imaju čak i preko 130kg. Takodje se savetuje korisnicima koji imaju problem sa kičmom i neophodna im je izuzetno tvrda podloga za spavanje. </li><li class="peta"> <strong>Savet: </strong> Obradite pažnju na oznaku za tvrdoću dušeka i uskladite je sa vašom telesnom težinom i eventualnim potrebama. </li></ul> <h2 class="h2ZZZ">Ono što treba da znate kada kupujete dečiji dušek </h2>Na kakvom će krevetu i jastuku da spava vaše dete, veoma je važno, jer od dobrog izbora zavisi zdravlje i raspoloženje najmlađih.Kvalitet kreveta je presudan za dobar san i zdravlje kičme. U tom smislu, potrebe najmlađih su istovetne kao potrebe odraslih. Deci je neophodan udoban i prostran krevet da bi se dobro odmorila, i imala energije za sve izazove u toku dana.Osnovno je da dušek predstavlja potporu koja podržava delove tela koji su nam teški, a to su ramena i kukovi. U tom delu se najviše oblikuje prema nama - da bi noge, ruke i leđa ostali ravni. Kada ležimo, kičma treba da bude na isti način oblikovana kao kada stojimo.Naša preporuka je da se za bebe i malu decu koristi dušek od Sky Cell pene, bez žičanog jezgra. Otvorene ćelije ove poliuretanske pene neće dozvoliti skupljane grinja i bakterija i obezbediće zdrav san vašem mališanu. </div></div>';
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('kakoOdabratiZen1').className += ' activePageZen';	
							document.getElementById('kakoOdabratiZen2').className += ' activePageZen3';	
							document.getElementById('kakoOdabratiZen3').className += ' activePageZen';
							document.title = 'How to Choose a Mattress - S Dream Shop';	
							$('html, body').animate({scrollTop: '0px'}, 300);	
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/how-to-choose-a-mattress")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h1 class="h2ZZZ" style="margin-bottom:32px;">Kako odabrati dušek</h1> Ovde možete pronaći par zanimljivih stvari kada je odabir dušeka u pitanju. Obzirom da trećinu života provedete u snu i da san itekako utiče na vaše zdravlje i raspoloženje, preporučljivo je da se temi kupovine dušeka ozbiljno posvetite. Više faktora utiču na to koji tip dušeka odgovara baš vama. Mi ćemo pokušati u tome da vam pomognemo. <h2 class="h2ZZZ">Jezgro dušeka </h2>Bitna stavka prilikom izbora duseka je takodje i od cega je sastavljeno njegovo jezgro. <br><strong>Dušeci od pene </strong> (Sky cell, Hr, Memory, Eco latex) su najuniverzalniji.U zavisnosti od njihove tvrdoće, gotovo da ne postoji osoba koja ne može da pronadje odgovarajući dušek za sebe. Hladno livene pene su odličan material koji je sačinjen od otvorenih ćelija. Kroz njih vazduh neprestalno cirkuliše i onemogućava skupljanje budji i grinja. Uglavnom imaju i skidajuću navlaku koja se pere na 400. <br><strong>Dušeci sa džepičastim jezgrom </strong> su potpuni hit u svetu, kod njih je svaka opruga zasebna i obmotana u reteks. Preporučuju se osobama koje imaju nemiran san (često se okreću u toku noći), kao i osobama koje dušek dele sa partnerom. Kada se izvrši pritisak na jedan deo dušeka, drugi deo se ne pomera. U ponudi imamo i one sa 7-ZONSKIM džepičastim jezgrom, kod takvog dušeka pritisak tela se ravnomerno rasporedjuje i kičma ne trpi opterećenja, već ostaje u idealnom položaju. Preporučujemo ih osobama sa raznim obolenjima na kičmenom stubu. <br><strong>Dušeci sa zičanim jezgrom </strong> pripadaju prvoj generaciji dušeka. Spadaju u tradicionalna rešenja i u kombinaciji sa Memory ili softnom penom mogu biti pravo rešenje po jako pristupačnim cenama. <br><h2 class="h2ZZZ">Navlake dušeka </h2>Istraživanja su pokazala da nam u salonu gde su izloženi dušeci zapravo navlaka prva privuče pažnju.One se mogu najpre razlikovati kao SKIDAJUĆE i NESKIDAJUĆE. Neskidajuće navlake možete pomoću RSV zatvarača komotno skinuti sa dušeka i oprati ih. Na taj način vaš dušek će dosta duže ostati nov i čist.Takođe, navlake možemo razlikovati i po svojstvima materijala koji se nalaze u njihovom sastavu. Evo nekih koje možete pronaći u našem asortimanu: <ul class="productListingZ"> <li class="prva"> <strong>Navlaka sa protkanim srebrnim nitima.  </strong>Pored vizuelnog efekta koji joj daje glamurozni izgled, poznata je i po tome što sprečava prekomerno znojenje i onemogućava nakupljanje neprijatnih mirisa u dušeku. </li><li class="druga"> <strong>Navlaka sa ekstraktom Aloe Vera.  </strong>Pokazala se kao dobra pomoć u tretiranju problematične kože. Sastav ove navlake pospešuje regeneraciju ćelija kože, ne iritira osetljivu kožu i održava njenu prirodnu ravnotežu. Ljudi koji imaju ekcem, psorijazu, akne, rozaceu ili bilo koji problem sa kožom treba da odaberu ovakvu navlaku. </li><li class="treca"> <strong>Navlaka sa kašmirskim vlaknima.  </strong>Tkanine od kašmira su već vekovima simbol elegancije i raskoši. Vlakna kašmira su od fine spiralne teksture i odlikuje ih izuzetna mekoća na dodir i čvrstoća po pitanju izdržljivosti. Sa ovakvim karakteristikama one su pravi toplotni izolator. Kako bi dao svoj maksimum udobnosti navlake za dušek dodaje mu se viskozni sastav. Takva svojstva su trajna i ne gube se prilikom pranja navlake. Pogodan je za sva godišnja doba, dok zimi greje, kombinacija viskoze i kašmira leti daje prozračnost. </li></ul> <h2 class="h2ZZZ">Stepen tvrdoće dušeka </h2>Je ustvari nivo opterećenja koji dušek može da podnese, a da u njegovoj strukturi ne dodje do deformacija i ujedno da osoba koja na njemu spava ne izgubi osećaj komfora.U našoj kompaniji smo tvrdoću dušeka podelili u 4 kategorije: <ul class="productListingZ"> <li class="prva"> <strong>H1 </strong> - (do 60 kg) to su mekaniji dušeci, koji nisu u stanju da podnesu veća opterećenja i uglavnom se preporučuju za decu i tinejdžere, odnosno za osobe do 60kg telesne težine. </li><li class="druga"> <strong>H2 </strong> - (do 90 kg) – nesto čvršći od prethodne kategorije. Takodje se preporučuju za mladje osobe ili za mršavije. </li><li class="treca"> <strong>H3 </strong> - (do 130kg)- dušeci pod oznakom H3 mogu da podnesu visok nivo opterećena i smatra se da su najoptimalniji najvećem broju korisnika. </li><li class="cetvrta"> <strong>H4 </strong> - (i preko 130kg)- Ovo su izuzetno tvrdi dušeci, mogu ih koristiti osobe koje imaju čak i preko 130kg. Takodje se savetuje korisnicima koji imaju problem sa kičmom i neophodna im je izuzetno tvrda podloga za spavanje. </li><li class="peta"> <strong>Savet: </strong> Obradite pažnju na oznaku za tvrdoću dušeka i uskladite je sa vašom telesnom težinom i eventualnim potrebama. </li></ul> <h2 class="h2ZZZ">Ono što treba da znate kada kupujete dečiji dušek </h2>Na kakvom će krevetu i jastuku da spava vaše dete, veoma je važno, jer od dobrog izbora zavisi zdravlje i raspoloženje najmlađih.Kvalitet kreveta je presudan za dobar san i zdravlje kičme. U tom smislu, potrebe najmlađih su istovetne kao potrebe odraslih. Deci je neophodan udoban i prostran krevet da bi se dobro odmorila, i imala energije za sve izazove u toku dana.Osnovno je da dušek predstavlja potporu koja podržava delove tela koji su nam teški, a to su ramena i kukovi. U tom delu se najviše oblikuje prema nama - da bi noge, ruke i leđa ostali ravni. Kada ležimo, kičma treba da bude na isti način oblikovana kao kada stojimo.Naša preporuka je da se za bebe i malu decu koristi dušek od Sky Cell pene, bez žičanog jezgra. Otvorene ćelije ove poliuretanske pene neće dozvoliti skupljane grinja i bakterija i obezbediće zdrav san vašem mališanu. </div></div>';
								document.title = 'How to Choose a Mattress - S Dream Shop';	
								document.getElementById('kakoOdabratiZen1').className += ' activePageZen';	
							document.getElementById('kakoOdabratiZen2').className += ' activePageZen3';	
							document.getElementById('kakoOdabratiZen3').className += ' activePageZen';
								$('html, body').animate({scrollTop: '0px'}, 300);								
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							}
			};
	
			}
	
	
						
		
    }
	function kakoOdabratiZ() {

	
		var xzy = window.location.href; 
			if (xzy.indexOf("/how-to-choose-a-mattress/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'how-to-choose-a-mattress/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'how-to-choose-a-mattress/';}
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h1 class="h2ZZZ" style="margin-bottom:32px;">Kako odabrati dušek</h1> Ovde možete pronaći par zanimljivih stvari kada je odabir dušeka u pitanju. Obzirom da trećinu života provedete u snu i da san itekako utiče na vaše zdravlje i raspoloženje, preporučljivo je da se temi kupovine dušeka ozbiljno posvetite. Više faktora utiču na to koji tip dušeka odgovara baš vama. Mi ćemo pokušati u tome da vam pomognemo. <h2 class="h2ZZZ">Jezgro dušeka </h2>Bitna stavka prilikom izbora duseka je takodje i od cega je sastavljeno njegovo jezgro. <br><strong>Dušeci od pene </strong> (Sky cell, Hr, Memory, Eco latex) su najuniverzalniji.U zavisnosti od njihove tvrdoće, gotovo da ne postoji osoba koja ne može da pronadje odgovarajući dušek za sebe. Hladno livene pene su odličan material koji je sačinjen od otvorenih ćelija. Kroz njih vazduh neprestalno cirkuliše i onemogućava skupljanje budji i grinja. Uglavnom imaju i skidajuću navlaku koja se pere na 400. <br><strong>Dušeci sa džepičastim jezgrom </strong> su potpuni hit u svetu, kod njih je svaka opruga zasebna i obmotana u reteks. Preporučuju se osobama koje imaju nemiran san (često se okreću u toku noći), kao i osobama koje dušek dele sa partnerom. Kada se izvrši pritisak na jedan deo dušeka, drugi deo se ne pomera. U ponudi imamo i one sa 7-ZONSKIM džepičastim jezgrom, kod takvog dušeka pritisak tela se ravnomerno rasporedjuje i kičma ne trpi opterećenja, već ostaje u idealnom položaju. Preporučujemo ih osobama sa raznim obolenjima na kičmenom stubu. <br><strong>Dušeci sa zičanim jezgrom </strong> pripadaju prvoj generaciji dušeka. Spadaju u tradicionalna rešenja i u kombinaciji sa Memory ili softnom penom mogu biti pravo rešenje po jako pristupačnim cenama. <br><h2 class="h2ZZZ">Navlake dušeka </h2>Istraživanja su pokazala da nam u salonu gde su izloženi dušeci zapravo navlaka prva privuče pažnju.One se mogu najpre razlikovati kao SKIDAJUĆE i NESKIDAJUĆE. Neskidajuće navlake možete pomoću RSV zatvarača komotno skinuti sa dušeka i oprati ih. Na taj način vaš dušek će dosta duže ostati nov i čist.Takođe, navlake možemo razlikovati i po svojstvima materijala koji se nalaze u njihovom sastavu. Evo nekih koje možete pronaći u našem asortimanu: <ul class="productListingZ"> <li class="prva"> <strong>Navlaka sa protkanim srebrnim nitima.  </strong>Pored vizuelnog efekta koji joj daje glamurozni izgled, poznata je i po tome što sprečava prekomerno znojenje i onemogućava nakupljanje neprijatnih mirisa u dušeku. </li><li class="druga"> <strong>Navlaka sa ekstraktom Aloe Vera.  </strong>Pokazala se kao dobra pomoć u tretiranju problematične kože. Sastav ove navlake pospešuje regeneraciju ćelija kože, ne iritira osetljivu kožu i održava njenu prirodnu ravnotežu. Ljudi koji imaju ekcem, psorijazu, akne, rozaceu ili bilo koji problem sa kožom treba da odaberu ovakvu navlaku. </li><li class="treca"> <strong>Navlaka sa kašmirskim vlaknima.  </strong>Tkanine od kašmira su već vekovima simbol elegancije i raskoši. Vlakna kašmira su od fine spiralne teksture i odlikuje ih izuzetna mekoća na dodir i čvrstoća po pitanju izdržljivosti. Sa ovakvim karakteristikama one su pravi toplotni izolator. Kako bi dao svoj maksimum udobnosti navlake za dušek dodaje mu se viskozni sastav. Takva svojstva su trajna i ne gube se prilikom pranja navlake. Pogodan je za sva godišnja doba, dok zimi greje, kombinacija viskoze i kašmira leti daje prozračnost. </li></ul> <h2 class="h2ZZZ">Stepen tvrdoće dušeka </h2>Je ustvari nivo opterećenja koji dušek može da podnese, a da u njegovoj strukturi ne dodje do deformacija i ujedno da osoba koja na njemu spava ne izgubi osećaj komfora.U našoj kompaniji smo tvrdoću dušeka podelili u 4 kategorije: <ul class="productListingZ"> <li class="prva"> <strong>H1 </strong> - (do 60 kg) to su mekaniji dušeci, koji nisu u stanju da podnesu veća opterećenja i uglavnom se preporučuju za decu i tinejdžere, odnosno za osobe do 60kg telesne težine. </li><li class="druga"> <strong>H2 </strong> - (do 90 kg) – nesto čvršći od prethodne kategorije. Takodje se preporučuju za mladje osobe ili za mršavije. </li><li class="treca"> <strong>H3 </strong> - (do 130kg)- dušeci pod oznakom H3 mogu da podnesu visok nivo opterećena i smatra se da su najoptimalniji najvećem broju korisnika. </li><li class="cetvrta"> <strong>H4 </strong> - (i preko 130kg)- Ovo su izuzetno tvrdi dušeci, mogu ih koristiti osobe koje imaju čak i preko 130kg. Takodje se savetuje korisnicima koji imaju problem sa kičmom i neophodna im je izuzetno tvrda podloga za spavanje. </li><li class="peta"> <strong>Savet: </strong> Obradite pažnju na oznaku za tvrdoću dušeka i uskladite je sa vašom telesnom težinom i eventualnim potrebama. </li></ul> <h2 class="h2ZZZ">Ono što treba da znate kada kupujete dečiji dušek </h2>Na kakvom će krevetu i jastuku da spava vaše dete, veoma je važno, jer od dobrog izbora zavisi zdravlje i raspoloženje najmlađih.Kvalitet kreveta je presudan za dobar san i zdravlje kičme. U tom smislu, potrebe najmlađih su istovetne kao potrebe odraslih. Deci je neophodan udoban i prostran krevet da bi se dobro odmorila, i imala energije za sve izazove u toku dana.Osnovno je da dušek predstavlja potporu koja podržava delove tela koji su nam teški, a to su ramena i kukovi. U tom delu se najviše oblikuje prema nama - da bi noge, ruke i leđa ostali ravni. Kada ležimo, kičma treba da bude na isti način oblikovana kao kada stojimo.Naša preporuka je da se za bebe i malu decu koristi dušek od Sky Cell pene, bez žičanog jezgra. Otvorene ćelije ove poliuretanske pene neće dozvoliti skupljane grinja i bakterija i obezbediće zdrav san vašem mališanu. </div></div>';
								$('.borderZ').parent().remove();
								codeAddress2a();
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('kakoOdabratiZen1').className += ' activePageZen';	
							document.getElementById('kakoOdabratiZen2').className += ' activePageZen3';	
							document.getElementById('kakoOdabratiZen3').className += ' activePageZen';
							document.title = 'How to Choose a Mattress - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);								
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/how-to-choose-a-mattress")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h1 class="h2ZZZ" style="margin-bottom:32px;">Kako odabrati dušek</h1> Ovde možete pronaći par zanimljivih stvari kada je odabir dušeka u pitanju. Obzirom da trećinu života provedete u snu i da san itekako utiče na vaše zdravlje i raspoloženje, preporučljivo je da se temi kupovine dušeka ozbiljno posvetite. Više faktora utiču na to koji tip dušeka odgovara baš vama. Mi ćemo pokušati u tome da vam pomognemo. <h2 class="h2ZZZ">Jezgro dušeka </h2>Bitna stavka prilikom izbora duseka je takodje i od cega je sastavljeno njegovo jezgro. <br><strong>Dušeci od pene </strong> (Sky cell, Hr, Memory, Eco latex) su najuniverzalniji.U zavisnosti od njihove tvrdoće, gotovo da ne postoji osoba koja ne može da pronadje odgovarajući dušek za sebe. Hladno livene pene su odličan material koji je sačinjen od otvorenih ćelija. Kroz njih vazduh neprestalno cirkuliše i onemogućava skupljanje budji i grinja. Uglavnom imaju i skidajuću navlaku koja se pere na 400. <br><strong>Dušeci sa džepičastim jezgrom </strong> su potpuni hit u svetu, kod njih je svaka opruga zasebna i obmotana u reteks. Preporučuju se osobama koje imaju nemiran san (često se okreću u toku noći), kao i osobama koje dušek dele sa partnerom. Kada se izvrši pritisak na jedan deo dušeka, drugi deo se ne pomera. U ponudi imamo i one sa 7-ZONSKIM džepičastim jezgrom, kod takvog dušeka pritisak tela se ravnomerno rasporedjuje i kičma ne trpi opterećenja, već ostaje u idealnom položaju. Preporučujemo ih osobama sa raznim obolenjima na kičmenom stubu. <br><strong>Dušeci sa zičanim jezgrom </strong> pripadaju prvoj generaciji dušeka. Spadaju u tradicionalna rešenja i u kombinaciji sa Memory ili softnom penom mogu biti pravo rešenje po jako pristupačnim cenama. <br><h2 class="h2ZZZ">Navlake dušeka </h2>Istraživanja su pokazala da nam u salonu gde su izloženi dušeci zapravo navlaka prva privuče pažnju.One se mogu najpre razlikovati kao SKIDAJUĆE i NESKIDAJUĆE. Neskidajuće navlake možete pomoću RSV zatvarača komotno skinuti sa dušeka i oprati ih. Na taj način vaš dušek će dosta duže ostati nov i čist.Takođe, navlake možemo razlikovati i po svojstvima materijala koji se nalaze u njihovom sastavu. Evo nekih koje možete pronaći u našem asortimanu: <ul class="productListingZ"> <li class="prva"> <strong>Navlaka sa protkanim srebrnim nitima.  </strong>Pored vizuelnog efekta koji joj daje glamurozni izgled, poznata je i po tome što sprečava prekomerno znojenje i onemogućava nakupljanje neprijatnih mirisa u dušeku. </li><li class="druga"> <strong>Navlaka sa ekstraktom Aloe Vera.  </strong>Pokazala se kao dobra pomoć u tretiranju problematične kože. Sastav ove navlake pospešuje regeneraciju ćelija kože, ne iritira osetljivu kožu i održava njenu prirodnu ravnotežu. Ljudi koji imaju ekcem, psorijazu, akne, rozaceu ili bilo koji problem sa kožom treba da odaberu ovakvu navlaku. </li><li class="treca"> <strong>Navlaka sa kašmirskim vlaknima.  </strong>Tkanine od kašmira su već vekovima simbol elegancije i raskoši. Vlakna kašmira su od fine spiralne teksture i odlikuje ih izuzetna mekoća na dodir i čvrstoća po pitanju izdržljivosti. Sa ovakvim karakteristikama one su pravi toplotni izolator. Kako bi dao svoj maksimum udobnosti navlake za dušek dodaje mu se viskozni sastav. Takva svojstva su trajna i ne gube se prilikom pranja navlake. Pogodan je za sva godišnja doba, dok zimi greje, kombinacija viskoze i kašmira leti daje prozračnost. </li></ul> <h2 class="h2ZZZ">Stepen tvrdoće dušeka </h2>Je ustvari nivo opterećenja koji dušek može da podnese, a da u njegovoj strukturi ne dodje do deformacija i ujedno da osoba koja na njemu spava ne izgubi osećaj komfora.U našoj kompaniji smo tvrdoću dušeka podelili u 4 kategorije: <ul class="productListingZ"> <li class="prva"> <strong>H1 </strong> - (do 60 kg) to su mekaniji dušeci, koji nisu u stanju da podnesu veća opterećenja i uglavnom se preporučuju za decu i tinejdžere, odnosno za osobe do 60kg telesne težine. </li><li class="druga"> <strong>H2 </strong> - (do 90 kg) – nesto čvršći od prethodne kategorije. Takodje se preporučuju za mladje osobe ili za mršavije. </li><li class="treca"> <strong>H3 </strong> - (do 130kg)- dušeci pod oznakom H3 mogu da podnesu visok nivo opterećena i smatra se da su najoptimalniji najvećem broju korisnika. </li><li class="cetvrta"> <strong>H4 </strong> - (i preko 130kg)- Ovo su izuzetno tvrdi dušeci, mogu ih koristiti osobe koje imaju čak i preko 130kg. Takodje se savetuje korisnicima koji imaju problem sa kičmom i neophodna im je izuzetno tvrda podloga za spavanje. </li><li class="peta"> <strong>Savet: </strong> Obradite pažnju na oznaku za tvrdoću dušeka i uskladite je sa vašom telesnom težinom i eventualnim potrebama. </li></ul> <h2 class="h2ZZZ">Ono što treba da znate kada kupujete dečiji dušek </h2>Na kakvom će krevetu i jastuku da spava vaše dete, veoma je važno, jer od dobrog izbora zavisi zdravlje i raspoloženje najmlađih.Kvalitet kreveta je presudan za dobar san i zdravlje kičme. U tom smislu, potrebe najmlađih su istovetne kao potrebe odraslih. Deci je neophodan udoban i prostran krevet da bi se dobro odmorila, i imala energije za sve izazove u toku dana.Osnovno je da dušek predstavlja potporu koja podržava delove tela koji su nam teški, a to su ramena i kukovi. U tom delu se najviše oblikuje prema nama - da bi noge, ruke i leđa ostali ravni. Kada ležimo, kičma treba da bude na isti način oblikovana kao kada stojimo.Naša preporuka je da se za bebe i malu decu koristi dušek od Sky Cell pene, bez žičanog jezgra. Otvorene ćelije ove poliuretanske pene neće dozvoliti skupljane grinja i bakterija i obezbediće zdrav san vašem mališanu. </div></div>';
									$('.borderZ').parent().remove();
									codeAddress2a();
									
								document.title = 'How to Choose a Mattress - S Dream Shop';	
								document.getElementById('kakoOdabratiZen1').className += ' activePageZen';	
							document.getElementById('kakoOdabratiZen2').className += ' activePageZen3';	
							document.getElementById('kakoOdabratiZen3').className += ' activePageZen';	
									$('html, body').animate({scrollTop: '0px'}, 300);							
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);								
						
							}
			};
	
			}
	
	
					
			
					
    }	
	

	function kakoKupiti() {

	
		var xzy = window.location.href; 
			if (xzy.indexOf("/how-to-buy/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'how-to-buy/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'how-to-buy/';}
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold; border-bottom:2px solid #606060; margin-left:30px; margin-right:30px; color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-1"> </div><div class="col-md-10" style=" padding-left: 32px;"> <h1 class="zukiraZo">Kako kupiti </h1> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-4"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/sdream-odabir-duseka.png" style="width:100%;height:auto;padding-left: 36px;"> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Prelaskom miša preko nekog od proizvoda pojavljuju se dva dugmeta,<span style="color:#f06423;"> Dodaj u korpu</span> i <span style="color:#959595; font-weight:bold;"> Više</span>. Klikom na dugme <span style="color:#959595; font-weight:bold;">Više</span> prikazaće Vam se detaljan opis proizvoda sa dostupnim dimenzijama.</div><div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Klikom na dugme <span style="color:#f06423;">Dodaj u korpu</span> otvoriće Vam se prozor kao na slici ispod i proizvod će automatski biti ubačen u korpu u svojim osnovnim dimenzijama. Preporučujemo da uvek idete na dugme <span style="color:#959595; font-weight:bold;">Više</span> kako bi mogli da birate količinu i dimenzije željenog dušeka.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-kupovina-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <h3 class="zukiraZo" style=" cursor: pointer;" onclick="myFunction()">Poklon vaučer</h3><h3 class="zukiraZo" onclick="myFunction()"><i class="fa fa-arrow-circle-o-down" aria-hidden="true" style="position: absolute;color: #f06423;font-size: 32px;top: 10px;right: 44px;text-align: right;" onclick="myFunction()"></i></h3> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Da biste ostvarili pravo na poklon vaučer od 1000dinara potrebno je da se registujete na našu internet prodavnicu. U gornjem desnom uglu sajta imate dugme <strong>Prijavi se</strong> preko koga možete izvršiti regustraciju.</div><div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko ste već registrovani i prijavljeni na sajt na tom mestu će pisati Vaše ime. Klikom na Vaše ime otvarate opcije Vašeg naloga kao na slici ispod. Pored ličnih informacija, adresa za poručivanje i prethodnih kupovina možete videti i sekciju <strong>MOJI VAUČERI</strong>. Klikom na dugme dobićete prikaz dostupnih vaučera.</div></div><div class="col-md-3"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/prijava-na-sdream-sajt.png" style="width:100%;height:auto;padding-right: 32px;"> </div></div><div class="col-md-1"> </div></div><div class="row"><div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/poklon-vauceri.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Vaš vaučer predstavlja automatski generisan kod koji možete uneti prilikom kupovine proizvoda. Napominjemo da vaučer važi samo za kupovine od preko 10.000 RSD.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <img src="https://www.sdream.rs/upload/poklon-vauceri-za-kupovinu-duseka-i-jastuka.png" style="width:100%;height:auto;padding-left: 32px;"> </div><div class="col-md-4"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Kod vaučera zapišite ili kopirajte vodeći računa o malim i velikim slovima. Kada odaberete željeni proizvod i odete u kopru na našem sajtu potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) iskopirate ili unesete Vaš vaučer kod i pritisnete dugme "U redu". Nakon toga ukupna cena porudžbine će se umanjiti za iznos od 1.000 RSD. </div></div><div class="col-md-1"> </div></div><script>function myFunction(){var kalem=document.getElementById("ciloralac").innerHTML;if(kalem==="1"){$("#cczz33").css("height","100%"); document.getElementById("ciloralac").innerHTML="2";}else{$("#cczz33").css("height","70px"); document.getElementById("ciloralac").innerHTML="1";}}</script><div id="ciloralac">1</div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu-2.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Proces kupovine započinjete upisivanjem Vaših ličnih podataka kao i adrese za isporuku. Vodite računa prilikom upisivanja <strong>kontakt telefona</strong> kako bi kolege iz prodaje mogle da Vas kontaktiraju prilikom kreiranja porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-nacin-isporuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko ste vać poručivali imaćete opciju da ažurirate neku od prethodnih adresa ili da upišete novu. U ovom delu imate i tekstualno polje u koje možete napisati Vašu <strong>napomenu</strong> za kolege koje obrađuju porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-adresa-isporuke-za-duseke-i-jastuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Nakod odabira adrese isporuke trebate odabrati i način isporuke i prihtatiti uslove korišćenja i kupovine sa S Dream sajta. Trenutno naša kompanija sve usluge dostave naplaćuje 500 RSD uključujući i PDV. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/uslovi-koriscenja-prilikom-kupovine-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">U pretposlednjem koraku birate način plaćanja. Trenutno je dostupno plaćanje pouzećem, što znači da robu plaćate prilikom preuzimanja. Uskoro ćemo omogućiti i plaćanje kreditnim karticama tako da ćete ceo proces kupovine moći da obavite iz udobnosti Vašeg doma. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/kupovina-duseka-na-sdream-sajtu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-5"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/potvrda-sdream-porudzbenice.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div></div><div class="col-md-5"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Poslednji korak je potvrda Vaše porudžbine. U roku od 24h očekujte poziv od kolega iz prodaje kako bi uspešno krairali porudžbinu.</div></div><div class="col-md-1"> </div></div></div></div>';
								$('.borderZ').parent().remove();
								
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('kakoKupitiZen1').className += ' activePageZen';	
							document.getElementById('kakoKupitiZen2').className += ' activePageZen3';	
							document.getElementById('kakoKupitiZen3').className += ' activePageZen';
							document.title = 'How to buy - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);								
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/how-to-buy")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold; border-bottom:2px solid #606060; margin-left:30px; margin-right:30px; color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-1"> </div><div class="col-md-10" style=" padding-left: 32px;"> <h1 class="zukiraZo">Kako kupiti </h1> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-4"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/sdream-odabir-duseka.png" style="width:100%;height:auto;padding-left: 36px;"> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Prelaskom miša preko nekog od proizvoda pojavljuju se dva dugmeta,<span style="color:#f06423;"> Dodaj u korpu</span> i <span style="color:#959595; font-weight:bold;"> Više</span>. Klikom na dugme <span style="color:#959595; font-weight:bold;">Više</span> prikazaće Vam se detaljan opis proizvoda sa dostupnim dimenzijama.</div><div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Klikom na dugme <span style="color:#f06423;">Dodaj u korpu</span> otvoriće Vam se prozor kao na slici ispod i proizvod će automatski biti ubačen u korpu u svojim osnovnim dimenzijama. Preporučujemo da uvek idete na dugme <span style="color:#959595; font-weight:bold;">Više</span> kako bi mogli da birate količinu i dimenzije željenog dušeka.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-kupovina-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <h3 class="zukiraZo" style=" cursor: pointer;" onclick="myFunction()">Poklon vaučer</h3><h3 class="zukiraZo" onclick="myFunction()"><i class="fa fa-arrow-circle-o-down" aria-hidden="true" style="position: absolute;color: #f06423;font-size: 32px;top: 10px;right: 44px;text-align: right;" onclick="myFunction()"></i></h3> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Da biste ostvarili pravo na poklon vaučer od 1000dinara potrebno je da se registujete na našu internet prodavnicu. U gornjem desnom uglu sajta imate dugme <strong>Prijavi se</strong> preko koga možete izvršiti regustraciju.</div><div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko ste već registrovani i prijavljeni na sajt na tom mestu će pisati Vaše ime. Klikom na Vaše ime otvarate opcije Vašeg naloga kao na slici ispod. Pored ličnih informacija, adresa za poručivanje i prethodnih kupovina možete videti i sekciju <strong>MOJI VAUČERI</strong>. Klikom na dugme dobićete prikaz dostupnih vaučera.</div></div><div class="col-md-3"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/prijava-na-sdream-sajt.png" style="width:100%;height:auto;padding-right: 32px;"> </div></div><div class="col-md-1"> </div></div><div class="row"><div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/poklon-vauceri.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Vaš vaučer predstavlja automatski generisan kod koji možete uneti prilikom kupovine proizvoda. Napominjemo da vaučer važi samo za kupovine od preko 10.000 RSD.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <img src="https://www.sdream.rs/upload/poklon-vauceri-za-kupovinu-duseka-i-jastuka.png" style="width:100%;height:auto;padding-left: 32px;"> </div><div class="col-md-4"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Kod vaučera zapišite ili kopirajte vodeći računa o malim i velikim slovima. Kada odaberete željeni proizvod i odete u kopru na našem sajtu potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) iskopirate ili unesete Vaš vaučer kod i pritisnete dugme "U redu". Nakon toga ukupna cena porudžbine će se umanjiti za iznos od 1.000 RSD. </div></div><div class="col-md-1"> </div></div><script>function myFunction(){var kalem=document.getElementById("ciloralac").innerHTML;if(kalem==="1"){$("#cczz33").css("height","100%"); document.getElementById("ciloralac").innerHTML="2";}else{$("#cczz33").css("height","70px"); document.getElementById("ciloralac").innerHTML="1";}}</script><div id="ciloralac">1</div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu-2.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Proces kupovine započinjete upisivanjem Vaših ličnih podataka kao i adrese za isporuku. Vodite računa prilikom upisivanja <strong>kontakt telefona</strong> kako bi kolege iz prodaje mogle da Vas kontaktiraju prilikom kreiranja porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-nacin-isporuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko ste vać poručivali imaćete opciju da ažurirate neku od prethodnih adresa ili da upišete novu. U ovom delu imate i tekstualno polje u koje možete napisati Vašu <strong>napomenu</strong> za kolege koje obrađuju porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-adresa-isporuke-za-duseke-i-jastuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Nakod odabira adrese isporuke trebate odabrati i način isporuke i prihtatiti uslove korišćenja i kupovine sa S Dream sajta. Trenutno naša kompanija sve usluge dostave naplaćuje 500 RSD uključujući i PDV. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/uslovi-koriscenja-prilikom-kupovine-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">U pretposlednjem koraku birate način plaćanja. Trenutno je dostupno plaćanje pouzećem, što znači da robu plaćate prilikom preuzimanja. Uskoro ćemo omogućiti i plaćanje kreditnim karticama tako da ćete ceo proces kupovine moći da obavite iz udobnosti Vašeg doma. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/kupovina-duseka-na-sdream-sajtu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-5"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/potvrda-sdream-porudzbenice.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div></div><div class="col-md-5"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Poslednji korak je potvrda Vaše porudžbine. U roku od 24h očekujte poziv od kolega iz prodaje kako bi uspešno krairali porudžbinu.</div></div><div class="col-md-1"> </div></div></div></div>';
									$('.borderZ').parent().remove();
								
									
								document.title = 'How to buy - S Dream Shop';	
								document.getElementById('kakoKupitiZen1').className += ' activePageZen';	
							document.getElementById('kakoKupitiZen2').className += ' activePageZen3';	
							document.getElementById('kakoKupitiZen3').className += ' activePageZen';	
									$('html, body').animate({scrollTop: '0px'}, 300);							
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);								
						
							}
			};
	
			}
	
	
					
			
					
    }
	
	

		function kakoKupitiZ() {

	
		var xzy = window.location.href; 
			if (xzy.indexOf("/how-to-buy/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'how-to-buy/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'how-to-buy/';}
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold; border-bottom:2px solid #606060; margin-left:30px; margin-right:30px; color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-1"> </div><div class="col-md-10" style=" padding-left: 32px;"> <h1 class="zukiraZo">Kako kupiti </h1> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-4"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/sdream-odabir-duseka.png" style="width:100%;height:auto;padding-left: 36px;"> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Prelaskom miša preko nekog od proizvoda pojavljuju se dva dugmeta,<span style="color:#f06423;"> Dodaj u korpu</span> i <span style="color:#959595; font-weight:bold;"> Više</span>. Klikom na dugme <span style="color:#959595; font-weight:bold;">Više</span> prikazaće Vam se detaljan opis proizvoda sa dostupnim dimenzijama.</div><div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Klikom na dugme <span style="color:#f06423;">Dodaj u korpu</span> otvoriće Vam se prozor kao na slici ispod i proizvod će automatski biti ubačen u korpu u svojim osnovnim dimenzijama. Preporučujemo da uvek idete na dugme <span style="color:#959595; font-weight:bold;">Više</span> kako bi mogli da birate količinu i dimenzije željenog dušeka.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-kupovina-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <h3 class="zukiraZo" style=" cursor: pointer;" onclick="myFunction()">Poklon vaučer</h3><h3 class="zukiraZo" onclick="myFunction()"><i class="fa fa-arrow-circle-o-down" aria-hidden="true" style="position: absolute;color: #f06423;font-size: 32px;top: 10px;right: 44px;text-align: right;" onclick="myFunction()"></i></h3> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Da biste ostvarili pravo na poklon vaučer od 1000dinara potrebno je da se registujete na našu internet prodavnicu. U gornjem desnom uglu sajta imate dugme <strong>Prijavi se</strong> preko koga možete izvršiti regustraciju.</div><div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko ste već registrovani i prijavljeni na sajt na tom mestu će pisati Vaše ime. Klikom na Vaše ime otvarate opcije Vašeg naloga kao na slici ispod. Pored ličnih informacija, adresa za poručivanje i prethodnih kupovina možete videti i sekciju <strong>MOJI VAUČERI</strong>. Klikom na dugme dobićete prikaz dostupnih vaučera.</div></div><div class="col-md-3"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/prijava-na-sdream-sajt.png" style="width:100%;height:auto;padding-right: 32px;"> </div></div><div class="col-md-1"> </div></div><div class="row"><div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/poklon-vauceri.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Vaš vaučer predstavlja automatski generisan kod koji možete uneti prilikom kupovine proizvoda. Napominjemo da vaučer važi samo za kupovine od preko 10.000 RSD.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <img src="https://www.sdream.rs/upload/poklon-vauceri-za-kupovinu-duseka-i-jastuka.png" style="width:100%;height:auto;padding-left: 32px;"> </div><div class="col-md-4"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Kod vaučera zapišite ili kopirajte vodeći računa o malim i velikim slovima. Kada odaberete željeni proizvod i odete u kopru na našem sajtu potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) iskopirate ili unesete Vaš vaučer kod i pritisnete dugme "U redu". Nakon toga ukupna cena porudžbine će se umanjiti za iznos od 1.000 RSD. </div></div><div class="col-md-1"> </div></div><script>function myFunction(){var kalem=document.getElementById("ciloralac").innerHTML;if(kalem==="1"){$("#cczz33").css("height","100%"); document.getElementById("ciloralac").innerHTML="2";}else{$("#cczz33").css("height","70px"); document.getElementById("ciloralac").innerHTML="1";}}</script><div id="ciloralac">1</div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu-2.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Proces kupovine započinjete upisivanjem Vaših ličnih podataka kao i adrese za isporuku. Vodite računa prilikom upisivanja <strong>kontakt telefona</strong> kako bi kolege iz prodaje mogle da Vas kontaktiraju prilikom kreiranja porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-nacin-isporuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko ste vać poručivali imaćete opciju da ažurirate neku od prethodnih adresa ili da upišete novu. U ovom delu imate i tekstualno polje u koje možete napisati Vašu <strong>napomenu</strong> za kolege koje obrađuju porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-adresa-isporuke-za-duseke-i-jastuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Nakod odabira adrese isporuke trebate odabrati i način isporuke i prihtatiti uslove korišćenja i kupovine sa S Dream sajta. Trenutno naša kompanija sve usluge dostave naplaćuje 500 RSD uključujući i PDV. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/uslovi-koriscenja-prilikom-kupovine-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">U pretposlednjem koraku birate način plaćanja. Trenutno je dostupno plaćanje pouzećem, što znači da robu plaćate prilikom preuzimanja. Uskoro ćemo omogućiti i plaćanje kreditnim karticama tako da ćete ceo proces kupovine moći da obavite iz udobnosti Vašeg doma. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/kupovina-duseka-na-sdream-sajtu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-5"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/potvrda-sdream-porudzbenice.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div></div><div class="col-md-5"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Poslednji korak je potvrda Vaše porudžbine. U roku od 24h očekujte poziv od kolega iz prodaje kako bi uspešno krairali porudžbinu.</div></div><div class="col-md-1"> </div></div></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2a();
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('kakoKupitiZen1').className += ' activePageZen';	
							document.getElementById('kakoKupitiZen2').className += ' activePageZen3';	
							document.getElementById('kakoKupitiZen3').className += ' activePageZen';
							document.title = 'How to buy - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);								
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/how-to-buy")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold; border-bottom:2px solid #606060; margin-left:30px; margin-right:30px; color:#f06423;}</style><div class="row" style="margin-bottom:24px;"> <div class="row"> <div class="col-md-1"> </div><div class="col-md-10" style=" padding-left: 32px;"> <h1 class="zukiraZo">Kako kupiti </h1> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-4"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/sdream-odabir-duseka.png" style="width:100%;height:auto;padding-left: 36px;"> </div></div><div class="col-md-6"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Prelaskom miša preko nekog od proizvoda pojavljuju se dva dugmeta,<span style="color:#f06423;"> Dodaj u korpu</span> i <span style="color:#959595; font-weight:bold;"> Više</span>. Klikom na dugme <span style="color:#959595; font-weight:bold;">Više</span> prikazaće Vam se detaljan opis proizvoda sa dostupnim dimenzijama.</div><div class="col-md-12 leftZZ" style=" padding-right: 32px; font-size: 20px; line-height: 22px;">Klikom na dugme <span style="color:#f06423;">Dodaj u korpu</span> otvoriće Vam se prozor kao na slici ispod i proizvod će automatski biti ubačen u korpu u svojim osnovnim dimenzijama. Preporučujemo da uvek idete na dugme <span style="color:#959595; font-weight:bold;">Više</span> kako bi mogli da birate količinu i dimenzije željenog dušeka.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-kupovina-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <h3 class="zukiraZo" style=" cursor: pointer;" onclick="myFunction()">Poklon vaučer</h3><h3 class="zukiraZo" onclick="myFunction()"><i class="fa fa-arrow-circle-o-down" aria-hidden="true" style="position: absolute;color: #f06423;font-size: 32px;top: 10px;right: 44px;text-align: right;" onclick="myFunction()"></i></h3> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Da biste ostvarili pravo na poklon vaučer od 1000dinara potrebno je da se registujete na našu internet prodavnicu. U gornjem desnom uglu sajta imate dugme <strong>Prijavi se</strong> preko koga možete izvršiti regustraciju.</div><div class="col-md-12 leftZZ" style=" padding-left: 32px; font-size: 20px; line-height: 22px;">Ukoliko ste već registrovani i prijavljeni na sajt na tom mestu će pisati Vaše ime. Klikom na Vaše ime otvarate opcije Vašeg naloga kao na slici ispod. Pored ličnih informacija, adresa za poručivanje i prethodnih kupovina možete videti i sekciju <strong>MOJI VAUČERI</strong>. Klikom na dugme dobićete prikaz dostupnih vaučera.</div></div><div class="col-md-3"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/prijava-na-sdream-sajt.png" style="width:100%;height:auto;padding-right: 32px;"> </div></div><div class="col-md-1"> </div></div><div class="row"><div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/poklon-vauceri.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Vaš vaučer predstavlja automatski generisan kod koji možete uneti prilikom kupovine proizvoda. Napominjemo da vaučer važi samo za kupovine od preko 10.000 RSD.</div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-7"> <img src="https://www.sdream.rs/upload/poklon-vauceri-za-kupovinu-duseka-i-jastuka.png" style="width:100%;height:auto;padding-left: 32px;"> </div><div class="col-md-4"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Kod vaučera zapišite ili kopirajte vodeći računa o malim i velikim slovima. Kada odaberete željeni proizvod i odete u kopru na našem sajtu potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) iskopirate ili unesete Vaš vaučer kod i pritisnete dugme "U redu". Nakon toga ukupna cena porudžbine će se umanjiti za iznos od 1.000 RSD. </div></div><div class="col-md-1"> </div></div><script>function myFunction(){var kalem=document.getElementById("ciloralac").innerHTML;if(kalem==="1"){$("#cczz33").css("height","100%"); document.getElementById("ciloralac").innerHTML="2";}else{$("#cczz33").css("height","70px"); document.getElementById("ciloralac").innerHTML="1";}}</script><div id="ciloralac">1</div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko želite da dodate još proizvoda u korpu kliknite na <span style="color:#959595; font-weight:bold;">Nastavite kupovinu</span>, a za proces poručivanja trenutne korpe kliknite na <span style="color:#f06423;">Nastavite za naplatu</span>. </div><div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; font-size: 20px; line-height: 22px;">Nakon uspešno dodatog proizvoda u korpu, potrebno je da u polje "VAUČERI" (polje je zaokruženo crvenom bojom i nalazi se na slici ispod) unesete vaš vaučer kod i pritisnete dugme "U redu". Ukoliko zbir cena proizvoda, koji se nalaze u vašoj korpi, viši ili jednak iznosu od 10.000 dinara, nova cena ce biti automatski upisana. Više o poklon vaučerima pročitajte OVDE. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-poklon-vaucer-za-kupovinu-2.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Proces kupovine započinjete upisivanjem Vaših ličnih podataka kao i adrese za isporuku. Vodite računa prilikom upisivanja <strong>kontakt telefona</strong> kako bi kolege iz prodaje mogle da Vas kontaktiraju prilikom kreiranja porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-nacin-isporuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Ukoliko ste vać poručivali imaćete opciju da ažurirate neku od prethodnih adresa ili da upišete novu. U ovom delu imate i tekstualno polje u koje možete napisati Vašu <strong>napomenu</strong> za kolege koje obrađuju porudžbine. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/sdream-adresa-isporuke-za-duseke-i-jastuke.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Nakod odabira adrese isporuke trebate odabrati i način isporuke i prihtatiti uslove korišćenja i kupovine sa S Dream sajta. Trenutno naša kompanija sve usluge dostave naplaćuje 500 RSD uključujući i PDV. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/uslovi-koriscenja-prilikom-kupovine-duseka.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <div class="col-md-12 leftZZ" style=" padding-left: 32px; padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">U pretposlednjem koraku birate način plaćanja. Trenutno je dostupno plaćanje pouzećem, što znači da robu plaćate prilikom preuzimanja. Uskoro ćemo omogućiti i plaćanje kreditnim karticama tako da ćete ceo proces kupovine moći da obavite iz udobnosti Vašeg doma. </div></div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-10"> <img src="https://www.sdream.rs/upload/kupovina-duseka-na-sdream-sajtu.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div><div class="col-md-1"> </div></div><div class="row"> <div class="col-md-1"> </div><div class="col-md-5"> <div class="col-md-12"> <img src="https://www.sdream.rs/upload/potvrda-sdream-porudzbenice.png" style="width:100%;height:auto;padding-left: 32px;padding-right: 32px;margin-top: 16px;"> </div></div><div class="col-md-5"> <div class="col-md-12 leftZZ" style=" padding-right: 32px; margin-top: 16px; font-size: 20px; line-height: 22px;">Poslednji korak je potvrda Vaše porudžbine. U roku od 24h očekujte poziv od kolega iz prodaje kako bi uspešno krairali porudžbinu.</div></div><div class="col-md-1"> </div></div></div></div>';
									$('.borderZ').parent().remove();
									codeAddress2a();
									
								document.title = 'How to buy - S Dream Shop';	
								document.getElementById('kakoKupitiZen1').className += ' activePageZen';	
							document.getElementById('kakoKupitiZen2').className += ' activePageZen3';	
							document.getElementById('kakoKupitiZen3').className += ' activePageZen';	
									$('html, body').animate({scrollTop: '0px'}, 300);							
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);								
						
							}
			};
	
			}
	
	
					
			
					
    }	
	
	
	
	function partneri() {
	
	
	
	var xzy = window.location.href; 
			if (xzy.indexOf("/partners/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'partners/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'partners/';}
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ2{font-size:15px; text-aling:justify;}#zukorlaZ2>h1{margin-bottom:32px; border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ2>p{margin-bottom:16px;}#zukorlaZ2>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ2"><h1>Partneri</h1><p>Naš biznis pristup je baziran na kombinovanoj snazi sa našim parter kompanijama.</p><p>Zajedno, моžемо razviti i ponuditi najkvalitetnije proizvode i garantovati najbolje poslovne predloge. Svaki aspekt proizvodnje dušeka је pokriven u odvojenim razvojnim laboratorijama naših partnerskih kompanija. Visoko organizovani proizvodni pogoni, sa rigoroznim standardima kontrole kvaliteta i isusnim rukovodećim osobljem, može da podrži svaki zahtev kupca. Mi možemo da garantujemo brzo i fleksibilno reagovanje na sve zahteve kupaca - veliki broj narudžbina, razvijanje novih proizvoda, odgovarajuće uslove dilerima, marketinšku podršku...</p><p></p></div></div>';
							
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('partneriZen').className += ' activePageZen';	
							document.title = 'Partners - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);								
		
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/partners")>= 0){
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ2{font-size:15px; text-aling:justify;}#zukorlaZ2>h1{margin-bottom:32px; border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ2>p{margin-bottom:16px;}#zukorlaZ2>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ2"><h1>Partneri</h1><p>Naš biznis pristup je baziran na kombinovanoj snazi sa našim parter kompanijama.</p><p>Zajedno, моžемо razviti i ponuditi najkvalitetnije proizvode i garantovati najbolje poslovne predloge. Svaki aspekt proizvodnje dušeka је pokriven u odvojenim razvojnim laboratorijama naših partnerskih kompanija. Visoko organizovani proizvodni pogoni, sa rigoroznim standardima kontrole kvaliteta i isusnim rukovodećim osobljem, može da podrži svaki zahtev kupca. Mi možemo da garantujemo brzo i fleksibilno reagovanje na sve zahteve kupaca - veliki broj narudžbina, razvijanje novih proizvoda, odgovarajuće uslove dilerima, marketinšku podršku...</p><p></p></div></div>';

								document.title = 'Partners - S Dream Shop';	
								document.getElementById('partneriZen').className += ' activePageZen';
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);	
						
							}
			};
	
			}

    }
	function partneriZ() {
	
		var xzy = window.location.href; 
			if (xzy.indexOf("/partners/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'partners/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'partners/';}
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ2{font-size:15px; text-aling:justify;}#zukorlaZ2>h1{margin-bottom:32px; border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ2>p{margin-bottom:16px;}#zukorlaZ2>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ2"><h1>Partneri</h1><p>Naš biznis pristup je baziran na kombinovanoj snazi sa našim parter kompanijama.</p><p>Zajedno, моžемо razviti i ponuditi najkvalitetnije proizvode i garantovati najbolje poslovne predloge. Svaki aspekt proizvodnje dušeka је pokriven u odvojenim razvojnim laboratorijama naših partnerskih kompanija. Visoko organizovani proizvodni pogoni, sa rigoroznim standardima kontrole kvaliteta i isusnim rukovodećim osobljem, može da podrži svaki zahtev kupca. Mi možemo da garantujemo brzo i fleksibilno reagovanje na sve zahteve kupaca - veliki broj narudžbina, razvijanje novih proizvoda, odgovarajuće uslove dilerima, marketinšku podršku...</p><p></p></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2b();
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('partneriZen').className += ' activePageZen';	
							document.title = 'Partners - S Dream Shop';	
									$('html, body').animate({scrollTop: '0px'}, 300);		
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/partners")>= 0){
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ2{font-size:15px; text-aling:justify;}#zukorlaZ2>h1{margin-bottom:32px; border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ2>p{margin-bottom:16px;}#zukorlaZ2>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ2"><h1>Partneri</h1><p>Naš biznis pristup je baziran na kombinovanoj snazi sa našim parter kompanijama.</p><p>Zajedno, моžемо razviti i ponuditi najkvalitetnije proizvode i garantovati najbolje poslovne predloge. Svaki aspekt proizvodnje dušeka је pokriven u odvojenim razvojnim laboratorijama naših partnerskih kompanija. Visoko organizovani proizvodni pogoni, sa rigoroznim standardima kontrole kvaliteta i isusnim rukovodećim osobljem, može da podrži svaki zahtev kupca. Mi možemo da garantujemo brzo i fleksibilno reagovanje na sve zahteve kupaca - veliki broj narudžbina, razvijanje novih proizvoda, odgovarajuće uslove dilerima, marketinšku podršku...</p><p></p></div></div>';
									$('.borderZ').parent().remove();
									codeAddress2b();
									
								document.title = 'Partners - S Dream Shop';	
								document.getElementById('partneriZen').className += ' activePageZen';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);								
						
							}
			};
	
			}
	

    }
	
		function modeliSaradnje() {
	
	
var xzy = window.location.href; 
			if (xzy.indexOf("/models-of-cooperation/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'models-of-cooperation/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'models-of-cooperation/';}
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold;color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ23"><h1>Modeli saradnje</h1><p>Po ugledu na velike kompanije iz sveta, sem vrhunskih proizvoda smo razvili i fleksibilne poslovne modele koji nama i našim partnerima omogućavaju brze rezultate i zajednički uspeh.</p><p>Na osnovu analiza i zajedničkih procena pripremamo scenario za tržišni nastup koji obuhvata i asortimansku i prodajnu strategiju. U mogućnosti smo da ponudimo asortiman koji čine isključivo modeli iz naše ponude pod brendom S Dream, da zajedno razvijemo trgovački brend za našeg partnera ili da kombinujemo oba brenda u asortimanu za najfleksibilniju prodajnu strategiju.</p><p>Ukoliko naš partner nastupa u <strong>LUX</strong> segmentu, možemo da proizvedemo <strong>LUX</strong> modele pod njegovim brendom ali i da mu omogućimo bolji obrt i zaštitu od jeftinijih ponuđača našim visokokvalitetnim <strong>PREMIUM</strong> proizvodima koji imaju najbolji odnos cene i kvaliteta.</p><p>Ukoliko je strategija našeg partnera usmerena na široko tržište zainteresovano za proizvode iz <strong>ECONOMIC</strong> kategorije, možemo da oformimo asortiman koji čine najpovoljniji proizvodi i proizvodi sa najboljim odnosom cene i kvaliteta pod brendom S Dream ili trgovačkim brendom partnera.</p><p>Na raspolaganju su nam vrhunska stručna znanja za procenu tržišnh mogućnosti i potencijala kompanije partnera. Javite nam se da se upoznamo i da započnemo još jedan uspešan aranžman.</p></div></div>';
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('modeliSaradnjeZen').className += ' activePageZen';	
							document.title = 'Models of Cooperation - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/models-of-cooperation")>= 0){
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold;color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ23"><h1>Modeli saradnje</h1><p>Po ugledu na velike kompanije iz sveta, sem vrhunskih proizvoda smo razvili i fleksibilne poslovne modele koji nama i našim partnerima omogućavaju brze rezultate i zajednički uspeh.</p><p>Na osnovu analiza i zajedničkih procena pripremamo scenario za tržišni nastup koji obuhvata i asortimansku i prodajnu strategiju. U mogućnosti smo da ponudimo asortiman koji čine isključivo modeli iz naše ponude pod brendom S Dream, da zajedno razvijemo trgovački brend za našeg partnera ili da kombinujemo oba brenda u asortimanu za najfleksibilniju prodajnu strategiju.</p><p>Ukoliko naš partner nastupa u <strong>LUX</strong> segmentu, možemo da proizvedemo <strong>LUX</strong> modele pod njegovim brendom ali i da mu omogućimo bolji obrt i zaštitu od jeftinijih ponuđača našim visokokvalitetnim <strong>PREMIUM</strong> proizvodima koji imaju najbolji odnos cene i kvaliteta.</p><p>Ukoliko je strategija našeg partnera usmerena na široko tržište zainteresovano za proizvode iz <strong>ECONOMIC</strong> kategorije, možemo da oformimo asortiman koji čine najpovoljniji proizvodi i proizvodi sa najboljim odnosom cene i kvaliteta pod brendom S Dream ili trgovačkim brendom partnera.</p><p>Na raspolaganju su nam vrhunska stručna znanja za procenu tržišnh mogućnosti i potencijala kompanije partnera. Javite nam se da se upoznamo i da započnemo još jedan uspešan aranžman.</p></div></div>';
								document.title = 'Models of Cooperation - S Dream Shop';	
								document.getElementById('modeliSaradnjeZen').className += ' activePageZen';	
									$('html, body').animate({scrollTop: '0px'}, 300);								
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);								
						
							}
			};
	
			}

    }
	function modeliSaradnjeZ() {
	
	
		var xzy = window.location.href; 
			if (xzy.indexOf("/models-of-cooperation/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'models-of-cooperation/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'models-of-cooperation/';}
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold;color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ23"><h1>Modeli saradnje</h1><p>Po ugledu na velike kompanije iz sveta, sem vrhunskih proizvoda smo razvili i fleksibilne poslovne modele koji nama i našim partnerima omogućavaju brze rezultate i zajednički uspeh.</p><p>Na osnovu analiza i zajedničkih procena pripremamo scenario za tržišni nastup koji obuhvata i asortimansku i prodajnu strategiju. U mogućnosti smo da ponudimo asortiman koji čine isključivo modeli iz naše ponude pod brendom S Dream, da zajedno razvijemo trgovački brend za našeg partnera ili da kombinujemo oba brenda u asortimanu za najfleksibilniju prodajnu strategiju.</p><p>Ukoliko naš partner nastupa u <strong>LUX</strong> segmentu, možemo da proizvedemo <strong>LUX</strong> modele pod njegovim brendom ali i da mu omogućimo bolji obrt i zaštitu od jeftinijih ponuđača našim visokokvalitetnim <strong>PREMIUM</strong> proizvodima koji imaju najbolji odnos cene i kvaliteta.</p><p>Ukoliko je strategija našeg partnera usmerena na široko tržište zainteresovano za proizvode iz <strong>ECONOMIC</strong> kategorije, možemo da oformimo asortiman koji čine najpovoljniji proizvodi i proizvodi sa najboljim odnosom cene i kvaliteta pod brendom S Dream ili trgovačkim brendom partnera.</p><p>Na raspolaganju su nam vrhunska stručna znanja za procenu tržišnh mogućnosti i potencijala kompanije partnera. Javite nam se da se upoznamo i da započnemo još jedan uspešan aranžman.</p></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2b();
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('modeliSaradnjeZen').className += ' activePageZen';	
							document.title = 'Models of Cooperation - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/models-of-cooperation")>= 0){
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold;color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"><div class="col-md-12" id="zukorlaZ23"><h1>Modeli saradnje</h1><p>Po ugledu na velike kompanije iz sveta, sem vrhunskih proizvoda smo razvili i fleksibilne poslovne modele koji nama i našim partnerima omogućavaju brze rezultate i zajednički uspeh.</p><p>Na osnovu analiza i zajedničkih procena pripremamo scenario za tržišni nastup koji obuhvata i asortimansku i prodajnu strategiju. U mogućnosti smo da ponudimo asortiman koji čine isključivo modeli iz naše ponude pod brendom S Dream, da zajedno razvijemo trgovački brend za našeg partnera ili da kombinujemo oba brenda u asortimanu za najfleksibilniju prodajnu strategiju.</p><p>Ukoliko naš partner nastupa u <strong>LUX</strong> segmentu, možemo da proizvedemo <strong>LUX</strong> modele pod njegovim brendom ali i da mu omogućimo bolji obrt i zaštitu od jeftinijih ponuđača našim visokokvalitetnim <strong>PREMIUM</strong> proizvodima koji imaju najbolji odnos cene i kvaliteta.</p><p>Ukoliko je strategija našeg partnera usmerena na široko tržište zainteresovano za proizvode iz <strong>ECONOMIC</strong> kategorije, možemo da oformimo asortiman koji čine najpovoljniji proizvodi i proizvodi sa najboljim odnosom cene i kvaliteta pod brendom S Dream ili trgovačkim brendom partnera.</p><p>Na raspolaganju su nam vrhunska stručna znanja za procenu tržišnh mogućnosti i potencijala kompanije partnera. Javite nam se da se upoznamo i da započnemo još jedan uspešan aranžman.</p></div></div>';
									$('.borderZ').parent().remove();
									codeAddress2b();
									
								document.title = 'Models of Cooperation - S Dream Shop';	
								document.getElementById('modeliSaradnjeZen').className += ' activePageZen';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
							
									$('html, body').animate({scrollTop: '0px'}, 300);						
							}
			};
	
			}
	
	


    }
	
	function isporuka() {
	
	
var xzy = window.location.href; 
			if (xzy.indexOf("/delivery/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'delivery/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'delivery/';}
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold; color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"> <div class="col-md-12" id="zukorlaZ23"> <h1>Isporuka </h1> <div class="col-md-8" id="zukorlaZ23"> <p>Naša usluga dostave radi svakodnevno. Porudžbine postavljene iz bilo kod dela naše zemlje dobićete na kućnu adresu u roku od 7 radnih dana. Cena dostave je 500rsd. </p><p>Za sve S <strong>) </strong>Dream proizvode smo obezbedili garanciju od dve godine.</p><p> Sva kupljena roba proizvedena je u Srbiji u fabrici <span style="font-weight:bold; color:#0499bc;">Vapeks d.o.o. </span> </p></div><div class="col-md-4" id="zukorlaZ23"> <img src="https://www.sdream.rs/upload/kamion.jpg" style="width:100%; height:auto;"> </div></div></div>';
						
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('isporukaZen').className += ' activePageZen';	
							document.title = 'Delivery - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/delivery")>= 0){
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold; color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"> <div class="col-md-12" id="zukorlaZ23"> <h1>Isporuka </h1> <div class="col-md-8" id="zukorlaZ23"> <p>Naša usluga dostave radi svakodnevno. Porudžbine postavljene iz bilo kod dela naše zemlje dobićete na kućnu adresu u roku od 7 radnih dana. Cena dostave je 500rsd. </p><p>Za sve S <strong>) </strong>Dream proizvode smo obezbedili garanciju od dve godine.</p><p> Sva kupljena roba proizvedena je u Srbiji u fabrici <span style="font-weight:bold; color:#0499bc;">Vapeks d.o.o. </span> </p></div><div class="col-md-4" id="zukorlaZ23"> <img src="https://www.sdream.rs/upload/kamion.jpg" style="width:100%; height:auto;"> </div></div></div>';
								
								document.title = 'Delivery - S Dream Shop';	
								document.getElementById('isporukaZen').className += ' activePageZen';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
	

}
	function isporukaZ() {
	
	var xzy = window.location.href; 
			if (xzy.indexOf("/delivery/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'delivery/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'delivery/';}
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold; color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"> <div class="col-md-12" id="zukorlaZ23"> <h1>Isporuka </h1> <div class="col-md-8" id="zukorlaZ23"> <p>Naša usluga dostave radi svakodnevno. Porudžbine postavljene iz bilo kod dela naše zemlje dobićete na kućnu adresu u roku od 7 radnih dana. Cena dostave je 500rsd. </p><p>Za sve S <strong>) </strong>Dream proizvode smo obezbedili garanciju od dve godine.</p><p> Sva kupljena roba proizvedena je u Srbiji u fabrici <span style="font-weight:bold; color:#0499bc;">Vapeks d.o.o. </span> </p></div><div class="col-md-4" id="zukorlaZ23"> <img src="https://www.sdream.rs/upload/kamion.jpg" style="width:100%; height:auto;"> </div></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2b();
								
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('isporukaZen').className += ' activePageZen';	
							document.title = 'Delivery - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/delivery")>= 0){
								document.getElementById('columns').innerHTML = '<style>#zukorlaZ23{font-size:15px; text-aling:justify;}#zukorlaZ23>h1{margin-bottom:32px; border-bottom:2px solid #606060; font-weight:bold; color:#f06423;}#zukorlaZ23>p{margin-bottom:16px; text-align:justify;}#zukorlaZ23>p>strong{font-weight:bold; color:#f06423;}</style><div class="row" id="iframeZkiZ" style="margin-bottom:32px;"> <div class="col-md-12" id="zukorlaZ23"> <h1>Isporuka </h1> <div class="col-md-8" id="zukorlaZ23"> <p>Naša usluga dostave radi svakodnevno. Porudžbine postavljene iz bilo kod dela naše zemlje dobićete na kućnu adresu u roku od 7 radnih dana. Cena dostave je 500rsd. </p><p>Za sve S <strong>) </strong>Dream proizvode smo obezbedili garanciju od dve godine.</p><p> Sva kupljena roba proizvedena je u Srbiji u fabrici <span style="font-weight:bold; color:#0499bc;">Vapeks d.o.o. </span> </p></div><div class="col-md-4" id="zukorlaZ23"> <img src="https://www.sdream.rs/upload/kamion.jpg" style="width:100%; height:auto;"> </div></div></div>';
									$('.borderZ').parent().remove();
									codeAddress2b();
									
								document.title = 'Delivery - S Dream Shop';	
								document.getElementById('isporukaZen').className += ' activePageZen';
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);								
						
							}
			};
	
			}
	

	
    }
	
	function reklamacije(){
			
	
var xzy = window.location.href; 
			if (xzy.indexOf("/complaints/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'complaints/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'complaints/';}
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"><div class="breadcrumb clearfix"> <a class="home" href="https://www.sdream.rs/" title="vratite se na Početak"><i class="icon-home"></i></a> <span class="navigation-pipe">&gt;</span> Reklamacije</div><div id="slider_row" class="row"></div><div class="row"><div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="page-heading bottom-indent">Reklamacioni servis</h1><form action="/sr/kontakt" method="post" class="kiriZuljaZ contact-form-box" enctype="multipart/form-data"><fieldset><div class="clearfix"><div class="col-xs-12 col-md-12"> <input type="hidden" name="id_contact" value="1"><p id="desc_contact0" style="display:none;" class="desc_contact">&nbsp;</p><p id="desc_contact2" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>For any question about a product, an order</p><p id="desc_contact1" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>If a technical problem occurs on this website</p><p class="text"> <label for="extrafield2" id="fullnamez"> Ime i prezime </label> <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value=""></p><p class="text" style="display:none"> <label for="extrafield3" id="tipForme"> Tip forme </label> <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="reklamacija"></p><p class="form-group"> <label for="email">E-mail adresa</label> <input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value=""></p><p class="text"> <label for="extrafield4" id="brojTelefona"> Broj telefona </label> <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value=""></p><p class="text"> <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbinice </label> <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value=""></p><p class="text" style="display:none;"> <label for="extrafield" id="subject">Naslov poruke</label> <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value=""></p></div><div class="col-xs-12 col-md-12"><div class="form-group" style=""> <label for="message">Poruka</label><textarea class="form-control" style="height:200px;    background: #fbfbfb;" id="message" name="message"></textarea></div></div></div><div class="submit"> <button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span>Pošalji<i class="icon-chevron-right right"></i></span></button></div></fieldset></form><div class="grizuljZ"><h1 class="page-heading bottom-indent"> Za sva pitanja vezana za reklamacije možete nas pozvati na broj:<br> <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050 </a> ili popunite reklamacionu formu sa ove stranice. </h1><h1 class="page-heading bottom-indent"> Nakon uspešnog popunjavanja reklamacione forme bićete kontaktirani u najkraćem roku. Pera djoka</h1> <p> 1.       Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga (ovo je umesto garancija na zadovoljstvo – ukoliko niste zadovoljni proizvodima možete ih vratiti u roku od 14 dana). Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga i dodatnih troškova, osim troškova iz čl. 34. i 35. Zakona o zaštiti potrošača. Potrošač ostvaruje pravo na odustanak od ugovora izjavom dostavljanjem obrazca za odustanak. Izjava o odustanku od ugovora smatra se blagovremenom ukoliko je poslata trgovcu u roku od 14 dana.Izjava o odustanku od ugovora proizvodi pravno dejstvo od dana kada je poslata trgovcu. Ako trgovac omogući potrošaču da elektronski popuni i pošalje obrazac za odustanak, dužan je da ga o prijemu obrasca bez odlaganja obavesti u pisanoj formi ili na drugom trajnom nosaču zapisa.Protekom roka od 14 dana iz člana 29. ovog zakona prestaje pravo potrošača na odustanak od ugovora.NAPOMENA: Ovo pravo od odustanka od ugovora ne odnosi se na kupovinu u prodavnicama s obzirom da to nije kupovina na daljinu i izvan poslovnih prostorija.Prodavac je odgovoran za nesaobraznost robe ugovoru koja se pojavi u roku od dve godine od dana prelaska rizika na potrošača, odnosno dana kupovine proizvoda.2.       Prodavac odgovara za nesaobraznosti isporučene robe ugovoru ako:1) je postojala u času prelaska rizika na potrošača, bez obzira na to da li je za tu nesaobraznost prodavac znao;      2) se pojavila posle prelaska rizika na potrošača, ako potiče od uzroka koji je postojao pre prelaska rizika na potrošača;3) je potrošač mogao lako uočiti, ukoliko je prodavac izjavio da je roba saobrazna ugovoru.Prodavac ne odgovara za nesaobraznost ako je u trenutku zaključenja ugovora potrošaču bilo poznato ili mu nije moglo ostati nepoznato da roba nije saobrazna ugovoru ili ako je uzrok nesaobraznosti u materijalu koji je dao potrošač. Ako isporučena roba nije saobrazna ugovoru, potrošač koji je obavestio prodavca o nesaobraznosti, ima pravo da zahteva od prodavca da otkloni nesaobraznost, bez naknade, opravkom ili zamenom, odnosno da zahteva odgovarajuće umanjenje cene ili da raskine ugovor u pogledu te robe. Potrošač ima pravo da bira da nesaobraznost robe trgovac otkloni opravkom ili zamenom.Ako otklanjanje nesaobraznosti opravkom ili zamenom nije moguće, potrošač ima pravo da zahteva odgovarajuće umanjenje cene ili raskid ugovora ako:1) nesaobraznost ne može da se otkloni opravkom ili zamenom uopšte niti u primerenom roku;2) ne može da ostvari pravo na opravku ili zamenu, odnosno ako prodavac nije izvršio opravku ili zamenu u primerenom roku;3) opravka ili zamena ne može da se sprovede bez značajnijih nepogodnosti za potrošača zbog prirode robe i njene namene;4) otklanjanje nesaobraznosti opravkom ili zamenom predstavlja nesrazmerno opterećenje za prodavca.Potrošač ima pravo da zahteva zamenu, odgovarajuće umanjenje cene ili da raskine ugovor zbog istog ili drugog nedostatka saobraznosti koji se posle prve opravke pojavi, a ponovna opravka je moguća samo uz izričitu saglasnost potrošača.Uzimajući u obzir prirodu robe i svrhu zbog koje je potrošač nabavio, opravka ili zamena mora se izvršiti u primerenom roku bez značajnih neugodnosti za potrošača i uz njegovu saglasnost.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, potrošač ima pravo da bira između zahteva da se nesaobraznost otkloni zamenom, odgovarajućim umanjenjem cene ili da izjavi da raskida ugovor.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, otklanjanje nesaobraznosti moguće je opravkom uz izričitu saglasnost potrošača.Sve troškove koji su neophodni da bi se roba saobrazila ugovoru, a naročito troškove rada, materijala, preuzimanja i isporuke, snosi prodavac.Potrošač ne može da raskine ugovor ako je nesaobraznost robe neznatna.Potrošač će snositi troškove otklanjanja nedostataka u roku saobraznosti, u slučajevima: 1) nepoštovanja uputstva za upotrebu i održavanje robe; 2) popravke robe od strane neovlašćenog lica; 3) nepažljivog i nepravilnog rukovanja robom; 4) mehaničkih oštećenja nastalih usled udaraca robe.Potrošač može da izjavi reklamaciju prodavcu radi ostvarivanja svojih prava iz čl. 52. Zakona o zaštiti potrošača, koja se odnose na otklanjanje nesaobraznosti, kao i zbog pogrešno obračunate cene i drugih nedostataka uz obavezu dostavljanja računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.)3.       Potrošač može da izjavi reklamaciju usmeno na prodajnom mestu gde je roba kupljena, odnosno drugom mestu koje je određeno za prijem reklamacija, telefonom, pisanim putem, elektronskim putem, odnosno na trajnom nosaču zapisa, uz dostavu računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.).Prodavac je dužan da potrošaču izda pisanu potvrdu ili elektronskim putem potvrdi prijem reklamacije, odnosno saopšti broj pod kojim je zavedena njegova reklamacija u evidenciji primljenih reklamacija.Prodavac je dužan da bez odlaganja, a najkasnije u roku od osam dana od dana prijema reklamacije, pisanim ili elektronskim putem odgovori potrošaču na izjavljenu reklamaciju. Odgovor prodavca na reklamaciju potrošača mora da sadrži odluku da li prihvata reklamaciju, izjašnjenje o zahtevu potrošača i konkretan predlog i rok za rešavanje reklamacije. Rok ne može da bude duži od 15 dana, odnosno 30 dana za tehničku robu i nameštaj, od dana podnošenja reklamacije.Prodavac je dužan da postupi u skladu sa odlukom, predlogom i rokom za rešavanje reklamacije, ukoliko je dobio prethodnu saglasnost potrošača.Ukoliko prodavac iz objektivnih razloga nije u mogućnosti da udovolji zahtevu potrošača u roku koji je dogovoren, dužan je da o produžavanju roka za rešavanje reklamacije obavesti potrošača i navede rok u kome će je rešiti, kao i da dobije njegovu saglasnost, što je u obavezi da evidentira u evidenciji primljenih reklamacija. Produžavanje roka za rešavanje reklamacija moguće je samo jednom.Reklamaciji zbog nedostataka ne podleže roba koja se prodaje sa oznakom "roba sa nedostatkom".4.       Potrošač nema pravo na odustanak od ugovora u slučajevima koji su definisani čl.37 Zakona o zaštiti potrošača  ("Sl. glasnik RS", br. 62/2014, 6/2016 - dr. zakon i 44/2018 - dr. zakon).5.       Potrošač nema pravo na reklamaciju ako se utvrdi:-          Da je kupac/potrošač proizvodom rukovao nepravilno i na neodgovarajući način (savijao, uvijao, zaprljao dušek organskim supstancama: krv, hemijski agensi i sl.), i/ili suprotno nameni proizvoda I preporuci spomenutoj na deklarativnom listu;-          Da su nedostatci na proizvodu prouzrukovani postupcima trećih lica (fizička oštećenja), za nedostatke nastale zbog ne pridražavanja uputstava za održavanje proizvoda, defekata nastalih usled vremenskih nepogoda, više sile i/ili drugih razloga na koje proizvodjač nije mogao da utiče; -          Da kupac/potrošač nije skladištio proizvod na propisan način, te je usled toga došlo do promena u/na proizvodu;-          Da kupac/potrošač prilikom reklamacije nije priložio broj fakture/fiskalnog računa, broj otpremnice, opis deformiteta i/ili nedostatka, šta je suština reklamacije, iznos reklamacije registarski broj kamiona i  fotografiju;-          Da je kupac/potrošač skidajuću navlaku prao na temperaturi većoj od 40 stepeni;-          da ne postoji Garantni list i/ili su na Garantnom listu uočljivi tragovi ispravljanja, a da nisu overeni pečatom proizvodjača/prodavca;          Garancija ne pokriva normalne promene u smislu osećaja povećanja mekoće zato što to ne utiče bitno na ergonomska svojstva materijala od kog je jezgro izrađeno;</p></div></div></div></div>';;
						
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('reklamacijeZen').className += ' activePageZen';	
							document.title = 'Complaints - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/complaints")>= 0){
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"><div class="breadcrumb clearfix"> <a class="home" href="https://www.sdream.rs/" title="vratite se na Početak"><i class="icon-home"></i></a> <span class="navigation-pipe">&gt;</span> Reklamacije</div><div id="slider_row" class="row"></div><div class="row"><div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="page-heading bottom-indent">Reklamacioni servis</h1><form action="/sr/kontakt" method="post" class="kiriZuljaZ contact-form-box" enctype="multipart/form-data"><fieldset><div class="clearfix"><div class="col-xs-12 col-md-12"> <input type="hidden" name="id_contact" value="1"><p id="desc_contact0" style="display:none;" class="desc_contact">&nbsp;</p><p id="desc_contact2" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>For any question about a product, an order</p><p id="desc_contact1" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>If a technical problem occurs on this website</p><p class="text"> <label for="extrafield2" id="fullnamez"> Ime i prezime </label> <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value=""></p><p class="text" style="display:none"> <label for="extrafield3" id="tipForme"> Tip forme </label> <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="reklamacija"></p><p class="form-group"> <label for="email">E-mail adresa</label> <input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value=""></p><p class="text"> <label for="extrafield4" id="brojTelefona"> Broj telefona </label> <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value=""></p><p class="text"> <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbinice </label> <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value=""></p><p class="text" style="display:none;"> <label for="extrafield" id="subject">Naslov poruke</label> <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value=""></p></div><div class="col-xs-12 col-md-12"><div class="form-group" style=""> <label for="message">Poruka</label><textarea class="form-control" style="height:200px;    background: #fbfbfb;" id="message" name="message"></textarea></div></div></div><div class="submit"> <button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span>Pošalji<i class="icon-chevron-right right"></i></span></button></div></fieldset></form><div class="grizuljZ"><h1 class="page-heading bottom-indent"> Za sva pitanja vezana za reklamacije možete nas pozvati na broj:<br> <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050 </a> ili popunite reklamacionu formu sa ove stranice. </h1><h1 class="page-heading bottom-indent"> Nakon uspešnog popunjavanja reklamacione forme bićete kontaktirani u najkraćem roku.Pera djoka </h1> <p> 1.       Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga (ovo je umesto garancija na zadovoljstvo – ukoliko niste zadovoljni proizvodima možete ih vratiti u roku od 14 dana). Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga i dodatnih troškova, osim troškova iz čl. 34. i 35. Zakona o zaštiti potrošača. Potrošač ostvaruje pravo na odustanak od ugovora izjavom dostavljanjem obrazca za odustanak. Izjava o odustanku od ugovora smatra se blagovremenom ukoliko je poslata trgovcu u roku od 14 dana.Izjava o odustanku od ugovora proizvodi pravno dejstvo od dana kada je poslata trgovcu. Ako trgovac omogući potrošaču da elektronski popuni i pošalje obrazac za odustanak, dužan je da ga o prijemu obrasca bez odlaganja obavesti u pisanoj formi ili na drugom trajnom nosaču zapisa.Protekom roka od 14 dana iz člana 29. ovog zakona prestaje pravo potrošača na odustanak od ugovora.NAPOMENA: Ovo pravo od odustanka od ugovora ne odnosi se na kupovinu u prodavnicama s obzirom da to nije kupovina na daljinu i izvan poslovnih prostorija.Prodavac je odgovoran za nesaobraznost robe ugovoru koja se pojavi u roku od dve godine od dana prelaska rizika na potrošača, odnosno dana kupovine proizvoda.2.       Prodavac odgovara za nesaobraznosti isporučene robe ugovoru ako:1) je postojala u času prelaska rizika na potrošača, bez obzira na to da li je za tu nesaobraznost prodavac znao;      2) se pojavila posle prelaska rizika na potrošača, ako potiče od uzroka koji je postojao pre prelaska rizika na potrošača;3) je potrošač mogao lako uočiti, ukoliko je prodavac izjavio da je roba saobrazna ugovoru.Prodavac ne odgovara za nesaobraznost ako je u trenutku zaključenja ugovora potrošaču bilo poznato ili mu nije moglo ostati nepoznato da roba nije saobrazna ugovoru ili ako je uzrok nesaobraznosti u materijalu koji je dao potrošač. Ako isporučena roba nije saobrazna ugovoru, potrošač koji je obavestio prodavca o nesaobraznosti, ima pravo da zahteva od prodavca da otkloni nesaobraznost, bez naknade, opravkom ili zamenom, odnosno da zahteva odgovarajuće umanjenje cene ili da raskine ugovor u pogledu te robe. Potrošač ima pravo da bira da nesaobraznost robe trgovac otkloni opravkom ili zamenom.Ako otklanjanje nesaobraznosti opravkom ili zamenom nije moguće, potrošač ima pravo da zahteva odgovarajuće umanjenje cene ili raskid ugovora ako:1) nesaobraznost ne može da se otkloni opravkom ili zamenom uopšte niti u primerenom roku;2) ne može da ostvari pravo na opravku ili zamenu, odnosno ako prodavac nije izvršio opravku ili zamenu u primerenom roku;3) opravka ili zamena ne može da se sprovede bez značajnijih nepogodnosti za potrošača zbog prirode robe i njene namene;4) otklanjanje nesaobraznosti opravkom ili zamenom predstavlja nesrazmerno opterećenje za prodavca.Potrošač ima pravo da zahteva zamenu, odgovarajuće umanjenje cene ili da raskine ugovor zbog istog ili drugog nedostatka saobraznosti koji se posle prve opravke pojavi, a ponovna opravka je moguća samo uz izričitu saglasnost potrošača.Uzimajući u obzir prirodu robe i svrhu zbog koje je potrošač nabavio, opravka ili zamena mora se izvršiti u primerenom roku bez značajnih neugodnosti za potrošača i uz njegovu saglasnost.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, potrošač ima pravo da bira između zahteva da se nesaobraznost otkloni zamenom, odgovarajućim umanjenjem cene ili da izjavi da raskida ugovor.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, otklanjanje nesaobraznosti moguće je opravkom uz izričitu saglasnost potrošača.Sve troškove koji su neophodni da bi se roba saobrazila ugovoru, a naročito troškove rada, materijala, preuzimanja i isporuke, snosi prodavac.Potrošač ne može da raskine ugovor ako je nesaobraznost robe neznatna.Potrošač će snositi troškove otklanjanja nedostataka u roku saobraznosti, u slučajevima: 1) nepoštovanja uputstva za upotrebu i održavanje robe; 2) popravke robe od strane neovlašćenog lica; 3) nepažljivog i nepravilnog rukovanja robom; 4) mehaničkih oštećenja nastalih usled udaraca robe.Potrošač može da izjavi reklamaciju prodavcu radi ostvarivanja svojih prava iz čl. 52. Zakona o zaštiti potrošača, koja se odnose na otklanjanje nesaobraznosti, kao i zbog pogrešno obračunate cene i drugih nedostataka uz obavezu dostavljanja računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.)3.       Potrošač može da izjavi reklamaciju usmeno na prodajnom mestu gde je roba kupljena, odnosno drugom mestu koje je određeno za prijem reklamacija, telefonom, pisanim putem, elektronskim putem, odnosno na trajnom nosaču zapisa, uz dostavu računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.).Prodavac je dužan da potrošaču izda pisanu potvrdu ili elektronskim putem potvrdi prijem reklamacije, odnosno saopšti broj pod kojim je zavedena njegova reklamacija u evidenciji primljenih reklamacija.Prodavac je dužan da bez odlaganja, a najkasnije u roku od osam dana od dana prijema reklamacije, pisanim ili elektronskim putem odgovori potrošaču na izjavljenu reklamaciju. Odgovor prodavca na reklamaciju potrošača mora da sadrži odluku da li prihvata reklamaciju, izjašnjenje o zahtevu potrošača i konkretan predlog i rok za rešavanje reklamacije. Rok ne može da bude duži od 15 dana, odnosno 30 dana za tehničku robu i nameštaj, od dana podnošenja reklamacije.Prodavac je dužan da postupi u skladu sa odlukom, predlogom i rokom za rešavanje reklamacije, ukoliko je dobio prethodnu saglasnost potrošača.Ukoliko prodavac iz objektivnih razloga nije u mogućnosti da udovolji zahtevu potrošača u roku koji je dogovoren, dužan je da o produžavanju roka za rešavanje reklamacije obavesti potrošača i navede rok u kome će je rešiti, kao i da dobije njegovu saglasnost, što je u obavezi da evidentira u evidenciji primljenih reklamacija. Produžavanje roka za rešavanje reklamacija moguće je samo jednom.Reklamaciji zbog nedostataka ne podleže roba koja se prodaje sa oznakom "roba sa nedostatkom".4.       Potrošač nema pravo na odustanak od ugovora u slučajevima koji su definisani čl.37 Zakona o zaštiti potrošača  ("Sl. glasnik RS", br. 62/2014, 6/2016 - dr. zakon i 44/2018 - dr. zakon).5.       Potrošač nema pravo na reklamaciju ako se utvrdi:-          Da je kupac/potrošač proizvodom rukovao nepravilno i na neodgovarajući način (savijao, uvijao, zaprljao dušek organskim supstancama: krv, hemijski agensi i sl.), i/ili suprotno nameni proizvoda I preporuci spomenutoj na deklarativnom listu;-          Da su nedostatci na proizvodu prouzrukovani postupcima trećih lica (fizička oštećenja), za nedostatke nastale zbog ne pridražavanja uputstava za održavanje proizvoda, defekata nastalih usled vremenskih nepogoda, više sile i/ili drugih razloga na koje proizvodjač nije mogao da utiče; -          Da kupac/potrošač nije skladištio proizvod na propisan način, te je usled toga došlo do promena u/na proizvodu;-          Da kupac/potrošač prilikom reklamacije nije priložio broj fakture/fiskalnog računa, broj otpremnice, opis deformiteta i/ili nedostatka, šta je suština reklamacije, iznos reklamacije registarski broj kamiona i  fotografiju;-          Da je kupac/potrošač skidajuću navlaku prao na temperaturi većoj od 40 stepeni;-          da ne postoji Garantni list i/ili su na Garantnom listu uočljivi tragovi ispravljanja, a da nisu overeni pečatom proizvodjača/prodavca;          Garancija ne pokriva normalne promene u smislu osećaja povećanja mekoće zato što to ne utiče bitno na ergonomska svojstva materijala od kog je jezgro izrađeno;</p></div></div></div></div>';;
								
								document.title = 'Complaints - S Dream Shop';	
								document.getElementById('reklamacijeZen').className += ' activePageZen';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
		
	}
	function reklamacijez(){
			
	
var xzy = window.location.href; 
			if (xzy.indexOf("/complaints/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'complaints/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'complaints/';}
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"><div class="breadcrumb clearfix"> <a class="home" href="https://www.sdream.rs/" title="vratite se na Početak"><i class="icon-home"></i></a> <span class="navigation-pipe">&gt;</span> Reklamacije</div><div id="slider_row" class="row"></div><div class="row"><div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="page-heading bottom-indent">Reklamacioni servis</h1><form action="/sr/kontakt" method="post" class="kiriZuljaZ contact-form-box" enctype="multipart/form-data"><fieldset><div class="clearfix"><div class="col-xs-12 col-md-12"> <input type="hidden" name="id_contact" value="1"><p id="desc_contact0" style="display:none;" class="desc_contact">&nbsp;</p><p id="desc_contact2" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>For any question about a product, an order</p><p id="desc_contact1" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>If a technical problem occurs on this website</p><p class="text"> <label for="extrafield2" id="fullnamez"> Ime i prezime </label> <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value=""></p><p class="text" style="display:none"> <label for="extrafield3" id="tipForme"> Tip forme </label> <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="reklamacija"></p><p class="form-group"> <label for="email">E-mail adresa</label> <input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value=""></p><p class="text"> <label for="extrafield4" id="brojTelefona"> Broj telefona </label> <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value=""></p><p class="text"> <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbinice </label> <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value=""></p><p class="text" style="display:none;"> <label for="extrafield" id="subject">Naslov poruke</label> <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value=""></p></div><div class="col-xs-12 col-md-12"><div class="form-group" style=""> <label for="message">Poruka</label><textarea class="form-control" style="height:200px;    background: #fbfbfb;" id="message" name="message"></textarea></div></div></div><div class="submit"> <button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span>Pošalji<i class="icon-chevron-right right"></i></span></button></div></fieldset></form><div class="grizuljZ"><h1 class="page-heading bottom-indent"> Za sva pitanja vezana za reklamacije možete nas pozvati na broj:<br> <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050 </a> ili popunite reklamacionu formu sa ove stranice. </h1><h1 class="page-heading bottom-indent"> Nakon uspešnog popunjavanja reklamacione forme bićete kontaktirani u najkraćem roku.Pera djoka </h1><p> 1.       Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga (ovo je umesto garancija na zadovoljstvo – ukoliko niste zadovoljni proizvodima možete ih vratiti u roku od 14 dana). Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga i dodatnih troškova, osim troškova iz čl. 34. i 35. Zakona o zaštiti potrošača. Potrošač ostvaruje pravo na odustanak od ugovora izjavom dostavljanjem obrazca za odustanak. Izjava o odustanku od ugovora smatra se blagovremenom ukoliko je poslata trgovcu u roku od 14 dana.Izjava o odustanku od ugovora proizvodi pravno dejstvo od dana kada je poslata trgovcu. Ako trgovac omogući potrošaču da elektronski popuni i pošalje obrazac za odustanak, dužan je da ga o prijemu obrasca bez odlaganja obavesti u pisanoj formi ili na drugom trajnom nosaču zapisa.Protekom roka od 14 dana iz člana 29. ovog zakona prestaje pravo potrošača na odustanak od ugovora.NAPOMENA: Ovo pravo od odustanka od ugovora ne odnosi se na kupovinu u prodavnicama s obzirom da to nije kupovina na daljinu i izvan poslovnih prostorija.Prodavac je odgovoran za nesaobraznost robe ugovoru koja se pojavi u roku od dve godine od dana prelaska rizika na potrošača, odnosno dana kupovine proizvoda.2.       Prodavac odgovara za nesaobraznosti isporučene robe ugovoru ako:1) je postojala u času prelaska rizika na potrošača, bez obzira na to da li je za tu nesaobraznost prodavac znao;      2) se pojavila posle prelaska rizika na potrošača, ako potiče od uzroka koji je postojao pre prelaska rizika na potrošača;3) je potrošač mogao lako uočiti, ukoliko je prodavac izjavio da je roba saobrazna ugovoru.Prodavac ne odgovara za nesaobraznost ako je u trenutku zaključenja ugovora potrošaču bilo poznato ili mu nije moglo ostati nepoznato da roba nije saobrazna ugovoru ili ako je uzrok nesaobraznosti u materijalu koji je dao potrošač. Ako isporučena roba nije saobrazna ugovoru, potrošač koji je obavestio prodavca o nesaobraznosti, ima pravo da zahteva od prodavca da otkloni nesaobraznost, bez naknade, opravkom ili zamenom, odnosno da zahteva odgovarajuće umanjenje cene ili da raskine ugovor u pogledu te robe. Potrošač ima pravo da bira da nesaobraznost robe trgovac otkloni opravkom ili zamenom.Ako otklanjanje nesaobraznosti opravkom ili zamenom nije moguće, potrošač ima pravo da zahteva odgovarajuće umanjenje cene ili raskid ugovora ako:1) nesaobraznost ne može da se otkloni opravkom ili zamenom uopšte niti u primerenom roku;2) ne može da ostvari pravo na opravku ili zamenu, odnosno ako prodavac nije izvršio opravku ili zamenu u primerenom roku;3) opravka ili zamena ne može da se sprovede bez značajnijih nepogodnosti za potrošača zbog prirode robe i njene namene;4) otklanjanje nesaobraznosti opravkom ili zamenom predstavlja nesrazmerno opterećenje za prodavca.Potrošač ima pravo da zahteva zamenu, odgovarajuće umanjenje cene ili da raskine ugovor zbog istog ili drugog nedostatka saobraznosti koji se posle prve opravke pojavi, a ponovna opravka je moguća samo uz izričitu saglasnost potrošača.Uzimajući u obzir prirodu robe i svrhu zbog koje je potrošač nabavio, opravka ili zamena mora se izvršiti u primerenom roku bez značajnih neugodnosti za potrošača i uz njegovu saglasnost.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, potrošač ima pravo da bira između zahteva da se nesaobraznost otkloni zamenom, odgovarajućim umanjenjem cene ili da izjavi da raskida ugovor.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, otklanjanje nesaobraznosti moguće je opravkom uz izričitu saglasnost potrošača.Sve troškove koji su neophodni da bi se roba saobrazila ugovoru, a naročito troškove rada, materijala, preuzimanja i isporuke, snosi prodavac.Potrošač ne može da raskine ugovor ako je nesaobraznost robe neznatna.Potrošač će snositi troškove otklanjanja nedostataka u roku saobraznosti, u slučajevima: 1) nepoštovanja uputstva za upotrebu i održavanje robe; 2) popravke robe od strane neovlašćenog lica; 3) nepažljivog i nepravilnog rukovanja robom; 4) mehaničkih oštećenja nastalih usled udaraca robe.Potrošač može da izjavi reklamaciju prodavcu radi ostvarivanja svojih prava iz čl. 52. Zakona o zaštiti potrošača, koja se odnose na otklanjanje nesaobraznosti, kao i zbog pogrešno obračunate cene i drugih nedostataka uz obavezu dostavljanja računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.)3.       Potrošač može da izjavi reklamaciju usmeno na prodajnom mestu gde je roba kupljena, odnosno drugom mestu koje je određeno za prijem reklamacija, telefonom, pisanim putem, elektronskim putem, odnosno na trajnom nosaču zapisa, uz dostavu računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.).Prodavac je dužan da potrošaču izda pisanu potvrdu ili elektronskim putem potvrdi prijem reklamacije, odnosno saopšti broj pod kojim je zavedena njegova reklamacija u evidenciji primljenih reklamacija.Prodavac je dužan da bez odlaganja, a najkasnije u roku od osam dana od dana prijema reklamacije, pisanim ili elektronskim putem odgovori potrošaču na izjavljenu reklamaciju. Odgovor prodavca na reklamaciju potrošača mora da sadrži odluku da li prihvata reklamaciju, izjašnjenje o zahtevu potrošača i konkretan predlog i rok za rešavanje reklamacije. Rok ne može da bude duži od 15 dana, odnosno 30 dana za tehničku robu i nameštaj, od dana podnošenja reklamacije.Prodavac je dužan da postupi u skladu sa odlukom, predlogom i rokom za rešavanje reklamacije, ukoliko je dobio prethodnu saglasnost potrošača.Ukoliko prodavac iz objektivnih razloga nije u mogućnosti da udovolji zahtevu potrošača u roku koji je dogovoren, dužan je da o produžavanju roka za rešavanje reklamacije obavesti potrošača i navede rok u kome će je rešiti, kao i da dobije njegovu saglasnost, što je u obavezi da evidentira u evidenciji primljenih reklamacija. Produžavanje roka za rešavanje reklamacija moguće je samo jednom.Reklamaciji zbog nedostataka ne podleže roba koja se prodaje sa oznakom "roba sa nedostatkom".4.       Potrošač nema pravo na odustanak od ugovora u slučajevima koji su definisani čl.37 Zakona o zaštiti potrošača  ("Sl. glasnik RS", br. 62/2014, 6/2016 - dr. zakon i 44/2018 - dr. zakon).5.       Potrošač nema pravo na reklamaciju ako se utvrdi:-          Da je kupac/potrošač proizvodom rukovao nepravilno i na neodgovarajući način (savijao, uvijao, zaprljao dušek organskim supstancama: krv, hemijski agensi i sl.), i/ili suprotno nameni proizvoda I preporuci spomenutoj na deklarativnom listu;-          Da su nedostatci na proizvodu prouzrukovani postupcima trećih lica (fizička oštećenja), za nedostatke nastale zbog ne pridražavanja uputstava za održavanje proizvoda, defekata nastalih usled vremenskih nepogoda, više sile i/ili drugih razloga na koje proizvodjač nije mogao da utiče; -          Da kupac/potrošač nije skladištio proizvod na propisan način, te je usled toga došlo do promena u/na proizvodu;-          Da kupac/potrošač prilikom reklamacije nije priložio broj fakture/fiskalnog računa, broj otpremnice, opis deformiteta i/ili nedostatka, šta je suština reklamacije, iznos reklamacije registarski broj kamiona i  fotografiju;-          Da je kupac/potrošač skidajuću navlaku prao na temperaturi većoj od 40 stepeni;-          da ne postoji Garantni list i/ili su na Garantnom listu uočljivi tragovi ispravljanja, a da nisu overeni pečatom proizvodjača/prodavca;          Garancija ne pokriva normalne promene u smislu osećaja povećanja mekoće zato što to ne utiče bitno na ergonomska svojstva materijala od kog je jezgro izrađeno;</p> </div></div></div></div>';;
								$('.borderZ').parent().remove();
								codeAddress2a();
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('reklamacijeZen').className += ' activePageZen';	
							document.title = 'Complaints - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/complaints")>= 0){
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"><div class="breadcrumb clearfix"> <a class="home" href="https://www.sdream.rs/" title="vratite se na Početak"><i class="icon-home"></i></a> <span class="navigation-pipe">&gt;</span> Reklamacije</div><div id="slider_row" class="row"></div><div class="row"><div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="page-heading bottom-indent">Reklamacioni servis</h1><form action="/sr/kontakt" method="post" class="kiriZuljaZ contact-form-box" enctype="multipart/form-data"><fieldset><div class="clearfix"><div class="col-xs-12 col-md-12"> <input type="hidden" name="id_contact" value="1"><p id="desc_contact0" style="display:none;" class="desc_contact">&nbsp;</p><p id="desc_contact2" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>For any question about a product, an order</p><p id="desc_contact1" class="desc_contact contact-title unvisible"> <i class="icon-comment-alt"></i>If a technical problem occurs on this website</p><p class="text"> <label for="extrafield2" id="fullnamez"> Ime i prezime </label> <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value=""></p><p class="text" style="display:none"> <label for="extrafield3" id="tipForme"> Tip forme </label> <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="reklamacija"></p><p class="form-group"> <label for="email">E-mail adresa</label> <input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value=""></p><p class="text"> <label for="extrafield4" id="brojTelefona"> Broj telefona </label> <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value=""></p><p class="text"> <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbinice </label> <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value=""></p><p class="text" style="display:none;"> <label for="extrafield" id="subject">Naslov poruke</label> <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value=""></p></div><div class="col-xs-12 col-md-12"><div class="form-group" style=""> <label for="message">Poruka</label><textarea class="form-control" style="height:200px;    background: #fbfbfb;" id="message" name="message"></textarea></div></div></div><div class="submit"> <button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span>Pošalji<i class="icon-chevron-right right"></i></span></button></div></fieldset></form><div class="grizuljZ"><h1 class="page-heading bottom-indent"> Za sva pitanja vezana za reklamacije možete nas pozvati na broj:<br> <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050 </a> ili popunite reklamacionu formu sa ove stranice. </h1><h1 class="page-heading bottom-indent"> Nakon uspešnog popunjavanja reklamacione forme bićete kontaktirani u najkraćem roku. Pera djoka</h1> <p> 1.       Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga (ovo je umesto garancija na zadovoljstvo – ukoliko niste zadovoljni proizvodima možete ih vratiti u roku od 14 dana). Potrošač ima pravo da odustane od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija u roku od 14 dana, bez navođenja razloga i dodatnih troškova, osim troškova iz čl. 34. i 35. Zakona o zaštiti potrošača. Potrošač ostvaruje pravo na odustanak od ugovora izjavom dostavljanjem obrazca za odustanak. Izjava o odustanku od ugovora smatra se blagovremenom ukoliko je poslata trgovcu u roku od 14 dana.Izjava o odustanku od ugovora proizvodi pravno dejstvo od dana kada je poslata trgovcu. Ako trgovac omogući potrošaču da elektronski popuni i pošalje obrazac za odustanak, dužan je da ga o prijemu obrasca bez odlaganja obavesti u pisanoj formi ili na drugom trajnom nosaču zapisa.Protekom roka od 14 dana iz člana 29. ovog zakona prestaje pravo potrošača na odustanak od ugovora.NAPOMENA: Ovo pravo od odustanka od ugovora ne odnosi se na kupovinu u prodavnicama s obzirom da to nije kupovina na daljinu i izvan poslovnih prostorija.Prodavac je odgovoran za nesaobraznost robe ugovoru koja se pojavi u roku od dve godine od dana prelaska rizika na potrošača, odnosno dana kupovine proizvoda.2.       Prodavac odgovara za nesaobraznosti isporučene robe ugovoru ako:1) je postojala u času prelaska rizika na potrošača, bez obzira na to da li je za tu nesaobraznost prodavac znao;      2) se pojavila posle prelaska rizika na potrošača, ako potiče od uzroka koji je postojao pre prelaska rizika na potrošača;3) je potrošač mogao lako uočiti, ukoliko je prodavac izjavio da je roba saobrazna ugovoru.Prodavac ne odgovara za nesaobraznost ako je u trenutku zaključenja ugovora potrošaču bilo poznato ili mu nije moglo ostati nepoznato da roba nije saobrazna ugovoru ili ako je uzrok nesaobraznosti u materijalu koji je dao potrošač. Ako isporučena roba nije saobrazna ugovoru, potrošač koji je obavestio prodavca o nesaobraznosti, ima pravo da zahteva od prodavca da otkloni nesaobraznost, bez naknade, opravkom ili zamenom, odnosno da zahteva odgovarajuće umanjenje cene ili da raskine ugovor u pogledu te robe. Potrošač ima pravo da bira da nesaobraznost robe trgovac otkloni opravkom ili zamenom.Ako otklanjanje nesaobraznosti opravkom ili zamenom nije moguće, potrošač ima pravo da zahteva odgovarajuće umanjenje cene ili raskid ugovora ako:1) nesaobraznost ne može da se otkloni opravkom ili zamenom uopšte niti u primerenom roku;2) ne može da ostvari pravo na opravku ili zamenu, odnosno ako prodavac nije izvršio opravku ili zamenu u primerenom roku;3) opravka ili zamena ne može da se sprovede bez značajnijih nepogodnosti za potrošača zbog prirode robe i njene namene;4) otklanjanje nesaobraznosti opravkom ili zamenom predstavlja nesrazmerno opterećenje za prodavca.Potrošač ima pravo da zahteva zamenu, odgovarajuće umanjenje cene ili da raskine ugovor zbog istog ili drugog nedostatka saobraznosti koji se posle prve opravke pojavi, a ponovna opravka je moguća samo uz izričitu saglasnost potrošača.Uzimajući u obzir prirodu robe i svrhu zbog koje je potrošač nabavio, opravka ili zamena mora se izvršiti u primerenom roku bez značajnih neugodnosti za potrošača i uz njegovu saglasnost.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, potrošač ima pravo da bira između zahteva da se nesaobraznost otkloni zamenom, odgovarajućim umanjenjem cene ili da izjavi da raskida ugovor.Ako se nesaobraznost pojavi u roku od šest meseci od dana prelaska rizika na potrošača, otklanjanje nesaobraznosti moguće je opravkom uz izričitu saglasnost potrošača.Sve troškove koji su neophodni da bi se roba saobrazila ugovoru, a naročito troškove rada, materijala, preuzimanja i isporuke, snosi prodavac.Potrošač ne može da raskine ugovor ako je nesaobraznost robe neznatna.Potrošač će snositi troškove otklanjanja nedostataka u roku saobraznosti, u slučajevima: 1) nepoštovanja uputstva za upotrebu i održavanje robe; 2) popravke robe od strane neovlašćenog lica; 3) nepažljivog i nepravilnog rukovanja robom; 4) mehaničkih oštećenja nastalih usled udaraca robe.Potrošač može da izjavi reklamaciju prodavcu radi ostvarivanja svojih prava iz čl. 52. Zakona o zaštiti potrošača, koja se odnose na otklanjanje nesaobraznosti, kao i zbog pogrešno obračunate cene i drugih nedostataka uz obavezu dostavljanja računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.)3.       Potrošač može da izjavi reklamaciju usmeno na prodajnom mestu gde je roba kupljena, odnosno drugom mestu koje je određeno za prijem reklamacija, telefonom, pisanim putem, elektronskim putem, odnosno na trajnom nosaču zapisa, uz dostavu računa na uvid ili drugog dokaza o kupovini (kopija računa, slip i sl.).Prodavac je dužan da potrošaču izda pisanu potvrdu ili elektronskim putem potvrdi prijem reklamacije, odnosno saopšti broj pod kojim je zavedena njegova reklamacija u evidenciji primljenih reklamacija.Prodavac je dužan da bez odlaganja, a najkasnije u roku od osam dana od dana prijema reklamacije, pisanim ili elektronskim putem odgovori potrošaču na izjavljenu reklamaciju. Odgovor prodavca na reklamaciju potrošača mora da sadrži odluku da li prihvata reklamaciju, izjašnjenje o zahtevu potrošača i konkretan predlog i rok za rešavanje reklamacije. Rok ne može da bude duži od 15 dana, odnosno 30 dana za tehničku robu i nameštaj, od dana podnošenja reklamacije.Prodavac je dužan da postupi u skladu sa odlukom, predlogom i rokom za rešavanje reklamacije, ukoliko je dobio prethodnu saglasnost potrošača.Ukoliko prodavac iz objektivnih razloga nije u mogućnosti da udovolji zahtevu potrošača u roku koji je dogovoren, dužan je da o produžavanju roka za rešavanje reklamacije obavesti potrošača i navede rok u kome će je rešiti, kao i da dobije njegovu saglasnost, što je u obavezi da evidentira u evidenciji primljenih reklamacija. Produžavanje roka za rešavanje reklamacija moguće je samo jednom.Reklamaciji zbog nedostataka ne podleže roba koja se prodaje sa oznakom "roba sa nedostatkom".4.       Potrošač nema pravo na odustanak od ugovora u slučajevima koji su definisani čl.37 Zakona o zaštiti potrošača  ("Sl. glasnik RS", br. 62/2014, 6/2016 - dr. zakon i 44/2018 - dr. zakon).5.       Potrošač nema pravo na reklamaciju ako se utvrdi:-          Da je kupac/potrošač proizvodom rukovao nepravilno i na neodgovarajući način (savijao, uvijao, zaprljao dušek organskim supstancama: krv, hemijski agensi i sl.), i/ili suprotno nameni proizvoda I preporuci spomenutoj na deklarativnom listu;-          Da su nedostatci na proizvodu prouzrukovani postupcima trećih lica (fizička oštećenja), za nedostatke nastale zbog ne pridražavanja uputstava za održavanje proizvoda, defekata nastalih usled vremenskih nepogoda, više sile i/ili drugih razloga na koje proizvodjač nije mogao da utiče; -          Da kupac/potrošač nije skladištio proizvod na propisan način, te je usled toga došlo do promena u/na proizvodu;-          Da kupac/potrošač prilikom reklamacije nije priložio broj fakture/fiskalnog računa, broj otpremnice, opis deformiteta i/ili nedostatka, šta je suština reklamacije, iznos reklamacije registarski broj kamiona i  fotografiju;-          Da je kupac/potrošač skidajuću navlaku prao na temperaturi većoj od 40 stepeni;-          da ne postoji Garantni list i/ili su na Garantnom listu uočljivi tragovi ispravljanja, a da nisu overeni pečatom proizvodjača/prodavca;          Garancija ne pokriva normalne promene u smislu osećaja povećanja mekoće zato što to ne utiče bitno na ergonomska svojstva materijala od kog je jezgro izrađeno;</p></div></div></div></div>';;
								$('.borderZ').parent().remove();
								codeAddress2a();
								document.title = 'Complaints - S Dream Shop';	
								document.getElementById('reklamacijeZen').className += ' activePageZen';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
		
	}
	
function faqz(){
	
	var xzy = window.location.href; 
			if (xzy.indexOf("/faq/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'faq/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'faq/';}
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"> <style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style> <div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h2> 1. Koliko ima opruga džepičatog jezgra u kvadratnom metru? </h2> <h4>Ima 256 opruga u metru kvadratnom. </h4> <hr/> <h2> 2. Koja je debljina žice bonnel jezgra? </h2> <h4>Debljina žice iznosi 2,2 milimetra. </h4> <hr/> <h2> 3. Koja je debljina žice džepičastog jezgra? </h2> <h4>Debljina žice kod džepičastog jezgra sa I zonom iznosi 1,8 mm, kod 7 ZONA 1,6 mm i 1,8 mm. </h4> <hr/> <h2> 4. Da li su navlake perive i na koliko stepeni ili se moraju nositi na hemijsko čišćenje? </h2> <h4>Skidajuća navlaka je periva od 30 do 40 stepeni mašinsko pranje. </h4> <hr/> <h2> 5. Da li je u dušeku Memori Latex prirodni ili sintetički latex? </h2> <h4>Proizvođači ga deklarisu kao 100% prirodan, ali na žalost je više sintetički mešavina prilikom proizvodnje.  </h4> <hr/> <h2> 6. Kakva je razlika između žičanog i džepičastog dušeka? </h2> <h4>Kod žičanog ili bonnel jezgra žica je povezana i tvrđa je za razliku od džepičastog jezgra, a kod džepičastog jezgra svaka žica je uvijena u retex i prilagođava se telu i pokretima prilikom spavanja. </h4> <hr/> <h2> 7. Koji je tvrđi dušek enasti ili žičani? </h2> <h4>Zavisi koji je sastav u penastom i žičanom dušeku. Primera radi ako kupite dušek relax ili exclusiv ta dva dušeka su extra tvrda, a kada vršimo poređenje  žičanih i džepičastih u tom slučaju su tvrđi žičani. </h4> <hr/> <h2> 8. Šta je to HR pena? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti i daje svostva opruge.  </h4> <hr/> <h2> 9. Šta je bolje za decu penasti dušek ili žičani? </h2> <h4>Za decu je najbitnije da ima trvdu podlogu za spavanje, moje dete spava na penastom dušeku Spa. </h4> <hr/> <h2> 10. Kako da znam koja mi dimenzija dušeka treba tj. kako da znam koja visina dušeka mi je potrebna? </h2> <h4>Ako krevet ima kutiju gde se stavlja dusek potrebno je minimum 20cm da dusek bude iznad daske kreveta.  </h4> <hr/> <h2> 11. Koji je dušek nabolji za osobu koja ima preko 130 kg? </h2> <h4>Dušek Apolon je odličan dušek sa pet zvezdica i svakome bi preporučili. Udoban, ima odličnu potporu za kičmeni stub i preporučujemo osobama koje vode aktivan zivot sa kasmir navlakom koja vam daje izuzetnu mekoću prilikom dodira. </h4> <hr/> <h2> 12. Koji dušek preporučujemo za tinejdžere? </h2> <h4>Zavisno od težine osobe jer imamo dušeke sa oznakom H1 ili težine do 60kg, sa oznakom H2 ili težine do 90kg, sa oznakom H3 težine do 130kg, sa oznakom H4 težine preko 130kg. </h4> <hr/> <h2> 13. Imam stari krevet pa bih želeo da poboljšam tvrdoću kreveta koji mi naddušek preporučujete? </h2> <h4>Preporučujemo naddušek Soft 4, a ako želite još tvrđu podlogu u tom slučaju bi preporučili naddušek HR4. </h4> <hr/> <h2> 14. Imamo tvrd dušek, želeli bi da ga malo omekšamo? </h2> <h4>Naša preporuka je naddušek Memo 4, Memo Soft 5, ako želite da dobijete baš mekanu podlogu onda je to naddušek Memo 7. </h4> <hr/> <h2> 15. Kakva je to Memo Cool pena? </h2> <h4>Memo Cool pena je pena koja skuplja manje toplote nego dušek sa običnom Memory penom. Ima efekat hlađenja, smanjuje opterećenje mišića i pomaže relaksaciju i odličan je u vidu jastuka. </h4> <hr/> <h2> 15. Želeli bi naddušek sa pamučnom navlakom, da li imate tako nešto u ponudi? </h2> <h4>Da naravno, naddušek Memo Soft je dušek sa navlakom izrađenom od 100% pamuka i perivom na 40 stepeni.  </h4> <hr/> <h2> 16. Kako da sačuvam dušek kod koga se ne skida navlaka  da ga ne isprljamo? </h2> <h4>Mi imamo za vas Step deku ili zaštitu za dušek izrađenu od pamuka 100% i ima lastiše koji se navlače na sva četiri kraja dušeka.  </h4> <hr/> <h2> 17. Kakva je razlika izmedju HR pene i Sky Cell pene? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti, daje svojstva opruge i tu penu koriste naši najveći nameštajci za izradu kožnih garnitura koje zahtevaju visoki kvalitet. Sky Cell pene su poliuretanske pene sa otvorenim ćelijama koje omogućuju neprestano strujanje vazduha. </h4>  <hr/> <h2> 18. Da li mozemo poručiti dušek u nekoj od nestandardnih dimenzija koje nema u ponudi? </h2> <h4>Radimo sve dimenzije po vašoj želji. </h4> <hr/> <h2> 19. Kakva je razlika između Memorisan jastuka i Kontur M/HR? </h2> <h4>Ako volite više tvrđi jastuk onda je to jastuk Kontur M/HR jer HR pena daje potporu i pravi jastuk tvrđim u odnosu na jastuk koji komplet profilisan od Memory pene. </h4> <hr/> <h2> 20. Koji mi jastuk preporučujete jer imam bolove u vratu? </h2> <h4>Jastuk morate isprobati jer sve zavisi od osobe, nekome odgovara jastuk Sweet dream sa mešavinom Memory i Sky Cell pene, a nekome odgovara jastuk Memorisan. </h4> <hr/> <h2> 21. Da li su ove Memo prostirke kao iz Dormea za deciju sobu? </h2> <h4>Da tako je, pena Memory 2cm imamo dekorativno platno u tri boje u ponudi. Za devojčice ciklama i ljibičastu, a za dečake teget. Na donjoj strani se nalazi platno neklizajuće, navlaka je skidajuća i periva na 30 stepeni. Takođe od tog platna imamo izrađene i dekorativne jastuke. </h4> <hr/> </div></div></div>';

							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('faqZen1').className += ' activePageZen';
							document.getElementById('faqZen2').className += ' activePageZen3';
							document.getElementById('faqZen3').className += ' activePageZen';	
							document.title = 'FAQ - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/faq")>= 0){
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"> <style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style> <div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h2> 1. Koliko ima opruga džepičatog jezgra u kvadratnom metru? </h2> <h4>Ima 256 opruga u metru kvadratnom. </h4> <hr/> <h2> 2. Koja je debljina žice bonnel jezgra? </h2> <h4>Debljina žice iznosi 2,2 milimetra. </h4> <hr/> <h2> 3. Koja je debljina žice džepičastog jezgra? </h2> <h4>Debljina žice kod džepičastog jezgra sa I zonom iznosi 1,8 mm, kod 7 ZONA 1,6 mm i 1,8 mm. </h4> <hr/> <h2> 4. Da li su navlake perive i na koliko stepeni ili se moraju nositi na hemijsko čišćenje? </h2> <h4>Skidajuća navlaka je periva od 30 do 40 stepeni mašinsko pranje. </h4> <hr/> <h2> 5. Da li je u dušeku Memori Latex prirodni ili sintetički latex? </h2> <h4>Proizvođači ga deklarisu kao 100% prirodan, ali na žalost je više sintetički mešavina prilikom proizvodnje.  </h4> <hr/> <h2> 6. Kakva je razlika između žičanog i džepičastog dušeka? </h2> <h4>Kod žičanog ili bonnel jezgra žica je povezana i tvrđa je za razliku od džepičastog jezgra, a kod džepičastog jezgra svaka žica je uvijena u retex i prilagođava se telu i pokretima prilikom spavanja. </h4> <hr/> <h2> 7. Koji je tvrđi dušek enasti ili žičani? </h2> <h4>Zavisi koji je sastav u penastom i žičanom dušeku. Primera radi ako kupite dušek relax ili exclusiv ta dva dušeka su extra tvrda, a kada vršimo poređenje  žičanih i džepičastih u tom slučaju su tvrđi žičani. </h4> <hr/> <h2> 8. Šta je to HR pena? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti i daje svostva opruge.  </h4> <hr/> <h2> 9. Šta je bolje za decu penasti dušek ili žičani? </h2> <h4>Za decu je najbitnije da ima trvdu podlogu za spavanje, moje dete spava na penastom dušeku Spa. </h4> <hr/> <h2> 10. Kako da znam koja mi dimenzija dušeka treba tj. kako da znam koja visina dušeka mi je potrebna? </h2> <h4>Ako krevet ima kutiju gde se stavlja dusek potrebno je minimum 20cm da dusek bude iznad daske kreveta.  </h4> <hr/> <h2> 11. Koji je dušek nabolji za osobu koja ima preko 130 kg? </h2> <h4>Dušek Apolon je odličan dušek sa pet zvezdica i svakome bi preporučili. Udoban, ima odličnu potporu za kičmeni stub i preporučujemo osobama koje vode aktivan zivot sa kasmir navlakom koja vam daje izuzetnu mekoću prilikom dodira. </h4> <hr/> <h2> 12. Koji dušek preporučujemo za tinejdžere? </h2> <h4>Zavisno od težine osobe jer imamo dušeke sa oznakom H1 ili težine do 60kg, sa oznakom H2 ili težine do 90kg, sa oznakom H3 težine do 130kg, sa oznakom H4 težine preko 130kg. </h4> <hr/> <h2> 13. Imam stari krevet pa bih želeo da poboljšam tvrdoću kreveta koji mi naddušek preporučujete? </h2> <h4>Preporučujemo naddušek Soft 4, a ako želite još tvrđu podlogu u tom slučaju bi preporučili naddušek HR4. </h4> <hr/> <h2> 14. Imamo tvrd dušek, želeli bi da ga malo omekšamo? </h2> <h4>Naša preporuka je naddušek Memo 4, Memo Soft 5, ako želite da dobijete baš mekanu podlogu onda je to naddušek Memo 7. </h4> <hr/> <h2> 15. Kakva je to Memo Cool pena? </h2> <h4>Memo Cool pena je pena koja skuplja manje toplote nego dušek sa običnom Memory penom. Ima efekat hlađenja, smanjuje opterećenje mišića i pomaže relaksaciju i odličan je u vidu jastuka. </h4> <hr/> <h2> 15. Želeli bi naddušek sa pamučnom navlakom, da li imate tako nešto u ponudi? </h2> <h4>Da naravno, naddušek Memo Soft je dušek sa navlakom izrađenom od 100% pamuka i perivom na 40 stepeni.  </h4> <hr/> <h2> 16. Kako da sačuvam dušek kod koga se ne skida navlaka  da ga ne isprljamo? </h2> <h4>Mi imamo za vas Step deku ili zaštitu za dušek izrađenu od pamuka 100% i ima lastiše koji se navlače na sva četiri kraja dušeka.  </h4> <hr/> <h2> 17. Kakva je razlika izmedju HR pene i Sky Cell pene? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti, daje svojstva opruge i tu penu koriste naši najveći nameštajci za izradu kožnih garnitura koje zahtevaju visoki kvalitet. Sky Cell pene su poliuretanske pene sa otvorenim ćelijama koje omogućuju neprestano strujanje vazduha. </h4>  <hr/> <h2> 18. Da li mozemo poručiti dušek u nekoj od nestandardnih dimenzija koje nema u ponudi? </h2> <h4>Radimo sve dimenzije po vašoj želji. </h4> <hr/> <h2> 19. Kakva je razlika između Memorisan jastuka i Kontur M/HR? </h2> <h4>Ako volite više tvrđi jastuk onda je to jastuk Kontur M/HR jer HR pena daje potporu i pravi jastuk tvrđim u odnosu na jastuk koji komplet profilisan od Memory pene. </h4> <hr/> <h2> 20. Koji mi jastuk preporučujete jer imam bolove u vratu? </h2> <h4>Jastuk morate isprobati jer sve zavisi od osobe, nekome odgovara jastuk Sweet dream sa mešavinom Memory i Sky Cell pene, a nekome odgovara jastuk Memorisan. </h4> <hr/> <h2> 21. Da li su ove Memo prostirke kao iz Dormea za deciju sobu? </h2> <h4>Da tako je, pena Memory 2cm imamo dekorativno platno u tri boje u ponudi. Za devojčice ciklama i ljibičastu, a za dečake teget. Na donjoj strani se nalazi platno neklizajuće, navlaka je skidajuća i periva na 30 stepeni. Takođe od tog platna imamo izrađene i dekorativne jastuke. </h4> <hr/> </div></div></div>';
							
								document.title = 'FAQ - S Dream Shop';	
								document.getElementById('faqZen1').className += ' activePageZen';
							document.getElementById('faqZen2').className += ' activePageZen3';
							document.getElementById('faqZen3').className += ' activePageZen';		
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
	
}
function faqzz(){
	
	
	var xzy = window.location.href; 
			if (xzy.indexOf("/faq/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'faq/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'faq/';}
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"> <style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style> <div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h2> 1. Koliko ima opruga džepičatog jezgra u kvadratnom metru? </h2> <h4>Ima 256 opruga u metru kvadratnom. </h4> <hr/> <h2> 2. Koja je debljina žice bonnel jezgra? </h2> <h4>Debljina žice iznosi 2,2 milimetra. </h4> <hr/> <h2> 3. Koja je debljina žice džepičastog jezgra? </h2> <h4>Debljina žice kod džepičastog jezgra sa I zonom iznosi 1,8 mm, kod 7 ZONA 1,6 mm i 1,8 mm. </h4> <hr/> <h2> 4. Da li su navlake perive i na koliko stepeni ili se moraju nositi na hemijsko čišćenje? </h2> <h4>Skidajuća navlaka je periva od 30 do 40 stepeni mašinsko pranje. </h4> <hr/> <h2> 5. Da li je u dušeku Memori Latex prirodni ili sintetički latex? </h2> <h4>Proizvođači ga deklarisu kao 100% prirodan, ali na žalost je više sintetički mešavina prilikom proizvodnje.  </h4> <hr/> <h2> 6. Kakva je razlika između žičanog i džepičastog dušeka? </h2> <h4>Kod žičanog ili bonnel jezgra žica je povezana i tvrđa je za razliku od džepičastog jezgra, a kod džepičastog jezgra svaka žica je uvijena u retex i prilagođava se telu i pokretima prilikom spavanja. </h4> <hr/> <h2> 7. Koji je tvrđi dušek enasti ili žičani? </h2> <h4>Zavisi koji je sastav u penastom i žičanom dušeku. Primera radi ako kupite dušek relax ili exclusiv ta dva dušeka su extra tvrda, a kada vršimo poređenje  žičanih i džepičastih u tom slučaju su tvrđi žičani. </h4> <hr/> <h2> 8. Šta je to HR pena? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti i daje svostva opruge.  </h4> <hr/> <h2> 9. Šta je bolje za decu penasti dušek ili žičani? </h2> <h4>Za decu je najbitnije da ima trvdu podlogu za spavanje, moje dete spava na penastom dušeku Spa. </h4> <hr/> <h2> 10. Kako da znam koja mi dimenzija dušeka treba tj. kako da znam koja visina dušeka mi je potrebna? </h2> <h4>Ako krevet ima kutiju gde se stavlja dusek potrebno je minimum 20cm da dusek bude iznad daske kreveta.  </h4> <hr/> <h2> 11. Koji je dušek nabolji za osobu koja ima preko 130 kg? </h2> <h4>Dušek Apolon je odličan dušek sa pet zvezdica i svakome bi preporučili. Udoban, ima odličnu potporu za kičmeni stub i preporučujemo osobama koje vode aktivan zivot sa kasmir navlakom koja vam daje izuzetnu mekoću prilikom dodira. </h4> <hr/> <h2> 12. Koji dušek preporučujemo za tinejdžere? </h2> <h4>Zavisno od težine osobe jer imamo dušeke sa oznakom H1 ili težine do 60kg, sa oznakom H2 ili težine do 90kg, sa oznakom H3 težine do 130kg, sa oznakom H4 težine preko 130kg. </h4> <hr/> <h2> 13. Imam stari krevet pa bih želeo da poboljšam tvrdoću kreveta koji mi naddušek preporučujete? </h2> <h4>Preporučujemo naddušek Soft 4, a ako želite još tvrđu podlogu u tom slučaju bi preporučili naddušek HR4. </h4> <hr/> <h2> 14. Imamo tvrd dušek, želeli bi da ga malo omekšamo? </h2> <h4>Naša preporuka je naddušek Memo 4, Memo Soft 5, ako želite da dobijete baš mekanu podlogu onda je to naddušek Memo 7. </h4> <hr/> <h2> 15. Kakva je to Memo Cool pena? </h2> <h4>Memo Cool pena je pena koja skuplja manje toplote nego dušek sa običnom Memory penom. Ima efekat hlađenja, smanjuje opterećenje mišića i pomaže relaksaciju i odličan je u vidu jastuka. </h4> <hr/> <h2> 15. Želeli bi naddušek sa pamučnom navlakom, da li imate tako nešto u ponudi? </h2> <h4>Da naravno, naddušek Memo Soft je dušek sa navlakom izrađenom od 100% pamuka i perivom na 40 stepeni.  </h4> <hr/> <h2> 16. Kako da sačuvam dušek kod koga se ne skida navlaka  da ga ne isprljamo? </h2> <h4>Mi imamo za vas Step deku ili zaštitu za dušek izrađenu od pamuka 100% i ima lastiše koji se navlače na sva četiri kraja dušeka.  </h4> <hr/> <h2> 17. Kakva je razlika izmedju HR pene i Sky Cell pene? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti, daje svojstva opruge i tu penu koriste naši najveći nameštajci za izradu kožnih garnitura koje zahtevaju visoki kvalitet. Sky Cell pene su poliuretanske pene sa otvorenim ćelijama koje omogućuju neprestano strujanje vazduha. </h4>  <hr/> <h2> 18. Da li mozemo poručiti dušek u nekoj od nestandardnih dimenzija koje nema u ponudi? </h2> <h4>Radimo sve dimenzije po vašoj želji. </h4> <hr/> <h2> 19. Kakva je razlika između Memorisan jastuka i Kontur M/HR? </h2> <h4>Ako volite više tvrđi jastuk onda je to jastuk Kontur M/HR jer HR pena daje potporu i pravi jastuk tvrđim u odnosu na jastuk koji komplet profilisan od Memory pene. </h4> <hr/> <h2> 20. Koji mi jastuk preporučujete jer imam bolove u vratu? </h2> <h4>Jastuk morate isprobati jer sve zavisi od osobe, nekome odgovara jastuk Sweet dream sa mešavinom Memory i Sky Cell pene, a nekome odgovara jastuk Memorisan. </h4> <hr/> <h2> 21. Da li su ove Memo prostirke kao iz Dormea za deciju sobu? </h2> <h4>Da tako je, pena Memory 2cm imamo dekorativno platno u tri boje u ponudi. Za devojčice ciklama i ljibičastu, a za dečake teget. Na donjoj strani se nalazi platno neklizajuće, navlaka je skidajuća i periva na 30 stepeni. Takođe od tog platna imamo izrađene i dekorativne jastuke. </h4> <hr/> </div></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2a();
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.getElementById('faqZen1').className += ' activePageZen';
							document.getElementById('faqZen2').className += ' activePageZen3';
							document.getElementById('faqZen3').className += ' activePageZen';	
							document.title = 'FAQ - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/faq")>= 0){
								document.getElementById('columns').innerHTML = '<div id="columns" class="container"> <style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.cetvrta::before{content: " "; background:url(https://www.sdream.rs/upload/4.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.peta::before{content: " "; background:url(https://www.sdream.rs/upload/5.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.h2ZZZ{border-bottom:2px solid #606060; color:#f06423; font-weight:bold;}#zukorlaZ>strong{color:#f06423;}#zukorlaZ>ul>li>strong{color:#f06423;}</style> <div class="row" id="iframeZkiZ" style="margin-bottom:24px;"> <div class="col-md-12" id="zukorlaZ" style="font-size:15px; margin-bottom:32px;"> <h2> 1. Koliko ima opruga džepičatog jezgra u kvadratnom metru? </h2> <h4>Ima 256 opruga u metru kvadratnom. </h4> <hr/> <h2> 2. Koja je debljina žice bonnel jezgra? </h2> <h4>Debljina žice iznosi 2,2 milimetra. </h4> <hr/> <h2> 3. Koja je debljina žice džepičastog jezgra? </h2> <h4>Debljina žice kod džepičastog jezgra sa I zonom iznosi 1,8 mm, kod 7 ZONA 1,6 mm i 1,8 mm. </h4> <hr/> <h2> 4. Da li su navlake perive i na koliko stepeni ili se moraju nositi na hemijsko čišćenje? </h2> <h4>Skidajuća navlaka je periva od 30 do 40 stepeni mašinsko pranje. </h4> <hr/> <h2> 5. Da li je u dušeku Memori Latex prirodni ili sintetički latex? </h2> <h4>Proizvođači ga deklarisu kao 100% prirodan, ali na žalost je više sintetički mešavina prilikom proizvodnje.  </h4> <hr/> <h2> 6. Kakva je razlika između žičanog i džepičastog dušeka? </h2> <h4>Kod žičanog ili bonnel jezgra žica je povezana i tvrđa je za razliku od džepičastog jezgra, a kod džepičastog jezgra svaka žica je uvijena u retex i prilagođava se telu i pokretima prilikom spavanja. </h4> <hr/> <h2> 7. Koji je tvrđi dušek enasti ili žičani? </h2> <h4>Zavisi koji je sastav u penastom i žičanom dušeku. Primera radi ako kupite dušek relax ili exclusiv ta dva dušeka su extra tvrda, a kada vršimo poređenje  žičanih i džepičastih u tom slučaju su tvrđi žičani. </h4> <hr/> <h2> 8. Šta je to HR pena? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti i daje svostva opruge.  </h4> <hr/> <h2> 9. Šta je bolje za decu penasti dušek ili žičani? </h2> <h4>Za decu je najbitnije da ima trvdu podlogu za spavanje, moje dete spava na penastom dušeku Spa. </h4> <hr/> <h2> 10. Kako da znam koja mi dimenzija dušeka treba tj. kako da znam koja visina dušeka mi je potrebna? </h2> <h4>Ako krevet ima kutiju gde se stavlja dusek potrebno je minimum 20cm da dusek bude iznad daske kreveta.  </h4> <hr/> <h2> 11. Koji je dušek nabolji za osobu koja ima preko 130 kg? </h2> <h4>Dušek Apolon je odličan dušek sa pet zvezdica i svakome bi preporučili. Udoban, ima odličnu potporu za kičmeni stub i preporučujemo osobama koje vode aktivan zivot sa kasmir navlakom koja vam daje izuzetnu mekoću prilikom dodira. </h4> <hr/> <h2> 12. Koji dušek preporučujemo za tinejdžere? </h2> <h4>Zavisno od težine osobe jer imamo dušeke sa oznakom H1 ili težine do 60kg, sa oznakom H2 ili težine do 90kg, sa oznakom H3 težine do 130kg, sa oznakom H4 težine preko 130kg. </h4> <hr/> <h2> 13. Imam stari krevet pa bih želeo da poboljšam tvrdoću kreveta koji mi naddušek preporučujete? </h2> <h4>Preporučujemo naddušek Soft 4, a ako želite još tvrđu podlogu u tom slučaju bi preporučili naddušek HR4. </h4> <hr/> <h2> 14. Imamo tvrd dušek, želeli bi da ga malo omekšamo? </h2> <h4>Naša preporuka je naddušek Memo 4, Memo Soft 5, ako želite da dobijete baš mekanu podlogu onda je to naddušek Memo 7. </h4> <hr/> <h2> 15. Kakva je to Memo Cool pena? </h2> <h4>Memo Cool pena je pena koja skuplja manje toplote nego dušek sa običnom Memory penom. Ima efekat hlađenja, smanjuje opterećenje mišića i pomaže relaksaciju i odličan je u vidu jastuka. </h4> <hr/> <h2> 15. Želeli bi naddušek sa pamučnom navlakom, da li imate tako nešto u ponudi? </h2> <h4>Da naravno, naddušek Memo Soft je dušek sa navlakom izrađenom od 100% pamuka i perivom na 40 stepeni.  </h4> <hr/> <h2> 16. Kako da sačuvam dušek kod koga se ne skida navlaka  da ga ne isprljamo? </h2> <h4>Mi imamo za vas Step deku ili zaštitu za dušek izrađenu od pamuka 100% i ima lastiše koji se navlače na sva četiri kraja dušeka.  </h4> <hr/> <h2> 17. Kakva je razlika izmedju HR pene i Sky Cell pene? </h2> <h4>HR pena je hladno livena pena. Ima izuzetan odnos čvrstine i prilagodljivosti ili visoke elastičnosti, daje svojstva opruge i tu penu koriste naši najveći nameštajci za izradu kožnih garnitura koje zahtevaju visoki kvalitet. Sky Cell pene su poliuretanske pene sa otvorenim ćelijama koje omogućuju neprestano strujanje vazduha. </h4>  <hr/> <h2> 18. Da li mozemo poručiti dušek u nekoj od nestandardnih dimenzija koje nema u ponudi? </h2> <h4>Radimo sve dimenzije po vašoj želji. </h4> <hr/> <h2> 19. Kakva je razlika između Memorisan jastuka i Kontur M/HR? </h2> <h4>Ako volite više tvrđi jastuk onda je to jastuk Kontur M/HR jer HR pena daje potporu i pravi jastuk tvrđim u odnosu na jastuk koji komplet profilisan od Memory pene. </h4> <hr/> <h2> 20. Koji mi jastuk preporučujete jer imam bolove u vratu? </h2> <h4>Jastuk morate isprobati jer sve zavisi od osobe, nekome odgovara jastuk Sweet dream sa mešavinom Memory i Sky Cell pene, a nekome odgovara jastuk Memorisan. </h4> <hr/> <h2> 21. Da li su ove Memo prostirke kao iz Dormea za deciju sobu? </h2> <h4>Da tako je, pena Memory 2cm imamo dekorativno platno u tri boje u ponudi. Za devojčice ciklama i ljibičastu, a za dečake teget. Na donjoj strani se nalazi platno neklizajuće, navlaka je skidajuća i periva na 30 stepeni. Takođe od tog platna imamo izrađene i dekorativne jastuke. </h4> <hr/> </div></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2a();
								document.title = 'FAQ - S Dream Shop';	
								document.getElementById('faqZen1').className += ' activePageZen';
							    document.getElementById('faqZen2').className += ' activePageZen3';
							    document.getElementById('faqZen3').className += ' activePageZen';		
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
	
}


function mladenci(){
			
	
var xzy = window.location.href; 
			if (xzy.indexOf("/newlyweds-special/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'newlyweds-special/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'newlyweds-special/';}
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="zukiraZo"> Specijalni popust za mladence</h1> <div class="col-sm-3"><h3 style="font-size:21px;padding-top: 0px;margin-top: 0px;">Dragim mladencima odobravamo i do 30% popusta na kompletan<br><span style="color:#f06423;">S Dream</span> program.</h3><h3 style="font-size:21px;">Prilikom kupovine sa sobom ponesite kopiju venčanog lista.</h3><h3 style="font-size:21px;">Za više informacija pozovite <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050</a>.</h3> </div><div class="col-sm-9"><img style="float:right;" src="https://www.sdream.rs/upload/vise-o-popustu-za-mladence.jpg" alt="Up to 30% discount for newlyweds"> </div></div></div></div>';
								$('.borderZ').parent().remove();

							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							document.title = 'Newlyweds special - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/newlyweds-special")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="zukiraZo"> Specijalni popust za mladence </h1> <div class="col-sm-3"><h3 style="font-size:21px;padding-top: 0px;margin-top: 0px;">Dragim mladencima odobravamo i do 30% popusta na kompletan<br><span style="color:#f06423;">S Dream</span> program.</h3><h3 style="font-size:21px;">Prilikom kupovine sa sobom ponesite kopiju venčanog lista.</h3><h3 style="font-size:21px;">Za više informacija pozovite <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050</a>.</h3> </div><div class="col-sm-9"><img style="float:right;" src="https://www.sdream.rs/upload/vise-o-popustu-za-mladence.jpg" alt="Up to 30% discount for newlyweds"> </div></div></div></div>';
								$('.borderZ').parent().remove();

								document.title = 'Newlyweds special - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
		
	}

	function mladenciZ(){
			
	
var xzy = window.location.href; 
			if (xzy.indexOf("/newlyweds-special/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'newlyweds-special/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'newlyweds-special/';}
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="zukiraZo"> Specijalni popust za mladence </h1> <div class="col-sm-3"><h3 style="font-size:21px;padding-top: 0px;margin-top: 0px;">Dragim mladencima odobravamo i do 30% popusta na kompletan<br><span style="color:#f06423;">S Dream</span> program.</h3><h3 style="font-size:21px;">Prilikom kupovine sa sobom ponesite kopiju venčanog lista.</h3><h3 style="font-size:21px;">Za više informacija pozovite <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050</a>.</h3> </div><div class="col-sm-9"><img style="float:right;" src="https://www.sdream.rs/upload/vise-o-popustu-za-mladence.jpg" alt="Up to 30% discount for newlyweds"> </div></div></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2a();
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							document.title = 'Newlyweds special - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/newlyweds-special")>= 0){
								document.getElementById('columns').innerHTML = '<style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12"><h1 class="zukiraZo"> Specijalni popust za mladence </h1> <div class="col-sm-3"><h3 style="font-size:21px;padding-top: 0px;margin-top: 0px;">Dragim mladencima odobravamo i do 30% popusta na kompletan<br><span style="color:#f06423;">S Dream</span> program.</h3><h3 style="font-size:21px;">Prilikom kupovine sa sobom ponesite kopiju venčanog lista.</h3><h3 style="font-size:21px;">Za više informacija pozovite <a style="color:#f06423;" href="tel:+381325377050">+381 32 53 77 050</a>.</h3> </div><div class="col-sm-9"><img style="float:right;" src="https://www.sdream.rs/upload/vise-o-popustu-za-mladence.jpg" alt="Up to 30% discount for newlyweds"> </div></div></div></div>';
								$('.borderZ').parent().remove();
								codeAddress2a();
								document.title = 'Newlyweds special - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;

								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
		
	}
	
function sertifikati(){
			
	
var xzy = window.location.href; 
			if (xzy.indexOf("/certificates/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'certificates/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'certificates/';}
								document.getElementById('columns').innerHTML ='<div id="columns" class="container"><style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""><h1 class="zukiraZo">Sertifikati</h1> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/sumarski.pdf" target="_blank"><img src="https://www.sdream.rs/upload/sumarskiimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 44px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">Šumarski fakultet - Beograd</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/sumarski2img.png" alt="Sumarski Beograd" class="img-responsive"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 8px;line-height: 24px;">Šumarski fakultet, Univerziteta u Beogradu je na zahtev kompanije Vapeks doo, kontrolisao kvalitet svakog dušeka proizvedenog pod brendom S) Dream. Ovim je utvrđeno da svi materijali koji se kod nas koriste nisu štetni po zdravlje ljudi.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">OEKOTEX 100 sertifikat</h3></a><div class="col-xs-12 col-sm-2"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/Materials-TEXTILES-VERTRAUEN2img.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Sve tkanine su proizvedene u specijalizovanim fabrikama u Belgiji i Italiji i poseduju prestižni evropski sertifikat Oeko-Tex® 100 - potvrdu o redovnoj proveri neškodljivosti materijala.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/CertiPUR RECOGNITION-OF-APPROVAL-RIF-Ametist-RU.pdf" target="_blank"><img src="https://www.sdream.rs/upload/CertiPUR-RECOGNITION-OF-APPROVAL-RIF-Ametist-RUimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://certipur.com/certipur.html" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">CertiPUR</h3></a><div class="col-xs-12 col-sm-2"><a href="http://certipur.com/certipur.html" target="_blank"><img src="https://www.sdream.rs/upload/certipur.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Nezavisna laboratorija koja po principu slučajnog uzorka sunđera ili pena (koji se kasnije mogu naći u finalnom proizvodu), određuje nivo štetnosti po ljudsko zdravlje.</p><p style="font-size: 20px;line-height: 24px;">Sertifikat je prvensdtveno namenjem evropskim proizvođačima sunđera.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545.pdf" target="_blank"><img src="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.tuv.com/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">TÜV Rheinland</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.tuv.com/" target="_blank"><img src="https://www.sdream.rs/upload/tuv.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Ovim sertifikatom je potvrđeno, da je sadržaj organskih materija u našim sunđerima prihvatljiv i da nije štetan po ljudsko zdravlje.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Report-2.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Report-2img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.ivf.se/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">swereaIVF</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.ivf.se/" target="_blank"><img src="https://www.sdream.rs/upload/swerea.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;padding-top: 40px;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">U ovoj laboratoriji smo ispitivali koliki je gubitak tvrdoće sunđera usled korišćenja.</p><p style="font-size: 20px;line-height: 24px;">Takođe smo ispitali i da li sunjer gubi na debljini usled korišćenja. Sve analize su pokazale da naši sunđeri zadržavaju karakteristike sa kojima su proizvedeni i usled korišćenja.</p></div></div></div></div></div></div></div>';
								$('.borderZ').parent().remove();
								document.getElementById('sertifikatiZen').className += ' activePageZen';
							var stateObj = {path:newurl};
							window.history.pushState(stateObj,null,newurl);
							activeZen();
							document.title = 'Certificates - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/certificates")>= 0){
								document.getElementById('columns').innerHTML ='<div id="columns" class="container"><style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""><h1 class="zukiraZo">Sertifikati</h1> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/sumarski.pdf" target="_blank"><img src="https://www.sdream.rs/upload/sumarskiimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 44px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">Šumarski fakultet - Beograd</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/sumarski2img.png" alt="Sumarski Beograd" class="img-responsive"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 8px;line-height: 24px;">Šumarski fakultet, Univerziteta u Beogradu je na zahtev kompanije Vapeks doo, kontrolisao kvalitet svakog dušeka proizvedenog pod brendom S) Dream. Ovim je utvrđeno da svi materijali koji se kod nas koriste nisu štetni po zdravlje ljudi.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">OEKOTEX 100 sertifikat</h3></a><div class="col-xs-12 col-sm-2"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/Materials-TEXTILES-VERTRAUEN2img.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Sve tkanine su proizvedene u specijalizovanim fabrikama u Belgiji i Italiji i poseduju prestižni evropski sertifikat Oeko-Tex® 100 - potvrdu o redovnoj proveri neškodljivosti materijala.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/CertiPUR RECOGNITION-OF-APPROVAL-RIF-Ametist-RU.pdf" target="_blank"><img src="https://www.sdream.rs/upload/CertiPUR-RECOGNITION-OF-APPROVAL-RIF-Ametist-RUimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://certipur.com/certipur.html" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">CertiPUR</h3></a><div class="col-xs-12 col-sm-2"><a href="http://certipur.com/certipur.html" target="_blank"><img src="https://www.sdream.rs/upload/certipur.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Nezavisna laboratorija koja po principu slučajnog uzorka sunđera ili pena (koji se kasnije mogu naći u finalnom proizvodu), određuje nivo štetnosti po ljudsko zdravlje.</p><p style="font-size: 20px;line-height: 24px;">Sertifikat je prvensdtveno namenjem evropskim proizvođačima sunđera.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545.pdf" target="_blank"><img src="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.tuv.com/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">TÜV Rheinland</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.tuv.com/" target="_blank"><img src="https://www.sdream.rs/upload/tuv.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Ovim sertifikatom je potvrđeno, da je sadržaj organskih materija u našim sunđerima prihvatljiv i da nije štetan po ljudsko zdravlje.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Report-2.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Report-2img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.ivf.se/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">swereaIVF</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.ivf.se/" target="_blank"><img src="https://www.sdream.rs/upload/swerea.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;padding-top: 40px;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">U ovoj laboratoriji smo ispitivali koliki je gubitak tvrdoće sunđera usled korišćenja.</p><p style="font-size: 20px;line-height: 24px;">Takođe smo ispitali i da li sunjer gubi na debljini usled korišćenja. Sve analize su pokazale da naši sunđeri zadržavaju karakteristike sa kojima su proizvedeni i usled korišćenja.</p></div></div></div></div></div></div></div>';
								document.getElementById('sertifikatiZen').className += ' activePageZen';
								$('.borderZ').parent().remove();

								document.title = 'Certificates - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
											activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
		
	}
	
	
function sertifikatiZ(){
			
	
var xzy = window.location.href; 
			if (xzy.indexOf("/certificates/") >= 0) {} 
			else {
					if (history.pushState) {
						var historyTitle = document.title;
						var historyz = document.getElementById('columns').innerHTML;
						var urlZen = window.location.href;
							if(urlZen.indexOf('/en/')>= 0){var newurl = window.location.protocol + "//" + window.location.host + '/en/' + 'certificates/';}
							else {newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'certificates/';}
								document.getElementById('columns').innerHTML ='<div id="columns" class="container"><style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""><h1 class="zukiraZo">Sertifikati</h1> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/sumarski.pdf" target="_blank"><img src="https://www.sdream.rs/upload/sumarskiimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 44px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">Šumarski fakultet - Beograd</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/sumarski2img.png" alt="Sumarski Beograd" class="img-responsive"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 8px;line-height: 24px;">Šumarski fakultet, Univerziteta u Beogradu je na zahtev kompanije Vapeks doo, kontrolisao kvalitet svakog dušeka proizvedenog pod brendom S) Dream. Ovim je utvrđeno da svi materijali koji se kod nas koriste nisu štetni po zdravlje ljudi.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">OEKOTEX 100 sertifikat</h3></a><div class="col-xs-12 col-sm-2"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/Materials-TEXTILES-VERTRAUEN2img.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Sve tkanine su proizvedene u specijalizovanim fabrikama u Belgiji i Italiji i poseduju prestižni evropski sertifikat Oeko-Tex® 100 - potvrdu o redovnoj proveri neškodljivosti materijala.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/CertiPUR RECOGNITION-OF-APPROVAL-RIF-Ametist-RU.pdf" target="_blank"><img src="https://www.sdream.rs/upload/CertiPUR-RECOGNITION-OF-APPROVAL-RIF-Ametist-RUimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://certipur.com/certipur.html" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">CertiPUR</h3></a><div class="col-xs-12 col-sm-2"><a href="http://certipur.com/certipur.html" target="_blank"><img src="https://www.sdream.rs/upload/certipur.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Nezavisna laboratorija koja po principu slučajnog uzorka sunđera ili pena (koji se kasnije mogu naći u finalnom proizvodu), određuje nivo štetnosti po ljudsko zdravlje.</p><p style="font-size: 20px;line-height: 24px;">Sertifikat je prvensdtveno namenjem evropskim proizvođačima sunđera.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545.pdf" target="_blank"><img src="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.tuv.com/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">TÜV Rheinland</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.tuv.com/" target="_blank"><img src="https://www.sdream.rs/upload/tuv.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Ovim sertifikatom je potvrđeno, da je sadržaj organskih materija u našim sunđerima prihvatljiv i da nije štetan po ljudsko zdravlje.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Report-2.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Report-2img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.ivf.se/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">swereaIVF</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.ivf.se/" target="_blank"><img src="https://www.sdream.rs/upload/swerea.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;padding-top: 40px;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">U ovoj laboratoriji smo ispitivali koliki je gubitak tvrdoće sunđera usled korišćenja.</p><p style="font-size: 20px;line-height: 24px;">Takođe smo ispitali i da li sunjer gubi na debljini usled korišćenja. Sve analize su pokazale da naši sunđeri zadržavaju karakteristike sa kojima su proizvedeni i usled korišćenja.</p></div></div></div></div></div></div></div>';
								$('.borderZ').parent().remove();
								document.getElementById('sertifikatiZen').className += ' activePageZen';
								codeAddress2a();
							var stateObj = {path:newurl};
							activeZen();
							window.history.pushState(stateObj,null,newurl);
							document.title = 'Certificates - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);			
							}
						window.onpopstate = function(event) {
							var xzy = window.location.href;
						if(xzy.indexOf("/certificates")>= 0){
								document.getElementById('columns').innerHTML ='<div id="columns" class="container"><style>.prva{margin-top:16px;}.prva::before{content: " "; background:url(https://www.sdream.rs/upload/1.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.druga::before{content: " "; background:url(https://www.sdream.rs/upload/2.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.treca::before{content: " "; background:url(https://www.sdream.rs/upload/3.png); width: 30px; height: 15px; display: inline-block; background-repeat: no-repeat;}.productListingZ{list-style:none;}.video-container{margin-left:15px; margin-right:15px; position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden;}.video-container iframe, .video-container object, .video-container embed{position:absolute; top:0; left:0; width:100%; height:100%;}.leftZZ{margin-bottom:12px; font-family: myFirstFont2!important; font-size:15px; text-align:justify;}.zukiraZo{margin-bottom:32px; font-weight:bold;border-bottom:2px solid #606060;color:#f06423;}</style><div id="columns" class="container"> <div class="row"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""><h1 class="zukiraZo">Sertifikati</h1> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/sumarski.pdf" target="_blank"><img src="https://www.sdream.rs/upload/sumarskiimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 44px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">Šumarski fakultet - Beograd</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/sumarski2img.png" alt="Sumarski Beograd" class="img-responsive"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 8px;line-height: 24px;">Šumarski fakultet, Univerziteta u Beogradu je na zahtev kompanije Vapeks doo, kontrolisao kvalitet svakog dušeka proizvedenog pod brendom S) Dream. Ovim je utvrđeno da svi materijali koji se kod nas koriste nisu štetni po zdravlje ljudi.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Certificat_UK_CQ_1114-1img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">OEKOTEX 100 sertifikat</h3></a><div class="col-xs-12 col-sm-2"><a href="http://www.sfb.bg.ac.rs/" target="_blank"><img src="https://www.sdream.rs/upload/Materials-TEXTILES-VERTRAUEN2img.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Sve tkanine su proizvedene u specijalizovanim fabrikama u Belgiji i Italiji i poseduju prestižni evropski sertifikat Oeko-Tex® 100 - potvrdu o redovnoj proveri neškodljivosti materijala.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/CertiPUR RECOGNITION-OF-APPROVAL-RIF-Ametist-RU.pdf" target="_blank"><img src="https://www.sdream.rs/upload/CertiPUR-RECOGNITION-OF-APPROVAL-RIF-Ametist-RUimg.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://certipur.com/certipur.html" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">CertiPUR</h3></a><div class="col-xs-12 col-sm-2"><a href="http://certipur.com/certipur.html" target="_blank"><img src="https://www.sdream.rs/upload/certipur.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Nezavisna laboratorija koja po principu slučajnog uzorka sunđera ili pena (koji se kasnije mogu naći u finalnom proizvodu), određuje nivo štetnosti po ljudsko zdravlje.</p><p style="font-size: 20px;line-height: 24px;">Sertifikat je prvensdtveno namenjem evropskim proizvođačima sunđera.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545.pdf" target="_blank"><img src="https://www.sdream.rs/upload/IKEA-test-T-VAPEN-T-3545img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.tuv.com/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">TÜV Rheinland</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.tuv.com/" target="_blank"><img src="https://www.sdream.rs/upload/tuv.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">Ovim sertifikatom je potvrđeno, da je sadržaj organskih materija u našim sunđerima prihvatljiv i da nije štetan po ljudsko zdravlje.</p></div></div></div></div></div><div class="row" style=" margin-top: 32px;"> <div id="center_column" class="center_column col-xs-12 col-sm-12" style=""> <div class="col-xs-12 col-sm-2"><a href="https://www.sdream.rs/upload/Report-2.pdf" target="_blank"><img src="https://www.sdream.rs/upload/Report-2img.jpg" class="img-responsive" style="width: 100%;border:1px solid rgba(6,4,3,0.1);"></a></div><div class="col-xs-12 col-sm-10" style=" padding: 0px!important;"><div class="col-xs-12 col-sm-12" style=" padding: 0px;"><a href="http://www.ivf.se/" target="_blank"><h3 style="width:100%;margin-bottom: 32px;border-bottom: 1px solid #606060;color: #f06423;font-weight: 600;">swereaIVF</h3></a><div class="col-xs-12 col-sm-4"><a href="http://www.ivf.se/" target="_blank"><img src="https://www.sdream.rs/upload/swerea.png" alt="Sumarski Beograd" class="img-responsive" style="margin: 0 auto;padding-top: 40px;"></a></div><div class="col-xs-12 col-sm-8" style=" padding: 0px; text-align: justify;"><p style="font-size: 20px;margin-top: 24px;line-height: 24px;">U ovoj laboratoriji smo ispitivali koliki je gubitak tvrdoće sunđera usled korišćenja.</p><p style="font-size: 20px;line-height: 24px;">Takođe smo ispitali i da li sunjer gubi na debljini usled korišćenja. Sve analize su pokazale da naši sunđeri zadržavaju karakteristike sa kojima su proizvedeni i usled korišćenja.</p></div></div></div></div></div></div></div>';
								document.getElementById('sertifikatiZen').className += ' activePageZen';
								$('.borderZ').parent().remove();
								codeAddress2a();
								document.title = 'Certificates - S Dream Shop';	
								$('html, body').animate({scrollTop: '0px'}, 300);									
						} 
						else {
								$('.borderZ').parent().remove();document.getElementById('columns').innerHTML=historyz;
								document.title = historyTitle;
						activeZen();
								$('html, body').animate({scrollTop: '0px'}, 300);									
							
						
							}
			};
	
			}
		
	}

function open1(){ if($('#open1').height() < 50) {$('#open1').css('height','195px');$('.toggle-footer').css('display','block');document.getElementById("iO1").style.transform = "rotate(180deg)";} else {$('#open1').css('height','36px');document.getElementById("iO1").style.transform = "rotate(360deg)";} }
function open2(){ if($('#open2').height() < 50) {$('#open2').css('height','210px');$('.toggle-footer').css('display','block');document.getElementById("iO2").style.transform = "rotate(180deg)";} else {$('#open2').css('height','36px');document.getElementById("iO2").style.transform = "rotate(360deg)";} }
function open3(){ if($('#open3').height() < 50) {$('#open3').css('height','125px');$('.toggle-footer').css('display','block');document.getElementById("iO3").style.transform = "rotate(180deg)";} else {$('#open3').css('height','36px');document.getElementById("iO3").style.transform = "rotate(360deg)";} }
function open4(){ if($('#open4').height() < 50) {$('#open4').css('height','115px');$('.toggle-footer').css('display','block');document.getElementById("iO4").style.transform = "rotate(180deg)";} else {$('#open4').css('height','36px');document.getElementById("iO4").style.transform = "rotate(360deg)";} }
function open5(){ if($('#open5').height() < 50) {$('#open5').css('height','175px');$('.toggle-footer').css('display','block');document.getElementById("iO5").style.transform = "rotate(180deg)";} else {$('#open5').css('height','36px');document.getElementById("iO5").style.transform = "rotate(360deg)";} }


$('#page').css('transition','0.3s');
		if ($('#logonZ').length > 0) {
		 	    var loginFormationZ ='<div style="background:rgba(0,0,0,.5);transition:.3s;transition:.5s;width:100vw;height:100%;position:fixed;z-index:1000000" id="guzanaC"> <div> <div> <div style="margin:0 auto;float:none!important" id="center_column"> <div style="transition: 0.5s; padding-top: 1500px;" id="guzonjaPrmpi"> <div style="width:300px;margin:0 auto"> <p style="position:relative;left:272px;top:39px;z-index:9;display:block" id="guzankaZ3" onclick="krkanka3()"> <i class="fa fa-2x fa-times-circle-o" aria-hidden="true" style="color:#f06423"> </i> </p><form action="https://www.sdream.rs/sr/login" autocomplete="off" class="box" id="login_form" method="post" pb-autologin="true"> <h3 class="page-subheading" style="border-bottom:0 solid #000;font-size:29px;text-transform:none!important;position:relative;left:81px;font-family:myFirstFont2!important;color:#000">Sing in </h3> <div style="position:relative;bottom:14px" class="clearfix form_content"> <div class="form-group"> <label for="email" style="position:relative;top:7px">E-mail </label> <input class="account_input form-control is_required validate" name="email" type="email" data-validate="isEmail" id="email" pb-role="username" style="border-radius:3px!important"> <passwordboxicon pb-icon="username" icon-type="main" style="position: absolute; background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU4NUJBRkU1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU4NUJBRkQ1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5M0ZFMjdERDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5M0ZFMjdFRDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MHuEgAAAAWtJREFUeNq8VCFMxEAQ3DZ1RRdfSUBTcg6JwdfjeQsaJCXYDxZ03/+7BtD/BsMLDAFdXebu9r7bpnxLSZhkvr9719vu7uxRVVXUiUlxDUbCjo2vA/qMPvr0M17AI2En7BsFX3xxBIZi7Qk8FvYh+9z+sJHx4EBEMXiHlw+MlalP/M7E+ox9xHvu+Z1B8HT9PM+r+0B0CU5x6DP7FAcu2NYlPAOv4HtzPfpdIFcSIs2Sgy7Bd/DEHO7WMlVKMfRii+rOwVTYqfGNVF2wkbJUW6ZyPCNTwho5Z6j3n7I4HC76Egq4/l0bS5b0XMi75P05B7a46S9dsGXt0WQwKXbwfAVT7tEotFWnG637sDJfbUv0Be6Ba/jm7NsHb50ghojBb1wxdjZWXBo3pB/ggkvnyrbmmYvHDGxomuqC2Ox2zazYeYk3N0emHoTUB6HuUaaWrbWkceXY/7U4eFjHZEQdgRatSzb5kxj+A98CDADG3MBsPyzvawAAAABJRU5ErkJggg==&quot;) right center no-repeat; width: 30px; height: 27px; z-index: auto; visibility: visible; top: 135px; left: 275px;"> </passwordboxicon> </div><div style="position:relative;bottom:20px" class="form-group"> <label for="passwd" style="position:relative;top:7px">Password </label> <input class="account_input form-control is_required validate" name="passwd" type="password" data-validate="isPasswd" id="passwd" pb-role="password" style="border-radius:3px!important"> <passwordboxicon pb-icon="username" icon-type="main" style="position: absolute; background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU4NUJBRkU1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU4NUJBRkQ1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5M0ZFMjdERDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5M0ZFMjdFRDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MHuEgAAAAWtJREFUeNq8VCFMxEAQ3DZ1RRdfSUBTcg6JwdfjeQsaJCXYDxZ03/+7BtD/BsMLDAFdXebu9r7bpnxLSZhkvr9719vu7uxRVVXUiUlxDUbCjo2vA/qMPvr0M17AI2En7BsFX3xxBIZi7Qk8FvYh+9z+sJHx4EBEMXiHlw+MlalP/M7E+ox9xHvu+Z1B8HT9PM+r+0B0CU5x6DP7FAcu2NYlPAOv4HtzPfpdIFcSIs2Sgy7Bd/DEHO7WMlVKMfRii+rOwVTYqfGNVF2wkbJUW6ZyPCNTwho5Z6j3n7I4HC76Egq4/l0bS5b0XMi75P05B7a46S9dsGXt0WQwKXbwfAVT7tEotFWnG637sDJfbUv0Be6Ba/jm7NsHb50ghojBb1wxdjZWXBo3pB/ggkvnyrbmmYvHDGxomuqC2Ox2zazYeYk3N0emHoTUB6HuUaaWrbWkceXY/7U4eFjHZEQdgRatSzb5kxj+A98CDADG3MBsPyzvawAAAABJRU5ErkJggg==&quot;) right center no-repeat; width: 30px; height: 27px; z-index: auto; visibility: visible; top: 107px; left: 275px;"> </passwordboxicon> </div><p style="position:relative;bottom:33px" class="form-group lost_password"> <a href="https://www.sdream.rs/sr/password-recovery" rel="nofollow" style="color:#f06423;font-weight:900;font-size:12px" title="Povratite vašu zaboravljenu lozinku">Reset password </a> </p><p class="submit"> <input class="hidden" name="back" type="hidden" value="my-account"> <button class="btn btn-default button button-medium" id="SubmitLogin" name="SubmitLogin" pb-role="submit" type="submit" style=" WIDTH: 100%;"> <span> Sing in </span> </button> </p></div></form> </div><div style="width: 300px; margin: 0px auto; height: 65px; overflow: hidden;" id="guzankaZorg"> <p style="position: relative; left: 273px; top: 37px; z-index: 9; display: block;" id="guzankaZ" onclick="krkanka()" class="kukuruzara"> <i class="fa fa-2x fa-arrow-circle-o-down" aria-hidden="true" style="color:#f06423"> </i> </p><p style="position: relative; left: 273px; top: 37px; z-index: 9; display: none;" id="guzankaZ2" onclick="krkanka2()"> <i class="fa fa-2x fa-arrow-circle-o-up" aria-hidden="true" style="color:#f06423"> </i> </p><form action="https://www.sdream.rs/sr/login" autocomplete="off" class="box" id="create-account_form" method="post" pb-autologin="true"> <h3 class="page-subheading" style="position:relative;left:63px;bottom:29px;z-index:1;border-bottom:0 solid #fff;text-transform:none;color:#f06423;font-weight:900;font-family:myFirstFont2!important; cursor:pointer;" onclick="krkanka()">Register here </h3> <div style="position:relative;bottom:41px" class="clearfix form_content"> <p>Enter your e-mail address to create account </p><div style="display:none" id="create_account_error" class="alert alert-danger"> </div><div class="form-group"> <label for="email_create" style="position:relative;top:7px">E-mail adress </label> <input class="account_input form-control is_required validate" name="email_create" type="email" data-validate="isEmail" id="email_create" pb-role="username" style="border-radius:3px!important"> <passwordboxicon pb-icon="password" icon-type="main" style="position: absolute; background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU4NUJBRkU1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU4NUJBRkQ1QkVFMTFFNDkyRkVDMDk0Nzk5RDFBMDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5M0ZFMjdERDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5M0ZFMjdFRDI5NDExRTE5Njc0OTU4Rjk3NzgwODJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MHuEgAAAAWtJREFUeNq8VCFMxEAQ3DZ1RRdfSUBTcg6JwdfjeQsaJCXYDxZ03/+7BtD/BsMLDAFdXebu9r7bpnxLSZhkvr9719vu7uxRVVXUiUlxDUbCjo2vA/qMPvr0M17AI2En7BsFX3xxBIZi7Qk8FvYh+9z+sJHx4EBEMXiHlw+MlalP/M7E+ox9xHvu+Z1B8HT9PM+r+0B0CU5x6DP7FAcu2NYlPAOv4HtzPfpdIFcSIs2Sgy7Bd/DEHO7WMlVKMfRii+rOwVTYqfGNVF2wkbJUW6ZyPCNTwho5Z6j3n7I4HC76Egq4/l0bS5b0XMi75P05B7a46S9dsGXt0WQwKXbwfAVT7tEotFWnG637sDJfbUv0Be6Ba/jm7NsHb50ghojBb1wxdjZWXBo3pB/ggkvnyrbmmYvHDGxomuqC2Ox2zazYeYk3N0emHoTUB6HuUaaWrbWkceXY/7U4eFjHZEQdgRatSzb5kxj+A98CDADG3MBsPyzvawAAAABJRU5ErkJggg==&quot;) right center no-repeat; width: 30px; height: 27px; z-index: auto; visibility: visible; top: 162px; left: 275px;"> </passwordboxicon> </div><div class="submit"> <input class="hidden" name="back" type="hidden"> <button class="btn btn-default button button-medium exclusive" id="SubmitCreate" name="SubmitCreate" pb-role="submit" type="submit" style=" width: 100%;"> <span style=""> Create account </span> </button> <input class="hidden" name="SubmitCreate" type="hidden" value="Create account"> </div></div></form> </div></div></div></div></div></div>';
		 document.getElementById("logonZ").onclick = function () {

 $( "#page" ).prepend(loginFormationZ);
var zuzunka =  ($(window).height()-342)/2 - 36 +'px';
 $('#guzonjaPrmpi').css('padding-top',zuzunka);


				}
				
				
}	


 function krkanka() {
  $("#guzankaZorg").css('height','220px');
  $("#guzankaZorg").css('overflow','hidden');
  $("#guzankaZ").css('display','none');
  $("#guzankaZ2").css('display','block');
	 var zuzunka2 =  ($(window).height()-497)/2 - 36 +'px';
 $('#guzonjaPrmpi').css('padding-top',zuzunka2);
}

 function krkanka2() {
  $("#guzankaZorg").css('height','65px');
  $("#guzankaZorg").css('overflow','hidden');
  $("#guzankaZ2").css('display','none');
  $("#guzankaZ").css('display','block');
var zuzunka3 =  ($(window).height()-342)/2 - 36 +'px';
 $('#guzonjaPrmpi').css('padding-top',zuzunka3);
}

 function krkanka3() {
   $('#guzonjaPrmpi').css('margin-top','-661px');
 setTimeout(function(){ $("#guzanaC").remove(); }, 480);
 

  
 

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	$('#iO5').css('transition-delay','0.1s');
	document.getElementById("iO5").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";$('#iO5').css('transition-delay','0.1s');
	document.getElementById("iO5").style.display = "none";
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
        closeNav();
    }
});

	$( "#oNamaZen" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});
$( "#maloZ" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});
$( "#maloZ2" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});
$( "#maloZ3" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});	
	
$( "#kakoOdabratiZen1" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});
$( "#kakoOdabratiZen3" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});
$( "#kakoOdabratiZen2" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});	
$( "#partneriZen" ).contextmenu(function(event) {
		event.stopPropagation();
		event.preventDefault();
});	


$( ".nav-dropdown-container" ).hover(
  function() {
    $( this ).parent().find('.krkiNZ').css( 'color','#f06423' );
  }, function() {
     $( this ).parent().find('.krkiNZ').css( 'color','#777' );
  }
);	
			var xzy = window.location.href;
 if (xzy.indexOf("/contact-us") >= 0) {
			
							document.getElementById('kontaktZen1').className += ' activePageZen2';	
							document.getElementById('kontaktZen2').className += ' activePageZen';
 }

  if (xzy.indexOf("/specials") >= 0) {
			
							document.getElementById('akcijeZen').className += ' activePageZen2';	
						
 }
  if (xzy.indexOf("/covering/") >= 0) {
			
							document.getElementById('navlakeZen1').className += ' activePageZen2';	
							document.getElementById('navlakeZen2').className += ' activePageZen';
 }
 if (xzy.indexOf("/mattress-toppers/") >= 0) {
			
							document.getElementById('nadduseciZen1').className += ' activePageZen2';	
							document.getElementById('nadduseciZen2').className += ' activePageZen';
 }
  if (xzy.indexOf("/pillows/") >= 0) {
			
							document.getElementById('jastuciZen1').className += ' activePageZen2';	
							document.getElementById('jastuciZen2').className += ' activePageZen';
 }
  if (xzy.indexOf("/mattresses/") >= 0) {
			
							document.getElementById('duseciZen1').className += ' activePageZen2';	
							document.getElementById('duseciZen2').className += ' activePageZen';
 }
 if (xzy.indexOf("/foam-mattresses/") >= 0) {
							$('.content_scene_cat').css('display','none');
							document.getElementById('duseciOdPeneZen2').className += ' activePageZen2';	
							document.getElementById('duseciOdPeneZen1').className += ' activePageZen';
 }
  if (xzy.indexOf("/pocket-sprung-core-mattresses/") >= 0) {
							$('.content_scene_cat').css('display','none');
							document.getElementById('duseciSaDzepastimJezgromZen1').className += ' activePageZen2';	
							document.getElementById('duseciSaDzepastimJezgromZen2').className += ' activePageZen';
 }
   if (xzy.indexOf("/bonnel-spring-mattresses/") >= 0) {
							$('.content_scene_cat').css('display','none');
							document.getElementById('duseciSaZicanimJezgromZen1').className += ' activePageZen2';	
							document.getElementById('duseciSaZicanimJezgromZen2').className += ' activePageZen';
 }
    if (xzy.indexOf("/children-s-mattresses/") >= 0) {
							$('.content_scene_cat').css('display','none');
							document.getElementById('decijiDuseciZen1').className += ' activePageZen2';	
							document.getElementById('decijiDuseciZen2').className += ' activePageZen';
 }
     if (xzy.indexOf("/apolon/") >= 0) {
			
							document.getElementById('apolonZ').className += ' activePageZen2';						
 }
  if (xzy.indexOf("/memo-prostirka/") >= 0) {
			
							document.getElementById('memoProstirkaZ').className += ' activePageZen2';						
 }
   if (xzy.indexOf("/afrodita/") >= 0) {
			
							document.getElementById('afroditaZ').className += ' activePageZen2';						
 }

     if (xzy.indexOf("/lux-24cm/") >= 0) {
			
							document.getElementById('luxZen').className += ' activePageZen2';						
 }
      if (xzy.indexOf("/kontur-mhr/") >= 0) {
			
							document.getElementById('mhrZen').className += ' activePageZen2';						
 }
 if (xzy.indexOf("/kontur-ms/") >= 0) {
			
							document.getElementById('msZen').className += ' activePageZen2';						
 }
       if (xzy.indexOf("/memorisan/") >= 0) {
			
							document.getElementById('memorisanZen').className += ' activePageZen2';						
 }
        if (xzy.indexOf("/sweet-dream/") >= 0) {
			
							document.getElementById('sweetDreamZen').className += ' activePageZen2';						
 }
         if (xzy.indexOf("/memo-cool-classic/") >= 0) {
			
							document.getElementById('memoCoolClassicZen').className += ' activePageZen2';						
 }
          if (xzy.indexOf("/memo-cool-kontur/") >= 0) {
			
							document.getElementById('memoCoolKonturZen').className += ' activePageZen2';						
 }
  if (xzy.indexOf("/softy/") >= 0) {
			
							document.getElementById('sofyZen').className += ' activePageZen2';						
 }
  if (xzy.indexOf("/naddusek-memo-4-4cm/") >= 0) {
			
							document.getElementById('memo44Zen').className += ' activePageZen2';						
 }
   if (xzy.indexOf("/naddusek-memo-soft-5cm/") >= 0) {
			
							document.getElementById('memoSoftZen').className += ' activePageZen2';						
 }
 if (xzy.indexOf("/naddusek-memo-7-7cm/") >= 0) {
			
							document.getElementById('memoZen77').className += ' activePageZen2';						
 }
  if (xzy.indexOf("/naddusek-hr-4-4cm/") >= 0) {
			
							document.getElementById('hr44cmZen').className += ' activePageZen2';						
 }
   if (xzy.indexOf("/naddusek-soft-4-4cm/") >= 0) {
			
							document.getElementById('softZenZen').className += ' activePageZen2';						
 }
    if (xzy.indexOf("/step-deka/") >= 0) {
			
							document.getElementById('stepDekaZen').className += ' activePageZen2';						
 }
     if (xzy.indexOf("/order-history") >= 0) {
			
							document.getElementById('orderHistoryZen').className += ' activePageZen';						
 }
      if (xzy.indexOf("/identity") >= 0) {
			
							document.getElementById('identityZen').className += ' activePageZen';						
 }
 if (xzy.indexOf("/discount") >= 0) {
			
							document.getElementById('discountZen').className += ' activePageZen';						
 }