1- the conoclusion is setIntermediate sometimes is faster than setTimeout, since setIntermediate is registered on the check phase which run immediately after I/O callbacks; however, setTimeOut is registered in the timer quesue and hence it 'does not gurantee' to execute immediately.

2- Use setImmediate if you want to queue the function behind whatever I/O event callbacks that are already in the event queue. Use process.nextTick to effectively queue the function at the head of the event queue so that it executes immediately after the current function completes.

3- built-in Node Modules:
	- fs	To handle the file system
	- http	To make Node.js act as an HTTP server
	- https	To make Node.js act as an HTTPS server.
	- os	Provides information about the operation system
	- timers	To execute a function after a given number of milliseconds
	- v8	To access information about V8 (the JavaScript engine)
	- crypto	To handle OpenSSL cryptographic functions
	- events	To handle events
	- net	To create servers and clients
	- querystring	To handle URL query strings