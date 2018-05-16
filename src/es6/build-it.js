let isVisible = false;

const app = {
  title: 'Visible Toggle'
};
const appRoot = document.querySelector('#app');

const showText = () => {
  isVisible = !isVisible; //super sprawa do robienia przełączników ZAPAMIĘTAJ
  renderApp();
};

const renderApp = ()=> {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showText}>
        {isVisible? 'Hide details': 'Show details'}
      </button>
      {isVisible && <p>Hi from the app!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}
renderApp();
