const obj = {
  name: 'Kate',
  getName() {
    return this.name;
  }
}
console.log(obj.getName());

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle= 'Do something';
    const options = ['Thing one', 'thing two', 'thing tree'];

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOptions/>
        <RemoveAll options={options}/>
      </div>
    )
  }
}

class Header extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      )
    }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}> What should I do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options are here</p>
        <ul>
          {this.props.options.map((option)=> {
            return <Option key={option} optionText={option} />
          })
        }
        </ul>
        <Option/>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>
        {this.props.optionText}
      </li>
    )
  }
}

class AddOptions extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.options.value;
    if(option) { alert(option) }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="options"/>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

class RemoveAll extends React.Component {
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header/>
    <Action/>
    <Options/>
    <AddOptions/>
  </div>
)
ReactDOM.render(<IndecisionApp/>, document.querySelector('#app'));
