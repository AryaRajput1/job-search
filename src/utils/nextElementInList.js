const nextElementInList =(list,value)=>{
    const currentActionIndex =
      (list.indexOf(value) + 1) % list.length;
     return list[currentActionIndex];
}

export default  nextElementInList