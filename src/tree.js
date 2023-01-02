export default {
  id: 0,
  child: [
    {
      id: 1,
      child: [
        {
          id: 3,
          child: [],
        },
        {
          id: 4,
          child: [],
        },
      ],
    },
    {
      id: 2,
      child: [
        {
          id: 5,
          child: [
            {
              id: 6,
              child: [],
            },
            {
              id: 7,
              child: [],
            },
            {
              id: 8,
              child: [],
            },
          ],
        },
        {
          id: 9,
          child: [],
        },
      ],
    },
  ],
};

const remove = (obj, source, target) => {
  for (let i = 0; i < obj.child.length; i++) {
    const childElem = obj.child[i];
    if (childElem.id === source && obj.id !== target) {
      let someArray = obj.child.filter((da) => da.id !== source);
      obj.child = someArray;
      obj.child.push(...childElem.child);
      return childElem;
    }
    const retData = remove(childElem, source, target);
    if (retData) return retData;
  }
};

const replace = (obj, target, targetObj) => {
  if (obj.id === target) {
    obj.child.push(targetObj);
    return true;
  }
  for (let i = 0; i < obj.child.length; i++) {
    const result = replace(obj.child[i], target, targetObj);
    if (result) {
      return true;
    }
  }
};

export const removeAndReplace = (obj, source, target) => {
  const removedObj = remove(obj, source, target);
  if (removedObj) {
    removedObj.child = [];
    replace(obj, target, removedObj);
  }

  return obj;
};
