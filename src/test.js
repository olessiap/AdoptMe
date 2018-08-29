//constructor always take in props
//overrides the contstructor from react so must ass super
//have to add super(props) so React tracks the props
//define initial state
//default basic initial state
//rendered to the dom for the first time, now ready to do other stuff, AJAX requests
//petfinder.breed.list({ animal: "dog" }).then(console.log, console.error); // displays the API
//data varification bc api comes back as XML. Makes everything into an array
//checks if pet exists
//check if its an array bc if it returns 1 pet its an object, but 2 pets is an array
// else --> if don't find anything make pets an empty array.
