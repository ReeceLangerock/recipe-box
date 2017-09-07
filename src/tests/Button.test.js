import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, find, render, simulate } from 'enzyme'
import enzymeSerializer from 'enzyme-to-json/serializer'
import { spy } from 'sinon'
import { Button } from './../components/Button'
import configureStore from 'redux-mock-store'

const initialState = {}
let mockStore = configureStore(initialState)
expect.addSnapshotSerializer(enzymeSerializer)
describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button store={mockStore} />, div)
  })

  let component
  let props

  beforeEach(() => {
    props = {
      buttonText: 'Close',
      buttonMethod: 'closeModal'
    }
    component = mount(<Button {...props} />)
  })

  it('contains correct button text', () => {
    expect(component.text()).toEqual('Close')
  })

  it('receives a button method', () => {
    expect(component.props().buttonMethod).toEqual('closeModal')
  })

  // it("handles onClick successfully", () => {
  //   expect(handleClick).not.toHaveBeenCalled();
  //   component.find("button").simulate("click");
  //   expect(handleClick).toHaveBeenCalled();
  // });

  it('matches snapshot', () => {
    const comp = shallow(<Button {...props} />)
    expect(comp).toMatchSnapshot()
  })
})
