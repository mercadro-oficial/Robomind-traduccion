$(function(){
	$("nav").find('.link-'+page).addClass('selected');
	$("#nav-mobile").change(function(){
		document.location.href = http+this.value;
	});

	$('#botao-menu-mobile').on('click',function(){
		$("#nav-mobile").fadeIn();
	});
	$("#fechar-nav").on('click',function(){
		$("#nav-mobile").fadeOut();
	});

	if (page == 'index'){
		$('.link-home').addClass('selected');

		$('.noticia').on('click',function(){
			window.location.href = $(this).find('a').attr('href');
		});
	} else if (page == 'noticias'){
		$('.item-noticia').on('click',function(){
			window.location.href = $(this).find('a').attr('href');
		});
	} else if (page == 'fale-conosco'){
		$("#form-contato").on('submit',function(){
			var campo = this.nome;

			if (is_empty(campo)){
				showError(campo,'Por favor informe seu nome!');
				return false;
			}

			campo = this.email;

			if (is_empty(campo)){
				showError(campo,'Por favor informe seu email!');
				return false;
			} else if (!validaMail(campo.value)){
				showError(campo,'Por favor informe um email válido!');
				return false;
			}

			campo = this.estado;

			if (is_empty(campo)){
				showError(campo,'Por favor informe seu estado!');
				return false;
			}

			campo = this.cidade;

			if (is_empty(campo)){
				showError(campo,'Por favor informe sua cidade!');
				return false;
			}

			campo = this.mensagem;

			if (is_empty(campo)){
				showError(campo,'Por favor informe sua mensagem!');
				return false;
			}

			campo = this.termos;
			if (!this.termos.checked){
				showError(campo,'É necessário concordar com os termos e condições de uso antes de enviar sua mensagem!');
				return false;
			}

			return true;
		});
	}

	$("#form-parceiros").on('submit',function(){
		var Form = $(this);
		var campo = this.nome;

		if (is_empty(campo)){
			showError(campo,'Por favor informe seu nome!');
			return false;
		}

		campo = this.email;

		if (is_empty(campo)){
			showError(campo,'Por favor informe seu email!');
			return false;
		} else if (!validaMail(campo.value)){
			showError(campo,'Por favor informe um email válido!');
			return false;
		}

		campo = this.telefone;

		if (is_empty(campo)){
			showError(campo,'Por favor informe seu telefone!');
			return false;
		}

		campo = this.estado;

		if (is_empty(campo)){
			showError(campo,'Por favor informe seu estado!');
			return false;
		}

		campo = this.cidade;

		if (is_empty(campo)){
			showError(campo,'Por favor informe sua cidade!');
			return false;
		}

		campo = this.mensagem;

		if (is_empty(campo)){
			showError(campo,'Por favor informe sua mensagem!');
			return false;
		}
		var data = $(this).serializeArray();
		$.post('cadastro/parceiro',data,function(json){
			if (json.status){
				Form.replaceWith('<div class="sucesso">Seu cadastro foi efetuado com sucesso!<br>Entraremos em contato para mais informações.</div>');
			} else {
				alert(json.msg);
			}
		});

		return false;
	});

	$("#form-pre-matricula").on('submit',function(){
		var Form = $(this);

		var campo = this.nome_responsavel;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o nome do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.cpf;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o CPF do responsável!','retorno-responsavel');
			return false;
		} else if ((msg = validaCPF(campo.value)) !== true){
			showError(campo,msg,'retorno-responsavel');
			return false;
		}

		campo = this.cep;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o CEP do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.endereco;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o endereço do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.numero;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o número residencial do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.bairro;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o bairro do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.cidade;
		if (is_empty(campo)){
			showError(campo,'Por favor informe a cidade do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.estado;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o estado do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.celular;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o número do celular do responsável!','retorno-responsavel');
			return false;
		}

		campo = this.email;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o email do responsável!','retorno-responsavel');
			return false;
		} else if (!validaMail(campo.value)){
			showError(campo,'Por favor informe um email válido!','retorno-responsavel');
			return false;
		}

		campo = this.nome_aluno;
		if (is_empty(campo)){
			showError(campo,'Por favor informe o nome do(a) aluno(a)!','retorno-aluno');
			return false;
		}

		campo = this.dataNasc;
		if (is_empty(campo)){
			showError(campo,'Por favor informe a data de nascimento do(a) aluno(a)!','retorno-aluno');
			return false;
		} else if ((msg = valida_data(campo)) !== true){
			showError(campo,msg);
			return false;
		}

		campo = this.escola;
		if (is_empty(campo)){
			showError(campo,'Por favor informe a escola do(a) aluno(a)!','retorno-aluno');
			return false;
		}

		campo = this.curso;
		if (campo.value == ''){
			showError(campo,'Por favor selecione o ano escolar do(a) aluno(a)!','form-retorno');
			return false;
		}

		campo = this.periodo;
		if (campo.value == ''){
			showError(campo,'Por favor selecione o período desejado para realizar o curso!','form-retorno');
			return false;
		}

		campo = this.autorizacao;
		if (!this.autorizacao.checked){
			showError(campo,'É necessário autorizar o processamento de seus dados informados para continuar!');
			return false;
		}

		campo = this.representacao;
		if (!this.representacao.checked){
			showError(campo,'É necessário autorizar o processamento dos dados do(a) estudante informados para continuar!');
			return false;
		}

		campo = this.termos;
		if (!$(campo).is(':checked')){
			showError(campo,'É necessário ler e concordar com nossos termos para continuar!','form-retorno');
			return false;
		}

		var data = $(this).serializeArray();
		$.post('matricula',data,function(json){
			if (json.status){
				Form.replaceWith('<div class="sucesso">Seu cadastro foi efetuado com sucesso!<br>Entraremos em contato para mais informações.</div>');
			} else {
				alert(json.msg);
			}
		});

		return false;
	});

	if ($("select#estado").length > 0){
		$("#estado").on('change',function(){
			$.getJSON(this.value+'/cidades',function(json){
				var $cidade = $('#cidade');
				$cidade.find('option:not(:first)').remove();
				var opt;
				var cidades = json.cidades;
				var selecionado = !!$cidade.attr('data-cidade')?$cidade.attr('data-cidade'):'';
				for (var x = 0, size = cidades.length; x < size; x++){
					opt = document.createElement('OPTION');
					opt.value = cidades[x].id;
					opt.text = cidades[x].cidade;
					if (selecionado == cidades[x].cidade) opt.selected = 'selected';
					$cidade.append(opt);
				}
			});
		});
	}
});

