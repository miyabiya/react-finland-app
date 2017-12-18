import React from 'react'
import styled from 'styled-components/native'

import TalkCard from './TalkCard'
import { Colors } from '../Themes'

const FlatList = styled.FlatList`
  background-color: ${Colors.background}
`

const Separator = styled.View`
  margin: 5px;
  background-color: ${Colors.background}
`

export default class TalkListing extends React.Component {
  renderInterval ({item: { begin, end, sessions }}) {
    const session = sessions[0];
    return <TalkCard
      session={session}
      title={session.title}
      begin={begin}
      end={end}
    />
  }

  render () {
    const hasSessions = ({ sessions }) => sessions && sessions.length > 0
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <Separator />}
        data={this.props.data.filter(hasSessions)}
        renderItem={this.renderInterval}
      />
    )
  }
}
