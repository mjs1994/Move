# Move
Responsively move elements to different locations based on width breakpoints. 

## Demo
[Click here](http://michaelsmyth.co.uk/move/)

## Code Example
```
$('#content .desc').move({
	breakpoint: 1000,
	oldLocation: '#content .container',
	newLocation: '#content h2',
	methods: {
		o: 'appendTo',
		n: 'insertAfter'
	}
});
```

## Options
###breakpoint
Your width based breakpoint, eg. `1000`.
Default: **null**

###oldLocation
The old location for the element to be moved back to. eg `#content .container`.
Default: **null**

###newLocation
The new location for the element to be moved to. eg `#content`.
Default: **null**

###methods
The methods jQuery will use for handling moving your element around the DOM.
```
methods: {
	o: 'appendTo',
	n: 'insertAfter'
}
```
Default for both `o` and `n`: **appendTo**, where `o` is the method for moving the element back to it's **oldLocation**, and `n` is the method for moving the element into it's **newLocation**.

Valid properties: **appendTo**, **prependTo**, **insertAfter**, and **insertBefore**