<?php
	function sx($name){
		$return = '';
		switch($name){
		case 'api_url':
			$return = 'http://moresharesforyou.com/sx/';
		break;
		case 'plugin_url';
			$return = plugins_url()."/social-exchange-plugin/";
		break;
		default:
			$return =  '';
		break;
		}

		return $return;
	}
?>