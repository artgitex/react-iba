import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components';

const StyledSpinner = styled.div`
  margin: 10px;
  padding: 15px;
  width: 400px;
  height: 300px;  
  display: flex;
  align-items: center; 
  justify-content: center;
`;

const withLoadingDelay = (WrappedComponent) => {
    class HOC extends React.Component {
      state = {
        isLoading: true
      };

      componentDidMount() {        
        setTimeout(() => {this.setState({ isLoading: false })}, 2000);
      };

      render() {        
        if (!this.state.isLoading) {
            return (<WrappedComponent {...this.props} />);    
        } else {
            return (
                <StyledSpinner>
                  <ClipLoader          
                    size={50}          
                    color={"#61DBFB"}
                    loading={true} />
                </StyledSpinner>)
        }
      }
    }      
    return HOC;
  };

export default withLoadingDelay;