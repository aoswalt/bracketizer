import React, { PureComponent } from 'react'
import EntryField from './EntryField'

class SignupForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      ...props.formState,
    }
  }

  onChangeUsername = (username) => this.setState((state) => ({ username }))
  onChangeEmail = (email) => this.setState((state) => ({ email }))

  render = () => (
    <div>
      <EntryField
        label='Username'
        onChange={this.onChangeUsername}
        value={this.state.username}
      />
      <EntryField
        label='Email'
        onChange={this.onChangeEmail}
        value={this.state.email}
      />
    </div>
  )
}

export default SignupForm
