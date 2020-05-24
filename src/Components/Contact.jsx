import React, { Component } from 'react';
import './contact.scss';
import * as emailjs from 'emailjs-com';


export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      content: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
  event.preventDefault()
  const { email, content } = this.state

this.props.history.push('/Thankyou');

  let templateParams = {
from_name: email,
to_name: 'Joseph Reilly',
content: content,

}
emailjs.send(
'gmail',
'template_fVA1cmlw',
 templateParams,
'user_RJSCiEzvLvsb400VCXzKK'
)
this.resetForm()
  }

resetForm = () => {
  this.setState ({
    name: '',
    email: '',
    content: '',
  })
}


  render() {
    return(
      <div className='sign-in'>
      <div className='group'>
        <h1 className="email-title">  <span role='img'  aria-label='emoji'>&#129310; </span> <span role='img'  aria-label='emoji'> &#128018;</span >Send me an email <span role='img'  aria-label='emoji'>&#128018; <span role='img' aria-label='emoji'>&#129310;</span> </span></h1>
        <form onSubmit={this.handleSubmit}>
          <label className='form-input-label'>Name</label>
        <input
         className="form-input"
         name="name"
         type="name"
         value={this.state.name}
         onChange={this.handleChange}
         label="name"
         required />
       <label className='form-input-label'>Email</label>

        <input
         className="form-input"
         name="email"
         type="email"
         value={this.state.email}
         onChange={this.handleChange}
         label="email"
         required />
       <label className='form-input-label'>Message</label>

       <input
         className="form-input"
         name="content"
         type= "content"
         value={this.state.content}
         onChange={this.handleChange}
         label="content"
         required />
       <div >
         <button className='buttons' type="submit"> Send </button>

       </div>

        </form>

      </div>
    </div>
    )
  }

}
