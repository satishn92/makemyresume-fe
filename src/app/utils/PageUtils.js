export function nonCoreMethods(method) {
  // If a method is a core method, then do not bind it again.
  let whiteList = [
    "constructor",
    "render",
    "componentWillMount",
    "componentDidMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
    "shouldComponentUpdate",
    "componentWillUnmount"
  ];
  return whiteList.indexOf(method) < 0;
};