window.onload = function(){
	$(window).on('scroll',function(e){
		var top = $(this).scrollTop();
		if (top >= 136){
			$('header').addClass('fixo');
		} else {
			$('header').removeClass('fixo');
		}
	});
	loadJS('js/jquery.mask.min.js','script',function(){
		var SPMaskBehavior = function(val){
		 	return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
		spOptions = {
			onKeyPress : function(val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};
		$('#telefone,#celular,#celular2').mask(SPMaskBehavior, spOptions);

		$('.qtd').mask('0999', {reverse: false});
		$('input.data').mask('00/00/0000');
		$('#cep').mask('00000-000', {reverse: false,onComplete: function(cep){
			$.getJSON('https://viacep.com.br/ws/'+cep+'/json/',function(json){
				if (json.erro == undefined){
					$('#endereco').val(json.logradouro);
					$('#bairro').val(json.bairro);
					$('#cidade').val(json.localidade).attr('data-cidade',json.localidade);
					$('#estado').val(json.uf);
					$('#numero').focus();

					if ($("select#estado").length > 0){
						$("#estado").change();
					}
				}
			});
		}});

		//formata o campo para CPF
		$('#cpf').mask('000.000.000-00', {reverse: false});
	});

	// Os links com classe ancora ignoram o link e rolam na página
	$('body').on('click','.ancora',function(e){
		var href = $(this).attr('href');

		if (href.match(/^#/)){
			e.preventDefault();
			$('html,body').animate({scrollTop:$(href).offset().top - 81},500);
			return false;
		}
		return true;
	});
	// Adiciona e anima as barras de lego
	if ($('.divisoria').length > 0){
		$('.divisoria').prepend($('<div class="barra" />'));
		$(window).on('scroll',function(){
			var top = $(this).scrollTop();
			var position = top/3;
			$('.barra').css('background-position-x',position+'px');
		});
	}

	$('.iframe[data-src]').each(function(){
		var iframe = $('<iframe />').attr('src',$(this).data('src'));
		$(this).replaceWith(iframe);
	});

	if ($('#banners').length > 0){
		loadJS('js/jquery.cycle2.min.js','script',function(){
			$('#banners').each(function(){
				$(this).cycle({
					log: false,
					fx: 'fade',
					slides: '> figure',
					speed: 1000,
					prev: '#prev-banner',
					next: '#next-banner'
				});
			});
			if ($('.banner').length > 1){
				$("#prev-banner,#next-banner").show();
			}
			var $height = $('header').outerHeight();

			$(window).on('resize',function(){
				var width = $(this).width();
				var height = $(this).height();
				$("#banners").find('figure[data-img]').each(function(){

					var img = $(this).data('img');
					var mobile = $(this).data('mobile');
					if (width <= 960){
						img = 'mobile/'+mobile;
						$('#banners').height(Math.min(width/2,480));
					} else if (width <= 1360) {
						img = '1360/'+img;
						$('#banners').height(Math.min(width/(1920/790),790));
					} else {
						$('#banners').height(Math.min(width/(1920/790),790));
						img = '1920/'+img;
					}

					$(this).css('background-image','url("img/banners/'+img+'")');
				});
				if ($('#video-banner').length > 0){
					// altura da janela - header inicial * redução p/ sobrar espaço embaixo
					$('#video-banner').height((height - $height) * 0.95);
				}
			}).resize();
		});
	}

	if (typeof(popup) != 'undefined' || $('.custombox').length > 0){
		loadJS('js/custombox.min.js','script',function(){
			loadCSS('css/custombox.min.css');
			box.init();

			if (typeof(popup) != 'undefined'){
				if (tipoPopup == 'img'){
					var a = $('<a href="img/popups/'+popup+'" data-url="'+popupUrl+'" class="custombox"></a>');
					box.load(a);
				} else {
					box.openHTML(popup,'33.75vw','60vw');
				}
			}
		});
	}

	loadJS('js/modernizr.js','script',function(){
		if (!Modernizr.input.placeholder) {
			$("[placeholder]:input").each(function(){
				if (!this.value){
					this.value = $(this).attr('placeholder');
				}
			}).on("focusin focusout",function(event){
				var holder = $(this).attr('placeholder');
				if (event.type == "focusin" && this.value == holder) {
					this.value = '';
				} else if (event.type == "focusout" && !this.value) {
					this.value = holder;
				}
			});
		}
	});

	if ($("#mapa-parceiros").length > 0){
		window.$parceiros = $('#lista-parceiros');

		$.getJSON('endereco',function(endereco){
			window.$robomind = endereco;
		});

		var msg = document.getElementById('msg');
		var map = document.getElementById('mapa-parceiros');
		SVGDoc = map.contentDocument;
		SVGRoot = SVGDoc.documentElement;

		estados = $(SVGRoot).find('.estado');
		legendas = $(SVGRoot).find('text');

		estados.click(function(evt){
			var estado = $(this).data('estado');
			if (this.hasClass('temParceiros')){
				carregaParceiros(estado);
			} else {
				semParceiros(estado);
			}
		});

		legendas.click(function(){
			var estado = this.id.replace('legenda-','');
			if (estados.filter('[data-estado="'+estado+'"]')[0].hasClass('temParceiros')){
				carregaParceiros(estado);
			} else {
				semParceiros(estado);
			}
		});

		$.getJSON('parceiros/estados',function(json){
			$(json.estados).each(function(){
				estados.filter('[data-estado="'+this+'"]')[0].addClass('temParceiros');
			});
		});
	}

	if (undefined !== qs.ancora){
		if ($('#'+qs.ancora).length > 0){
			// 80 = header fixo
			$('html,body').animate({scrollTop:$('#'+qs.ancora).offset().top - 80},800)
		}
	}

	if (page == 'index'){
		$.getJSON('instagram',function(json){
			var parent = $('#galeria-instagram');
			$(json.posts).each(function(){
				var a = $('<a class="item-instagram" href="'+this.link+'" target="_blank" rel="nofollow" title="'+this.data+' - '+this.caption+'" />');
				a.css('background-image','url("'+this.image+'")');
				parent.append(a);
			});
		});
	}
}

function carregaParceiros(estado){
	$parceiros.empty();

	var sigla = estado.toUpperCase();
	var div;
	$.getJSON(estado+'/parceiros',function(json){
		$parceiros.html('<div class="titulo">ROBOMIND EM '+sigla+':</div>');

		var estado = json.resultados.estado;
		var cidades = json.resultados.cidades;
		var parceiro;

		for (cidade in cidades){
			$parceiros.append('<div class="cidade">'+cidade.toLowerCase()+'</div>');
			for (x in cidades[cidade]){
				parceiro = cidades[cidade][x];
				div = $('<div class="item-parceiro" />');
				//div.append('<div class="nome">'+parceiro.nome+'</div>');
				if (!!parceiro.descricao) div.append('<div class="descricao">'+parceiro.descricao+'</div>');
				if (!!parceiro.email) div.append('<div class="email">E-mail: '+parceiro.email+'</div>');
				if (!!parceiro.telefone) div.append('<div class="telefone">Telefone: '+parceiro.telefone+'</div>');
				if (!!parceiro.site) div.append('<div class="site">Site: <a href="'+parceiro.site+'" target="_blank">'+parceiro.site+'</a></div>');

				$parceiros.append(div);
			}
		}

		if (estado.length > 0){
			$parceiros.append('<div class="cidade">Também em '+sigla+'</div>');
			for (x = 0, size = estado.length; x < size; x++){
				parceiro = estado[x];
				div = $('<div class="item-parceiro" />');
				//div.append('<div class="nome">'+parceiro.nome+'</div>');
				if (!!parceiro.descricao) div.append('<div class="descricao">'+parceiro.descricao+'</div>');
				if (!!parceiro.email) div.append('<div class="email">E-mail: '+parceiro.email+'</div>');
				if (!!parceiro.telefone) div.append('<div class="telefone">Telefone: '+parceiro.telefone+'</div>');
				if (!!parceiro.site) div.append('<div class="site">Site: <a href="'+parceiro.site+'" target="_blank">'+parceiro.site+'</a></div>');

				$parceiros.append(div);
			}
		}
		html = '<br><div>Se não atendemos sua cidade ainda, <a href="fale-conosco/">entre em contato</a> direto com a Robomind.</div>';
		$parceiros.append(html);
	});
}

function semParceiros(estado){
	$parceiros.empty();

	var sigla = estado.toUpperCase();
	$parceiros.html('<div class="titulo">ROBOMIND EM '+sigla+':</div>');
	$parceiros.append('<p>Atendimento direto com a Matriz</p>');
	$parceiros.append('<strong>'+$robomind.nome+'</strong><br>');
	
	$parceiros.append('E-mail: '+$robomind.email+'<br>');
	$parceiros.append('Telefone: '+$robomind.telefone+'<br>');
	$parceiros.append('WhatsApp: '+$robomind.whatsapp+'<br>');
	$parceiros.append('Endereço: '+$robomind.endereco+'<br>');
	$parceiros.append('Bairro '+$robomind.bairro+'<br>');
	$parceiros.append($robomind.cidade+'<br>');;

	$parceiros.append('<br>');
	$parceiros.append('<a href="#seja-um-parceiro" class="botao ancora">Seja um parceiro!</a>');
}

function showError(field,msg,retorno){
	if ($(field).parent().parent().siblings('.msgErro').length == 0){ // adiciona div se não existe
		var div = $('<div class="msgErro" />').html(msg);
		$(field).addClass('erro').focus().parent().parent().after(div);
	} else { // se existe, só atualiza a mensagem
		$(field).addClass('erro').focus().parent().parent().siblings('.msgErro').html(msg);
	}
	var marginTop = $(field).offset().top - $('header').outerHeight() - 20; // margin
	$('html,body').animate({scrollTop:marginTop+'px'},500);
	$(field).one('input',function(){ // Ao mudar o valor do campo, retira o erro
		$(this).removeClass('erro').parent().parent().siblings('.msgErro').remove();
		if (undefined !== retorno){
			$("#"+retorno).html('');
		} else {
			$('.retorno').html('');
		}
	});
	if (undefined !== retorno){
		$("#"+retorno).html(msg);
	} else {
		$('.retorno').html(msg);
	}
}

function is_empty(field){
	var value = field.value;
	var placeholder = field.getAttribute('placeholder');

	return ($.trim(value) == '' || (placeholder != '' && value == placeholder));
}

function validaCPF(cpf){
	var filtro = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/i;
	if (!filtro.test(cpf)){
		return "CPF inválido. Verifique se seu cpf foi digitado corretamente.";
	}

	cpf = cpf.replace(/[^\d]+/g, "");

	if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
	  	cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
	 	cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
	  	cpf == "88888888888" || cpf == "99999999999"){
	  	return "CPF inválido. Verifique se seu cpf foi digitado corretamente.";
	}

	soma = 0;
	for (i = 0; i < 9; i++){
		soma += parseInt(cpf.charAt(i)) * (10 - i);
	}
	resto = 11 - (soma % 11);
	if (resto == 10 || resto == 11){
		resto = 0;
	}
	if (resto != parseInt(cpf.charAt(9))){
		return "CPF inválido. Verifique se seu cpf foi digitado corretamente.";
	}
	soma = 0;
	for (i = 0; i < 10; i ++){
	 	soma += parseInt(cpf.charAt(i)) * (11 - i);
	}
	resto = 11 - (soma % 11);
	if (resto == 10 || resto == 11){
	 	resto = 0;
	}
	if (resto != parseInt(cpf.charAt(10))){
	 	return "CPF inválido. Verifique se seu cpf foi digitado corretamente.";
	}
	return true;
}

function validaMail(email){
	invalidCharsList = " /:,;~#";
	if (email.indexOf('@',0) == -1 || email.indexOf('@',0) == 0 || email.indexOf('.',0) == -1) return false;

	for (i = 0; i < invalidCharsList.length; i++){
		errorChar = invalidCharsList.charAt(i);
		if (email.indexOf(errorChar,0) != -1) return false;
	}
	return true;
}

function valida_data(campo) {
    var expReg = /^(([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/[1-2][0-9]\d{2})$/;
	var msgErro = 'Formato inválido de data.';
	var vdt = new Date();
	var vdia = vdt.getDay();
	var vmes = vdt.getMonth();
	var vano = vdt.getFullYear();
	if ((campo.value.match(expReg)) && (campo.value != '')){
		var dia = campo.value.substring(0,2);
		var mes = campo.value.substring(3,5);
		var ano = campo.value.substring(6,10);
		if ((mes == 4 && dia > 30) || (mes == 6 && dia > 30) || (mes == 9 && dia > 30) || (mes == 11 && dia > 30)){
			campo.focus();
			return "Dia incorreto !!! O mês especificado contém no máximo 30 dias.";
		} else if (ano%4 != 0 && mes == 2 && dia > 28){
			campo.focus();
			return "Data incorreta!! O mês especificado contém no máximo 28 dias.";
		} else if (ano%4 == 0 && mes == 2 && dia > 29){
			campo.focus();
			return "Data incorreta!! O mês especificado contém no máximo 29 dias.";
		} else if (ano > vano) {
			campo.focus();
			return "Data incorreta!! Ano informado maior que ano atual.";
		} else {
			return true;
		}
	} else {
		campo.focus();
		return msgErro;
	}
}

function loadCSS(url){
	var object = document.createElement('link');
	object.setAttribute('href',url);
	object.setAttribute('rel','stylesheet');
	$('head').append(object);
}

function loadJS(url,type,callback){
	$.ajax({
		url: http+url,
		dataType:type,
		cache:true,
		success:callback
	});
}