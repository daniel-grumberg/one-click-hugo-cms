import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "heading"])}</h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        <div className="bg-off-white pv4">
            <div class="center mb3 ph3">
                <blockquote class="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
                    <p class="f4 mb0">“{entry.getIn(["data", "president", "quote"])}”</p>
                    <cite class="tr db grey-3">{entry.getIn(["data", "president", "author"])}</cite>
                </blockquote>
            </div>
            <div className="tc">
              <a href="#" className="btn raise">See all stories</a>
            </div>
        </div>
    </div>
  }
}
