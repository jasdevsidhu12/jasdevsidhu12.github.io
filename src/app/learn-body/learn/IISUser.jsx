import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import Urls from "../learn-urls";

class IISUser extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, htmlData: [] };
    window.addEventListener('message',function(event) {
      console.log('received response:  ',event.data);
      if (event.data.hasOwnProperty('key')) {
        this.document.getElementById(event.data.key).height = `${event.data.height + 100}px`
      }
    },false);
  }
  async componentDidMount() {
    const htmlData = [];
    let count = 0;
    for (const url of Urls) {
      const response = await fetch(url);
      let html = await response.text();
      html = html.replace('<head>', `<head><script>window.onload = function() { console.log(document.body.scrollHeight); parent.postMessage({ key: 'iframe${count}', height: document.body.scrollHeight },window.origin)}</script> `)
      const iframe = document.createElement('iframe');
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('id', `iframe${count}`);
      iframe.setAttribute('srcdoc', html);
      htmlData.push(iframe.outerHTML);
      count++;
    }
    this.setState({ loading: false, htmlData: htmlData })
  }
  renderHTML() {
    const renderHTMLData = []
    this.state.htmlData.forEach((html, index) => {
      renderHTMLData.push(
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: html }}>
          </div>
          <Divider />
        </div>
      );
    });
    return renderHTMLData;
  }
  render() {
    if (this.state.loading) {
      return (<span>Loading ...</span>)
    } else {
      return (
        this.renderHTML()
      );
    }
  }
}

export default IISUser;
