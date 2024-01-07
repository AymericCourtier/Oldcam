function init_marmoset_viewer( _fileName, _width = 800, _height = 600 ) {
	marmoset.embed( 
		'./' + _fileName, 
		{ 
			width: _width, 
			height: _height, 
			autoStart: false, 
			fullFrame: false, 
			pagePreset: false 
		}
	);
}