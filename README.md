# React & WordPress
## A page populated by data from Wordpress and displayed in a React single page application.

![Final Frontier App Home Screen](http://i.imgur.com/2BRgURd.png)

As the Home component loads it uses componentWillMount to run an AJAX GET request before the page renders. 
The data returned from the request is stored in a data state object that had previously been declared in the constructor. 

An if/else statement in the component will render content from the returned JSON when this.state.data.length > 0, otherwise it will return the string "Loading".

This if/else also prevent 2 renders of the component, once as the page loads and again when this.setState is called as the AJAX finishes fetching.

In the render, I pass the data.content object through a function that strips the HTML tags.



Bugs;
- Needs to be run on localhost:3000 for the remote API to allow access 
