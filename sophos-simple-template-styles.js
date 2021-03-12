import { css } from 'lit-element'

export default css`
  #main-container[ template-style = "full-nav" ] {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 98vh;
    border-style: solid;
  }
  
  #main-container[ template-style = "full-header" ] {
    display: block;
    width: 100%;
    height: 98vh;
    border-style: solid;
  }

  #header {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 20%;
    border-style: solid;
  }

  #nav-bar {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 20%;
    height: 100%;
    border-style: solid;
  }

  #main-section[ template-style = "full-nav" ] {
    width: 80%;
    height: 100%;
    border-style: solid;
  }

  #main-section[ template-style = "full-header" ] {
    display: flex;
    width: 100%;
    height: 100%;
    border-style: solid;
  }

  #main-view[ template-style = "full-nav" ] {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
    border-style: solid;
  }

  #main-view[ template-style = "full-header" ] {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border-style: solid;
  }
`;