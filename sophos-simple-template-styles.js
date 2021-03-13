import { css } from 'lit-element'

export default css`
  #main-container[ template-style = "full-nav" ] {
    display: var(--sophos-simple-template-main-container-template-style-full-nav-display, flex);
    justify-content: var(--sophos-simple-template-main-container-template-style-full-nav-justify-content, space-around);
    align-items: var(--sophos-simple-template-main-container-template-style-full-nav-align-items, center);
    width: var(--sophos-simple-template-main-container-template-style-full-nav-width, 99%);
    height: var(--sophos-simple-template-main-container-template-style-full-nav-height, 97vh);
    border-style: var(--sophos-simple-template-main-container-template-style-full-nav-border-style, solid);
  }
  
  #main-container[ template-style = "full-header" ] {
    display: var(--sophos-simple-template-main-container-template-style-full-header-display, inline-flex);
    flex-direction: column;
    width: var(--sophos-simple-template-main-container-template-style-full-header-width, 99%);
    height: var(--sophos-simple-template-main-container-template-style-full-header-height, 97vh);
    border-style: var(--sophos-simple-template-main-container-template-style-full-header-border-style, solid);
  }

  #header {
    display: var(--sophos-simple-template-header-display, inline-flex);
    justify-content: var(--sophos-simple-template-header-justify-content, space-around);
    align-items: var(--sophos-simple-template-header-align-items, center);
    flex-direction: var(--sophos-simple-template-header-flex-direction, column);
    flex-wrap: var(--sophos-simple-template-header-flex-wrap, wrap);
    width: var(--sophos-simple-template-header-width, 100%);
    height: var(--sophos-simple-template-header-height, 20%);
    border-style: var(--sophos-simple-template-header-border-style, solid);
  }

  #nav-bar {
    display: var(--sophos-simple-template-nav-bar-display, inline-flex);
    justify-content: var(--sophos-simple-template-nav-bar-justify-content, space-around);
    align-items: var(--sophos-simple-template-nav-bar-align-items, center);
    flex-direction: var(--sophos-simple-template-nav-bar-flex-direction, column);
    flex-wrap: var(--sophos-simple-template-nav-bar-flex-wrap, wrap);
    width: var(--sophos-simple-template-nav-bar-width, 20%);
    height: var(--sophos-simple-template-nav-bar-height, 100%);
    border-style: var(--sophos-simple-template-nav-bar-border-style, solid);
  }

  #main-section[ template-style = "full-nav" ] {
    display: var(--sophos-simple-template-main-section-template-style-full-nav-display, inline-flex);
    flex-direction: var(--sophos-simple-template-main-section-template-style-full-nav-flex-direction, column);
    width: var(--sophos-simple-template-main-section-template-style-full-nav-width, 80%);
    height: var(--sophos-simple-template-main-section-template-style-full-nav-height, 100%);
    border-style: var(--sophos-simple-template-main-section-template-style-full-nav-border-style, solid);
  }

  #main-section[ template-style = "full-header" ] {
    display: var(--sophos-simple-template-main-section-template-style-full-header-display, flex);
    width: var(--sophos-simple-template-main-section-template-style-full-header-width, 100%);
    height: var(--sophos-simple-template-main-section-template-style-full-header-height, 80%);
    border-style: var(--sophos-simple-template-main-section-template-style-full-header-border-style, solid);
  }

  #main-view[ template-style = "full-nav" ] {
    display: var(--sophos-simple-template-main-view-template-style-full-nav-display, inline-flex);
    justify-content: var(--sophos-simple-template-main-view-template-style-full-nav-justify-content, space-around);
    align-items: var(--sophos-simple-template-main-view-template-style-full-nav-align-items, center);
    flex-direction: var(--sophos-simple-template-main-view-template-style-full-nav-flex-direction, column);
    flex-wrap: var(--sophos-simple-template-main-view-template-style-full-nav-flex-wrap, wrap);
    width: var(--sophos-simple-template-main-view-template-style-full-nav-width, 100%);
    height: var(--sophos-simple-template-main-view-template-style-full-nav-height, 80%);
    border-style: var(--sophos-simple-template-main-view-template-style-full-nav-border-style, solid);
  }

  #main-view[ template-style = "full-header" ] {
    display: var(--sophos-simple-template-main-view-template-style-full-header-display, inline-flex);
    justify-content: var(--sophos-simple-template-main-view-template-style-full-header-justify-content, space-around);
    align-items: var(--sophos-simple-template-main-view-template-style-full-header-align-items, center);
    flex-direction: var(--sophos-simple-template-main-view-template-style-full-header-flex-direction, column);
    flex-wrap: var(--sophos-simple-template-main-view-template-style-full-header-flex-wrap, wrap);
    width: var(--sophos-simple-template-main-view-template-style-full-header-width, 80%);
    height: var(--sophos-simple-template-main-view-template-style-full-header-height, 100%);
    border-style: var(--sophos-simple-template-main-view-template-style-full-header-border-style, solid);
  }

  #main-view-container {
    display: var(--sophos-simple-template-main-view-container-display,flex);
    width: var(--sophos-simple-template-main-view-container-width,100%);
    height: var(--sophos-simple-template-main-view-container-height,100%);
    justify-content: var(--sophos-simple-template-main-view-container-justify-content,space-around);
    flex-grow: var(--sophos-simple-template-main-view-container-flex-grow,2);
    overflow: var(--sophos-simple-template-main-view-container-overflow, hidden);
    overflow-y: var(--sophos-simple-template-main-view-container-overflow-y, scroll);
  }

  #header-container {
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    display: inline-flex;
  }
`;