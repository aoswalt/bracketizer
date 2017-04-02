import React from 'react'

const update = (updateFunc) => (e) => e.target && updateFunc(e.target.value)

export default ({ label, onChange, value }) => (
  <div>
    <span>{label}:</span>
    <input
      type='text'
      onChange={update(onChange)}
      value={value}
    />
  </div>
)
