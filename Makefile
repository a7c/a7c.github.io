all:
	elm make resources.elm --output resources.js
	elm make install.elm --output install.js
	elm make basicweb.elm --output basic.js
	elm make checkmarkanon.elm --output anon.js
	elm make commander.elm --output commander.js
	elm make andersen.elm --output andersen.js
	elm make collaborators.elm --output collaborators.js
	elm make checkmark.elm --output checkmark.js
