
## Problem:
We add a couple of onClick event handlers — the first one to the "Outer-Div" and the second one to the "Inner-Div". The idea is that when the area of the "Outer-Div" is clicked, the box should change the color, when the "Inner-Div" itself is clicked, the "Inner-Div" should also change the color.

But there's a problem — currently, when you click the "Inner-Div" it change the color, but it causes the "Outer-Div" to also change the color at the same time. This is because the "Inner-Div" is inside the "Outer-Div" — it is part of it — so clicking on the "Inner-Div" actually runs both the above event handlers.


## In the bubbling phase:
> The browser checks to see if the element that was actually clicked on has an onclick event handler registered on it in the bubbling phase, and runs it if so. 

> Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the <html> element.

## In tis example:
>It finds the innerDiv.onclick... handler and runs it, so the InnerDiv's color first change.

>It then finds the outerDiv.onclick... handler and runs it, so the InnerDiv's color is change as well.

## Fixing the problem with stopPropagation()
This is annoying behavior, but there is a way to fix it! The standard event object has a function available on it called stopPropagation(), which when invoked on a handler's event object makes it so that handler is run, but the event doesn't bubble any further up the chain, so no more handlers will be run.

We can, therefore, fix our current problem by changing the second handler function in the previous code block to this:

innerDiv = (e) =>{
    e.stopPropagation();
    return (this.state.innerDiv==="innerClicked")?this.setState({ innerDiv:""})
    :this.setState({ innerDiv:"innerClicked"})
}
