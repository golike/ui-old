var ui = {};

(function() {
	'use strict';
	var i;
	var size;

	ui._updateSize = function() {
		var prevSize = size;

		if (window.innerWidth <= 600) {
			size = 's';
		} else if (window.innerWidth <= 768) {
			size = 'm';
		} else if (window.innerWidth <= 1200) {
			size = 'l';
		} else {
			size = 'xl';
		}
		if (prevSize !== size) {
			var body = document.getElementsByTagName('body')[0];
			body.className =
				(body.className.split(' ').join(',')
					.split('size-s').join('')
					.split('size-m').join('')
					.split('size-l').join('')
					.split('size-xl').join('')
					.split(',').join(' ') + ' size-' + size).trim();
		}
	};

	window.addEventListener('resize', ui._updateSize);

	ui.init = function() {
		ui._updateSize();

		var e = document.getElementsByTagName('input');
		ui._inputs = [];
		for (i = 0; i < e.length; i++) {
			ui._inputs.push(e[i]);
		}

		e = document.getElementsByTagName('label');
		ui._labels = [];
		for (i = 0; i < e.length; i++) {
			ui._labels.push(e[i]);
		}

		ui._inputs.forEach(function(element) {
			switch (element.type) {
				case 'radio':
					if (ui[element.name] === undefined) {
						ui[element.name] = {
							elements: ui._inputs.filter(function(e) {
								return e.type === 'radio' && e.name === element.name;
							}),
							type: 'radio',
							value: function(val) {
								if (val !== undefined) {
									var intendedElements = this.elements.filter(function(element) {
										return element.value === val;
									});

									if (intendedElements.length > 0) {
										intendedElements[0].checked = true;
										return intendedElements[0].value;
									} else {
										return null;
									}
								} else {
									var checkedElements = this.elements.filter(function(element) {
										return element.checked === true;
									});
									if (checkedElements.length > 0) {
										return checkedElements[0].value;
									} else {
										return null;
									}
								}
							}
						};
					}

					// add/remove 'selected' class to related labels if it's checked
					for (var i = 0; i < element.labels.length; i++) {
						if (element.checked) {
							element.labels[i].classList.add('selected');
						} else {
							element.labels[i].classList.remove('selected');
						}
					}

					// set a listener to add/remove 'selected' class for related labels on change
					element.onchange = function() {
						var thisElement = this;
						ui._inputs.filter(function(element) {
							return element.type === 'radio' && element.name === thisElement.name;
						}).forEach(function(element) {
							for (var i = 0; i < element.labels.length; i++) {
								var label = element.labels[i];
								if (label.htmlFor === thisElement.id) {
									label.classList.add('selected');
								} else {
									label.classList.remove('selected');
								}
							}
						});
					};
					break;

				case 'checkbox':
					if (ui[element.name] === undefined) {
						ui[element.name] = {
							element: element,
							type: 'checkbox',
							value: function() {
								return function(val) {
									if (val !== undefined) {
										this.element.checked = val;
									}
									return this.element.checked;
								};
							}()
						};
					}

					// add/remove 'selected' class to related labels if it's checked
					for (i = 0; i < element.labels.length; i++) {
						var label = element.labels[i];
						if (element.checked) {
							label.classList.add('selected');
						} else {
							label.classList.remove('selected');
						}
					}

					// set a listener to add/remove 'selected' class for related labels on change
					element.onchange = function() {
						for (var i = 0; i < this.labels.length; i++) {
							var label = this.labels[i];
							if (this.checked) {
								label.classList.add('selected');
							} else {
								label.classList.remove('selected');
							}
						}
					};

					break;

				case 'text':
					if (ui[element.id] === undefined) {
						ui[element.id] = {
							element: element,
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
					if (ui[element.id] === undefined) {
						ui[element.id] = {
							element: element,
							type: 'color',
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
					if (ui[element.id] === undefined) {
						ui[element.id] = {
							element: element,
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
					if (ui[element.id] === undefined) {
						ui[element.id] = {
							element: element,
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
		});

		e = document.getElementsByTagName('select');
		ui._selects = [];
		for (i = 0; i < e.length; i++) {
			ui._selects.push(e[i]);
		}

		ui._selects.forEach(function(select) {
			if (ui[select.id] === undefined) {
				ui[select.id] = {
					element: select,
					type: 'select',
					value: function(val) {
						if (val !== undefined) {
							val = val.toString();
							for (var j = 0; j < this.element.options.length; j++) {
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
		});

		e = document.getElementsByTagName('textarea');
		for (i = 0; i < e.length; i++) {
			if (ui[e[i].id] === undefined) {
				ui[e[i].id] = {
					element: e[i],
					type: 'textarea',
					value: function(val) {
						if (val !== undefined) { this.element.value = val; }
						return this.element.value;
					}
				};
			}
		}

	};
	ui.init();
})();
