What problem does the context API help solve?

---It lets you manage state within child components much easier

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

---reducers are statful logic functions, the actions act like IDs used for reducer use. the store just ---holds them all

What is the difference between Application state and Component state? When would be a good time to use one over the other?

---component state is kind like function scope and application state is kinda like global scope. If I ---can get away with only using component scope I will but sometimes state has to be passed between ---multiple components and at that point it becomes Application state.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

---it's middleware that lets you call action creators that return a function opposed to just
---action object.

What is your favorite state management system you've learned and this sprint? Please explain why!

---Context. I like it because it's light weight. theres more getting "used to" with redux and all the ---boiler plate bothers me. If we are talking about any statemanagement its Recoil.