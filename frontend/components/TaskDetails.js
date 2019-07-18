import React, { Component } from 'react';
import styled from 'styled-components';

const DetailsList = styled.ul`
  background: #fff;
  border: 1px solid #ddd;
  color: ${props => props.theme.primary};
  font-size: 2rem;
  border-radius: 3px;
  width: 90%;
  list-style: none;
  padding: 2rem;
  padding-left: 6rem;
  li {
    display: grid;
    grid-template-columns: 20% 80%;
    p {
      margin: 1rem 0;
    }
  }
`;

class TaskDetails extends Component {
  render() {
    return (
      <DetailsList>
        {this.props.segments.map(segment => (
          <li key={segment._id}>
            <p>
              {segment.units}{' '}
              {segment.units == 1 && this.props.unit.slice(-1) == 's'
                ? this.props.unit.slice(0, -1)
                : this.props.unit}
            </p>
            <p>{segment.description}</p>
          </li>
        ))}
      </DetailsList>
    );
  }
}

export default TaskDetails;
