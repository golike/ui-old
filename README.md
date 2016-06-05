ui.js
=====

A no fuss library for interacting with html controls. All you have to do is include ui.js on your page, and it will automatically scan all of the controls on the page at load, and add them to the UI object. Additionally, if your code adds any new elements after load, call the ui.init() function to update UI.

To get the value of a control on the page, call ui.theelementid.value(). To change the value, call ui.theelementid.value(newValue). To access the element itself, useful for binding events, call ui.theelementid.element.

UI.js does not require any dependencies.

Supported control types:
------------------------

* input:text
* input:radio
* input:checkbox
* input:range
* input:password
* select
* textarea

Additional functionality:
-------------------------

For radios and checkboxes, UI automatically sets and removes a 'selected' class from any corresponding labels (that have the 'for' attribute set).
