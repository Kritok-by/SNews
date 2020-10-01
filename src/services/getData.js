 const getData= async (link) =>{
  return await fetch(link)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
};

export default getData;
