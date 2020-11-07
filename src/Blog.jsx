import React from 'react';
import Article from './Article';
import * as FooBar from './component/FooBar';
import Hoge from './component/Hoge';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    //ボタンがクリックされたいいねをカウントアップする
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({count: 0})
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }

  //公開状態を反転させる関数
  toglePublished = () => {
      this.setState({
          isPublished: !this.state.isPublished
      })
  };

  countUp = () => {
    this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <>
        <Article 
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.toglePublished()}
          count={this.state.count}
        />
        {/* <Article 
          title={"jsxの使い方"}
          order={5}
        />
        <Article 
          title={"環境構築をしてみよう"}
          order={6}
        /> */}

        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
  }
}

export default Blog