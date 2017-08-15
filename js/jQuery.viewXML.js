 (function( $ ) {
	'use strict';
	$.fn.viewXML = function(data, options) {

		console.time("viewXML");
		var viewXML = {
			defaults : {
				debug: true
			},
			template: {}
		};
    var doNothing = function(){};
    var debug = function (i, str){option.debug ? console.log("debug : "+ str || '' +" : ", i) : doNothing()};
		var option = $.extend({}, viewXML.defaults, options);
    (data!=null || data!=undefined) ? (doNothing()) : (alert("XML NOT AVAILABLE !!"));
    var $self = $(this);
    var xmlData = data;
		//debug(option);
		//debug( $self);
    var reg = xmlData.match(/<(.*?)>/gi);
    for(var node of reg){
      debug(node, "node");
      var nodeNew = node.replace(':', '_');
      var innerNode = node.substring(1, node.length-1);
      innerNode = '&lt' + innerNode + '&gt' + '<br>';
      (nodeNew.indexOf('/') > -1) ? nodeNew = innerNode + nodeNew.replace('>', ' >') : nodeNew = nodeNew.replace('>', ' attr="node">') + innerNode;
      xmlData = xmlData.replace(node, nodeNew);
      debug(xmlData, 'xmlData');

    }
    var result = xmlData.split(reg);
    debug(result, 'result');
    //var xml = $.parseXML( xmlData );
    var html = $.parseHTML( xmlData );
    //debug(xml, 'xml');
    var elem2 = $('<div class="col-xs-6">');
    elem2.append(html);
    debug(elem2, 'elem2');
    $self.append(elem2);



    console.timeEnd("viewXML");
		return this;
	};

})(jQuery );
