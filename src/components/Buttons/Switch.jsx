const Switch = ({ pic1, pic2, state }) => {
  return (
    <div className="devtool language-switch" onClick={state.func}>
      <div
        className={`devtool language-switch-toggle ${
          state.state === state.value.on && "switched"
        }`}>
        {state.state === state.value.on ? (
          <img src={pic2} alt="Drapeau français" className="devtool flag" />
        ) : (
          <img src={pic1} alt="English flag" className="devtool flag" />
        )}
      </div>
    </div>
  );
};

export { Switch };
