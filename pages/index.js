// @flow

import React, { Component } from 'react';
import type {Node} from 'react'; // import type Node - for flow type checking

import Layout from 'components/layout/layout';

/* type checking Props object */
type Props = {
  children?: Node
}

class Homepage extends Component<Props> {
  render() {
    return (
      <Layout>
        <p> Hello World </p>
        <img src="../static/img/timothy_doggo.jpg" />
      </Layout>
    );
  }
}

export default Homepage;
