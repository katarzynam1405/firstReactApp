const app = {
  title: 'Indecisious App',
  subtitle: 'Very firs react app',
  options: []
}

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.options.value;

  if(option) {
    app.options.push(option);
    e.target.elements.options.value = '';
    renderForm();
  }
};

const clearList = () => {
  app.options = [];
  renderForm();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderForm = () => {
  var template = (
    <div>
      <h1>{app.title} </h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here your option' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <ol>
        {app.options.map((option)=>{
          return <li key={option}> {option} </li>
        })}
      </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="options"/>
          <button>Add Option</button>
          <button onClick={clearList}>Remove All</button>
        </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderForm();
