import React from 'react'
import styled from 'styled-components'
import * as actions from '../redux/actions/actions'
import { connect } from 'react-redux'

const Container = styled.div`
  width: calc(100% * (1/4) - 20px - 1px);
  min-width: 200px;

  margin: 10px 5px 10px 5px;
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  transition: all 0.75s ease-in-out;
  max-height: 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;

  &:hover {
    transition: all 0.75s ease-in-out;

    box-shadow: 0 10px 20px rgba(155, 197, 61, 0.29), 0 6px 6px rgba(155, 197, 61, 0.23);
  }
  @media (max-width: 920px) {
    width: calc(100% * (1/3) - 10px - 2px);
  }

  @media (max-width: 700px) {
    width: calc(100% * (1/2) - 10px - 2px);
  }
  @media (max-width: 500px) {
    width: calc(100% - 10px - 1px);
  }
`

const Name = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`

const Header = styled.div`
  align-items: center;
  padding: 16px 10px 16px 10px;
  transition: all 0.75s ease-in-out;
  color: white;
  background-color: rgba(155, 197, 61, 1);
  cursor: pointer;
`

export class AddRecipe extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.setAddModal('add')
  }

  render () {
    return (
      <Container onClick={this.handleClick}>
        <Header>
          <Name>
            <span>Add Recipe</span>
            <span>
              <i className='fa fa-plus' aria-hidden='false' />
            </span>
          </Name>
        </Header>
      </Container>
    )
  }
}
export default connect(null, actions)(AddRecipe)
