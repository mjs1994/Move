/**
 * Move.js v2.0.0
 */

import $ from 'jquery';

const defaults = {
  breakpoint: null,
  oldLocation: null,
  newLocation: null,
  onMove: null,
  movedClass: 'moved',
  methods: {
    o: 'appendTo',
    n: 'appendTo'
  }
};

const validMethod = (method) => {
  if (method === 'appendTo' || method === 'prependTo' || method === 'insertBefore' || method === 'insertAfter') {
    return 1;
  }

  return 0;
};

const logError = (message) => {
  if (!message) {
    return 0;
  }

  console.error(`[Move]: ${message}`);

  return 1;
};

$.fn.move = function(args) {
  const options = {...defaults, ...args};

  if (!validMethod(options.methods.o)) {
    logError('Please enter a valid method for scaling up. Valid properties are: appendTo, prependTo, insertBefore, and insertAfter.');

    return 0;
  }

  if (!validMethod(options.methods.n)) {
    logError('Please enter a valid method for scaling down. Valid properties are: appendTo, prependTo, insertBefore, and insertAfter.');

    return 0;
  }

  const moveElements = (element) => {
    const width = ((window.innerWidth) ? window.innerWidth : document.documentElement.clientWidth);
    let method;

    if (element.length) {
      if (width <= options.breakpoint && !element.hasClass(options.movedClass)) {
        method = options.methods.n;
        element.addClass(options.movedClass);
        element[method](options.newLocation);

        if (options.onMove !== null) {
          options.onMove('newLocation', element);
        }
      }
      if (width > options.breakpoint && element.hasClass(options.movedClass)) {
        method = options.methods.o;
        element.removeClass(options.movedClass);
        element[method](options.oldLocation);
        if (options.onMove !== null) {
          options.onMove('oldLocation', element);
        }
      }
    }
  };

  return $(this).each(function() {
    const element = $(this);

    moveElements(element);
    setTimeout(() => moveElements(element), 300);
    $(window).resize(() => moveElements(element));
  });
};
