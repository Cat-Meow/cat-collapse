import React, { Component } from 'react';
import Panel from 'rs-panel';
import '../assets/index.less'
import { Accordion, Collapse } from '../src/index.js';

export default class Example extends Component {
  state = {
    liveKey: 'A'
  }

  handleSelect(value, liveKey) {
    console.log('当前点击:' + value);
    console.log('当前选中了这些: ' + liveKey);
  }

  render() {
    return (
      <div>
        <Panel myStyle="info">
          <Accordion>
            <Collapse header="This is header">
              这是一个普通的面板
            </Collapse>
            <Collapse header="This is header 2">
              <Panel.Body>
                这是一个普通的面板
              </Panel.Body>
            </Collapse>
          </Accordion>
        </Panel>

        <Panel myStyle="info">
          <Accordion auto={true}>
            <Collapse header="This is header">
              自动折叠面板
            </Collapse>
            <Collapse header="This is header 2">
              自动折叠面板
            </Collapse>
          </Accordion>
        </Panel>

        <Panel myStyle="info">
          <Accordion liveKey={this.state.liveKey}>
            <Collapse header="this is header" eventKey="A">
              动态liveKey
            </Collapse>
            <Collapse header="this is header 2" eventKey="B">
              动态liveKey
            </Collapse>
          </Accordion>
        </Panel>

        <Panel myStyle="info">
          <Accordion onSelect={this::this.handleSelect}>
            <Collapse header="This is header" eventKey="A">
              绑定事件
            </Collapse>
            <Collapse header="This is header 2" eventKey="B">
              绑定事件
            </Collapse>
          </Accordion>
        </Panel>
      </div>
    );
  }
}
