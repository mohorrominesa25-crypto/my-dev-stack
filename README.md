1.Name of my project: Development Stack
2.A little description: It is a responsive web app for exploring technologies and building a personalized developer stack.
3.Technology that you use:React.js,Tailwind CSS,TypeScript,React-Toastify,JSON ,Vite
4.features about my project: 1.You can add or remove stack items 2.Buttons are disable if the item is selected 3.json file used,no data size limitation

1.JSX: JSX lets us write HTML-like UI code inside JavaScript, making React components easier to create.
2.Props vs State: Props pass data from parent to child, while state stores and manages changing data inside a component.
3.useState: useState manages changing data; I used it to store and update the selected technology Stack.
4.useEffect: useEffect handles side effects, but in this project I used use() with a Promise instead of useEffect to load JSON data.
5.key: A unique key helps React identify and efficiently update each item in a .map() list.
6.Conditional rendering: It means showing different UI based on a condition; I used it to show an empty message when Stack.length === 0.
7.Parent-child data: A parent passes data through props, and a child can send data back using a callback function passed as a prop.