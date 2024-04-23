import React, { useState, useSyncExternalStore, useTransition } from 'react'
import axios from 'axios'

function AdminAddEvents() {
  const [ename, setEname] = useState("")

  const [eprice, setEprice] = useState("")

  const [edate, setEdate] = useState("")

  const [eduration, setEduration] = useState("")

  const [edesc, setEdesc] = useState("")
  const [ehost, setEhost] = useState("")
  const [isSpecial , setIsSpecial] = useState(false);
  
  function AddEventHandler ()
  {
    axios.post('http://localhost:5100/admin/addEvent' , {
      ename , eprice , edate , eduration , edesc , ehost , isSpecial : false
    }).then((res1) => {
      console.log("res1 is : " ,res1);
    })
  }

  return (
    <div className='p-3 m-3 mt-5 '>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Event Name</label>
        <div class="col-sm-10">
          <input type="email"  onChange={(e) => {
            setEname(e.target.value)
        }} class="form-control" id="inputEmail3" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label"  >Host Name</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3"onChange={(e) => {
            setEhost(e.target.value)
        }} />
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputPassword3"  class="col-sm-2 col-form-label">Event Price</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3"  onChange={(e) => {
            setEprice(e.target.value)
        }} />
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputPassword3"   class="col-sm-2 col-form-label">Event Duration</label>
        <div class="col-sm-10">
          <input type="password"  onChange={(e) => {
            setEduration(e.target.value)
        }} class="form-control" id="inputPassword3" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Event Date</label>
        <div class="col-sm-10">
          <input type="password"  onChange={(e) => {
            setEdate(e.target.value)
        }}  class="form-control" id="inputPassword3" />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Event Description : </label>
        <textarea class="form-control"  onChange={(e) => {
            setEdesc(e.target.value)
        }}  id="exampleFormControlTextarea1" rows="2"></textarea>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Special </legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio"  on={(e) => {
              console.log("input of radio buttion is " , e);
            }} name="gridRadios" id="gridRadios1" value="option1" checked />
            <label   class="form-check-label" for="gridRadios1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" onChange={(e) => {
              console.log("input of radio buttion is " , e);

            }} type="radio" name="gridRadios" id="gridRadios2" value="option2" />
            <label class="form-check-label" for="gridRadios2">
              No
            </label>
          </div>
        </div>
      </fieldset>
      <div class="row mb-3">

      </div>
      <button class="btn btn-primary flex justify-center" onClick={AddEventHandler}>Add Event</button>

    </div>
  )
}

export default AdminAddEvents
