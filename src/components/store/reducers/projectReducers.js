const initState = {
  projects: [
    {
      id: "1",
      title: "React-redux",
      content: "read on the react redux library, store and its reducers"
    },
    {
      id: "2",
      title: "Routing",
      content: "read on the react router dom and how to use all child elements"
    },
    {
      id: "3",
      title: "Express js",
      content: "read on the amazing web framework incoporating node and mongodb"
    }
  ]
};

const projectReducers = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};
export default projectReducers;
