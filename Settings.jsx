const React = require('react')
const { PureComponent } = React
const { dialog, getCurrentWindow } = require('electron').remote
const {
  SettingsOptionToggle: Toggle,
  SettingsOptionSelect: Select,
  SettingsOptionTitle: Title
} = require('elements')
const path = require('path')

module.exports = class Settings extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Toggle
          title='Enable Animations'
          plugin={this.props.plugin}
          lsNode='animations'
          defaultValue={false}
          onSave={() => this.props.plugin.updateTheme()}
        />
        <div>
          <div
            className='flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO'
            style={{
              flex: '1 1 auto'
            }}
            key='title'
          >
            <Title text='Guild Columns' />
          </div>
          <Select
            options={['1', '2', '3']}
            plugin={this.props.plugin}
            lsNode='width'
            defaultValue={'1'}
            onSave={() => this.props.plugin.updateTheme()}
          />
        </div>
      </div>
    )
  }
}
