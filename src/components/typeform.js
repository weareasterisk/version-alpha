import React, {Component} from 'react';
import * as typeformEmbed from "@typeform/embed";

export default class SignupForm extends Component {
  componentDidMount() {
      const popup = typeformEmbed.makePopup(
        'https://architech-inc.typeform.com/to/irR6E0',
        {
          mode: 'drawer_left',
          drawerWidth: 9999,
          hideScrollbars: true,
          autoOpen: true,
          onSubmit: () => {popup.close()}
        }
      );
  }
  render() {
    return (
      <div className="typeform">

      </div>
    )
  }
}
