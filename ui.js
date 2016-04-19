var ui = {};

(function() {
	'use strict';
	var i, j;

	ui.init = function() {
		var e = document.getElementsByTagName('input');

		for (i = 0; i < e.length; i++) {
			switch (e[i].type) {

				case 'radio':
					var radioElements = [];

					for (j = 0; j < e.length; j++) {
						if (e[j].type === 'radio' && e[j].name === e[i].name) {
							radioElements.push(e[j]);
						}
					}

					if (ui[e[i].name] === undefined) {
						ui[e[i].name] = {
							elements: radioElements,
							type: 'radio',
							value: function(val) {
								if (val !== undefined) {
									for (i = 0; i < this.elements.length; i++) {
										if (this.elements[i].value === val.toString()) {
											this.elements[i].checked = true;
											return this.elements[i].value;
										}
									}
								} else {
									for (i = 0; i < this.elements.length; i++) {
										if (this.elements[i].checked) {
											return this.elements[i].value;
										}
									}
								}
							}
						};
					}
					break;

				case 'checkbox':
					if (ui[e[i].id] === undefined) {
						ui[e[i].id] = {
							element: e[i],
							type: 'checkbox',
							value: function(val) {
								if (val !== undefined) {
									this.element.checked = val;
								}
								return this.element.value;
							}
						};
					}
					break;

				case 'text':
					if (ui[e[i].id] === undefined) {
						ui[e[i].id] = {
							element: e[i],
							type: 'text',
							value: function(val) {
								if (val !== undefined) {
									this.element.value = val;
								}
								return this.element.value;
							}
						};
					}
					break;

				case 'color':
					if (ui[e[i].id] === undefined) {
						ui[e[i].id] = {
							element: e[i],
							type: 'text',
							value: function(val) {
								if (val !== undefined) {
									this.element.value = val;
								}
								return this.element.value;
							}
						};
					}
					break;

				case 'range':
					if (ui[e[i].id] === undefined) {
						ui[e[i].id] = {
							element: e[i],
							type: 'range',
							value: function(val) {
								if (val !== undefined) {
									this.element.value = val;
								}
								return this.element.value;
							}
						};
					}
					break;

				case 'password':
					if (ui[e[i].id] === undefined) {
						ui[e[i].id] = {
							element: e[i],
							type: 'password',
							value: function(val) {
								if (val !== undefined) {
									this.element.value = val;
								}
								return this.element.value;
							}
						};
					}
					break;
			}
		}

		e = document.getElementsByTagName('select');
		for (i = 0; i < e.length; i++) {

			if (ui[e[i].id] === undefined) {
				ui[e[i].id] = {
					element: e[i],
					type: 'select',
					value: function(val) {
						if (val !== undefined) {
							val = val.toString();
							for (j = 0; j < this.element.options.length; j++) {
								if (this.element.options[j].value === val) {
									this.element.selectedIndex = j;
									return this.element.options[j].value;
								}
							}
						} else {
							return this.element.options[this.element.selectedIndex].value;
						}
					}
				};
			}
		}

		e = document.getElementsByTagName('textarea');
		for (i = 0; i < e.length; i++) {
			if (ui[e[i].id] === undefined) {
				ui[e[i].id] = {
					element: e[i],
					type: 'textarea',
					value: function(val) {
						if (val !== undefined) {
							this.element.value = val;

						}
						return this.element.value;
					}
				};
			}
		}
	};
	ui.init();
})();
