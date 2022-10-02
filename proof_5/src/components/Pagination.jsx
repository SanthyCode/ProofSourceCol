import axios from 'axios'
import React from 'react'

const Pagination = ({setIds, ids}) => {

console.log(ids.info.next)

    const next = () => {
        axios.get(ids.info.next)
            .then(res => setIds(res.data))
            .catch(err => console.log(err))
    }

    const prev = () => {
        if(!ids.prev) return

        axios.get(ids.info.prev)
            .then(res => setIds(res.data))
            .catch(err => console.log(err))
    }

  return (
    <div className='btn_footer'>
        <button className='btn' onClick={prev}>«</button>
        <button className='btn' onClick={next}>»</button>

    </div>
  )
}

export default Pagination