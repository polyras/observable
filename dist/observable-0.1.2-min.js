var Observable={subscribe:function(a,b){this.observers=this.observers||{};this.observers[a]=this.observers[a]||[];this.observers[a].push(b)},unsubscribe:function(a,b){this.observers[a]=$.grep(this.observers[a],function(d){return d!=b})},notify:function(){if(this.observers){var a=this.observers[arguments[0]];if(a){var b=Array.prototype.slice.call(arguments,1);jQuery.each(a,function(d,c){c.apply(null,b)})}}},bubble:function(){var a=this,b=arguments[0];jQuery.each(Array.prototype.slice.call(arguments,
1),function(d,c){b.subscribe(c,function(){var e=Array.prototype.slice.call(arguments);e.unshift(c);a.notify.apply(a,e)})})}};