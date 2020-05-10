import React from "react";

const Golem = (task) => (Ready, Loading, Err) => {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind();
      this.state = { component: Loading, props: undefined };
    }

    componentDidMount() {
      //task.addChangeListener(this.handleChange);
      task.then(
        (res) => {
          this.setState({ component: Ready, props: res });
        },
        (rej) => {
          this.setState({ component: Err, props: rej });
        }
      );
    }

    handleChange() {
      this.setState(State);
    }

    render() {
      const Component = this.state.component;
      return <Component {...this.state.props} />;
    }
  };
};

export default Golem;
