# React?

![react_logo](img/react_logo.png)

You can think of React as the "view" in an application.  According to Facebook, it's: "A Javascript library for building user interfaces".  In a React application, a developer can think of their site as a series of "components" (we'll get into these a bit later) that allow you to break down your site into small pieces.  In other words, your site is like Frankenstein, a bunch of different components mashed together to make your very own monster.  This is extremely useful when a problem starts to get out of hand.  React allows the developer to easily break their problem down into smaller, more digestible pieces.  If you don't like the Frankenstein example, you can think of React like Lego pieces.  This is what React calls component-driven development.  More to come on that.


This isn't too mind-blowing.  There are a lot of tools that do similar things.  The reason that this doesn't feel like such a game-changer is because React is mainly a concept and secondarily, a library.


## React and the virtual-DOM

React uses the virtual DOM instead of the normal DOM, because the normal DOM does not perform well on complex UI applications.  Think about a modern social network like Facebook or Twitter.  After exploring the page for a few seconds, the user will have tens of thousands of nodes in the DOM.  Interacting with them efficiently becomes a huge issue.  Thus the virtual DOM came into existence to solve these problems.


The virtual DOM simply creates an abstract version of the current DOM.  There's no need to touch the DOM directly. We are essentially creating a light weight copy of our DOM. We can change the virtual DOM as we please and then save our changes to the real DOM.  When we save the virtual DOM, we will compare it to the real DOM and re-render only the differences between the two.  Although using the virtual DOM surfaces two issue:


1) **When** should I re-render the DOM?


2) **How** do I re-render the DOM efficiently?


The simple answer to the above questions is: When I observe that the data is dirty, and Using a virtual DOM to generate a real DOM patch, respectively.

### When

In React, we use the observer model (re-render as changes occur) rather than dirty checking (re-rendering every time interval if changes have been made).  React doesn't need to calculate what has changed, it already knows, because it has a listener set up that will be signaled when the state has changed. Observables are much faster because we don't need to continuously poll the DOM and all its elements recursively (dirty checking), we are just signaled when a change has been made.


### How

In React, the virtual DOM is used for efficient re-rendering of the DOM. React's diffing algorithm compares the virtual DOM 1 to virtual DOM 2.  These two virtual DOM trees are passed to React's diffing function, and return a stream of the DOM operations. This diffing of the DOM's is using dirty checking.  The algorithm figures out what needs updating in the DOM, not what data has changed. If we pair this diffing with our observables, we are able to re-render the tree only on state changes.  This prevents unnecessary re-renderings of the DOM.  In short, if nothing has changed, don't do anything.  This is nice because we can now write our code as if we were re-rendering the entire DOM every time, rather than keeping track of the DOM's previous state.

![react-diffing](img/react-diffing.png)


## According to Facebook:


"We built React to solve one problem: building large applications with data that changes over time."

