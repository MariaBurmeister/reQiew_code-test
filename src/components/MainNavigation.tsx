import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SkipNavLink } from "./accessibility";
import { Icon } from '@iconify/react';

import './MainNavigation.scss';
import { useState } from "react";
import { Button } from "./Button";
import { DropdownSelect } from "./DropdownSelect";

export const MainNavigation = () => {
  const isLargeScreen = window.innerWidth > 810;

  const [collapse, setCollapse] = useState(isLargeScreen);

  const hideLabel = collapse || !isLargeScreen;


  const toggleCollapse = () => {
    setCollapse((prev) => !prev), console.log(collapse);
  }

  return (
    <section className={`nav${collapse ? ' icon-only' : ''}`}>
        <SkipNavLink/>
        <Link className="logo-link" aria-hidden aria-label='home-page' to="/">
          <Logo semanticTag={hideLabel ? 'img' : 'h1'} variant='main-nav'/>
        </Link>
        <Navbar variant="main-nav" navName="primary-navigation" >
            <Navbar.Item iconOnly={hideLabel} iconBefore="carbon:chart-rose" label='Aspect Scores' to='/aspect-scores'/>
            <Navbar.Item iconOnly={hideLabel} iconBefore="carbon:compare" label='Benchmark' to='/benchmark'/>
            <Navbar.Item iconOnly={hideLabel} iconBefore="carbon:growth" label='Time Series' to='/time-series'/>
            <Navbar.Item iconOnly={hideLabel} iconBefore="carbon:growth" label='Driver Analysis' to='/driver-analysis'/>
            <Navbar.Item iconOnly={hideLabel} iconBefore="carbon:growth" label='Aspect Details' to='/aspect-details'/>
        </Navbar>

        <DropdownSelect label="Change Dashboard" variant="main-nav" iconBefore="carbon:dashboard" iconOnly={collapse || !isLargeScreen} id="dashboard" >
          <option value="1">Dashboard One</option>
          <option value="2">Dashboard Two</option>
        </DropdownSelect>
        
        <Link className={`nav-item main-nav__link${collapse || !isLargeScreen? ' icon-only' : ''}`} aria-label='logout' to='/logout'>
          <Icon inline icon='carbon:logout' />
          {collapse || <span className={`mandatory-label ${collapse ? ' icon-only' : ''}`}>Logout</span>}
        </Link>

        {isLargeScreen && <Button 
          label={collapse ? 'Open Side Panel' : 'Close Side Panel'}
          variant="main-nav"
          iconOnly={collapse}
          iconBefore={collapse ? 'carbon:side-panel-open' : 'carbon:side-panel-close-filled' }
          onClick={toggleCollapse} 
        />}

    </section>
  );
}