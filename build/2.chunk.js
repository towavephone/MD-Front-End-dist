webpackJsonp([2],{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(44);
	var Index = React.createClass({
		displayName: "Index",

		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "page-intro" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-md-12" },
								React.createElement(
									"ol",
									{ className: "breadcrumb" },
									React.createElement(
										"li",
										null,
										React.createElement("i", { className: "fa fa-home pr-10" }),
										React.createElement(
											"a",
											{ href: "#app/index" },
											"\u9996\u9875"
										)
									),
									React.createElement(
										"li",
										{ className: "active" },
										"\u9875\u9762\u672A\u627E\u5230"
									)
								)
							)
						)
					)
				),
				React.createElement(
					"section",
					{ className: "main-container" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "main col-md-6 col-md-offset-3" },
								React.createElement(
									"h1",
									{ className: "title" },
									"\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"
								),
								React.createElement("br", null),
								React.createElement(
									"p",
									null,
									"\u670D\u52A1\u5668\u7AEF\u672A\u627E\u5230\u8BE5\u9875\u9762\uFF0C\u8BF7\u8FD4\u56DE",
									React.createElement(
										"a",
										{ href: "#app/index" },
										"\u9996\u9875"
									),
									"\u3002"
								),
								React.createElement(
									"form",
									{ role: "search" },
									React.createElement(
										"div",
										{ className: "form-group has-feedback" },
										React.createElement("input", { type: "text", className: "form-control", placeholder: "\u641C\u7D22" }),
										React.createElement("i", { className: "fa fa-search form-control-feedback" })
									)
								)
							)
						)
					)
				)
			);
		}
	});
	module.exports = Index;

/***/ })

});