# Lighthouse Labs | React: Class-Based Components

- [X] ES6 Classes
- [X] Functional Components
- [X] Class-Based Components
- [X] Props
- [X] State
- [X] Events
- [ ] Lifecycle Methods

## ES6 Classes

```
class myClass {
    constructor() {
        this.property = "value";
    }
}
```

## Functional Components

What you're used to! This is the modern way to create React apps, hooks are intended to be the future. You've experienced first-hand how powerful custom hooks are, and how much they can assist in organization and slimming down component code. Newer companies, or very progressive ones, will have adopted this way of doing things.

## Class-Based Components

These are still supported, and very feature-full. They provide good functionality, and ensure critical methods all live inside of the component. The lifecycle is more clear and easy to poke at, and the structure will feel more natural for those that strive for an object-oriented approach to their problem-solving. Many businesses that haven't had a chance to update their approach, or their app is too far along to afford changing everything, continue to use this style of component. It isn't a wrong choice, and is still very common. It lends itself well to organizations and businesses that utilize TypeScript in their JavaScript stack.

## Props

Include `super()` in your component's `constructor()` method, and props will automatically be pulled in for your convenience. Props are accessed throughout the component via `this.props`. `this.props.children` can be used to grab any children components or content included inside of the component tags, should it be used in a non-self-closing fashion.

## State

State should still not be edited directly☺afterall, React needs to know when state is updated so that it can, well, react! Default state values should be added to the `this.state` object in the `constructor()` method. To update state, pass in an object with a matching (or new) property name and the new value to the `this.setState({yourStatePropertyName: "Your state value."})` method.

## Events

Watch out for the context of `this`, as its value changes depending on when and where JavaScript code is being run.

## Lifecycle Methods


