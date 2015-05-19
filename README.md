# Move
Responsively move elements to different locations based on width breakpoints. 

## Code Example
```
$('#content .desc').move({
	breakpoint: 1000,
	newLocation: '#content h2',
	oldLocation: '#content .container',
	methods: {
		up:   'appendTo',
		down: 'insertAfter'
	}
});
```

## Options
###breakpoint
Your width based breakpoint, eg. `1000`.
Default: **null**

###newLocation
The new location for the element to be moved to. eg `#content`.
Default: **null**

###oldLocation
The old location for the element to be moved back to. eg `#content .container`.
Default: **null**

###methods
The methods jQuery will use for handling moving your element around the DOM.
```
methods: {
	up:   'appendTo',
	down: 'insertAfter'
}
```
Default for both `up` and `down`: **appendTo**

Valid properties: **appendTo**, **prependTo**, **insertAfter**, and **insertBefore**