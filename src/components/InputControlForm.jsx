import React from 'react'
import { IMaskInput } from 'react-imask'


const ContactNumberMask = '+{000}(0)000-000-000'
const EmailAddressMask = /^\S*@?\S*$/


export default function InputControlForm() {
  return (
    <div className="container mt-5">
      <form>
        <h2>React Input Control Pattern Masking Example</h2>
        <div className="form-group mb-3">
          <label className="mb-1">Phone Mask:</label>
          <IMaskInput
            className="form-control"
            mask={ContactNumberMask}
            placeholder="+233(0)559-802-618"
            onAccept={(value, mask) => console.log(value, mask)}
            value=""
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-1">Range Number Mask:</label>
          <IMaskInput
            className="form-control"
            mask={Number}
            placeholder="Number 80 - 1000"
            min={80}
            max={1000}
            onAccept={(value, mask) => console.log(value, mask)}
            value=""
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-1">Date Mask:</label>
          <IMaskInput
            className="form-control"
            mask={Date}
            placeholder="Date"
            min={new Date(2015, 0, 1)}
            max={new Date(2025, 0, 1)}
            onAccept={(value, mask) => console.log(value, mask)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-1">Email Mask:</label>
          <IMaskInput
            className="form-control"
            mask={EmailAddressMask}
            placeholder="Email"
            onAccept={(value, mask) => console.log(value, mask)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}