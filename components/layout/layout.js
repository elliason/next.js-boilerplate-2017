import React from 'react';

import style from 'styles/styles.scss';

const Layout = (props) => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: style}}/>

      {props.children}
    </div>
  );
};

export default Layout;
