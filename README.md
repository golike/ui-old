ui.js

A no fuss library for interacting with html controls. All you have to do is include ui.js on your page, and it will automatically scan all of the controls on the page, and add them to the ui object.

To get the value of a control on the page, call ui.theelementid.value(). To change the value, call ui.theelementid.value(newValue). For example, if you have <input id="username" type="text"/>, you can get the value of the control with ui.username.value() and you can change its value with ui.username.value('johndoe').

Supported control types:

input:text
input:radio
input:checkbox
input:range
select
textarea