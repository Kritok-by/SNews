import React from 'react'
import {useAsync} from 'react-async'
// import getData from './getData'

const link = 'https://conduit.productionready.io/api/tags'
const getData= async (link) =>{
  return await fetch(link)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
};

function TagsService() {
  const { data, error, isLoading } = useAsync({ promiseFn: getData(link) })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
  return (
    <ul className="all-tags">
      {data.tags.map((elem, index)=><li key={index}>{elem.trim()}</li>)}
    </ul>
  );
}

export default TagsService;
