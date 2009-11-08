dependencies = {
	layers: [
		{
			name: "../dojox/rails.js",
			dependencies: [
				"dojox.rails",
				"dojox.rails.listeners",
				"dojox.rails.decorators.common",
				"dojox.rails.decorators.Request",
				"dojox.rails.decorators.Updater",
				"dojox.rails.decorators.Observer",
				"dojox.rails.decorators.FieldObserver",
				"dojox.rails.decorators.FormObserver",
				"dojox.rails.decorators.RemoteForm",
				"dojox.rails.decorators.RemoteLink"
			]
		}
	],

	prefixes: [
		[ "dojox", "../dojox" ]
	]
};
