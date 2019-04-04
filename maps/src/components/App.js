import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import MainMap from "./MainMap";
import LeafletMap from "./LeafletMap";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ui container grid">
          <MainMap
            app_id="zAb9wgNk7o2spmyo5tHD"
            app_code="jdH7-AVXp8NwySqSpB-5Wg"
            lat="59.876515"
            lng="29.828084"
            zoom={13}
          />
          <LoginForm />
          <LeafletMap />
        </div>
      </div>
    );
  }
}

export default App;
