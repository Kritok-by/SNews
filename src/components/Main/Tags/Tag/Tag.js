import React from 'react'
import Chip from '@material-ui/core/Chip';
import { useDispatch } from 'react-redux';
import { currentUrl, hashTag, numberTab } from '../../../../redux/Actions';



export const Tag = ({data}) => {
  const dispatch = useDispatch(),
        url = `https://conduit.productionready.io/api/articles?tag=${data}&limit=10&offset=`

  const handleClick = () => {
    dispatch(hashTag(data))
    dispatch(numberTab(2));
    dispatch(currentUrl(url))
  };
  return(
    <Chip
        label={`#${data}`}
        onClick={handleClick}
        variant="outlined"
      />
  )
};
