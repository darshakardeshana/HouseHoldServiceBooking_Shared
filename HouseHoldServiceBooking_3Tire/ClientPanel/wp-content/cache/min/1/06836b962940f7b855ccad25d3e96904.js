/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);(function($){"use strict";function gMap(){if($('.google-map').length){$('.google-map').each(function(){var Self=$(this);var mapName=Self.attr('id');var mapLat=Self.data('map-lat');var mapLng=Self.data('map-lng');var iconPath=Self.data('icon-path');var mapZoom=Self.data('map-zoom');var mapTitle=Self.data('map-title');var markers=Self.data('markers');var styles=[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];if(mapZoom){var mapZoom=6};var map;map=new GMaps({div:'#'+mapName,scrollwheel:!1,lat:mapLat,lng:mapLng,styles:styles,zoom:mapZoom});if(iconPath){$.each(markers,function(index,value){var index=value;var html;if(index[2]){html=index[2]};if(!index[3]){index[3]=iconPath};map.addMarker({icon:index[3],lat:index[0],lng:index[1],infoWindow:{content:html}})})}})}}
jQuery(document).ready(function(){(function($){gMap()})(jQuery)})})(window.jQuery);var kc_script_data={ajax_url:"http://php7.commonsupport.com/smartman/wp-admin/admin-ajax.php"};;(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder' in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text'});return features})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form)}})});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10)};wpcf7.initForm=function(form){var $form=$(form);$form.submit(function(event){if(!wpcf7.supportHtml5.placeholder){$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('').removeClass('placeheld')})}
if(typeof window.FormData==='function'){wpcf7.submit($form);event.preventDefault()}});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form)});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',!1)});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',!1)}else{$freetext.prop('disabled',!0)}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',!1).focus()}else{$freetext.prop('disabled',!0)}})});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld')}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld')}})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')})})}
$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long')}else{$count.removeClass('too-long')}
if(minimum&&length<minimum){$count.addClass('too-short')}else{$count.removeClass('too-short')}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this)})})});$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val}
$(this).val(val)})};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value}else if(field.name.match(/^_wpcf7_\w+_free_text_/)){var owner=field.name.replace(/^_wpcf7_\w+_free_text_/,'');detail.inputs.push({name:owner+'-free-text',value:field.value})}else if(field.name.match(/^_/)){}else{detail.inputs.push(field)}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;var $message=$('.wpcf7-response-output',$form);switch(data.status){case 'validation_failed':$.each(data.invalidFields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('[aria-invalid]',this).attr('aria-invalid','true')})});$message.addClass('wpcf7-validation-errors');$form.addClass('invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case 'acceptance_missing':$message.addClass('wpcf7-acceptance-missing');$form.addClass('unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case 'spam':$message.addClass('wpcf7-spam-blocked');$form.addClass('spam');wpcf7.triggerEvent(data.into,'spam',detail);break;case 'aborted':$message.addClass('wpcf7-aborted');$form.addClass('aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case 'mail_sent':$message.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case 'mail_failed':$message.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:var customStatusClass='custom-'+data.status.replace(/[^0-9a-z]+/i,'-');$message.addClass('wpcf7-'+customStatusClass);$form.addClass(customStatusClass)}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset()});wpcf7.toggleSubmit($form)}
if(!wpcf7.supportHtml5.placeholder){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'))})}
$message.html('').append(data.message).slideDown('fast');$message.attr('role','alert');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$response.html('').attr('role','').append(data.message);if(data.invalidFields){var $invalids=$('<ul></ul>');$.each(data.invalidFields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message))}else{var $li=$('<li></li>').append(n.message)}
$invalids.append($li)});$response.append($invalids)}
$response.attr('role','alert').focus()})};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:!1,contentType:!1}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active')}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e)})};wpcf7.triggerEvent=function(target,name,detail){var $target=$(target);var event=new CustomEvent('wpcf7'+name,{bubbles:!0,detail:detail});$target.get(0).dispatchEvent(event);$target.trigger('wpcf7:'+name,detail);$target.trigger(name+'.wpcf7',detail)};wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return}
if($form.hasClass('wpcf7-acceptance-as-validation')){return}
$submit.prop('disabled',!1);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',!0);return!1}}})};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100})})};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this)});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target))})}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1])})};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1])})};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce)}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}})}else{if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.removeClass('invalid spam sent failed');$form.siblings('.screen-reader-response').html('').attr('role','');$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked')};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url}})(jQuery);(function(){if(typeof window.CustomEvent==="function")return!1;function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent})();(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return/(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){if(!e)return document.documentElement;for(var o=ie(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?r(n):n:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,a=document.createRange();a.setStart(n,0),a.setEnd(i,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=a(t,'top'),i=a(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function f(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function m(e,t,o,n){return Q(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie(10)&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};try{if(ie(10)){o=e.getBoundingClientRect();var n=a(e,'top'),i=a(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=ie(10),p='HTML'===o.nodeName,s=g(e),d=g(o),a=n(e),f=t(o),m=parseFloat(f.borderTopWidth,10),h=parseFloat(f.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(d.top=Q(d.top,0),d.left=Q(d.left,0));var u=c({top:s.top-d.top-m,left:s.left-d.left-h,width:s.width,height:s.height});if(u.marginTop=0,u.marginLeft=0,!r&&p){var b=parseFloat(f.marginTop,10),y=parseFloat(f.marginLeft,10);u.top-=m-b,u.bottom-=m-b,u.left-=h-y,u.right-=h-y,u.marginTop=b,u.marginLeft=y}return(r&&!i?o.contains(a):o===a&&'BODY'!==a.nodeName)&&(u=l(u,o)),u}function b(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=u(e,o),i=Q(o.clientWidth,window.innerWidth||0),r=Q(o.clientHeight,window.innerHeight||0),p=t?0:a(o),s=t?0:a(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return c(d)}function y(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||y(o(e))}function w(e){if(!e||!e.parentElement||ie())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function E(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},a=p?w(e):d(e,t);if('viewport'===r)s=b(a,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=u(l,a,p);if('HTML'===l.nodeName&&!y(a)){var m=h(),c=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=c+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function v(e){var t=e.width,o=e.height;return t*o}function x(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=E(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?w(t):d(t,o);return u(o,i,n)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function S(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function T(e,t,o){o=o.split('-')[0];var n=L(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[S(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function N(t,o,n){var i=void 0===n?t:t.slice(0,C(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=x(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=T(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function P(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,P(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e){var t=e.ownerDocument;return t?t.defaultView:window}function A(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||A(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,H(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return A(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function M(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function F(e,t){return H(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=F(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function K(e){return'end'===e?'start':'start'===e?'end':e}function V(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),n=le.slice(o+1).concat(le.slice(0,o));return t?n.reverse():n}function z(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?Q(document.documentElement.clientHeight,window.innerHeight||0):Q(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return z(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){U(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function _(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=U(+n)?[+n,0]:G(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var X=Math.min,J=Math.floor,Q=Math.max,Z='undefined'!=typeof window&&'undefined'!=typeof document,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i=Z&&window.Promise,oe=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne={},ie=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'all';return(e=e.toString(),ne.hasOwnProperty(e))?ne[e]:('11'===e?ne[e]=-1!==navigator.userAgent.indexOf('Trident'):'10'===e?ne[e]=-1!==navigator.appVersion.indexOf('MSIE 10'):'all'===e?ne[e]=-1!==navigator.userAgent.indexOf('Trident')||-1!==navigator.userAgent.indexOf('MSIE'):void 0,ne.all=ne.all||Object.keys(ne).some(function(e){return ne[e]}),ne[e])},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=oe(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return M.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:_,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var n=E(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);t.boundaries=n;var i=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<n[e]&&!t.escapeWithReference&&(o=Q(p[e],n[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',i=p[o];return p[e]>n[e]&&!t.escapeWithReference&&(i=X(p[o],n[e]-('right'===e?p.width:p.height))),se({},o,i)}};return i.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=J,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(i)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=Q(X(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},se(n,m,Math.round(v)),se(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(P(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=E(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=S(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[n,i];break;case fe.CLOCKWISE:p=V(n);break;case fe.COUNTERCLOCKWISE:p=V(n,!0);break;default:p=t.behavior}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=S(n);var a=e.offsets.popper,l=e.offsets.reference,f=J,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=K(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,T(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=S(t),e.offsets.popper=c(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,p=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:i.position},h={left:J(i.left),top:J(i.top),bottom:J(i.bottom),right:J(i.right)},c='bottom'===o?'top':'bottom',u='right'===n?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=O(i,t,e,o.positionFixed),p=x(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},me});/*!

  * Bootstrap v4.1.1 (https://getbootstrap.com/)

  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)

  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,c){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function h(r){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},e=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=s[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,c=c&&c.hasOwnProperty("default")?c.default:c;var r,n,s,a,l,u,f,d,_,g,m,p,v,E,y,T,C,I,A,D,b,S,w,N,O,k,P,L,j,R,H,W,M,x,U,K,F,V,Q,B,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,st,ot,at,lt,ht,ct,ut,ft,dt,_t,gt,mt,pt,vt,Et,yt,Tt,Ct,It,At,Dt,bt,St,wt,Nt,Ot,kt,Pt,Lt,jt,Rt,Ht,Wt,Mt,xt,Ut,Kt,Ft,Vt,Qt,Bt,Yt,Gt,qt,zt,Xt,Jt,Zt,$t,te,ee,ne,ie,re,se,oe,ae,le,he,ce,ue,fe,de,_e,ge,me,pe,ve,Ee,ye,Te,Ce,Ie,Ae,De,be,Se,we,Ne,Oe,ke,Pe,Le,je,Re,He,We,Me,xe,Ue,Ke,Fe,Ve,Qe,Be,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,sn,on,an,ln,hn,cn,un,fn,dn,_n,gn,mn,pn,vn,En,yn,Tn,Cn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],s=e[i],o=s&&l.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),In=(n="alert",a="."+(s="bs.alert"),l=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",_="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,s),this._element=null},t._getRootElement=function(t){var e=Cn.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(_),r(e).hasClass(d)){var t=Cn.getTransitionDurationFromElement(e);r(e).one(Cn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(s);e||(e=new i(this),t.data(s,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),r.fn[n]=g._jQueryInterface,r.fn[n].Constructor=g,r.fn[n].noConflict=function(){return r.fn[n]=l,g._jQueryInterface},g),An=(p="button",E="."+(v="bs.button"),y=".data-api",T=(m=e).fn[p],C="active",I="btn",D='[data-toggle^="button"]',b='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+y,FOCUS_BLUR_DATA_API:(A="focus")+E+y+" blur"+E+y},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(b)[0];if(n){var i=m(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(C))t=!1;else{var r=m(n).find(w)[0];r&&m(r).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(C),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(C)),t&&m(this._element).toggleClass(C)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},o(n,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),n}(),m(document).on(O.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;m(e).hasClass(I)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,D,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=T,k._jQueryInterface},k),Dn=(L="carousel",R="."+(j="bs.carousel"),H=".data-api",W=(P=e).fn[L],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},U="next",K="prev",F="left",V="right",Q={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHEND:"touchend"+R,LOAD_DATA_API:"load"+R+H,CLICK_DATA_API:"click"+R+H},B="carousel",Y="active",G="slide",q="carousel-item-right",z="carousel-item-left",X="carousel-item-next",J="carousel-item-prev",Z={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},$=function(){function s(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=P(this._element).find(Z.INDICATORS)[0],this._addEventListeners()}var t=s.prototype;return t.next=function(){this._isSliding||this._slide(U)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(K)},t.pause=function(t){t||(this._isPaused=!0),P(this._element).find(Z.NEXT_PREV)[0]&&(Cn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=P(this._element).find(Z.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?U:K;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(R),P.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=h({},M,t),Cn.typeCheckConfig(L,t,x),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=P.makeArray(P(t).parent().find(Z.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===U,i=t===K,r=this._getItemIndex(e),s=this._items.length-1;if((i&&0===r||n&&r===s)&&!this._config.wrap)return e;var o=(r+(t===K?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&P(e).addClass(Y)}},t._slide=function(t,e){var n,i,r,s=this,o=P(this._element).find(Z.ACTIVE_ITEM)[0],a=this._getItemIndex(o),l=e||o&&this._getItemByDirection(t,o),h=this._getItemIndex(l),c=Boolean(this._interval);if(t===U?(n=z,i=X,r=F):(n=q,i=J,r=V),l&&P(l).hasClass(Y))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&o&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:h});if(P(this._element).hasClass(G)){P(l).addClass(i),Cn.reflow(l),P(o).addClass(n),P(l).addClass(n);var f=Cn.getTransitionDurationFromElement(o);P(o).one(Cn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(Y),P(o).removeClass(Y+" "+i+" "+n),s._isSliding=!1,setTimeout(function(){return P(s._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(o).removeClass(Y),P(l).addClass(Y),this._isSliding=!1,P(this._element).trigger(u);c&&this.cycle()}},s._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(j),e=h({},M,P(this).data());"object"==typeof i&&(e=h({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new s(this,e),P(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},s._dataApiClickHandler=function(t){var e=Cn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=h({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),s._jQueryInterface.call(P(n),i),r&&P(n).data(j).to(r),t.preventDefault()}}},o(s,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return M}}]),s}(),P(document).on(Q.CLICK_DATA_API,Z.DATA_SLIDE,$._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){P(Z.DATA_RIDE).each(function(){var t=P(this);$._jQueryInterface.call(t,t.data())})}),P.fn[L]=$._jQueryInterface,P.fn[L].Constructor=$,P.fn[L].noConflict=function(){return P.fn[L]=W,$._jQueryInterface},$),bn=(et="collapse",it="."+(nt="bs.collapse"),rt=(tt=e).fn[et],st={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ht="collapse",ct="collapsing",ut="collapsed",ft="width",dt="height",_t={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},gt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(_t.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],s=Cn.getSelectorFromElement(r);null!==s&&0<tt(s).filter(t).length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))){var i=tt.Event(at.SHOW);if(tt(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(tt(t).not(this._selector),"hide"),e||tt(t).data(nt,null));var r=this._getDimension();tt(this._element).removeClass(ht).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(r[0].toUpperCase()+r.slice(1)),o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){tt(n._element).removeClass(ct).addClass(ht).addClass(lt),n._element.style[r]="",n.setTransitioning(!1),tt(n._element).trigger(at.SHOWN)}).emulateTransitionEnd(o),this._element.style[r]=this._element[s]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Cn.reflow(this._element),tt(this._element).addClass(ct).removeClass(ht).removeClass(lt),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],s=Cn.getSelectorFromElement(r);if(null!==s)tt(s).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){t.setTransitioning(!1),tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)}).emulateTransitionEnd(o)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=h({},st,t)).toggle=Boolean(t.toggle),Cn.typeCheckConfig(et,t,ot),t},t._getDimension=function(){return tt(this._element).hasClass(ft)?ft:dt},t._getParent=function(){var n=this,t=null;Cn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=tt(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);0<e.length&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Cn.getSelectorFromElement(t);return e?tt(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=tt(this),e=t.data(nt),n=h({},st,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(nt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return st}}]),a}(),tt(document).on(at.CLICK_DATA_API,_t.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=tt(this),e=Cn.getSelectorFromElement(this);tt(e).each(function(){var t=tt(this),e=t.data(nt)?"toggle":n.data();gt._jQueryInterface.call(t,e)})}),tt.fn[et]=gt._jQueryInterface,tt.fn[et].Constructor=gt,tt.fn[et].noConflict=function(){return tt.fn[et]=rt,gt._jQueryInterface},gt),Sn=(pt="dropdown",Et="."+(vt="bs.dropdown"),yt=".data-api",Tt=(mt=e).fn[pt],Ct=new RegExp("38|40|27"),It={HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et,CLICK:"click"+Et,CLICK_DATA_API:"click"+Et+yt,KEYDOWN_DATA_API:"keydown"+Et+yt,KEYUP_DATA_API:"keyup"+Et+yt},At="disabled",Dt="show",bt="dropup",St="dropright",wt="dropleft",Nt="dropdown-menu-right",Ot="position-static",kt='[data-toggle="dropdown"]',Pt=".dropdown form",Lt=".dropdown-menu",jt=".navbar-nav",Rt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ht="top-start",Wt="top-end",Mt="bottom-start",xt="bottom-end",Ut="right-start",Kt="left-start",Ft={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Vt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Qt=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!mt(this._element).hasClass(At)){var t=l._getParentFromElement(this._element),e=mt(this._menu).hasClass(Dt);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=mt.Event(It.SHOW,n);if(mt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Cn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&mt(t).addClass(Ot),this._popper=new c(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt(document.body).children().on("mouseover",null,mt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mt(this._menu).toggleClass(Dt),mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN,n))}}}},t.dispose=function(){mt.removeData(this._element,vt),mt(this._element).off(Et),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;mt(this._element).on(It.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=h({},this.constructor.Default,mt(this._element).data(),t),Cn.typeCheckConfig(pt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=mt(t).find(Lt)[0]}return this._menu},t._getPlacement=function(){var t=mt(this._element).parent(),e=Mt;return t.hasClass(bt)?(e=Ht,mt(this._menu).hasClass(Nt)&&(e=Wt)):t.hasClass(St)?e=Ut:t.hasClass(wt)?e=Kt:mt(this._menu).hasClass(Nt)&&(e=xt),e},t._detectNavbar=function(){return 0<mt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=h({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=mt(this).data(vt);if(t||(t=new l(this,"object"==typeof e?e:null),mt(this).data(vt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(kt)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=mt(e[n]).data(vt),s={relatedTarget:e[n]};if(r){var o=r._menu;if(mt(i).hasClass(Dt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i,t.target))){var a=mt.Event(It.HIDE,s);mt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt(document.body).children().off("mouseover",null,mt.noop),e[n].setAttribute("aria-expanded","false"),mt(o).removeClass(Dt),mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var e,n=Cn.getSelectorFromElement(t);return n&&(e=mt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Lt).length)):Ct.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mt(this).hasClass(At))){var e=l._getParentFromElement(this),n=mt(e).hasClass(Dt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=mt(e).find(Rt).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var s=mt(e).find(kt)[0];mt(s).trigger("focus")}mt(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Ft}},{key:"DefaultType",get:function(){return Vt}}]),l}(),mt(document).on(It.KEYDOWN_DATA_API,kt,Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,Lt,Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,Qt._clearMenus).on(It.CLICK_DATA_API,kt,function(t){t.preventDefault(),t.stopPropagation(),Qt._jQueryInterface.call(mt(this),"toggle")}).on(It.CLICK_DATA_API,Pt,function(t){t.stopPropagation()}),mt.fn[pt]=Qt._jQueryInterface,mt.fn[pt].Constructor=Qt,mt.fn[pt].noConflict=function(){return mt.fn[pt]=Tt,Qt._jQueryInterface},Qt),wn=(Yt="modal",qt="."+(Gt="bs.modal"),zt=(Bt=e).fn[Yt],Xt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Jt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Zt={HIDE:"hide"+qt,HIDDEN:"hidden"+qt,SHOW:"show"+qt,SHOWN:"shown"+qt,FOCUSIN:"focusin"+qt,RESIZE:"resize"+qt,CLICK_DISMISS:"click.dismiss"+qt,KEYDOWN_DISMISS:"keydown.dismiss"+qt,MOUSEUP_DISMISS:"mouseup.dismiss"+qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qt,CLICK_DATA_API:"click"+qt+".data-api"},$t="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",ie="show",re={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},se=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Bt(t).find(re.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Bt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=Bt.Event(Zt.SHOW,{relatedTarget:t});Bt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Bt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),Bt(this._element).on(Zt.CLICK_DISMISS,re.DATA_DISMISS,function(t){return e.hide(t)}),Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS,function(){Bt(e._element).one(Zt.MOUSEUP_DISMISS,function(t){Bt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Bt.Event(Zt.HIDE);if(Bt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Bt(this._element).hasClass(ne);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Bt(document).off(Zt.FOCUSIN),Bt(this._element).removeClass(ie),Bt(this._element).off(Zt.CLICK_DISMISS),Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),i){var r=Cn.getTransitionDurationFromElement(this._element);Bt(this._element).one(Cn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Bt.removeData(this._element,Gt),Bt(window,document,this._element,this._backdrop).off(qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=h({},Xt,t),Cn.typeCheckConfig(Yt,t,Jt),t},t._showElement=function(t){var e=this,n=Bt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Cn.reflow(this._element),Bt(this._element).addClass(ie),this._config.focus&&this._enforceFocus();var i=Bt.Event(Zt.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Bt(e._element).trigger(i)};if(n){var s=Cn.getTransitionDurationFromElement(this._element);Bt(this._dialog).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},t._enforceFocus=function(){var e=this;Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Bt(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Bt(this._element).on(Zt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Bt(this._element).off(Zt.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Bt(window).on(Zt.RESIZE,function(t){return e.handleUpdate(t)}):Bt(window).off(Zt.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Bt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),Bt(t._element).trigger(Zt.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Bt(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Bt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&Bt(this._backdrop).addClass(n),Bt(this._backdrop).appendTo(document.body),Bt(this._element).on(Zt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Cn.reflow(this._backdrop),Bt(this._backdrop).addClass(ie),!t)return;if(!n)return void t();var i=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Bt(this._backdrop).removeClass(ie);var r=function(){e._removeBackdrop(),t&&t()};if(Bt(this._element).hasClass(ne)){var s=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e)[0].style.paddingRight,i=Bt(e).css("padding-right");Bt(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Bt(re.STICKY_CONTENT).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Bt(re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Bt(document.body).css("padding-right");Bt(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e).data("padding-right");"undefined"!=typeof n&&Bt(e).css("padding-right",n).removeData("padding-right")}),Bt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e).data("margin-right");"undefined"!=typeof n&&Bt(e).css("margin-right",n).removeData("margin-right")});var t=Bt(document.body).data("padding-right");"undefined"!=typeof t&&Bt(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$t,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Bt(this).data(Gt),e=h({},Xt,Bt(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),Bt(this).data(Gt,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Xt}}]),r}(),Bt(document).on(Zt.CLICK_DATA_API,re.DATA_TOGGLE,function(t){var e,n=this,i=Cn.getSelectorFromElement(this);i&&(e=Bt(i)[0]);var r=Bt(e).data(Gt)?"toggle":h({},Bt(e).data(),Bt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Bt(e).one(Zt.SHOW,function(t){t.isDefaultPrevented()||s.one(Zt.HIDDEN,function(){Bt(n).is(":visible")&&n.focus()})});se._jQueryInterface.call(Bt(e),r,this)}),Bt.fn[Yt]=se._jQueryInterface,Bt.fn[Yt].Constructor=se,Bt.fn[Yt].noConflict=function(){return Bt.fn[Yt]=zt,se._jQueryInterface},se),Nn=(ae="tooltip",he="."+(le="bs.tooltip"),ce=(oe=e).fn[ae],ue="bs-tooltip",fe=new RegExp("(^|\\s)"+ue+"\\S+","g"),ge={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(_e={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},pe="out",ve={HIDE:"hide"+he,HIDDEN:"hidden"+he,SHOW:(me="show")+he,SHOWN:"shown"+he,INSERTED:"inserted"+he,CLICK:"click"+he,FOCUSIN:"focusin"+he,FOCUSOUT:"focusout"+he,MOUSEENTER:"mouseenter"+he,MOUSELEAVE:"mouseleave"+he},Ee="fade",ye="show",Te=".tooltip-inner",Ce=".arrow",Ie="hover",Ae="focus",De="click",be="manual",Se=function(){function i(t,e){if("undefined"==typeof c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=oe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(oe(this.getTipElement()).hasClass(ye))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),oe.removeData(this.element,this.constructor.DATA_KEY),oe(this.element).off(this.constructor.EVENT_KEY),oe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&oe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===oe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=oe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){oe(this.element).trigger(t);var n=oe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Cn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&oe(i).addClass(Ee);var s="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,o=this._getAttachment(s);this.addAttachmentClass(o);var a=!1===this.config.container?document.body:oe(this.config.container);oe(i).data(this.constructor.DATA_KEY,this),oe.contains(this.element.ownerDocument.documentElement,this.tip)||oe(i).appendTo(a),oe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new c(this.element,i,{placement:o,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ce},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),oe(i).addClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().on("mouseover",null,oe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,oe(e.element).trigger(e.constructor.Event.SHOWN),t===pe&&e._leave(null,e)};if(oe(this.tip).hasClass(Ee)){var h=Cn.getTransitionDurationFromElement(this.tip);oe(this.tip).one(Cn.TRANSITION_END,l).emulateTransitionEnd(h)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=oe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==me&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),oe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(oe(this.element).trigger(i),!i.isDefaultPrevented()){if(oe(n).removeClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().off("mouseover",null,oe.noop),this._activeTrigger[De]=!1,this._activeTrigger[Ae]=!1,this._activeTrigger[Ie]=!1,oe(this.tip).hasClass(Ee)){var s=Cn.getTransitionDurationFromElement(n);oe(n).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){oe(this.getTipElement()).addClass(ue+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||oe(this.config.template)[0],this.tip},t.setContent=function(){var t=oe(this.getTipElement());this.setElementContent(t.find(Te),this.getTitle()),t.removeClass(Ee+" "+ye)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?oe(e).parent().is(t)||t.empty().append(e):t.text(oe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return _e[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)oe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==be){var e=t===Ie?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ie?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;oe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}oe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=h({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ae:Ie]=!0),oe(e.getTipElement()).hasClass(ye)||e._hoverState===me?e._hoverState=me:(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===me&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ae:Ie]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=pe,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===pe&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=h({},this.constructor.Default,oe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Cn.typeCheckConfig(ae,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=oe(this.getTipElement()),e=t.attr("class").match(fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(oe(t).removeClass(Ee),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=oe(this).data(le),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),oe(this).data(le,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return ge}},{key:"NAME",get:function(){return ae}},{key:"DATA_KEY",get:function(){return le}},{key:"Event",get:function(){return ve}},{key:"EVENT_KEY",get:function(){return he}},{key:"DefaultType",get:function(){return de}}]),i}(),oe.fn[ae]=Se._jQueryInterface,oe.fn[ae].Constructor=Se,oe.fn[ae].noConflict=function(){return oe.fn[ae]=ce,Se._jQueryInterface},Se),On=(Ne="popover",ke="."+(Oe="bs.popover"),Pe=(we=e).fn[Ne],Le="bs-popover",je=new RegExp("(^|\\s)"+Le+"\\S+","g"),Re=h({},Nn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),He=h({},Nn.DefaultType,{content:"(string|element|function)"}),We="fade",xe=".popover-header",Ue=".popover-body",Ke={HIDE:"hide"+ke,HIDDEN:"hidden"+ke,SHOW:(Me="show")+ke,SHOWN:"shown"+ke,INSERTED:"inserted"+ke,CLICK:"click"+ke,FOCUSIN:"focusin"+ke,FOCUSOUT:"focusout"+ke,MOUSEENTER:"mouseenter"+ke,MOUSELEAVE:"mouseleave"+ke},Fe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){we(this.getTipElement()).addClass(Le+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||we(this.config.template)[0],this.tip},r.setContent=function(){var t=we(this.getTipElement());this.setElementContent(t.find(xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ue),e),t.removeClass(We+" "+Me)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=we(this.getTipElement()),e=t.attr("class").match(je);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=we(this).data(Oe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),we(this).data(Oe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Re}},{key:"NAME",get:function(){return Ne}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ke}},{key:"EVENT_KEY",get:function(){return ke}},{key:"DefaultType",get:function(){return He}}]),i}(Nn),we.fn[Ne]=Fe._jQueryInterface,we.fn[Ne].Constructor=Fe,we.fn[Ne].noConflict=function(){return we.fn[Ne]=Pe,Fe._jQueryInterface},Fe),kn=(Qe="scrollspy",Ye="."+(Be="bs.scrollspy"),Ge=(Ve=e).fn[Qe],qe={offset:10,method:"auto",target:""},ze={offset:"number",method:"string",target:"(string|element)"},Xe={ACTIVATE:"activate"+Ye,SCROLL:"scroll"+Ye,LOAD_DATA_API:"load"+Ye+".data-api"},Je="dropdown-item",Ze="active",$e={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$e.NAV_LINKS+","+this._config.target+" "+$e.LIST_ITEMS+","+this._config.target+" "+$e.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Ve(this._scrollElement).on(Xe.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?tn:en,r="auto"===this._config.method?t:this._config.method,s=r===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Ve.makeArray(Ve(this._selector)).map(function(t){var e,n=Cn.getSelectorFromElement(t);if(n&&(e=Ve(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Ve(e)[r]().top+s,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Ve.removeData(this._element,Be),Ve(this._scrollElement).off(Ye),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=h({},qe,"object"==typeof t&&t?t:{})).target){var e=Ve(t.target).attr("id");e||(e=Cn.getUID(Qe),Ve(t.target).attr("id",e)),t.target="#"+e}return Cn.typeCheckConfig(Qe,t,ze),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Ve(t.join(","));n.hasClass(Je)?(n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),n.addClass(Ze)):(n.addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS+", "+$e.LIST_ITEMS).addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)),Ve(this._scrollElement).trigger(Xe.ACTIVATE,{relatedTarget:e})},t._clear=function(){Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)},n._jQueryInterface=function(e){return this.each(function(){var t=Ve(this).data(Be);if(t||(t=new n(this,"object"==typeof e&&e),Ve(this).data(Be,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return qe}}]),n}(),Ve(window).on(Xe.LOAD_DATA_API,function(){for(var t=Ve.makeArray(Ve($e.DATA_SPY)),e=t.length;e--;){var n=Ve(t[e]);nn._jQueryInterface.call(n,n.data())}}),Ve.fn[Qe]=nn._jQueryInterface,Ve.fn[Qe].Constructor=nn,Ve.fn[Qe].noConflict=function(){return Ve.fn[Qe]=Ge,nn._jQueryInterface},nn),Pn=(on="."+(sn="bs.tab"),an=(rn=e).fn.tab,ln={HIDE:"hide"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,CLICK_DATA_API:"click"+on+".data-api"},hn="dropdown-menu",cn="active",un="disabled",fn="fade",dn="show",_n=".dropdown",gn=".nav, .list-group",mn=".active",pn="> li > .active",vn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',En=".dropdown-toggle",yn="> .dropdown-menu .active",Tn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(cn)||rn(this._element).hasClass(un))){var t,i,e=rn(this._element).closest(gn)[0],r=Cn.getSelectorFromElement(this._element);if(e){var s="UL"===e.nodeName?pn:mn;i=(i=rn.makeArray(rn(e).find(s)))[i.length-1]}var o=rn.Event(ln.HIDE,{relatedTarget:this._element}),a=rn.Event(ln.SHOW,{relatedTarget:i});if(i&&rn(i).trigger(o),rn(this._element).trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){r&&(t=rn(r)[0]),this._activate(this._element,e);var l=function(){var t=rn.Event(ln.HIDDEN,{relatedTarget:n._element}),e=rn.Event(ln.SHOWN,{relatedTarget:i});rn(i).trigger(t),rn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){rn.removeData(this._element,sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?rn(e).find(pn):rn(e).children(mn))[0],s=n&&r&&rn(r).hasClass(fn),o=function(){return i._transitionComplete(t,r,n)};if(r&&s){var a=Cn.getTransitionDurationFromElement(r);rn(r).one(Cn.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},t._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+cn);var i=rn(e.parentNode).find(yn)[0];i&&rn(i).removeClass(cn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(cn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Cn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(hn)){var r=rn(t).closest(_n)[0];r&&rn(r).find(En).addClass(cn),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=rn(this),e=t.data(sn);if(e||(e=new i(this),t.data(sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),rn(document).on(ln.CLICK_DATA_API,vn,function(t){t.preventDefault(),Tn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=Tn._jQueryInterface,rn.fn.tab.Constructor=Tn,rn.fn.tab.noConflict=function(){return rn.fn.tab=an,Tn._jQueryInterface},Tn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Cn,t.Alert=In,t.Button=An,t.Carousel=Dn,t.Collapse=bn,t.Dropdown=Sn,t.Modal=wn,t.Popover=On,t.Scrollspy=kn,t.Tab=Pn,t.Tooltip=Nn,Object.defineProperty(t,"__esModule",{value:!0})});/*! jQuery UI - v1.12.1 - 2016-09-14

* http://jqueryui.com

* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js

* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}}(function($){$.ui=$.ui||{};var version=$.ui.version="1.12.1";
/*!

 * jQuery UI Widget 1.12.1

 * http://jqueryui.com

 *

 * Copyright jQuery Foundation and other contributors

 * Released under the MIT license.

 * http://jquery.org/license

 */
var widgetUuid=0;var widgetSlice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove")}}catch(e){}}
orig(elems)}})($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget}
if($.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype))}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName)};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element)}
if(arguments.length){this._createWidget(options,element)}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return}
proxiedPrototype[prop]=(function(){function _super(){return base.prototype[prop].apply(this,arguments)}
function _superApply(args){return base.prototype[prop].apply(this,args)}
return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue}})()});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto)});delete existingConstructor._childConstructors}else{base._childConstructors.push(constructor)}
$.widget.bridge(name,constructor);return constructor};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value)}else{target[key]=value}}}}
return target};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return!1}
if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'")}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance")}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return!1}})}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args))}
this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init()}}else{$.data(this,fullName,new object(options,this))}})}
return returnValue}};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(!0,this.element,{remove:function(event){if(event.target===element){this.destroy()}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow)}
this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled)}
this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key)});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace)},_destroy:$.noop,widget:function(){return this.element},option:function(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){return $.widget.extend({},this.options)}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]]}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key]}
curOption[key]=value}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key]}
options[key]=value}}
this._setOptions(options);return this},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key])}
return this},_setOption:function(key,value){if(key==="classes"){this._setOptionClasses(value)}
this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value)}
return this},_setOptionClasses:function(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue}
elements=$(currentElements.get());this._removeClass(currentElements,classKey);elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:!0}))}},_setOptionDisabled:function(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus")}},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){current=$($.unique(current.get().concat(options.element.get())))}else{current=$(current.not(options.element).get())}
that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]])}}}
this._on(options.element,{"remove":"_untrackClassesElement"});if(options.keys){processClassString(options.keys.match(/\S+/g)||[],!0)}
if(options.extra){processClassString(options.extra.match(/\S+/g)||[])}
return full.join(" ")},_untrackClassesElement:function(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get())}})},_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,!1)},_addClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,!0)},_toggleClass:function(element,keys,extra,add){add=(typeof add==="boolean")?add:extra;var shift=(typeof element==="string"||element===null),options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this},_on:function(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=!1}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget()}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element)}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===!0||$(this).hasClass("ui-state-disabled"))){return}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments)}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++}
var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy)}else{element.on(eventName,handlerProxy)}})},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.off(eventName).off(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get())},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments)}
var instance=this;return setTimeout(handlerProxy,delay||0)},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover")},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover")}})},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){this._addClass($(event.currentTarget),null,"ui-state-focus")},focusout:function(event){this._removeClass($(event.currentTarget),null,"ui-state-focus")}})},_trigger:function(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop]}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===!1||event.isDefaultPrevented())}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options}}
var hasOptions;var effectName=!options?method:options===!0||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options}}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay)}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options)}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback)}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0])}
next()})}}});var widget=$.widget;(function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)]}
function parseCss(element,property){return parseInt($.css(element,property),10)||0}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}}}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}}}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}}}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()}}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth}
var w1,w2,div=$("<div "+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth}
div.remove();return(cachedScrollbarWidth=w1-w2)},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0}},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isWindow&&!isDocument;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()}}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments)}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top"}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"]}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]]});if(collision.length===1){collision[1]=collision[0]}
if(options.at[0]==="right"){basePosition.left+=targetWidth}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth}else if(options.my[0]==="center"){position.left-=elemWidth/2}
if(options.my[1]==="bottom"){position.top-=elemHeight}else if(options.my[1]==="center"){position.top-=elemHeight/2}
position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem})}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center"}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle"}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal"}else{feedback.important="vertical"}
options.using.call(this,props,feedback)}}
elem.offset($.extend(position,{using:using}))})};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight}else if(overRight>0&&overLeft<=0){position.left=withinOffset}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth}else{position.left=withinOffset}}}else if(overLeft>0){position.left+=overLeft}else if(overRight>0){position.left-=overRight}else{position.left=max(position.left-collisionPosLeft,position.left)}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom}else if(overBottom>0&&overTop<=0){position.top=withinOffset}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight}else{position.top=withinOffset}}}else if(overTop>0){position.top+=overTop}else if(overBottom>0){position.top-=overBottom}else{position.top=max(position.top-collisionPosTop,position.top)}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments)}}}})();var position=$.ui.position;var data=$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName)}}):function(elem,i,match){return!!$.data(elem,match[3])}});var disableSelection=$.fn.extend({disableSelection:(function(){var eventType="onselectstart" in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault()})}})(),enableSelection:function(){return this.off(".ui-disableSelection")}});var dataSpace="ui-effects-",dataSpaceStyle="ui-effects-style",dataSpaceAnimated="ui-effects-animated",jQuery=$;$.effects={effect:{}};(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:!0,max:255},"percent":{max:1},"degrees":{mod:360,floor:!0}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1}});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def}
value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def}
if(type.mod){return(value+type.mod)%type.mod}
return 0>value?0:type.max<value?type.max:value}
function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return!1}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent)}
return inst}
return colors[string]}
color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this}
if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined}
var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array"}
if(type==="string"){return this.parse(stringParse(red)||colors._default)}
if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)});return this}
if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice()}})}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return}
inst[cache]=space.to(inst._rgba)}
inst[cache][prop.idx]=clamp(red[key],prop,!0)});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache])}}})}
return this}},is:function(compare){var is=color(compare),same=!0,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same}})}
return same});return same},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName)}});return used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return}
if(startValue===null){result[index]=endValue}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod}else if(startValue-endValue>type.mod/2){startValue-=type.mod}}
result[index]=clamp((endValue-startValue)*distance+startValue,prop)}});return this[spaceName](result)},blend:function(opaque){if(this._rgba[3]===1){return this}
var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v});if(rgba[3]===1){rgba.pop();prefix="rgb("}
return prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0}
if(i&&i<3){v=Math.round(v*100)+"%"}
return v});if(hsla[3]===1){hsla.pop();prefix="hsl("}
return prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255))}
return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6}
if(h*2<1){return q}
if(h*3<2){return p+(q-p)*((2/3)-h)*6}
return p}
spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]]}
var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0}else if(r===max){h=(60*(g-b)/diff)+360}else if(g===max){h=(60*(b-r)/diff)+120}else{h=(60*(r-g)/diff)+240}
if(diff===0){s=0}else if(l<=0.5){s=diff/add}else{s=diff/(2-add)}
return[Math.round(h)%360,s,l,a==null?1:a]};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]]}
var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a]};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba)}
if(value===undefined){return this[cache].slice()}
var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx]}
local[prop.idx]=clamp(val,prop)});if(from){ret=color(from(local));ret[cache]=local;return ret}else{return color(local)}};each(props,function(key,prop){if(color.fn[key]){return}
color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur}
if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value)}
if(value==null&&prop.empty){return this}
if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)}}
local[prop.idx]=value;return this[fn](local)}})});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode}catch(e){}}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default")}
value=value.toRgbaString()}
try{elem.style[hook]=value}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=!0}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}})};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value});return expanded}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=!0}}});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key]}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key]}}}
return styles}
function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value}}}}
return diff}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}}
$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)}});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action])}})};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:!1,complete:function(){dfd.resolve(styleInfo)}});this.el.animate(this.diff,opts);return dfd.promise()});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"")})});o.complete.call(animated[0])})})};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments)}})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments)}})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments)}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback)}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)}}})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)}})})();(function(){if($.expr&&$.expr.filters&&$.expr.filters.animated){$.expr.filters.animated=(function(orig){return function(elem){return!!$(elem).data(dataSpaceAnimated)||orig(elem)}})($.expr.filters.animated)}
if($.uiBackCompat!==!1){$.extend($.effects,{save:function(element,set){var i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]])}}},restore:function(element,set){var val,i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);element.css(set[i],val)}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide"}
return mode},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent()}
var props={width:element.outerWidth(!0),height:element.outerHeight(!0),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id}catch(e){active=document.body}
element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus")}
wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"})}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto"}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}
element.css(size);return wrapper.css(props).show()},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus")}}
return element}})}
$.extend($.effects,{version:"1.12.1",define:function(name,mode,effect){if(!effect){effect=mode;mode="effect"}
$.effects.effect[name]=effect;$.effects.effect[name].mode=mode;return effect},scaledDimensions:function(element,percent,direction){if(percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0}}
var x=direction!=="horizontal"?((percent||100)/100):1,y=direction!=="vertical"?((percent||100)/100):1;return{height:element.height()*y,width:element.width()*x,outerHeight:element.outerHeight()*y,outerWidth:element.outerWidth()*x}},clipToBox:function(animation){return{width:animation.clip.right-animation.clip.left,height:animation.clip.bottom-animation.clip.top,left:animation.clip.left,top:animation.clip.top}},unshift:function(element,queueLength,count){var queue=element.queue();if(queueLength>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queueLength,count)))}
element.dequeue()},saveStyle:function(element){element.data(dataSpaceStyle,element[0].style.cssText)},restoreStyle:function(element){element[0].style.cssText=element.data(dataSpaceStyle)||"";element.removeData(dataSpaceStyle)},mode:function(element,mode){var hidden=element.is(":hidden");if(mode==="toggle"){mode=hidden?"show":"hide"}
if(hidden?mode==="hide":mode==="show"){mode="none"}
return mode},getBaseline:function(origin,original){var y,x;switch(origin[0]){case "top":y=0;break;case "middle":y=0.5;break;case "bottom":y=1;break;default:y=origin[0]/original.height}
switch(origin[1]){case "left":x=0;break;case "center":x=0.5;break;case "right":x=1;break;default:x=origin[1]/original.width}
return{x:x,y:y}},createPlaceholder:function(element){var placeholder,cssPosition=element.css("position"),position=element.position();element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());if(/^(static|relative)/.test(cssPosition)){cssPosition="absolute";placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({display:/^(inline|ruby)/.test(element.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");element.data(dataSpace+"placeholder",placeholder)}
element.css({position:cssPosition,left:position.left,top:position.top});return placeholder},removePlaceholder:function(element){var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);if(placeholder){placeholder.remove();element.removeData(dataKey)}},cleanUp:function(element){$.effects.restoreStyle(element);$.effects.removePlaceholder(element)},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1]}});return value}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect}
effect={effect:effect};if(options==null){options={}}
if($.isFunction(options)){callback=options;speed=null;options={}}
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={}}
if($.isFunction(speed)){callback=speed;speed=null}
if(options){$.extend(effect,options)}
speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect}
function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return!0}
if(typeof option==="string"&&!$.effects.effect[option]){return!0}
if($.isFunction(option)){return!0}
if(typeof option==="object"&&!option.effect){return!0}
return!1}
$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),effectMethod=$.effects.effect[args.effect],defaultMode=effectMethod.mode,queue=args.queue,queueName=queue||"fx",complete=args.complete,mode=args.mode,modes=[],prefilter=function(next){var el=$(this),normalizedMode=$.effects.mode(el,mode)||defaultMode;el.data(dataSpaceAnimated,!0);modes.push(normalizedMode);if(defaultMode&&(normalizedMode==="show"||(normalizedMode===defaultMode&&normalizedMode==="hide"))){el.show()}
if(!defaultMode||normalizedMode!=="none"){$.effects.saveStyle(el)}
if($.isFunction(next)){next()}};if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,complete)}else{return this.each(function(){if(complete){complete.call(this)}})}}
function run(next){var elem=$(this);function cleanup(){elem.removeData(dataSpaceAnimated);$.effects.cleanUp(elem);if(args.mode==="hide"){elem.hide()}
done()}
function done(){if($.isFunction(complete)){complete.call(elem[0])}
if($.isFunction(next)){next()}}
args.mode=modes.shift();if($.uiBackCompat!==!1&&!defaultMode){if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done()}else{effectMethod.call(elem[0],args,done)}}else{if(args.mode==="none"){elem[mode]();done()}else{effectMethod.call(elem[0],args,cleanup)}}}
return queue===!1?this.each(prefilter).each(run):this.queue(queueName,prefilter).queue(queueName,run)},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args)}}})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args)}}})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args)}}})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit]}});return val},cssClip:function(clipObj){if(clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+clipObj.bottom+"px "+clipObj.left+"px)")}
return parseClip(this.css("clip"),this)},transfer:function(options,done){var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,options.duration,options.easing,function(){transfer.remove();if($.isFunction(done)){done()}})}});function parseClip(str,element){var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];return{top:parseFloat(values[1])||0,right:values[2]==="auto"?outerWidth:parseFloat(values[2]),bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),left:parseFloat(values[4])||0}}
$.fx.step.clip=function(fx){if(!fx.clipInit){fx.start=$(fx.elem).cssClip();if(typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem)}
fx.clipInit=!0}
$(fx.elem).cssClip({top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left})}})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2)}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2}})})();var effect=$.effects;var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){var map={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},element=$(this),direction=options.direction||"up",start=element.cssClip(),animate={clip:$.extend({},start)},placeholder=$.effects.createPlaceholder(element);animate.clip[map[direction][0]]=animate.clip[map[direction][1]];if(options.mode==="show"){element.cssClip(animate.clip);if(placeholder){placeholder.css($.effects.clipToBox(animate))}
animate.clip=start}
if(placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing)}
element.animate(animate,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});var effectsEffectBounce=$.effects.define("bounce",function(options,done){var upAnim,downAnim,refValue,element=$(this),mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction||"up",distance=options.distance,times=options.times||5,anims=times*2+(show||hide?1:0),speed=options.duration/anims,easing=options.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i=0,queuelen=element.queue().length;$.effects.createPlaceholder(element);refValue=element.css(ref);if(!distance){distance=element[ref==="top"?"outerHeight":"outerWidth"]()/3}
if(show){downAnim={opacity:1};downAnim[ref]=refValue;element.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing)}
if(hide){distance=distance/Math.pow(2,times-1)}
downAnim={};downAnim[ref]=refValue;for(;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2}
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing)}
element.queue(done);$.effects.unshift(element,queuelen,anims+1)});var effectsEffectClip=$.effects.define("clip","hide",function(options,done){var start,animate={},element=$(this),direction=options.direction||"vertical",both=direction==="both",horizontal=both||direction==="horizontal",vertical=both||direction==="vertical";start=element.cssClip();animate.clip={top:vertical?(start.bottom-start.top)/2:start.top,right:horizontal?(start.right-start.left)/2:start.right,bottom:vertical?(start.bottom-start.top)/2:start.bottom,left:horizontal?(start.right-start.left)/2:start.left};$.effects.createPlaceholder(element);if(options.mode==="show"){element.cssClip(animate.clip);animate.clip=start}
element.animate(animate,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"-=":"+=",oppositeMotion=(motion==="+=")?"-=":"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](!0)/2;animation[ref]=motion+distance;if(show){element.css(animation);animation[ref]=oppositeMotion+distance;animation.opacity=1}
element.animate(animation,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){var i,j,left,top,mx,my,rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",offset=element.show().css("visibility","hidden").offset(),width=Math.ceil(element.outerWidth()/cells),height=Math.ceil(element.outerHeight()/rows),pieces=[];function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete()}}
for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;element.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},options.duration||500,options.easing,childComplete)}}
function animComplete(){element.css({visibility:"visible"});$(pieces).remove();done()}});var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:!1,duration:options.duration,easing:options.easing,complete:done})});var effectsEffectFold=$.effects.define("fold","hide",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst?["right","bottom"]:["bottom","right"],duration=options.duration/2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={clip:$.extend({},start)},animation2={clip:$.extend({},start)},distance=[start[ref[0]],start[ref[1]]],queuelen=element.queue().length;if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1]}
animation1.clip[ref[0]]=size;animation2.clip[ref[0]]=size;animation2.clip[ref[1]]=0;if(show){element.cssClip(animation2.clip);if(placeholder){placeholder.css($.effects.clipToBox(animation2))}
animation2.clip=start}
element.queue(function(next){if(placeholder){placeholder.animate($.effects.clipToBox(animation1),duration,options.easing).animate($.effects.clipToBox(animation2),duration,options.easing)}
next()}).animate(animation1,duration,options.easing).animate(animation2,duration,options.easing).queue(done);$.effects.unshift(element,queuelen,4)});var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if(options.mode==="hide"){animation.opacity=0}
$.effects.saveStyle(element);element.css({backgroundImage:"none",backgroundColor:options.color||"#ffff99"}).animate(animation,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});var effectsEffectSize=$.effects.define("size",function(options,done){var baseline,factor,temp,element=$(this),cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=options.mode,restore=mode!=="effect",scale=options.scale||"both",origin=options.origin||["middle","center"],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from||original,to=options.to||$.effects.scaledDimensions(element,0);$.effects.createPlaceholder(element);if(mode==="show"){temp=from;from=to;to=temp}
factor={from:{y:from.height/original.height,x:from.width/original.width},to:{y:to.height/original.height,x:to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);to=$.effects.setTransition(element,vProps,factor.to.y,to)}
if(factor.from.x!==factor.to.x){from=$.effects.setTransition(element,hProps,factor.from.x,from);to=$.effects.setTransition(element,hProps,factor.to.x,to)}}
if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);to=$.effects.setTransition(element,cProps,factor.to.y,to)}}
if(origin){baseline=$.effects.getBaseline(origin,original);from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left}
element.css(from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height*factor.from.y,width:childOriginal.width*factor.from.x,outerHeight:childOriginal.outerHeight*factor.from.y,outerWidth:childOriginal.outerWidth*factor.from.x},childTo={height:childOriginal.height*factor.to.y,width:childOriginal.width*factor.to.x,outerHeight:childOriginal.height*factor.to.y,outerWidth:childOriginal.width*factor.to.x};if(factor.from.y!==factor.to.y){childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo)}
if(factor.from.x!==factor.to.x){childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo)}
if(restore){$.effects.saveStyle(child)}
child.css(childFrom);child.animate(childTo,options.duration,options.easing,function(){if(restore){$.effects.restoreStyle(child)}})})}
element.animate(to,{queue:!1,duration:options.duration,easing:options.easing,complete:function(){var offset=element.offset();if(to.opacity===0){element.css("opacity",from.opacity)}
if(!restore){element.css("position",position==="static"?"relative":position).offset(offset);$.effects.saveStyle(element)}
done()}})});var effectsEffectScale=$.effects.define("scale",function(options,done){var el=$(this),mode=options.mode,percent=parseInt(options.percent,10)||(parseInt(options.percent,10)===0?0:(mode!=="effect"?0:100)),newOptions=$.extend(!0,{from:$.effects.scaledDimensions(el),to:$.effects.scaledDimensions(el,percent,options.direction||"both"),origin:options.origin||["middle","center"]},options);if(options.fade){newOptions.from.opacity=1;newOptions.to.opacity=0}
$.effects.effect.size.call(this,newOptions,done)});var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){var newOptions=$.extend(!0,{},options,{fade:!0,percent:parseInt(options.percent,10)||150});$.effects.effect.scale.call(this,newOptions,done)});var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",showhide=show||hide,anims=((options.times||5)*2)+(showhide?1:0),duration=options.duration/anims,animateTo=0,i=1,queuelen=element.queue().length;if(show||!element.is(":visible")){element.css("opacity",0).show();animateTo=1}
for(;i<anims;i++){element.animate({opacity:animateTo},duration,options.easing);animateTo=1-animateTo}
element.animate({opacity:animateTo},duration,options.easing);element.queue(done);$.effects.unshift(element,queuelen,anims+1)});var effectsEffectShake=$.effects.define("shake",function(options,done){var i=1,element=$(this),direction=options.direction||"left",distance=options.distance||20,times=options.times||3,anims=times*2+1,speed=Math.round(options.duration/anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},queuelen=element.queue().length;$.effects.createPlaceholder(element);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;element.animate(animation,speed,options.easing);for(;i<times;i++){element.animate(animation1,speed,options.easing).animate(animation2,speed,options.easing)}
element.animate(animation1,speed,options.easing).animate(animation,speed/2,options.easing).queue(done);$.effects.unshift(element,queuelen,anims+1)});var effectsEffectSlide=$.effects.define("slide","show",function(options,done){var startClip,startRef,element=$(this),map={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},mode=options.mode,direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](!0),animation={};$.effects.createPlaceholder(element);startClip=element.cssClip();startRef=element.position()[ref];animation[ref]=(positiveMotion?-1:1)*distance+startRef;animation.clip=element.cssClip();animation.clip[map[direction][1]]=animation.clip[map[direction][0]];if(mode==="show"){element.cssClip(animation.clip);element.css(ref,animation[ref]);animation.clip=startClip;animation[ref]=startRef}
element.animate(animation,{queue:!1,duration:options.duration,easing:options.easing,complete:done})});var effect;if($.uiBackCompat!==!1){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done)})}
var effectsEffectTransfer=effect;$.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return!1}
img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible")}
if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex}else{focusableIfVisible=hasTabindex}
return focusableIfVisible&&$(element).is(":visible")&&visible($(element))};function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility")}
return visibility!=="hidden"}
$.extend($.expr[":"],{focusable:function(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null)}});var focusable=$.ui.focusable;var form=$.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form)};var formResetMixin=$.ui.formResetMixin={_formResetHandler:function(){var form=$(this);setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh()})})},_bindFormResetHandler:function(){this.form=this.element.form();if(!this.form.length){return}
var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){this.form.on("reset.ui-form-reset",this._formResetHandler)}
instances.push(this);this.form.data("ui-form-reset-instances",instances)},_unbindFormResetHandler:function(){if(!this.form.length){return}
var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances)}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}};if($.fn.jquery.substring(0,3)==="1.7"){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0}});return size}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this)}
return this.each(function(){$(this).css(type,reduce(this,size)+"px")})};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size)}
return this.each(function(){$(this).css(type,reduce(this,size,!0,margin)+"px")})}});$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}};var keycode=$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};var escapeSelector=$.ui.escapeSelector=(function(){var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(selector){return selector.replace(selectorEscape,"\\$1")}})();var labels=$.fn.labels=function(){var ancestor,selector,id,labels,ancestors;if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels)}
labels=this.eq(0).parents("label");id=this.attr("id");if(id){ancestor=this.eq(0).parents().last();ancestors=ancestor.add(ancestor.length?ancestor.siblings():this.siblings());selector="label[for='"+$.ui.escapeSelector(id)+"']";labels=labels.add(ancestors.find(selector).addBack(selector))}
return this.pushStack(labels)};var scrollParent=$.fn.scrollParent=function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return!1}
return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"))}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent};var tabbable=$.extend($.expr[":"],{tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),hasTabindex=tabIndex!=null;return(!hasTabindex||tabIndex>=0)&&$.ui.focusable(element,hasTabindex)}});var uniqueId=$.fn.extend({uniqueId:(function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid)}})}})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id")}})}});var widgetsAccordion=$.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var options=this.options;this.prevShow=this.prevHide=$();this._addClass("ui-accordion","ui-widget ui-helper-reset");this.element.attr("role","tablist");if(!options.collapsible&&(options.active===!1||options.active==null)){options.active=0}
this._processPanels();if(options.active<0){options.active+=this.headers.length}
this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?$():this.active.next()}},_createIcons:function(){var icon,children,icons=this.options.icons;if(icons){icon=$("<span>");this._addClass(icon,"ui-accordion-header-icon","ui-icon "+icons.header);icon.prependTo(this.headers);children=this.active.children(".ui-accordion-header-icon");this._removeClass(children,icons.header)._addClass(children,null,icons.activeHeader)._addClass(this.headers,"ui-accordion-icons")}},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons");this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var contents;this.element.removeAttr("role");this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();this._destroyIcons();contents=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();if(this.options.heightStyle!=="content"){contents.css("height","")}},_setOption:function(key,value){if(key==="active"){this._activate(value);return}
if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event)}
this._setupEvents(value)}
this._super(key,value);if(key==="collapsible"&&!value&&this.options.active===!1){this._activate(0)}
if(key==="icons"){this._destroyIcons();if(value){this._createIcons()}}},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value);this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!value)},_keydown:function(event){if(event.altKey||event.ctrlKey){return}
var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=!1;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break}
if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);$(toFocus).trigger("focus");event.preventDefault()}},_panelKeyDown:function(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().trigger("focus")}},refresh:function(){var options=this.options;this._processPanels();if((options.active===!1&&options.collapsible===!0)||!this.headers.length){options.active=!1;this.active=$()}else if(options.active===!1){this._activate(0)}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=!1;this.active=$()}else{this._activate(Math.max(0,options.active-1))}}else{options.active=this.headers.index(this.active)}
this._destroyIcons();this._refresh()},_processPanels:function(){var prevHeaders=this.headers,prevPanels=this.panels;this.headers=this.element.find(this.options.header);this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");if(prevPanels){this._off(prevHeaders.not(this.headers));this._off(prevPanels.not(this.panels))}},_refresh:function(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();this.active=this._findActive(options.active);this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed");this._addClass(this.active.next(),"ui-accordion-content-active");this.active.next().show();this.headers.attr("role","tab").each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})}
this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return}
maxHeight-=elem.outerHeight(!0)});this.headers.each(function(){maxHeight-=$(this).outerHeight(!0)});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){var isVisible=$(this).is(":visible");if(!isVisible){$(this).show()}
maxHeight=Math.max(maxHeight,$(this).css("height","").height());if(!isVisible){$(this).hide()}}).height(maxHeight)}},_activate:function(index){var active=this._findActive(index)[0];if(active===this.active[0]){return}
active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop})},_findActive:function(selector){return typeof selector==="number"?this.headers.eq(selector):$()},_setupEvents:function(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"})}
this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(event){var activeChildren,clickedChildren,options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if((clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===!1)){return}
options.active=collapsing?!1:this.headers.index(clicked);this.active=clickedIsActive?$():clicked;this._toggle(eventData);this._removeClass(active,"ui-accordion-header-active","ui-state-active");if(options.icons){activeChildren=active.children(".ui-accordion-header-icon");this._removeClass(activeChildren,null,options.icons.activeHeader)._addClass(activeChildren,null,options.icons.header)}
if(!clickedIsActive){this._removeClass(clicked,"ui-accordion-header-collapsed")._addClass(clicked,"ui-accordion-header-active","ui-state-active");if(options.icons){clickedChildren=clicked.children(".ui-accordion-header-icon");this._removeClass(clickedChildren,null,options.icons.header)._addClass(clickedChildren,null,options.icons.activeHeader)}
this._addClass(clicked.next(),"ui-accordion-content-active")}},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data)}else{toHide.hide();toShow.show();this._toggleComplete(data)}
toHide.attr({"aria-hidden":"true"});toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){toHide.prev().attr({"tabIndex":-1,"aria-expanded":"false"})}else if(toShow.length){this.headers.filter(function(){return parseInt($(this).attr("tabIndex"),10)===0}).attr("tabIndex",-1)}
toShow.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,boxSizing=toShow.css("box-sizing"),down=toShow.length&&(!toHide.length||(toShow.index()<toHide.index())),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data)};if(typeof options==="number"){duration=options}
if(typeof options==="string"){easing=options}
easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(this.showProps,duration,easing,complete)}
if(!toShow.length){return toHide.animate(this.hideProps,duration,easing,complete)}
total=toShow.show().outerHeight();toHide.animate(this.hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now)}});toShow.hide().animate(this.showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){if(boxSizing==="content-box"){adjust+=fx.now}}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0}}})},_toggleComplete:function(data){var toHide=data.oldPanel,prev=toHide.prev();this._removeClass(toHide,"ui-accordion-content-active");this._removeClass(prev,"ui-accordion-header-active")._addClass(prev,"ui-accordion-header-collapsed");if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className}
this._trigger("activate",null,data)}});var safeActiveElement=$.ui.safeActiveElement=function(document){var activeElement;try{activeElement=document.activeElement}catch(error){activeElement=document.body}
if(!activeElement){activeElement=document.body}
if(!activeElement.nodeName){activeElement=document.body}
return activeElement};var widgetsMenu=$.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=!1;this.element.uniqueId().attr({role:this.options.role,tabIndex:0});this._addClass("ui-menu","ui-widget ui-widget-content");this._on({"mousedown .ui-menu-item":function(event){event.preventDefault()},"click .ui-menu-item":function(event){var target=$(event.target);var active=$($.ui.safeActiveElement(this.document[0]));if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.select(event);if(!event.isPropagationStopped()){this.mouseHandled=!0}
if(target.has(".ui-menu").length){this.expand(event)}else if(!this.element.is(":focus")&&active.closest(".ui-menu").length){this.element.trigger("focus",[!0]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}},"mouseenter .ui-menu-item":function(event){if(this.previousFilter){return}
var actualTarget=$(event.target).closest(".ui-menu-item"),target=$(event.currentTarget);if(actualTarget[0]!==target[0]){return}
this._removeClass(target.siblings().children(".ui-state-active"),null,"ui-state-active");this.focus(event,target)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){var item=this.active||this.element.find(this.options.items).eq(0);if(!keepActiveItem){this.focus(event,item)}},blur:function(event){this._delay(function(){var notContained=!$.contains(this.element[0],$.ui.safeActiveElement(this.document[0]));if(notContained){this.collapseAll(event)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(event){if(this._closeOnDocumentClick(event)){this.collapseAll(event)}
this.mouseHandled=!1}})},_destroy:function(){var items=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),submenus=items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled "+"tabIndex").removeUniqueId().show();submenus.children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-caret")){elem.remove()}})},_keydown:function(event){var match,prev,character,skip,preventDefault=!0;switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event)}
break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=!1;prev=this.previousFilter||"";skip=!1;character=event.keyCode>=96&&event.keyCode<=105?(event.keyCode-96).toString():String.fromCharCode(event.keyCode);clearTimeout(this.filterTimer);if(character===prev){skip=!0}else{character=prev+character}
match=this._filterMenuItems(character);match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;if(!match.length){character=String.fromCharCode(event.keyCode);match=this._filterMenuItems(character)}
if(match.length){this.focus(event,match);this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}
if(preventDefault){event.preventDefault()}},_activate:function(event){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(event)}else{this.select(event)}}},refresh:function(){var menus,items,newSubmenus,newItems,newWrappers,that=this,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);newSubmenus=submenus.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev(),submenuCaret=$("<span>").data("ui-menu-submenu-caret",!0);that._addClass(submenuCaret,"ui-menu-icon","ui-icon "+icon);item.attr("aria-haspopup","true").prepend(submenuCaret);menu.attr("aria-labelledby",item.attr("id"))});this._addClass(newSubmenus,"ui-menu","ui-widget ui-widget-content ui-front");menus=submenus.add(this.element);items=menus.find(this.options.items);items.not(".ui-menu-item").each(function(){var item=$(this);if(that._isDivider(item)){that._addClass(item,"ui-menu-divider","ui-widget-content")}});newItems=items.not(".ui-menu-item, .ui-menu-divider");newWrappers=newItems.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});this._addClass(newItems,"ui-menu-item")._addClass(newWrappers,"ui-menu-item-wrapper");items.filter(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(key,value){if(key==="icons"){var icons=this.element.find(".ui-menu-icon");this._removeClass(icons,null,this.options.icons.submenu)._addClass(icons,null,value.submenu)}
this._super(key,value)},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",String(value));this._toggleClass(null,"ui-state-disabled",!!value)},focus:function(event,item){var nested,focused,activeParent;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children(".ui-menu-item-wrapper");this._addClass(focused,null,"ui-state-active");if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"))}
activeParent=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");this._addClass(activeParent,null,"ui-state-active");if(event&&event.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}
nested=item.children(".ui-menu");if(nested.length&&event&&(/^mouse/.test(event.type))){this._startOpening(nested)}
this.activeMenu=item.parent();this._trigger("focus",event,{item:item})},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.outerHeight();if(offset<0){this.activeMenu.scrollTop(scroll+offset)}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight)}}},blur:function(event,fromFocus){if(!fromFocus){clearTimeout(this.timer)}
if(!this.active){return}
this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");this._trigger("blur",event,{item:this.active});this.active=null},_startOpening:function(submenu){clearTimeout(this.timer);if(submenu.attr("aria-hidden")!=="true"){return}
this.timer=this._delay(function(){this._close();this._open(submenu)},this.delay)},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position)},collapseAll:function(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));if(!currentMenu.length){currentMenu=this.element}
this._close(currentMenu);this.blur(event);this._removeClass(currentMenu.find(".ui-state-active"),null,"ui-state-active");this.activeMenu=currentMenu},this.delay)},_close:function(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element}
startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(event){return!$(event.target).closest(".ui-menu").length},_isDivider:function(item){return!/[^\-\u2014\u2013\s]/.test(item.text())},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem)}},expand:function(event){var newItem=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();if(newItem&&newItem.length){this._open(newItem.parent());this._delay(function(){this.focus(event,newItem)})}},next:function(event){this._move("next","first",event)},previous:function(event){this._move("prev","last",event)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{next=this.active[direction+"All"](".ui-menu-item").eq(0)}}
if(!next||!next.length||!this.active){next=this.activeMenu.find(this.options.items)[filter]()}
this.focus(event,next)},nextPage:function(event){var item,base,height;if(!this.active){this.next(event);return}
if(this.isLastItem()){return}
if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0});this.focus(event,item)}else{this.focus(event,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())}},previousPage:function(event){var item,base,height;if(!this.active){this.next(event);return}
if(this.isFirstItem()){return}
if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0});this.focus(event,item)}else{this.focus(event,this.activeMenu.find(this.options.items).first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(event){this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,!0)}
this._trigger("select",event,ui)},_filterMenuItems:function(character){var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),regex=new RegExp("^"+escapedCharacter,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()))})}});$.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";this.isMultiLine=isTextarea||!isInput&&this._isContentEditable(this.element);this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=!0;this._addClass("ui-autocomplete-input");this.element.attr("autocomplete","off");this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly")){suppressKeyPress=!0;suppressInput=!0;suppressKeyPressRepeat=!0;return}
suppressKeyPress=!1;suppressInput=!1;suppressKeyPressRepeat=!1;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=!0;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=!0;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=!0;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=!0;this._keyEvent("next",event);break;case keyCode.ENTER:if(this.menu.active){suppressKeyPress=!0;event.preventDefault();this.menu.select(event)}
break;case keyCode.TAB:if(this.menu.active){this.menu.select(event)}
break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)}
this.close(event);event.preventDefault()}
break;default:suppressKeyPressRepeat=!0;this._searchTimeout(event);break}},keypress:function(event){if(suppressKeyPress){suppressKeyPress=!1;if(!this.isMultiLine||this.menu.element.is(":visible")){event.preventDefault()}
return}
if(suppressKeyPressRepeat){return}
var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break}},input:function(event){if(suppressInput){suppressInput=!1;event.preventDefault();return}
this._searchTimeout(event)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return}
clearTimeout(this.searching);this.close(event);this._change(event)}});this._initSource();this.menu=$("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");this._addClass(this.menu.element,"ui-autocomplete","ui-front");this._on(this.menu.element,{mousedown:function(event){event.preventDefault();this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur;if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus")}})},menufocus:function(event,ui){var label,item;if(this.isNewMenu){this.isNewMenu=!1;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent)});return}}
item=ui.item.data("ui-autocomplete-item");if(!1!==this._trigger("focus",event,{item:item})){if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value)}}
label=ui.item.attr("aria-label")||item.value;if(label&&$.trim(label).length){this.liveRegion.children().hide();$("<div>").text(label).appendTo(this.liveRegion)}},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");this.previous=previous;this._delay(function(){this.previous=previous;this.selectedItem=item})}
if(!1!==this._trigger("select",event,{item:item})){this._value(item.value)}
this.term=this._value();this.close(event);this.selectedItem=item}});this.liveRegion=$("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(key,value){this._super(key,value);if(key==="source"){this._initSource()}
if(key==="appendTo"){this.menu.element.appendTo(this._appendTo())}
if(key==="disabled"&&value&&this.xhr){this.xhr.abort()}},_isEventTargetInWidget:function(event){var menuElement=this.menu.element[0];return event.target===this.element[0]||event.target===menuElement||$.contains(menuElement,event.target)},_closeOnClickOutside:function(event){if(!this._isEventTargetInWidget(event)){this.close()}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0)}
if(!element||!element[0]){element=this.element.closest(".ui-front, dialog")}
if(!element.length){element=this.document[0].body}
return element},_initSource:function(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term))}}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort()}
that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data)},error:function(){response([])}})}}else{this.source=this.options.source}},_searchTimeout:function(event){clearTimeout(this.searching);this.searching=this._delay(function(){var equalValues=this.term===this._value(),menuVisible=this.menu.element.is(":visible"),modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;if(!equalValues||(equalValues&&!menuVisible&&!modifierKey)){this.selectedItem=null;this.search(null,event)}},this.options.delay)},search:function(value,event){value=value!=null?value:this._value();this.term=this._value();if(value.length<this.options.minLength){return this.close(event)}
if(this._trigger("search",event)===!1){return}
return this._search(value)},_search:function(value){this.pending++;this._addClass("ui-autocomplete-loading");this.cancelSearch=!1;this.source({term:value},this._response())},_response:function(){var index=++this.requestIndex;return $.proxy(function(content){if(index===this.requestIndex){this.__response(content)}
this.pending--;if(!this.pending){this._removeClass("ui-autocomplete-loading")}},this)},__response:function(content){if(content){content=this._normalize(content)}
this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open")}else{this._close()}},close:function(event){this.cancelSearch=!0;this._close(event)},_close:function(event){this._off(this.document,"mousedown");if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=!0;this._trigger("close",event)}},_change:function(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem})}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items}
return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item}}
return $.extend({},item,{label:item.label||item.value,value:item.value||item.label})})},_suggest:function(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=!0;this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}
this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item)},_renderItem:function(ul,item){return $("<li>").append($("<div>").text(item.label)).appendTo(ul)},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return}
if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){if(!this.isMultiLine){this._value(this.term)}
this.menu.blur();return}
this.menu[direction](event)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);event.preventDefault()}},_isContentEditable:function(element){if(!element.length){return!1}
var editable=element.prop("contentEditable");if(editable==="inherit"){return this._isContentEditable(element.parent())}
return editable==="true"}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value)})}});$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}
if(content&&content.length){message=this.options.messages.results(content.length)}else{message=this.options.messages.noResults}
this.liveRegion.children().hide();$("<div>").text(message).appendTo(this.liveRegion)}});var widgetsAutocomplete=$.ui.autocomplete;var controlgroupCornerRegex=/ui-corner-([a-z]){2,6}/g;var widgetsControlgroup=$.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{"button":"input[type=button], input[type=submit], input[type=reset], button, a","controlgroupLabel":".ui-controlgroup-label","checkboxradio":"input[type='checkbox'], input[type='radio']","selectmenu":"select","spinner":".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar");this.refresh()},_destroy:function(){this._callChildMethod("destroy");this.childWidgets.removeData("ui-controlgroup-data");this.element.removeAttr("role");if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()}},_initWidgets:function(){var that=this,childWidgets=[];$.each(this.options.items,function(widget,selector){var labels;var options={};if(!selector){return}
if(widget==="controlgroupLabel"){labels=that.element.find(selector);labels.each(function(){var element=$(this);if(element.children(".ui-controlgroup-label-contents").length){return}
element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")});that._addClass(labels,null,"ui-widget ui-widget-content ui-state-default");childWidgets=childWidgets.concat(labels.get());return}
if(!$.fn[widget]){return}
if(that["_"+widget+"Options"]){options=that["_"+widget+"Options"]("middle")}else{options={classes:{}}}
that.element.find(selector).each(function(){var element=$(this);var instance=element[widget]("instance");var instanceOptions=$.widget.extend({},options);if(widget==="button"&&element.parent(".ui-spinner").length){return}
if(!instance){instance=element[widget]()[widget]("instance")}
if(instance){instanceOptions.classes=that._resolveClassesValues(instanceOptions.classes,instance)}
element[widget](instanceOptions);var widgetElement=element[widget]("widget");$.data(widgetElement[0],"ui-controlgroup-data",instance?instance:element[widget]("instance"));childWidgets.push(widgetElement[0])})});this.childWidgets=$($.unique(childWidgets));this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(method){this.childWidgets.each(function(){var element=$(this),data=element.data("ui-controlgroup-data");if(data&&data[method]){data[method]()}})},_updateCornerClass:function(element,position){var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";var add=this._buildSimpleOptions(position,"label").classes.label;this._removeClass(element,null,remove);this._addClass(element,null,add)},_buildSimpleOptions:function(position,key){var direction=this.options.direction==="vertical";var result={classes:{}};result.classes[key]={"middle":"","first":"ui-corner-"+(direction?"top":"left"),"last":"ui-corner-"+(direction?"bottom":"right"),"only":"ui-corner-all"}[position];return result},_spinnerOptions:function(position){var options=this._buildSimpleOptions(position,"ui-spinner");options.classes["ui-spinner-up"]="";options.classes["ui-spinner-down"]="";return options},_buttonOptions:function(position){return this._buildSimpleOptions(position,"ui-button")},_checkboxradioOptions:function(position){return this._buildSimpleOptions(position,"ui-checkboxradio-label")},_selectmenuOptions:function(position){var direction=this.options.direction==="vertical";return{width:direction?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(direction?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(direction?"top":"left")},last:{"ui-selectmenu-button-open":direction?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(direction?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[position]}},_resolveClassesValues:function(classes,instance){var result={};$.each(classes,function(key){var current=instance.options.classes[key]||"";current=$.trim(current.replace(controlgroupCornerRegex,""));result[key]=(current+" "+classes[key]).replace(/\s+/g," ")});return result},_setOption:function(key,value){if(key==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction)}
this._super(key,value);if(key==="disabled"){this._callChildMethod(value?"disable":"enable");return}
this.refresh()},refresh:function(){var children,that=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix")}
this._initWidgets();children=this.childWidgets;if(this.options.onlyVisible){children=children.filter(":visible")}
if(children.length){$.each(["first","last"],function(index,value){var instance=children[value]().data("ui-controlgroup-data");if(instance&&that["_"+instance.widgetName+"Options"]){var options=that["_"+instance.widgetName+"Options"](children.length===1?"only":value);options.classes=that._resolveClassesValues(options.classes,instance);instance.element[instance.widgetName](options)}else{that._updateCornerClass(children[value](),value)}});this._callChildMethod("refresh")}}});$.widget("ui.checkboxradio",[$.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var disabled,labels;var that=this;var options=this._super()||{};this._readType();labels=this.element.labels();this.label=$(labels[labels.length-1]);if(!this.label.length){$.error("No label found for checkboxradio widget")}
this.originalLabel="";this.label.contents().not(this.element[0]).each(function(){that.originalLabel+=this.nodeType===3?$(this).text():this.outerHTML});if(this.originalLabel){options.label=this.originalLabel}
disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled}
return options},_create:function(){var checked=this.element[0].checked;this._bindFormResetHandler();if(this.options.disabled==null){this.options.disabled=this.element[0].disabled}
this._setOption("disabled",this.options.disabled);this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label")}
if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel()}else if(this.originalLabel){this.options.label=this.originalLabel}
this._enhance();if(checked){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");if(this.icon){this._addClass(this.icon,null,"ui-state-hover")}}
this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var nodeName=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type;if(nodeName!=="input"||!/radio|checkbox/.test(this.type)){$.error("Can't create checkboxradio on element.nodeName="+nodeName+" and element.type="+this.type)}},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var group;var name=this.element[0].name;var nameSelector="input[name='"+$.ui.escapeSelector(name)+"']";if(!name){return $([])}
if(this.form.length){group=$(this.form[0].elements).filter(nameSelector)}else{group=$(nameSelector).filter(function(){return $(this).form().length===0})}
return group.not(this.element)},_toggleClasses:function(){var checked=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",checked)._toggleClass(this.icon,null,"ui-icon-blank",!checked)}
if(this.type==="radio"){this._getRadioGroup().each(function(){var instance=$(this).checkboxradio("instance");if(instance){instance._removeClass(instance.label,"ui-checkboxradio-checked","ui-state-active")}})}},_destroy:function(){this._unbindFormResetHandler();if(this.icon){this.icon.remove();this.iconSpace.remove()}},_setOption:function(key,value){if(key==="label"&&!value){return}
this._super(key,value);if(key==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",value);this.element[0].disabled=value;return}
this.refresh()},_updateIcon:function(checked){var toAdd="ui-icon ui-icon-background ";if(this.options.icon){if(!this.icon){this.icon=$("<span>");this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")}
if(this.type==="checkbox"){toAdd+=checked?"ui-icon-check ui-state-checked":"ui-icon-blank";this._removeClass(this.icon,null,checked?"ui-icon-blank":"ui-icon-check")}else{toAdd+="ui-icon-blank"}
this._addClass(this.icon,"ui-checkboxradio-icon",toAdd);if(!checked){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked")}
this.icon.prependTo(this.label).after(this.iconSpace)}else if(this.icon!==undefined){this.icon.remove();this.iconSpace.remove();delete this.icon}},_updateLabel:function(){var contents=this.label.contents().not(this.element[0]);if(this.icon){contents=contents.not(this.icon[0])}
if(this.iconSpace){contents=contents.not(this.iconSpace[0])}
contents.remove();this.label.append(this.options.label)},refresh:function(){var checked=this.element[0].checked,isDisabled=this.element[0].disabled;this._updateIcon(checked);this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.label!==null){this._updateLabel()}
if(isDisabled!==this.options.disabled){this._setOptions({"disabled":isDisabled})}}}]);var widgetsCheckboxradio=$.ui.checkboxradio;$.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var disabled,options=this._super()||{};this.isInput=this.element.is("input");disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled}
this.originalLabel=this.isInput?this.element.val():this.element.html();if(this.originalLabel){options.label=this.originalLabel}
return options},_create:function(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=!0}
if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||!1}
this.hasTitle=!!this.element.attr("title");if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label)}else{this.element.html(this.options.label)}}
this._addClass("ui-button","ui-widget");this._setOption("disabled",this.options.disabled);this._enhance();if(this.element.is("a")){this._on({"keyup":function(event){if(event.keyCode===$.ui.keyCode.SPACE){event.preventDefault();if(this.element[0].click){this.element[0].click()}else{this.element.trigger("click")}}}})}},_enhance:function(){if(!this.element.is("button")){this.element.attr("role","button")}
if(this.options.icon){this._updateIcon("icon",this.options.icon);this._updateTooltip()}},_updateTooltip:function(){this.title=this.element.attr("title");if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label)}},_updateIcon:function(option,value){var icon=option!=="iconPosition",position=icon?this.options.iconPosition:value,displayBlock=position==="top"||position==="bottom";if(!this.icon){this.icon=$("<span>");this._addClass(this.icon,"ui-button-icon","ui-icon");if(!this.options.showLabel){this._addClass("ui-button-icon-only")}}else if(icon){this._removeClass(this.icon,null,this.options.icon)}
if(icon){this._addClass(this.icon,null,value)}
this._attachIcon(position);if(displayBlock){this._addClass(this.icon,null,"ui-widget-icon-block");if(this.iconSpace){this.iconSpace.remove()}}else{if(!this.iconSpace){this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-button-icon-space")}
this._removeClass(this.icon,null,"ui-wiget-icon-block");this._attachIconSpace(position)}},_destroy:function(){this.element.removeAttr("role");if(this.icon){this.icon.remove()}
if(this.iconSpace){this.iconSpace.remove()}
if(!this.hasTitle){this.element.removeAttr("title")}},_attachIconSpace:function(iconPosition){this.icon[/^(?:end|bottom)/.test(iconPosition)?"before":"after"](this.iconSpace)},_attachIcon:function(iconPosition){this.element[/^(?:end|bottom)/.test(iconPosition)?"append":"prepend"](this.icon)},_setOptions:function(options){var newShowLabel=options.showLabel===undefined?this.options.showLabel:options.showLabel,newIcon=options.icon===undefined?this.options.icon:options.icon;if(!newShowLabel&&!newIcon){options.showLabel=!0}
this._super(options)},_setOption:function(key,value){if(key==="icon"){if(value){this._updateIcon(key,value)}else if(this.icon){this.icon.remove();if(this.iconSpace){this.iconSpace.remove()}}}
if(key==="iconPosition"){this._updateIcon(key,value)}
if(key==="showLabel"){this._toggleClass("ui-button-icon-only",null,!value);this._updateTooltip()}
if(key==="label"){if(this.isInput){this.element.val(value)}else{this.element.html(value);if(this.icon){this._attachIcon(this.options.iconPosition);this._attachIconSpace(this.options.iconPosition)}}}
this._super(key,value);if(key==="disabled"){this._toggleClass(null,"ui-state-disabled",value);this.element[0].disabled=value;if(value){this.element.blur()}}},refresh:function(){var isDisabled=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOptions({disabled:isDisabled})}
this._updateTooltip()}});if($.uiBackCompat!==!1){$.widget("ui.button",$.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text}
if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel}
if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary}else{this.options.icon=this.options.icons.secondary;this.options.iconPosition="end"}}else if(this.options.icon){this.options.icons.primary=this.options.icon}
this._super()},_setOption:function(key,value){if(key==="text"){this._super("showLabel",value);return}
if(key==="showLabel"){this.options.text=value}
if(key==="icon"){this.options.icons.primary=value}
if(key==="icons"){if(value.primary){this._super("icon",value.primary);this._super("iconPosition","beginning")}else if(value.secondary){this._super("icon",value.secondary);this._super("iconPosition","end")}}
this._superApply(arguments)}});$.fn.button=(function(orig){return function(){if(!this.length||(this.length&&this[0].tagName!=="INPUT")||(this.length&&this[0].tagName==="INPUT"&&(this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"))){return orig.apply(this,arguments)}
if(!$.ui.checkboxradio){$.error("Checkboxradio widget missing")}
if(arguments.length===0){return this.checkboxradio({"icon":!1})}
return this.checkboxradio.apply(this,arguments)}})($.fn.button);$.fn.buttonset=function(){if(!$.ui.controlgroup){$.error("Controlgroup widget missing")}
if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]])}
if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"])}
if(typeof arguments[0]==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items}}
return this.controlgroup.apply(this,arguments)}}
var widgetsButton=$.ui.button;$.extend($.ui,{datepicker:{version:"1.12.1"}});var datepicker_instActive;function datepicker_getZindex(elem){var position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value}}
elem=elem.parent()}
return 0}
function Datepicker(){this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._datepickerShowing=!1;this._inDialog=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};$.extend(this._defaults,this.regional[""]);this.regional.en=$.extend(!0,{},this.regional[""]);this.regional["en-US"]=$.extend(!0,{},this.regional.en);this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}
$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){datepicker_extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=(nodeName==="div"||nodeName==="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}
inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst)}else if(inline){this._inlineDatepicker(target,inst)}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}
this._attachments(input,inst);input.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);this._autoSize(inst);$.data(target,"datepicker",inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}
if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}
input.off("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}
showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){input.on("focus",this._showDatepicker)}
if(showOn==="button"||showOn==="both"){buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.on("click",function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker()}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}
return!1})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}
return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}
inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}
divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,"datepicker",inst);this._setDate(inst,this._getDefaultDate(inst),!0);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}
inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.on("keydown",this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,!1);inst.settings={};$.data(this._dialogInput[0],"datepicker",inst)}
datepicker_extendRemove(inst.settings,settings||{});date=(date&&date.constructor===Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}
this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}
$.data(this._dialogInput[0],"datepicker",inst);return this},_destroyDatepicker:function(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return}
nodeName=target.nodeName.toLowerCase();$.removeData(target,"datepicker");if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty()}
if(datepicker_instActive===inst){datepicker_instActive=null}},_enableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return}
nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=!1;inst.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value)})},_disableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return}
nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=!0;inst.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return!1}
for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return!0}}
return!1},_getInst:function(target){try{return $.data(target,"datepicker")}catch(err){throw "Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return(name==="defaults"?$.extend({},$.datepicker._defaults):(inst?(name==="all"?$.extend({},inst.settings):this._get(inst,name)):null))}
settings=name||{};if(typeof name==="string"){settings={};settings[name]=value}
if(inst){if(this._curInst===inst){this._hideDatepicker()}
date=this._getDateDatepicker(target,!0);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");datepicker_extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}
if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}
if("disabled" in settings){if(settings.disabled){this._disableDatepicker(target)}else{this._enableDatepicker(target)}}
this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}
return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=!0,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=!0;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=!1;break;case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}
onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}
return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}
handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}
handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}
handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}
break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}
handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}
handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}
break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}
handled=event.ctrlKey||event.metaKey;break;default:handled=!1}}else if(event.keyCode===36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=!1}
if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){}}
return!0},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){input=$("input",input.parentNode)[0]}
if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){return}
var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(!0,!0);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}
beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===!1){return}
datepicker_extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}
if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}
isFixed=!1;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);$.datepicker._datepickerShowing=!0;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration)}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null)}
if($.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus")}
$.datepicker._curInst=inst}},_updateDatepicker:function(inst){this.maxRows=4;datepicker_instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");if(activeCell.length>0){datepicker_handleMouseover.apply(activeCell.get(0))}
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}
inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus")}
if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}
origyearshtml=inst.yearshtml=null},0)}},_shouldFocusInput:function(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus")},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left===inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top===(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}
position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||(input&&inst!==$.data(input,"datepicker"))){return}
if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim==="slideDown"?"slideUp":(showAnim==="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}
if(!showAnim){postProcess()}
this._datepickerShowing=!1;onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}
this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}
this._inDialog=!1}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}
var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}
this._adjustInstDate(inst,offset+(period==="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}
this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}
inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);this._selectDate(target,"")},_selectDate:function(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}
this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else if(inst.input){inst.input.trigger("change")}
if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!=="object"){inst.input.trigger("focus")}
this._lastInput=null}},_updateAlternate:function(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).val(dateStr)}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var time,checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw "Invalid arguments"}
value=(typeof value==="object"?value.toString():value+"");if(value===""){return null}
var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=(typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10)),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=!1,date,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++}
return matches},getNumber=function(match){var isDoubled=lookAhead(match),size=(match==="@"?14:(match==="!"?20:(match==="y"&&isDoubled?4:(match==="o"?3:2)))),minSize=(match==="y"?size:1),digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw "Missing number at position "+iValue}
iValue+=num[0].length;return parseInt(num[0],10)},getName=function(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return-(a[1].length-b[1].length)});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return!1}});if(index!==-1){return index+1}else{throw "Unknown name at position "+iValue}},checkLiteral=function(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw "Unexpected literal at position "+iValue}
iValue++};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=!1}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case "d":day=getNumber("d");break;case "D":getName("D",dayNamesShort,dayNames);break;case "o":doy=getNumber("o");break;case "m":month=getNumber("m");break;case "M":month=getName("M",monthNamesShort,monthNames);break;case "y":year=getNumber("y");break;case "@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case "!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case "'":if(lookAhead("'")){checkLiteral()}else{literal=!0}
break;default:checkLiteral()}}}
if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw "Extra/unparsed characters found in date: "+extra}}
if(year===-1){year=new Date().getFullYear()}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}
if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}
month++;day-=dim}while(!0);}
date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw "Invalid date"}
return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}
var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++}
return matches},formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}
return num},formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])},output="",literal=!1;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=!1}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case "d":output+=formatNumber("d",date.getDate(),2);break;case "D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case "o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case "m":output+=formatNumber("m",date.getMonth()+1,2);break;case "M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case "y":output+=(lookAhead("y")?date.getFullYear():(date.getFullYear()%100<10?"0":"")+date.getFullYear()%100);break;case "@":output+=date.getTime();break;case "!":output+=date.getTime()*10000+this._ticksTo1970;break;case "'":if(lookAhead("'")){output+="'"}else{literal=!0}
break;default:output+=format.charAt(iFormat)}}}}
return output},_possibleChars:function(format){var iFormat,chars="",literal=!1,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++}
return matches};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=!1}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case "d":case "m":case "y":case "@":chars+="0123456789";break;case "D":case "M":return null;case "'":if(lookAhead("'")){chars+="'"}else{literal=!0}
break;default:chars+=format.charAt(iFormat)}}}
return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()===inst.lastVal){return}
var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){dates=(noDefault?"":dates)}
inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date},offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}
var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case "d":case "D":day+=parseInt(matches[1],10);break;case "w":case "W":day+=parseInt(matches[1],10)*7;break;case "m":case "M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case "y":case "Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}
matches=pattern.exec(offset)}
return new Date(year,month,day)},newDate=(date==null||date===""?defaultDate:(typeof date==="string"?offsetString(date):(typeof date==="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}
return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}
date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst)}
this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){$.datepicker._adjustDate(id,-stepMonths,"M")},next:function(){$.datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){$.datepicker._hideDatepicker()},today:function(){$.datepicker._gotoToday(id)},selectDay:function(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){$.datepicker._selectMonthYear(id,this,"M");return!1},selectYear:function(){$.datepicker._selectMonthYear(id,this,"Y");return!1}};$(this).on(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=(numMonths[0]!==1||numMonths[1]!==1),currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay))),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}
if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}
inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>"));nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>"));currentText=this._get(inst,"currentText");gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));controls=(!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>":"");buttonPanel=(showButtonPanel)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}
calender+="'>"}
calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&row===0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row===0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=(showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"");for(dow=0;dow<7;dow++){day=(dow+firstDay)%7;thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>"}
calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}
leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){calender+="<tr>";tbody=(!showWeek?"":"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>");for(dow=0;dow<7;dow++){daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[!0,""]);otherMonth=(printDate.getMonth()!==drawMonth);unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+((!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+(unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+"' href='#'>"+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}
calender+=tbody+"</tr>"}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}
calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col===numMonths[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender}
html+=group}
html+=buttonPanel;inst._keyEvent=!1;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>"}else{inMinYear=(minDate&&minDate.getFullYear()===drawYear);inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>"}}
monthHtml+="</select>"}
if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}
if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>"}else{years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function(value){var year=(value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>"}
inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}
html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}
html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.selectedYear+(period==="Y"?offset:0),month=inst.selectedMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=(minDate&&date<minDate?minDate:date);return(maxDate&&newDate>maxDate?maxDate:newDate)},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths==="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}
return this._isInRange(inst,date)},_isInRange:function(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear}
if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear}}
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}
var date=(day?(typeof day==="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.on("mouseout",selector,function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover")}
if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover")}}).on("mouseover",selector,datepicker_handleMouseover)}
function datepicker_handleMouseover(){if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover")}
if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover")}}}
function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name]}}
return target}
$.fn.datepicker=function(options){if(!this.length){return this}
if(!$.datepicker.initialized){$(document).on("mousedown",$.datepicker._checkExternalClick);$.datepicker.initialized=!0}
if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv)}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}
if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}
return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=!1;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.12.1";var widgetsDatepicker=$.datepicker;var ie=$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var mouseHandled=!1;$(document).on("mouseup",function(){mouseHandled=!1});var widgetsMouse=$.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.on("mousedown."+this.widgetName,function(event){return that._mouseDown(event)}).on("click."+this.widgetName,function(event){if(!0===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return!1}});this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName);if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(event){if(mouseHandled){return}
this._mouseMoved=!1;(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:!1);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return!0}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=!0},this.options.delay)}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==!1);if(!this._mouseStarted){event.preventDefault();return!0}}
if(!0===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent")}
this._mouseMoveDelegate=function(event){return that._mouseMove(event)};this._mouseUpDelegate=function(event){return that._mouseUp(event)};this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=!0;return!0},_mouseMove:function(event){if(this._mouseMoved){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event)}else if(!event.which){if(event.originalEvent.altKey||event.originalEvent.ctrlKey||event.originalEvent.metaKey||event.originalEvent.shiftKey){this.ignoreMissingWhich=!0}else if(!this.ignoreMissingWhich){return this._mouseUp(event)}}}
if(event.which||event.button){this._mouseMoved=!0}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault()}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==!1);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event))}
return!this._mouseStarted},_mouseUp:function(event){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=!1;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",!0)}
this._mouseStop(event)}
if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);delete this._mouseDelayTimer}
this.ignoreMissingWhich=!1;mouseHandled=!1;event.preventDefault()},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance)},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});var plugin=$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]])}},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return}
if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args)}}}};var safeBlur=$.ui.safeBlur=function(element){if(element&&element.nodeName.toLowerCase()!=="body"){$(element).trigger("blur")}};$.widget("ui.draggable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()}
if(this.options.addClasses){this._addClass("ui-draggable")}
this._setHandleClassName();this._mouseInit()},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._removeHandleClassName();this._setHandleClassName()}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}
this._removeHandleClassName();this._mouseDestroy()},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return!1}
this.handle=this._getHandle(event);if(!this.handle){return!1}
this._blurActiveElement(event);this._blockFrames(o.iframeFix===!0?"iframe":o.iframeFix);return!0},_blockFrames:function(selector){this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);return $("<div>").css("position","absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_blurActiveElement:function(event){var activeElement=$.ui.safeActiveElement(this.document[0]),target=$(event.target);if(target.closest(activeElement).length){return}
$.ui.safeBlur(activeElement)},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this._addClass(this.helper,"ui-draggable-dragging");this._cacheHelperProportions();if($.ui.ddmanager){$.ui.ddmanager.current=this}
this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(!0);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return $(this).css("position")==="fixed"}).length>0;this.positionAbs=this.element.offset();this._refreshOffsets(event);this.originalPosition=this.position=this._generatePosition(event,!1);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this._setContainment();if(this._trigger("start",event)===!1){this._clear();return!1}
this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}
this._mouseDrag(event,!0);if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event)}
return!0},_refreshOffsets:function(event){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:event.pageX-this.offset.left,top:event.pageY-this.offset.top}},_mouseDrag:function(event,noPropagation){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()}
this.position=this._generatePosition(event,!0);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===!1){this._mouseUp(new $.Event("mouseup",event));return!1}
this.position=ui.position}
this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager){$.ui.ddmanager.drag(this,event)}
return!1},_mouseStop:function(event){var that=this,dropped=!1;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event)}
if(this.dropped){dropped=this.dropped;this.dropped=!1}
if((this.options.revert==="invalid"&&!dropped)||(this.options.revert==="valid"&&dropped)||this.options.revert===!0||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==!1){that._clear()}})}else{if(this._trigger("stop",event)!==!1){this._clear()}}
return!1},_mouseUp:function(event){this._unblockFrames();if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event)}
if(this.handleElement.is(event.target)){this.element.trigger("focus")}
return $.ui.mouse.prototype._mouseUp.call(this,event)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new $.Event("mouseup",{target:this.element[0]}))}else{this._clear()}
return this},_getHandle:function(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(event){var o=this.options,helperIsFunction=$.isFunction(o.helper),helper=helperIsFunction?$(o.helper.apply(this.element[0],[event])):(o.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!helper.parents("body").length){helper.appendTo((o.appendTo==="parent"?this.element[0].parentNode:o.appendTo))}
if(helperIsFunction&&helper[0]===this.element[0]){this._setPositionRelative()}
if(helper[0]!==this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position"))){helper.css("position","absolute")}
return helper},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ")}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0}}
if("left" in obj){this.offset.click.left=obj.left+this.margins.left}
if("right" in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left}
if("top" in obj){this.offset.click.top=obj.top+this.margins.top}
if("bottom" in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top}},_isRootNode:function(element){return(/(html|body)/i).test(element.tagName)||element===this.document[0]},_getParentOffset:function(){var po=this.offsetParent.offset(),document=this.document[0];if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}
if(this._isRootNode(this.offsetParent[0])){po={top:0,left:0}}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}}
var p=this.element.position(),scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollTop():0),left:p.left-(parseInt(this.helper.css("left"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollLeft():0)}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var isUserScrollable,c,ce,o=this.options,document=this.document[0];this.relativeContainer=null;if(!o.containment){this.containment=null;return}
if(o.containment==="window"){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}
if(o.containment==="document"){this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}
if(o.containment.constructor===Array){this.containment=o.containment;return}
if(o.containment==="parent"){o.containment=this.helper[0].parentNode}
c=$(o.containment);ce=c[0];if(!ce){return}
isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relativeContainer=c},_convertPositionTo:function(d,pos){if(!pos){pos=this.position}
var mod=d==="absolute"?1:-1,scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:(pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-((this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))*mod)),left:(pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-((this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left))*mod))}},_generatePosition:function(event,constrainPosition){var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[0]),pageX=event.pageX,pageY=event.pageY;if(!scrollIsRootNode||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}}
if(constrainPosition){if(this.containment){if(this.relativeContainer){co=this.relativeContainer.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top]}else{containment=this.containment}
if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left}
if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top}
if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left}
if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top}}
if(o.grid){top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?((top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3])?top:((top-this.offset.click.top>=containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?((left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2])?left:((left-this.offset.click.left>=containment[0])?left-o.grid[0]:left+o.grid[0])):left}
if(o.axis==="y"){pageX=this.originalPageX}
if(o.axis==="x"){pageY=this.originalPageY}}
return{top:(pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))),left:(pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left)))}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}
this.helper=null;this.cancelHelperRemoval=!1;if(this.destroyOnClear){this.destroy()}},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui,this],!0);if(/^(drag|start|stop)/.test(type)){this.positionAbs=this._convertPositionTo("absolute");ui.offset=this.positionAbs}
return $.Widget.prototype._trigger.call(this,type,event,ui)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.sortables=[];$(draggable.options.connectToSortable).each(function(){var sortable=$(this).sortable("instance");if(sortable&&!sortable.options.disabled){draggable.sortables.push(sortable);sortable.refreshPositions();sortable._trigger("activate",event,uiSortable)}})},stop:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.cancelHelperRemoval=!1;$.each(draggable.sortables,function(){var sortable=this;if(sortable.isOver){sortable.isOver=0;draggable.cancelHelperRemoval=!0;sortable.cancelHelperRemoval=!1;sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")};sortable._mouseStop(event);sortable.options.helper=sortable.options._helper}else{sortable.cancelHelperRemoval=!0;sortable._trigger("deactivate",event,uiSortable)}})},drag:function(event,ui,draggable){$.each(draggable.sortables,function(){var innermostIntersecting=!1,sortable=this;sortable.positionAbs=draggable.positionAbs;sortable.helperProportions=draggable.helperProportions;sortable.offset.click=draggable.offset.click;if(sortable._intersectsWith(sortable.containerCache)){innermostIntersecting=!0;$.each(draggable.sortables,function(){this.positionAbs=draggable.positionAbs;this.helperProportions=draggable.helperProportions;this.offset.click=draggable.offset.click;if(this!==sortable&&this._intersectsWith(this.containerCache)&&$.contains(sortable.element[0],this.element[0])){innermostIntersecting=!1}
return innermostIntersecting})}
if(innermostIntersecting){if(!sortable.isOver){sortable.isOver=1;draggable._parent=ui.helper.parent();sortable.currentItem=ui.helper.appendTo(sortable.element).data("ui-sortable-item",!0);sortable.options._helper=sortable.options.helper;sortable.options.helper=function(){return ui.helper[0]};event.target=sortable.currentItem[0];sortable._mouseCapture(event,!0);sortable._mouseStart(event,!0,!0);sortable.offset.click.top=draggable.offset.click.top;sortable.offset.click.left=draggable.offset.click.left;sortable.offset.parent.left-=draggable.offset.parent.left-sortable.offset.parent.left;sortable.offset.parent.top-=draggable.offset.parent.top-sortable.offset.parent.top;draggable._trigger("toSortable",event);draggable.dropped=sortable.element;$.each(draggable.sortables,function(){this.refreshPositions()});draggable.currentItem=draggable.element;sortable.fromOutside=draggable}
if(sortable.currentItem){sortable._mouseDrag(event);ui.position=sortable.position}}else{if(sortable.isOver){sortable.isOver=0;sortable.cancelHelperRemoval=!0;sortable.options._revert=sortable.options.revert;sortable.options.revert=!1;sortable._trigger("out",event,sortable._uiHash(sortable));sortable._mouseStop(event,!0);sortable.options.revert=sortable.options._revert;sortable.options.helper=sortable.options._helper;if(sortable.placeholder){sortable.placeholder.remove()}
ui.helper.appendTo(draggable._parent);draggable._refreshOffsets(event);ui.position=draggable._generatePosition(event,!0);draggable._trigger("fromSortable",event);draggable.dropped=!1;$.each(draggable.sortables,function(){this.refreshPositions()})}}})}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui,instance){var t=$("body"),o=instance.options;if(t.css("cursor")){o._cursor=t.css("cursor")}
t.css("cursor",o.cursor)},stop:function(event,ui,instance){var o=instance.options;if(o._cursor){$("body").css("cursor",o._cursor)}}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("opacity")){o._opacity=t.css("opacity")}
t.css("opacity",o.opacity)},stop:function(event,ui,instance){var o=instance.options;if(o._opacity){$(ui.helper).css("opacity",o._opacity)}}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui,i){if(!i.scrollParentNotHidden){i.scrollParentNotHidden=i.helper.scrollParent(!1)}
if(i.scrollParentNotHidden[0]!==i.document[0]&&i.scrollParentNotHidden[0].tagName!=="HTML"){i.overflowOffset=i.scrollParentNotHidden.offset()}},drag:function(event,ui,i){var o=i.options,scrolled=!1,scrollParent=i.scrollParentNotHidden[0],document=i.document[0];if(scrollParent!==document&&scrollParent.tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if((i.overflowOffset.top+scrollParent.offsetHeight)-event.pageY<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed}}
if(!o.axis||o.axis!=="y"){if((i.overflowOffset.left+scrollParent.offsetWidth)-event.pageX<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed)}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed)}}
if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed)}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed)}}}
if(scrolled!==!1&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event)}}});$.ui.plugin.add("draggable","snap",{start:function(event,ui,i){var o=i.options;i.snapElements=[];$(o.snap.constructor!==String?(o.snap.items||":data(ui-draggable)"):o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left})}})},drag:function(event,ui,inst){var ts,bs,ls,rs,l,r,t,b,i,first,o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left-inst.margins.left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top-inst.margins.top;b=t+inst.snapElements[i].height;if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)){if(inst.snapElements[i].snapping){(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})))}
inst.snapElements[i].snapping=!1;continue}
if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top}
if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top}
if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left}
if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left}}
first=(ts||bs||ls||rs);if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top}
if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top}
if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left}
if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left}}
if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})))}
inst.snapElements[i].snapping=(ts||bs||ls||rs||first)}}});$.ui.plugin.add("draggable","stack",{start:function(event,ui,instance){var min,o=instance.options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0)});if(!group.length){return}
min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i)});this.css("zIndex",(min+group.length))}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("zIndex")){o._zIndex=t.css("zIndex")}
t.css("zIndex",o.zIndex)},stop:function(event,ui,instance){var o=instance.options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex)}}});var widgetsDraggable=$.ui.draggable;$.widget("ui.resizable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(value){return parseFloat(value)||0},_isNumber:function(value){return!isNaN(parseFloat(value))},_hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return!1}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=!1;if(el[scroll]>0){return!0}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has},_create:function(){var margins,o=this.options,that=this;this._addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=!0;margins={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};this.element.css(margins);this.originalElement.css("margin",0);this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css(margins);this._proportionallyResize()}
this._setupHandles();if(o.autoHide){$(this.element).on("mouseenter",function(){if(o.disabled){return}
that._removeClass("ui-resizable-autohide");that._handles.show()}).on("mouseleave",function(){if(o.disabled){return}
if(!that.resizing){that._addClass("ui-resizable-autohide");that._handles.hide()}})}
this._mouseInit()},_destroy:function(){this._mouseDestroy();var wrapper,_destroy=function(exp){$(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove()}
this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this},_setOption:function(key,value){this._super(key,value);switch(key){case "handles":this._removeHandles();this._setupHandles();break;default:break}},_setupHandles:function(){var o=this.options,handle,i,n,hname,axis,that=this;this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});this._handles=$();if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}
n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=$.trim(n[i]);hname="ui-resizable-"+handle;axis=$("<div>");this._addClass(axis,"ui-resizable-handle "+hname);axis.css({zIndex:o.zIndex});this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis)}}
this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=this.element.children(this.handles[i]).first().show()}else if(this.handles[i].jquery||this.handles[i].nodeType){this.handles[i]=$(this.handles[i]);this._on(this.handles[i],{"mousedown":that._mouseDown})}
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){axis=$(this.handles[i],this.element);padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize()}
this._handles=this._handles.add(this.handles[i])}};this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.on("mouseover",function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}
that.axis=axis&&axis[1]?axis[1]:"se"}});if(o.autoHide){this._handles.hide();this._addClass("ui-resizable-autohide")}},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(event){var i,handle,capture=!1;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=!0}}
return!this.options.disabled&&capture},_mouseStart:function(event){var curleft,curtop,cursor,o=this.options,el=this.element;this.resizing=!0;this._renderProxy();curleft=this._num(this.helper.css("left"));curtop=this._num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0}
this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalPosition={left:curleft,top:curtop};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio==="number")?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);this._addClass("ui-resizable-resizing");this._propagate("start",event);return!0},_mouseDrag:function(event){var data,props,smp=this.originalMousePosition,a=this.axis,dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0,trigger=this._change[a];this._updatePrevProperties();if(!trigger){return!1}
data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event)}
data=this._respectSize(data,event);this._updateCache(data);this._propagate("resize",event);props=this._applyChanges();if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}
if(!$.isEmptyObject(props)){this._updatePrevProperties();this._trigger("resize",event,this.ui());this._applyChanges()}
return!1},_mouseStop:function(event){this.resizing=!1;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&(/textarea/i).test(pr[0].nodeName);soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:(that.helper.width()-soffsetw),height:(that.helper.height()-soffseth)};left=(parseFloat(that.element.css("left"))+(that.position.left-that.originalPosition.left))||null;top=(parseFloat(that.element.css("top"))+(that.position.top-that.originalPosition.top))||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}))}
that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize()}}
$("body").css("cursor","auto");this._removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove()}
return!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var props={};if(this.position.top!==this.prevPosition.top){props.top=this.position.top+"px"}
if(this.position.left!==this.prevPosition.left){props.left=this.position.left+"px"}
if(this.size.width!==this.prevSize.width){props.width=this.size.width+"px"}
if(this.size.height!==this.prevSize.height){props.height=this.size.height+"px"}
this.helper.css(props);return props},_updateVirtualBoundaries:function(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth}
if(pMinHeight>b.minHeight){b.minHeight=pMinHeight}
if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth}
if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight}}
this._vBoundaries=b},_updateCache:function(data){this.offset=this.helper.offset();if(this._isNumber(data.left)){this.position.left=data.left}
if(this._isNumber(data.top)){this.position.top=data.top}
if(this._isNumber(data.height)){this.size.height=data.height}
if(this._isNumber(data.width)){this.size.width=data.width}},_updateRatio:function(data){var cpos=this.position,csize=this.size,a=this.axis;if(this._isNumber(data.height)){data.width=(data.height*this.aspectRatio)}else if(this._isNumber(data.width)){data.height=(data.width/this.aspectRatio)}
if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null}
if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width)}
return data},_respectSize:function(data){var o=this._vBoundaries,a=this.axis,ismaxw=this._isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=this._isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=this._isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=this._isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height),dw=this.originalPosition.left+this.originalSize.width,dh=this.originalPosition.top+this.originalSize.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth}
if(isminh){data.height=o.minHeight}
if(ismaxw){data.width=o.maxWidth}
if(ismaxh){data.height=o.maxHeight}
if(isminw&&cw){data.left=dw-o.minWidth}
if(ismaxw&&cw){data.left=dw-o.maxWidth}
if(isminh&&ch){data.top=dh-o.minHeight}
if(ismaxh&&ch){data.top=dh-o.maxHeight}
if(!data.width&&!data.height&&!data.left&&data.top){data.top=null}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null}
return data},_getPaddingPlusBorderDimensions:function(element){var i=0,widths=[],borders=[element.css("borderTopWidth"),element.css("borderRightWidth"),element.css("borderBottomWidth"),element.css("borderLeftWidth")],paddings=[element.css("paddingTop"),element.css("paddingRight"),element.css("paddingBottom"),element.css("paddingLeft")];for(;i<4;i++){widths[i]=(parseFloat(borders[i])||0);widths[i]+=(parseFloat(paddings[i])||0)}
return{height:widths[0]+widths[2],width:widths[1]+widths[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}
var prel,i=0,element=this.helper||this.element;for(;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(prel)}
prel.css({height:(element.height()-this.outerDimensions.height)||0,width:(element.width()-this.outerDimensions.width)||0})}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>");this._addClass(this.helper,this._helper);this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(event,dx){return{width:this.originalSize.width+dx}},w:function(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx}},n:function(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy}},s:function(event,dx,dy){return{height:this.originalSize.height+dy}},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);(n!=="resize"&&this._trigger(n,event,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});$.ui.plugin.add("resizable","animate",{stop:function(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:(that.size.width-soffsetw),height:(that.size.height-soffseth)},left=(parseFloat(that.element.css("left"))+(that.position.left-that.originalPosition.left))||null,top=(parseFloat(that.element.css("top"))+(that.position.top-that.originalPosition.top))||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseFloat(that.element.css("width")),height:parseFloat(that.element.css("height")),top:parseFloat(that.element.css("top")),left:parseFloat(that.element.css("left"))};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height})}
that._updateCache(data);that._propagate("resize",event)}})}});$.ui.plugin.add("resizable","containment",{start:function(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce){return}
that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight}}else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=that._num(element.css("padding"+name))});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=(that._hasScroll(ce,"left")?ce.scrollWidth:cw);height=(that._hasScroll(ce)?ce.scrollHeight:ch);that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height}}},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=!0;if(ce[0]!==document&&(/static/).test(ce.css("position"))){cop=co}
if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?(that.position.left-co.left):(that.position.left-cop.left));if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=!1}
that.position.left=o.helper?co.left:0}
if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?(that.position.top-co.top):that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=!1}
that.position.top=that._helper?co.top:0}
isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top}else{that.offset.left=that.element.offset().left;that.offset.top=that.element.offset().top}
woset=Math.abs(that.sizeDiff.width+(that._helper?that.offset.left-cop.left:(that.offset.left-co.left)));hoset=Math.abs(that.sizeDiff.height+(that._helper?that.offset.top-cop.top:(that.offset.top-co.top)));if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=!1}}
if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=!1}}
if(!continueResize){that.position.left=that.prevPosition.left;that.position.top=that.prevPosition.top;that.size.width=that.prevSize.width;that.size.height=that.prevSize.height}},stop:function(){var that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}
if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}}});$.ui.plugin.add("resizable","alsoResize",{start:function(){var that=$(this).resizable("instance"),o=that.options;$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseFloat(el.width()),height:parseFloat(el.height()),left:parseFloat(el.css("left")),top:parseFloat(el.css("top"))})})},resize:function(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:(that.size.height-os.height)||0,width:(that.size.width-os.width)||0,top:(that.position.top-op.top)||0,left:(that.position.left-op.left)||0};$(o.alsoResize).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null}});el.css(style)})},stop:function(){$(this).removeData("ui-resizable-alsoresize")}});$.ui.plugin.add("resizable","ghost",{start:function(){var that=$(this).resizable("instance"),cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0});that._addClass(that.ghost,"ui-resizable-ghost");if($.uiBackCompat!==!1&&typeof that.options.ghost==="string"){that.ghost.addClass(this.options.ghost)}
that.ghost.appendTo(that.helper)},resize:function(){var that=$(this).resizable("instance");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width})}},stop:function(){var that=$(this).resizable("instance");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0))}}});$.ui.plugin.add("resizable","grid",{resize:function(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=(grid[0]||1),gridY=(grid[1]||1),ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&(o.maxWidth<newWidth),isMaxHeight=o.maxHeight&&(o.maxHeight<newHeight),isMinWidth=o.minWidth&&(o.minWidth>newWidth),isMinHeight=o.minHeight&&(o.minHeight>newHeight);o.grid=grid;if(isMinWidth){newWidth+=gridX}
if(isMinHeight){newHeight+=gridY}
if(isMaxWidth){newWidth-=gridX}
if(isMaxHeight){newHeight-=gridY}
if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox}else{if(newHeight-gridY<=0||newWidth-gridX<=0){outerDimensions=that._getPaddingPlusBorderDimensions(this)}
if(newHeight-gridY>0){that.size.height=newHeight;that.position.top=op.top-oy}else{newHeight=gridY-outerDimensions.height;that.size.height=newHeight;that.position.top=op.top+os.height-newHeight}
if(newWidth-gridX>0){that.size.width=newWidth;that.position.left=op.left-ox}else{newWidth=gridX-outerDimensions.width;that.size.width=newWidth;that.position.left=op.left+os.width-newWidth}}}});var widgetsResizable=$.ui.resizable;$.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset)}}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle}
if(this.options.disabled){this.options.disabled=!1}
this._createWrapper();this.element.show().removeAttr("title").appendTo(this.uiDialog);this._addClass("ui-dialog-content","ui-widget-content");this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable()}
if(this.options.resizable&&$.fn.resizable){this._makeResizable()}
this._isOpen=!1;this._trackFocus()},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element)}
return this.document.find(element||"body").eq(0)},_destroy:function(){var next,originalPosition=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().css(this.originalCss).detach();this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}
next=originalPosition.parent.children().eq(originalPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element)}else{originalPosition.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:$.noop,enable:$.noop,close:function(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===!1){return}
this._isOpen=!1;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if(!this.opener.filter(":focusable").trigger("focus").length){$.ui.safeBlur($.ui.safeActiveElement(this.document[0]))}
this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(event,silent){var moved=!1,zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index")}).get(),zIndexMax=Math.max.apply(null,zIndices);if(zIndexMax>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",zIndexMax+1);moved=!0}
if(moved&&!silent){this._trigger("focus",event)}
return moved},open:function(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}
return}
this._isOpen=!0;this.opener=$($.ui.safeActiveElement(this.document[0]));this._size();this._position();this._createOverlay();this._moveToTop(null,!0);if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)}
this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus")});this._makeFocusTarget();this._trigger("open")},_focusTabbable:function(){var hasFocus=this._focusedElement;if(!hasFocus){hasFocus=this.element.find("[autofocus]")}
if(!hasFocus.length){hasFocus=this.element.find(":tabbable")}
if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable")}
if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable")}
if(!hasFocus.length){hasFocus=this.uiDialog}
hasFocus.eq(0).trigger("focus")},_keepFocus:function(event){function checkFocus(){var activeElement=$.ui.safeActiveElement(this.document[0]),isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable()}}
event.preventDefault();checkFocus.call(this);this._delay(checkFocus)},_createWrapper:function(){this.uiDialog=$("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return}
if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){return}
var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){this._delay(function(){first.trigger("focus")});event.preventDefault()}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){this._delay(function(){last.trigger("focus")});event.preventDefault()}},mousedown:function(event){if(this._moveToTop(event)){this._focusTabbable()}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>");this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");this._on(this.uiDialogTitlebar,{mousedown:function(event){if(!$(event.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.trigger("focus")}}});this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:$("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar);this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault();this.close(event)}});uiDialogTitle=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar);this._addClass(uiDialogTitle,"ui-dialog-title");this._title(uiDialogTitle);this.uiDialogTitlebar.prependTo(this.uiDialog);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")})},_title:function(title){if(this.options.title){title.text(this.options.title)}else{title.html("&#160;")}},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>");this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").appendTo(this.uiDialogButtonPane);this._addClass(this.uiButtonSet,"ui-dialog-buttonset");this._createButtons()},_createButtons:function(){var that=this,buttons=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){this._removeClass(this.uiDialog,"ui-dialog-buttons");return}
$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;buttonOptions={icon:props.icon,iconPosition:props.iconPosition,showLabel:props.showLabel,icons:props.icons,text:props.text};delete props.click;delete props.icon;delete props.iconPosition;delete props.showLabel;delete props.icons;if(typeof props.text==="boolean"){delete props.text}
$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet).on("click",function(){click.apply(that.element[0],arguments)})});this._addClass(this.uiDialog,"ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset}}
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){that._addClass($(this),"ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui))},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui))},stop:function(event,ui){var left=ui.offset.left-that.document.scrollLeft(),top=ui.offset.top-that.document.scrollTop();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui))}})},_makeResizable:function(){var that=this,options=this.options,handles=options.resizable,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size}}
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){that._addClass($(this),"ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui))},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui))},stop:function(event,ui){var offset=that.uiDialog.offset(),left=offset.left-that.document.scrollLeft(),top=offset.top-that.document.scrollTop();options.height=that.uiDialog.height();options.width=that.uiDialog.width();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui))}}).css("position",position)},_trackFocus:function(){this._on(this.widget(),{focusin:function(event){this._makeFocusTarget();this._focusedElement=$(event.target)}})},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this)},_untrackInstance:function(){var instances=this._trackingInstances(),exists=$.inArray(this,instances);if(exists!==-1){instances.splice(exists,1)}},_trackingInstances:function(){var instances=this.document.data("ui-dialog-instances");if(!instances){instances=[];this.document.data("ui-dialog-instances",instances)}
return instances},_minHeight:function(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height)},_position:function(){var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show()}
this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide()}},_setOptions:function(options){var that=this,resize=!1,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in that.sizeRelatedOptions){resize=!0}
if(key in that.resizableRelatedOptions){resizableOptions[key]=value}});if(resize){this._size();this._position()}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions)}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="disabled"){return}
this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo())}
if(key==="buttons"){this._createButtons()}
if(key==="closeText"){this.uiDialogTitlebarClose.button({label:$("<a>").text(""+this.options.closeText).html()})}
if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy")}
if(!isDraggable&&value){this._makeDraggable()}}
if(key==="position"){this._position()}
if(key==="resizable"){isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy")}
if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value)}
if(!isResizable&&value!==!1){this._makeResizable()}}
if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth}
nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"})}else{this.element.height(Math.max(0,options.height-nonContentHeight))}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_allowInteraction:function(event){if($(event.target).closest(".ui-dialog").length){return!0}
return!!$(event.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal){return}
var isOpening=!0;this._delay(function(){isOpening=!1});if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(event){if(isOpening){return}
if(!this._allowInteraction(event)){event.preventDefault();this._trackingInstances()[0]._focusTabbable()}}})}
this.overlay=$("<div>").appendTo(this._appendTo());this._addClass(this.overlay,null,"ui-widget-overlay ui-front");this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)},_destroyOverlay:function(){if(!this.options.modal){return}
if(this.overlay){var overlays=this.document.data("ui-dialog-overlays")-1;if(!overlays){this._off(this.document,"focusin");this.document.removeData("ui-dialog-overlays")}else{this.document.data("ui-dialog-overlays",overlays)}
this.overlay.remove();this.overlay=null}}});if($.uiBackCompat!==!1){$.widget("ui.dialog",$.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(key,value){if(key==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(value)}
this._superApply(arguments)}})}
var widgetsDialog=$.ui.dialog;$.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var proportions,o=this.options,accept=o.accept;this.isover=!1;this.isout=!0;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept)};this.proportions=function(){if(arguments.length){proportions=arguments[0]}else{return proportions?proportions:proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}}};this._addToManager(o.scope);o.addClasses&&this._addClass("ui-droppable")},_addToManager:function(scope){$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[];$.ui.ddmanager.droppables[scope].push(this)},_splice:function(drop){var i=0;for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1)}}},_destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop)},_setOption:function(key,value){if(key==="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value)}}else if(key==="scope"){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);this._addToManager(value)}
this._super(key,value)},_activate:function(event){var draggable=$.ui.ddmanager.current;this._addActiveClass();if(draggable){this._trigger("activate",event,this.ui(draggable))}},_deactivate:function(event){var draggable=$.ui.ddmanager.current;this._removeActiveClass();if(draggable){this._trigger("deactivate",event,this.ui(draggable))}},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._addHoverClass();this._trigger("over",event,this.ui(draggable))}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._removeHoverClass();this._trigger("out",event,this.ui(draggable))}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=!1;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return!1}
this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$(this).droppable("instance");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance,event)){childrenIntersection=!0;return!1}});if(childrenIntersection){return!1}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._removeActiveClass();this._removeHoverClass();this._trigger("drop",event,this.ui(draggable));return this.element}
return!1},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var intersect=$.ui.intersect=(function(){function isOverAxis(x,reference,size){return(x>=reference)&&(x<(reference+size))}
return function(draggable,droppable,toleranceMode,event){if(!droppable.offset){return!1}
var x1=(draggable.positionAbs||draggable.position.absolute).left+draggable.margins.left,y1=(draggable.positionAbs||draggable.position.absolute).top+draggable.margins.top,x2=x1+draggable.helperProportions.width,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,t=droppable.offset.top,r=l+droppable.proportions().width,b=t+droppable.proportions().height;switch(toleranceMode){case "fit":return(l<=x1&&x2<=r&&t<=y1&&y2<=b);case "intersect":return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);case "pointer":return isOverAxis(event.pageY,t,droppable.proportions().height)&&isOverAxis(event.pageX,l,droppable.proportions().width);case "touch":return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));default:return!1}}})();$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element)))){continue}
for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions().height=0;continue droppablesLoop}}
m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue}
if(type==="mousedown"){m[i]._activate.call(m[i],event)}
m[i].offset=m[i].element.offset();m[i].proportions({width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight})}},drop:function(draggable,event){var dropped=!1;$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return}
if(!this.options.disabled&&this.visible&&intersect(draggable,this,this.options.tolerance,event)){dropped=this._drop.call(this,event)||dropped}
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=!0;this.isover=!1;this._deactivate.call(this,event)}});return dropped},dragStart:function(draggable,event){draggable.element.parentsUntil("body").on("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}})},drag:function(draggable,event){if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}
var parentInstance,scope,parent,intersects=intersect(draggable,this,this.options.tolerance,event),c=!intersects&&this.isover?"isout":(intersects&&!this.isover?"isover":null);if(!c){return}
if(this.options.greedy){scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope});if(parent.length){parentInstance=$(parent[0]).droppable("instance");parentInstance.greedyChild=(c==="isover")}}
if(parentInstance&&c==="isover"){parentInstance.isover=!1;parentInstance.isout=!0;parentInstance._out.call(parentInstance,event)}
this[c]=!0;this[c==="isout"?"isover":"isout"]=!1;this[c==="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c==="isout"){parentInstance.isout=!1;parentInstance.isover=!0;parentInstance._over.call(parentInstance,event)}})},dragStop:function(draggable,event){draggable.element.parentsUntil("body").off("scroll.droppable");if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}}};if($.uiBackCompat!==!1){$.widget("ui.droppable",$.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super();if(this.options.activeClass){this.element.addClass(this.options.activeClass)}},_removeActiveClass:function(){this._super();if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}},_addHoverClass:function(){this._super();if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}},_removeHoverClass:function(){this._super();if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}}})}
var widgetsDroppable=$.ui.droppable;var widgetsProgressbar=$.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.attr({role:"progressbar","aria-valuemin":this.min});this._addClass("ui-progressbar","ui-widget ui-widget-content");this.valueDiv=$("<div>").appendTo(this.element);this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");this.valueDiv.remove()},value:function(newValue){if(newValue===undefined){return this.options.value}
this.options.value=this._constrainedValue(newValue);this._refreshValue()},_constrainedValue:function(newValue){if(newValue===undefined){newValue=this.options.value}
this.indeterminate=newValue===!1;if(typeof newValue!=="number"){newValue=0}
return this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,newValue))},_setOptions:function(options){var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue()},_setOption:function(key,value){if(key==="max"){value=Math.max(this.min,value)}
this._super(key,value)},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).width(percentage.toFixed(0)+"%");this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,value===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div>").appendTo(this.valueDiv);this._addClass(this.overlayDiv,"ui-progressbar-overlay")}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null}}
if(this.oldValue!==value){this.oldValue=value;this._trigger("change")}
if(value===this.options.max){this._trigger("complete")}}});var widgetsSelectable=$.widget("ui.selectable",$.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var that=this;this._addClass("ui-selectable");this.dragged=!1;this.refresh=function(){that.elementPos=$(that.element[0]).offset();that.selectees=$(that.options.filter,that.element[0]);that._addClass(that.selectees,"ui-selectee");that.selectees.each(function(){var $this=$(this),selecteeOffset=$this.offset(),pos={left:selecteeOffset.left-that.elementPos.left,top:selecteeOffset.top-that.elementPos.top};$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:!1,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")})})};this.refresh();this._mouseInit();this.helper=$("<div>");this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item");this._mouseDestroy()},_mouseStart:function(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];this.elementPos=$(this.element[0]).offset();if(this.options.disabled){return}
this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh()}
this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=!0;if(!event.metaKey&&!event.ctrlKey){that._removeClass(selectee.$element,"ui-selected");selectee.selected=!1;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=!0;that._trigger("unselecting",event,{unselecting:selectee.element})}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=(!event.metaKey&&!event.ctrlKey)||!selectee.$element.hasClass("ui-selected");that._removeClass(selectee.$element,doSelect?"ui-unselecting":"ui-selected")._addClass(selectee.$element,doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){that._trigger("selecting",event,{selecting:selectee.element})}else{that._trigger("unselecting",event,{unselecting:selectee.element})}
return!1}})},_mouseDrag:function(event){this.dragged=!0;if(this.options.disabled){return}
var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp}
if(y1>y2){tmp=y2;y2=y1;y1=tmp}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=!1,offset={};if(!selectee||selectee.element===that.element[0]){return}
offset.left=selectee.left+that.elementPos.left;offset.right=selectee.right+that.elementPos.left;offset.top=selectee.top+that.elementPos.top;offset.bottom=selectee.bottom+that.elementPos.top;if(options.tolerance==="touch"){hit=(!(offset.left>x2||offset.right<x1||offset.top>y2||offset.bottom<y1))}else if(options.tolerance==="fit"){hit=(offset.left>x1&&offset.right<x2&&offset.top>y1&&offset.bottom<y2)}
if(hit){if(selectee.selected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=!1}
if(selectee.unselecting){that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=!1}
if(!selectee.selecting){that._addClass(selectee.$element,"ui-selecting");selectee.selecting=!0;that._trigger("selecting",event,{selecting:selectee.element})}}else{if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=!1;that._addClass(selectee.$element,"ui-selected");selectee.selected=!0}else{that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=!1;if(selectee.startselected){that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=!0}
that._trigger("unselecting",event,{unselecting:selectee.element})}}
if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=!1;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=!0;that._trigger("unselecting",event,{unselecting:selectee.element})}}}});return!1},_mouseStop:function(event){var that=this;this.dragged=!1;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=!1;selectee.startselected=!1;that._trigger("unselected",event,{unselected:selectee.element})});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-selecting")._addClass(selectee.$element,"ui-selected");selectee.selecting=!1;selectee.selected=!0;selectee.startselected=!0;that._trigger("selected",event,{selected:selectee.element})});this._trigger("stop",event);this.helper.remove();return!1}});var widgetsSelectmenu=$.widget("ui.selectmenu",[$.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var selectmenuId=this.element.uniqueId().attr("id");this.ids={element:selectmenuId,button:selectmenuId+"-button",menu:selectmenuId+"-menu"};this._drawButton();this._drawMenu();this._bindFormResetHandler();this._rendered=!1;this.menuItems=$()},_drawButton:function(){var icon,that=this,item=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button);this._on(this.labels,{click:function(event){this.button.focus();event.preventDefault()}});this.element.hide();this.button=$("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element);this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget");icon=$("<span>").appendTo(this.button);this._addClass(icon,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);this.buttonItem=this._renderButtonItem(item).appendTo(this.button);if(this.options.width!==!1){this._resizeButton()}
this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){if(!that._rendered){that._refreshMenu()}})},_drawMenu:function(){var that=this;this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});this.menuWrap=$("<div>").append(this.menu);this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");this.menuWrap.appendTo(this._appendTo());this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(event,ui){event.preventDefault();that._setSelection();that._select(ui.item.data("ui-selectmenu-item"),event)},focus:function(event,ui){var item=ui.item.data("ui-selectmenu-item");if(that.focusIndex!=null&&item.index!==that.focusIndex){that._trigger("focus",event,{item:item});if(!that.isOpen){that._select(item,event)}}
that.focusIndex=item.index;that.button.attr("aria-activedescendant",that.menuItems.eq(item.index).attr("id"))}}).menu("instance");this.menuInstance._off(this.menu,"mouseleave");this.menuInstance._closeOnDocumentClick=function(){return!1};this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu();this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{}));if(this.options.width===null){this._resizeButton()}},_refreshMenu:function(){var item,options=this.element.find("option");this.menu.empty();this._parseOptions(options);this._renderMenu(this.menu,this.items);this.menuInstance.refresh();this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");this._rendered=!0;if(!options.length){return}
item=this._getSelectedItem();this.menuInstance.focus(null,item);this._setAria(item.data("ui-selectmenu-item"));this._setOption("disabled",this.element.prop("disabled"))},open:function(event){if(this.options.disabled){return}
if(!this._rendered){this._refreshMenu()}else{this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");this.menuInstance.focus(null,this._getSelectedItem())}
if(!this.menuItems.length){return}
this.isOpen=!0;this._toggleAttr();this._resizeMenu();this._position();this._on(this.document,this._documentClick);this._trigger("open",event)},_position:function(){this.menuWrap.position($.extend({of:this.button},this.options.position))},close:function(event){if(!this.isOpen){return}
this.isOpen=!1;this._toggleAttr();this.range=null;this._off(this.document);this._trigger("close",event)},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(item){var buttonItem=$("<span>");this._setText(buttonItem,item.label);this._addClass(buttonItem,"ui-selectmenu-text");return buttonItem},_renderMenu:function(ul,items){var that=this,currentOptgroup="";$.each(items,function(index,item){var li;if(item.optgroup!==currentOptgroup){li=$("<li>",{text:item.optgroup});that._addClass(li,"ui-selectmenu-optgroup","ui-menu-divider"+(item.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""));li.appendTo(ul);currentOptgroup=item.optgroup}
that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-selectmenu-item",item)},_renderItem:function(ul,item){var li=$("<li>"),wrapper=$("<div>",{title:item.element.attr("title")});if(item.disabled){this._addClass(li,null,"ui-state-disabled")}
this._setText(wrapper,item.label);return li.append(wrapper).appendTo(ul)},_setText:function(element,value){if(value){element.text(value)}else{element.html("&#160;")}},_move:function(direction,event){var item,next,filter=".ui-menu-item";if(this.isOpen){item=this.menuItems.eq(this.focusIndex).parent("li")}else{item=this.menuItems.eq(this.element[0].selectedIndex).parent("li");filter+=":not(.ui-state-disabled)"}
if(direction==="first"||direction==="last"){next=item[direction==="first"?"prevAll":"nextAll"](filter).eq(-1)}else{next=item[direction+"All"](filter).eq(0)}
if(next.length){this.menuInstance.focus(event,next)}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(event){this[this.isOpen?"close":"open"](event)},_setSelection:function(){var selection;if(!this.range){return}
if(window.getSelection){selection=window.getSelection();selection.removeAllRanges();selection.addRange(this.range)}else{this.range.select()}
this.button.focus()},_documentClick:{mousedown:function(event){if(!this.isOpen){return}
if(!$(event.target).closest(".ui-selectmenu-menu, #"+$.ui.escapeSelector(this.ids.button)).length){this.close(event)}}},_buttonEvents:{mousedown:function(){var selection;if(window.getSelection){selection=window.getSelection();if(selection.rangeCount){this.range=selection.getRangeAt(0)}}else{this.range=document.selection.createRange()}},click:function(event){this._setSelection();this._toggle(event)},keydown:function(event){var preventDefault=!0;switch(event.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(event);preventDefault=!1;break;case $.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(event)}
break;case $.ui.keyCode.UP:if(event.altKey){this._toggle(event)}else{this._move("prev",event)}
break;case $.ui.keyCode.DOWN:if(event.altKey){this._toggle(event)}else{this._move("next",event)}
break;case $.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(event)}else{this._toggle(event)}
break;case $.ui.keyCode.LEFT:this._move("prev",event);break;case $.ui.keyCode.RIGHT:this._move("next",event);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",event);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",event);break;default:this.menu.trigger(event);preventDefault=!1}
if(preventDefault){event.preventDefault()}}},_selectFocusedItem:function(event){var item=this.menuItems.eq(this.focusIndex).parent("li");if(!item.hasClass("ui-state-disabled")){this._select(item.data("ui-selectmenu-item"),event)}},_select:function(item,event){var oldIndex=this.element[0].selectedIndex;this.element[0].selectedIndex=item.index;this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(item));this._setAria(item);this._trigger("select",event,{item:item});if(item.index!==oldIndex){this._trigger("change",event,{item:item})}
this.close(event)},_setAria:function(item){var id=this.menuItems.eq(item.index).attr("id");this.button.attr({"aria-labelledby":id,"aria-activedescendant":id});this.menu.attr("aria-activedescendant",id)},_setOption:function(key,value){if(key==="icons"){var icon=this.button.find("span.ui-icon");this._removeClass(icon,null,this.options.icons.button)._addClass(icon,null,value.button)}
this._super(key,value);if(key==="appendTo"){this.menuWrap.appendTo(this._appendTo())}
if(key==="width"){this._resizeButton()}},_setOptionDisabled:function(value){this._super(value);this.menuInstance.option("disabled",value);this.button.attr("aria-disabled",value);this._toggleClass(this.button,null,"ui-state-disabled",value);this.element.prop("disabled",value);if(value){this.button.attr("tabindex",-1);this.close()}else{this.button.attr("tabindex",0)}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0)}
if(!element||!element[0]){element=this.element.closest(".ui-front, dialog")}
if(!element.length){element=this.document[0].body}
return element},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen);this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var width=this.options.width;if(width===!1){this.button.css("width","");return}
if(width===null){width=this.element.show().outerWidth();this.element.hide()}
this.button.outerWidth(width)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var options=this._super();options.disabled=this.element.prop("disabled");return options},_parseOptions:function(options){var that=this,data=[];options.each(function(index,item){data.push(that._parseOption($(item),index))});this.items=data},_parseOption:function(option,index){var optgroup=option.parent("optgroup");return{element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label")||"",disabled:optgroup.prop("disabled")||option.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler();this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.labels.attr("for",this.ids.element)}}]);var widgetsSlider=$.widget("ui.slider",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1;this._mouseSliding=!1;this._animateOff=!0;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");this._refresh();this._animateOff=!1},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle"),handle="<span tabindex='0'></span>",handles=[];handleCount=(options.values&&options.values.length)||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount)}
for(i=existingHandles.length;i<handleCount;i++){handles.push(handle)}
this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this._addClass(this.handles,"ui-slider-handle","ui-state-default");this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i).attr("tabIndex",0)})},_createRange:function(){var options=this.options;if(options.range){if(options.range===!0){if(!options.values){options.values=[this._valueMin(),this._valueMin()]}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]]}else if($.isArray(options.values)){options.values=options.values.slice(0)}}
if(!this.range||!this.range.length){this.range=$("<div>").appendTo(this.element);this._addClass(this.range,"ui-slider-range")}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");this.range.css({"left":"","bottom":""})}
if(options.range==="min"||options.range==="max"){this._addClass(this.range,"ui-slider-range-"+options.range)}}else{if(this.range){this.range.remove()}
this.range=null}},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles)},_destroy:function(){this.handles.remove();if(this.range){this.range.remove()}
this._mouseDestroy()},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return!1}
this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if((distance>thisDistance)||(distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min))){distance=thisDistance;closestHandle=$(this);index=i}});allowed=this._start(event,index);if(allowed===!1){return!1}
this._mouseSliding=!0;this._handleIndex=index;this._addClass(closestHandle,null,"ui-state-active");closestHandle.trigger("focus");offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-(closestHandle.height()/2)-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue)}
this._animateOff=!0;return!0},_mouseStart:function(){return!0},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return!1},_mouseStop:function(event){this._removeClass(this.handles,null,"ui-state-active");this._mouseSliding=!1;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}
percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1}
if(percentMouse<0){percentMouse=0}
if(this.orientation==="vertical"){percentMouse=1-percentMouse}
valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse)},_uiHash:function(index,value,values){var uiHash={handle:this.handles[index],handleIndex:index,value:value!==undefined?value:this.value()};if(this._hasMultipleValues()){uiHash.value=value!==undefined?value:this.values(index);uiHash.values=values||this.values()}
return uiHash},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(event,index){return this._trigger("start",event,this._uiHash(index))},_slide:function(event,index,newVal){var allowed,otherVal,currentValue=this.value(),newValues=this.values();if(this._hasMultipleValues()){otherVal=this.values(index?0:1);currentValue=this.values(index);if(this.options.values.length===2&&this.options.range===!0){newVal=index===0?Math.min(otherVal,newVal):Math.max(otherVal,newVal)}
newValues[index]=newVal}
if(newVal===currentValue){return}
allowed=this._trigger("slide",event,this._uiHash(index,newVal,newValues));if(allowed===!1){return}
if(this._hasMultipleValues()){this.values(index,newVal)}else{this.value(newVal)}},_stop:function(event,index){this._trigger("stop",event,this._uiHash(index))},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){this._lastChangedValue=index;this._trigger("change",event,this._uiHash(index))}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return}
return this._value()},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return}
if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i)}
this._refreshValue()}else{if(this._hasMultipleValues()){return this._values(index)}else{return this.value()}}}else{return this._values()}},_setOption:function(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===!0){if(value==="min"){this.options.value=this._values(0);this.options.values=null}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null}}
if($.isArray(this.options.values)){valsLength=this.options.values.length}
this._super(key,value);switch(key){case "orientation":this._detectOrientation();this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);this._refreshValue();if(this.options.range){this._refreshRange(value)}
this.handles.css(value==="horizontal"?"bottom":"left","");break;case "value":this._animateOff=!0;this._refreshValue();this._change(null,0);this._animateOff=!1;break;case "values":this._animateOff=!0;this._refreshValue();for(i=valsLength-1;i>=0;i--){this._change(null,i)}
this._animateOff=!1;break;case "step":case "min":case "max":this._animateOff=!0;this._calculateNewMax();this._refreshValue();this._animateOff=!1;break;case "range":this._animateOff=!0;this._refresh();this._animateOff=!1;break}},_setOptionDisabled:function(value){this._super(value);this._toggleClass(null,"ui-state-disabled",!!value)},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val}else if(this._hasMultipleValues()){vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i])}
return vals}else{return[]}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin()}
if(val>=this._valueMax()){return this._valueMax()}
var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step)}
return parseFloat(alignValue.toFixed(5))},_calculateNewMax:function(){var max=this.options.max,min=this._valueMin(),step=this.options.step,aboveMin=Math.round((max-min)/step)*step;max=aboveMin+min;if(max>this.options.max){max-=step}
this.max=parseFloat(max.toFixed(this._precision()))},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min))}
return precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(orientation){if(orientation==="vertical"){this.range.css({"width":"","left":""})}
if(orientation==="horizontal"){this.range.css({"height":"","bottom":""})}},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=(!this._animateOff)?o.animate:!1,_set={};if(this._hasMultipleValues()){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===!0){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate)}
if(i===1){that.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:!1,duration:o.animate})}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate)}
if(i===1){that.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:!1,duration:o.animate})}}}
lastValPercent=valPercent})}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate)}
if(oRange==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:(100-valPercent)+"%"},o.animate)}
if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate)}
if(oRange==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:(100-valPercent)+"%"},o.animate)}}},_handleEvents:{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=!0;this._addClass($(event.target),null,"ui-state-active");allowed=this._start(event,index);if(allowed===!1){return}}
break}
step=this.options.step;if(this._hasMultipleValues()){curVal=newVal=this.values(index)}else{curVal=newVal=this.value()}
switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return}
newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return}
newVal=this._trimAlignValue(curVal-step);break}
this._slide(event,index,newVal)},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=!1;this._stop(event,index);this._change(event,index);this._removeClass($(event.target),null,"ui-state-active")}}}});var widgetsSortable=$.widget("ui.sortable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(x,reference,size){return(x>=reference)&&(x<(reference+size))},_isFloating:function(item){return(/left|right/).test(item.css("float"))||(/inline|table-cell/).test(item.css("display"))},_create:function(){this.containerCache={};this._addClass("ui-sortable");this.refresh();this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=!0},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._setHandleClassName()}},_setHandleClassName:function(){var that=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");$.each(this.items,function(){that._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item")}
return this},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=!1,that=this;if(this.reverting){return!1}
if(this.options.disabled||this.options.type==="static"){return!1}
this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return!1}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target)}
if(!currentItem){return!1}
if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=!0}});if(!validHandle){return!1}}
this.currentItem=currentItem;this._removeCurrentsFromItems();return!0},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}
this._createPlaceholder();if(o.containment){this._setContainment()}
if(o.cursor&&o.cursor!=="auto"){body=this.document.find("body");this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body)}
if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}
this.helper.css("opacity",o.opacity)}
if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}
this.helper.css("zIndex",o.zIndex)}
if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}
this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this))}}
if($.ui.ddmanager){$.ui.ddmanager.current=this}
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}
this.dragging=!0;this._addClass(this.helper,"ui-sortable-helper");this._mouseDrag(event);return!0},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=!1;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}
if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed}}else{if(event.pageY-this.document.scrollTop()<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed)}else if(this.window.height()-(event.pageY-this.document.scrollTop())<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)}
if(event.pageX-this.document.scrollLeft()<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed)}else if(this.window.width()-(event.pageX-this.document.scrollLeft())<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed)}}
if(scrolled!==!1&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}
if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}
for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue}
if(item.instance!==this.currentContainer){continue}
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):!0)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item)}else{break}
this._trigger("change",event,this._uiHash());break}}
this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event)}
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return!1},_mouseStop:function(event,noPropagation){if(!event){return}
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event)}
if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)}
if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)}
this.reverting=!0;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event)})}else{this._clear(event,noPropagation)}
return!1},cancel:function(){if(this.dragging){this._mouseUp(new $.Event("mouseup",{target:null}));if(this.options.helper==="original"){this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper")}else{this.currentItem.show()}
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0}}}
if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}
if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}
$.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem)}else{$(this.domPosition.parent).prepend(this.currentItem)}}
return this},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]))}});if(!str.length&&o.key){str.push(o.key+"=")}
return str.join("&")},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"")});return ret},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=(this.options.axis==="x")||((y1+dyClick)>t&&(y1+dyClick)<b),isOverElementWidth=(this.options.axis==="y")||((x1+dxClick)>l&&(x1+dxClick)<r),isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b)}},_intersectsWithPointer:function(item){var verticalDirection,horizontalDirection,isOverElementHeight=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth;if(!isOverElement){return!1}
verticalDirection=this._getDragVerticalDirection();horizontalDirection=this._getDragHorizontalDirection();return this.floating?((horizontalDirection==="right"||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1))},_intersectsWithSides:function(item){var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf))}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf))}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up")},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left")},refresh:function(event){this._refreshItems(event);this._setHandleClassName();this.refreshPositions();return this},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst])}}}}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function addItems(){items.push(this)}
for(i=queries.length-1;i>=0;i--){queries[i][0].each(addItems)}
return $(items)},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return!1}}
return!0})},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst)}}}}
for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0})}}},refreshPositions:function(fast){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):!1;if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}
var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue}
t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight()}
p=t.offset();item.left=p.left;item.top=p.top}
if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight()}}
return this},_createPlaceholder:function(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]);that._addClass(element,"ui-sortable-placeholder",className||that.currentItem[0].className)._removeClass(element,"ui-sortable-helper");if(nodeName==="tbody"){that._createTrPlaceholder(that.currentItem.find("tr").eq(0),$("<tr>",that.document[0]).appendTo(element))}else if(nodeName==="tr"){that._createTrPlaceholder(that.currentItem,element)}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"))}
if(!className){element.css("visibility","hidden")}
return element},update:function(container,p){if(className&&!o.forcePlaceholderSize){return}
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10))}
if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10))}}}}
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder)},_createTrPlaceholder:function(sourceTr,targetTr){var that=this;sourceTr.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(targetTr)})},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,floating,axis,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue}
if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue}
innermostContainer=this.containers[i];innermostIndex=i}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0}}}
if(!innermostContainer){return}
if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1}}else{dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||this._isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";axis=floating?"pageX":"pageY";for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue}
if(this.items[j].item[0]===this.currentItem[0]){continue}
cur=this.items[j].item.offset()[posProperty];nearBottom=!1;if(event[axis]-cur>this.items[j][sizeProperty]/2){nearBottom=!0}
if(Math.abs(event[axis]-cur)<dist){dist=Math.abs(event[axis]-cur);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down"}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return}
if(this.currentContainer===this.containers[innermostIndex]){if(!this.currentContainer.containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash());this.currentContainer.containerCache.over=1}
return}
itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,!0):this._rearrange(event,null,this.containers[innermostIndex].element,!0);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0])}
if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}
if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width())}
if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height())}
return helper},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ")}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0}}
if("left" in obj){this.offset.click.left=obj.left+this.margins.left}
if("right" in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left}
if("top" in obj){this.offset.click.top=obj.top+this.margins.top}
if("bottom" in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}
if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0}}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode}
if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,o.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?(this.document.height()||document.body.parentNode.scrollHeight):this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}
if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position}
var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))}},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}
if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left}
if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top}
if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left}
if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top}}
if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left}}
return{top:(pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))}},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh)}})},_clear:function(event,noPropagation){this.reverting=!1;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}
this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]=""}}
this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper")}else{this.currentItem.show()}
if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside))})}
if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash())})}
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash())});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this))}}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this))}}).call(this,this.currentContainer))}}
function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance))}}
for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]))}
if(this.containers[i].containerCache.over){delayedTriggers.push(delayEvent("out",this,this.containers[i]));this.containers[i].containerCache.over=0}}
if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove()}
if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}
this.dragging=!1;if(!noPropagation){this._trigger("beforeStop",event,this._uiHash())}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}
this.helper=null}
if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event)}
this._trigger("stop",event,this._uiHash())}
this.fromOutside=!1;return!this.cancelHelperRemoval},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===!1){this.cancel()}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null}}});function spinnerModifer(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change")}}}
$.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);if(this.value()!==""){this._value(this.element.val(),!0)}
this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var options=this._super();var element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!=null&&value.length){options[option]=value}});return options},_events:{keydown:function(event){if(this._start(event)&&this._keydown(event)){event.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return}
this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event)}},mousewheel:function(event,delta){if(!delta){return}
if(!this.spinning&&!this._start(event)){return!1}
this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event)}},100);event.preventDefault()},"mousedown .ui-spinner-button":function(event){var previous;previous=this.element[0]===$.ui.safeActiveElement(this.document[0])?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===$.ui.safeActiveElement(this.document[0]);if(!isActive){this.element.trigger("focus");this.previous=previous;this._delay(function(){this.previous=previous})}}
event.preventDefault();checkFocus.call(this);this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur;checkFocus.call(this)});if(this._start(event)===!1){return}
this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){if(!$(event.currentTarget).hasClass("ui-state-active")){return}
if(this._start(event)===!1){return!1}
this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance();this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");this._addClass("ui-spinner-input");this.element.attr("role","spinbutton");this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}});this._removeClass(this.buttons,"ui-corner-all");this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");this.buttons.first().button({"icon":this.options.icons.up,"showLabel":!1});this.buttons.last().button({"icon":this.options.icons.down,"showLabel":!1});if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&this.uiSpinner.height()>0){this.uiSpinner.height(this.uiSpinner.height())}},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return!0;case keyCode.DOWN:this._repeat(null,-1,event);return!0;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return!0;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return!0}
return!1},_start:function(event){if(!this.spinning&&this._trigger("start",event)===!1){return!1}
if(!this.counter){this.counter=1}
this.spinning=!0;return!0},_repeat:function(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event)},i);this._spin(steps*this.options.step,event)},_spin:function(step,event){var value=this.value()||0;if(!this.counter){this.counter=1}
value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==!1){this._value(value);this.counter++}},_increment:function(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1)}
return 1},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min))}
return precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1},_adjustValue:function(value){var base,aboveMin,options=this.options;base=options.min!==null?options.min:0;aboveMin=value-base;aboveMin=Math.round(aboveMin/options.step)*options.step;value=base+aboveMin;value=parseFloat(value.toFixed(this._precision()));if(options.max!==null&&value>options.max){return options.max}
if(options.min!==null&&value<options.min){return options.min}
return value},_stop:function(event){if(!this.spinning){return}
clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=!1;this._trigger("stop",event)},_setOption:function(key,value){var prevValue,first,last;if(key==="culture"||key==="numberFormat"){prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return}
if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value)}}
if(key==="icons"){first=this.buttons.first().find(".ui-icon");this._removeClass(first,null,this.options.icons.up);this._addClass(first,null,value.up);last=this.buttons.last().find(".ui-icon");this._removeClass(last,null,this.options.icons.down);this._addClass(last,null,value.down)}
this._super(key,value)},_setOptionDisabled:function(value){this._super(value);this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!value);this.element.prop("disabled",!!value);this.buttons.button(value?"disable":"enable")},_setOptions:spinnerModifer(function(options){this._super(options)}),_parse:function(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val}
return val===""||isNaN(val)?null:val},_format:function(value){if(value===""){return""}
return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var value=this.value();if(value===null){return!1}
return value===this._adjustValue(value)},_value:function(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed)}
value=this._format(parsed)}}
this.element.val(value);this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:spinnerModifer(function(steps){this._stepUp(steps)}),_stepUp:function(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop()}},stepDown:spinnerModifer(function(steps){this._stepDown(steps)}),_stepDown:function(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop()}},pageUp:spinnerModifer(function(pages){this._stepUp((pages||1)*this.options.page)}),pageDown:spinnerModifer(function(pages){this._stepDown((pages||1)*this.options.page)}),value:function(newVal){if(!arguments.length){return this._parse(this.element.val())}
spinnerModifer(this._value).call(this,newVal)},widget:function(){return this.uiSpinner}});if($.uiBackCompat!==!1){$.widget("ui.spinner",$.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}})}
var widgetsSpinner=$.ui.spinner;$.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var rhash=/#.*$/;return function(anchor){var anchorUrl,locationUrl;anchorUrl=anchor.href.replace(rhash,"");locationUrl=location.href.replace(rhash,"");try{anchorUrl=decodeURIComponent(anchorUrl)}catch(error){}
try{locationUrl=decodeURIComponent(locationUrl)}catch(error){}
return anchor.hash.length>1&&anchorUrl===locationUrl}})(),_create:function(){var that=this,options=this.options;this.running=!1;this._addClass("ui-tabs","ui-widget ui-widget-content");this._toggleClass("ui-tabs-collapsible",null,options.collapsible);this._processTabs();options.active=this._initialActive();if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li)}))).sort()}
if(this.options.active!==!1&&this.anchors.length){this.active=this._findActive(options.active)}else{this.active=$()}
this._refresh();if(this.active.length){this.load(options.active)}},_initialActive:function(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return!1}})}
if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}
if(active===null||active===-1){active=this.tabs.length?0:!1}}
if(active!==!1){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?!1:0}}
if(!collapsible&&active===!1&&this.anchors.length){active=0}
return active},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)}},_tabKeydown:function(event){var focusedTab=$($.ui.safeActiveElement(this.document[0])).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=!0;if(this._handlePageNav(event)){return}
switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=!1;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex===this.options.active?!1:selectedIndex);return;default:return}
event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);if(!event.ctrlKey&&!event.metaKey){focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex)},this.delay)}},_panelKeydown:function(event){if(this._handlePageNav(event)){return}
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.trigger("focus")}},_handlePageNav:function(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,!1));return!0}
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,!0));return!0}},_findNextTab:function(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0}
if(index<0){index=lastTabIndex}
return index}
while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1}
return index},_focusNextTab:function(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).trigger("focus");return index},_setOption:function(key,value){if(key==="active"){this._activate(value);return}
this._super(key,value);if(key==="collapsible"){this._toggleClass("ui-tabs-collapsible",null,value);if(!value&&this.options.active===!1){this._activate(0)}}
if(key==="event"){this._setupEvents(value)}
if(key==="heightStyle"){this._setupHeightStyle(value)}},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab)});this._processTabs();if(options.active===!1||!this.anchors.length){options.active=!1;this.active=$()}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=!1;this.active=$()}else{this._activate(this._findNextTab(Math.max(0,options.active-1),!1))}}else{options.active=this.tabs.index(this.active)}
this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._addClass(this.active,"ui-tabs-active","ui-state-active");this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})}},_processTabs:function(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().attr("role","tablist");this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");this.tablist.on("mousedown"+this.eventNamespace,"> li",function(event){if($(this).is(".ui-state-disabled")){event.preventDefault()}}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur()}});this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");this.anchors=this.tabs.map(function(){return $("a",this)[0]}).attr({role:"presentation",tabIndex:-1});this._addClass(this.anchors,"ui-tabs-anchor");this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(that._isLocal(anchor)){selector=anchor.hash;panelId=selector.substring(1);panel=that.element.find(that._sanitizeSelector(selector))}else{panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist)}
panel.attr("aria-live","polite")}
if(panel.length){that.panels=that.panels.add(panel)}
if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls)}
tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId)});this.panels.attr("role","tabpanel");this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");if(prevTabs){this._off(prevTabs.not(this.tabs));this._off(prevAnchors.not(this.anchors));this._off(prevPanels.not(this.panels))}},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(id){return $("<div>").attr("id",id).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(disabled){var currentItem,li,i;if($.isArray(disabled)){if(!disabled.length){disabled=!1}else if(disabled.length===this.anchors.length){disabled=!0}}
for(i=0;(li=this.tabs[i]);i++){currentItem=$(li);if(disabled===!0||$.inArray(i,disabled)!==-1){currentItem.attr("aria-disabled","true");this._addClass(currentItem,null,"ui-state-disabled")}else{currentItem.removeAttr("aria-disabled");this._removeClass(currentItem,null,"ui-state-disabled")}}
this.options.disabled=disabled;this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,disabled===!0)},_setupEvents:function(event){var events={};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"})}
this._off(this.anchors.add(this.tabs).add(this.panels));this._on(!0,this.anchors,{click:function(event){event.preventDefault()}});this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return}
maxHeight-=elem.outerHeight(!0)});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(!0)});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height())}).height(maxHeight)}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||(clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===!1)){return}
options.active=collapsing?!1:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort()}
if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.")}
if(toShow.length){this.load(this.tabs.index(tab),event)}
this._toggle(event,eventData)},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=!0;function complete(){that.running=!1;that._trigger("activate",event,eventData)}
function show(){that._addClass(eventData.newTab.closest("li"),"ui-tabs-active","ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete)}else{toShow.show();complete()}}
if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){that._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");show()})}else{this._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");toHide.hide();show()}
toHide.attr("aria-hidden","true");eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1)}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0}).attr("tabIndex",-1)}
toShow.attr("aria-hidden","false");eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return}
if(!active.length){active=this.active}
anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop})},_findActive:function(index){return index===!1?$():this.tabs.eq(index)},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+$.ui.escapeSelector(index)+"']"))}
return index},_destroy:function(){if(this.xhr){this.xhr.abort()}
this.tablist.removeAttr("role").off(this.eventNamespace);this.anchors.removeAttr("role tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove()}else{$(this).removeAttr("role tabIndex "+"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls")}else{li.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(index){var disabled=this.options.disabled;if(disabled===!1){return}
if(index===undefined){disabled=!1}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null})}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null})}}
this._setOptionDisabled(disabled)},disable:function(index){var disabled=this.options.disabled;if(disabled===!0){return}
if(index===undefined){disabled=!0}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return}
if($.isArray(disabled)){disabled=$.merge([index],disabled).sort()}else{disabled=[index]}}
this._setOptionDisabled(disabled)},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function(jqXHR,status){if(status==="abort"){that.panels.stop(!1,!0)}
that._removeClass(tab,"ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr}};if(this._isLocal(anchor[0])){return}
this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(tab,"ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.done(function(response,status,jqXHR){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);complete(jqXHR,status)},1)}).fail(function(jqXHR,status){setTimeout(function(){complete(jqXHR,status)},1)})}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href").replace(/#.*$/,""),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData))}}},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id))}});if($.uiBackCompat!==!1){$.widget("ui.tabs",$.ui.tabs,{_processTabs:function(){this._superApply(arguments);this._addClass(this.tabs,"ui-tab")}})}
var widgetsTabs=$.ui.tabs;$.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var title=$(this).attr("title")||"";return $("<a>").text(title).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")))},_removeDescribedBy:function(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1)}
elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby)}else{elem.removeAttr("aria-describedby")}},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};this.liveRegion=$("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this.disabledTitles=$([])},_setOption:function(key,value){var that=this;this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,tooltipData){that._updateContent(tooltipData.element)})}},_setOptionDisabled:function(value){this[value?"_disable":"_enable"]()},_disable:function(){var that=this;$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur");event.target=event.currentTarget=tooltipData.element[0];that.close(event,!0)});this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var element=$(this);if(element.is("[title]")){return element.data("ui-tooltip-title",element.attr("title")).removeAttr("title")}}))},_enable:function(){this.disabledTitles.each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"))}});this.disabledTitles=$([])},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);if(!target.length||target.data("ui-tooltip-id")){return}
if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"))}
target.data("ui-tooltip-open",!0);if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,!0)}
if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","")}})}
this._registerCloseHandlers(event,target);this._updateContent(target,event)},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"||contentOption.nodeType||contentOption.jquery){return this._open(event,target,contentOption)}
content=contentOption.call(target[0],function(response){that._delay(function(){if(!target.data("ui-tooltip-open")){return}
if(event){event.type=eventType}
this._open(event,target,response)})});if(content){this._open(event,target,content)}},_open:function(event,target,content){var tooltipData,tooltip,delayedShow,a11yContent,positionOption=$.extend({},this.options.position);if(!content){return}
tooltipData=this._find(target);if(tooltipData){tooltipData.tooltip.find(".ui-tooltip-content").html(content);return}
if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","")}else{target.removeAttr("title")}}
tooltipData=this._tooltip(target);tooltip=tooltipData.tooltip;this._addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);this.liveRegion.children().hide();a11yContent=$("<div>").html(tooltip.find(".ui-tooltip-content").html());a11yContent.removeAttr("name").find("[name]").removeAttr("name");a11yContent.removeAttr("id").find("[id]").removeAttr("id");a11yContent.appendTo(this.liveRegion);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return}
tooltip.position(positionOption)}
if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});position(event)}else{tooltip.position($.extend({of:target},this.options.position))}
tooltip.hide();this._show(tooltip,this.options.show);if(this.options.track&&this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow)}},$.fx.interval)}
this._trigger("open",event,{tooltip:tooltip})},_registerCloseHandlers:function(event,target){var events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,!0)}}};if(target[0]!==this.element[0]){events.remove=function(){this._removeTooltip(this._find(target).tooltip)}}
if(!event||event.type==="mouseover"){events.mouseleave="close"}
if(!event||event.type==="focusin"){events.focusout="close"}
this._on(!0,target,events)},close:function(event){var tooltip,that=this,target=$(event?event.currentTarget:this.element),tooltipData=this._find(target);if(!tooltipData){target.removeData("ui-tooltip-open");return}
tooltip=tooltipData.tooltip;if(tooltipData.closing){return}
clearInterval(this.delayedShow);if(target.data("ui-tooltip-title")&&!target.attr("title")){target.attr("title",target.data("ui-tooltip-title"))}
this._removeDescribedBy(target);tooltipData.hiding=!0;tooltip.stop(!0);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this))});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");if(target[0]!==this.element[0]){this._off(target,"remove")}
this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id]})}
tooltipData.closing=!0;this._trigger("close",event,{tooltip:tooltip});if(!tooltipData.hiding){tooltipData.closing=!1}},_tooltip:function(element){var tooltip=$("<div>").attr("role","tooltip"),content=$("<div>").appendTo(tooltip),id=tooltip.uniqueId().attr("id");this._addClass(content,"ui-tooltip-content");this._addClass(tooltip,"ui-tooltip","ui-widget ui-widget-content");tooltip.appendTo(this._appendTo(element));return this.tooltips[id]={element:element,tooltip:tooltip}},_find:function(target){var id=target.data("ui-tooltip-id");return id?this.tooltips[id]:null},_removeTooltip:function(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")]},_appendTo:function(target){var element=target.closest(".ui-front, dialog");if(!element.length){element=this.document[0].body}
return element},_destroy:function(){var that=this;$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur"),element=tooltipData.element;event.target=event.currentTarget=element[0];that.close(event,!0);$("#"+id).remove();if(element.data("ui-tooltip-title")){if(!element.attr("title")){element.attr("title",element.data("ui-tooltip-title"))}
element.removeData("ui-tooltip-title")}});this.liveRegion.remove()}});if($.uiBackCompat!==!1){$.widget("ui.tooltip",$.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var tooltipData=this._superApply(arguments);if(this.options.tooltipClass){tooltipData.tooltip.addClass(this.options.tooltipClass)}
return tooltipData}})}
var widgetsTooltip=$.ui.tooltip}));(function(window,document,$,undefined){'use strict';if(!$){return}
if($.fn.fancybox){if('console' in window){console.log('fancyBox already initialized')}
return}
var defaults={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:['slideShow','fullScreen','thumbs','share','close'],idleTime:3,smallBtn:'auto',protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:'auto'}},defaultType:'image',animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:'',baseClass:'',baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1">'+'<div class="fancybox-bg"></div>'+'<div class="fancybox-inner">'+'<div class="fancybox-infobar">'+'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>'+'</div>'+'<div class="fancybox-toolbar">{{buttons}}</div>'+'<div class="fancybox-navigation">{{arrows}}</div>'+'<div class="fancybox-stage"></div>'+'<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>'+'</div>'+'</div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />'+'</svg>'+'</a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />'+'</svg>'+'</button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,10 L30,30 M30,10 L10,30" />'+'</svg>'+'</button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>'+'</svg>'+'</button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>'+'</svg>'+'</button>'},parentEl:'body',autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1,},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4000},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:'.fancybox-container',axis:'y'},wheel:'auto',onInit:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeClose:$.noop,afterClose:$.noop,onActivate:$.noop,onDeactivate:$.noop,clickContent:function(current,event){return current.type==='image'?'zoom':!1},clickSlide:'close',clickOutside:'close',dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,margin:0,clickContent:function(current,event){return current.type==='image'?'toggleControls':!1},clickSlide:function(current,event){return current.type==='image'?'toggleControls':'close'},dblclickContent:function(current,event){return current.type==='image'?'zoom':!1},dblclickSlide:function(current,event){return current.type==='image'?'zoom':!1}},lang:'en',i18n:{'en':{CLOSE:'Close',NEXT:'Next',PREV:'Previous',ERROR:'The requested content cannot be loaded. <br/> Please try again later.',PLAY_START:'Start slideshow',PLAY_STOP:'Pause slideshow',FULL_SCREEN:'Full screen',THUMBS:'Thumbnails',DOWNLOAD:'Download',SHARE:'Share',ZOOM:'Zoom'},'de':{CLOSE:'Schliessen',NEXT:'Weiter',PREV:'Zurück',ERROR:'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',PLAY_START:'Diaschau starten',PLAY_STOP:'Diaschau beenden',FULL_SCREEN:'Vollbild',THUMBS:'Vorschaubilder',DOWNLOAD:'Herunterladen',SHARE:'Teilen',ZOOM:'Maßstab'}}};var $W=$(window);var $D=$(document);var called=0;var isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $};var requestAFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();var transitionEnd=(function(){var t,el=document.createElement("fakeelement");var transitions={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"};for(t in transitions){if(el.style[t]!==undefined){return transitions[t]}}
return'transitionend'})();var forceRedraw=function($el){return($el&&$el.length&&$el[0].offsetHeight)};var FancyBox=function(content,opts,index){var self=this;self.opts=$.extend(!0,{index:index},$.fancybox.defaults,opts||{});if($.fancybox.isMobile){self.opts=$.extend(!0,{},self.opts,self.opts.mobile)}
if(opts&&$.isArray(opts.buttons)){self.opts.buttons=opts.buttons}
self.id=self.opts.id||++called;self.group=[];self.currIndex=parseInt(self.opts.index,10)||0;self.prevIndex=null;self.prevPos=null;self.currPos=0;self.firstRun=null;self.createGroup(content);if(!self.group.length){return}
self.$lastFocus=$(document.activeElement).blur();self.slides={};self.init()};$.extend(FancyBox.prototype,{init:function(){var self=this,firstItem=self.group[self.currIndex],firstItemOpts=firstItem.opts,scrollbarWidth=$.fancybox.scrollbarWidth,$scrollDiv,$container,buttonStr;self.scrollTop=$D.scrollTop();self.scrollLeft=$D.scrollLeft();if(!$.fancybox.getInstance()){$('body').addClass('fancybox-active');if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){if(firstItem.type!=='image'){$('body').css('top',$('body').scrollTop()*-1).addClass('fancybox-iosfix')}}else if(!$.fancybox.isMobile&&document.body.scrollHeight>window.innerHeight){if(scrollbarWidth===undefined){$scrollDiv=$('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo('body');scrollbarWidth=$.fancybox.scrollbarWidth=$scrollDiv[0].offsetWidth-$scrollDiv[0].clientWidth;$scrollDiv.remove()}
$('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+scrollbarWidth+'px; }</style>');$('body').addClass('compensate-for-scrollbar')}}
buttonStr='';$.each(firstItemOpts.buttons,function(index,value){buttonStr+=(firstItemOpts.btnTpl[value]||'')});$container=$(self.translate(self,firstItemOpts.baseTpl.replace('\{\{buttons\}\}',buttonStr).replace('\{\{arrows\}\}',firstItemOpts.btnTpl.arrowLeft+firstItemOpts.btnTpl.arrowRight))).attr('id','fancybox-container-'+self.id).addClass('fancybox-is-hidden').addClass(firstItemOpts.baseClass).data('FancyBox',self).appendTo(firstItemOpts.parentEl);self.$refs={container:$container};['bg','inner','infobar','toolbar','stage','caption','navigation'].forEach(function(item){self.$refs[item]=$container.find('.fancybox-'+item)});self.trigger('onInit');self.activate();self.jumpTo(self.currIndex)},translate:function(obj,str){var arr=obj.opts.i18n[obj.opts.lang];return str.replace(/\{\{(\w+)\}\}/g,function(match,n){var value=arr[n];if(value===undefined){return match}
return value})},createGroup:function(content){var self=this;var items=$.makeArray(content);$.each(items,function(i,item){var obj={},opts={},$item,type,found,src,srcParts;if($.isPlainObject(item)){obj=item;opts=item.opts||item}else if($.type(item)==='object'&&$(item).length){$item=$(item);opts=$item.data();opts=$.extend({},opts,opts.options||{});opts.$orig=$item;obj.src=opts.src||$item.attr('href');if(!obj.type&&!obj.src){obj.type='inline';obj.src=item}}else{obj={type:'html',src:item+''}}
obj.opts=$.extend(!0,{},self.opts,opts);if($.isArray(opts.buttons)){obj.opts.buttons=opts.buttons}
type=obj.type||obj.opts.type;src=obj.src||'';if(!type&&src){if(src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)){type='image'}else if(src.match(/\.(pdf)((\?|#).*)?$/i)){type='pdf'}else if(found=src.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)){type='video';if(!obj.opts.videoFormat){obj.opts.videoFormat='video/'+(found[1]==='ogv'?'ogg':found[1])}}else if(src.charAt(0)==='#'){type='inline'}}
if(type){obj.type=type}else{self.trigger('objectNeedsType',obj)}
obj.index=self.group.length;if(obj.opts.$orig&&!obj.opts.$orig.length){delete obj.opts.$orig}
if(!obj.opts.$thumb&&obj.opts.$orig){obj.opts.$thumb=obj.opts.$orig.find('img:first')}
if(obj.opts.$thumb&&!obj.opts.$thumb.length){delete obj.opts.$thumb}
if($.type(obj.opts.caption)==='function'){obj.opts.caption=obj.opts.caption.apply(item,[self,obj])}
if($.type(self.opts.caption)==='function'){obj.opts.caption=self.opts.caption.apply(item,[self,obj])}
if(!(obj.opts.caption instanceof $)){obj.opts.caption=obj.opts.caption===undefined?'':obj.opts.caption+''}
if(type==='ajax'){srcParts=src.split(/\s+/,2);if(srcParts.length>1){obj.src=srcParts.shift();obj.opts.filter=srcParts.shift()}}
if(obj.opts.smallBtn=='auto'){if($.inArray(type,['html','inline','ajax'])>-1){obj.opts.toolbar=!1;obj.opts.smallBtn=!0}else{obj.opts.smallBtn=!1}}
if(type==='pdf'){obj.type='iframe';obj.opts.iframe.preload=!1}
if(obj.opts.modal){obj.opts=$.extend(!0,obj.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})}
self.group.push(obj)})},addEvents:function(){var self=this;self.removeEvents();self.$refs.container.on('click.fb-close','[data-fancybox-close]',function(e){e.stopPropagation();e.preventDefault();self.close(e)}).on('click.fb-prev touchend.fb-prev','[data-fancybox-prev]',function(e){e.stopPropagation();e.preventDefault();self.previous()}).on('click.fb-next touchend.fb-next','[data-fancybox-next]',function(e){e.stopPropagation();e.preventDefault();self.next()}).on('click.fb','[data-fancybox-zoom]',function(e){self[self.isScaledDown()?'scaleToActual':'scaleToFit']()});$W.on('orientationchange.fb resize.fb',function(e){if(e&&e.originalEvent&&e.originalEvent.type==="resize"){requestAFrame(function(){self.update()})}else{self.$refs.stage.hide();setTimeout(function(){self.$refs.stage.show();self.update()},600)}});$D.on('focusin.fb',function(e){var instance=$.fancybox?$.fancybox.getInstance():null;if(instance.isClosing||!instance.current||!instance.current.opts.trapFocus||$(e.target).hasClass('fancybox-container')||$(e.target).is(document)){return}
if(instance&&$(e.target).css('position')!=='fixed'&&!instance.$refs.container.has(e.target).length){e.stopPropagation();instance.focus();$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft)}});$D.on('keydown.fb',function(e){var current=self.current,keycode=e.keyCode||e.which;if(!current||!current.opts.keyboard){return}
if($(e.target).is('input')||$(e.target).is('textarea')){return}
if(keycode===8||keycode===27){e.preventDefault();self.close(e);return}
if(keycode===37||keycode===38){e.preventDefault();self.previous();return}
if(keycode===39||keycode===40){e.preventDefault();self.next();return}
self.trigger('afterKeydown',e,keycode)});if(self.group[self.currIndex].opts.idleTime){self.idleSecondsCounter=0;$D.on('mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',function(e){self.idleSecondsCounter=0;if(self.isIdle){self.showControls()}
self.isIdle=!1});self.idleInterval=window.setInterval(function(){self.idleSecondsCounter++;if(self.idleSecondsCounter>=self.group[self.currIndex].opts.idleTime&&!self.isDragging){self.isIdle=!0;self.idleSecondsCounter=0;self.hideControls()}},1000)}},removeEvents:function(){var self=this;$W.off('orientationchange.fb resize.fb');$D.off('focusin.fb keydown.fb .fb-idle');this.$refs.container.off('.fb-close .fb-prev .fb-next');if(self.idleInterval){window.clearInterval(self.idleInterval);self.idleInterval=null}},previous:function(duration){return this.jumpTo(this.currPos-1,duration)},next:function(duration){return this.jumpTo(this.currPos+1,duration)},jumpTo:function(pos,duration,slide){var self=this,firstRun,loop,current,previous,canvasWidth,currentPos,transitionProps;var groupLen=self.group.length;if(self.isDragging||self.isClosing||(self.isAnimating&&self.firstRun)){return}
pos=parseInt(pos,10);loop=self.current?self.current.opts.loop:self.opts.loop;if(!loop&&(pos<0||pos>=groupLen)){return!1}
firstRun=self.firstRun=(self.firstRun===null);if(groupLen<2&&!firstRun&&!!self.isDragging){return}
previous=self.current;self.prevIndex=self.currIndex;self.prevPos=self.currPos;current=self.createSlide(pos);if(groupLen>1){if(loop||current.index>0){self.createSlide(pos-1)}
if(loop||current.index<groupLen-1){self.createSlide(pos+1)}}
self.current=current;self.currIndex=current.index;self.currPos=current.pos;self.trigger('beforeShow',firstRun);self.updateControls();currentPos=$.fancybox.getTranslate(current.$slide);current.isMoved=(currentPos.left!==0||currentPos.top!==0)&&!current.$slide.hasClass('fancybox-animated');current.forcedDuration=undefined;if($.isNumeric(duration)){current.forcedDuration=duration}else{duration=current.opts[firstRun?'animationDuration':'transitionDuration']}
duration=parseInt(duration,10);if(firstRun){if(current.opts.animationEffect&&duration){self.$refs.container.css('transition-duration',duration+'ms')}
self.$refs.container.removeClass('fancybox-is-hidden');forceRedraw(self.$refs.container);self.$refs.container.addClass('fancybox-is-open');current.$slide.addClass('fancybox-slide--current');self.loadSlide(current);self.preload('image');return}
$.each(self.slides,function(index,slide){$.fancybox.stop(slide.$slide)});current.$slide.removeClass('fancybox-slide--next fancybox-slide--previous').addClass('fancybox-slide--current');if(current.isMoved){canvasWidth=Math.round(current.$slide.width());$.each(self.slides,function(index,slide){var pos=slide.pos-current.pos;$.fancybox.animate(slide.$slide,{top:0,left:(pos*canvasWidth)+(pos*slide.opts.gutter)},duration,function(){slide.$slide.removeAttr('style').removeClass('fancybox-slide--next fancybox-slide--previous');if(slide.pos===self.currPos){current.isMoved=!1;self.complete()}})})}else{self.$refs.stage.children().removeAttr('style')}
if(current.isLoaded){self.revealContent(current)}else{self.loadSlide(current)}
self.preload('image');if(previous.pos===current.pos){return}
transitionProps='fancybox-slide--'+(previous.pos>current.pos?'next':'previous');previous.$slide.removeClass('fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous');previous.isComplete=!1;if(!duration||(!current.isMoved&&!current.opts.transitionEffect)){return}
if(current.isMoved){previous.$slide.addClass(transitionProps)}else{transitionProps='fancybox-animated '+transitionProps+' fancybox-fx-'+current.opts.transitionEffect;$.fancybox.animate(previous.$slide,transitionProps,duration,function(){previous.$slide.removeClass(transitionProps).removeAttr('style')})}},createSlide:function(pos){var self=this;var $slide;var index;index=pos%self.group.length;index=index<0?self.group.length+index:index;if(!self.slides[pos]&&self.group[index]){$slide=$('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);self.slides[pos]=$.extend(!0,{},self.group[index],{pos:pos,$slide:$slide,isLoaded:!1,});self.updateSlide(self.slides[pos])}
return self.slides[pos]},scaleToActual:function(x,y,duration){var self=this;var current=self.current;var $what=current.$content;var imgPos,posX,posY,scaleX,scaleY;var canvasWidth=parseInt(current.$slide.width(),10);var canvasHeight=parseInt(current.$slide.height(),10);var newImgWidth=current.width;var newImgHeight=current.height;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return}
$.fancybox.stop($what);self.isAnimating=!0;x=x===undefined?canvasWidth*0.5:x;y=y===undefined?canvasHeight*0.5:y;imgPos=$.fancybox.getTranslate($what);scaleX=newImgWidth/imgPos.width;scaleY=newImgHeight/imgPos.height;posX=(canvasWidth*0.5-newImgWidth*0.5);posY=(canvasHeight*0.5-newImgHeight*0.5);if(newImgWidth>canvasWidth){posX=imgPos.left*scaleX-((x*scaleX)-x);if(posX>0){posX=0}
if(posX<canvasWidth-newImgWidth){posX=canvasWidth-newImgWidth}}
if(newImgHeight>canvasHeight){posY=imgPos.top*scaleY-((y*scaleY)-y);if(posY>0){posY=0}
if(posY<canvasHeight-newImgHeight){posY=canvasHeight-newImgHeight}}
self.updateCursor(newImgWidth,newImgHeight);$.fancybox.animate($what,{top:posY,left:posX,scaleX:scaleX,scaleY:scaleY},duration||330,function(){self.isAnimating=!1});if(self.SlideShow&&self.SlideShow.isActive){self.SlideShow.stop()}},scaleToFit:function(duration){var self=this;var current=self.current;var $what=current.$content;var end;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return}
$.fancybox.stop($what);self.isAnimating=!0;end=self.getFitPos(current);self.updateCursor(end.width,end.height);$.fancybox.animate($what,{top:end.top,left:end.left,scaleX:end.width/$what.width(),scaleY:end.height/$what.height()},duration||330,function(){self.isAnimating=!1})},getFitPos:function(slide){var self=this;var $what=slide.$content;var imgWidth=slide.width;var imgHeight=slide.height;var margin=slide.opts.margin;var canvasWidth,canvasHeight,minRatio,width,height;if(!$what||!$what.length||(!imgWidth&&!imgHeight)){return!1}
if($.type(margin)==="number"){margin=[margin,margin]}
if(margin.length==2){margin=[margin[0],margin[1],margin[0],margin[1]]}
canvasWidth=parseInt(self.$refs.stage.width(),10)-(margin[1]+margin[3]);canvasHeight=parseInt(self.$refs.stage.height(),10)-(margin[0]+margin[2]);minRatio=Math.min(1,canvasWidth/imgWidth,canvasHeight/imgHeight);width=Math.floor(minRatio*imgWidth);height=Math.floor(minRatio*imgHeight);return{top:Math.floor((canvasHeight-height)*0.5)+margin[0],left:Math.floor((canvasWidth-width)*0.5)+margin[3],width:width,height:height}},update:function(){var self=this;$.each(self.slides,function(key,slide){self.updateSlide(slide)})},updateSlide:function(slide,duration){var self=this,$what=slide&&slide.$content;if($what&&(slide.width||slide.height)){self.isAnimating=!1;$.fancybox.stop($what);$.fancybox.setTranslate($what,self.getFitPos(slide));if(slide.pos===self.currPos){self.updateCursor()}}
slide.$slide.trigger('refresh');self.trigger('onUpdate',slide)},centerSlide:function(slide,duration){var self=this,canvasWidth,pos;if(self.current){canvasWidth=Math.round(slide.$slide.width());pos=slide.pos-self.current.pos;$.fancybox.animate(slide.$slide,{top:0,left:(pos*canvasWidth)+(pos*slide.opts.gutter),opacity:1},duration===undefined?0:duration,null,!1)}},updateCursor:function(nextWidth,nextHeight){var self=this;var isScaledDown;var $container=self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');if(!self.current||self.isClosing){return}
if(self.isZoomable()){$container.addClass('fancybox-is-zoomable');if(nextWidth!==undefined&&nextHeight!==undefined){isScaledDown=nextWidth<self.current.width&&nextHeight<self.current.height}else{isScaledDown=self.isScaledDown()}
if(isScaledDown){$container.addClass('fancybox-can-zoomIn')}else{if(self.current.opts.touch){$container.addClass('fancybox-can-drag')}else{$container.addClass('fancybox-can-zoomOut')}}}else if(self.current.opts.touch){$container.addClass('fancybox-can-drag')}},isZoomable:function(){var self=this;var current=self.current;var fitPos;if(!current||self.isClosing){return}
if(current.type==='image'&&current.isLoaded&&!current.hasError&&(current.opts.clickContent==='zoom'||($.isFunction(current.opts.clickContent)&&current.opts.clickContent(current)==="zoom"))){fitPos=self.getFitPos(current);if(current.width>fitPos.width||current.height>fitPos.height){return!0}}
return!1},isScaledDown:function(){var self=this;var current=self.current;var $what=current.$content;var rez=!1;if($what){rez=$.fancybox.getTranslate($what);rez=rez.width<current.width||rez.height<current.height}
return rez},canPan:function(){var self=this;var current=self.current;var $what=current.$content;var rez=!1;if($what){rez=self.getFitPos(current);rez=Math.abs($what.width()-rez.width)>1||Math.abs($what.height()-rez.height)>1}
return rez},loadSlide:function(slide){var self=this,type,$slide;var ajaxLoad;if(slide.isLoading){return}
if(slide.isLoaded){return}
slide.isLoading=!0;self.trigger('beforeLoad',slide);type=slide.type;$slide=slide.$slide;$slide.off('refresh').trigger('onReset').addClass('fancybox-slide--'+(type||'unknown')).addClass(slide.opts.slideClass);switch(type){case 'image':self.setImage(slide);break;case 'iframe':self.setIframe(slide);break;case 'html':self.setContent(slide,slide.src||slide.content);break;case 'inline':if($(slide.src).length){self.setContent(slide,$(slide.src))}else{self.setError(slide)}
break;case 'ajax':self.showLoading(slide);ajaxLoad=$.ajax($.extend({},slide.opts.ajax.settings,{url:slide.src,success:function(data,textStatus){if(textStatus==='success'){self.setContent(slide,data)}},error:function(jqXHR,textStatus){if(jqXHR&&textStatus!=='abort'){self.setError(slide)}}}));$slide.one('onReset',function(){ajaxLoad.abort()});break;case 'video':self.setContent(slide,'<video controls>'+'<source src="'+slide.src+'" type="'+slide.opts.videoFormat+'">'+'Your browser doesn\'t support HTML5 video'+'</video>');break;default:self.setError(slide);break}
return!0},setImage:function(slide){var self=this;var srcset=slide.opts.srcset||slide.opts.image.srcset;var found,temp,pxRatio,windowWidth;if(srcset){pxRatio=window.devicePixelRatio||1;windowWidth=window.innerWidth*pxRatio;temp=srcset.split(',').map(function(el){var ret={};el.trim().split(/\s+/).forEach(function(el,i){var value=parseInt(el.substring(0,el.length-1),10);if(i===0){return(ret.url=el)}
if(value){ret.value=value;ret.postfix=el[el.length-1]}});return ret});temp.sort(function(a,b){return a.value-b.value});for(var j=0;j<temp.length;j++){var el=temp[j];if((el.postfix==='w'&&el.value>=windowWidth)||(el.postfix==='x'&&el.value>=pxRatio)){found=el;break}}
if(!found&&temp.length){found=temp[temp.length-1]}
if(found){slide.src=found.url;if(slide.width&&slide.height&&found.postfix=='w'){slide.height=(slide.width/slide.height)*found.value;slide.width=found.value}}}
slide.$content=$('<div class="fancybox-image-wrap"></div>').addClass('fancybox-is-hidden').appendTo(slide.$slide);if(slide.opts.preload!==!1&&slide.opts.width&&slide.opts.height&&(slide.opts.thumb||slide.opts.$thumb)){slide.width=slide.opts.width;slide.height=slide.opts.height;slide.$ghost=$('<img />').one('error',function(){$(this).remove();slide.$ghost=null;self.setBigImage(slide)}).one('load',function(){self.afterLoad(slide);self.setBigImage(slide)}).addClass('fancybox-image').appendTo(slide.$content).attr('src',slide.opts.thumb||slide.opts.$thumb.attr('src'))}else{self.setBigImage(slide)}},setBigImage:function(slide){var self=this;var $img=$('<img />');slide.$image=$img.one('error',function(){self.setError(slide)}).one('load',function(){clearTimeout(slide.timouts);slide.timouts=null;if(self.isClosing){return}
slide.width=slide.opts.width||this.naturalWidth;slide.height=slide.opts.height||this.naturalHeight;if(slide.opts.image.srcset){$img.attr('sizes','100vw').attr('srcset',slide.opts.image.srcset)}
self.hideLoading(slide);if(slide.$ghost){slide.timouts=setTimeout(function(){slide.timouts=null;slide.$ghost.hide()},Math.min(300,Math.max(1000,slide.height/1600)))}else{self.afterLoad(slide)}}).addClass('fancybox-image').attr('src',slide.src).appendTo(slide.$content);if(($img[0].complete||$img[0].readyState=="complete")&&$img[0].naturalWidth&&$img[0].naturalHeight){$img.trigger('load')}else if($img[0].error){$img.trigger('error')}else{slide.timouts=setTimeout(function(){if(!$img[0].complete&&!slide.hasError){self.showLoading(slide)}},100)}},setIframe:function(slide){var self=this,opts=slide.opts.iframe,$slide=slide.$slide,$iframe;slide.$content=$('<div class="fancybox-content'+(opts.preload?' fancybox-is-hidden':'')+'"></div>').css(opts.css).appendTo($slide);$iframe=$(opts.tpl.replace(/\{rnd\}/g,new Date().getTime())).attr(opts.attr).appendTo(slide.$content);if(opts.preload){self.showLoading(slide);$iframe.on('load.fb error.fb',function(e){this.isReady=1;slide.$slide.trigger('refresh');self.afterLoad(slide)});$slide.on('refresh.fb',function(){var $wrap=slide.$content,frameWidth=opts.css.width,frameHeight=opts.css.height,scrollWidth,$contents,$body;if($iframe[0].isReady!==1){return}
try{$contents=$iframe.contents();$body=$contents.find('body')}catch(ignore){}
if($body&&$body.length){if(frameWidth===undefined){scrollWidth=$iframe[0].contentWindow.document.documentElement.scrollWidth;frameWidth=Math.ceil($body.outerWidth(!0)+($wrap.width()-scrollWidth));frameWidth+=$wrap.outerWidth()-$wrap.innerWidth()}
if(frameHeight===undefined){frameHeight=Math.ceil($body.outerHeight(!0));frameHeight+=$wrap.outerHeight()-$wrap.innerHeight()}
if(frameWidth){$wrap.width(frameWidth)}
if(frameHeight){$wrap.height(frameHeight)}}
$wrap.removeClass('fancybox-is-hidden')})}else{this.afterLoad(slide)}
$iframe.attr('src',slide.src);if(slide.opts.smallBtn===!0){slide.$content.prepend(self.translate(slide,slide.opts.btnTpl.smallBtn))}
$slide.one('onReset',function(){try{$(this).find('iframe').hide().attr('src','//about:blank')}catch(ignore){}
$(this).empty();slide.isLoaded=!1})},setContent:function(slide,content){var self=this;if(self.isClosing){return}
self.hideLoading(slide);slide.$slide.empty();if(isQuery(content)&&content.parent().length){content.parent('.fancybox-slide--inline').trigger('onReset');slide.$placeholder=$('<div></div>').hide().insertAfter(content);content.css('display','inline-block')}else if(!slide.hasError){if($.type(content)==='string'){content=$('<div>').append($.trim(content)).contents();if(content[0].nodeType===3){content=$('<div>').html(content)}}
if(slide.opts.filter){content=$('<div>').html(content).find(slide.opts.filter)}}
slide.$slide.one('onReset',function(){$(this).find('video,audio').trigger('pause');if(slide.$placeholder){slide.$placeholder.after(content.hide()).remove();slide.$placeholder=null}
if(slide.$smallBtn){slide.$smallBtn.remove();slide.$smallBtn=null}
if(!slide.hasError){$(this).empty();slide.isLoaded=!1}});slide.$content=$(content).appendTo(slide.$slide);this.afterLoad(slide)},setError:function(slide){slide.hasError=!0;slide.$slide.removeClass('fancybox-slide--'+slide.type);this.setContent(slide,this.translate(slide,slide.opts.errorTpl))},showLoading:function(slide){var self=this;slide=slide||self.current;if(slide&&!slide.$spinner){slide.$spinner=$(self.opts.spinnerTpl).appendTo(slide.$slide)}},hideLoading:function(slide){var self=this;slide=slide||self.current;if(slide&&slide.$spinner){slide.$spinner.remove();delete slide.$spinner}},afterLoad:function(slide){var self=this;if(self.isClosing){return}
slide.isLoading=!1;slide.isLoaded=!0;self.trigger('afterLoad',slide);self.hideLoading(slide);if(slide.opts.smallBtn&&!slide.$smallBtn){slide.$smallBtn=$(self.translate(slide,slide.opts.btnTpl.smallBtn)).appendTo(slide.$content.filter('div,form').first())}
if(slide.opts.protect&&slide.$content&&!slide.hasError){slide.$content.on('contextmenu.fb',function(e){if(e.button==2){e.preventDefault()}
return!0});if(slide.type==='image'){$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content)}}
self.revealContent(slide)},revealContent:function(slide){var self=this;var $slide=slide.$slide;var effect,effectClassName,duration,opacity,end,start=!1;effect=slide.opts[self.firstRun?'animationEffect':'transitionEffect'];duration=slide.opts[self.firstRun?'animationDuration':'transitionDuration'];duration=parseInt(slide.forcedDuration===undefined?duration:slide.forcedDuration,10);if(slide.isMoved||slide.pos!==self.currPos||!duration){effect=!1}
if(effect==='zoom'&&!(slide.pos===self.currPos&&duration&&slide.type==='image'&&!slide.hasError&&(start=self.getThumbPos(slide)))){effect='fade'}
if(effect==='zoom'){end=self.getFitPos(slide);end.scaleX=end.width/start.width;end.scaleY=end.height/start.height;delete end.width;delete end.height;opacity=slide.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(slide.width/slide.height-start.width/start.height)>0.1}
if(opacity){start.opacity=0.1;end.opacity=1}
$.fancybox.setTranslate(slide.$content.removeClass('fancybox-is-hidden'),start);forceRedraw(slide.$content);$.fancybox.animate(slide.$content,end,duration,function(){self.complete()});return}
self.updateSlide(slide);if(!effect){forceRedraw($slide);slide.$content.removeClass('fancybox-is-hidden');if(slide.pos===self.currPos){self.complete()}
return}
$.fancybox.stop($slide);effectClassName='fancybox-animated fancybox-slide--'+(slide.pos>=self.prevPos?'next':'previous')+' fancybox-fx-'+effect;$slide.removeAttr('style').removeClass('fancybox-slide--current fancybox-slide--next fancybox-slide--previous').addClass(effectClassName);slide.$content.removeClass('fancybox-is-hidden');forceRedraw($slide);$.fancybox.animate($slide,'fancybox-slide--current',duration,function(e){$slide.removeClass(effectClassName).removeAttr('style');if(slide.pos===self.currPos){self.complete()}},!0)},getThumbPos:function(slide){var self=this;var rez=!1;var isElementVisible=function($el){var element=$el[0];var elementRect=element.getBoundingClientRect();var parentRects=[];var visibleInAllParents;while(element.parentElement!==null){if($(element.parentElement).css('overflow')==='hidden'||$(element.parentElement).css('overflow')==='auto'){parentRects.push(element.parentElement.getBoundingClientRect())}
element=element.parentElement}
visibleInAllParents=parentRects.every(function(parentRect){var visiblePixelX=Math.min(elementRect.right,parentRect.right)-Math.max(elementRect.left,parentRect.left);var visiblePixelY=Math.min(elementRect.bottom,parentRect.bottom)-Math.max(elementRect.top,parentRect.top);return visiblePixelX>0&&visiblePixelY>0});return visibleInAllParents&&elementRect.bottom>0&&elementRect.right>0&&elementRect.left<$(window).width()&&elementRect.top<$(window).height()};var $thumb=slide.opts.$thumb;var thumbPos=$thumb?$thumb.offset():0;var slidePos;if(thumbPos&&$thumb[0].ownerDocument===document&&isElementVisible($thumb)){slidePos=self.$refs.stage.offset();rez={top:thumbPos.top-slidePos.top+parseFloat($thumb.css("border-top-width")||0),left:thumbPos.left-slidePos.left+parseFloat($thumb.css("border-left-width")||0),width:$thumb.width(),height:$thumb.height(),scaleX:1,scaleY:1}}
return rez},complete:function(){var self=this,current=self.current,slides={},promise;if(current.isMoved||!current.isLoaded||current.isComplete){return}
current.isComplete=!0;current.$slide.siblings().trigger('onReset');self.preload('inline');forceRedraw(current.$slide);current.$slide.addClass('fancybox-slide--complete');$.each(self.slides,function(key,slide){if(slide.pos>=self.currPos-1&&slide.pos<=self.currPos+1){slides[slide.pos]=slide}else if(slide){$.fancybox.stop(slide.$slide);slide.$slide.off().remove()}});self.slides=slides;self.updateCursor();self.trigger('afterShow');current.$slide.find('video,audio').first().trigger('play');if($(document.activeElement).is('[disabled]')||(current.opts.autoFocus&&!(current.type=='image'||current.type==='iframe'))){self.focus()}},preload:function(type){var self=this,next=self.slides[self.currPos+1],prev=self.slides[self.currPos-1];if(next&&next.type===type){self.loadSlide(next)}
if(prev&&prev.type===type){self.loadSlide(prev)}},focus:function(){var current=this.current;var $el;if(this.isClosing){return}
if(current&&current.isComplete){$el=current.$slide.find('input[autofocus]:enabled:visible:first');if(!$el.length){$el=current.$slide.find('button,:input,[tabindex],a').filter(':enabled:visible:first')}}
$el=$el&&$el.length?$el:this.$refs.container;$el.focus()},activate:function(){var self=this;$('.fancybox-container').each(function(){var instance=$(this).data('FancyBox');if(instance&&instance.id!==self.id&&!instance.isClosing){instance.trigger('onDeactivate');instance.removeEvents();instance.isVisible=!1}});self.isVisible=!0;if(self.current||self.isIdle){self.update();self.updateControls()}
self.trigger('onActivate');self.addEvents()},close:function(e,d){var self=this;var current=self.current;var effect,duration;var $what,opacity,start,end;var done=function(){self.cleanUp(e)};if(self.isClosing){return!1}
self.isClosing=!0;if(self.trigger('beforeClose',e)===!1){self.isClosing=!1;requestAFrame(function(){self.update()});return!1}
self.removeEvents();if(current.timouts){clearTimeout(current.timouts)}
$what=current.$content;effect=current.opts.animationEffect;duration=$.isNumeric(d)?d:(effect?current.opts.animationDuration:0);current.$slide.off(transitionEnd).removeClass('fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated');current.$slide.siblings().trigger('onReset').remove();if(duration){self.$refs.container.removeClass('fancybox-is-open').addClass('fancybox-is-closing')}
self.hideLoading(current);self.hideControls();self.updateCursor();if(effect==='zoom'&&!(e!==!0&&$what&&duration&&current.type==='image'&&!current.hasError&&(end=self.getThumbPos(current)))){effect='fade'}
if(effect==='zoom'){$.fancybox.stop($what);start=$.fancybox.getTranslate($what);start.width=start.width*start.scaleX;start.height=start.height*start.scaleY;opacity=current.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(current.width/current.height-end.width/end.height)>0.1}
if(opacity){end.opacity=0}
start.scaleX=start.width/end.width;start.scaleY=start.height/end.height;start.width=end.width;start.height=end.height;$.fancybox.setTranslate(current.$content,start);forceRedraw(current.$content);$.fancybox.animate(current.$content,end,duration,done);return!0}
if(effect&&duration){if(e===!0){setTimeout(done,duration)}else{$.fancybox.animate(current.$slide.removeClass('fancybox-slide--current'),'fancybox-animated fancybox-slide--previous fancybox-fx-'+effect,duration,done)}}else{done()}
return!0},cleanUp:function(e){var self=this,$body=$('body'),instance,offset;self.current.$slide.trigger('onReset');self.$refs.container.empty().remove();self.trigger('afterClose',e);if(self.$lastFocus&&!!self.current.opts.backFocus){self.$lastFocus.focus()}
self.current=null;instance=$.fancybox.getInstance();if(instance){instance.activate()}else{$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);$body.removeClass('fancybox-active compensate-for-scrollbar');if($body.hasClass('fancybox-iosfix')){offset=parseInt(document.body.style.top,10);$body.removeClass('fancybox-iosfix').css('top','').scrollTop(offset*-1)}
$('#fancybox-style-noscroll').remove()}},trigger:function(name,slide){var args=Array.prototype.slice.call(arguments,1),self=this,obj=slide&&slide.opts?slide:self.current,rez;if(obj){args.unshift(obj)}else{obj=self}
args.unshift(self);if($.isFunction(obj.opts[name])){rez=obj.opts[name].apply(obj,args)}
if(rez===!1){return rez}
if(name==='afterClose'||!self.$refs){$D.trigger(name+'.fb',args)}else{self.$refs.container.trigger(name+'.fb',args)}},updateControls:function(force){var self=this;var current=self.current,index=current.index,caption=current.opts.caption,$container=self.$refs.container,$caption=self.$refs.caption;current.$slide.trigger('refresh');self.$caption=caption&&caption.length?$caption.html(caption):null;if(!self.isHiddenControls&&!self.isIdle){self.showControls()}
$container.find('[data-fancybox-count]').html(self.group.length);$container.find('[data-fancybox-index]').html(index+1);$container.find('[data-fancybox-prev]').prop('disabled',(!current.opts.loop&&index<=0));$container.find('[data-fancybox-next]').prop('disabled',(!current.opts.loop&&index>=self.group.length-1));if(current.type==='image'){$container.find('[data-fancybox-download]').attr('href',current.opts.image.src||current.src).show()}else{$container.find('[data-fancybox-download],[data-fancybox-zoom]').hide()}},hideControls:function(){this.isHiddenControls=!0;this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav')},showControls:function(){var self=this;var opts=self.current?self.current.opts:self.opts;var $container=self.$refs.container;self.isHiddenControls=!1;self.idleSecondsCounter=0;$container.toggleClass('fancybox-show-toolbar',!!(opts.toolbar&&opts.buttons)).toggleClass('fancybox-show-infobar',!!(opts.infobar&&self.group.length>1)).toggleClass('fancybox-show-nav',!!(opts.arrows&&self.group.length>1)).toggleClass('fancybox-is-modal',!!opts.modal);if(self.$caption){$container.addClass('fancybox-show-caption ')}else{$container.removeClass('fancybox-show-caption')}},toggleControls:function(){if(this.isHiddenControls){this.showControls()}else{this.hideControls()}},});$.fancybox={version:"3.2.10",defaults:defaults,getInstance:function(command){var instance=$('.fancybox-container:not(".fancybox-is-closing"):last').data('FancyBox');var args=Array.prototype.slice.call(arguments,1);if(instance instanceof FancyBox){if($.type(command)==='string'){instance[command].apply(instance,args)}else if($.type(command)==='function'){command.apply(instance,args)}
return instance}
return!1},open:function(items,opts,index){return new FancyBox(items,opts,index)},close:function(all){var instance=this.getInstance();if(instance){instance.close();if(all===!0){this.close()}}},destroy:function(){this.close(!0);$D.off('click.fb-start')},isMobile:document.createTouch!==undefined&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(function(){var div=document.createElement('div');return window.getComputedStyle&&window.getComputedStyle(div).getPropertyValue('transform')&&!(document.documentMode&&document.documentMode<11)}()),getTranslate:function($el){var matrix;if(!$el||!$el.length){return!1}
matrix=$el.eq(0).css('transform');if(matrix&&matrix.indexOf('matrix')!==-1){matrix=matrix.split('(')[1];matrix=matrix.split(')')[0];matrix=matrix.split(',')}else{matrix=[]}
if(matrix.length){if(matrix.length>10){matrix=[matrix[13],matrix[12],matrix[0],matrix[5]]}else{matrix=[matrix[5],matrix[4],matrix[0],matrix[3]]}
matrix=matrix.map(parseFloat)}else{matrix=[0,0,1,1];var transRegex=/\.*translate\((.*)px,(.*)px\)/i;var transRez=transRegex.exec($el.eq(0).attr('style'));if(transRez){matrix[0]=parseFloat(transRez[2]);matrix[1]=parseFloat(transRez[1])}}
return{top:matrix[0],left:matrix[1],scaleX:matrix[2],scaleY:matrix[3],opacity:parseFloat($el.css('opacity')),width:$el.width(),height:$el.height()}},setTranslate:function($el,props){var str='';var css={};if(!$el||!props){return}
if(props.left!==undefined||props.top!==undefined){str=(props.left===undefined?$el.position().left:props.left)+'px, '+(props.top===undefined?$el.position().top:props.top)+'px';if(this.use3d){str='translate3d('+str+', 0px)'}else{str='translate('+str+')'}}
if(props.scaleX!==undefined&&props.scaleY!==undefined){str=(str.length?str+' ':'')+'scale('+props.scaleX+', '+props.scaleY+')'}
if(str.length){css.transform=str}
if(props.opacity!==undefined){css.opacity=props.opacity}
if(props.width!==undefined){css.width=props.width}
if(props.height!==undefined){css.height=props.height}
return $el.css(css)},animate:function($el,to,duration,callback,leaveAnimationName){if($.isFunction(duration)){callback=duration;duration=null}
if(!$.isPlainObject(to)){$el.removeAttr('style')}
$el.on(transitionEnd,function(e){if(e&&e.originalEvent&&(!$el.is(e.originalEvent.target)||e.originalEvent.propertyName=='z-index')){return}
$.fancybox.stop($el);if($.isPlainObject(to)){if(to.scaleX!==undefined&&to.scaleY!==undefined){$el.css('transition-duration','');to.width=Math.round($el.width()*to.scaleX);to.height=Math.round($el.height()*to.scaleY);to.scaleX=1;to.scaleY=1;$.fancybox.setTranslate($el,to)}
if(leaveAnimationName===!1){$el.removeAttr('style')}}else if(leaveAnimationName!==!0){$el.removeClass(to)}
if($.isFunction(callback)){callback(e)}});if($.isNumeric(duration)){$el.css('transition-duration',duration+'ms')}
if($.isPlainObject(to)){$.fancybox.setTranslate($el,to)}else{$el.addClass(to)}
if(to.scaleX&&$el.hasClass('fancybox-image-wrap')){$el.parent().addClass('fancybox-is-scaling')}
$el.data("timer",setTimeout(function(){$el.trigger('transitionend')},duration+16))},stop:function($el){clearTimeout($el.data("timer"));$el.off('transitionend').css('transition-duration','');if($el.hasClass('fancybox-image-wrap')){$el.parent().removeClass('fancybox-is-scaling')}}};function _run(e){var $target=$(e.currentTarget),opts=e.data?e.data.options:{},value=$target.attr('data-fancybox')||'',index=0,items=[];if(e.isDefaultPrevented()){return}
e.preventDefault();if(value){items=opts.selector?$(opts.selector):(e.data?e.data.items:[]);items=items.length?items.filter('[data-fancybox="'+value+'"]'):$('[data-fancybox="'+value+'"]');index=items.index($target);if(index<0){index=0}}else{items=[$target]}
$.fancybox.open(items,opts,index)}
$.fn.fancybox=function(options){var selector;options=options||{};selector=options.selector||!1;if(selector){$('body').off('click.fb-start',selector).on('click.fb-start',selector,{options:options},_run)}else{this.off('click.fb-start').on('click.fb-start',{items:this,options:options},_run)}
return this};$D.on('click.fb-start','[data-fancybox]',_run)}(window,document,window.jQuery||jQuery));(function($){'use strict';var format=function(url,rez,params){if(!url){return}
params=params||'';if($.type(params)==="object"){params=$.param(params,!0)}
$.each(rez,function(key,value){url=url.replace('$'+key,value||'')});if(params.length){url+=(url.indexOf('?')>0?'&':'?')+params}
return url};var defaults={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:'transparent',enablejsapi:1,html5:1},paramPlace:8,type:'iframe',url:'//www.youtube.com/embed/$4',thumb:'//img.youtube.com/vi/$4/hqdefault.jpg'},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:'iframe',url:'//player.vimeo.com/video/$2'},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:'iframe',url:'//www.metacafe.com/embed/$1/?ap=1'},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:'iframe',url:'//www.dailymotion.com/embed/video/$1'},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:'iframe',url:'//vine.co/v/$1/embed/simple'},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:'image',url:'//$1/p/$2/media/?size=l'},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:'iframe',url:function(rez){return'//maps.google.'+rez[2]+'/?ll='+(rez[9]?rez[9]+'&z='+Math.floor(rez[10])+(rez[12]?rez[12].replace(/^\//,"&"):''):rez[12])+'&output='+(rez[12]&&rez[12].indexOf('layer=c')>0?'svembed':'embed')}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:'iframe',url:function(rez){return'//maps.google.'+rez[2]+'/maps?q='+rez[5].replace('query=','q=').replace('api=1','')+'&output=embed'}}};$(document).on('objectNeedsType.fb',function(e,instance,item){var url=item.src||'',type=!1,media,thumb,rez,params,urlParams,paramObj,provider;media=$.extend(!0,{},defaults,item.opts.media);$.each(media,function(providerName,providerOpts){rez=url.match(providerOpts.matcher);if(!rez){return}
type=providerOpts.type;paramObj={};if(providerOpts.paramPlace&&rez[providerOpts.paramPlace]){urlParams=rez[providerOpts.paramPlace];if(urlParams[0]=='?'){urlParams=urlParams.substring(1)}
urlParams=urlParams.split('&');for(var m=0;m<urlParams.length;++m){var p=urlParams[m].split('=',2);if(p.length==2){paramObj[p[0]]=decodeURIComponent(p[1].replace(/\+/g," "))}}}
params=$.extend(!0,{},providerOpts.params,item.opts[providerName],paramObj);url=$.type(providerOpts.url)==="function"?providerOpts.url.call(this,rez,params,item):format(providerOpts.url,rez,params);thumb=$.type(providerOpts.thumb)==="function"?providerOpts.thumb.call(this,rez,params,item):format(providerOpts.thumb,rez);if(providerName==='vimeo'){url=url.replace('&%23','#')}
return!1});if(type){item.src=url;item.type=type;if(!item.opts.thumb&&!(item.opts.$thumb&&item.opts.$thumb.length)){item.opts.thumb=thumb}
if(type==='iframe'){$.extend(!0,item.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}});item.contentProvider=provider;item.opts.slideClass+=' fancybox-slide--'+(provider=='gmap_place'||provider=='gmap_search'?'map':'video')}}else if(url){item.type=item.opts.defaultType}})}(window.jQuery||jQuery));(function(window,document,$){'use strict';var requestAFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();var cancelAFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(id){window.clearTimeout(id)}})();var pointers=function(e){var result=[];e=e.originalEvent||e||window.e;e=e.touches&&e.touches.length?e.touches:(e.changedTouches&&e.changedTouches.length?e.changedTouches:[e]);for(var key in e){if(e[key].pageX){result.push({x:e[key].pageX,y:e[key].pageY})}else if(e[key].clientX){result.push({x:e[key].clientX,y:e[key].clientY})}}
return result};var distance=function(point2,point1,what){if(!point1||!point2){return 0}
if(what==='x'){return point2.x-point1.x}else if(what==='y'){return point2.y-point1.y}
return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2))};var isClickable=function($el){if($el.is('a,area,button,[role="button"],input,label,select,summary,textarea')||$.isFunction($el.get(0).onclick)||$el.data('selectable')){return!0}
for(var i=0,atts=$el[0].attributes,n=atts.length;i<n;i++){if(atts[i].nodeName.substr(0,14)==='data-fancybox-'){return!0}}
return!1};var hasScrollbars=function(el){var overflowY=window.getComputedStyle(el)['overflow-y'];var overflowX=window.getComputedStyle(el)['overflow-x'];var vertical=(overflowY==='scroll'||overflowY==='auto')&&el.scrollHeight>el.clientHeight;var horizontal=(overflowX==='scroll'||overflowX==='auto')&&el.scrollWidth>el.clientWidth;return vertical||horizontal};var isScrollable=function($el){var rez=!1;while(!0){rez=hasScrollbars($el.get(0));if(rez){break}
$el=$el.parent();if(!$el.length||$el.hasClass('fancybox-stage')||$el.is('body')){break}}
return rez};var Guestures=function(instance){var self=this;self.instance=instance;self.$bg=instance.$refs.bg;self.$stage=instance.$refs.stage;self.$container=instance.$refs.container;self.destroy();self.$container.on('touchstart.fb.touch mousedown.fb.touch',$.proxy(self,'ontouchstart'))};Guestures.prototype.destroy=function(){this.$container.off('.fb.touch')};Guestures.prototype.ontouchstart=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var $content=current.$content;var isTouchDevice=(e.type=='touchstart');if(isTouchDevice){self.$container.off('mousedown.fb.touch')}
if(e.originalEvent&&e.originalEvent.button==2){return}
if(!$target.length||isClickable($target)||isClickable($target.parent())){return}
if(!$target.is('img')&&e.originalEvent.clientX>$target[0].clientWidth+$target.offset().left){return}
if(!current||self.instance.isAnimating||self.instance.isClosing){e.stopPropagation();e.preventDefault();return}
self.realPoints=self.startPoints=pointers(e);if(!self.startPoints){return}
e.stopPropagation();self.startEvent=e;self.canTap=!0;self.$target=$target;self.$content=$content;self.opts=current.opts.touch;self.isPanning=!1;self.isSwiping=!1;self.isZooming=!1;self.isScrolling=!1;self.sliderStartPos=self.sliderLastPos||{top:0,left:0};self.contentStartPos=$.fancybox.getTranslate(self.$content);self.contentLastPos=null;self.startTime=new Date().getTime();self.distanceX=self.distanceY=self.distance=0;self.canvasWidth=Math.round(current.$slide[0].clientWidth);self.canvasHeight=Math.round(current.$slide[0].clientHeight);$(document).off('.fb.touch').on(isTouchDevice?'touchend.fb.touch touchcancel.fb.touch':'mouseup.fb.touch mouseleave.fb.touch',$.proxy(self,"ontouchend")).on(isTouchDevice?'touchmove.fb.touch':'mousemove.fb.touch',$.proxy(self,"ontouchmove"));if($.fancybox.isMobile){document.addEventListener('scroll',self.onscroll,!0)}
if(!(self.opts||instance.canPan())||!($target.is(self.$stage)||self.$stage.find($target).length)){if($target.is('img')){e.preventDefault()}
return}
if(!($.fancybox.isMobile&&(isScrollable($target)||isScrollable($target.parent())))){e.preventDefault()}
if(self.startPoints.length===1){if(current.type==='image'&&(self.contentStartPos.width>self.canvasWidth+1||self.contentStartPos.height>self.canvasHeight+1)){$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.isPanning=!0}else{self.isSwiping=!0}
self.$container.addClass('fancybox-controls--isGrabbing')}
if(self.startPoints.length===2&&!instance.isAnimating&&!current.hasError&&current.type==='image'&&(current.isLoaded||current.$ghost)){self.canTap=!1;self.isSwiping=!1;self.isPanning=!1;self.isZooming=!0;$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.centerPointStartX=((self.startPoints[0].x+self.startPoints[1].x)*0.5)-$(window).scrollLeft();self.centerPointStartY=((self.startPoints[0].y+self.startPoints[1].y)*0.5)-$(window).scrollTop();self.percentageOfImageAtPinchPointX=(self.centerPointStartX-self.contentStartPos.left)/self.contentStartPos.width;self.percentageOfImageAtPinchPointY=(self.centerPointStartY-self.contentStartPos.top)/self.contentStartPos.height;self.startDistanceBetweenFingers=distance(self.startPoints[0],self.startPoints[1])}};Guestures.prototype.onscroll=function(e){self.isScrolling=!0};Guestures.prototype.ontouchmove=function(e){var self=this,$target=$(e.target);if(self.isScrolling||!($target.is(self.$stage)||self.$stage.find($target).length)){self.canTap=!1;return}
self.newPoints=pointers(e);if(!(self.opts||self.instance.canPan())||!self.newPoints||!self.newPoints.length){return}
if(!(self.isSwiping&&self.isSwiping===!0)){e.preventDefault()}
self.distanceX=distance(self.newPoints[0],self.startPoints[0],'x');self.distanceY=distance(self.newPoints[0],self.startPoints[0],'y');self.distance=distance(self.newPoints[0],self.startPoints[0])
if(self.distance>0){if(self.isSwiping){self.onSwipe(e)}else if(self.isPanning){self.onPan()}else if(self.isZooming){self.onZoom()}}};Guestures.prototype.onSwipe=function(e){var self=this,swiping=self.isSwiping,left=self.sliderStartPos.left||0,angle;if(swiping===!0){if(Math.abs(self.distance)>10){self.canTap=!1;if(self.instance.group.length<2&&self.opts.vertical){self.isSwiping='y'}else if(self.instance.isDragging||self.opts.vertical===!1||(self.opts.vertical==='auto'&&$(window).width()>800)){self.isSwiping='x'}else{angle=Math.abs(Math.atan2(self.distanceY,self.distanceX)*180/Math.PI);self.isSwiping=(angle>45&&angle<135)?'y':'x'}
self.canTap=!1;if(self.isSwiping==='y'&&$.fancybox.isMobile&&(isScrollable(self.$target)||isScrollable(self.$target.parent()))){self.isScrolling=!0;return}
self.instance.isDragging=self.isSwiping;self.startPoints=self.newPoints;$.each(self.instance.slides,function(index,slide){$.fancybox.stop(slide.$slide);slide.$slide.css('transition-duration','');slide.inTransition=!1;if(slide.pos===self.instance.current.pos){self.sliderStartPos.left=$.fancybox.getTranslate(slide.$slide).left}});if(self.instance.SlideShow&&self.instance.SlideShow.isActive){self.instance.SlideShow.stop()}}
return}
if(swiping=='x'){if(self.distanceX>0&&(self.instance.group.length<2||(self.instance.current.index===0&&!self.instance.current.opts.loop))){left=left+Math.pow(self.distanceX,0.8)}else if(self.distanceX<0&&(self.instance.group.length<2||(self.instance.current.index===self.instance.group.length-1&&!self.instance.current.opts.loop))){left=left-Math.pow(-self.distanceX,0.8)}else{left=left+self.distanceX}}
self.sliderLastPos={top:swiping=='x'?0:self.sliderStartPos.top+self.distanceY,left:left};if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){if(self.sliderLastPos){$.each(self.instance.slides,function(index,slide){var pos=slide.pos-self.instance.currPos;$.fancybox.setTranslate(slide.$slide,{top:self.sliderLastPos.top,left:self.sliderLastPos.left+(pos*self.canvasWidth)+(pos*slide.opts.gutter)})});self.$container.addClass('fancybox-is-sliding')}})};Guestures.prototype.onPan=function(){var self=this;if(distance(self.newPoints[0],self.realPoints[0])<($.fancybox.isMobile?10:5)){self.startPoints=self.newPoints;return}
self.canTap=!1;self.contentLastPos=self.limitMovement();if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos)})};Guestures.prototype.limitMovement=function(){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;var distanceX=self.distanceX;var distanceY=self.distanceY;var contentStartPos=self.contentStartPos;var currentOffsetX=contentStartPos.left;var currentOffsetY=contentStartPos.top;var currentWidth=contentStartPos.width;var currentHeight=contentStartPos.height;var minTranslateX,minTranslateY,maxTranslateX,maxTranslateY,newOffsetX,newOffsetY;if(currentWidth>canvasWidth){newOffsetX=currentOffsetX+distanceX}else{newOffsetX=currentOffsetX}
newOffsetY=currentOffsetY+distanceY;minTranslateX=Math.max(0,canvasWidth*0.5-currentWidth*0.5);minTranslateY=Math.max(0,canvasHeight*0.5-currentHeight*0.5);maxTranslateX=Math.min(canvasWidth-currentWidth,canvasWidth*0.5-currentWidth*0.5);maxTranslateY=Math.min(canvasHeight-currentHeight,canvasHeight*0.5-currentHeight*0.5);if(currentWidth>canvasWidth){if(distanceX>0&&newOffsetX>minTranslateX){newOffsetX=minTranslateX-1+Math.pow(-minTranslateX+currentOffsetX+distanceX,0.8)||0}
if(distanceX<0&&newOffsetX<maxTranslateX){newOffsetX=maxTranslateX+1-Math.pow(maxTranslateX-currentOffsetX-distanceX,0.8)||0}}
if(currentHeight>canvasHeight){if(distanceY>0&&newOffsetY>minTranslateY){newOffsetY=minTranslateY-1+Math.pow(-minTranslateY+currentOffsetY+distanceY,0.8)||0}
if(distanceY<0&&newOffsetY<maxTranslateY){newOffsetY=maxTranslateY+1-Math.pow(maxTranslateY-currentOffsetY-distanceY,0.8)||0}}
return{top:newOffsetY,left:newOffsetX,scaleX:contentStartPos.scaleX,scaleY:contentStartPos.scaleY}};Guestures.prototype.limitPosition=function(newOffsetX,newOffsetY,newWidth,newHeight){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;if(newWidth>canvasWidth){newOffsetX=newOffsetX>0?0:newOffsetX;newOffsetX=newOffsetX<canvasWidth-newWidth?canvasWidth-newWidth:newOffsetX}else{newOffsetX=Math.max(0,canvasWidth/2-newWidth/2)}
if(newHeight>canvasHeight){newOffsetY=newOffsetY>0?0:newOffsetY;newOffsetY=newOffsetY<canvasHeight-newHeight?canvasHeight-newHeight:newOffsetY}else{newOffsetY=Math.max(0,canvasHeight/2-newHeight/2)}
return{top:newOffsetY,left:newOffsetX}};Guestures.prototype.onZoom=function(){var self=this;var currentWidth=self.contentStartPos.width;var currentHeight=self.contentStartPos.height;var currentOffsetX=self.contentStartPos.left;var currentOffsetY=self.contentStartPos.top;var endDistanceBetweenFingers=distance(self.newPoints[0],self.newPoints[1]);var pinchRatio=endDistanceBetweenFingers/self.startDistanceBetweenFingers;var newWidth=Math.floor(currentWidth*pinchRatio);var newHeight=Math.floor(currentHeight*pinchRatio);var translateFromZoomingX=(currentWidth-newWidth)*self.percentageOfImageAtPinchPointX;var translateFromZoomingY=(currentHeight-newHeight)*self.percentageOfImageAtPinchPointY;var centerPointEndX=((self.newPoints[0].x+self.newPoints[1].x)/2)-$(window).scrollLeft();var centerPointEndY=((self.newPoints[0].y+self.newPoints[1].y)/2)-$(window).scrollTop();var translateFromTranslatingX=centerPointEndX-self.centerPointStartX;var translateFromTranslatingY=centerPointEndY-self.centerPointStartY;var newOffsetX=currentOffsetX+(translateFromZoomingX+translateFromTranslatingX);var newOffsetY=currentOffsetY+(translateFromZoomingY+translateFromTranslatingY);var newPos={top:newOffsetY,left:newOffsetX,scaleX:self.contentStartPos.scaleX*pinchRatio,scaleY:self.contentStartPos.scaleY*pinchRatio};self.canTap=!1;self.newWidth=newWidth;self.newHeight=newHeight;self.contentLastPos=newPos;if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos)})};Guestures.prototype.ontouchend=function(e){var self=this;var dMs=Math.max((new Date().getTime())-self.startTime,1);var swiping=self.isSwiping;var panning=self.isPanning;var zooming=self.isZooming;var scrolling=self.isScrolling;self.endPoints=pointers(e);self.$container.removeClass('fancybox-controls--isGrabbing');$(document).off('.fb.touch');document.removeEventListener('scroll',self.onscroll,!0);if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.isSwiping=!1;self.isPanning=!1;self.isZooming=!1;self.isScrolling=!1;self.instance.isDragging=!1;if(self.canTap){return self.onTap(e)}
self.speed=366;self.velocityX=self.distanceX/dMs*0.5;self.velocityY=self.distanceY/dMs*0.5;self.speedX=Math.max(self.speed*0.5,Math.min(self.speed*1.5,(1/Math.abs(self.velocityX))*self.speed));if(panning){self.endPanning()}else if(zooming){self.endZooming()}else{self.endSwiping(swiping,scrolling)}
return};Guestures.prototype.endSwiping=function(swiping,scrolling){var self=this,ret=!1,len=self.instance.group.length;self.sliderLastPos=null;if(swiping=='y'&&!scrolling&&Math.abs(self.distanceY)>50){$.fancybox.animate(self.instance.current.$slide,{top:self.sliderStartPos.top+self.distanceY+(self.velocityY*150),opacity:0},150);ret=self.instance.close(!0,300)}else if(swiping=='x'&&self.distanceX>50&&len>1){ret=self.instance.previous(self.speedX)}else if(swiping=='x'&&self.distanceX<-50&&len>1){ret=self.instance.next(self.speedX)}
if(ret===!1&&(swiping=='x'||swiping=='y')){if(scrolling||len<2){self.instance.centerSlide(self.instance.current,150)}else{self.instance.jumpTo(self.instance.current.index)}}
self.$container.removeClass('fancybox-is-sliding')};Guestures.prototype.endPanning=function(){var self=this;var newOffsetX,newOffsetY,newPos;if(!self.contentLastPos){return}
if(self.opts.momentum===!1){newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top}else{newOffsetX=self.contentLastPos.left+(self.velocityX*self.speed);newOffsetY=self.contentLastPos.top+(self.velocityY*self.speed)}
newPos=self.limitPosition(newOffsetX,newOffsetY,self.contentStartPos.width,self.contentStartPos.height);newPos.width=self.contentStartPos.width;newPos.height=self.contentStartPos.height;$.fancybox.animate(self.$content,newPos,330)};Guestures.prototype.endZooming=function(){var self=this;var current=self.instance.current;var newOffsetX,newOffsetY,newPos,reset;var newWidth=self.newWidth;var newHeight=self.newHeight;if(!self.contentLastPos){return}
newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top;reset={top:newOffsetY,left:newOffsetX,width:newWidth,height:newHeight,scaleX:1,scaleY:1};$.fancybox.setTranslate(self.$content,reset);if(newWidth<self.canvasWidth&&newHeight<self.canvasHeight){self.instance.scaleToFit(150)}else if(newWidth>current.width||newHeight>current.height){self.instance.scaleToActual(self.centerPointStartX,self.centerPointStartY,150)}else{newPos=self.limitPosition(newOffsetX,newOffsetY,newWidth,newHeight);$.fancybox.setTranslate(self.content,$.fancybox.getTranslate(self.$content));$.fancybox.animate(self.$content,newPos,150)}};Guestures.prototype.onTap=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var endPoints=(e&&pointers(e))||self.startPoints;var tapX=endPoints[0]?endPoints[0].x-self.$stage.offset().left:0;var tapY=endPoints[0]?endPoints[0].y-self.$stage.offset().top:0;var where;var process=function(prefix){var action=current.opts[prefix];if($.isFunction(action)){action=action.apply(instance,[current,e])}
if(!action){return}
switch(action){case "close":instance.close(self.startEvent);break;case "toggleControls":instance.toggleControls(!0);break;case "next":instance.next();break;case "nextOrClose":if(instance.group.length>1){instance.next()}else{instance.close(self.startEvent)}
break;case "zoom":if(current.type=='image'&&(current.isLoaded||current.$ghost)){if(instance.canPan()){instance.scaleToFit()}else if(instance.isScaledDown()){instance.scaleToActual(tapX,tapY)}else if(instance.group.length<2){instance.close(self.startEvent)}}
break}};if(e.originalEvent&&e.originalEvent.button==2){return}
if(!$target.is('img')&&tapX>$target[0].clientWidth+$target.offset().left){return}
if($target.is('.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')){where='Outside'}else if($target.is('.fancybox-slide')){where='Slide'}else if(instance.current.$content&&instance.current.$content.find($target).addBack().filter($target).length){where='Content'}else{return}
if(self.tapped){clearTimeout(self.tapped);self.tapped=null;if(Math.abs(tapX-self.tapX)>50||Math.abs(tapY-self.tapY)>50){return this}
process('dblclick'+where)}else{self.tapX=tapX;self.tapY=tapY;if(current.opts['dblclick'+where]&&current.opts['dblclick'+where]!==current.opts['click'+where]){self.tapped=setTimeout(function(){self.tapped=null;process('click'+where)},500)}else{process('click'+where)}}
return this};$(document).on('onActivate.fb',function(e,instance){if(instance&&!instance.Guestures){instance.Guestures=new Guestures(instance)}})}(window,document,window.jQuery||jQuery));(function(document,$){'use strict';$.extend(!0,$.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M13,12 L27,20 L13,27 Z" />'+'<path d="M15,10 v19 M23,10 v19" />'+'</svg>'+'</button>'},slideShow:{autoStart:!1,speed:3000}});var SlideShow=function(instance){this.instance=instance;this.init()};$.extend(SlideShow.prototype,{timer:null,isActive:!1,$button:null,init:function(){var self=this;self.$button=self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click',function(){self.toggle()});if(self.instance.group.length<2||!self.instance.group[self.instance.currIndex].opts.slideShow){self.$button.hide()}},set:function(force){var self=this;if(self.instance&&self.instance.current&&(force===!0||self.instance.current.opts.loop||self.instance.currIndex<self.instance.group.length-1)){self.timer=setTimeout(function(){if(self.isActive){self.instance.jumpTo((self.instance.currIndex+1)%self.instance.group.length)}},self.instance.current.opts.slideShow.speed)}else{self.stop();self.instance.idleSecondsCounter=0;self.instance.showControls()}},clear:function(){var self=this;clearTimeout(self.timer);self.timer=null},start:function(){var self=this;var current=self.instance.current;if(current){self.isActive=!0;self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_STOP).removeClass('fancybox-button--play').addClass('fancybox-button--pause');self.set(!0)}},stop:function(){var self=this;var current=self.instance.current;self.clear();self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_START).removeClass('fancybox-button--pause').addClass('fancybox-button--play');self.isActive=!1},toggle:function(){var self=this;if(self.isActive){self.stop()}else{self.start()}}});$(document).on({'onInit.fb':function(e,instance){if(instance&&!instance.SlideShow){instance.SlideShow=new SlideShow(instance)}},'beforeShow.fb':function(e,instance,current,firstRun){var SlideShow=instance&&instance.SlideShow;if(firstRun){if(SlideShow&&current.opts.slideShow.autoStart){SlideShow.start()}}else if(SlideShow&&SlideShow.isActive){SlideShow.clear()}},'afterShow.fb':function(e,instance,current){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){SlideShow.set()}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&current.opts.slideShow&&(keycode===80||keycode===32)&&!$(document.activeElement).is('button,a,input')){keypress.preventDefault();SlideShow.toggle()}},'beforeClose.fb onDeactivate.fb':function(e,instance){var SlideShow=instance&&instance.SlideShow;if(SlideShow){SlideShow.stop()}}});$(document).on("visibilitychange",function(){var instance=$.fancybox.getInstance();var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){if(document.hidden){SlideShow.clear()}else{SlideShow.set()}}})}(document,window.jQuery||jQuery));(function(document,$){'use strict';var fn=(function(){var fnMap=[['requestFullscreen','exitFullscreen','fullscreenElement','fullscreenEnabled','fullscreenchange','fullscreenerror'],['webkitRequestFullscreen','webkitExitFullscreen','webkitFullscreenElement','webkitFullscreenEnabled','webkitfullscreenchange','webkitfullscreenerror'],['webkitRequestFullScreen','webkitCancelFullScreen','webkitCurrentFullScreenElement','webkitCancelFullScreen','webkitfullscreenchange','webkitfullscreenerror'],['mozRequestFullScreen','mozCancelFullScreen','mozFullScreenElement','mozFullScreenEnabled','mozfullscreenchange','mozfullscreenerror'],['msRequestFullscreen','msExitFullscreen','msFullscreenElement','msFullscreenEnabled','MSFullscreenChange','MSFullscreenError']];var val;var ret={};var i,j;for(i=0;i<fnMap.length;i++){val=fnMap[i];if(val&&val[1]in document){for(j=0;j<val.length;j++){ret[fnMap[0][j]]=val[j]}
return ret}}
return!1})();if(!fn){if($&&$.fancybox){$.fancybox.defaults.btnTpl.fullScreen=!1}
return}
var FullScreen={request:function(elem){elem=elem||document.documentElement;elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT)},exit:function(){document[fn.exitFullscreen]()},toggle:function(elem){elem=elem||document.documentElement;if(this.isFullscreen()){this.exit()}else{this.request(elem)}},isFullscreen:function(){return Boolean(document[fn.fullscreenElement])},enabled:function(){return Boolean(document[fn.fullscreenEnabled])}};$.extend(!0,$.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" />'+'</svg>'+'</button>'},fullScreen:{autoStart:!1}});$(document).on({'onInit.fb':function(e,instance){var $container;if(instance&&instance.group[instance.currIndex].opts.fullScreen){$container=instance.$refs.container;$container.on('click.fb-fullscreen','[data-fancybox-fullscreen]',function(e){e.stopPropagation();e.preventDefault();FullScreen.toggle($container[0])});if(instance.opts.fullScreen&&instance.opts.fullScreen.autoStart===!0){FullScreen.request($container[0])}
instance.FullScreen=FullScreen}else if(instance){instance.$refs.toolbar.find('[data-fancybox-fullscreen]').hide()}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){if(instance&&instance.FullScreen&&keycode===70){keypress.preventDefault();instance.FullScreen.toggle(instance.$refs.container[0])}},'beforeClose.fb':function(instance){if(instance&&instance.FullScreen){FullScreen.exit()}}});$(document).on(fn.fullscreenchange,function(){var isFullscreen=FullScreen.isFullscreen(),instance=$.fancybox.getInstance();if(instance){if(instance.current&&instance.current.type==='image'&&instance.isAnimating){instance.current.$content.css('transition','none');instance.isAnimating=!1;instance.update(!0,!0,0)}
instance.trigger('onFullscreenChange',isFullscreen);instance.$refs.container.toggleClass('fancybox-is-fullscreen',isFullscreen)}})}(document,window.jQuery||jQuery));(function(document,$){'use strict';$.fancybox.defaults=$.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">'+'<svg viewBox="0 0 120 120">'+'<path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />'+'</svg>'+'</button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:'.fancybox-container',axis:'y'}},$.fancybox.defaults);var FancyThumbs=function(instance){this.init(instance)};$.extend(FancyThumbs.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(instance){var self=this;self.instance=instance;instance.Thumbs=self;var first=instance.group[0],second=instance.group[1];self.opts=instance.group[instance.currIndex].opts.thumbs;self.$button=instance.$refs.toolbar.find('[data-fancybox-thumbs]');if(self.opts&&first&&second&&((first.type=='image'||first.opts.thumb||first.opts.$thumb)&&(second.type=='image'||second.opts.thumb||second.opts.$thumb))){self.$button.show().on('click',function(){self.toggle()});self.isActive=!0}else{self.$button.hide()}},create:function(){var self=this,instance=self.instance,parentEl=self.opts.parentEl,list,src;self.$grid=$('<div class="fancybox-thumbs fancybox-thumbs-'+self.opts.axis+'"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));list='<ul>';$.each(instance.group,function(i,item){src=item.opts.thumb||(item.opts.$thumb?item.opts.$thumb.attr('src'):null);if(!src&&item.type==='image'){src=item.src}
if(src&&src.length){list+='<li data-index="'+i+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+src+'" /></li>'}});list+='</ul>';self.$list=$(list).appendTo(self.$grid).on('click','li',function(){instance.jumpTo($(this).data('index'))});self.$list.find('img').hide().one('load',function(){var $parent=$(this).parent().removeClass('fancybox-thumbs-loading'),thumbWidth=$parent.outerWidth(),thumbHeight=$parent.outerHeight(),width,height,widthRatio,heightRatio;width=this.naturalWidth||this.width;height=this.naturalHeight||this.height;widthRatio=width/thumbWidth;heightRatio=height/thumbHeight;if(widthRatio>=1&&heightRatio>=1){if(widthRatio>heightRatio){width=width/heightRatio;height=thumbHeight}else{width=thumbWidth;height=height/widthRatio}}
$(this).css({width:Math.floor(width),height:Math.floor(height),'margin-top':height>thumbHeight?(Math.floor(thumbHeight*0.3-height*0.3)):Math.floor(thumbHeight*0.5-height*0.5),'margin-left':Math.floor(thumbWidth*0.5-width*0.5)}).show()}).each(function(){this.src=$(this).data('src')});if(self.opts.axis==='x'){self.$list.width(parseInt(self.$grid.css("padding-right"))+(instance.group.length*self.$list.children().eq(0).outerWidth(!0))+'px')}},focus:function(duration){var self=this,$list=self.$list,thumb,thumbPos;if(self.instance.current){thumb=$list.children().removeClass('fancybox-thumbs-active').filter('[data-index="'+self.instance.current.index+'"]').addClass('fancybox-thumbs-active');thumbPos=thumb.position();if(self.opts.axis==='y'&&(thumbPos.top<0||thumbPos.top>($list.height()-thumb.outerHeight()))){$list.stop().animate({'scrollTop':$list.scrollTop()+thumbPos.top},duration)}else if(self.opts.axis==='x'&&(thumbPos.left<$list.parent().scrollLeft()||thumbPos.left>($list.parent().scrollLeft()+($list.parent().width()-thumb.outerWidth())))){$list.parent().stop().animate({'scrollLeft':thumbPos.left},duration)}}},update:function(){this.instance.$refs.container.toggleClass('fancybox-show-thumbs',this.isVisible);if(this.isVisible){if(!this.$grid){this.create()}
this.instance.trigger('onThumbsShow');this.focus(0)}else if(this.$grid){this.instance.trigger('onThumbsHide')}
this.instance.update()},hide:function(){this.isVisible=!1;this.update()},show:function(){this.isVisible=!0;this.update()},toggle:function(){this.isVisible=!this.isVisible;this.update()}});$(document).on({'onInit.fb':function(e,instance){var Thumbs;if(instance&&!instance.Thumbs){Thumbs=new FancyThumbs(instance);if(Thumbs.isActive&&Thumbs.opts.autoStart===!0){Thumbs.show()}}},'beforeShow.fb':function(e,instance,item,firstRun){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible){Thumbs.focus(firstRun?0:250)}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isActive&&keycode===71){keypress.preventDefault();Thumbs.toggle()}},'beforeClose.fb':function(e,instance){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible&&Thumbs.opts.hideOnClose!==!1){Thumbs.$grid.hide()}}})}(document,window.jQuery));(function(document,$){'use strict';$.extend(!0,$.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z">'+'</svg>'+'</button>'},share:{tpl:'<div class="fancybox-share">'+'<h1>{{SHARE}}</h1>'+'<p class="fancybox-share__links">'+'<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>'+'<span>Facebook</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>'+'<span>Pinterest</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>'+'<span>Twitter</span>'+'</a>'+'</p>'+'<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p>'+'</div>'}});function escapeHtml(string){var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'};return String(string).replace(/[&<>"'`=\/]/g,function(s){return entityMap[s]})}
$(document).on('click','[data-fancybox-share]',function(){var f=$.fancybox.getInstance(),url,tpl;if(f){url=f.current.opts.hash===!1?f.current.src:window.location;tpl=f.current.opts.share.tpl.replace(/\{\{media\}\}/g,f.current.type==='image'?encodeURIComponent(f.current.src):'').replace(/\{\{url\}\}/g,encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g,escapeHtml(url)).replace(/\{\{descr\}\}/g,f.$caption?encodeURIComponent(f.$caption.text()):'');$.fancybox.open({src:f.translate(f,tpl),type:'html',opts:{animationEffect:"fade",animationDuration:250,afterLoad:function(instance,current){current.$content.find('.fancybox-share__links a').click(function(){window.open(this.href,"Share","width=550, height=450");return!1})}}})}})}(document,window.jQuery||jQuery));(function(document,window,$){'use strict';if(!$.escapeSelector){$.escapeSelector=function(sel){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD"}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" "}
return"\\"+ch};return(sel+"").replace(rcssescape,fcssescape)}}
var shouldCreateHistory=!0;var currentHash=null;var timerID=null;function parseUrl(){var hash=window.location.hash.substr(1);var rez=hash.split('-');var index=rez.length>1&&/^\+?\d+$/.test(rez[rez.length-1])?parseInt(rez.pop(-1),10)||1:1;var gallery=rez.join('-');if(index<1){index=1}
return{hash:hash,index:index,gallery:gallery}}
function triggerFromUrl(url){var $el;if(url.gallery!==''){$el=$("[data-fancybox='"+$.escapeSelector(url.gallery)+"']").eq(url.index-1);if(!$el.length){$el=$("#"+$.escapeSelector(url.gallery)+"")}
if($el.length){shouldCreateHistory=!1;$el.trigger('click')}}}
function getGalleryID(instance){var opts;if(!instance){return!1}
opts=instance.current?instance.current.opts:instance.opts;return opts.hash||(opts.$orig?opts.$orig.data('fancybox'):'')}
$(function(){if($.fancybox.defaults.hash===!1){return}
$(document).on({'onInit.fb':function(e,instance){var url,gallery;if(instance.group[instance.currIndex].opts.hash===!1){return}
url=parseUrl();gallery=getGalleryID(instance);if(gallery&&url.gallery&&gallery==url.gallery){instance.currIndex=url.index-1}},'beforeShow.fb':function(e,instance,current){var gallery;if(!current||current.opts.hash===!1){return}
gallery=getGalleryID(instance);if(gallery&&gallery!==''){if(window.location.hash.indexOf(gallery)<0){instance.opts.origHash=window.location.hash}
currentHash=gallery+(instance.group.length>1?'-'+(current.index+1):'');if('replaceState' in window.history){if(timerID){clearTimeout(timerID)}
timerID=setTimeout(function(){window.history[shouldCreateHistory?'pushState':'replaceState']({},document.title,window.location.pathname+window.location.search+'#'+currentHash);timerID=null;shouldCreateHistory=!1},300)}else{window.location.hash=currentHash}}},'beforeClose.fb':function(e,instance,current){var gallery,origHash;if(timerID){clearTimeout(timerID)}
if(current.opts.hash===!1){return}
gallery=getGalleryID(instance);origHash=instance&&instance.opts.origHash?instance.opts.origHash:'';if(gallery&&gallery!==''){if('replaceState' in history){window.history.replaceState({},document.title,window.location.pathname+window.location.search+origHash)}else{window.location.hash=origHash;$(window).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft)}}
currentHash=null}});$(window).on('hashchange.fb',function(){var url=parseUrl();if($.fancybox.getInstance()){if(currentHash&&currentHash!==url.gallery+'-'+url.index&&!(url.index===1&&currentHash==url.gallery)){currentHash=null;$.fancybox.close()}}else if(url.gallery!==''){triggerFromUrl(url)}});setTimeout(function(){triggerFromUrl(parseUrl())},50)})}(document,window,window.jQuery||jQuery));(function(document,$){'use strict';var prevTime=new Date().getTime();$(document).on({'onInit.fb':function(e,instance,current){instance.$refs.stage.on('mousewheel DOMMouseScroll wheel MozMousePixelScroll',function(e){var current=instance.current,currTime=new Date().getTime();if(instance.group.length<1||current.opts.wheel===!1||(current.opts.wheel==='auto'&&current.type!=='image')){return}
e.preventDefault();e.stopPropagation();if(current.$slide.hasClass('fancybox-animated')){return}
e=e.originalEvent||e;if(currTime-prevTime<250){return}
prevTime=currTime;instance[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?'next':'previous']()})}})}(document,window.jQuery||jQuery));/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform')},csstransforms3d:function(){return!!test('perspective')},csstransitions:function(){return!!test('transition')},cssanimations:function(){return!!test('animation')}};function test(property,prefixed){var result=!1,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:!0;return!1}});return result}
function prefixed(property){return test(property,!0)}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition]}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation]}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);/*! WOW - v1.0.1 - 2014-08-15

* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),this.WOW=function(){function f(a){null==a&&(a={}),this.scrollCallback=d(this.scrollCallback,this),this.scrollHandler=d(this.scrollHandler,this),this.start=d(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return f.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},f.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},f.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},f.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},f.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},f.prototype.doSync=function(a){var b,c,d,f,g;if(!this.stopped){if(null==a&&(a=this.element),1!==a.nodeType)return;for(a=a.parentNode||a,f=a.querySelectorAll("."+this.config.boxClass),g=[],c=0,d=f.length;d>c;c++)b=f[c],e.call(this.all,b)<0?(this.applyStyle(b,!0),this.boxes.push(b),this.all.push(b),g.push(this.scrolled=!0)):g.push(void 0);return g}},f.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},f.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},f.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),f.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},f.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},f.prototype.vendors=["moz","webkit"],f.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},f.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},f.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},f.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},f.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},f.prototype.scrollHandler=function(){return this.scrolled=!0},f.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},f.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},f.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,innerHeight)-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},f.prototype.util=function(){return null!=this._util?this._util:this._util=new b},f.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},f}()}).call(this);/**!
 * MixItUp v2.1.10
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
(function($,undf){'use strict';$.MixItUp=function(){var self=this;self._execAction('_constructor',0);$.extend(self,{selectors:{target:'.mix',filter:'.filter',sort:'.sort'},animation:{enable:!0,effects:'fade scale',duration:600,easing:'ease',perspectiveDistance:'3000',perspectiveOrigin:'50% 50%',queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:'or',activeClass:'active'},layout:{display:'inline-block',containerClass:'',containerClassFail:'fail'},load:{filter:'all',sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:'',_activeSort:'default:asc',_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:$(),_$hide:$()});self._execAction('_constructor',1)};$.MixItUp.prototype={constructor:$.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(extension){for(var key in extension){$.MixItUp.prototype[key]=extension[key]}},addAction:function(hook,name,func,priority){$.MixItUp.prototype._addHook('_actions',hook,name,func,priority)},addFilter:function(hook,name,func,priority){$.MixItUp.prototype._addHook('_filters',hook,name,func,priority)},_addHook:function(type,hook,name,func,priority){var collection=$.MixItUp.prototype[type],obj={};priority=(priority===1||priority==='post')?'post':'pre';obj[hook]={};obj[hook][priority]={};obj[hook][priority][name]=func;$.extend(!0,collection,obj)},_init:function(domNode,config){var self=this;self._execAction('_init',0,arguments);config&&$.extend(!0,self,config);self._$body=$('body');self._domNode=domNode;self._$container=$(domNode);self._$container.addClass(self.layout.containerClass);self._id=domNode.id;self._platformDetect();self._brake=self._getPrefixedCSS('transition','none');self._refresh(!0);self._$parent=self._$targets.parent().length?self._$targets.parent():self._$container;if(self.load.sort){self._newSort=self._parseSort(self.load.sort);self._newSortString=self.load.sort;self._activeSort=self.load.sort;self._sort();self._printSort()}
self._activeFilter=self.load.filter==='all'?self.selectors.target:self.load.filter==='none'?'':self.load.filter;self.controls.enable&&self._bindHandlers();if(self.controls.toggleFilterButtons){self._buildToggleArray();for(var i=0;i<self._toggleArray.length;i++){self._updateControls({filter:self._toggleArray[i],sort:self._activeSort},!0)}}else if(self.controls.enable){self._updateControls({filter:self._activeFilter,sort:self._activeSort})}
self._filter();self._init=!0;self._$container.data('mixItUp',self);self._execAction('_init',1,arguments);self._buildState();self._$targets.css(self._brake);self._goMix(self.animation.enable)},_platformDetect:function(){var self=this,vendorsTrans=['Webkit','Moz','O','ms'],vendorsRAF=['webkit','moz'],chrome=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,ff=typeof InstallTrigger!=='undefined',prefix=function(el){for(var i=0;i<vendorsTrans.length;i++){if(vendorsTrans[i]+'Transition' in el.style){return{prefix:'-'+vendorsTrans[i].toLowerCase()+'-',vendor:vendorsTrans[i]}}};return'transition' in el.style?'':!1},transPrefix=prefix(self._domNode);self._execAction('_platformDetect',0);self._chrome=chrome?parseInt(chrome[1],10):!1;self._ff=ff?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1;self._prefix=transPrefix.prefix;self._vendor=transPrefix.vendor;self._suckMode=window.atob&&self._prefix?!1:!0;self._suckMode&&(self.animation.enable=!1);(self._ff&&self._ff<=4)&&(self.animation.enable=!1);for(var x=0;x<vendorsRAF.length&&!window.requestAnimationFrame;x++){window.requestAnimationFrame=window[vendorsRAF[x]+'RequestAnimationFrame']}
if(typeof Object.getPrototypeOf!=='function'){if(typeof 'test'.__proto__==='object'){Object.getPrototypeOf=function(object){return object.__proto__}}else{Object.getPrototypeOf=function(object){return object.constructor.prototype}}}
if(self._domNode.nextElementSibling===undf){Object.defineProperty(Element.prototype,'nextElementSibling',{get:function(){var el=this.nextSibling;while(el){if(el.nodeType===1){return el}
el=el.nextSibling}
return null}})}
self._execAction('_platformDetect',1)},_refresh:function(init,force){var self=this;self._execAction('_refresh',0,arguments);self._$targets=self._$container.find(self.selectors.target);for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];if(target.dataset===undf||force){target.dataset={};for(var j=0;j<target.attributes.length;j++){var attr=target.attributes[j],name=attr.name,val=attr.value;if(name.indexOf('data-')>-1){var dataName=self._helpers._camelCase(name.substring(5,name.length));target.dataset[dataName]=val}}}
if(target.mixParent===undf){target.mixParent=self._id}}
if((self._$targets.length&&init)||(!self._origOrder.length&&self._$targets.length)){self._origOrder=[];for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];self._origOrder.push(target)}}
self._execAction('_refresh',1,arguments)},_bindHandlers:function(){var self=this,filters=$.MixItUp.prototype._bound._filter,sorts=$.MixItUp.prototype._bound._sort;self._execAction('_bindHandlers',0);if(self.controls.live){self._$body.on('click.mixItUp.'+self._id,self.selectors.sort,function(){self._processClick($(this),'sort')}).on('click.mixItUp.'+self._id,self.selectors.filter,function(){self._processClick($(this),'filter')})}else{self._$sortButtons=$(self.selectors.sort);self._$filterButtons=$(self.selectors.filter);self._$sortButtons.on('click.mixItUp.'+self._id,function(){self._processClick($(this),'sort')});self._$filterButtons.on('click.mixItUp.'+self._id,function(){self._processClick($(this),'filter')})}
filters[self.selectors.filter]=(filters[self.selectors.filter]===undf)?1:filters[self.selectors.filter]+1;sorts[self.selectors.sort]=(sorts[self.selectors.sort]===undf)?1:sorts[self.selectors.sort]+1;self._execAction('_bindHandlers',1)},_processClick:function($button,type){var self=this,trackClick=function($button,type,off){var proto=$.MixItUp.prototype;proto._handled['_'+type][self.selectors[type]]=(proto._handled['_'+type][self.selectors[type]]===undf)?1:proto._handled['_'+type][self.selectors[type]]+1;if(proto._handled['_'+type][self.selectors[type]]===proto._bound['_'+type][self.selectors[type]]){$button[(off?'remove':'add')+'Class'](self.controls.activeClass);delete proto._handled['_'+type][self.selectors[type]]}};self._execAction('_processClick',0,arguments);if(!self._mixing||(self.animation.queue&&self._queue.length<self.animation.queueLimit)){self._clicking=!0;if(type==='sort'){var sort=$button.attr('data-sort');if(!$button.hasClass(self.controls.activeClass)||sort.indexOf('random')>-1){$(self.selectors.sort).removeClass(self.controls.activeClass);trackClick($button,type);self.sort(sort)}}
if(type==='filter'){var filter=$button.attr('data-filter'),ndx,seperator=self.controls.toggleLogic==='or'?',':'';if(!self.controls.toggleFilterButtons){if(!$button.hasClass(self.controls.activeClass)){$(self.selectors.filter).removeClass(self.controls.activeClass);trackClick($button,type);self.filter(filter)}}else{self._buildToggleArray();if(!$button.hasClass(self.controls.activeClass)){trackClick($button,type);self._toggleArray.push(filter)}else{trackClick($button,type,!0);ndx=self._toggleArray.indexOf(filter);self._toggleArray.splice(ndx,1)}
self._toggleArray=$.grep(self._toggleArray,function(n){return(n)});self._toggleString=self._toggleArray.join(seperator);self.filter(self._toggleString)}}
self._execAction('_processClick',1,arguments)}else{if(typeof self.callbacks.onMixBusy==='function'){self.callbacks.onMixBusy.call(self._domNode,self._state,self)}
self._execAction('_processClickBusy',1,arguments)}},_buildToggleArray:function(){var self=this,activeFilter=self._activeFilter.replace(/\s/g,'');self._execAction('_buildToggleArray',0,arguments);if(self.controls.toggleLogic==='or'){self._toggleArray=activeFilter.split(',')}else{self._toggleArray=activeFilter.split('.');!self._toggleArray[0]&&self._toggleArray.shift();for(var i=0,filter;filter=self._toggleArray[i];i++){self._toggleArray[i]='.'+filter}}
self._execAction('_buildToggleArray',1,arguments)},_updateControls:function(command,multi){var self=this,output={filter:command.filter,sort:command.sort},update=function($el,filter){try{(multi&&type==='filter'&&!(output.filter==='none'||output.filter===''))?$el.filter(filter).addClass(self.controls.activeClass):$el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass)}catch(e){}},type='filter',$el=null;self._execAction('_updateControls',0,arguments);(command.filter===undf)&&(output.filter=self._activeFilter);(command.sort===undf)&&(output.sort=self._activeSort);(output.filter===self.selectors.target)&&(output.filter='all');for(var i=0;i<2;i++){$el=self.controls.live?$(self.selectors[type]):self['_$'+type+'Buttons'];$el&&update($el,'[data-'+type+'="'+output[type]+'"]');type='sort'}
self._execAction('_updateControls',1,arguments)},_filter:function(){var self=this;self._execAction('_filter',0);for(var i=0;i<self._$targets.length;i++){var $target=$(self._$targets[i]);if($target.is(self._activeFilter)){self._$show=self._$show.add($target)}else{self._$hide=self._$hide.add($target)}}
self._execAction('_filter',1)},_sort:function(){var self=this,arrayShuffle=function(oldArray){var newArray=oldArray.slice(),len=newArray.length,i=len;while(i--){var p=parseInt(Math.random()*len);var t=newArray[i];newArray[i]=newArray[p];newArray[p]=t};return newArray};self._execAction('_sort',0);self._startOrder=[];for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];self._startOrder.push(target)}
switch(self._newSort[0].sortBy){case 'default':self._newOrder=self._origOrder;break;case 'random':self._newOrder=arrayShuffle(self._startOrder);break;case 'custom':self._newOrder=self._newSort[0].order;break;default:self._newOrder=self._startOrder.concat().sort(function(a,b){return self._compare(a,b)})}
self._execAction('_sort',1)},_compare:function(a,b,depth){depth=depth?depth:0;var self=this,order=self._newSort[depth].order,getData=function(el){return el.dataset[self._newSort[depth].sortBy]||0},attrA=isNaN(getData(a)*1)?getData(a).toLowerCase():getData(a)*1,attrB=isNaN(getData(b)*1)?getData(b).toLowerCase():getData(b)*1;if(attrA<attrB)
return order==='asc'?-1:1;if(attrA>attrB)
return order==='asc'?1:-1;if(attrA===attrB&&self._newSort.length>depth+1)
return self._compare(a,b,depth+1);return 0},_printSort:function(reset){var self=this,order=reset?self._startOrder:self._newOrder,targets=self._$parent[0].querySelectorAll(self.selectors.target),nextSibling=targets.length?targets[targets.length-1].nextElementSibling:null,frag=document.createDocumentFragment();self._execAction('_printSort',0,arguments);for(var i=0;i<targets.length;i++){var target=targets[i],whiteSpace=target.nextSibling;if(target.style.position==='absolute')continue;if(whiteSpace&&whiteSpace.nodeName==='#text'){self._$parent[0].removeChild(whiteSpace)}
self._$parent[0].removeChild(target)}
for(var i=0;i<order.length;i++){var el=order[i];if(self._newSort[0].sortBy==='default'&&self._newSort[0].order==='desc'&&!reset){var firstChild=frag.firstChild;frag.insertBefore(el,firstChild);frag.insertBefore(document.createTextNode(' '),el)}else{frag.appendChild(el);frag.appendChild(document.createTextNode(' '))}}
nextSibling?self._$parent[0].insertBefore(frag,nextSibling):self._$parent[0].appendChild(frag);self._execAction('_printSort',1,arguments)},_parseSort:function(sortString){var self=this,rules=typeof sortString==='string'?sortString.split(' '):[sortString],newSort=[];for(var i=0;i<rules.length;i++){var rule=typeof sortString==='string'?rules[i].split(':'):['custom',rules[i]],ruleObj={sortBy:self._helpers._camelCase(rule[0]),order:rule[1]||'asc'};newSort.push(ruleObj);if(ruleObj.sortBy==='default'||ruleObj.sortBy==='random')break}
return self._execFilter('_parseSort',newSort,arguments)},_parseEffects:function(){var self=this,effects={opacity:'',transformIn:'',transformOut:'',filter:''},parse=function(effect,extract,reverse){if(self.animation.effects.indexOf(effect)>-1){if(extract){var propIndex=self.animation.effects.indexOf(effect+'(');if(propIndex>-1){var str=self.animation.effects.substring(propIndex),match=/\(([^)]+)\)/.exec(str),val=match[1];return{val:val}}}
return!0}else{return!1}},negate=function(value,invert){if(invert){return value.charAt(0)==='-'?value.substr(1,value.length):'-'+value}else{return value}},buildTransform=function(key,invert){var transforms=[['scale','.01'],['translateX','20px'],['translateY','20px'],['translateZ','20px'],['rotateX','90deg'],['rotateY','90deg'],['rotateZ','180deg'],];for(var i=0;i<transforms.length;i++){var prop=transforms[i][0],def=transforms[i][1],inverted=invert&&prop!=='scale';effects[key]+=parse(prop)?prop+'('+negate(parse(prop,!0).val||def,inverted)+') ':''}};effects.opacity=parse('fade')?parse('fade',!0).val||'0':'1';buildTransform('transformIn');self.animation.reverseOut?buildTransform('transformOut',!0):(effects.transformOut=effects.transformIn);effects.transition={};effects.transition=self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+', opacity '+self.animation.duration+'ms linear');self.animation.stagger=parse('stagger')?!0:!1;self.animation.staggerDuration=parseInt(parse('stagger')?(parse('stagger',!0).val?parse('stagger',!0).val:100):100);return self._execFilter('_parseEffects',effects)},_buildState:function(future){var self=this,state={};self._execAction('_buildState',0);state={activeFilter:self._activeFilter===''?'none':self._activeFilter,activeSort:future&&self._newSortString?self._newSortString:self._activeSort,fail:!self._$show.length&&self._activeFilter!=='',$targets:self._$targets,$show:self._$show,$hide:self._$hide,totalTargets:self._$targets.length,totalShow:self._$show.length,totalHide:self._$hide.length,display:future&&self._newDisplay?self._newDisplay:self.layout.display};if(future){return self._execFilter('_buildState',state)}else{self._state=state;self._execAction('_buildState',1)}},_goMix:function(animate){var self=this,phase1=function(){if(self._chrome&&(self._chrome===31)){chromeFix(self._$parent[0])}
self._setInter();phase2()},phase2=function(){var scrollTop=window.pageYOffset,scrollLeft=window.pageXOffset,docHeight=document.documentElement.scrollHeight;self._getInterMixData();self._setFinal();self._getFinalMixData();(window.pageYOffset!==scrollTop)&&window.scrollTo(scrollLeft,scrollTop);self._prepTargets();if(window.requestAnimationFrame){requestAnimationFrame(phase3)}else{setTimeout(function(){phase3()},20)}},phase3=function(){self._animateTargets();if(self._targetsBound===0){self._cleanUp()}},chromeFix=function(grid){var parent=grid.parentElement,placeholder=document.createElement('div'),frag=document.createDocumentFragment();parent.insertBefore(placeholder,grid);frag.appendChild(grid);parent.replaceChild(grid,placeholder)},futureState=self._buildState(!0);self._execAction('_goMix',0,arguments);!self.animation.duration&&(animate=!1);self._mixing=!0;self._$container.removeClass(self.layout.containerClassFail);if(typeof self.callbacks.onMixStart==='function'){self.callbacks.onMixStart.call(self._domNode,self._state,futureState,self)}
self._$container.trigger('mixStart',[self._state,futureState,self]);self._getOrigMixData();if(animate&&!self._suckMode){window.requestAnimationFrame?requestAnimationFrame(phase1):phase1()}else{self._cleanUp()}
self._execAction('_goMix',1,arguments)},_getTargetData:function(el,stage){var self=this,elStyle;el.dataset[stage+'PosX']=el.offsetLeft;el.dataset[stage+'PosY']=el.offsetTop;if(self.animation.animateResizeTargets){elStyle=!self._suckMode?window.getComputedStyle(el):{marginBottom:'',marginRight:''};el.dataset[stage+'MarginBottom']=parseInt(elStyle.marginBottom);el.dataset[stage+'MarginRight']=parseInt(elStyle.marginRight);el.dataset[stage+'Width']=el.offsetWidth;el.dataset[stage+'Height']=el.offsetHeight}},_getOrigMixData:function(){var self=this,parentStyle=!self._suckMode?window.getComputedStyle(self._$parent[0]):{boxSizing:''},parentBS=parentStyle.boxSizing||parentStyle[self._vendor+'BoxSizing'];self._incPadding=(parentBS==='border-box');self._execAction('_getOrigMixData',0);!self._suckMode&&(self.effects=self._parseEffects());self._$toHide=self._$hide.filter(':visible');self._$toShow=self._$show.filter(':hidden');self._$pre=self._$targets.filter(':visible');self._startHeight=self._incPadding?self._$parent.outerHeight():self._$parent.height();for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i];self._getTargetData(el,'orig')}
self._execAction('_getOrigMixData',1)},_setInter:function(){var self=this;self._execAction('_setInter',0);if(self._changingLayout&&self.animation.animateChangeLayout){self._$toShow.css('display',self._newDisplay);if(self._changingClass){self._$container.removeClass(self.layout.containerClass).addClass(self._newClass)}}else{self._$toShow.css('display',self.layout.display)}
self._execAction('_setInter',1)},_getInterMixData:function(){var self=this;self._execAction('_getInterMixData',0);for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i];self._getTargetData(el,'inter')}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i];self._getTargetData(el,'inter')}
self._execAction('_getInterMixData',1)},_setFinal:function(){var self=this;self._execAction('_setFinal',0);self._sorting&&self._printSort();self._$toHide.removeStyle('display');if(self._changingLayout&&self.animation.animateChangeLayout){self._$pre.css('display',self._newDisplay)}
self._execAction('_setFinal',1)},_getFinalMixData:function(){var self=this;self._execAction('_getFinalMixData',0);for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i];self._getTargetData(el,'final')}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i];self._getTargetData(el,'final')}
self._newHeight=self._incPadding?self._$parent.outerHeight():self._$parent.height();self._sorting&&self._printSort(!0);self._$toShow.removeStyle('display');self._$pre.css('display',self.layout.display);if(self._changingClass&&self.animation.animateChangeLayout){self._$container.removeClass(self._newClass).addClass(self.layout.containerClass)}
self._execAction('_getFinalMixData',1)},_prepTargets:function(){var self=this,transformCSS={_in:self._getPrefixedCSS('transform',self.effects.transformIn),_out:self._getPrefixedCSS('transform',self.effects.transformOut)};self._execAction('_prepTargets',0);if(self.animation.animateResizeContainer){self._$parent.css('height',self._startHeight+'px')}
for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i],$el=$(el);el.style.opacity=self.effects.opacity;el.style.display=(self._changingLayout&&self.animation.animateChangeLayout)?self._newDisplay:self.layout.display;$el.css(transformCSS._in);if(self.animation.animateResizeTargets){el.style.width=el.dataset.finalWidth+'px';el.style.height=el.dataset.finalHeight+'px';el.style.marginRight=-(el.dataset.finalWidth-el.dataset.interWidth)+(el.dataset.finalMarginRight*1)+'px';el.style.marginBottom=-(el.dataset.finalHeight-el.dataset.interHeight)+(el.dataset.finalMarginBottom*1)+'px'}}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i],$el=$(el),translate={x:el.dataset.origPosX-el.dataset.interPosX,y:el.dataset.origPosY-el.dataset.interPosY},transformCSS=self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)');$el.css(transformCSS);if(self.animation.animateResizeTargets){el.style.width=el.dataset.origWidth+'px';el.style.height=el.dataset.origHeight+'px';if(el.dataset.origWidth-el.dataset.finalWidth){el.style.marginRight=-(el.dataset.origWidth-el.dataset.interWidth)+(el.dataset.origMarginRight*1)+'px'}
if(el.dataset.origHeight-el.dataset.finalHeight){el.style.marginBottom=-(el.dataset.origHeight-el.dataset.interHeight)+(el.dataset.origMarginBottom*1)+'px'}}}
self._execAction('_prepTargets',1)},_animateTargets:function(){var self=this;self._execAction('_animateTargets',0);self._targetsDone=0;self._targetsBound=0;self._$parent.css(self._getPrefixedCSS('perspective',self.animation.perspectiveDistance+'px')).css(self._getPrefixedCSS('perspective-origin',self.animation.perspectiveOrigin));if(self.animation.animateResizeContainer){self._$parent.css(self._getPrefixedCSS('transition','height '+self.animation.duration+'ms ease')).css('height',self._newHeight+'px')}
for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i],$el=$(el),translate={x:el.dataset.finalPosX-el.dataset.interPosX,y:el.dataset.finalPosY-el.dataset.interPosY},delay=self._getDelay(i),toShowCSS={};el.style.opacity='';for(var j=0;j<2;j++){var a=j===0?a=self._prefix:'';if(self._ff&&self._ff<=20){toShowCSS[a+'transition-property']='all';toShowCSS[a+'transition-timing-function']=self.animation.easing+'ms';toShowCSS[a+'transition-duration']=self.animation.duration+'ms'}
toShowCSS[a+'transition-delay']=delay+'ms';toShowCSS[a+'transform']='translate('+translate.x+'px,'+translate.y+'px)'}
if(self.effects.transform||self.effects.opacity){self._bindTargetDone($el)}(self._ff&&self._ff<=20)?$el.css(toShowCSS):$el.css(self.effects.transition).css(toShowCSS)}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i],$el=$(el),translate={x:el.dataset.finalPosX-el.dataset.interPosX,y:el.dataset.finalPosY-el.dataset.interPosY},delay=self._getDelay(i);if(!(el.dataset.finalPosX===el.dataset.origPosX&&el.dataset.finalPosY===el.dataset.origPosY)){self._bindTargetDone($el)}
$el.css(self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+' '+delay+'ms'));$el.css(self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)'));if(self.animation.animateResizeTargets){if(el.dataset.origWidth-el.dataset.finalWidth&&el.dataset.finalWidth*1){el.style.width=el.dataset.finalWidth+'px';el.style.marginRight=-(el.dataset.finalWidth-el.dataset.interWidth)+(el.dataset.finalMarginRight*1)+'px'}
if(el.dataset.origHeight-el.dataset.finalHeight&&el.dataset.finalHeight*1){el.style.height=el.dataset.finalHeight+'px';el.style.marginBottom=-(el.dataset.finalHeight-el.dataset.interHeight)+(el.dataset.finalMarginBottom*1)+'px'}}}
if(self._changingClass){self._$container.removeClass(self.layout.containerClass).addClass(self._newClass)}
for(var i=0;i<self._$toHide.length;i++){var el=self._$toHide[i],$el=$(el),delay=self._getDelay(i),toHideCSS={};for(var j=0;j<2;j++){var a=j===0?a=self._prefix:'';toHideCSS[a+'transition-delay']=delay+'ms';toHideCSS[a+'transform']=self.effects.transformOut;toHideCSS.opacity=self.effects.opacity}
$el.css(self.effects.transition).css(toHideCSS);if(self.effects.transform||self.effects.opacity){self._bindTargetDone($el)}}
self._execAction('_animateTargets',1)},_bindTargetDone:function($el){var self=this,el=$el[0];self._execAction('_bindTargetDone',0,arguments);if(!el.dataset.bound){el.dataset.bound=!0;self._targetsBound++;$el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp',function(e){if((e.originalEvent.propertyName.indexOf('transform')>-1||e.originalEvent.propertyName.indexOf('opacity')>-1)&&$(e.originalEvent.target).is(self.selectors.target)){$el.off('.mixItUp');delete el.dataset.bound;self._targetDone()}})}
self._execAction('_bindTargetDone',1,arguments)},_targetDone:function(){var self=this;self._execAction('_targetDone',0);self._targetsDone++;(self._targetsDone===self._targetsBound)&&self._cleanUp();self._execAction('_targetDone',1)},_cleanUp:function(){var self=this,targetStyles=self.animation.animateResizeTargets?'transform opacity width height margin-bottom margin-right':'transform opacity',unBrake=function(){self._$targets.removeStyle('transition',self._prefix)};self._execAction('_cleanUp',0);!self._changingLayout?self._$show.css('display',self.layout.display):self._$show.css('display',self._newDisplay);self._$targets.css(self._brake);self._$targets.removeStyle(targetStyles,self._prefix).removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');self._$hide.removeStyle('display');self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin',self._prefix);if(self._sorting){self._printSort();self._activeSort=self._newSortString;self._sorting=!1}
if(self._changingLayout){if(self._changingDisplay){self.layout.display=self._newDisplay;self._changingDisplay=!1}
if(self._changingClass){self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);self.layout.containerClass=self._newClass;self._changingClass=!1}
self._changingLayout=!1}
self._refresh();self._buildState();if(self._state.fail){self._$container.addClass(self.layout.containerClassFail)}
self._$show=$();self._$hide=$();if(window.requestAnimationFrame){requestAnimationFrame(unBrake)}
self._mixing=!1;if(typeof self.callbacks._user==='function'){self.callbacks._user.call(self._domNode,self._state,self)}
if(typeof self.callbacks.onMixEnd==='function'){self.callbacks.onMixEnd.call(self._domNode,self._state,self)}
self._$container.trigger('mixEnd',[self._state,self]);if(self._state.fail){(typeof self.callbacks.onMixFail==='function')&&self.callbacks.onMixFail.call(self._domNode,self._state,self);self._$container.trigger('mixFail',[self._state,self])}
if(self._loading){(typeof self.callbacks.onMixLoad==='function')&&self.callbacks.onMixLoad.call(self._domNode,self._state,self);self._$container.trigger('mixLoad',[self._state,self])}
if(self._queue.length){self._execAction('_queue',0);self.multiMix(self._queue[0][0],self._queue[0][1],self._queue[0][2]);self._queue.splice(0,1)}
self._execAction('_cleanUp',1);self._loading=!1},_getPrefixedCSS:function(property,value,prefixValue){var self=this,styles={},prefix='',i=-1;for(i=0;i<2;i++){prefix=i===0?self._prefix:'';prefixValue?styles[prefix+property]=prefix+value:styles[prefix+property]=value}
return self._execFilter('_getPrefixedCSS',styles,arguments)},_getDelay:function(i){var self=this,n=typeof self.animation.staggerSequence==='function'?self.animation.staggerSequence.call(self._domNode,i,self._state):i,delay=self.animation.stagger?n*self.animation.staggerDuration:0;return self._execFilter('_getDelay',delay,arguments)},_parseMultiMixArgs:function(args){var self=this,output={command:null,animate:self.animation.enable,callback:null};for(var i=0;i<args.length;i++){var arg=args[i];if(arg!==null){if(typeof arg==='object'||typeof arg==='string'){output.command=arg}else if(typeof arg==='boolean'){output.animate=arg}else if(typeof arg==='function'){output.callback=arg}}}
return self._execFilter('_parseMultiMixArgs',output,arguments)},_parseInsertArgs:function(args){var self=this,output={index:0,$object:$(),multiMix:{filter:self._state.activeFilter},callback:null};for(var i=0;i<args.length;i++){var arg=args[i];if(typeof arg==='number'){output.index=arg}else if(typeof arg==='object'&&arg instanceof $){output.$object=arg}else if(typeof arg==='object'&&self._helpers._isElement(arg)){output.$object=$(arg)}else if(typeof arg==='object'&&arg!==null){output.multiMix=arg}else if(typeof arg==='boolean'&&!arg){output.multiMix=!1}else if(typeof arg==='function'){output.callback=arg}}
return self._execFilter('_parseInsertArgs',output,arguments)},_execAction:function(methodName,isPost,args){var self=this,context=isPost?'post':'pre';if(!self._actions.isEmptyObject&&self._actions.hasOwnProperty(methodName)){for(var key in self._actions[methodName][context]){self._actions[methodName][context][key].call(self,args)}}},_execFilter:function(methodName,value,args){var self=this;if(!self._filters.isEmptyObject&&self._filters.hasOwnProperty(methodName)){for(var key in self._filters[methodName]){return self._filters[methodName][key].call(self,args)}}else{return value}},_helpers:{_camelCase:function(string){return string.replace(/-([a-z])/g,function(g){return g[1].toUpperCase()})},_isElement:function(el){if(window.HTMLElement){return el instanceof HTMLElement}else{return(el!==null&&el.nodeType===1&&el.nodeName==='string')}}},isMixing:function(){var self=this;return self._execFilter('isMixing',self._mixing)},filter:function(){var self=this,args=self._parseMultiMixArgs(arguments);self._clicking&&(self._toggleString='');self.multiMix({filter:args.command},args.animate,args.callback)},sort:function(){var self=this,args=self._parseMultiMixArgs(arguments);self.multiMix({sort:args.command},args.animate,args.callback)},changeLayout:function(){var self=this,args=self._parseMultiMixArgs(arguments);self.multiMix({changeLayout:args.command},args.animate,args.callback)},multiMix:function(){var self=this,args=self._parseMultiMixArgs(arguments);self._execAction('multiMix',0,arguments);if(!self._mixing){if(self.controls.enable&&!self._clicking){self.controls.toggleFilterButtons&&self._buildToggleArray();self._updateControls(args.command,self.controls.toggleFilterButtons)}(self._queue.length<2)&&(self._clicking=!1);delete self.callbacks._user;if(args.callback)self.callbacks._user=args.callback;var sort=args.command.sort,filter=args.command.filter,changeLayout=args.command.changeLayout;self._refresh();if(sort){self._newSort=self._parseSort(sort);self._newSortString=sort;self._sorting=!0;self._sort()}
if(filter!==undf){filter=(filter==='all')?self.selectors.target:filter;self._activeFilter=filter}
self._filter();if(changeLayout){self._newDisplay=(typeof changeLayout==='string')?changeLayout:changeLayout.display||self.layout.display;self._newClass=changeLayout.containerClass||'';if(self._newDisplay!==self.layout.display||self._newClass!==self.layout.containerClass){self._changingLayout=!0;self._changingClass=(self._newClass!==self.layout.containerClass);self._changingDisplay=(self._newDisplay!==self.layout.display)}}
self._$targets.css(self._brake);self._goMix(args.animate^self.animation.enable?args.animate:self.animation.enable);self._execAction('multiMix',1,arguments)}else{if(self.animation.queue&&self._queue.length<self.animation.queueLimit){self._queue.push(arguments);(self.controls.enable&&!self._clicking)&&self._updateControls(args.command);self._execAction('multiMixQueue',1,arguments)}else{if(typeof self.callbacks.onMixBusy==='function'){self.callbacks.onMixBusy.call(self._domNode,self._state,self)}
self._$container.trigger('mixBusy',[self._state,self]);self._execAction('multiMixBusy',1,arguments)}}},insert:function(){var self=this,args=self._parseInsertArgs(arguments),callback=(typeof args.callback==='function')?args.callback:null,frag=document.createDocumentFragment(),target=(function(){self._refresh();if(self._$targets.length){return(args.index<self._$targets.length||!self._$targets.length)?self._$targets[args.index]:self._$targets[self._$targets.length-1].nextElementSibling}else{return self._$parent[0].children[0]}})();self._execAction('insert',0,arguments);if(args.$object){for(var i=0;i<args.$object.length;i++){var el=args.$object[i];frag.appendChild(el);frag.appendChild(document.createTextNode(' '))}
self._$parent[0].insertBefore(frag,target)}
self._execAction('insert',1,arguments);if(typeof args.multiMix==='object'){self.multiMix(args.multiMix,callback)}},prepend:function(){var self=this,args=self._parseInsertArgs(arguments);self.insert(0,args.$object,args.multiMix,args.callback)},append:function(){var self=this,args=self._parseInsertArgs(arguments);self.insert(self._state.totalTargets,args.$object,args.multiMix,args.callback)},getOption:function(string){var self=this,getProperty=function(obj,prop){var parts=prop.split('.'),last=parts.pop(),l=parts.length,i=1,current=parts[0]||prop;while((obj=obj[current])&&i<l){current=parts[i];i++}
if(obj!==undf){return obj[last]!==undf?obj[last]:obj}};return string?self._execFilter('getOption',getProperty(self,string),arguments):self},setOptions:function(config){var self=this;self._execAction('setOptions',0,arguments);typeof config==='object'&&$.extend(!0,self,config);self._execAction('setOptions',1,arguments)},getState:function(){var self=this;return self._execFilter('getState',self._state,self)},forceRefresh:function(){var self=this;self._refresh(!1,!0)},destroy:function(hideAll){var self=this,filters=$.MixItUp.prototype._bound._filter,sorts=$.MixItUp.prototype._bound._sort;self._execAction('destroy',0,arguments);self._$body.add($(self.selectors.sort)).add($(self.selectors.filter)).off('.mixItUp');for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];hideAll&&(target.style.display='');delete target.mixParent}
self._execAction('destroy',1,arguments);if(filters[self.selectors.filter]&&filters[self.selectors.filter]>1){filters[self.selectors.filter]--}else if(filters[self.selectors.filter]===1){delete filters[self.selectors.filter]}
if(sorts[self.selectors.sort]&&sorts[self.selectors.sort]>1){sorts[self.selectors.sort]--}else if(sorts[self.selectors.sort]===1){delete sorts[self.selectors.sort]}
delete $.MixItUp.prototype._instances[self._id]}};$.fn.mixItUp=function(){var args=arguments,dataReturn=[],eachReturn,_instantiate=function(domNode,settings){var instance=new $.MixItUp(),rand=function(){return('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6).toUpperCase()};instance._execAction('_instantiate',0,arguments);domNode.id=!domNode.id?'MixItUp'+rand():domNode.id;if(!instance._instances[domNode.id]){instance._instances[domNode.id]=instance;instance._init(domNode,settings)}
instance._execAction('_instantiate',1,arguments)};eachReturn=this.each(function(){if(args&&typeof args[0]==='string'){var instance=$.MixItUp.prototype._instances[this.id];if(args[0]==='isLoaded'){dataReturn.push(instance?!0:!1)}else{var data=instance[args[0]](args[1],args[2],args[3]);if(data!==undf)dataReturn.push(data)}}else{_instantiate(this,args[0])}});if(dataReturn.length){return dataReturn.length>1?dataReturn:dataReturn[0]}else{return eachReturn}};$.fn.removeStyle=function(style,prefix){prefix=prefix?prefix:'';return this.each(function(){var el=this,styles=style.split(' ');for(var i=0;i<styles.length;i++){for(var j=0;j<4;j++){switch(j){case 0:var prop=styles[i];break;case 1:var prop=$.MixItUp.prototype._helpers._camelCase(prop);break;case 2:var prop=prefix+styles[i];break;case 3:var prop=$.MixItUp.prototype._helpers._camelCase(prefix+styles[i])}
if(el.style[prop]!==undf&&typeof el.style[prop]!=='unknown'&&el.style[prop].length>0){el.style[prop]=''}
if(!prefix&&j===1)break}}
if(el.attributes&&el.attributes.style&&el.attributes.style!==undf&&el.attributes.style.value===''){el.attributes.removeNamedItem('style')}})}})(jQuery);(function($){$.fn.appear=function(fn,options){var settings=$.extend({data:undefined,one:!0,accX:0,accY:0},options);return this.each(function(){var t=$(this);t.appeared=!1;if(!fn){t.trigger('appear',settings.data);return}
var w=$(window);var check=function(){if(!t.is(':visible')){t.appeared=!1;return}
var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;var ax=settings.accX;var ay=settings.accY;var th=t.height();var wh=w.height();var tw=t.width();var ww=w.width();if(y+th+ay>=b&&y<=b+wh+ay&&x+tw+ax>=a&&x<=a+ww+ax){if(!t.appeared)t.trigger('appear',settings.data)}else{t.appeared=!1}};var modifiedFn=function(){t.appeared=!0;if(settings.one){w.unbind('scroll',check);var i=$.inArray(check,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1)}
fn.apply(this,arguments)};if(settings.one)t.one('appear',settings.data,modifiedFn);else t.bind('appear',settings.data,modifiedFn);w.scroll(check);$.fn.appear.checks.push(check);(check)()})};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var length=$.fn.appear.checks.length;if(length>0)while(length--)($.fn.appear.checks[length])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20)}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var old=$.fn[n];if(old){$.fn[n]=function(){var r=old.apply(this,arguments);$.fn.appear.run();return r}}})})(jQuery);(function($){var defaults={mode:'horizontal',slideSelector:'',infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:'visible',responsive:!0,slideZIndex:50,wrapperClass:'bx-wrapper',touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:'full',pagerShortSeparator:' / ',pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:'Next',prevText:'Prev',nextSelector:null,prevSelector:null,autoControls:!1,startText:'Start',stopText:'Stop',autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4000,autoStart:!0,autoDirection:'next',stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};$.fn.bxSlider=function(options){if(this.length===0){return this}
if(this.length>1){this.each(function(){$(this).bxSlider(options)});return this}
var slider={},el=this,windowWidth=$(window).width(),windowHeight=$(window).height();if($(el).data('bxSlider')){return}
var init=function(){if($(el).data('bxSlider')){return}
slider.settings=$.extend({},defaults,options);slider.settings.slideWidth=parseInt(slider.settings.slideWidth);slider.children=el.children(slider.settings.slideSelector);if(slider.children.length<slider.settings.minSlides){slider.settings.minSlides=slider.children.length}
if(slider.children.length<slider.settings.maxSlides){slider.settings.maxSlides=slider.children.length}
if(slider.settings.randomStart){slider.settings.startSlide=Math.floor(Math.random()*slider.children.length)}
slider.active={index:slider.settings.startSlide};slider.carousel=slider.settings.minSlides>1||slider.settings.maxSlides>1?!0:!1;if(slider.carousel){slider.settings.preloadImages='all'}
slider.minThreshold=(slider.settings.minSlides*slider.settings.slideWidth)+((slider.settings.minSlides-1)*slider.settings.slideMargin);slider.maxThreshold=(slider.settings.maxSlides*slider.settings.slideWidth)+((slider.settings.maxSlides-1)*slider.settings.slideMargin);slider.working=!1;slider.controls={};slider.interval=null;slider.animProp=slider.settings.mode==='vertical'?'top':'left';slider.usingCSS=slider.settings.useCSS&&slider.settings.mode!=='fade'&&(function(){var div=document.createElement('div'),props=['WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i=0;i<props.length;i++){if(div.style[props[i]]!==undefined){slider.cssPrefix=props[i].replace('Perspective','').toLowerCase();slider.animProp='-'+slider.cssPrefix+'-transform';return!0}}
return!1}());if(slider.settings.mode==='vertical'){slider.settings.maxSlides=slider.settings.minSlides}
el.data('origStyle',el.attr('style'));el.children(slider.settings.slideSelector).each(function(){$(this).data('origStyle',$(this).attr('style'))});setup()};var setup=function(){var preloadSelector=slider.children.eq(slider.settings.startSlide);el.wrap('<div class="'+slider.settings.wrapperClass+'"><div class="bx-viewport"></div></div>');slider.viewport=el.parent();if(slider.settings.ariaLive&&!slider.settings.ticker){slider.viewport.attr('aria-live','polite')}
slider.loader=$('<div class="bx-loading" />');slider.viewport.prepend(slider.loader);el.css({width:slider.settings.mode==='horizontal'?(slider.children.length*1000+215)+'%':'auto',position:'relative'});if(slider.usingCSS&&slider.settings.easing){el.css('-'+slider.cssPrefix+'-transition-timing-function',slider.settings.easing)}else if(!slider.settings.easing){slider.settings.easing='swing'}
slider.viewport.css({width:'100%',overflow:'hidden',position:'relative'});slider.viewport.parent().css({maxWidth:getViewportMaxWidth()});slider.children.css({float:slider.settings.mode==='horizontal'?'left':'none',listStyle:'none',position:'relative'});slider.children.css('width',getSlideWidth());if(slider.settings.mode==='horizontal'&&slider.settings.slideMargin>0){slider.children.css('marginRight',slider.settings.slideMargin)}
if(slider.settings.mode==='vertical'&&slider.settings.slideMargin>0){slider.children.css('marginBottom',slider.settings.slideMargin)}
if(slider.settings.mode==='fade'){slider.children.css({position:'absolute',zIndex:0,display:'none'});slider.children.eq(slider.settings.startSlide).css({zIndex:slider.settings.slideZIndex,display:'block'})}
slider.controls.el=$('<div class="bx-controls" />');if(slider.settings.captions){appendCaptions()}
slider.active.last=slider.settings.startSlide===getPagerQty()-1;if(slider.settings.video){el.fitVids()}
if(slider.settings.preloadImages==='all'||slider.settings.ticker){preloadSelector=slider.children}
if(!slider.settings.ticker){if(slider.settings.controls){appendControls()}
if(slider.settings.auto&&slider.settings.autoControls){appendControlsAuto()}
if(slider.settings.pager){appendPager()}
if(slider.settings.controls||slider.settings.autoControls||slider.settings.pager){slider.viewport.after(slider.controls.el)}}else{slider.settings.pager=!1}
loadElements(preloadSelector,start)};var loadElements=function(selector,callback){var total=selector.find('img:not([src=""]), iframe').length,count=0;if(total===0){callback();return}
selector.find('img:not([src=""]), iframe').each(function(){$(this).one('load error',function(){if(++count===total){callback()}}).each(function(){if(this.complete){$(this).trigger('load')}})})};var start=function(){if(slider.settings.infiniteLoop&&slider.settings.mode!=='fade'&&!slider.settings.ticker){var slice=slider.settings.mode==='vertical'?slider.settings.minSlides:slider.settings.maxSlides,sliceAppend=slider.children.slice(0,slice).clone(!0).addClass('bx-clone'),slicePrepend=slider.children.slice(-slice).clone(!0).addClass('bx-clone');if(slider.settings.ariaHidden){sliceAppend.attr('aria-hidden',!0);slicePrepend.attr('aria-hidden',!0)}
el.append(sliceAppend).prepend(slicePrepend)}
slider.loader.remove();setSlidePosition();if(slider.settings.mode==='vertical'){slider.settings.adaptiveHeight=!0}
slider.viewport.height(getViewportHeight());el.redrawSlider();slider.settings.onSliderLoad.call(el,slider.active.index);slider.initialized=!0;if(slider.settings.responsive){$(window).bind('resize',resizeWindow)}
if(slider.settings.auto&&slider.settings.autoStart&&(getPagerQty()>1||slider.settings.autoSlideForOnePage)){initAuto()}
if(slider.settings.ticker){initTicker()}
if(slider.settings.pager){updatePagerActive(slider.settings.startSlide)}
if(slider.settings.controls){updateDirectionControls()}
if(slider.settings.touchEnabled&&!slider.settings.ticker){initTouch()}
if(slider.settings.keyboardEnabled&&!slider.settings.ticker){$(document).keydown(keyPress)}};var getViewportHeight=function(){var height=0;var children=$();if(slider.settings.mode!=='vertical'&&!slider.settings.adaptiveHeight){children=slider.children}else{if(!slider.carousel){children=slider.children.eq(slider.active.index)}else{var currentIndex=slider.settings.moveSlides===1?slider.active.index:slider.active.index*getMoveBy();children=slider.children.eq(currentIndex);for(i=1;i<=slider.settings.maxSlides-1;i++){if(currentIndex+i>=slider.children.length){children=children.add(slider.children.eq(i-1))}else{children=children.add(slider.children.eq(currentIndex+i))}}}}
if(slider.settings.mode==='vertical'){children.each(function(index){height+=$(this).outerHeight()});if(slider.settings.slideMargin>0){height+=slider.settings.slideMargin*(slider.settings.minSlides-1)}}else{height=Math.max.apply(Math,children.map(function(){return $(this).outerHeight(!1)}).get())}
if(slider.viewport.css('box-sizing')==='border-box'){height+=parseFloat(slider.viewport.css('padding-top'))+parseFloat(slider.viewport.css('padding-bottom'))+parseFloat(slider.viewport.css('border-top-width'))+parseFloat(slider.viewport.css('border-bottom-width'))}else if(slider.viewport.css('box-sizing')==='padding-box'){height+=parseFloat(slider.viewport.css('padding-top'))+parseFloat(slider.viewport.css('padding-bottom'))}
return height};var getViewportMaxWidth=function(){var width='100%';if(slider.settings.slideWidth>0){if(slider.settings.mode==='horizontal'){width=(slider.settings.maxSlides*slider.settings.slideWidth)+((slider.settings.maxSlides-1)*slider.settings.slideMargin)}else{width=slider.settings.slideWidth}}
return width};var getSlideWidth=function(){var newElWidth=slider.settings.slideWidth,wrapWidth=slider.viewport.width();if(slider.settings.slideWidth===0||(slider.settings.slideWidth>wrapWidth&&!slider.carousel)||slider.settings.mode==='vertical'){newElWidth=wrapWidth}else if(slider.settings.maxSlides>1&&slider.settings.mode==='horizontal'){if(wrapWidth>slider.maxThreshold){return newElWidth}else if(wrapWidth<slider.minThreshold){newElWidth=(wrapWidth-(slider.settings.slideMargin*(slider.settings.minSlides-1)))/slider.settings.minSlides}else if(slider.settings.shrinkItems){newElWidth=Math.floor((wrapWidth+slider.settings.slideMargin)/(Math.ceil((wrapWidth+slider.settings.slideMargin)/(newElWidth+slider.settings.slideMargin)))-slider.settings.slideMargin)}}
return newElWidth};var getNumberSlidesShowing=function(){var slidesShowing=1,childWidth=null;if(slider.settings.mode==='horizontal'&&slider.settings.slideWidth>0){if(slider.viewport.width()<slider.minThreshold){slidesShowing=slider.settings.minSlides}else if(slider.viewport.width()>slider.maxThreshold){slidesShowing=slider.settings.maxSlides}else{childWidth=slider.children.first().width()+slider.settings.slideMargin;slidesShowing=Math.floor((slider.viewport.width()+slider.settings.slideMargin)/childWidth)}}else if(slider.settings.mode==='vertical'){slidesShowing=slider.settings.minSlides}
return slidesShowing};var getPagerQty=function(){var pagerQty=0,breakPoint=0,counter=0;if(slider.settings.moveSlides>0){if(slider.settings.infiniteLoop){pagerQty=Math.ceil(slider.children.length/getMoveBy())}else{while(breakPoint<slider.children.length){++pagerQty;breakPoint=counter+getNumberSlidesShowing();counter+=slider.settings.moveSlides<=getNumberSlidesShowing()?slider.settings.moveSlides:getNumberSlidesShowing()}}}else{pagerQty=Math.ceil(slider.children.length/getNumberSlidesShowing())}
return pagerQty};var getMoveBy=function(){if(slider.settings.moveSlides>0&&slider.settings.moveSlides<=getNumberSlidesShowing()){return slider.settings.moveSlides}
return getNumberSlidesShowing()};var setSlidePosition=function(){var position,lastChild,lastShowingIndex;if(slider.children.length>slider.settings.maxSlides&&slider.active.last&&!slider.settings.infiniteLoop){if(slider.settings.mode==='horizontal'){lastChild=slider.children.last();position=lastChild.position();setPositionProperty(-(position.left-(slider.viewport.width()-lastChild.outerWidth())),'reset',0)}else if(slider.settings.mode==='vertical'){lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position();setPositionProperty(-position.top,'reset',0)}}else{position=slider.children.eq(slider.active.index*getMoveBy()).position();if(slider.active.index===getPagerQty()-1){slider.active.last=!0}
if(position!==undefined){if(slider.settings.mode==='horizontal'){setPositionProperty(-position.left,'reset',0)}else if(slider.settings.mode==='vertical'){setPositionProperty(-position.top,'reset',0)}}}};var setPositionProperty=function(value,type,duration,params){var animateObj,propValue;if(slider.usingCSS){propValue=slider.settings.mode==='vertical'?'translate3d(0, '+value+'px, 0)':'translate3d('+value+'px, 0, 0)';el.css('-'+slider.cssPrefix+'-transition-duration',duration/1000+'s');if(type==='slide'){el.css(slider.animProp,propValue);if(duration!==0){el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){if(!$(e.target).is(el)){return}
el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');updateAfterSlideTransition()})}else{updateAfterSlideTransition()}}else if(type==='reset'){el.css(slider.animProp,propValue)}else if(type==='ticker'){el.css('-'+slider.cssPrefix+'-transition-timing-function','linear');el.css(slider.animProp,propValue);if(duration!==0){el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){if(!$(e.target).is(el)){return}
el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');setPositionProperty(params.resetValue,'reset',0);tickerLoop()})}else{setPositionProperty(params.resetValue,'reset',0);tickerLoop()}}}else{animateObj={};animateObj[slider.animProp]=value;if(type==='slide'){el.animate(animateObj,duration,slider.settings.easing,function(){updateAfterSlideTransition()})}else if(type==='reset'){el.css(slider.animProp,value)}else if(type==='ticker'){el.animate(animateObj,duration,'linear',function(){setPositionProperty(params.resetValue,'reset',0);tickerLoop()})}}};var populatePager=function(){var pagerHtml='',linkContent='',pagerQty=getPagerQty();for(var i=0;i<pagerQty;i++){linkContent='';if(slider.settings.buildPager&&$.isFunction(slider.settings.buildPager)||slider.settings.pagerCustom){linkContent=slider.settings.buildPager(i);slider.pagerEl.addClass('bx-custom-pager')}else{linkContent=i+1;slider.pagerEl.addClass('bx-default-pager')}
pagerHtml+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+linkContent+'</a></div>'}
slider.pagerEl.html(pagerHtml)};var appendPager=function(){if(!slider.settings.pagerCustom){slider.pagerEl=$('<div class="bx-pager" />');if(slider.settings.pagerSelector){$(slider.settings.pagerSelector).html(slider.pagerEl)}else{slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl)}
populatePager()}else{slider.pagerEl=$(slider.settings.pagerCustom)}
slider.pagerEl.on('click touchend','a',clickPagerBind)};var appendControls=function(){slider.controls.next=$('<a class="bx-next" href="">'+slider.settings.nextText+'</a>');slider.controls.prev=$('<a class="bx-prev" href="">'+slider.settings.prevText+'</a>');slider.controls.next.bind('click touchend',clickNextBind);slider.controls.prev.bind('click touchend',clickPrevBind);if(slider.settings.nextSelector){$(slider.settings.nextSelector).append(slider.controls.next)}
if(slider.settings.prevSelector){$(slider.settings.prevSelector).append(slider.controls.prev)}
if(!slider.settings.nextSelector&&!slider.settings.prevSelector){slider.controls.directionEl=$('<div class="bx-controls-direction" />');slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl)}};var appendControlsAuto=function(){slider.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+slider.settings.startText+'</a></div>');slider.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+slider.settings.stopText+'</a></div>');slider.controls.autoEl=$('<div class="bx-controls-auto" />');slider.controls.autoEl.on('click','.bx-start',clickStartBind);slider.controls.autoEl.on('click','.bx-stop',clickStopBind);if(slider.settings.autoControlsCombine){slider.controls.autoEl.append(slider.controls.start)}else{slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop)}
if(slider.settings.autoControlsSelector){$(slider.settings.autoControlsSelector).html(slider.controls.autoEl)}else{slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl)}
updateAutoControls(slider.settings.autoStart?'stop':'start')};var appendCaptions=function(){slider.children.each(function(index){var title=$(this).find('img:first').attr('title');if(title!==undefined&&(''+title).length){$(this).append('<div class="bx-caption"><span>'+title+'</span></div>')}})};var clickNextBind=function(e){e.preventDefault();if(slider.controls.el.hasClass('disabled')){return}
if(slider.settings.auto&&slider.settings.stopAutoOnClick){el.stopAuto()}
el.goToNextSlide()};var clickPrevBind=function(e){e.preventDefault();if(slider.controls.el.hasClass('disabled')){return}
if(slider.settings.auto&&slider.settings.stopAutoOnClick){el.stopAuto()}
el.goToPrevSlide()};var clickStartBind=function(e){el.startAuto();e.preventDefault()};var clickStopBind=function(e){el.stopAuto();e.preventDefault()};var clickPagerBind=function(e){var pagerLink,pagerIndex;e.preventDefault();if(slider.controls.el.hasClass('disabled')){return}
if(slider.settings.auto&&slider.settings.stopAutoOnClick){el.stopAuto()}
pagerLink=$(e.currentTarget);if(pagerLink.attr('data-slide-index')!==undefined){pagerIndex=parseInt(pagerLink.attr('data-slide-index'));if(pagerIndex!==slider.active.index){el.goToSlide(pagerIndex)}}};var updatePagerActive=function(slideIndex){var len=slider.children.length;if(slider.settings.pagerType==='short'){if(slider.settings.maxSlides>1){len=Math.ceil(slider.children.length/slider.settings.maxSlides)}
slider.pagerEl.html((slideIndex+1)+slider.settings.pagerShortSeparator+len);return}
slider.pagerEl.find('a').removeClass('active');slider.pagerEl.each(function(i,el){$(el).find('a').eq(slideIndex).addClass('active')})};var updateAfterSlideTransition=function(){if(slider.settings.infiniteLoop){var position='';if(slider.active.index===0){position=slider.children.eq(0).position()}else if(slider.active.index===getPagerQty()-1&&slider.carousel){position=slider.children.eq((getPagerQty()-1)*getMoveBy()).position()}else if(slider.active.index===slider.children.length-1){position=slider.children.eq(slider.children.length-1).position()}
if(position){if(slider.settings.mode==='horizontal'){setPositionProperty(-position.left,'reset',0)}else if(slider.settings.mode==='vertical'){setPositionProperty(-position.top,'reset',0)}}}
slider.working=!1;slider.settings.onSlideAfter.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)};var updateAutoControls=function(state){if(slider.settings.autoControlsCombine){slider.controls.autoEl.html(slider.controls[state])}else{slider.controls.autoEl.find('a').removeClass('active');slider.controls.autoEl.find('a:not(.bx-'+state+')').addClass('active')}};var updateDirectionControls=function(){if(getPagerQty()===1){slider.controls.prev.addClass('disabled');slider.controls.next.addClass('disabled')}else if(!slider.settings.infiniteLoop&&slider.settings.hideControlOnEnd){if(slider.active.index===0){slider.controls.prev.addClass('disabled');slider.controls.next.removeClass('disabled')}else if(slider.active.index===getPagerQty()-1){slider.controls.next.addClass('disabled');slider.controls.prev.removeClass('disabled')}else{slider.controls.prev.removeClass('disabled');slider.controls.next.removeClass('disabled')}}};var initAuto=function(){if(slider.settings.autoDelay>0){var timeout=setTimeout(el.startAuto,slider.settings.autoDelay)}else{el.startAuto();$(window).focus(function(){el.startAuto()}).blur(function(){el.stopAuto()})}
if(slider.settings.autoHover){el.hover(function(){if(slider.interval){el.stopAuto(!0);slider.autoPaused=!0}},function(){if(slider.autoPaused){el.startAuto(!0);slider.autoPaused=null}})}};var initTicker=function(){var startPosition=0,position,transform,value,idx,ratio,property,newSpeed,totalDimens;if(slider.settings.autoDirection==='next'){el.append(slider.children.clone().addClass('bx-clone'))}else{el.prepend(slider.children.clone().addClass('bx-clone'));position=slider.children.first().position();startPosition=slider.settings.mode==='horizontal'?-position.left:-position.top}
setPositionProperty(startPosition,'reset',0);slider.settings.pager=!1;slider.settings.controls=!1;slider.settings.autoControls=!1;if(slider.settings.tickerHover){if(slider.usingCSS){idx=slider.settings.mode==='horizontal'?4:5;slider.viewport.hover(function(){transform=el.css('-'+slider.cssPrefix+'-transform');value=parseFloat(transform.split(',')[idx]);setPositionProperty(value,'reset',0)},function(){totalDimens=0;slider.children.each(function(index){totalDimens+=slider.settings.mode==='horizontal'?$(this).outerWidth(!0):$(this).outerHeight(!0)});ratio=slider.settings.speed/totalDimens;property=slider.settings.mode==='horizontal'?'left':'top';newSpeed=ratio*(totalDimens-(Math.abs(parseInt(value))));tickerLoop(newSpeed)})}else{slider.viewport.hover(function(){el.stop()},function(){totalDimens=0;slider.children.each(function(index){totalDimens+=slider.settings.mode==='horizontal'?$(this).outerWidth(!0):$(this).outerHeight(!0)});ratio=slider.settings.speed/totalDimens;property=slider.settings.mode==='horizontal'?'left':'top';newSpeed=ratio*(totalDimens-(Math.abs(parseInt(el.css(property)))));tickerLoop(newSpeed)})}}
tickerLoop()};var tickerLoop=function(resumeSpeed){var speed=resumeSpeed?resumeSpeed:slider.settings.speed,position={left:0,top:0},reset={left:0,top:0},animateProperty,resetValue,params;if(slider.settings.autoDirection==='next'){position=el.find('.bx-clone').first().position()}else{reset=slider.children.first().position()}
animateProperty=slider.settings.mode==='horizontal'?-position.left:-position.top;resetValue=slider.settings.mode==='horizontal'?-reset.left:-reset.top;params={resetValue:resetValue};setPositionProperty(animateProperty,'ticker',speed,params)};var isOnScreen=function(el){var win=$(window),viewport={top:win.scrollTop(),left:win.scrollLeft()},bounds=el.offset();viewport.right=viewport.left+win.width();viewport.bottom=viewport.top+win.height();bounds.right=bounds.left+el.outerWidth();bounds.bottom=bounds.top+el.outerHeight();return(!(viewport.right<bounds.left||viewport.left>bounds.right||viewport.bottom<bounds.top||viewport.top>bounds.bottom))};var keyPress=function(e){var activeElementTag=document.activeElement.tagName.toLowerCase(),tagFilters='input|textarea',p=new RegExp(activeElementTag,['i']),result=p.exec(tagFilters);if(result==null&&isOnScreen(el)){if(e.keyCode===39){clickNextBind(e);return!1}else if(e.keyCode===37){clickPrevBind(e);return!1}}};var initTouch=function(){slider.touch={start:{x:0,y:0},end:{x:0,y:0}};slider.viewport.bind('touchstart MSPointerDown pointerdown',onTouchStart);slider.viewport.on('click','.bxslider a',function(e){if(slider.viewport.hasClass('click-disabled')){e.preventDefault();slider.viewport.removeClass('click-disabled')}})};var onTouchStart=function(e){slider.controls.el.addClass('disabled');if(slider.working){e.preventDefault();slider.controls.el.removeClass('disabled')}else{slider.touch.originalPos=el.position();var orig=e.originalEvent,touchPoints=(typeof orig.changedTouches!=='undefined')?orig.changedTouches:[orig];slider.touch.start.x=touchPoints[0].pageX;slider.touch.start.y=touchPoints[0].pageY;if(slider.viewport.get(0).setPointerCapture){slider.pointerId=orig.pointerId;slider.viewport.get(0).setPointerCapture(slider.pointerId)}
slider.viewport.bind('touchmove MSPointerMove pointermove',onTouchMove);slider.viewport.bind('touchend MSPointerUp pointerup',onTouchEnd);slider.viewport.bind('MSPointerCancel pointercancel',onPointerCancel)}};var onPointerCancel=function(e){setPositionProperty(slider.touch.originalPos.left,'reset',0);slider.controls.el.removeClass('disabled');slider.viewport.unbind('MSPointerCancel pointercancel',onPointerCancel);slider.viewport.unbind('touchmove MSPointerMove pointermove',onTouchMove);slider.viewport.unbind('touchend MSPointerUp pointerup',onTouchEnd);if(slider.viewport.get(0).releasePointerCapture){slider.viewport.get(0).releasePointerCapture(slider.pointerId)}};var onTouchMove=function(e){var orig=e.originalEvent,touchPoints=(typeof orig.changedTouches!=='undefined')?orig.changedTouches:[orig],xMovement=Math.abs(touchPoints[0].pageX-slider.touch.start.x),yMovement=Math.abs(touchPoints[0].pageY-slider.touch.start.y),value=0,change=0;if((xMovement*3)>yMovement&&slider.settings.preventDefaultSwipeX){e.preventDefault()}else if((yMovement*3)>xMovement&&slider.settings.preventDefaultSwipeY){e.preventDefault()}
if(slider.settings.mode!=='fade'&&slider.settings.oneToOneTouch){if(slider.settings.mode==='horizontal'){change=touchPoints[0].pageX-slider.touch.start.x;value=slider.touch.originalPos.left+change}else{change=touchPoints[0].pageY-slider.touch.start.y;value=slider.touch.originalPos.top+change}
setPositionProperty(value,'reset',0)}};var onTouchEnd=function(e){slider.viewport.unbind('touchmove MSPointerMove pointermove',onTouchMove);slider.controls.el.removeClass('disabled');var orig=e.originalEvent,touchPoints=(typeof orig.changedTouches!=='undefined')?orig.changedTouches:[orig],value=0,distance=0;slider.touch.end.x=touchPoints[0].pageX;slider.touch.end.y=touchPoints[0].pageY;if(slider.settings.mode==='fade'){distance=Math.abs(slider.touch.start.x-slider.touch.end.x);if(distance>=slider.settings.swipeThreshold){if(slider.touch.start.x>slider.touch.end.x){el.goToNextSlide()}else{el.goToPrevSlide()}
el.stopAuto()}}else{if(slider.settings.mode==='horizontal'){distance=slider.touch.end.x-slider.touch.start.x;value=slider.touch.originalPos.left}else{distance=slider.touch.end.y-slider.touch.start.y;value=slider.touch.originalPos.top}
if(!slider.settings.infiniteLoop&&((slider.active.index===0&&distance>0)||(slider.active.last&&distance<0))){setPositionProperty(value,'reset',200)}else{if(Math.abs(distance)>=slider.settings.swipeThreshold){if(distance<0){el.goToNextSlide()}else{el.goToPrevSlide()}
el.stopAuto()}else{setPositionProperty(value,'reset',200)}}}
slider.viewport.unbind('touchend MSPointerUp pointerup',onTouchEnd);if(slider.viewport.get(0).releasePointerCapture){slider.viewport.get(0).releasePointerCapture(slider.pointerId)}};var resizeWindow=function(e){if(!slider.initialized){return}
if(slider.working){window.setTimeout(resizeWindow,10)}else{var windowWidthNew=$(window).width(),windowHeightNew=$(window).height();if(windowWidth!==windowWidthNew||windowHeight!==windowHeightNew){windowWidth=windowWidthNew;windowHeight=windowHeightNew;el.redrawSlider();slider.settings.onSliderResize.call(el,slider.active.index)}}};var applyAriaHiddenAttributes=function(startVisibleIndex){var numberOfSlidesShowing=getNumberSlidesShowing();if(slider.settings.ariaHidden&&!slider.settings.ticker){slider.children.attr('aria-hidden','true');slider.children.slice(startVisibleIndex,startVisibleIndex+numberOfSlidesShowing).attr('aria-hidden','false')}};var setSlideIndex=function(slideIndex){if(slideIndex<0){if(slider.settings.infiniteLoop){return getPagerQty()-1}else{return slider.active.index}}else if(slideIndex>=getPagerQty()){if(slider.settings.infiniteLoop){return 0}else{return slider.active.index}}else{return slideIndex}};el.goToSlide=function(slideIndex,direction){var performTransition=!0,moveBy=0,position={left:0,top:0},lastChild=null,lastShowingIndex,eq,value,requestEl;slider.oldIndex=slider.active.index;slider.active.index=setSlideIndex(slideIndex);if(slider.working||slider.active.index===slider.oldIndex){return}
slider.working=!0;performTransition=slider.settings.onSlideBefore.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index);if(typeof(performTransition)!=='undefined'&&!performTransition){slider.active.index=slider.oldIndex;slider.working=!1;return}
if(direction==='next'){if(!slider.settings.onSlideNext.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)){performTransition=!1}}else if(direction==='prev'){if(!slider.settings.onSlidePrev.call(el,slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)){performTransition=!1}}
slider.active.last=slider.active.index>=getPagerQty()-1;if(slider.settings.pager||slider.settings.pagerCustom){updatePagerActive(slider.active.index)}
if(slider.settings.controls){updateDirectionControls()}
if(slider.settings.mode==='fade'){if(slider.settings.adaptiveHeight&&slider.viewport.height()!==getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed)}
slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex:0});slider.children.eq(slider.active.index).css('zIndex',slider.settings.slideZIndex+1).fadeIn(slider.settings.speed,function(){$(this).css('zIndex',slider.settings.slideZIndex);updateAfterSlideTransition()})}else{if(slider.settings.adaptiveHeight&&slider.viewport.height()!==getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed)}
if(!slider.settings.infiniteLoop&&slider.carousel&&slider.active.last){if(slider.settings.mode==='horizontal'){lastChild=slider.children.eq(slider.children.length-1);position=lastChild.position();moveBy=slider.viewport.width()-lastChild.outerWidth()}else{lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position()}}else if(slider.carousel&&slider.active.last&&direction==='prev'){eq=slider.settings.moveSlides===1?slider.settings.maxSlides-getMoveBy():((getPagerQty()-1)*getMoveBy())-(slider.children.length-slider.settings.maxSlides);lastChild=el.children('.bx-clone').eq(eq);position=lastChild.position()}else if(direction==='next'&&slider.active.index===0){position=el.find('> .bx-clone').eq(slider.settings.maxSlides).position();slider.active.last=!1}else if(slideIndex>=0){requestEl=slideIndex*parseInt(getMoveBy());position=slider.children.eq(requestEl).position()}
if(typeof(position)!=='undefined'){value=slider.settings.mode==='horizontal'?-(position.left-moveBy):-position.top;setPositionProperty(value,'slide',slider.settings.speed)}else{slider.working=!1}}
if(slider.settings.ariaHidden){applyAriaHiddenAttributes(slider.active.index*getMoveBy())}};el.goToNextSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.last){return}
var pagerIndex=parseInt(slider.active.index)+1;el.goToSlide(pagerIndex,'next')};el.goToPrevSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.index===0){return}
var pagerIndex=parseInt(slider.active.index)-1;el.goToSlide(pagerIndex,'prev')};el.startAuto=function(preventControlUpdate){if(slider.interval){return}
slider.interval=setInterval(function(){if(slider.settings.autoDirection==='next'){el.goToNextSlide()}else{el.goToPrevSlide()}},slider.settings.pause);if(slider.settings.autoControls&&preventControlUpdate!==!0){updateAutoControls('stop')}};el.stopAuto=function(preventControlUpdate){if(!slider.interval){return}
clearInterval(slider.interval);slider.interval=null;if(slider.settings.autoControls&&preventControlUpdate!==!0){updateAutoControls('start')}};el.getCurrentSlide=function(){return slider.active.index};el.getCurrentSlideElement=function(){return slider.children.eq(slider.active.index)};el.getSlideElement=function(index){return slider.children.eq(index)};el.getSlideCount=function(){return slider.children.length};el.isWorking=function(){return slider.working};el.redrawSlider=function(){slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());slider.viewport.css('height',getViewportHeight());if(!slider.settings.ticker){setSlidePosition()}
if(slider.active.last){slider.active.index=getPagerQty()-1}
if(slider.active.index>=getPagerQty()){slider.active.last=!0}
if(slider.settings.pager&&!slider.settings.pagerCustom){populatePager();updatePagerActive(slider.active.index)}
if(slider.settings.ariaHidden){applyAriaHiddenAttributes(slider.active.index*getMoveBy())}};el.destroySlider=function(){if(!slider.initialized){return}
slider.initialized=!1;$('.bx-clone',this).remove();slider.children.each(function(){if($(this).data('origStyle')!==undefined){$(this).attr('style',$(this).data('origStyle'))}else{$(this).removeAttr('style')}});if($(this).data('origStyle')!==undefined){this.attr('style',$(this).data('origStyle'))}else{$(this).removeAttr('style')}
$(this).unwrap().unwrap();if(slider.controls.el){slider.controls.el.remove()}
if(slider.controls.next){slider.controls.next.remove()}
if(slider.controls.prev){slider.controls.prev.remove()}
if(slider.pagerEl&&slider.settings.controls&&!slider.settings.pagerCustom){slider.pagerEl.remove()}
$('.bx-caption',this).remove();if(slider.controls.autoEl){slider.controls.autoEl.remove()}
clearInterval(slider.interval);if(slider.settings.responsive){$(window).unbind('resize',resizeWindow)}
if(slider.settings.keyboardEnabled){$(document).unbind('keydown',keyPress)}
$(this).removeData('bxSlider')};el.reloadSlider=function(settings){if(settings!==undefined){options=settings}
el.destroySlider();init();$(el).data('bxSlider',this)};init();$(el).data('bxSlider',this);return this}})(jQuery);"use strict";!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd&&define("GMaps",[],b),a.GMaps=b()}(this,function(){if("object"!=typeof window.google||!window.google.maps)throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.";var a=function(a,b){var c;if(a===b)return a;for(c in b)a[c]=b[c];return a},b=function(a,b){var c,d=Array.prototype.slice.call(arguments,2),e=[],f=a.length;if(Array.prototype.map&&a.map===Array.prototype.map)e=Array.prototype.map.call(a,function(a){var c=d.slice(0);return c.splice(0,0,a),b.apply(this,c)});else for(c=0;f>c;c++)callback_params=d,callback_params.splice(0,0,a[c]),e.push(b.apply(this,callback_params));return e},c=function(a){var b,c=[];for(b=0;b<a.length;b++)c=c.concat(a[b]);return c},d=function(a,b){var c=a[0],d=a[1];return b&&(c=a[1],d=a[0]),new google.maps.LatLng(c,d)},f=function(a,b){var c;for(c=0;c<a.length;c++)a[c]instanceof google.maps.LatLng||(a[c].length>0&&"object"==typeof a[c][0]?a[c]=f(a[c],b):a[c]=d(a[c],b));return a},g=function(a,b){var c,d=a.replace(".","");return c="jQuery"in this&&b?$("."+d,b)[0]:document.getElementsByClassName(d)[0]},h=function(a,b){var c,a=a.replace("#","");return c="jQuery"in window&&b?$("#"+a,b)[0]:document.getElementById(a)},i=function(a){var b=0,c=0;if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},j=function(b){var c=document,d=function(b){if(!this)return new d(b);b.zoom=b.zoom||15,b.mapType=b.mapType||"roadmap";var e,f=this,j=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],k=["mousemove","mouseout","mouseover"],l=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],m=b.el||b.div,n=b.markerClusterer,o=google.maps.MapTypeId[b.mapType.toUpperCase()],p=new google.maps.LatLng(b.lat,b.lng),q=b.zoomControl||!0,r=b.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},s=r.style||"DEFAULT",t=r.position||"TOP_LEFT",u=b.panControl||!0,v=b.mapTypeControl||!0,w=b.scaleControl||!0,x=b.streetViewControl||!0,y=y||!0,z={},A={zoom:this.zoom,center:p,mapTypeId:o},B={panControl:u,zoomControl:q,zoomControlOptions:{style:google.maps.ZoomControlStyle[s],position:google.maps.ControlPosition[t]},mapTypeControl:v,scaleControl:w,streetViewControl:x,overviewMapControl:y};if("string"==typeof b.el||"string"==typeof b.div?m.indexOf("#")>-1?this.el=h(m,b.context):this.el=g.apply(this,[m,b.context]):this.el=m,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[f.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=b.zoom,this.registered_events={},this.el.style.width=b.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=b.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=b.enableNewStyle,e=0;e<l.length;e++)delete b[l[e]];for(1!=b.disableDefaultUI&&(A=a(A,B)),z=a(A,b),e=0;e<j.length;e++)delete z[j[e]];for(e=0;e<k.length;e++)delete z[k[e]];this.map=new google.maps.Map(this.el,z),n&&(this.markerClusterer=n.apply(this,[this.map]));var C=function(a,b){var c="",d=window.context_menu[f.el.id][a];for(var e in d)if(d.hasOwnProperty(e)){var g=d[e];c+='<li><a id="'+a+"_"+e+'" href="#">'+g.title+"</a></li>"}if(h("gmaps_context_menu")){var j=h("gmaps_context_menu");j.innerHTML=c;var e,k=j.getElementsByTagName("a"),l=k.length;for(e=0;l>e;e++){var m=k[e],n=function(c){c.preventDefault(),d[this.id.replace(a+"_","")].action.apply(f,[b]),f.hideContextMenu()};google.maps.event.clearListeners(m,"click"),google.maps.event.addDomListenerOnce(m,"click",n,!1)}var o=i.apply(this,[f.el]),p=o[0]+b.pixel.x-15,q=o[1]+b.pixel.y-15;j.style.left=p+"px",j.style.top=q+"px",j.style.display="block"}};this.buildContextMenu=function(a,b){if("marker"===a){b.pixel={};var c=new google.maps.OverlayView;c.setMap(f.map),c.draw=function(){var d=c.getProjection(),e=b.marker.getPosition();b.pixel=d.fromLatLngToContainerPixel(e),C(a,b)}}else C(a,b)},this.setContextMenu=function(a){window.context_menu[f.el.id][a.control]={};var b,d=c.createElement("ul");for(b in a.options)if(a.options.hasOwnProperty(b)){var e=a.options[b];window.context_menu[f.el.id][a.control][e.name]={title:e.title,action:e.action}}d.id="gmaps_context_menu",d.style.display="none",d.style.position="absolute",d.style.minWidth="100px",d.style.background="white",d.style.listStyle="none",d.style.padding="8px",d.style.boxShadow="2px 2px 6px #ccc",c.body.appendChild(d);var g=h("gmaps_context_menu");google.maps.event.addDomListener(g,"mouseout",function(a){a.relatedTarget&&this.contains(a.relatedTarget)||window.setTimeout(function(){g.style.display="none"},400)},!1)},this.hideContextMenu=function(){var a=h("gmaps_context_menu");a&&(a.style.display="none")};var D=function(a,c){google.maps.event.addListener(a,c,function(a){void 0==a&&(a=this),b[c].apply(this,[a]),f.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var E=0;E<j.length;E++){var F=j[E];F in b&&D(this.map,F)}for(var E=0;E<k.length;E++){var F=k[E];F in b&&D(this.map,F)}google.maps.event.addListener(this.map,"rightclick",function(a){b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[f.el.id].map&&f.buildContextMenu("map",a)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var a,b=[],c=this.markers.length;for(a=0;c>a;a++)"boolean"==typeof this.markers[a].visible&&this.markers[a].visible&&b.push(this.markers[a].getPosition());this.fitLatLngBounds(b)},this.fitLatLngBounds=function(a){var b,c=a.length,d=new google.maps.LatLngBounds;for(b=0;c>b;b++)d.extend(a[b]);this.map.fitBounds(d)},this.setCenter=function(a,b,c){this.map.panTo(new google.maps.LatLng(a,b)),c&&c()},this.getElement=function(){return this.el},this.zoomIn=function(a){a=a||1,this.zoom=this.map.getZoom()+a,this.map.setZoom(this.zoom)},this.zoomOut=function(a){a=a||1,this.zoom=this.map.getZoom()-a,this.map.setZoom(this.zoom)};var G,H=[];for(G in this.map)"function"!=typeof this.map[G]||this[G]||H.push(G);for(e=0;e<H.length;e++)!function(a,b,c){a[c]=function(){return b[c].apply(b,arguments)}}(this,this.map,H[e])};return d}(this);j.prototype.createControl=function(a){var b=document.createElement("div");b.style.cursor="pointer",a.disableDefaultStyles!==!0&&(b.style.fontFamily="Roboto, Arial, sans-serif",b.style.fontSize="11px",b.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var c in a.style)b.style[c]=a.style[c];a.id&&(b.id=a.id),a.classes&&(b.className=a.classes),a.content&&("string"==typeof a.content?b.innerHTML=a.content:a.content instanceof HTMLElement&&b.appendChild(a.content)),a.position&&(b.position=google.maps.ControlPosition[a.position.toUpperCase()]);for(var d in a.events)!function(b,c){google.maps.event.addDomListener(b,c,function(){a.events[c].apply(this,[this])})}(b,d);return b.index=1,b},j.prototype.addControl=function(a){var b=this.createControl(a);return this.controls.push(b),this.map.controls[b.position].push(b),b},j.prototype.removeControl=function(a){var b,c=null;for(b=0;b<this.controls.length;b++)this.controls[b]==a&&(c=this.controls[b].position,this.controls.splice(b,1));if(c)for(b=0;b<this.map.controls.length;b++){var d=this.map.controls[a.position];if(d.getAt(b)==a){d.removeAt(b);break}}return a},j.prototype.createMarker=function(b){if(void 0==b.lat&&void 0==b.lng&&void 0==b.position)throw"No latitude or longitude defined.";var c=this,d=b.details,e=b.fences,f=b.outside,g={position:new google.maps.LatLng(b.lat,b.lng),map:null},h=a(g,b);delete h.lat,delete h.lng,delete h.fences,delete h.outside;var i=new google.maps.Marker(h);if(i.fences=e,b.infoWindow){i.infoWindow=new google.maps.InfoWindow(b.infoWindow);for(var j=["closeclick","content_changed","domready","position_changed","zindex_changed"],k=0;k<j.length;k++)!function(a,c){b.infoWindow[c]&&google.maps.event.addListener(a,c,function(a){b.infoWindow[c].apply(this,[a])})}(i.infoWindow,j[k])}for(var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],m=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],k=0;k<l.length;k++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this,[this])})}(i,l[k]);for(var k=0;k<m.length;k++)!function(a,c,d){b[d]&&google.maps.event.addListener(c,d,function(c){c.pixel||(c.pixel=a.getProjection().fromLatLngToPoint(c.latLng)),b[d].apply(this,[c])})}(this.map,i,m[k]);return google.maps.event.addListener(i,"click",function(){this.details=d,b.click&&b.click.apply(this,[this]),i.infoWindow&&(c.hideInfoWindows(),i.infoWindow.open(c.map,i))}),google.maps.event.addListener(i,"rightclick",function(a){a.marker=this,b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[c.el.id].marker&&c.buildContextMenu("marker",a)}),i.fences&&google.maps.event.addListener(i,"dragend",function(){c.checkMarkerGeofence(i,function(a,b){f(a,b)})}),i},j.prototype.addMarker=function(a){var b;if(a.hasOwnProperty("gm_accessors_"))b=a;else{if(!(a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||a.position))throw"No latitude or longitude defined.";b=this.createMarker(a)}return b.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(b),this.markers.push(b),j.fire("marker_added",b,this),b},j.prototype.addMarkers=function(a){for(var b,c=0;b=a[c];c++)this.addMarker(b);return this.markers},j.prototype.hideInfoWindows=function(){for(var a,b=0;a=this.markers[b];b++)a.infoWindow&&a.infoWindow.close()},j.prototype.removeMarker=function(a){for(var b=0;b<this.markers.length;b++)if(this.markers[b]===a){this.markers[b].setMap(null),this.markers.splice(b,1),this.markerClusterer&&this.markerClusterer.removeMarker(a),j.fire("marker_removed",a,this);break}return a},j.prototype.removeMarkers=function(a){var b=[];if("undefined"==typeof a){for(var c=0;c<this.markers.length;c++){var d=this.markers[c];d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),j.fire("marker_removed",d,this)}this.markers=b}else{for(var c=0;c<a.length;c++){var e=this.markers.indexOf(a[c]);if(e>-1){var d=this.markers[e];d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),j.fire("marker_removed",d,this)}}for(var c=0;c<this.markers.length;c++){var d=this.markers[c];null!=d.getMap()&&b.push(d)}this.markers=b}},j.prototype.drawOverlay=function(a){var b=new google.maps.OverlayView,c=!0;return b.setMap(this.map),null!=a.auto_show&&(c=a.auto_show),b.onAdd=function(){var c=document.createElement("div");c.style.borderStyle="none",c.style.borderWidth="0px",c.style.position="absolute",c.style.zIndex=100,c.innerHTML=a.content,b.el=c,a.layer||(a.layer="overlayLayer");var d=this.getPanes(),e=d[a.layer],f=["contextmenu","DOMMouseScroll","dblclick","mousedown"];e.appendChild(c);for(var g=0;g<f.length;g++)!function(a,b){google.maps.event.addDomListener(a,b,function(a){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(a.cancelBubble=!0,a.returnValue=!1):a.stopPropagation()})}(c,f[g]);a.click&&(d.overlayMouseTarget.appendChild(b.el),google.maps.event.addDomListener(b.el,"click",function(){a.click.apply(b,[b])})),google.maps.event.trigger(this,"ready")},b.draw=function(){var d=this.getProjection(),e=d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat,a.lng));a.horizontalOffset=a.horizontalOffset||0,a.verticalOffset=a.verticalOffset||0;var f=b.el,g=f.children[0],h=g.clientHeight,i=g.clientWidth;switch(a.verticalAlign){case"top":f.style.top=e.y-h+a.verticalOffset+"px";break;default:case"middle":f.style.top=e.y-h/2+a.verticalOffset+"px";break;case"bottom":f.style.top=e.y+a.verticalOffset+"px"}switch(a.horizontalAlign){case"left":f.style.left=e.x-i+a.horizontalOffset+"px";break;default:case"center":f.style.left=e.x-i/2+a.horizontalOffset+"px";break;case"right":f.style.left=e.x+a.horizontalOffset+"px"}f.style.display=c?"block":"none",c||a.show.apply(this,[f])},b.onRemove=function(){var c=b.el;a.remove?a.remove.apply(this,[c]):(b.el.parentNode.removeChild(b.el),b.el=null)},this.overlays.push(b),b},j.prototype.removeOverlay=function(a){for(var b=0;b<this.overlays.length;b++)if(this.overlays[b]===a){this.overlays[b].setMap(null),this.overlays.splice(b,1);break}},j.prototype.removeOverlays=function(){for(var a,b=0;a=this.overlays[b];b++)a.setMap(null);this.overlays=[]},j.prototype.drawPolyline=function(a){var b=[],c=a.path;if(c.length)if(void 0===c[0][0])b=c;else for(var d,e=0;d=c[e];e++)b.push(new google.maps.LatLng(d[0],d[1]));var f={map:this.map,path:b,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight,geodesic:a.geodesic,clickable:!0,editable:!1,visible:!0};a.hasOwnProperty("clickable")&&(f.clickable=a.clickable),a.hasOwnProperty("editable")&&(f.editable=a.editable),a.hasOwnProperty("icons")&&(f.icons=a.icons),a.hasOwnProperty("zIndex")&&(f.zIndex=a.zIndex);for(var g=new google.maps.Polyline(f),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(b,c){a[c]&&google.maps.event.addListener(b,c,function(b){a[c].apply(this,[b])})}(g,h[i]);return this.polylines.push(g),j.fire("polyline_added",g,this),g},j.prototype.removePolyline=function(a){for(var b=0;b<this.polylines.length;b++)if(this.polylines[b]===a){this.polylines[b].setMap(null),this.polylines.splice(b,1),j.fire("polyline_removed",a,this);break}},j.prototype.removePolylines=function(){for(var a,b=0;a=this.polylines[b];b++)a.setMap(null);this.polylines=[]},j.prototype.drawCircle=function(b){b=a({map:this.map,center:new google.maps.LatLng(b.lat,b.lng)},b),delete b.lat,delete b.lng;for(var c=new google.maps.Circle(b),d=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],e=0;e<d.length;e++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(c,d[e]);return this.polygons.push(c),c},j.prototype.drawRectangle=function(b){b=a({map:this.map},b);var c=new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0],b.bounds[0][1]),new google.maps.LatLng(b.bounds[1][0],b.bounds[1][1]));b.bounds=c;for(var d=new google.maps.Rectangle(b),e=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],f=0;f<e.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e[f]);return this.polygons.push(d),d},j.prototype.drawPolygon=function(d){var e=!1;d.hasOwnProperty("useGeoJSON")&&(e=d.useGeoJSON),delete d.useGeoJSON,d=a({map:this.map},d),0==e&&(d.paths=[d.paths.slice(0)]),d.paths.length>0&&d.paths[0].length>0&&(d.paths=c(b(d.paths,f,e)));for(var g=new google.maps.Polygon(d),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(a,b){d[b]&&google.maps.event.addListener(a,b,function(a){d[b].apply(this,[a])})}(g,h[i]);return this.polygons.push(g),j.fire("polygon_added",g,this),g},j.prototype.removePolygon=function(a){for(var b=0;b<this.polygons.length;b++)if(this.polygons[b]===a){this.polygons[b].setMap(null),this.polygons.splice(b,1),j.fire("polygon_removed",a,this);break}},j.prototype.removePolygons=function(){for(var a,b=0;a=this.polygons[b];b++)a.setMap(null);this.polygons=[]},j.prototype.getFromFusionTables=function(a){var b=a.events;delete a.events;var c=a,d=new google.maps.FusionTablesLayer(c);for(var e in b)!function(a,c){google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e);return this.layers.push(d),d},j.prototype.loadFromFusionTables=function(a){var b=this.getFromFusionTables(a);return b.setMap(this.map),b},j.prototype.getFromKML=function(a){var b=a.url,c=a.events;delete a.url,delete a.events;var d=a,e=new google.maps.KmlLayer(b,d);for(var f in c)!function(a,b){google.maps.event.addListener(a,b,function(a){c[b].apply(this,[a])})}(e,f);return this.layers.push(e),e},j.prototype.loadFromKML=function(a){var b=this.getFromKML(a);return b.setMap(this.map),b},j.prototype.addLayer=function(a,b){b=b||{};var c;switch(a){case"weather":this.singleLayers.weather=c=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=c=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=c=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=c=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=c=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=c=new google.maps.panoramio.PanoramioLayer,c.setTag(b.filter),delete b.filter,b.click&&google.maps.event.addListener(c,"click",function(a){b.click(a),delete b.click});break;case"places":if(this.singleLayers.places=c=new google.maps.places.PlacesService(this.map),b.search||b.nearbySearch||b.radarSearch){var d={bounds:b.bounds||null,keyword:b.keyword||null,location:b.location||null,name:b.name||null,radius:b.radius||null,rankBy:b.rankBy||null,types:b.types||null};b.radarSearch&&c.radarSearch(d,b.radarSearch),b.search&&c.search(d,b.search),b.nearbySearch&&c.nearbySearch(d,b.nearbySearch)}if(b.textSearch){var e={bounds:b.bounds||null,location:b.location||null,query:b.query||null,radius:b.radius||null};c.textSearch(e,b.textSearch)}}return void 0!==c?("function"==typeof c.setOptions&&c.setOptions(b),"function"==typeof c.setMap&&c.setMap(this.map),c):void 0},j.prototype.removeLayer=function(a){if("string"==typeof a&&void 0!==this.singleLayers[a])this.singleLayers[a].setMap(null),delete this.singleLayers[a];else for(var b=0;b<this.layers.length;b++)if(this.layers[b]===a){this.layers[b].setMap(null),this.layers.splice(b,1);break}};var k,l;return j.prototype.getRoutes=function(b){switch(b.travelMode){case"bicycling":k=google.maps.TravelMode.BICYCLING;break;case"transit":k=google.maps.TravelMode.TRANSIT;break;case"driving":k=google.maps.TravelMode.DRIVING;break;default:k=google.maps.TravelMode.WALKING}l="imperial"===b.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var c={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},d=a(c,b);d.origin=/string/.test(typeof b.origin)?b.origin:new google.maps.LatLng(b.origin[0],b.origin[1]),d.destination=/string/.test(typeof b.destination)?b.destination:new google.maps.LatLng(b.destination[0],b.destination[1]),d.travelMode=k,d.unitSystem=l,delete d.callback,delete d.error;var e=this,f=new google.maps.DirectionsService;f.route(d,function(a,c){if(c===google.maps.DirectionsStatus.OK){for(var d in a.routes)a.routes.hasOwnProperty(d)&&e.routes.push(a.routes[d]);b.callback&&b.callback(e.routes)}else b.error&&b.error(a,c)})},j.prototype.removeRoutes=function(){this.routes=[]},j.prototype.getElevations=function(d){d=a({locations:[],path:!1,samples:256},d),d.locations.length>0&&d.locations[0].length>0&&(d.locations=c(b([d.locations],f,!1)));var e=d.callback;delete d.callback;var g=new google.maps.ElevationService;if(d.path){var h={path:d.locations,samples:d.samples};g.getElevationAlongPath(h,function(a,b){e&&"function"==typeof e&&e(a,b)})}else delete d.path,delete d.samples,g.getElevationForLocations(d,function(a,b){e&&"function"==typeof e&&e(a,b)})},j.prototype.cleanRoute=j.prototype.removePolylines,j.prototype.drawRoute=function(a){var b=this;this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(c){if(c.length>0){var d={path:c[c.length-1].overview_path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(d.icons=a.icons),b.drawPolyline(d),a.callback&&a.callback(c[c.length-1])}}})},j.prototype.travelRoute=function(a){if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(b){if(b.length>0&&a.start&&a.start(b[b.length-1]),b.length>0&&a.step){var c=b[b.length-1];if(c.legs.length>0)for(var d,e=c.legs[0].steps,f=0;d=e[f];f++)d.step_number=f,a.step(d,c.legs[0].steps.length-1)}b.length>0&&a.end&&a.end(b[b.length-1])}});else if(a.route&&a.route.legs.length>0)for(var b,c=a.route.legs[0].steps,d=0;b=c[d];d++)b.step_number=d,a.step(b)},j.prototype.drawSteppedRoute=function(a){var b=this;if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,error:a.error,callback:function(c){if(c.length>0&&a.start&&a.start(c[c.length-1]),c.length>0&&a.step){var d=c[c.length-1];if(d.legs.length>0)for(var e,f=d.legs[0].steps,g=0;e=f[g];g++){e.step_number=g;var h={path:e.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(h.icons=a.icons),b.drawPolyline(h),a.step(e,d.legs[0].steps.length-1)}}c.length>0&&a.end&&a.end(c[c.length-1])}});else if(a.route&&a.route.legs.length>0)for(var c,d=a.route.legs[0].steps,e=0;c=d[e];e++){c.step_number=e;var f={path:c.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(f.icons=a.icons),b.drawPolyline(f),a.step(c)}},j.Route=function(a){this.origin=a.origin,this.destination=a.destination,this.waypoints=a.waypoints,this.map=a.map,this.route=a.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var b={path:new google.maps.MVCArray,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(b.icons=a.icons),this.polyline=this.map.drawPolyline(b).getPath()},j.Route.prototype.getRoute=function(a){var b=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:a.travelMode,waypoints:this.waypoints||[],error:a.error,callback:function(){b.route=e[0],a.callback&&a.callback.call(b)}})},j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.pop()}},j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.push(a[b]);this.step_count++}},j.prototype.checkGeofence=function(a,b,c){return c.containsLatLng(new google.maps.LatLng(a,b))},j.prototype.checkMarkerGeofence=function(a,b){if(a.fences)for(var c,d=0;c=a.fences[d];d++){var e=a.getPosition();this.checkGeofence(e.lat(),e.lng(),c)||b(a,c)}},j.prototype.toImage=function(a){var a=a||{},b={};if(b.size=a.size||[this.el.clientWidth,this.el.clientHeight],b.lat=this.getCenter().lat(),b.lng=this.getCenter().lng(),this.markers.length>0){b.markers=[];for(var c=0;c<this.markers.length;c++)b.markers.push({lat:this.markers[c].getPosition().lat(),lng:this.markers[c].getPosition().lng()})}if(this.polylines.length>0){var d=this.polylines[0];b.polyline={},b.polyline.path=google.maps.geometry.encoding.encodePath(d.getPath()),b.polyline.strokeColor=d.strokeColor,b.polyline.strokeOpacity=d.strokeOpacity,b.polyline.strokeWeight=d.strokeWeight}return j.staticMapURL(b)},j.staticMapURL=function(a){function b(a,b){if("#"===a[0]&&(a=a.replace("#","0x"),b)){if(b=parseFloat(b),b=Math.min(1,Math.max(b,0)),0===b)return"0x00000000";b=(255*b).toString(16),1===b.length&&(b+=b),a=a.slice(0,8)+b}return a}var c,d=[],e=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";a.url&&(e=a.url,delete a.url),e+="?";var f=a.markers;delete a.markers,!f&&a.marker&&(f=[a.marker],delete a.marker);var g=a.styles;delete a.styles;var h=a.polyline;if(delete a.polyline,a.center)d.push("center="+a.center),delete a.center;else if(a.address)d.push("center="+a.address),delete a.address;else if(a.lat)d.push(["center=",a.lat,",",a.lng].join("")),delete a.lat,delete a.lng;else if(a.visible){var i=encodeURI(a.visible.join("|"));d.push("visible="+i)}var j=a.size;j?(j.join&&(j=j.join("x")),delete a.size):j="630x300",d.push("size="+j),a.zoom||a.zoom===!1||(a.zoom=15);var k=a.hasOwnProperty("sensor")?!!a.sensor:!0;delete a.sensor,d.push("sensor="+k);for(var l in a)a.hasOwnProperty(l)&&d.push(l+"="+a[l]);if(f)for(var m,n,o=0;c=f[o];o++){m=[],c.size&&"normal"!==c.size?(m.push("size:"+c.size),delete c.size):c.icon&&(m.push("icon:"+encodeURI(c.icon)),delete c.icon),c.color&&(m.push("color:"+c.color.replace("#","0x")),delete c.color),c.label&&(m.push("label:"+c.label[0].toUpperCase()),delete c.label),n=c.address?c.address:c.lat+","+c.lng,delete c.address,delete c.lat,delete c.lng;for(var l in c)c.hasOwnProperty(l)&&m.push(l+":"+c[l]);m.length||0===o?(m.push(n),m=m.join("|"),d.push("markers="+encodeURI(m))):(m=d.pop()+encodeURI("|"+n),d.push(m))}if(g)for(var o=0;o<g.length;o++){var p=[];g[o].featureType&&p.push("feature:"+g[o].featureType.toLowerCase()),g[o].elementType&&p.push("element:"+g[o].elementType.toLowerCase());for(var q=0;q<g[o].stylers.length;q++)for(var r in g[o].stylers[q]){var s=g[o].stylers[q][r];("hue"==r||"color"==r)&&(s="0x"+s.substring(1)),p.push(r+":"+s)}var t=p.join("|");""!=t&&d.push("style="+t)}if(h){if(c=h,h=[],c.strokeWeight&&h.push("weight:"+parseInt(c.strokeWeight,10)),c.strokeColor){var u=b(c.strokeColor,c.strokeOpacity);h.push("color:"+u)}if(c.fillColor){var v=b(c.fillColor,c.fillOpacity);h.push("fillcolor:"+v)}var w=c.path;if(w.join)for(var x,q=0;x=w[q];q++)h.push(x.join(","));else h.push("enc:"+w);h=h.join("|"),d.push("path="+encodeURI(h))}var y=window.devicePixelRatio||1;return d.push("scale="+y),d=d.join("&"),e+d},j.prototype.addMapType=function(a,b){if(!b.hasOwnProperty("getTileUrl")||"function"!=typeof b.getTileUrl)throw"'getTileUrl' function required.";b.tileSize=b.tileSize||new google.maps.Size(256,256);var c=new google.maps.ImageMapType(b);this.map.mapTypes.set(a,c)},j.prototype.addOverlayMapType=function(a){if(!a.hasOwnProperty("getTile")||"function"!=typeof a.getTile)throw"'getTile' function required.";var b=a.index;delete a.index,this.map.overlayMapTypes.insertAt(b,a)},j.prototype.removeOverlayMapType=function(a){this.map.overlayMapTypes.removeAt(a)},j.prototype.addStyle=function(a){var b=new google.maps.StyledMapType(a.styles,{name:a.styledMapName});this.map.mapTypes.set(a.mapTypeId,b)},j.prototype.setStyle=function(a){this.map.setMapTypeId(a)},j.prototype.createPanorama=function(a){return a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||(a.lat=this.getCenter().lat(),a.lng=this.getCenter().lng()),this.panorama=j.createPanorama(a),this.map.setStreetView(this.panorama),this.panorama},j.createPanorama=function(b){var c=h(b.el,b.context);b.position=new google.maps.LatLng(b.lat,b.lng),delete b.el,delete b.context,delete b.lat,delete b.lng;for(var d=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],e=a({visible:!0},b),f=0;f<d.length;f++)delete e[d[f]];for(var g=new google.maps.StreetViewPanorama(c,e),f=0;f<d.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this)})}(g,d[f]);return g},j.prototype.on=function(a,b){return j.on(a,this,b)},j.prototype.off=function(a){j.off(a,this)},j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],j.on=function(a,b,c){if(-1==j.custom_events.indexOf(a))return b instanceof j&&(b=b.map),google.maps.event.addListener(b,a,c);var d={handler:c,eventName:a};return b.registered_events[a]=b.registered_events[a]||[],b.registered_events[a].push(d),d},j.off=function(a,b){-1==j.custom_events.indexOf(a)?(b instanceof j&&(b=b.map),google.maps.event.clearListeners(b,a)):b.registered_events[a]=[]},j.fire=function(a,b,c){if(-1==j.custom_events.indexOf(a))google.maps.event.trigger(b,a,Array.prototype.slice.apply(arguments).slice(2));else if(a in c.registered_events)for(var d=c.registered_events[a],e=0;e<d.length;e++)!function(a,b,c){a.apply(b,[c])}(d[e].handler,c,b)},j.geolocate=function(a){var b=a.always||a.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.success(c),b&&b()},function(c){a.error(c),b&&b()},a.options):(a.not_supported(),b&&b())},j.geocode=function(a){this.geocoder=new google.maps.Geocoder;var b=a.callback;a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")&&(a.latLng=new google.maps.LatLng(a.lat,a.lng)),delete a.lat,delete a.lng,delete a.callback,this.geocoder.geocode(a,function(a,c){b(a,c)})},google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(a){for(var b,c=new google.maps.LatLngBounds,d=this.getPaths(),e=0;e<d.getLength();e++){b=d.getAt(e);for(var f=0;f<b.getLength();f++)c.extend(b.getAt(f))}return c}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(a){var b=this.getBounds();if(null!==b&&!b.contains(a))return!1;for(var c=!1,d=this.getPaths().getLength(),e=0;d>e;e++)for(var f=this.getPaths().getAt(e),g=f.getLength(),h=g-1,i=0;g>i;i++){var j=f.getAt(i),k=f.getAt(h);(j.lng()<a.lng()&&k.lng()>=a.lng()||k.lng()<a.lng()&&j.lng()>=a.lng())&&j.lat()+(a.lng()-j.lng())/(k.lng()-j.lng())*(k.lat()-j.lat())<a.lat()&&(c=!c),h=i}return c}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(a){return google.maps.geometry?google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),a)<=this.getRadius():!0}),google.maps.LatLngBounds.prototype.containsLatLng=function(a){return this.contains(a)},google.maps.Marker.prototype.setFences=function(a){this.fences=a},google.maps.Marker.prototype.addFence=function(a){this.fences.push(a)},google.maps.Marker.prototype.getId=function(){return this.__gm_id},Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),j});(function($){"use strict";function handlePreloader(){if($('.preloader').length){$('.preloader').delay(200).fadeOut(500)}}
function headerStyle(){if($('.main-header').length){var windowpos=$(window).scrollTop();var siteHeader=$('.main-header');var scrollLink=$('.scroll-to-top');var sticky_header=$('.main-header .sticky-header');if(windowpos>100){siteHeader.addClass('fixed-header');sticky_header.addClass("animated slideInDown");scrollLink.fadeIn(300)}else{siteHeader.removeClass('fixed-header');sticky_header.removeClass("animated slideInDown");scrollLink.fadeOut(300)}}}
headerStyle();if($('.main-header li.dropdown ul').length){$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>')}
if($('.mobile-menu').length){var mobileMenuContent=$('.main-header .nav-outer .main-menu .navigation').html();$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');$('.mobile-menu .navigation').append(mobileMenuContent);$('.sticky-header .navigation').append(mobileMenuContent);$('.mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible')});$('.mobile-menu li.dropdown .dropdown-btn').on('click',function(){$(this).prev('ul').slideToggle(500)});$('.mobile-nav-toggler').on('click',function(){$('body').addClass('mobile-menu-visible')});$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible')})}
if($('.banner-slider').length){var slider=$('.banner-slider').bxSlider({pagerCustom:'#banner-pager',onSlideAfter:function(currentSlideNumber,totalSlideQty,currentSlideHtmlObject){console.log(currentSlideHtmlObject);$('.active-slide').removeClass('active-slide');$('.banner-slider > li').eq(currentSlideHtmlObject+1).addClass('active-slide')},onSliderLoad:function(){$('.banner-slider > li').eq(1).addClass('active-slide')},auto:!0,pause:7000,autoControls:!0,})}
if($('.single-item-carousel').length){$('.single-item-carousel').owlCarousel({loop:!0,margin:30,nav:!0,singleItem:!0,smartSpeed:700,autoHeight:!1,autoplay:!0,autoplayTimeout:10000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1},}})}
if($('.services-carousel').length){$('.services-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:!0,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:2},800:{items:3},1280:{items:4}}})}
if($('.team-carousel').length){$('.team-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:!0,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},768:{items:2},1024:{items:3}}})}
if($('.projects-carousel').length){$('.projects-carousel').owlCarousel({loop:!0,margin:40,nav:!0,smartSpeed:500,autoplay:!0,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1}}})}
if($('.projects-carousel-two').length){$('.projects-carousel-two').owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:500,autoplay:!0,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:3},1280:{items:4}}})}
if($('.testimonial-carousel').length){$('.testimonial-carousel').owlCarousel({loop:!0,margin:40,nav:!0,smartSpeed:500,autoplay:!0,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},768:{items:1},1024:{items:2}}})}
if($('.sponsors-carousel').length){$('.sponsors-carousel').owlCarousel({loop:!0,margin:15,nav:!0,smartSpeed:500,autoplay:!0,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:2},600:{items:3},768:{items:4},1024:{items:5},1280:{items:6}}})}
if($('.testimonial-carousel-two').length&&$('.thumbs-carousel').length){var $sync1=$(".testimonial-carousel-two"),$sync2=$(".thumbs-carousel"),flag=!1,duration=500;$sync1
.owlCarousel({loop:!1,items:1,margin:5,nav:!1,navText:['<span class="icon la la-angle-left"></span>','<span class="icon la la-angle-right"></span>'],dots:!1,autoplay:!0,autoplayTimeout:5000}).on('changed.owl.carousel',function(e){if(!flag){flag=!1;$sync2.trigger('to.owl.carousel',[e.item.index,duration,!0]);flag=!1}});$sync2
.owlCarousel({loop:!1,margin:5,items:1,nav:!1,navText:['<span class="icon la la-arrow-circle-o-left"></span>','<span class="icon la la-arrow-circle-o-right"></span>'],dots:!1,center:!1,autoplay:!0,autoplayTimeout:5000,responsive:{0:{items:1,autoWidth:!1},600:{items:1,autoWidth:!1},1024:{items:1,autoWidth:!1}},}).on('click','.owl-item',function(){$sync1.trigger('to.owl.carousel',[$(this).index(),duration,!0])}).on('changed.owl.carousel',function(e){if(!flag){flag=!0;$sync1.trigger('to.owl.carousel',[e.item.index,duration,!0]);flag=!1}})}
if($('.progress-line').length){$('.progress-line').appear(function(){var el=$(this);var percent=el.data('width');$(el).css('width',percent+'%')},{accY:0})}
if($('.count-box').length){$('.count-box').appear(function(){var $t=$(this),n=$t.find(".count-text").attr("data-stop"),r=parseInt($t.find(".count-text").attr("data-speed"),10);if(!$t.hasClass("counted")){$t.addClass("counted");$({countNum:$t.find(".count-text").text()}).animate({countNum:n},{duration:r,easing:"linear",step:function(){$t.find(".count-text").text(Math.floor(this.countNum))},complete:function(){$t.find(".count-text").text(this.countNum)}})}},{accY:0})}
if($('.filter-list').length){$('.filter-list').mixItUp({})}
if($('.custom-select-box').length){$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow')}
if($('.lightbox-image').length){$('.lightbox-image').fancybox({openEffect:'fade',closeEffect:'fade',helpers:{media:{}}})}
if($('.accordion-box').length){$(".accordion-box").on('click','.acc-btn',function(){var outerBox=$(this).parents('.accordion-box');var target=$(this).parents('.accordion');if($(this).hasClass('active')!==!0){$(outerBox).find('.accordion .acc-btn').removeClass('active')}
if($(this).next('.acc-content').is(':visible')){return!1}else{$(this).addClass('active');$(outerBox).children('.accordion').removeClass('active-block');$(outerBox).find('.accordion').children('.acc-content').slideUp(300);target.addClass('active-block');$(this).next('.acc-content').slideDown(300)}})}
if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1500)})}
if($('.wow').length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0});wow.init()}
$(window).on('scroll',function(){headerStyle()});$(window).on('load',function(){handlePreloader()})})(window.jQuery);if(ajaxurl===undefined)var ajaxurl="http://php7.commonsupport.com/smartman/wp-admin/admin-ajax.php";if(ajaxurl===undefined)var ajaxurl="http://php7.commonsupport.com/smartman/wp-admin/admin-ajax.php";/*! This file is auto-generated */
window.addComment=function(s){var u,f,v,y=s.document,p={commentReplyClass:"comment-reply-link",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=s.MutationObserver||s.WebKitMutationObserver||s.MozMutationObserver,i="querySelector"in y&&"addEventListener"in s,n=!!y.documentElement.dataset;function t(){r(),function(){if(!e)return;new e(d).observe(y.body,{childList:!0,subtree:!0})}()}function r(e){if(i&&(u=I(p.cancelReplyId),f=I(p.commentFormId),u)){u.addEventListener("touchstart",a),u.addEventListener("click",a);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return f.removeEventListener("keydown",t),e.preventDefault(),f.submit.click(),!1};f&&f.addEventListener("keydown",t);for(var n,r=function(e){var t,n=p.commentReplyClass;e&&e.childNodes||(e=y);t=y.getElementsByClassName?e.getElementsByClassName(n):e.querySelectorAll("."+n);return t}(e),d=0,o=r.length;d<o;d++)(n=r[d]).addEventListener("touchstart",l),n.addEventListener("click",l)}}function a(e){var t=I(p.temporaryFormId);t&&v&&(I(p.parentIdFieldId).value="0",t.parentNode.replaceChild(v,t),this.style.display="none",e.preventDefault())}function l(e){var t=this,n=m(t,"belowelement"),r=m(t,"commentid"),d=m(t,"respondelement"),o=m(t,"postid");n&&r&&d&&o&&!1===s.addComment.moveForm(n,r,d,o)&&e.preventDefault()}function d(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void r()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function I(e){return y.getElementById(e)}return i&&"loading"!==y.readyState?t():i&&s.addEventListener("DOMContentLoaded",t,!1),{init:r,moveForm:function(e,t,n,r){var d=I(e);v=I(n);var o,i,a,l=I(p.parentIdFieldId),m=I(p.postIdFieldId);if(d&&v&&l){!function(e){var t=p.temporaryFormId,n=I(t);if(n)return;(n=y.createElement("div")).id=t,n.style.display="none",e.parentNode.insertBefore(n,e)}(v),r&&m&&(m.value=r),l.value=t,u.style.display="",d.parentNode.insertBefore(v,d.nextSibling),u.onclick=function(){return!1};try{for(var c=0;c<f.elements.length;c++)if(o=f.elements[c],i=!1,"getComputedStyle"in s?a=s.getComputedStyle(o):y.documentElement.currentStyle&&(a=o.currentStyle),(o.offsetWidth<=0&&o.offsetHeight<=0||"hidden"===a.visibility)&&(i=!0),"hidden"!==o.type&&!o.disabled&&!i){o.focus();break}}catch(e){}return!1}}}}(window);eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('C M=(9($){2r.3r(2r.3x,{5B:9(x,t,b,c,d){z((t/=d/2)<1)E c/2*t*t*t*t+b;E-c/2*((t-=2)*t*t*t-2)+b},});C v=$(1h);C w=v.13();v.1F(9(){w=v.13();M.2Y(A)});$.3Z.5A=9(){C c=$(7),3m;c.K(9(){3m=c.1M().1c});9 1p(){C b=v.44();c.K(9(){C a=$(7),1c=a.1M().1c,13=a.39(A);z(1c+13<b||1c>b+w||c.y(\'D-5z\')!==A)E;c.O(\'7M\',"50% "+2o.1H((3m-b)*0.4)+"1g")})}v.18(\'5y 1F\',1p).1b(\'1p\')};$.3Z.2E=9(d){C f={1v:\'7i\',1M:1j,2n:9(a){}};$.3r(f,d);C g=7,w=$(1h).13();7.4c=9(){C c=((8P.67.6c().1N(\'7g\')!=-1)?1h:\'1l\'),3f=$(c).44(),5x=(3f+w);g.K(9(){C a=$(7);z(a.1S(f.1v)&&f.1v!=\'\'){E}C b=2o.1H(a.1M().1c)+f.1M,5w=b+(a.13());z((b<5x)&&(5w>3f)&&7.8K!=A){a.W(f.1v);f.2n(a)}})};$(1h).5y(7.4c);7.4c();$(1h).1F(9(e){w=e.68.5v})};$(3R).1D(9($){M.1K($)});E{7j:0,7p:0,1z:$(\'1z\'),1K:9(){$(\'L[y-D-5z="A"]\').K(9(){$(7).5A()});7.36();7.17();7.1C.1K();z(1h.2C.1y.1N(\'#\')>-1){$(\'a[1y="#\'+1h.2C.1y.1B(\'#\')[1]+\'"]\').1b(\'Y\')}$(\'.6I\').2t(\'.5u\').3H();$(\'.D-3J-7o\').18(\'Y\',9(){$(7).1m().1m().7t(\'3M\',9(){$(7).3O()})});7.5s();7.5r.2k();7.46.2k();7.5q();7.5p();7.5o();7.2j.1K();7.2u.5n();7.5h();7.1V();7.5d();7.57();7.56();7.Z();7.2Y(A)},2J:9(b){2M(9(a){M.2j.1p(a);M.2u.1p(a);M.46.2k(a);z($(\'.55\').1s>0){55.2J(a)}},1j,b)},3s:9(a){C d=3R;z(d.5O===\'65\'){z(a==\'13\')E d.1z.54;J E d.1z.53}J{z(a==\'13\')E d.52.54;J E d.52.53}},2Y:9(c){C d=3R;[].6N.6T(d.51(\'L[y-D-4Z]\'),9(a){C b=d.51(\'.7h\')[0],1w;z(1i b===\'R\')E;1w=b.4Y();a.1q.19=(-1w.19)+\'1g\';z(a.14(\'y-D-4Z\')==\'8z\'){a.1q.4X=1w.19+\'1g\';a.1q.8B=(M.3s(\'V\')-1w.V-1w.19)+\'1g\';a.1q.V=1w.V+\'1g\'}J{a.1q.4X=\'8I\';a.1q.V=M.3s(\'V\')+\'1g\'}z(a.2I!==1W&&a.2I.8Q==\'5G\'){z(a.2I.5J==\'M.2Y(A);\'){a.5L.5M(a.2I)}}})},5s:9(b){$(\'.5N\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C a=$(7);z(a.y(\'5Y\')==\'63\'){a.Y(9(){a.B(\'4b\').O("4W-34","6g")});a.6u(9(){a.B(\'4b\').O("4W-34","6A")})}a.B(\'.3J\').18(\'Y\',9(){a.B(\'.4V\').4Q("4O");a.B(\'.3a\').7c(\'3M\')});a.B(\'.3a\').18(\'Y\',9(){a.B(\'.4V\').4Q("4O");a.B(\'.3a\').7f(\'3M\')})})},36:9(d){$(\'.3b\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C c=$(7).y(\'2p-G\')!==R?($(7).y(\'2p-G\')-1):0;z($(7).y(\'3e\')==A)c=\'7l\';$(7).B(\'>F.1e>1f.1d>a, >F.1e>1f.1d>.Q-36-8m-8y\').2H(\'Y\').18(\'Y\',9(e){C a=$(7).1n(\'.3b\'),L=$(7).1n(\'.1e\'),3o=(A===a.y(\'3o\'))?A:H,3e=(A===a.y(\'3e\'))?A:H,4I=L.B(\'>1f.1d\').1S(\'Q-1k-G\'),8N=H;z(3o===H){z(!L.B(\'>1f.1d\').1S(\'Q-1k-G\')){a.B(\'>.1e>.1Z\').3t();a.B(\'>.1e>1f.1d\').U(\'Q-1k-G\');a.B(\'>.1e.D-L-G\').U(\'D-L-G\');L.B(\'>.1Z\').2g().4F(\'4E\',9(){$(7).O({13:\'\'})});L.B(\'>1f.1d\').W(\'Q-1k-G\');L.W(\'D-L-G\')}J{a.B(\'>.1e>.1Z\').3t();a.B(\'>.1e>1f.1d\').U(\'Q-1k-G\');a.B(\'>.1e>.D-L-G\').U(\'D-L-G\');L.U(\'D-L-G\')}}J{z(L.B(\'>1f.1d\').1S(\'Q-1k-G\')){L.B(\'>.1Z\').2g().3t();L.B(\'>1f.1d\').U(\'Q-1k-G\');L.U(\'D-L-G\')}J{L.B(\'>.1Z\').2g().4F(\'4E\',9(){$(7).O({13:\'\'})});L.B(\'>1f.1d\').W(\'Q-1k-G\');L.W(\'D-L-G\')}}z(4I!=L.B(\'>1f.1d\').1S(\'Q-1k-G\'))M.2J(L.B(\'>.1Z\'));e.1I();C b=$(7).1n(\'.1e\');b=b.1m().B(\'>.1e\').4B(b.2f(0));$(7).1n(\'.3b\').y({\'2p-G\':(b+1)})}).2c(c).1b(\'Y\')})},17:9(d){$(\'.28 > .4A\').K(9(b){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C c=$(7),2v=c.1m(\'.28.6b\'),2w=(\'P\'===2v.y(\'6n-18-4z\'))?\'4z\':\'Y\',4w=(\'P\'===2v.y(\'6F-6G\'))?A:H,4v=2B(2v.y(\'2p-G\'))-1;$(7).B(\'>.Q-17-3S>3T\').2H(\'Y\').18(\'Y\',9(e){e.1I()}).2H(2w).18(2w,9(e){z($(7).1S(\'Q-17-G\')){e.1I();E}C a=$(7).1n(\'.7a,.Q-17-3S\').B(\'>3T\'),b=a.4B(7),3U=$(7).1n(\'.4A\').B(\'>.7d\'),3V=3U.2c(b);a.U(\'Q-17-G\');$(7).W(\'Q-17-G\');3U.U(\'Q-17-1z-G\').U(\'D-L-G\');3V.W(\'Q-17-1z-G\').W(\'D-L-G\');z(4w===A)3V.O({\'27\':0}).Z({27:1});e.1I();$(7).1n(\'.28\').y({\'2p-G\':(b+1)})}).2c(4v).1b(2w)});$(\'.28.D-17-3Y\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).B(\'.D-17-3Y-3S 3T\').K(9(a){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).18(\'Y\',a,9(e){$(7).1m().B(\'.D-2D-G\').U(\'D-2D-G\');$(7).W(\'D-2D-G\');4t.7k(e.y);$(7).1n(\'.D-17-3Y\').B(\'.S-45\').1b(\'S.1Q\',e.y);e.1I();$(7).1n(\'.28\').y({\'G\':e.y})});z(a===0)$(7).W(\'D-2D-G\')})});M.3n()},4s:9(){$(\'.4s\').K(9(a){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).7y({X:1j,7N:7S})})},1C:{1K:9(){$(\'.8k, .8l\').K(9(){C a=$(7),4a,2L;z(a.y(\'D-1r-1U\')){4a=a.y(\'D-1r-1U\');2L=M.1C.4r(4a);z(2L){a.B(\'.2O-1r-1U\').3O();M.1C.2t(a,2L)}}J{a.B(\'.2O-1r-1U\').3O()}})},4r:9(a){z(\'R\'===1i(a)){E H}C b=a.8D(/(?:8F?:\\/{2})?(?:w{3}\\.)?8J(?:4q)?\\.(?:8L|4q)(?:\\/8M\\?v=|\\/)([^\\s&]+)/);z(1W!==b){E b[1]}E H},2t:9(c,d,f){z(38===R)E;z(\'R\'===1i(38.4p)){f=\'R\'===1i(f)?0:f;z(f>1j){4t.8T(\'8U 5D 5E 5F 2R 5H 5I\');E}2M(9(){M.1C.2t(c,d,f++)},1j);E}C g,$4o=c.5K(\'<F N="2O-1r-1U"><F N="4n"></F></F>\').B(\'.4n\'),16=c.y(\'D-1r-16\'),26={5P:d,5Q:3,5V:1,5W:1,30:1,5Z:0,60:0,61:0,62:1};16=16?4m.64(\'{"\'+16.25(/&/g,\'","\').25(/=/g,\'":"\')+\'"}\',9(a,b){E a===""?b:66(b)}):{};z(1i 16==\'3j\')26=$.3r(26,16);g=1Y 38.4p($4o[0],{V:\'1j%\',13:\'1j%\',69:d,26:26,34:{6a:9(e){z(c.y(\'D-1r-4l\')==\'P\')e.4k.4l().6d(A);e.4k.8W()}}});M.1C.1F(c);$(1h).18(\'1F\',9(){M.1C.1F(c)})},1F:9(a){C b=1.77,22,20,2x,2y,2e=a.6H(),24=a.5v();z((2e/24)<b){22=24*b;20=24}J{22=2e;20=2e*(1/b)}2x=-2o.1H((22-2e)/2)+\'1g\';2y=-2o.1H((20-24)/2)+\'1g\';22+=\'1g\';20+=\'1g\';a.B(\'.2O-1r-1U 4b\').O({6L:\'3u%\',2x:2x,2y:2y,V:22,13:20})}},6P:{2J:9(a){M.1V()}},5r:{2k:9(){$(\'.6R\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C c=$(7),3v=c.B(\'2A\'),1E=3v.1s,1D=0;z(1E>0){3v.K(9(a){C b=1Y 4j();b.4i=9(){1D++;z(1D==1E){1Y 3z(c.2f(0),{3A:\'.1O-1L\',3D:\'.1O-1L\',})}};b.2F=$(7).2G(\'2F\')})}J{1Y 3z(c.2f(0),{3A:\'.1O-1L\',3D:\'.1O-1L\',})}})},},46:{2k:9(){$(\'.7m\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});z((\'P\'===$(7).y(\'7n\'))){C c=$(7).B(\'2A\'),1E=c.1s,1D=0,29=$(7);$(7).y({\'1E\':1E});c.K(9(a){C b=1Y 4j();b.4i=9(){1D++;z(1D==1E){1Y 3z(29.2f(0),{3A:\'.2a-1L\',3D:\'.2a-1L\',})}};b.2F=$(7).2G(\'2F\')})}});M.1V()},},57:9(){$(\'.7q .7r\').K(9(){z($(7).y(\'I\')!==A)$(7).y({\'I\':A});J E;C a=$(7).y(\'X\')?$(7).y(\'X\'):\'7s\';1h.M.3I(a,$(7).B(\'2A\').4h())})},3I:9(a,b){z(b===R)E;b.1m().B(\'.G\').U(\'G\');b.W(\'G\');z(b.2K().1s>0)b=b.2K();J b=b.1m().B(\'2A\').4h();C c=2M(1h.M.3I,a,a,b)},5q:9(u){$(\'.D-45-7G\').K(9(f){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C g=$(7).y(\'S-i-16\'),2d=(\'P\'===g.30)?A:H,3N=(g.X!==R)?g.X:8,23=(\'P\'===g.1J)?A:H,1o=(\'P\'===g.1x)?A:H,1t=g.1a,1R=g.1A,2V=(\'P\'===g.4g)?A:H,4f=(g.4e!==R)?g.4e:5,41=(\'P\'===g.42)?A:H,43=(\'P\'===g.8O)?A:H,1G=H,21=H,1X=H;z(g.31>0){21=[8V,g.31]}z(g.32>0){1X=[4T,g.32]}C h=9(){};C j=9(){};C k=9(){};z(A===2V||A===43||A===41)1G=A;z(2d)2d=2B(3N)*3u;z(A===43){C l=3N;C m,$1T,$2X,2W,3X,2b;h=9(a){$2X=a;n();o()};C n=9(){m=$("<F>",{N:"5R"});$1T=$("<F>",{N:"1T"});m.5S($1T).5T($2X)};C o=9(){2b=0;2W=H;3X=5U(p,10)};C p=9(){z(2W===H){2b+=1/l;$1T.O({V:2b+"%"});z(2b>=1j){$2X.1b(\'S.2K\')}}};k=9(){2W=A};j=9(){5X(3X);o()}}z(A!==41){$(7).1u({3h:2d,1J:23,1x:1o,2U:1t,2S:1t,2Q:1G,2P:2V,1A:1R,35:H,48:H,40:21,4u:21,3Q:1X,3P:h,4x:j,4y:k})}J{C q=$(7);C r=q.2K(\'.D-6e\');C s=9(a){C b=7.6f;$(r).B(".S-2a").U("3E").2c(b).W("3E");z($(r).y("1u")!==R){t(b)}};r.18("Y",".S-2a",9(e){e.1I();C a=$(7).y("6h");q.1b("S.1Q",a)});C t=9(a){C b=r.y("1u").S.6i;C c=a;C d=H;6j(C i 6k b){z(c===b[i]){d=A}}z(d===H){z(c>b[b.1s-1]){r.1b("S.1Q",c-b.1s+2)}J{z(c-1===-1){c=0}r.1b("S.1Q",c)}}J z(c===b[b.1s-1]){r.1b("S.1Q",b[1])}J z(c===b[0]){r.1b("S.1Q",c-1)}};q.1u({3h:2d,2Q:1G,2U:1t,2S:1t,1J:23,1x:1o,6l:s,4C:6m,2P:2V,3P:h,4x:j,4y:k});r.1u({1A:4f,35:[4D,15],48:[6o,12],40:[6p,6],3Q:[4T,5],1x:1o,4C:1j,3P:9(a){a.B(".S-2a").2c(0).W("3E")}})}});M.1V()},6q:9(b){$.1O(1c.6r,{\'6s\':1c.6t,\'2Z\':\'6v\',\'16\':1c.D.6w.6x.6y(4m.6z(b))},9(a){})},5p:9(a){M.3n(\'.D-S-1O-45\')},5d:9(){$(\'.5u\').K(9(){z($(7).y(\'D-I\')!==A)$(7).y({\'D-I\':A});J E;$(7).3H()})},5o:9(){$(\'.D-3y-6B\').K(9(b){C c=$(7).y(\'3y\');$(7).3y(c.6C,9(a){$(7).1l(a.6D(c.6E))})})},2j:{1K:9(){$(\'.4G\').K(9(b){$(7).2E({2n:9(a){M.2j.2R(a)},1v:\'D-4H-I\'})})},2R:9(d){z(d.1m(\'F\').V()<10)E 0;C e=d.y(\'3q\'),4J=(\'P\'===d.y(\'6J\'))?\'1H\':\'6K\',4K=d.y(\'6M\'),4L=d.y(\'6O\'),4M=d.y(\'6Q\'),4N=d.y(\'6S\');z(\'P\'===4M){e=d.1m(\'F\').V();d.y(\'3q\',e)}C f=d.B(\'.2h\').V()+d.B(\'.2h:6U\').V();C g=d.B(\'.2h\').13();d.6V({6W:4K,6X:4L,6Y:4J,3x:\'6Z\',70:9(a,b,c){$(7.29).B(\'.2h\').71(2o.1H(c));$(7.29).B(\'.2h\').72();$(7.29).O({\'V\':e,\'13\':e})},73:0,74:4N,3q:e,})},1p:9(a){a.B(\'.4G\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});M.2j.2R($(7))})}},2u:{5n:9(){$(\'.75\').K(9(){$(7).2E({2n:9(a){M.2u.1p(a)},1v:\'D-76-I\'})})},1p:9(c){$(\'.D-4P-1T .D-Q-4P\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).O({V:\'5%\'}).2g().Z({V:7.14(\'y-79\')+\'%\'},{37:2B(7.14(\'y-1a\')),3x:\'5B\',7b:9(a,b){z(b.4R/b.4S>0.3)7.7e(\'Q-4d\')[0].1q.27=b.4R/b.4S}}).B(\'.Q-4d\').O({27:0})})}},5h:9(){$(\'.4U\').K(9(){z(7.14(\'y-T\')===1W||7.14(\'y-T\')===R||7.14(\'y-T\')===\'\')E;C b=$(7),2T={2Z:\'4U\',T:$(7).y(\'T\')};7.3W(\'y-T\');$.3L({3G:3F.3C,3B:\'3w\',3p:\'3k\',y:2T,3i:9(a){b.B(\'58\').1l(a.1l).59(a.7u)}})});$(\'.7v\').K(9(b){z(7.14(\'y-T\')===1W||7.14(\'y-T\')===R||7.14(\'y-T\')===\'\')E;C c=$(7),2T={2Z:\'7w\',T:$(7).y(\'T\')};7.3W(\'y-T\');$.3L({3G:3F.3C,3B:\'3w\',3p:\'3k\',y:2T,3i:9(a){c.B(\'58\').1l(a.1l)}})});$(\'.7x\').K(9(d){z(7.14(\'y-T\')===1W||7.14(\'y-T\')===R||7.14(\'y-T\')===\'\')E;C e=$(7),5a={2Z:\'7z\',T:$(7).y(\'T\')};7.3W(\'y-T\');C f=$(7).y(\'7A\');$.3L({3G:3F.3C,3B:\'3w\',3p:\'3k\',y:5a,3i:9(a){C b=e.y(\'7B\');e.B(\'.5b\').1l(a.1l);e.B(\'.5b\').59(\'<F N="7C">\'+a.7D+\'</F>\');C c=(\'P\'===f.7E)?A:H,1o=(\'P\'===f.7F)?A:H,5c=(\'P\'===f.7H)?A:H;z(2===b){e.B(\'.D-7I-S\').1u({1J:c,1x:1o,2U:7J,2S:7K,2Q:A,1A:1,2P:5c})}}})})},3n:9(){z(1i $().1u!=\'9\')E;$(\'[y-S-16]\').K(9(a){C b=$(7).y(\'S-16\');z(1i b!==\'3j\')E;z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).2G({\'y-S-16\':1W});C c=(\'P\'===b.30)?A:H,23=(\'P\'===b.1J)?A:H,1o=(\'P\'===b.1x)?A:H,1t=(b.1a!==R)?b.1a:7L,1R=(b.1A!==R)?b.1A:1,21=(b.31!==R)?b.31:1,1X=(b.32!==R)?b.32:1,3g=(\'P\'===b.4g)?A:H,5e=(\'P\'===b.42)?A:H,1G=H;z(3g===A){1G=A;1R=1}$(7).1u({3h:c,1J:23,1x:1o,42:5e,2U:1t,2S:1t,2Q:1G,2P:3g,1A:1R,7O:H,35:[4D,1R],48:[7P,21],40:[7Q,1X],4u:H,3Q:[7R,1X],})});M.1V()},1V:9(){z(1i($.5f)==\'3j\'){$("a.D-7T-7U:7V(.D-5g-I)").W(\'D-5g-I\').2H(\'Y\').5f({7W:\'7X\',7Y:A,7Z:A,27:0.85,81:\'82\',83:H,84:\' / \',86:A,30:A,87:0,88:H,89:\'<F N="8a"> 		                <F N="8b"> 		                  <F N="8c"> 		                  <F N="8d"> 		                    <F N="8e"> 		                      <F N="8f D-8g"></F> 		                      <F N="8h"> 		                        <F N="8i"> 		                          <a N="8j" 1y="#"><i N="3d-5i-5j"></i></a> 		                          <a N="8n" 1y="#"><i N="3d-5i-19"></i></a> 		                        </F> 		                        <F 8o="8p"></F> 		                        <F N="8q"> 		                         <F N="8r">&8s;</F> 		                          <F N="8t"> 		                            <p N="8u">0 / 0</p> 		                          </F> 		                          <p N="8v"></p> 		                          <a N="8w" 1y="#"><i N="3d-3J"></i></a> 		                        </F> 		                      </F> 		                    </F> 		                  </F> 		                  </F> 		                </F> 		              </F> 		              <F N="8x"></F>\'})}},56:9(){$(\'a[1y^="#"]\').18(\'Y\',9(e){z(2C.5k.25(/^\\//,\'\')==7.5k.25(/^\\//,\'\')&&2C.5l==7.5l&&7.5m.1N(\'#!\')===0){C a=$(7.5m.25(\'!\',\'\'));z(a.1s){$(\'1l,1z\').2g().Z({44:a.1M().1c-80},8A)}}})},Z:9(){$(\'.D-2i\').K(9(f){$(7).2E({2n:9(c){C d=c.2f(0).8C,X=0,1a=\'2s\',2q=0;z(d.1N(\'D-Z-X-\')>-1){X=d.1B(\'D-Z-X-\')[1].1B(\' \')[0];c.O({\'33-X\':X+\'8E\'});c.U(\'D-Z-X-\'+X);2q+=2B(X)}z(d.1N(\'D-Z-1a-\')>-1){1a=d.1B(\'D-Z-1a-\')[1].1B(\' \')[0];c.O({\'33-37\':1a});c.U(\'D-Z-1a-\'+1a)}z(d.1N(\'D-Z-47-\')>-1){C e=d.1B(\'D-Z-47-\')[1].1B(\' \')[0];2q+=8G(1a)*3u;c.U(\'D-2i\').W(\'2i \'+e);2M(9(a,b){a.U(\'2i D-2i D-Z-47-\'+b+\' \'+b);a.O({\'33-X\':\'\',\'33-37\':\'\'})},2q,c,e)}},1v:\'D-4H-I\'})})}}}(2r));(9($){$.3Z.3H=9(){E 7.K(9(){C a=7.4Y();C b=$(7).y(\'8H\'),2l=$(7).B(\'11\').5t(),2z=$(7).B(\'11\').39(),3K=$(7).5t(),2m=$(7).39();z(1i(b)==\'R\'){$(7).B(\'11\').O(\'3l-19\',-2l/2);$(7).2N().B(\'11\').O(\'1P\',2m+10)}J{C c=$(7).y(\'8R\');C d=-10;z(1i c==\'R\')c=\'1c\';$(7).W(c);$(7).B(\'11\').2G({\'1q\':\'\'});8S(c){49\'5j\':{C e;e=2m/2-2z/2;$(7).B(\'11\').O(\'19\',3K+10);$(7).B(\'11\').O(\'1P\',e);$(7).2N().B(\'11\').O(\'19\',3K-d);3c}49\'1P\':{$(7).B(\'11\').O(\'3l-19\',-2l/2);$(7).2N().B(\'11\').O(\'1P\',-2z+d);3c}49\'19\':{C e,5C=5;e=2m/2-2z/2;$(7).B(\'11\').O(\'19\',-2l-5C);$(7).B(\'11\').O(\'1P\',e);3c}78:{$(7).B(\'11\').O(\'3l-19\',-2l/2);$(7).2N().B(\'11\').O(\'1P\',2m-d)}}}})}}(2r));',62,555,'|||||||this||function|||||||||||||||||||||||||data|if|true|find|var|kc|return|div|active|false|loaded|else|each|section|kc_front|class|css|yes|ui|undefined|owl|cfg|removeClass|width|addClass|delay|click|animate||span||height|getAttribute||options|tabs|on|left|speed|trigger|top|kc_accordion_header|kc_accordion_section|h3|px|window|typeof|100|state|html|parent|closest|_pagination|update|style|video|length|_speed|owlCarousel|classToAdd|rect|pagination|href|body|items|split|youtube_row_background|ready|total|resize|_singleItem|round|preventDefault|navigation|init|grid|offset|indexOf|post|bottom|goTo|_items|hasClass|bar|bg|pretty_photo|null|_mobile|new|kc_accordion_content|ifr_h|_tablet|ifr_w|_navigation|inner_height|replace|playerVars|opacity|kc_tabs|el|item|percentTime|eq|_auto_play|inner_width|get|stop|percent|animated|piechar|masonry|span_w|this_h|callbackFunction|Math|tab|timeout|jQuery||add|progress_bar|tab_group|tab_event|marginLeft|marginTop|span_h|img|parseInt|location|title|viewportChecker|src|attr|off|nextElementSibling|refresh|next|youtubeId|setTimeout|hover|kc_wrap|autoHeight|singleItem|load|paginationSpeed|data_send|slideSpeed|_auto_height|isPause|elem|row_action|action|autoplay|tablet|mobile|animation|events|itemsDesktop|accordion|duration|YT|outerHeight|show_contact_form|kc_accordion_wrapper|break|sl|closeall|viewportTop|_autoheight|autoPlay|success|object|json|margin|el_top|owl_slider|allowopenall|dataType|size|extend|viewport|slideUp|1000|imgs|POST|easing|countdown|Masonry|itemSelector|method|ajax_url|columnWidth|synced|kc_script_data|url|kcTooltip|image_fade_delay|close|this_w|ajax|slow|_delay|remove|afterInit|itemsMobile|document|nav|li|tab_list|new_panel|removeAttribute|tick|slider|fn|itemsTablet|_show_thumb|showthumb|_progress_bar|scrollTop|carousel|image_gallery|eff|itemsDesktopSmall|case|youtubeUrl|iframe|checkElements|label|num_thumb|_num_thumb|autoheight|first|onload|Image|target|mute|JSON|ifr_inner|container|Player|be|getID|counterup|console|itemsTabletSmall|active_section|effect_option|afterMove|startDragging|mouseover|kc_wrapper|index|responsiveRefreshRate|1199|normal|slideDown|kc_piechart|pc|changed|_linecap|_barColor|_trackColor|_autowidth|_linewidth|hidden|progress|toggleClass|now|end|479|kc_facebook_recent_post|map_popup_contact_form|pointer|paddingLeft|getBoundingClientRect|fullwidth||querySelectorAll|documentElement|clientWidth|clientHeight|kc_video_play|smooth_scroll|image_fade|ul|before|atts_data|result_twitter_feed|_autoHeight|tooltips|_showthumb|prettyPhoto|pt|ajax_action|arrow|right|pathname|hostname|hash|run|countdown_timer|carousel_post|carousel_images|blog|google_maps|outerWidth|kc_tooltip|innerHeight|elemBottom|viewportBottom|scroll|parallax|kc_parallax|easeInOutQuart|ext_left|many|attempts|to|SCRIPT|YouTube|api|innerHTML|prepend|parentNode|removeChild|kc_google_maps|compatMode|playlist|iv_load_policy|progressBar|append|prependTo|setInterval|enablejsapi|disablekb|clearTimeout|wheel|controls|showinfo|rel|loop|disable|parse|BackCompat|decodeURIComponent|userAgent|currentTarget|videoId|onReady|group|toLowerCase|setLoop|sync2|currentItem|auto|owlItem|visibleItems|for|in|afterAction|200|open|979|768|update_option|kc_ajax_url|security|kc_ajax_nonce|mouseleave|kc_update_option|tools|base64|encode|stringify|none|timer|date|strftime|template|effect|option|innerWidth|kc_button|linecap|square|maxWidth|barcolor|forEach|trackcolor|single_img|autowidth|kc_blog_masonry|linewidth|call|after|easyPieChart|barColor|trackColor|lineCap|easeOutBounce|onStep|text|show|scaleLength|lineWidth|kc_progress_bars|pb||default|value|kc_tabs_nav|step|fadeIn|kc_tab|getElementsByClassName|fadeOut|webkit|kc_clfw|visible|win_height|log|100000|kc_image_gallery|image_masonry|but|win_width|image_fadein_slider|image_fadein|3000|hide|header_html|kc_wrap_instagram|kc_instagrams_feed|kc_twitter_feed|counterUp|kc_twitter_timeline|owl_option|display_style|button_follow_wrap|header_data|show_navigation|show_pagination|images|auto_height|tweet|300|400|450|backgroundPosition|time|itemsCustom|980|640|480|2000|pretty|photo|not|theme|dark_rounded|allow_resize|allow_expand||animation_speed|fast|deeplinking|counter_separator_label||show_title|horizontal_padding|overlay_gallery|markup|pp_pic_holder|pp_content_container|pp_left|pp_right|pp_content|pp_loaderIcon|spinner|pp_fade|pp_hoverContainer|pp_next|kc_row|kc_column|header|pp_previous|id|pp_full_res|pp_details|ppt|nbsp|pp_nav|currentTextHolder|pp_description|pp_close|pp_overlay|icon|row|500|paddingRight|className|match|ms|https|parseFloat|tooltip|0px|youtu|done|com|watch|clickitself|progressbar|navigator|tagName|position|switch|warn|Too|999|playVideo'.split('|'),0,{}));/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document)